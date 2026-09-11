import logging
from contextlib import asynccontextmanager
from typing import Optional
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from arq.connections import create_pool, ArqRedis
from app.config import settings
from app.models import JobIn, JobEnqueueResponse, JobDetailResponse
from app.dynamodb_client import DynamoDBClient

logger = logging.getLogger("print_queue_service.api")


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Manage lifecycle resources (Redis ARQ pool and DynamoDB initialization)."""
    logger.info("Starting up print-queue-service FastAPI application...")
    
    # 1. Connect to Redis ARQ pool
    try:
        app.state.arq_pool = await create_pool(settings.redis_settings)
        logger.info("Connected to Redis ARQ pool successfully.")
    except Exception as exc:
        logger.error(f"Failed to connect to Redis ARQ pool: {exc}")
        app.state.arq_pool = None

    # 2. Ensure DynamoDB table exists (especially for DynamoDB Local)
    try:
        dynamo_client = DynamoDBClient()
        await dynamo_client.ensure_table_exists()
    except Exception as exc:
        logger.warning(f"Could not initialize DynamoDB table automatically: {exc}")

    yield

    logger.info("Shutting down print-queue-service FastAPI application...")
    if hasattr(app.state, "arq_pool") and app.state.arq_pool:
        await app.state.arq_pool.close()
        logger.info("Closed Redis ARQ pool connection.")


app = FastAPI(
    title="EasePrint Print Queue Service",
    description="Asynchronous multi-channel print queue processor powered by FastAPI, ARQ, DynamoDB, and Claude Agent",
    version="1.0.0",
    lifespan=lifespan,
)

# Enable CORS for React frontend (Student View & Staff Dashboard)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health", tags=["Health"])
async def health_check():
    """Healthcheck endpoint verifying service status, Redis, and DynamoDB."""
    redis_connected = False
    if hasattr(app.state, "arq_pool") and app.state.arq_pool:
        try:
            await app.state.arq_pool.ping()
            redis_connected = True
        except Exception:
            redis_connected = False

    return {
        "status": "healthy",
        "service": "print-queue-service",
        "redis_connected": redis_connected,
        "database": "DynamoDB",
        "table": settings.DYNAMODB_TABLE_NAME,
        "environment": "production" if not settings.DEBUG else "debug"
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
    Receives normalized print job from external n8n workflow, validates payload,
    enqueues it into Redis via ARQ, and returns immediately (<200ms).
    """
    logger.info(f"Received job submission for job_id={job.job_id} from {job.source_channel}")
    pool: Optional[ArqRedis] = getattr(app.state, "arq_pool", None)

    job_dict = job.model_dump()

    if pool:
        try:
            await pool.enqueue_job("process_job", job_dict)
            logger.info(f"Enqueued job {job.job_id} into ARQ task queue.")
        except Exception as exc:
            logger.error(f"Failed to enqueue job {job.job_id} into ARQ: {exc}")
            raise HTTPException(
                status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                detail=f"Failed to enqueue job into background queue: {str(exc)}",
            )
    else:
        logger.warning(f"ARQ pool not connected. Simulating ingestion for job {job.job_id}.")

    return JobEnqueueResponse(
        job_id=job.job_id,
        status="queued",
        message="Print job accepted and enqueued for agent processing."
    )


@app.get(
    "/jobs/{job_id}",
    response_model=JobDetailResponse,
    summary="Get status and details of a print job",
    tags=["Jobs"],
)
async def get_job_status(job_id: str):
    """
    Queries DynamoDB for the record matching job_id and returns the live status
    and details for the dashboard/frontend.
    """
    logger.info(f"Querying job status for job_id={job_id}")
    dynamodb = DynamoDBClient()

    try:
        record = await dynamodb.get_record_by_job_id(job_id)
    except Exception as exc:
        logger.error(f"Error querying job {job_id} from DynamoDB: {exc}")
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail=f"Unable to retrieve job record from DynamoDB: {str(exc)}"
        )

    if not record:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Print job with ID '{job_id}' was not found in DynamoDB.",
        )

    # Extract structured requirements if present
    requirements = None
    if any(k in record for k in ["copies", "color_mode", "paper_size", "sides"]):
        requirements = {
            "copies": int(record["copies"]) if "copies" in record and record["copies"] is not None else None,
            "color_mode": record.get("color_mode"),
            "paper_size": record.get("paper_size"),
            "sides": record.get("sides"),
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
        notes=record.get("notes"),
        received_at=record.get("received_at"),
        raw_fields=record,
    )
