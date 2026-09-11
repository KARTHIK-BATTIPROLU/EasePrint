import json
import logging
import re
from typing import Dict, Any, List, Optional
import httpx
from anthropic import AsyncAnthropic
from app.config import settings
from app.dynamodb_client import DynamoDBClient

logger = logging.getLogger("print_queue_service.agent")

SYSTEM_PROMPT = (
    "You are a print-shop intake agent. Given a submitted job, determine if you have enough information "
    "to queue it for printing (copies, color mode, paper size, sidedness). If information is missing, "
    "ask ONE clear clarifying question at a time via the ask_clarifying_question tool. "
    "Once complete, call set_print_requirements then update_job_status to 'queued'. "
    "Never fabricate missing print settings."
)

AGENT_TOOLS = [
    {
        "name": "get_job_details",
        "description": "Reads the current details and metadata of the print job from DynamoDB.",
        "input_schema": {
            "type": "object",
            "properties": {
                "job_id": {"type": "string", "description": "The unique job identifier"}
            },
            "required": ["job_id"]
        }
    },
    {
        "name": "update_job_status",
        "description": "Updates the print job status in DynamoDB.",
        "input_schema": {
            "type": "object",
            "properties": {
                "job_id": {"type": "string", "description": "The unique job identifier"},
                "status": {
                    "type": "string",
                    "enum": ["received", "needs_info", "queued", "processing", "ready", "completed"],
                    "description": "The target status"
                },
                "notes": {"type": "string", "description": "Optional notes or reason for status update"}
            },
            "required": ["job_id", "status"]
        }
    },
    {
        "name": "ask_clarifying_question",
        "description": "Sends a clarifying question to the customer via n8n webhook relay.",
        "input_schema": {
            "type": "object",
            "properties": {
                "job_id": {"type": "string", "description": "The unique job identifier"},
                "channel": {"type": "string", "description": "The source channel (whatsapp, telegram, web)"},
                "sender_id": {"type": "string", "description": "Sender identifier"},
                "question_text": {"type": "string", "description": "The clarifying question to send"}
            },
            "required": ["job_id", "channel", "sender_id", "question_text"]
        }
    },
    {
        "name": "set_print_requirements",
        "description": "Sets the structured print requirements for the job in DynamoDB once known.",
        "input_schema": {
            "type": "object",
            "properties": {
                "job_id": {"type": "string", "description": "The unique job identifier"},
                "copies": {"type": "integer", "description": "Number of copies (minimum 1)"},
                "color_mode": {"type": "string", "enum": ["color", "bw"], "description": "Color mode"},
                "paper_size": {"type": "string", "enum": ["A4", "A3", "Letter", "Legal"], "description": "Paper size"},
                "sides": {"type": "string", "enum": ["single", "double"], "description": "Single or double sided"}
            },
            "required": ["job_id", "copies", "color_mode", "paper_size", "sides"]
        }
    }
]


class PrintAgent:
    def __init__(
        self,
        anthropic_client: Optional[AsyncAnthropic] = None,
        http_client: Optional[httpx.AsyncClient] = None,
        dynamodb_client: Optional[DynamoDBClient] = None,
    ):
        self.anthropic_client = anthropic_client
        self.http_client = http_client or httpx.AsyncClient(timeout=5.0)
        self.dynamodb_client = dynamodb_client or DynamoDBClient()
        self.model = settings.MODEL_NAME

    async def execute_tool(self, name: str, args: Dict[str, Any]) -> Any:
        """Executes a tool called by the Claude agent."""
        logger.info(f"Executing tool '{name}' with arguments: {args}")

        if name == "get_job_details":
            job_id = args.get("job_id")
            record = await self.dynamodb_client.get_record_by_job_id(job_id)
            return record or {"error": f"Job {job_id} not found in DynamoDB"}

        elif name == "update_job_status":
            job_id = args.get("job_id")
            status = args.get("status")
            notes = args.get("notes")
            success = await self.dynamodb_client.update_job_status(job_id, status, notes)
            return {"success": success, "job_id": job_id, "status": status}

        elif name == "ask_clarifying_question":
            job_id = args.get("job_id")
            channel = args.get("channel")
            sender_id = args.get("sender_id")
            question_text = args.get("question_text")

            # Update status in DynamoDB to needs_info
            await self.dynamodb_client.update_job_status(
                job_id=job_id,
                status="needs_info",
                notes=f"Question asked: {question_text}"
            )

            # Send callback to n8n webhook
            payload = {
                "job_id": job_id,
                "channel": channel,
                "sender_id": sender_id,
                "question": question_text,
                "event": "clarification_needed",
            }
            dispatched = True
            try:
                if settings.N8N_CALLBACK_URL:
                    response = await self.http_client.post(settings.N8N_CALLBACK_URL, json=payload)
                    logger.info(f"Sent clarification callback to n8n ({response.status_code}): {payload}")
                else:
                    logger.warning("N8N_CALLBACK_URL not set; skipping webhook POST")
                    dispatched = False
            except Exception as exc:
                logger.warning(f"Failed to post clarification to n8n webhook: {exc}")
                dispatched = False

            return {
                "success": True,
                "dispatched_to_relay": dispatched,
                "sent_to": channel,
                "question": question_text,
            }

        elif name == "set_print_requirements":
            job_id = args.get("job_id")
            copies = int(args.get("copies", 1))
            color_mode = args.get("color_mode", "bw")
            paper_size = args.get("paper_size", "A4")
            sides = args.get("sides", "single")

            success = await self.dynamodb_client.set_print_requirements(
                job_id=job_id,
                copies=copies,
                color_mode=color_mode,
                paper_size=paper_size,
                sides=sides,
            )
            return {
                "success": success,
                "requirements": {
                    "copies": copies,
                    "color_mode": color_mode,
                    "paper_size": paper_size,
                    "sides": sides,
                }
            }

        else:
            logger.warning(f"Unknown tool name: {name}")
            return {"error": f"Tool '{name}' is not recognized"}

    async def _run_heuristic_fallback(self, job_data: Dict[str, Any]) -> str:
        """Fallback rule-based evaluation when ANTHROPIC_API_KEY is not supplied."""
        logger.info(f"Running heuristic evaluator for job {job_data.get('job_id')}")
        job_id = job_data["job_id"]
        text = (job_data.get("message_text") or "").lower()
        channel = job_data.get("source_channel", "web")
        sender_id = job_data.get("sender_id", "")

        # Check for copies
        copies_match = re.search(r"(\d+)\s*(copy|copies)", text)
        copies = int(copies_match.group(1)) if copies_match else None

        # Check for color
        color_mode = None
        if "color" in text or "colour" in text:
            color_mode = "color"
        elif "b&w" in text or "bw" in text or "black and white" in text or "grayscale" in text or "black & white" in text:
            color_mode = "bw"

        # Check for paper size
        paper_size = None
        for size in ["a4", "a3", "letter", "legal"]:
            if size in text:
                paper_size = size.upper()
                break

        # Check for sidedness
        sides = None
        if "double" in text or "duplex" in text or "both sides" in text or "two sided" in text or "two-sided" in text:
            sides = "double"
        elif "single" in text or "simplex" in text or "one sided" in text or "one-sided" in text:
            sides = "single"

        missing = []
        if copies is None:
            missing.append("number of copies")
        if color_mode is None:
            missing.append("color or black & white")
        if paper_size is None:
            missing.append("paper size (A4, A3, etc.)")
        if sides is None:
            missing.append("single-sided or double-sided")

        if missing:
            question = f"Could you please specify the {missing[0]} for your print job?"
            await self.execute_tool("ask_clarifying_question", {
                "job_id": job_id,
                "channel": channel,
                "sender_id": sender_id,
                "question_text": question
            })
            return f"Clarification requested for: {', '.join(missing)}"
        else:
            await self.execute_tool("set_print_requirements", {
                "job_id": job_id,
                "copies": copies,
                "color_mode": color_mode,
                "paper_size": paper_size,
                "sides": sides
            })
            await self.execute_tool("update_job_status", {
                "job_id": job_id,
                "status": "queued",
                "notes": "All print requirements validated"
            })
            return "Print requirements successfully set and job queued in DynamoDB."

    async def process_job_with_agent(self, job_data: Dict[str, Any]) -> str:
        """Main entry point to execute the agent tool-use loop on an incoming job."""
        job_id = job_data["job_id"]
        logger.info(f"Processing job {job_id} through print intake agent.")

        # Ensure job is present in DynamoDB
        await self.dynamodb_client.create_or_init_job(job_data)

        # Fallback if no Anthropic API key configured
        if not settings.ANTHROPIC_API_KEY:
            logger.info("ANTHROPIC_API_KEY not configured. Using heuristic evaluation fallback.")
            return await self._run_heuristic_fallback(job_data)

        client = self.anthropic_client or AsyncAnthropic(api_key=settings.ANTHROPIC_API_KEY)

        user_content = (
            f"Here is an incoming print job request:\n"
            f"- Job ID: {job_id}\n"
            f"- Channel: {job_data.get('source_channel')}\n"
            f"- Sender ID: {job_data.get('sender_id')}\n"
            f"- Sender Name: {job_data.get('sender_name')}\n"
            f"- Message Text: \"{job_data.get('message_text', '')}\"\n"
            f"- File Name: {job_data.get('file_name')}\n"
            f"- File URL: {job_data.get('file_url')}\n\n"
            f"Please review the print specifications and determine if all 4 required parameters are present: "
            f"(1) copies, (2) color_mode ('color' or 'bw'), (3) paper_size ('A4', 'A3', 'Letter', 'Legal'), "
            f"and (4) sides ('single' or 'double').\n"
            f"If any are missing, ask ONE clarifying question via ask_clarifying_question. "
            f"If all are provided, call set_print_requirements and then update_job_status to 'queued'."
        )

        messages: List[Dict[str, Any]] = [
            {"role": "user", "content": user_content}
        ]

        max_iterations = 6
        for iteration in range(max_iterations):
            logger.info(f"Agent iteration {iteration + 1}/{max_iterations} for job {job_id}")

            response = await client.messages.create(
                model=self.model,
                system=SYSTEM_PROMPT,
                messages=messages,
                tools=AGENT_TOOLS,
                max_tokens=1024,
            )

            tool_calls = [block for block in response.content if block.type == "tool_use"]

            # If no tool calls, return agent message
            if not tool_calls:
                text_blocks = [b.text for b in response.content if b.type == "text"]
                final_text = " ".join(text_blocks)
                logger.info(f"Agent completed without further tool calls: {final_text}")
                return final_text

            # Append assistant message with its tool calls
            messages.append({"role": "assistant", "content": response.content})

            # Execute tool calls and gather tool results
            tool_results = []
            for tool_call in tool_calls:
                result = await self.execute_tool(tool_call.name, tool_call.input)
                tool_results.append({
                    "type": "tool_result",
                    "tool_use_id": tool_call.id,
                    "content": json.dumps(result),
                })

            messages.append({"role": "user", "content": tool_results})

        logger.warning(f"Agent reached maximum iterations ({max_iterations}) for job {job_id}")
        return "Agent reached maximum tool-use iterations."
