import asyncio
import datetime
import logging
import os
import shutil
from contextlib import asynccontextmanager
from typing import Optional, List, Dict, Any
from fastapi import FastAPI, HTTPException, status, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from mangum import Mangum
from arq.connections import create_pool, ArqRedis
import httpx
from app.config import settings
from app.models import (
    JobIn,
    JobEnqueueResponse,
    JobDetailResponse,
    PricingRequest,
    PricingBreakdown,
    ChatRequest,
    ChatResponse,
    PrintReadyRequest,
    CreateOrderRequest,
    VerifyPaymentRequest,
    RejectJobRequest,
)
from app.dynamodb_client import DynamoDBClient
from app.bedrock_agent import BedrockPrintAgent, get_bedrock_agent
from app.pricing import calculate_hyderabad_price
from app.session_store import session_store
from app.s3_client import s3_client
from app.customizations import customizations_manager, StoreCustomizations
from app.audit_logger import audit_logger
import io
import time

_jobs_cache = {"data": None, "timestamp": 0.0}
_analytics_cache = {"data": None, "timestamp": 0.0}
_CACHE_TTL = 8.0

def invalidate_jobs_cache():
    _jobs_cache["timestamp"] = 0.0
    _analytics_cache["timestamp"] = 0.0


logger = logging.getLogger("print_queue_service.api")

# Ensure uploads directory exists
os.makedirs("uploads", exist_ok=True)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Manage lifecycle resources (ElastiCache / Redis ARQ pool and DynamoDB check)."""
    logger.info("Starting up EasePrint AWS-Native Backend...")

    # 1. Connect to ElastiCache / Redis ARQ pool
    try:
        app.state.arq_pool = await create_pool(settings.redis_settings)
        logger.info("Connected to ARQ Redis / ElastiCache pool successfully.")
    except Exception as exc:
        logger.error(f"Failed to connect to Redis pool: {exc}")
        app.state.arq_pool = None

    # 2. Verify / provision DynamoDB table
    try:
        dynamo = DynamoDBClient()
        await dynamo.ensure_table_exists()
    except Exception as exc:
        logger.warning(f"Could not auto-provision DynamoDB table: {exc}")

    yield

    logger.info("Shutting down EasePrint Backend...")
    if hasattr(app.state, "arq_pool") and app.state.arq_pool:
        await app.state.arq_pool.close()
        logger.info("Closed ARQ Redis pool.")


app = FastAPI(
    title="EasePrint Cloud Services",
    description="AWS-Native Print Queue Service powered by Bedrock, ElastiCache, DynamoDB, S3, and ARQ",
    version="2.0.0",
    lifespan=lifespan,
)

# Enable CORS for Web Student Portal and Staff Dashboard
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from fastapi.responses import FileResponse

# Mount local uploads for preview/download
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

# Mount React frontend dist if built
if os.path.exists("frontend/dist/assets"):
    app.mount("/assets", StaticFiles(directory="frontend/dist/assets"), name="assets")

@app.get("/", include_in_schema=False)
@app.get("/student", include_in_schema=False)
@app.get("/staff", include_in_schema=False)
async def serve_index():
    if os.path.exists("frontend/dist/index.html"):
        return FileResponse("frontend/dist/index.html")
    return {"message": "EasePrint API active. Run frontend on port 3000 or build with npm run build."}


@app.get("/health", tags=["Health"])
async def health_check():
    """Healthcheck verifying ElastiCache / Redis, DynamoDB, and Bedrock status."""
    redis_connected = False
    if hasattr(app.state, "arq_pool") and app.state.arq_pool:
        try:
            await app.state.arq_pool.ping()
            redis_connected = True
        except Exception:
            redis_connected = False

    return {
        "status": "healthy",
        "service": "EasePrint-AWS-Backend",
        "redis_connected": redis_connected,
        "database": "Amazon DynamoDB",
        "table": settings.DYNAMODB_TABLE_NAME,
        "storage": "Amazon S3",
        "bucket": settings.S3_BUCKET_NAME,
        "ai_engine": "Amazon Bedrock (Claude 3.5 Sonnet)",
        "model_id": settings.BEDROCK_MODEL_ID,
    }


@app.post(
    "/pricing/calculate",
    response_model=PricingBreakdown,
    summary="Instant Hyderabad Print Pricing Calculator",
    tags=["Pricing"],
)
async def calculate_price(req: PricingRequest):
    """Calculate instant price estimate using dynamic Hyderabad campus Xerox rates."""
    config = await customizations_manager.get_customizations()
    custom_rates = config.pricing.model_dump()
    return calculate_hyderabad_price(
        pages=req.pages,
        copies=req.copies,
        color_mode=req.color_mode,
        sides=req.sides,
        binding=req.binding,
        paper_type=req.paper_type,
        custom_rates=custom_rates,
    )


@app.get("/customizations", tags=["Customizations"])
async def get_store_customizations():
    """Returns active store customizations, business context, knowledge base, and pricing matrix."""
    return await customizations_manager.get_customizations()


@app.post("/customizations", tags=["Customizations"])
async def update_store_customizations(config: StoreCustomizations):
    """Updates active store pricing, business context, and custom rules in DynamoDB and local storage."""
    config.last_updated = datetime.datetime.now(datetime.timezone.utc).isoformat()
    return await customizations_manager.save_customizations(config)


@app.post("/customizations/upload-knowledge", tags=["Customizations"])
async def upload_knowledge_file(file: UploadFile = File(...)):
    """Uploads a PDF or text file to extract knowledge and enrich Bedrock's RAG context."""
    content_bytes = await file.read()
    extracted_text = ""
    filename = file.filename.lower()

    if filename.endswith(".pdf"):
        from pypdf import PdfReader
        try:
            reader = PdfReader(io.BytesIO(content_bytes))
            for p in reader.pages:
                extracted_text += (p.extract_text() or "") + "\n"
        except Exception as e:
            extracted_text = f"Could not extract PDF text: {e}"
    else:
        try:
            extracted_text = content_bytes.decode("utf-8", errors="ignore")
        except Exception as e:
            extracted_text = f"Could not decode text: {e}"

    cleaned_text = extracted_text.strip()[:4000]

    config = await customizations_manager.get_customizations()
    doc_entry = {
        "name": file.filename,
        "content": cleaned_text,
        "uploaded_at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "size_bytes": len(content_bytes),
    }
    config.uploaded_knowledge_docs = [d for d in config.uploaded_knowledge_docs if d.get("name") != file.filename]
    config.uploaded_knowledge_docs.append(doc_entry)
    config.last_updated = datetime.datetime.now(datetime.timezone.utc).isoformat()
    await customizations_manager.save_customizations(config)

    return {
        "success": True,
        "filename": file.filename,
        "extracted_chars": len(cleaned_text),
        "total_docs": len(config.uploaded_knowledge_docs),
    }


@app.post(
    "/upload",
    summary="Upload Document and Extract Page Count",
    tags=["Uploads"],
)
async def upload_file(file: UploadFile = File(...)):
    """Handles direct file upload from web student interface, uploading to AWS S3 and detecting page count."""
    safe_name = f"{int(datetime.datetime.now().timestamp())}_{file.filename}"
    s3_key = f"jobs/web/{safe_name}"

    content = await file.read()
    
    # Save local copy for fallback
    os.makedirs("uploads", exist_ok=True)
    file_path = os.path.join("uploads", safe_name)
    with open(file_path, "wb") as f:
        f.write(content)

    # Real AWS S3 Upload
    s3_url = None
    try:
        content_type = file.content_type or "application/pdf"
        s3_url = await s3_client.upload_file_bytes(content, s3_key, content_type=content_type)
        logger.info(f"Uploaded file to real AWS S3: {s3_url}")
    except Exception as exc:
        logger.error(f"Error uploading to AWS S3: {exc}")

    pages = s3_client.extract_page_count_from_bytes(content)
    effective_url = s3_url or f"/uploads/{safe_name}"

    audit_logger.log(
        "FILE_UPLOAD",
        f"Document uploaded to AWS S3: '{file.filename}' ({pages} pages, {len(content)} bytes)",
        channel="web",
        details={
            "file_name": file.filename,
            "saved_as": safe_name,
            "s3_key": s3_key,
            "s3_url": s3_url,
            "pages": pages,
            "size_bytes": len(content),
        },
    )

    return {
        "file_name": file.filename,
        "saved_as": safe_name,
        "file_url": effective_url,
        "s3_key": s3_key,
        "pages": pages,
        "size_bytes": len(content),
    }


@app.post(
    "/jobs",
    response_model=JobEnqueueResponse,
    status_code=status.HTTP_202_ACCEPTED,
    summary="Enqueue incoming print job",
    tags=["Jobs"],
)
async def enqueue_job(job: JobIn):
    """
    Receives normalized print job from external n8n workflow or direct web upload,
    validates payload, pushes to ARQ queue (<200ms), and returns immediately.
    """
    logger.info(f"Received job submission for job_id={job.job_id} from {job.source_channel}")
    pool: Optional[ArqRedis] = getattr(app.state, "arq_pool", None)
    job_dict = job.model_dump()
    # 1. Calculate price from specifications if missing or 0
    if not job_dict.get("total_amount_inr") or float(job_dict.get("total_amount_inr") or 0) <= 0:
        pg = int(job_dict.get("pages") or 1)
        cp = int(job_dict.get("copies") or 1)
        cm = job_dict.get("color_mode") or "bw"
        sd = job_dict.get("sides") or "single"
        bd = job_dict.get("binding") or "none"
        try:
            config = await customizations_manager.get_customizations()
            pricing_calc = calculate_hyderabad_price(
                pages=pg, copies=cp, color_mode=cm, sides=sd, binding=bd, custom_rates=config.pricing.model_dump()
            )
            job_dict["total_amount_inr"] = pricing_calc.total_amount_inr
            job_dict["pricing_summary"] = pricing_calc.summary
        except Exception:
            job_dict["total_amount_inr"] = float(2.0 * pg * cp)

    # 2. Immediately record in DynamoDB so staff and student see it right away!
    dynamo = DynamoDBClient()
    job_dict["status"] = "queued"
    await dynamo.create_or_init_job(job_dict)

    # 3. Update explicit requirements if provided
    update_fields = {}
    for k in ["pages", "copies", "color_mode", "sides", "binding", "paper_type", "total_amount_inr", "pricing_summary", "status"]:
        if job_dict.get(k) is not None:
            update_fields[k] = job_dict[k]
    if update_fields:
        await dynamo.update_job_fields(job.job_id, update_fields)

    # 3. Push to ARQ queue or run agent
    if pool:
        try:
            await pool.enqueue_job("process_job", job_dict)
            logger.info(f"Enqueued job {job.job_id} into ARQ task queue.")
        except Exception as exc:
            logger.warning(f"Failed to enqueue job to ARQ: {exc}")
    else:
        logger.info(f"ARQ pool not connected. Running asynchronous agent task for job {job.job_id}.")
        agent = get_bedrock_agent()
        asyncio.create_task(agent.process_job(job_dict))

    audit_logger.log(
        "ORDER_INTAKE",
        f"Order {job.job_id} received from {job.source_channel} ({job.sender_name}) - ₹{job.total_amount_inr or 0:.2f}",
        job_id=job.job_id,
        channel=job.source_channel,
        details={
            "sender_name": job.sender_name,
            "amount_inr": job.total_amount_inr,
            "pages": job.pages,
            "copies": job.copies,
            "binding": job.binding,
            "color_mode": job.color_mode,
            "payment_status": getattr(job, "payment_status", "unpaid"),
        },
    )

    invalidate_jobs_cache()

    return JobEnqueueResponse(
        job_id=job.job_id,
        status="queued",
        message="Print job accepted and recorded in DynamoDB."
    )


@app.get(
    "/jobs",
    summary="List all print jobs for Staff Dashboard",
    tags=["Jobs"],
)
async def list_jobs():
    """Returns all jobs from DynamoDB for the Staff Command Dashboard."""
    now = time.time()
    if _jobs_cache["data"] is not None and (now - _jobs_cache["timestamp"]) < _CACHE_TTL:
        return _jobs_cache["data"]

    dynamo = DynamoDBClient()
    items = await dynamo.list_all_jobs(limit=100)

    # Format items
    results = []
    for record in items:
        job_id = record.get("job_id") or ""
        if job_id.startswith("_config"):
            continue

        requirements = None
        if any(k in record for k in ["copies", "color_mode", "paper_size", "sides", "binding"]):
            requirements = {
                "copies": record.get("copies"),
                "color_mode": record.get("color_mode"),
                "paper_size": record.get("paper_size"),
                "sides": record.get("sides"),
                "binding": record.get("binding"),
                "pages": record.get("pages"),
            }
        results.append({
            "job_id": job_id,
            "status": record.get("status", "received"),
            "source_channel": record.get("source_channel"),
            "sender_id": record.get("sender_id"),
            "sender_name": record.get("sender_name", "Anonymous"),
            "message_text": record.get("message_text"),
            "file_url": record.get("file_url"),
            "file_name": record.get("file_name"),
            "requirements": requirements,
            "pricing": record.get("pricing"),
            "total_amount_inr": float(record["total_amount_inr"]) if record.get("total_amount_inr") is not None else None,
            "pickup_counter": record.get("pickup_counter", "Counter 1"),
            "payment_status": record.get("payment_status", "unpaid"),
            "payment_id": record.get("payment_id"),
            "paid_at": record.get("paid_at"),
            "rejection_reason": record.get("rejection_reason"),
            "file_purged": record.get("file_purged", False),
            "completed_at": record.get("completed_at"),
            "created_at": record.get("created_at") or record.get("received_at"),
            "notes": record.get("notes"),
        })

    _jobs_cache["data"] = results
    _jobs_cache["timestamp"] = time.time()
    return results


@app.get(
    "/jobs/{job_id}",
    response_model=JobDetailResponse,
    summary="Get status, specifications, and pricing for a print job",
    tags=["Jobs"],
)
async def get_job_status(job_id: str):
    """Queries DynamoDB for real-time status, specifications, and pricing."""
    logger.info(f"Querying job status for job_id={job_id}")
    dynamo = DynamoDBClient()

    try:
        record = await dynamo.get_record_by_job_id(job_id)
    except Exception as exc:
        logger.error(f"Error querying job {job_id} from DynamoDB: {exc}")
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail=f"Unable to retrieve job record from DynamoDB: {str(exc)}"
        )

    if not record:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Print job with ID '{job_id}' was not found.",
        )

    requirements = None
    if any(k in record for k in ["copies", "color_mode", "paper_size", "sides", "binding"]):
        requirements = {
            "copies": record.get("copies"),
            "color_mode": record.get("color_mode"),
            "paper_size": record.get("paper_size"),
            "sides": record.get("sides"),
            "binding": record.get("binding"),
            "pages": record.get("pages"),
        }

    return JobDetailResponse(
        job_id=job_id,
        status=record.get("status", "unknown"),
        source_channel=record.get("source_channel"),
        sender_id=record.get("sender_id"),
        sender_name=record.get("sender_name"),
        message_text=record.get("message_text"),
        file_url=record.get("file_url"),
        file_name=record.get("file_name"),
        requirements=requirements,
        pricing=record.get("pricing"),
        total_amount_inr=float(record["total_amount_inr"]) if record.get("total_amount_inr") is not None else None,
        payment_status=record.get("payment_status", "unpaid"),
        payment_id=record.get("payment_id"),
        paid_at=record.get("paid_at"),
        completed_at=record.get("completed_at"),
        notes=record.get("notes"),
        received_at=record.get("received_at"),
        raw_fields=record,
    )


@app.patch(
    "/jobs/{job_id}/status",
    summary="Update Job Status (Staff / Virtual Printer)",
    tags=["Jobs"],
)
async def update_status(job_id: str, payload: Dict[str, Any]):
    """Allows staff or virtual printer simulation to advance status."""
    new_status = payload.get("status")
    if not new_status:
        raise HTTPException(status_code=400, detail="status field is required.")

    dynamo = DynamoDBClient()
    now_iso = datetime.datetime.now(datetime.timezone.utc).isoformat()
    fields_to_update = {"status": new_status, "updated_at": now_iso}
    if payload.get("notes"):
        fields_to_update["notes"] = payload.get("notes")

    # If completed (e.g. handed over to student), settle counter payment and calculate price if needed
    if new_status == "completed":
        fields_to_update["completed_at"] = now_iso
        existing = await dynamo.get_record_by_job_id(job_id)
        if existing:
            if existing.get("payment_status") != "paid":
                fields_to_update["payment_status"] = "paid"
                fields_to_update["payment_id"] = "counter_cash"
                fields_to_update["paid_at"] = now_iso

            curr_amt = float(existing.get("total_amount_inr") or 0.0)
            if curr_amt <= 0.0:
                pg = int(existing.get("pages") or existing.get("requirements", {}).get("pages") or 1)
                cp = int(existing.get("copies") or existing.get("requirements", {}).get("copies") or 1)
                cm = existing.get("color_mode") or existing.get("requirements", {}).get("color_mode") or "bw"
                sd = existing.get("sides") or existing.get("requirements", {}).get("sides") or "single"
                bd = existing.get("binding") or existing.get("requirements", {}).get("binding") or "none"
                try:
                    price_calc = calculate_hyderabad_price(pages=pg, copies=cp, color_mode=cm, sides=sd, binding=bd)
                    fields_to_update["total_amount_inr"] = price_calc.total_amount_inr
                    fields_to_update["pricing_summary"] = price_calc.summary
                except Exception:
                    fields_to_update["total_amount_inr"] = float(2.0 * pg * cp)

    success = await dynamo.update_job_fields(job_id, fields_to_update)
    if not success:
        raise HTTPException(status_code=404, detail="Failed to update job status.")

    audit_logger.log(
        "STATUS_CHANGE",
        f"Job {job_id} status updated to '{new_status}' ({payload.get('notes') or 'No notes'})",
        job_id=job_id,
        details={"new_status": new_status, "notes": payload.get("notes"), **fields_to_update},
    )

    invalidate_jobs_cache()

    return {"success": True, "job_id": job_id, "status": new_status}


@app.post(
    "/chat",
    response_model=ChatResponse,
    summary="Interactive Student Chat with Bedrock Agent",
    tags=["Chat"],
)
async def student_chat(req: ChatRequest):
    """
    Direct conversational interface for the Student Web UI.
    Uses ElastiCache / Redis for multi-turn history and Bedrock for AI reasoning.
    """
    logger.info(f"Received student chat message in session {req.session_id}")
    composite_session = f"{req.source_channel}:{req.session_id}"

    # 1. Record incoming user message in ElastiCache
    await session_store.append_message(composite_session, "user", req.message)

    # 2. Construct job evaluation payload
    job_id = req.job_id or f"web-{req.session_id[-6:]}"
    job_data = {
        "job_id": job_id,
        "source_channel": req.source_channel,
        "sender_id": req.session_id,
        "sender_name": req.sender_name or "Student",
        "message_text": req.message,
        "file_url": req.file_url,
        "file_name": req.file_name,
        "pages": req.pages or 1,
    }

    # 3. Process with Bedrock Agent
    agent = get_bedrock_agent()
    result = await agent.process_job(job_data)

    reply_text = result.get("reply", "Your request has been received.")
    await session_store.append_message(composite_session, "assistant", reply_text)

    pricing_data = None
    if "pricing" in result and result["pricing"]:
        pricing_data = PricingBreakdown(**result["pricing"])

    audit_logger.log(
        "AI_CHAT",
        f"Student chat with AI ({req.session_id}): '{req.message[:50]}...'",
        job_id=job_id,
        channel=req.source_channel,
        details={
            "session_id": req.session_id,
            "message": req.message,
            "reply": reply_text[:120],
            "needs_clarification": result.get("needs_clarification", False),
        },
    )

    return ChatResponse(
        reply=reply_text,
        session_id=req.session_id,
        job_id=job_id,
        status="needs_info" if result.get("needs_clarification") else "queued",
        pricing=pricing_data,
        needs_clarification=result.get("needs_clarification", False),
    )


@app.post(
    "/jobs/{job_id}/print-ready",
    summary="Trigger Backward Completion Alert (Prints Ready for Pickup)",
    tags=["Fulfillment"],
)
async def mark_job_print_ready(job_id: str, req: PrintReadyRequest):
    """
    Called by Staff Dashboard or Virtual Printer when prints are done.
    Updates DynamoDB status to 'ready' and fires backward notification to n8n relay.
    """
    logger.info(f"Marking job {job_id} as ready at {req.pickup_counter}")
    dynamo = DynamoDBClient()
    now_iso = datetime.datetime.now(datetime.timezone.utc).isoformat()

    # 1. Verify job exists
    record = await dynamo.get_record_by_job_id(job_id)
    if not record:
        raise HTTPException(status_code=404, detail=f"Job {job_id} not found.")

    # 2. Instant Digital Shredding Trigger (Zero-Retention Privacy)
    file_url = record.get("file_url")
    file_name = record.get("file_name")
    shred_info = []

    # A. Shred local file if cached on disk
    if file_url and "/uploads/" in file_url:
        local_filename = file_url.split("/uploads/")[-1]
        local_path = os.path.join("uploads", local_filename)
        if os.path.exists(local_path):
            try:
                os.remove(local_path)
                shred_info.append(f"local: {local_filename}")
                logger.info(f"[PRIVACY] Shredded local file copy: {local_path}")
            except Exception as exc:
                logger.warning(f"Failed to remove local file {local_path}: {exc}")

    # B. Permanently wipe file from Amazon S3
    if file_name and file_name != "[PURGED_FOR_PRIVACY]":
        await s3_client.delete_object(file_name)
        shred_info.append(f"s3: {file_name}")
    elif file_url and ("s3.amazonaws.com" in file_url or not file_url.startswith("http")):
        s3_key = file_url.split("/")[-1]
        await s3_client.delete_object(s3_key)
        shred_info.append(f"s3: {s3_key}")

    audit_logger.log(
        "PRIVACY_SHRED",
        f"Zero-Retention shred complete for job {job_id}: Document purged permanently ({', '.join(shred_info) or 'disk/cloud'})",
        job_id=job_id,
        details={"shredded_targets": shred_info, "retention_policy": "Zero-Retention Compliance"},
    )

    # 3. Update DynamoDB status with privacy scrub and 24-hour TTL buffer
    await dynamo.mark_job_ready(
        job_id=job_id,
        pickup_counter=req.pickup_counter,
        staff_notes=req.staff_notes,
        completed_at=now_iso,
    )

    audit_logger.log(
        "PRINT_READY",
        f"Order {job_id} marked ready for pickup at {req.pickup_counter}. {req.staff_notes or ''}",
        job_id=job_id,
        details={"pickup_counter": req.pickup_counter, "staff_notes": req.staff_notes},
    )

    # 4. Dispatch backward notification to n8n
    target_channel = record.get("source_channel", "web")
    sender_id = record.get("sender_id", "")
    total_inr = record.get("total_amount_inr", 0.0)

    outbound_payload = {
        "event": "print_ready",
        "job_id": job_id,
        "target_channel": target_channel,
        "sender_id": sender_id,
        "pickup_counter": req.pickup_counter,
        "total_amount": total_inr,
        "file_purged": True,
        "message": f"🎉 Hey! Your print order #{job_id} is printed and ready! Total: ₹{total_inr:.2f}. Please collect it from {req.pickup_counter}. 🔒 (Your digital document has been permanently deleted from our cloud for student privacy).",
        "completed_at": now_iso,
    }

    dispatched = True
    try:
        if settings.N8N_COMPLETION_URL:
            async with httpx.AsyncClient(timeout=5.0) as client:
                await client.post(settings.N8N_COMPLETION_URL, json=outbound_payload)
                logger.info(f"Dispatched print-ready alert to n8n for job {job_id}")
        else:
            dispatched = False
    except Exception as exc:
        logger.warning(f"Failed to post completion to n8n: {exc}")
        dispatched = False

    audit_logger.log(
        "NOTIFICATION_DISPATCH",
        f"Backward notification dispatched to {target_channel} ({sender_id or 'anonymous'}) for order #{job_id}",
        job_id=job_id,
        channel=target_channel,
        details=outbound_payload,
    )

    invalidate_jobs_cache()

    return {
        "success": True,
        "job_id": job_id,
        "status": "ready",
        "notification_dispatched": dispatched,
        "outbound_payload": outbound_payload,
    }


@app.post("/payments/create-order", tags=["Payments"])
async def create_payment_order(req: CreateOrderRequest):
    """
    Creates a Razorpay order in INR.
    If RAZORPAY_KEY_ID & RAZORPAY_KEY_SECRET exist in environment, calls the live Razorpay API.
    Otherwise provides an instantaneous test simulation order.
    """
    key_id = settings.RAZORPAY_KEY_ID or os.getenv("RAZORPAY_KEY_ID")
    key_secret = settings.RAZORPAY_KEY_SECRET or os.getenv("RAZORPAY_KEY_SECRET")
    amount_paise = int(round(req.amount_inr * 100))

    if key_id and key_secret:
        try:
            async with httpx.AsyncClient(timeout=10.0) as client:
                resp = await client.post(
                    "https://api.razorpay.com/v1/orders",
                    auth=(key_id, key_secret),
                    json={
                        "amount": amount_paise,
                        "currency": "INR",
                        "receipt": req.job_id or f"rcpt_{int(datetime.datetime.now().timestamp())}",
                        "notes": {"platform": "EasePrint Campus Print Hub"},
                    },
                )
                if resp.status_code == 200:
                    data = resp.json()
                    audit_logger.log(
                        "PAYMENT_INTENT",
                        f"Razorpay live order created: {data['id']} for ₹{req.amount_inr:.2f} (Job: {req.job_id or 'direct'})",
                        job_id=req.job_id,
                        details={"order_id": data["id"], "amount_inr": req.amount_inr, "mock": False},
                    )
                    return {
                        "success": True,
                        "order_id": data["id"],
                        "amount": data["amount"],
                        "currency": data["currency"],
                        "key_id": key_id,
                        "mock": False,
                    }
                else:
                    logger.warning(f"Razorpay order API returned {resp.status_code}: {resp.text}")
        except Exception as exc:
            logger.warning(f"Failed to communicate with Razorpay API: {exc}")

    # Fallback to simulated test order
    mock_order_id = f"order_test_{int(datetime.datetime.now().timestamp())}"
    audit_logger.log(
        "PAYMENT_INTENT",
        f"Simulated test payment order initiated: {mock_order_id} for ₹{req.amount_inr:.2f} (Job: {req.job_id or 'direct'})",
        job_id=req.job_id,
        details={"order_id": mock_order_id, "amount_inr": req.amount_inr, "mock": True},
    )
    return {
        "success": True,
        "order_id": mock_order_id,
        "amount": amount_paise,
        "currency": "INR",
        "key_id": key_id or "rzp_test_easeprint_demo",
        "mock": True,
    }


@app.post("/payments/verify", tags=["Payments"])
async def verify_payment(req: VerifyPaymentRequest):
    """Marks a job as paid with Razorpay transaction ID in DynamoDB."""
    dynamo = DynamoDBClient()
    now_iso = datetime.datetime.now(datetime.timezone.utc).isoformat()
    await dynamo.update_job_fields(
        req.job_id,
        {
            "payment_status": "paid",
            "payment_id": req.razorpay_payment_id,
            "razorpay_order_id": req.razorpay_order_id or "",
            "paid_at": now_iso,
        },
    )
    logger.info(f"Payment verified for job {req.job_id} with ID {req.razorpay_payment_id}")

    audit_logger.log(
        "PAYMENT_SUCCESS",
        f"Payment verified for order {req.job_id} - Razorpay ID: {req.razorpay_payment_id}",
        job_id=req.job_id,
        details={
            "payment_id": req.razorpay_payment_id,
            "razorpay_order_id": req.razorpay_order_id,
            "paid_at": now_iso,
        },
    )

    invalidate_jobs_cache()

    return {
        "success": True,
        "job_id": req.job_id,
        "payment_status": "paid",
        "payment_id": req.razorpay_payment_id,
        "paid_at": now_iso,
    }


@app.post("/jobs/{job_id}/reject", tags=["Jobs"])
async def reject_job(job_id: str, req: RejectJobRequest):
    """Allows staff to reject unsuitable jobs with an automated reason and note."""
    dynamo = DynamoDBClient()
    now_iso = datetime.datetime.now(datetime.timezone.utc).isoformat()
    record = await dynamo.get_record_by_job_id(job_id)
    if not record:
        raise HTTPException(status_code=404, detail=f"Job {job_id} not found.")

    await dynamo.update_job_fields(
        job_id,
        {
            "status": "rejected",
            "rejection_reason": req.reason,
            "staff_notes": req.staff_notes or f"Rejected: {req.reason}",
            "rejected_at": now_iso,
        },
    )
    logger.info(f"Job {job_id} rejected by staff: {req.reason}")

    audit_logger.log(
        "ORDER_REJECTED",
        f"Order {job_id} rejected: {req.reason}",
        job_id=job_id,
        details={
            "reason": req.reason,
            "staff_notes": req.staff_notes,
            "rejected_at": now_iso,
        },
    )

    invalidate_jobs_cache()

    return {
        "success": True,
        "job_id": job_id,
        "status": "rejected",
        "rejection_reason": req.reason,
    }


@app.get("/analytics/earnings", tags=["Analytics"])
async def get_earnings_analytics():
    """Aggregates revenue, order volumes, payment records, and printout logs."""
    now = time.time()
    if _analytics_cache["data"] is not None and (now - _analytics_cache["timestamp"]) < _CACHE_TTL:
        return _analytics_cache["data"]

    dynamo = DynamoDBClient()
    items = await dynamo.list_all_jobs(limit=500)

    today_str = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d")

    total_revenue = 0.0
    today_revenue = 0.0
    binding_revenue = 0.0
    print_revenue = 0.0

    completed_orders = 0
    queued_orders = 0
    rejected_orders = 0

    total_pages_printed = 0
    bw_pages_printed = 0
    color_pages_printed = 0

    razorpay_count = 0
    razorpay_amount = 0.0
    counter_count = 0
    counter_amount = 0.0

    channel_stats = {
        "web": {"count": 0, "revenue": 0.0},
        "telegram": {"count": 0, "revenue": 0.0},
        "whatsapp": {"count": 0, "revenue": 0.0},
    }

    payment_records = []
    printout_records = []

    for item in items:
        job_id = item.get("job_id", "UNKNOWN")
        sender_name = item.get("sender_name", "Anonymous Student")
        channel = (item.get("source_channel") or "web").lower()
        status_val = item.get("status", "received")
        payment_status = item.get("payment_status", "unpaid")
        payment_id = item.get("payment_id")
        razorpay_order_id = item.get("razorpay_order_id")
        amount = float(item.get("total_amount_inr") or item.get("pricing", {}).get("total_amount_inr") or 0.0)
        created_at = item.get("created_at") or item.get("received_at") or ""
        paid_at = item.get("paid_at") or ""
        completed_at = item.get("completed_at") or ""

        # Pages & printing specs
        pages = int(item.get("pages") or item.get("requirements", {}).get("pages") or 1)
        copies = int(item.get("copies") or item.get("requirements", {}).get("copies") or 1)
        color_mode = (item.get("color_mode") or item.get("requirements", {}).get("color_mode") or "bw").lower()
        sides = item.get("sides") or item.get("requirements", {}).get("sides") or "single"
        binding = item.get("binding") or item.get("requirements", {}).get("binding") or "none"
        file_name = item.get("file_name") or "Document.pdf"
        file_purged = item.get("file_purged", False) or (status_val in ["ready", "completed"])

        # Auto-compute price if missing or 0
        if amount <= 0.0:
            try:
                calc_val = calculate_hyderabad_price(pages=pages, copies=copies, color_mode=color_mode, sides=sides, binding=binding)
                amount = calc_val.total_amount_inr
            except Exception:
                amount = float(2.0 * pages * copies)

        # Channels count
        if channel in channel_stats:
            channel_stats[channel]["count"] += 1
        else:
            channel_stats[channel] = {"count": 1, "revenue": 0.0}

        # Status counts
        if status_val in ["completed", "ready"]:
            completed_orders += 1
        elif status_val in ["queued", "received", "printing"]:
            queued_orders += 1
        elif status_val == "rejected":
            rejected_orders += 1

        # Revenue attribution:
        # Either paid online via Razorpay, OR completed & collected at the store counter
        is_paid = (payment_status == "paid") or (status_val == "completed")
        if is_paid:
            total_revenue += amount
            if channel in channel_stats:
                channel_stats[channel]["revenue"] += amount

            # Check if paid, completed, or created today
            date_check = (paid_at or completed_at or created_at)[:10]
            if date_check == today_str:
                today_revenue += amount

            if payment_id and "counter" not in str(payment_id).lower() and payment_id != "":
                razorpay_count += 1
                razorpay_amount += amount
            else:
                counter_count += 1
                counter_amount += amount
        else:
            counter_count += 1

        sheets = pages * copies
        if sides == "double":
            sheets = ((pages + 1) // 2) * copies

        if status_val in ["printing", "ready", "completed"]:
            total_pages_printed += (pages * copies)
            if color_mode == "color":
                color_pages_printed += (pages * copies)
            else:
                bw_pages_printed += (pages * copies)

            # Binding revenue calculation
            binding_unit = 0.0
            if binding == "spiral":
                binding_unit = 30.0
            elif binding == "soft":
                binding_unit = 50.0
            elif binding == "hard":
                binding_unit = 180.0
            b_rev = binding_unit * copies
            binding_revenue += b_rev
            print_revenue += max(0.0, amount - b_rev)

        # Payment record row
        display_payment_status = "paid" if is_paid else "unpaid"
        display_payment_id = payment_id if payment_id else ("Counter Cash" if is_paid else "—")
        payment_records.append({
            "job_id": job_id,
            "customer_name": sender_name,
            "channel": channel,
            "amount_inr": amount,
            "payment_status": display_payment_status,
            "payment_id": display_payment_id,
            "razorpay_order_id": razorpay_order_id or "—",
            "paid_at": paid_at or completed_at or "—",
            "created_at": created_at,
        })

        # Printout record row
        printout_records.append({
            "job_id": job_id,
            "customer_name": sender_name,
            "file_name": file_name,
            "pages": pages,
            "copies": copies,
            "total_sheets": sheets,
            "color_mode": color_mode,
            "sides": sides,
            "binding": binding,
            "total_amount_inr": amount,
            "status": status_val,
            "payment_status": payment_status,
            "file_purged": file_purged,
            "created_at": created_at,
            "completed_at": completed_at or "—",
        })

    # Sort descending
    payment_records.sort(key=lambda x: x.get("created_at") or "", reverse=True)
    printout_records.sort(key=lambda x: x.get("created_at") or "", reverse=True)

    result_payload = {
        "summary": {
            "total_revenue": round(total_revenue, 2),
            "today_revenue": round(today_revenue, 2),
            "print_revenue": round(print_revenue, 2),
            "binding_revenue": round(binding_revenue, 2),
            "total_orders": len(items),
            "completed_orders": completed_orders,
            "queued_orders": queued_orders,
            "rejected_orders": rejected_orders,
            "total_pages_printed": total_pages_printed,
            "bw_pages_printed": bw_pages_printed,
            "color_pages_printed": color_pages_printed,
            "average_order_value": round(total_revenue / max(1, completed_orders), 2),
        },
        "payment_breakdown": {
            "razorpay": {"count": razorpay_count, "amount": round(razorpay_amount, 2)},
            "counter_or_unpaid": {"count": counter_count, "amount": round(counter_amount, 2)},
        },
        "channel_breakdown": channel_stats,
        "payment_records": payment_records,
        "printout_records": printout_records,
    }

    _analytics_cache["data"] = result_payload
    _analytics_cache["timestamp"] = time.time()
    return result_payload


@app.get("/analytics/logs", tags=["Analytics"])
async def get_system_audit_logs(
    limit: int = 150,
    event_type: Optional[str] = None,
    job_id: Optional[str] = None,
):
    """Returns recent structured audit events from memory buffer and audit.jsonl."""
    logs = audit_logger.get_logs(limit=limit, event_type=event_type, job_id=job_id)
    return {
        "total": len(logs),
        "logs": logs,
    }


@app.post("/webhook/telegram", summary="Direct Telegram Bot Webhook & Ingestion", tags=["Omnichannel"])
async def telegram_webhook(payload: Dict[str, Any]):
    """
    Directly receives real Telegram Bot updates or normalized Telegram relay messages:
    - Extracts sender, chat ID, message text / caption, file
    - Downloads documents from Telegram Bot API and uploads directly to real AWS S3
    - Calculates exact Hyderabad Xerox prices
    - Persists the order to Amazon DynamoDB
    - Dispatches to Bedrock agent and notifies Staff Dashboard
    """
    logger.info("Received Telegram webhook payload")
    msg = payload.get("message") or payload.get("edited_message") or payload.get("channel_post") or payload
    from_user = msg.get("from") or {}
    chat = msg.get("chat") or {}

    sender_id = str(chat.get("id") or from_user.get("id") or payload.get("sender_id") or "telegram_user")
    first_name = from_user.get("first_name", "")
    last_name = from_user.get("last_name", "")
    sender_name = payload.get("sender_name") or f"{first_name} {last_name}".strip() or "Telegram Student"
    message_text = msg.get("text") or msg.get("caption") or payload.get("message_text") or ""

    now_epoch = int(time.time())
    now_iso = datetime.datetime.now(datetime.timezone.utc).isoformat()
    job_id = payload.get("job_id") or f"EP-TG-{now_epoch % 1000000}"

    file_url = payload.get("file_url") or payload.get("file_s3_url")
    file_name = payload.get("file_name")
    pages = int(payload.get("pages") or 1)
    s3_key = None

    doc = msg.get("document")
    if doc:
        file_name = file_name or doc.get("file_name", "telegram_doc.pdf")
        file_id = doc.get("file_id")
        bot_token = settings.TELEGRAM_BOT_TOKEN or os.getenv("TELEGRAM_BOT_TOKEN")
        if bot_token and file_id:
            try:
                async with httpx.AsyncClient(timeout=30.0) as client:
                    file_info_res = await client.get(f"https://api.telegram.org/bot{bot_token}/getFile?file_id={file_id}")
                    if file_info_res.status_code == 200:
                        file_path = file_info_res.json().get("result", {}).get("file_path")
                        if file_path:
                            file_download_url = f"https://api.telegram.org/file/bot{bot_token}/{file_path}"
                            doc_bytes_res = await client.get(file_download_url)
                            if doc_bytes_res.status_code == 200:
                                doc_bytes = doc_bytes_res.content
                                s3_key = f"jobs/telegram/{sender_id}/{now_epoch}_{file_name}"
                                s3_url = await s3_client.upload_file_bytes(doc_bytes, s3_key, content_type="application/pdf")
                                file_url = s3_url
                                pages = s3_client.extract_page_count_from_bytes(doc_bytes)
                                logger.info(f"Downloaded Telegram doc and uploaded to real S3: {s3_url} ({pages} pages)")
            except Exception as exc:
                logger.warning(f"Failed to fetch Telegram document from Bot API: {exc}")

    agent = get_bedrock_agent()
    eval_result = await agent.process_job({
        "job_id": job_id,
        "source_channel": "telegram",
        "sender_id": sender_id,
        "sender_name": sender_name,
        "message_text": message_text,
        "file_url": file_url,
        "file_name": file_name,
        "pages": pages,
    })

    pricing_data = eval_result.get("pricing") or {}
    total_amount = float(pricing_data.get("total_amount_inr") or 0.0)
    if total_amount <= 0.0:
        total_amount = float(2.0 * pages)

    dynamo = DynamoDBClient()
    job_record = {
        "job_id": job_id,
        "userID": job_id,
        "status": "received" if eval_result.get("needs_clarification") else "queued",
        "source_channel": "telegram",
        "sender_id": sender_id,
        "sender_name": sender_name,
        "message_text": message_text,
        "file_url": file_url or "",
        "file_name": file_name or "telegram_document.pdf",
        "pages": pages,
        "copies": int(pricing_data.get("copies") or 1),
        "color_mode": pricing_data.get("color_mode") or "bw",
        "sides": pricing_data.get("sides") or "single",
        "binding": pricing_data.get("binding") or "none",
        "total_amount_inr": total_amount,
        "pricing": pricing_data,
        "pricing_summary": pricing_data.get("summary") or f"₹{total_amount:.2f}",
        "payment_status": "unpaid",
        "pickup_counter": "Counter 1",
        "created_at": now_iso,
        "updated_at": now_iso,
        "notes": f"Order via Telegram: {message_text[:60]}",
    }
    if s3_key:
        job_record["file_s3_key"] = s3_key

    await dynamo.create_or_init_job(job_record)
    await dynamo.update_job_fields(job_id, job_record)

    audit_logger.log(
        "ORDER_INTAKE",
        f"Order {job_id} received from Telegram ({sender_name}) - ₹{total_amount:.2f}",
        job_id=job_id,
        channel="telegram",
        details=job_record,
    )

    invalidate_jobs_cache()

    bot_token = settings.TELEGRAM_BOT_TOKEN or os.getenv("TELEGRAM_BOT_TOKEN")
    if bot_token and sender_id and sender_id.isdigit():
        reply_msg = eval_result.get("reply") or f"🎉 Received your print request (Order #{job_id})! Total: ₹{total_amount:.2f}. We'll notify you when ready for pickup."
        try:
            async with httpx.AsyncClient(timeout=10.0) as client:
                await client.post(
                    f"https://api.telegram.org/bot{bot_token}/sendMessage",
                    json={"chat_id": int(sender_id), "text": reply_msg, "parse_mode": "Markdown"}
                )
        except Exception as exc:
            logger.warning(f"Failed to post reply to Telegram: {exc}")

    return {
        "success": True,
        "job_id": job_id,
        "status": job_record["status"],
        "total_amount_inr": total_amount,
        "reply": eval_result.get("reply"),
    }


# Mangum ASGI Adapter for AWS Lambda / API Gateway serverless deployments
handler = Mangum(app)
