import asyncio
import pytest
from httpx import AsyncClient, ASGITransport
from app.config import settings
from app.models import JobIn, JobStatus, PrintRequirements
from app.dynamodb_client import DynamoDBClient
from app.agent import PrintAgent
from app.worker import process_job
from app.main import app


@pytest.mark.asyncio
async def test_jobin_model_validation():
    """Verify JobIn validation with required and optional fields."""
    payload = {
        "job_id": "test-job-123",
        "source_channel": "whatsapp",
        "sender_id": "+123456789",
        "sender_name": "Test User",
        "message_text": "Print 2 copies in color, A4, double-sided",
        "file_url": "https://s3.amazonaws.com/bucket/doc.pdf",
        "file_name": "doc.pdf",
    }
    job = JobIn(**payload)
    assert job.job_id == "test-job-123"
    assert job.source_channel == "whatsapp"
    assert job.sender_id == "+123456789"


@pytest.mark.asyncio
async def test_dynamodb_client_operations():
    """Verify DynamoDB client read, write, update operations."""
    client = DynamoDBClient()
    job_id = "test-dynamo-001"
    
    init_data = {
        "job_id": job_id,
        "source_channel": "telegram",
        "sender_id": "112233",
        "sender_name": "Telegram Tester",
        "message_text": "Please print",
        "status": "received",
    }
    
    created = await client.create_or_init_job(init_data)
    assert created["job_id"] == job_id
    
    fetched = await client.get_record_by_job_id(job_id)
    assert fetched is not None
    assert fetched["status"] == "received"
    
    # Update status
    updated = await client.update_job_status(job_id, "processing", notes="Printing page 1")
    assert updated is True
    
    # Set requirements
    req_updated = await client.set_print_requirements(
        job_id=job_id,
        copies=3,
        color_mode="color",
        paper_size="A4",
        sides="double",
    )
    assert req_updated is True
    
    record = await client.get_record_by_job_id(job_id)
    assert record["status"] == "processing"
    assert record["copies"] == 3
    assert record["color_mode"] == "color"


@pytest.mark.asyncio
async def test_agent_tool_execution():
    """Verify PrintAgent tool execution for all 4 tools."""
    agent = PrintAgent()
    job_id = "test-agent-tools-001"
    
    # Ensure job exists
    await agent.dynamodb_client.create_or_init_job({
        "job_id": job_id,
        "status": "received",
        "source_channel": "web",
        "sender_id": "session-1",
    })
    
    # 1. get_job_details
    details = await agent.execute_tool("get_job_details", {"job_id": job_id})
    assert details["job_id"] == job_id
    
    # 2. update_job_status
    status_res = await agent.execute_tool("update_job_status", {
        "job_id": job_id,
        "status": "queued",
        "notes": "Ready to print"
    })
    assert status_res["success"] is True
    
    # 3. set_print_requirements
    req_res = await agent.execute_tool("set_print_requirements", {
        "job_id": job_id,
        "copies": 5,
        "color_mode": "bw",
        "paper_size": "Letter",
        "sides": "single"
    })
    assert req_res["success"] is True
    assert req_res["requirements"]["copies"] == 5
    
    # 4. ask_clarifying_question
    ask_res = await agent.execute_tool("ask_clarifying_question", {
        "job_id": job_id,
        "channel": "web",
        "sender_id": "session-1",
        "question_text": "Do you want single or double sided?"
    })
    assert ask_res["success"] is True
    
    rec = await agent.dynamodb_client.get_record_by_job_id(job_id)
    assert rec["status"] == "needs_info"


@pytest.mark.asyncio
async def test_agent_heuristic_fallback():
    """Verify fallback reasoning when API key is not configured."""
    agent = PrintAgent()
    
    # Incomplete job (missing copies, sidedness, paper size)
    job_data_incomplete = {
        "job_id": "test-heuristic-incomplete",
        "source_channel": "whatsapp",
        "sender_id": "+999",
        "message_text": "Please print this color document",
    }
    res_incomplete = await agent.process_job_with_agent(job_data_incomplete)
    assert "Clarification requested" in res_incomplete
    rec_incomplete = await agent.dynamodb_client.get_record_by_job_id("test-heuristic-incomplete")
    assert rec_incomplete["status"] == "needs_info"

    # Complete job
    job_data_complete = {
        "job_id": "test-heuristic-complete",
        "source_channel": "whatsapp",
        "sender_id": "+999",
        "message_text": "Print 2 copies in B&W, A4 paper, double sided please",
    }
    res_complete = await agent.process_job_with_agent(job_data_complete)
    assert "queued in DynamoDB" in res_complete
    rec_complete = await agent.dynamodb_client.get_record_by_job_id("test-heuristic-complete")
    assert rec_complete["status"] == "queued"
    assert rec_complete["copies"] == 2
    assert rec_complete["color_mode"] == "bw"
    assert rec_complete["paper_size"] == "A4"
    assert rec_complete["sides"] == "double"


@pytest.mark.asyncio
async def test_api_endpoints():
    """Verify FastAPI endpoints: /health, POST /jobs, GET /jobs/{job_id}."""
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://testserver") as client:
        # 1. Health check
        health_resp = await client.get("/health")
        assert health_resp.status_code == 200
        assert health_resp.json()["status"] == "healthy"
        assert health_resp.json()["database"] == "DynamoDB"

        # 2. Enqueue Job
        job_payload = {
            "job_id": "api-test-job-999",
            "source_channel": "telegram",
            "sender_id": "user_456",
            "sender_name": "API Tester",
            "message_text": "3 copies, color, A4, single-sided",
            "file_url": "https://s3.amazonaws.com/test.pdf",
            "file_name": "test.pdf",
        }
        enqueue_resp = await client.post("/jobs", json=job_payload)
        assert enqueue_resp.status_code == 202
        data = enqueue_resp.json()
        assert data["job_id"] == "api-test-job-999"
        assert data["status"] == "queued"

        # 3. Query Job Status (from DynamoDB)
        # Seed record in DynamoDB
        dynamo = DynamoDBClient()
        await dynamo.create_or_init_job({
            "job_id": "api-test-job-999",
            "status": "queued",
            "source_channel": "telegram",
            "sender_id": "user_456",
            "copies": 3,
            "color_mode": "color",
            "paper_size": "A4",
            "sides": "single",
        })

        get_resp = await client.get("/jobs/api-test-job-999")
        assert get_resp.status_code == 200
        job_info = get_resp.json()
        assert job_info["job_id"] == "api-test-job-999"
        assert job_info["status"] == "queued"
        assert job_info["requirements"]["copies"] == 3

        # 4. Non-existent job
        not_found_resp = await client.get("/jobs/non-existent-id")
        assert not_found_resp.status_code == 404
@pytest.mark.asyncio
async def test_worker_process_job_task():
    """Verify ARQ process_job worker task execution."""
    ctx = {
        "job_try": 1,
        "http_client": None,
        "anthropic_client": None,
    }
    job_data = {
        "job_id": "test-worker-job-001",
        "source_channel": "telegram",
        "sender_id": "tg_user_1",
        "message_text": "Need 1 copy, A4, color, double sided please",
    }
    result = await process_job(ctx, job_data)
    assert "queued in DynamoDB" in result

    dynamo = DynamoDBClient()
    rec = await dynamo.get_record_by_job_id("test-worker-job-001")
    assert rec["status"] == "queued"
    assert rec["copies"] == 1
