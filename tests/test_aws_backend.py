import pytest
from httpx import AsyncClient, ASGITransport
from app.pricing import calculate_hyderabad_price
from app.session_store import session_store
from app.bedrock_agent import BedrockPrintAgent
from app.dynamodb_client import DynamoDBClient
from app.main import app, handler


def test_hyderabad_pricing_calculations():
    """Verify Hyderabad market rate calculations."""
    # 1. 10 pages, B&W Single-sided, 1 copy: 10 * 2 = ₹20.00
    p1 = calculate_hyderabad_price(pages=10, copies=1, color_mode="bw", sides="single")
    assert p1.print_cost == 20.0
    assert p1.binding_cost == 0.0
    assert p1.total_amount_inr == 20.0

    # 2. 10 pages, B&W Double-sided (5 sheets), 2 copies: 5 * 3 * 2 = ₹30.00
    p2 = calculate_hyderabad_price(pages=10, copies=2, color_mode="bw", sides="double")
    assert p2.sheets_per_copy == 5
    assert p2.print_cost == 30.0
    assert p2.total_amount_inr == 30.0

    # 3. 5 pages, Color Single-sided (Standard 75 GSM), 1 copy: 5 * 10 = ₹50.00
    p3 = calculate_hyderabad_price(pages=5, copies=1, color_mode="color", sides="single")
    assert p3.print_cost == 50.0
    assert p3.total_amount_inr == 50.0

    # 4. 20 pages, B&W Double-sided + Spiral Binding (₹30), 1 copy: (10 * 3) + 30 = ₹60.00
    p4 = calculate_hyderabad_price(pages=20, copies=1, color_mode="bw", sides="double", binding="spiral")
    assert p4.print_cost == 30.0
    assert p4.binding_cost == 30.0
    assert p4.total_amount_inr == 60.0

    # 5. Thesis Hard Binding (₹180):
    p5 = calculate_hyderabad_price(pages=50, copies=1, color_mode="bw", sides="single", binding="hard")
    assert p5.binding_cost == 180.0
    assert p5.total_amount_inr == 280.0


@pytest.mark.asyncio
async def test_session_store_operations():
    """Verify ElastiCache / Redis session memory store."""
    sess_id = "test-session-12345"
    await session_store.clear_history(sess_id)

    # Append turns
    await session_store.append_message(sess_id, "user", "Hello, how much for 10 pages?")
    await session_store.append_message(sess_id, "assistant", "10 pages B&W single-sided will be ₹20.")

    history = await session_store.get_history(sess_id)
    assert len(history) == 2
    assert history[0]["role"] == "user"
    assert "10 pages" in history[0]["content"]
    assert history[1]["role"] == "assistant"
    assert "₹20" in history[1]["content"]

    await session_store.clear_history(sess_id)
    empty_history = await session_store.get_history(sess_id)
    assert len(empty_history) == 0


@pytest.mark.asyncio
async def test_bedrock_agent_tool_dispatch():
    """Verify Bedrock agent tool execution."""
    agent = BedrockPrintAgent()
    job_id = "test-bedrock-001"

    # Seed job in DynamoDB
    await agent.dynamodb_client.create_or_init_job({
        "job_id": job_id,
        "status": "received",
        "source_channel": "web",
        "sender_id": "student_1",
    })

    # 1. Price tool
    price_res = await agent.execute_tool("calculate_hyderabad_price", {
        "pages": 15,
        "copies": 2,
        "color_mode": "bw",
        "sides": "double",
        "binding": "spiral"
    })
    assert price_res["total_amount_inr"] > 0

    # 2. Set requirements tool
    set_res = await agent.execute_tool("set_print_requirements", {
        "job_id": job_id,
        "pages": 15,
        "copies": 2,
        "color_mode": "bw",
        "paper_size": "A4",
        "sides": "double",
        "binding": "spiral",
    })
    assert set_res["success"] is True

    record = await agent.dynamodb_client.get_record_by_job_id(job_id)
    assert record["binding"] == "spiral"
    assert record["total_amount_inr"] == set_res["pricing"]["total_amount_inr"]


@pytest.mark.asyncio
async def test_fastapi_pricing_endpoint():
    """Verify POST /pricing/calculate endpoint."""
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://testserver") as client:
        resp = await client.post("/pricing/calculate", json={
            "pages": 24,
            "copies": 3,
            "color_mode": "bw",
            "sides": "double",
            "binding": "spiral"
        })
        assert resp.status_code == 200
        data = resp.json()
        assert data["sheets_per_copy"] == 12
        assert data["print_cost"] == 108.0  # 12 sheets * 3 * 3 copies
        assert data["binding_cost"] == 90.0  # 30 * 3 copies
        assert data["total_amount_inr"] == 198.0


@pytest.mark.asyncio
async def test_fastapi_student_chat_endpoint():
    """Verify POST /chat endpoint."""
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://testserver") as client:
        resp = await client.post("/chat", json={
            "session_id": "test_web_student_99",
            "source_channel": "web",
            "sender_name": "Rohan",
            "message": "I need 2 copies of my notes in color double-sided please",
            "pages": 10,
        })
        assert resp.status_code == 200
        data = resp.json()
        assert "reply" in data
        assert data["session_id"] == "test_web_student_99"
        assert data["pricing"] is not None
        assert data["pricing"]["total_amount_inr"] > 0


@pytest.mark.asyncio
async def test_fastapi_backward_completion_alert():
    """Verify POST /jobs/{job_id}/print-ready backward notification endpoint."""
    dynamo = DynamoDBClient()
    job_id = "test-completion-job-777"
    await dynamo.create_or_init_job({
        "job_id": job_id,
        "status": "queued",
        "source_channel": "whatsapp",
        "sender_id": "+919876543210",
        "total_amount_inr": 102.0,
    })

    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://testserver") as client:
        resp = await client.post(f"/jobs/{job_id}/print-ready", json={
            "pickup_counter": "Counter 2 (Express)",
            "staff_notes": "Stapled and ready"
        })
        assert resp.status_code == 200
        data = resp.json()
        assert data["success"] is True
        assert data["job_id"] == job_id
        assert data["outbound_payload"]["target_channel"] == "whatsapp"
        assert data["outbound_payload"]["pickup_counter"] == "Counter 2 (Express)"
        assert "Counter 2 (Express)" in data["outbound_payload"]["message"]

        # Verify status in DynamoDB is now ready
        updated_rec = await dynamo.get_record_by_job_id(job_id)
        assert updated_rec["status"] == "ready"
        assert updated_rec["pickup_counter"] == "Counter 2 (Express)"


def test_mangum_handler_callable():
    """Verify Mangum AWS Lambda handler is properly instantiated."""
    assert callable(handler)
