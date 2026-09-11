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
from app.customizations import customizations_manager

logger = logging.getLogger("print_queue_service.bedrock_agent")


def clean_model_output(text: str) -> str:
    """Strips internal <thinking>...</thinking> tags and trims excess whitespace."""
    if not text:
        return ""
    cleaned = re.sub(r"<thinking>[\s\S]*?</thinking>", "", text, flags=re.IGNORECASE)
    cleaned = re.sub(r"^\s*[\r\n]+", "", cleaned)
    return cleaned.strip()


BEDROCK_TOOLS = [
    {
        "toolSpec": {
            "name": "calculate_hyderabad_price",
            "description": "Calculates the total print and binding price using active campus rates.",
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
            config = await customizations_manager.get_customizations()
            custom_rates = config.pricing.model_dump()
            pricing = calculate_hyderabad_price(
                pages=int(args.get("pages", 1)),
                copies=int(args.get("copies", 1)),
                color_mode=args.get("color_mode", "bw"),
                sides=args.get("sides", "single"),
                binding=args.get("binding", "none"),
                paper_type=args.get("paper_type", "standard"),
                custom_rates=custom_rates,
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

        elif name == "set_print_requirements":
            job_id = args.get("job_id")
            pages = int(args.get("pages", 1))
            copies = int(args.get("copies", 1))
            color_mode = args.get("color_mode", "bw")
            sides = args.get("sides", "single")
            binding = args.get("binding", "none")

            config = await customizations_manager.get_customizations()
            custom_rates = config.pricing.model_dump()
            pricing = calculate_hyderabad_price(
                pages=pages,
                copies=copies,
                color_mode=color_mode,
                sides=sides,
                binding=binding,
                custom_rates=custom_rates,
            )

            fields = {
                "pages": pages,
                "copies": copies,
                "color_mode": color_mode,
                "paper_size": args.get("paper_size", "A4"),
                "sides": sides,
                "binding": binding,
                "total_amount_inr": pricing.total_amount_inr,
                "pricing_summary": pricing.summary,
            }
            await self.dynamodb_client.update_job_fields(job_id, fields)
            return {"success": True, "job_id": job_id, "pricing": pricing.model_dump()}

        return {"error": f"Tool '{name}' not recognized"}

    async def _build_system_prompt(self) -> str:
        """Build dynamic system prompt with business context and live pricing."""
        config = await customizations_manager.get_customizations()
        rag_context = customizations_manager.build_rag_prompt_context(config)

        return f"""You are the EasePrint AI Specialist for {config.store_name}.
You assist students with document print orders, price estimates, binding options, store policies, and general stationery questions.

{rag_context}

FORMATTING & CONVERSATIONAL INSTRUCTIONS:
1. Always address the student's question directly and politely:
   - If they ask for a price (e.g., "Price for 10 pages color?", "How much for spiral binding?"), calculate or quote the exact price immediately.
   - If they ask about store hours, pickup counters, or rules, use the knowledge base above.
   - Do NOT talk about internal processes, sending questions, or background tools.
2. Structure your response with clean spacing:
   - Use double line breaks between distinct thoughts and paragraphs.
   - Use bold markdown for key figures, amounts in ₹, and options.
   - Use bullet points (- ) with clean line breaks for itemized lists or price breakdowns.
3. When the student is ready to confirm a print order with pages, copies, color, and sides:
   - Call calculate_hyderabad_price and set_print_requirements.
   - Provide a cheerful summary of their order and let them know it has been queued.
4. IMPORTANT: Never output <thinking> tags to the student. Speak directly in clean, helpful, professional language.
"""

    async def _run_heuristic_evaluator(self, job_data: Dict[str, Any]) -> Dict[str, Any]:
        """Rule-based fallback evaluator when Bedrock is offline."""
        job_id = job_data["job_id"]
        text = (job_data.get("message_text") or "").lower()
        pages = int(job_data.get("pages") or 1)

        copies = 1
        m_copies = re.search(r"(\d+)\s*(?:copies|copy|sets)", text)
        if m_copies:
            copies = max(1, int(m_copies.group(1)))

        color_mode = "color" if any(w in text for w in ["color", "colour", "multicolor"]) else "bw"
        sides = "double" if any(w in text for w in ["double", "duplex", "both sides", "two sided", "back to back"]) else "single"

        binding = "none"
        if "spiral" in text:
            binding = "spiral"
        elif "soft" in text:
            binding = "soft"
        elif any(w in text for w in ["hard", "thesis", "project"]):
            binding = "hard"
        elif "staple" in text:
            binding = "staple"

        config = await customizations_manager.get_customizations()
        custom_rates = config.pricing.model_dump()
        pricing = calculate_hyderabad_price(
            pages=pages,
            copies=copies,
            color_mode=color_mode,
            sides=sides,
            binding=binding,
            custom_rates=custom_rates,
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
            f"Understood! Your order for **{copies} cop{'y' if copies == 1 else 'ies'}** "
            f"({pricing.color_mode.upper()}, {pricing.sides.capitalize()}) is confirmed.\n\n"
            f"**Price Breakdown:**\n"
            f"- Document: **{pages} page(s)**\n"
            f"- Rate: **₹{pricing.rate_per_unit:.2f}** per unit\n"
            f"- Total: **₹{pricing.total_amount_inr:.2f}**\n\n"
            f"Job **#{job_id}** is now queued for printing at {config.store_name}."
        )
        return {"reply": reply, "pricing": pricing.model_dump(), "needs_clarification": False}

    async def process_job(self, job_data: Dict[str, Any]) -> Dict[str, Any]:
        """Main entry point to evaluate and process an incoming student message or print job."""
        job_id = job_data["job_id"]
        logger.info(f"Processing chat/job {job_id} with Bedrock Agent")

        # Ensure job exists in DynamoDB
        await self.dynamodb_client.create_or_init_job(job_data)

        if not self.is_bedrock_configured or not self.bedrock:
            logger.info("Bedrock not connected to live AWS; executing rule-based evaluator.")
            return await self._run_heuristic_evaluator(job_data)

        system_prompt = await self._build_system_prompt()
        msg_text = job_data.get("message_text", "")
        file_name = job_data.get("file_name")
        pages = job_data.get("pages", 1)

        user_content = f"Student message: \"{msg_text}\"\n"
        if file_name:
            user_content += f"Attached document: {file_name} ({pages} pages)\n"
        user_content += "Please respond to the student directly with helpful formatting, line breaks, and accurate price calculations."

        messages = [{"role": "user", "content": [{"text": user_content}]}]
        last_pricing = None

        try:
            for iteration in range(5):
                response = self.bedrock.converse(
                    modelId=self.model_id,
                    system=[{"text": system_prompt}],
                    messages=messages,
                    toolConfig={"tools": BEDROCK_TOOLS},
                )
                output_msg = response["output"]["message"]
                messages.append(output_msg)

                tool_requests = [c["toolUse"] for c in output_msg["content"] if "toolUse" in c]
                if not tool_requests:
                    raw_texts = [c["text"] for c in output_msg["content"] if "text" in c]
                    full_raw = " ".join(raw_texts)
                    cleaned = clean_model_output(full_raw)
                    if cleaned:
                        return {"reply": cleaned, "pricing": last_pricing, "needs_clarification": False}
                    elif last_pricing:
                        return {
                            "reply": f"Your order is calculated: **{last_pricing.get('summary')}**. Total: **₹{last_pricing.get('total_amount_inr'):.2f}**.",
                            "pricing": last_pricing,
                            "needs_clarification": False,
                        }

                tool_results = []
                for tool in tool_requests:
                    result = await self.execute_tool(tool["name"], tool["input"])
                    if tool["name"] == "calculate_hyderabad_price":
                        last_pricing = result
                    elif tool["name"] == "set_print_requirements" and "pricing" in result:
                        last_pricing = result["pricing"]

                    tool_results.append({
                        "toolResult": {
                            "toolUseId": tool["toolUseId"],
                            "content": [{"json": result}]
                        }
                    })
                messages.append({"role": "user", "content": tool_results})

            # If loop finished after tools without final text
            if last_pricing:
                return {
                    "reply": (
                        f"Here is your price estimate:\n\n"
                        f"• **{last_pricing.get('summary')}**\n"
                        f"• **Grand Total:** ₹{last_pricing.get('total_amount_inr', 0):.2f}\n\n"
                        f"Would you like me to queue this print job for you?"
                    ),
                    "pricing": last_pricing,
                    "needs_clarification": False,
                }

            return {"reply": "I'm here to help! Please let me know your print requirements or questions.", "needs_clarification": False}

        except ClientError as exc:
            logger.error(f"Bedrock converse call failed: {exc}. Falling back to heuristic.")
            return await self._run_heuristic_evaluator(job_data)
