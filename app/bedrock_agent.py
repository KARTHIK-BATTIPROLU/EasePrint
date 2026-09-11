import json
import logging
import re
from typing import Dict, Any, List, Optional
import httpx
import boto3
from botocore.exceptions import ClientError
from app.config import settings
from app.dynamodb_client import DynamoDBClient
from app.pricing import calculate_hyderabad_price, PricingBreakdown

logger = logging.getLogger("print_queue_service.bedrock_agent")

SYSTEM_PROMPT = """You are the EasePrint AI Specialist for a campus Xerox & print station in Hyderabad, Telangana.
Your role is to assist students with printout orders, verify print specifications, calculate accurate prices using the calculate_hyderabad_price tool, and queue confirmed jobs.

Standard Hyderabad Pricing Rules:
- A4 B&W (Single-sided): ₹2 per page
- A4 B&W (Double-sided / Back-to-back): ₹3 per sheet (₹1.50 per side)
- A4 Color: ₹10 per page (Standard 75 GSM), ₹15 per page (Glossy)
- Spiral Binding: ₹30 (up to 100 pages)
- Soft Binding: ₹50
- Hard Project / Thesis Binding: ₹180
- Corner Stapling: Included (Free)

Guidelines:
1. Review the request. If copies, color mode (color vs bw), or sides (single vs double) are missing, ask ONE clear clarifying question using ask_clarifying_question.
2. If specs are clear, invoke calculate_hyderabad_price and explain the itemized total in INR (₹).
3. Call set_print_requirements to save the specs and price to DynamoDB, then update_job_status to 'queued'.
4. Never fabricate prices or print settings without checking tools.
"""

BEDROCK_TOOLS = [
    {
        "toolSpec": {
            "name": "calculate_hyderabad_price",
            "description": "Calculates the total print and binding price using Hyderabad market rates.",
            "inputSchema": {
                "json": {
                    "type": "object",
                    "properties": {
                        "pages": {"type": "integer", "description": "Number of document pages"},
                        "copies": {"type": "integer", "description": "Number of copies (minimum 1)"},
                        "color_mode": {"type": "string", "enum": ["color", "bw"], "description": "Color or black & white"},
                        "sides": {"type": "string", "enum": ["single", "double"], "description": "Single or double sided"},
                        "binding": {"type": "string", "enum": ["none", "staple", "spiral", "soft", "hard"], "description": "Binding type"},
                        "paper_type": {"type": "string", "enum": ["standard", "glossy"], "description": "Paper type"}
                    },
                    "required": ["pages", "copies", "color_mode", "sides"]
                }
            }
        }
    },
    {
        "toolSpec": {
            "name": "get_job_details",
            "description": "Retrieves the current job metadata and status from DynamoDB.",
            "inputSchema": {
                "json": {
                    "type": "object",
                    "properties": {
                        "job_id": {"type": "string", "description": "Unique job ID"}
                    },
                    "required": ["job_id"]
                }
            }
        }
    },
    {
        "toolSpec": {
            "name": "update_job_status",
            "description": "Updates the job status in DynamoDB.",
            "inputSchema": {
                "json": {
                    "type": "object",
                    "properties": {
                        "job_id": {"type": "string", "description": "Unique job ID"},
                        "status": {
                            "type": "string",
                            "enum": ["received", "needs_info", "queued", "processing", "ready", "completed"],
                            "description": "Target status"
                        },
                        "notes": {"type": "string", "description": "Optional status notes"}
                    },
                    "required": ["job_id", "status"]
                }
            }
        }
    },
    {
        "toolSpec": {
            "name": "ask_clarifying_question",
            "description": "Sends a clarifying question back to the student channel via n8n relay.",
            "inputSchema": {
                "json": {
                    "type": "object",
                    "properties": {
                        "job_id": {"type": "string", "description": "Unique job ID"},
                        "channel": {"type": "string", "description": "Source channel"},
                        "sender_id": {"type": "string", "description": "Student phone, chat ID, or session ID"},
                        "question_text": {"type": "string", "description": "The question to send"}
                    },
                    "required": ["job_id", "channel", "sender_id", "question_text"]
                }
            }
        }
    },
    {
        "toolSpec": {
            "name": "set_print_requirements",
            "description": "Persists structured print options and pricing to DynamoDB.",
            "inputSchema": {
                "json": {
                    "type": "object",
                    "properties": {
                        "job_id": {"type": "string", "description": "Unique job ID"},
                        "pages": {"type": "integer", "description": "Document page count"},
                        "copies": {"type": "integer", "description": "Copies count"},
                        "color_mode": {"type": "string", "enum": ["color", "bw"], "description": "Color or black & white"},
                        "paper_size": {"type": "string", "enum": ["A4", "A3", "Letter"], "description": "Paper size"},
                        "sides": {"type": "string", "enum": ["single", "double"], "description": "Sides"},
                        "binding": {"type": "string", "enum": ["none", "staple", "spiral", "soft", "hard"], "description": "Binding type"}
                    },
                    "required": ["job_id", "copies", "color_mode", "sides"]
                }
            }
        }
    }
]


class BedrockPrintAgent:
    def __init__(
        self,
        dynamodb_client: Optional[DynamoDBClient] = None,
        http_client: Optional[httpx.AsyncClient] = None,
    ):
        self.dynamodb_client = dynamodb_client or DynamoDBClient()
        self.http_client = http_client or httpx.AsyncClient(timeout=8.0)
        self.model_id = settings.BEDROCK_MODEL_ID
        self.region = settings.BEDROCK_REGION

        # Initialize boto3 bedrock-runtime
        boto_kwargs: Dict[str, Any] = {"region_name": self.region}
        if settings.AWS_ACCESS_KEY_ID and settings.AWS_SECRET_ACCESS_KEY:
            boto_kwargs["aws_access_key_id"] = settings.AWS_ACCESS_KEY_ID
            boto_kwargs["aws_secret_access_key"] = settings.AWS_SECRET_ACCESS_KEY

        try:
            self.bedrock = boto3.client("bedrock-runtime", **boto_kwargs)
            self.is_bedrock_configured = bool(settings.AWS_ACCESS_KEY_ID or "aws" in settings.BEDROCK_REGION)
        except Exception as exc:
            logger.warning(f"Bedrock client not initialized ({exc}). Operating in heuristic fallback.")
            self.bedrock = None
            self.is_bedrock_configured = False

    async def execute_tool(self, name: str, args: Dict[str, Any]) -> Any:
        """Executes tool calls generated by Bedrock or the heuristic evaluator."""
        logger.info(f"Executing Bedrock tool '{name}' with args: {args}")

        if name == "calculate_hyderabad_price":
            pricing = calculate_hyderabad_price(
                pages=int(args.get("pages", 1)),
                copies=int(args.get("copies", 1)),
                color_mode=args.get("color_mode", "bw"),
                sides=args.get("sides", "single"),
                binding=args.get("binding", "none"),
                paper_type=args.get("paper_type", "standard"),
            )
            return pricing.model_dump()

        elif name == "get_job_details":
            job_id = args.get("job_id")
            record = await self.dynamodb_client.get_record_by_job_id(job_id)
            return record or {"error": f"Job {job_id} not found"}

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

            await self.dynamodb_client.update_job_status(
                job_id=job_id,
                status="needs_info",
                notes=f"Question: {question_text}",
            )

            # Fire webhook relay
            payload = {
                "job_id": job_id,
                "target_channel": channel,
                "sender_id": sender_id,
                "question": question_text,
                "event": "clarification_needed",
            }
            dispatched = True
            try:
                if settings.N8N_CALLBACK_URL:
                    await self.http_client.post(settings.N8N_CALLBACK_URL, json=payload)
                else:
                    dispatched = False
            except Exception as exc:
                logger.warning(f"Could not reach n8n callback URL: {exc}")
                dispatched = False

            return {
                "success": True,
                "dispatched_to_relay": dispatched,
                "sent_to": channel,
                "question": question_text,
            }

        elif name == "set_print_requirements":
            job_id = args.get("job_id")
            pages = int(args.get("pages", 1))
            copies = int(args.get("copies", 1))
            color_mode = args.get("color_mode", "bw")
            paper_size = args.get("paper_size", "A4")
            sides = args.get("sides", "single")
            binding = args.get("binding", "none")

            pricing = calculate_hyderabad_price(
                pages=pages,
                copies=copies,
                color_mode=color_mode,
                sides=sides,
                binding=binding,
            )

            success = await self.dynamodb_client.set_print_requirements(
                job_id=job_id,
                copies=copies,
                color_mode=color_mode,
                paper_size=paper_size,
                sides=sides,
                pages=pages,
                binding=binding,
                pricing_data=pricing.model_dump(),
            )
            return {"success": success, "pricing": pricing.model_dump()}

        return {"error": f"Unknown tool '{name}'"}

    async def _run_heuristic_evaluator(self, job_data: Dict[str, Any]) -> Dict[str, Any]:
        """Rule-based parsing fallback with Hyderabad pricing."""
        job_id = job_data["job_id"]
        text = (job_data.get("message_text") or "").lower()
        channel = job_data.get("source_channel", "web")
        sender_id = job_data.get("sender_id", "")
        pages = int(job_data.get("pages", 1))

        # Check copies
        copies_match = re.search(r"(\d+)\s*(copy|copies)", text)
        copies = int(copies_match.group(1)) if copies_match else 1

        # Check color
        color_mode = "bw"
        if "color" in text or "colour" in text:
            color_mode = "color"

        # Check sides
        sides = "single"
        if any(w in text for w in ["double", "duplex", "both sides", "two sided", "two-sided", "back to back"]):
            sides = "double"

        # Check binding
        binding = "none"
        if "spiral" in text:
            binding = "spiral"
        elif "soft" in text:
            binding = "soft"
        elif "hard" in text or "thesis" in text or "project" in text:
            binding = "hard"
        elif "staple" in text:
            binding = "staple"

        # Check if user message is too vague
        if len(text.strip()) < 4 and not job_data.get("file_url"):
            question = "Hello! Please specify how many copies you need, color or B&W, and single or double-sided."
            await self.execute_tool("ask_clarifying_question", {
                "job_id": job_id,
                "channel": channel,
                "sender_id": sender_id,
                "question_text": question
            })
            return {"reply": question, "needs_clarification": True}

        # Calculate pricing
        pricing = calculate_hyderabad_price(
            pages=pages,
            copies=copies,
            color_mode=color_mode,
            sides=sides,
            binding=binding,
        )

        await self.execute_tool("set_print_requirements", {
            "job_id": job_id,
            "pages": pages,
            "copies": copies,
            "color_mode": color_mode,
            "paper_size": "A4",
            "sides": sides,
            "binding": binding,
        })
        await self.execute_tool("update_job_status", {
            "job_id": job_id,
            "status": "queued",
            "notes": "Requirements validated and queued."
        })

        reply = (
            f"Understood! Your order for {copies} cop{'y' if copies == 1 else 'ies'} "
            f"({pricing.color_mode.upper()}, {pricing.sides.capitalize()}) is confirmed. "
            f"{pricing.summary}. Job #{job_id} is now queued for printing."
        )
        return {"reply": reply, "pricing": pricing.model_dump(), "needs_clarification": False}

    async def process_job(self, job_data: Dict[str, Any]) -> Dict[str, Any]:
        """Main entry point to evaluate and process an incoming print job."""
        job_id = job_data["job_id"]
        logger.info(f"Processing job {job_id} with Bedrock Agent")

        # Ensure job exists in DynamoDB
        await self.dynamodb_client.create_or_init_job(job_data)

        # In local or test environments without active AWS credentials, use heuristic engine
        if not self.is_bedrock_configured or not self.bedrock:
            logger.info("Bedrock not connected to live AWS; executing rule-based evaluator.")
            return await self._run_heuristic_evaluator(job_data)

        # Bedrock Converse API invocation
        prompt = (
            f"Review this incoming print order:\n"
            f"Job ID: {job_id}\n"
            f"Channel: {job_data.get('source_channel')}\n"
            f"Sender: {job_data.get('sender_id')}\n"
            f"Message: \"{job_data.get('message_text', '')}\"\n"
            f"File: {job_data.get('file_name')} ({job_data.get('file_url')})\n"
            f"Pages: {job_data.get('pages', 1)}\n\n"
            f"Determine if print specifications (copies, color, sides) are clear. "
            f"If unclear, ask ONE question via ask_clarifying_question. "
            f"If clear, call calculate_hyderabad_price, set_print_requirements, and update status to 'queued'."
        )

        messages = [{"role": "user", "content": [{"text": prompt}]}]

        try:
            for iteration in range(5):
                response = self.bedrock.converse(
                    modelId=self.model_id,
                    system=[{"text": SYSTEM_PROMPT}],
                    messages=messages,
                    toolConfig={"tools": BEDROCK_TOOLS},
                )
                output_msg = response["output"]["message"]
                messages.append(output_msg)

                tool_requests = [c["toolUse"] for c in output_msg["content"] if "toolUse" in c]
                if not tool_requests:
                    text_parts = [c["text"] for c in output_msg["content"] if "text" in c]
                    return {"reply": " ".join(text_parts), "needs_clarification": False}

                tool_results = []
                for tool in tool_requests:
                    result = await self.execute_tool(tool["name"], tool["input"])
                    tool_results.append({
                        "toolResult": {
                            "toolUseId": tool["toolUseId"],
                            "content": [{"json": result}]
                        }
                    })
                messages.append({"role": "user", "content": tool_results})

            return {"reply": "Order analyzed and queued.", "needs_clarification": False}
        except ClientError as exc:
            logger.error(f"Bedrock converse call failed: {exc}. Falling back to heuristic.")
            return await self._run_heuristic_evaluator(job_data)
