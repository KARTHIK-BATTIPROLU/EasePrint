import os
import json
import logging
import asyncio
from typing import Dict, Any, List, Optional
from pydantic import BaseModel, Field
import boto3
from botocore.exceptions import ClientError
from app.config import settings

logger = logging.getLogger("print_queue_service.customizations")

CONFIG_DIR = "config"
os.makedirs(CONFIG_DIR, exist_ok=True)
LOCAL_CONFIG_PATH = os.path.join(CONFIG_DIR, "store_customizations.json")

CONFIG_RECORD_ID = "_config:store_customizations"


class PricingMatrix(BaseModel):
    bw_single: float = Field(default=2.0, description="Rate for A4 B&W single-sided per page in INR")
    bw_duplex: float = Field(default=3.0, description="Rate for A4 B&W double-sided per sheet in INR")
    color_standard: float = Field(default=10.0, description="Rate for A4 Color (75 GSM) per page in INR")
    color_glossy: float = Field(default=15.0, description="Rate for A4 Color (Glossy) per page in INR")
    spiral_binding: float = Field(default=30.0, description="Rate for Spiral Binding in INR")
    soft_binding: float = Field(default=50.0, description="Rate for Soft Binding in INR")
    hard_binding: float = Field(default=180.0, description="Rate for Hard Project/Thesis Binding in INR")
    corner_staple: float = Field(default=0.0, description="Rate for Corner Staple (usually free)")


class StoreCustomizations(BaseModel):
    store_name: str = Field(default="EasePrint Campus Xerox & Stationery", description="Store display name")
    business_context: str = Field(
        default=(
            "We are EasePrint, the premier student print and stationery center located inside the Hyderabad campus. "
            "We operate Monday through Saturday from 8:00 AM to 9:30 PM. "
            "We specialize in rapid academic printouts, thesis project binding with gold embossing, and color lab records. "
            "Corner stapling is always complimentary (free of charge). "
            "Students can pick up their orders from Counter 1 (Regular Xerox) or Counter 2 (Thesis & Binding)."
        ),
        description="Core business values, operating hours, and guidelines for the AI assistant"
    )
    pricing: PricingMatrix = Field(default_factory=PricingMatrix)
    uploaded_knowledge_docs: List[Dict[str, Any]] = Field(
        default_factory=list,
        description="List of uploaded knowledge documents with extracted text"
    )
    custom_rules: str = Field(
        default="Express turnaround under 10 minutes. For orders above ₹200, free soft binding is provided upon request.",
        description="Specific custom promotion or shop rules"
    )
    persona: str = Field(
        default="Friendly, efficient, and student-focused campus Xerox assistant with local Hyderabad warmth. Explains print options clearly, concisely, and patiently.",
        description="Active AI personality and communication tone (default base persona with optional user customization)"
    )
    last_updated: Optional[str] = None


class CustomizationManager:
    """Manages store pricing, business context, and RAG document knowledge base."""

    def __init__(self):
        self.cached_config: Optional[StoreCustomizations] = None
        self._dynamodb_resource = None
        self._table = None
        self._init_dynamo()

    def _init_dynamo(self):
        if settings.AWS_ACCESS_KEY_ID and settings.AWS_SECRET_ACCESS_KEY:
            try:
                self._dynamodb_resource = boto3.resource(
                    "dynamodb",
                    region_name=settings.AWS_REGION,
                    aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
                    aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
                )
                self._table = self._dynamodb_resource.Table(settings.DYNAMODB_TABLE_NAME)
            except Exception as e:
                logger.warning(f"Could not connect to DynamoDB for customizations: {e}")

    async def get_customizations(self) -> StoreCustomizations:
        """Fetch current customizations from DynamoDB, falling back to local file or defaults."""
        if self.cached_config:
            return self.cached_config

        # 1. Try reading from DynamoDB
        if self._table:
            try:
                def _get_item():
                    return self._table.get_item(Key={"job_id": CONFIG_RECORD_ID}).get("Item")
                item = await asyncio.to_thread(_get_item)
                if item and "payload" in item:
                    data = json.loads(item["payload"])
                    self.cached_config = StoreCustomizations(**data)
                    return self.cached_config
            except Exception as e:
                logger.warning(f"DynamoDB customizations fetch failed: {e}")

        # 2. Try reading from local file
        if os.path.exists(LOCAL_CONFIG_PATH):
            try:
                with open(LOCAL_CONFIG_PATH, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    self.cached_config = StoreCustomizations(**data)
                    return self.cached_config
            except Exception as e:
                logger.warning(f"Local customizations file read failed: {e}")

        # 3. Default fallback
        self.cached_config = StoreCustomizations()
        return self.cached_config

    async def save_customizations(self, config: StoreCustomizations) -> StoreCustomizations:
        """Save customizations to DynamoDB and local storage."""
        self.cached_config = config
        data = config.model_dump()
        payload_str = json.dumps(data, ensure_ascii=False)

        # 1. Save to local file
        try:
            with open(LOCAL_CONFIG_PATH, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
        except Exception as e:
            logger.error(f"Failed to save customizations to local file: {e}")

        # 2. Save to DynamoDB
        if self._table:
            try:
                def _put_item():
                    self._table.put_item(
                        Item={
                            "job_id": CONFIG_RECORD_ID,
                            "type": "store_configuration",
                            "payload": payload_str,
                            "updated_at": config.last_updated or "",
                        }
                    )
                await asyncio.to_thread(_put_item)
                logger.info("Saved customizations to DynamoDB table.")
            except Exception as e:
                logger.warning(f"Failed to write customizations to DynamoDB: {e}")

        return config

    def build_rag_prompt_context(self, config: StoreCustomizations) -> str:
        """Builds clear, highly structured context instructions for the Bedrock agent."""
        p = config.pricing
        docs_summary = ""
        if config.uploaded_knowledge_docs:
            docs_summary = "\n--- ADDITIONAL STORE KNOWLEDGE BASE DOCUMENTS ---\n"
            for doc in config.uploaded_knowledge_docs:
                docs_summary += f"Document [{doc.get('name', 'Knowledge Doc')}]:\n{doc.get('content', '')}\n\n"

        return f"""
--- AI ASSISTANT PERSONA & COMMUNICATION STYLE ---
Active Persona: {config.persona}

--- STORE IDENTITY & KNOWLEDGE BASE ---
Store Name: {config.store_name}
Business Context:
{config.business_context}

Custom Store Rules & Promos:
{config.custom_rules}
{docs_summary}
--- LIVE HYDERABAD PRICING MATRIX ---
- A4 Black & White (Single-sided): ₹{p.bw_single:.2f} per page
- A4 Black & White (Double-sided / Back-to-Back): ₹{p.bw_duplex:.2f} per sheet (₹{p.bw_duplex/2:.2f} per side)
- A4 Color (Standard 75 GSM): ₹{p.color_standard:.2f} per page
- A4 Color (Glossy Photo Paper): ₹{p.color_glossy:.2f} per page
- Spiral Binding: ₹{p.spiral_binding:.2f}
- Soft Binding: ₹{p.soft_binding:.2f}
- Hard Project / Thesis Binding: ₹{p.hard_binding:.2f}
- Corner Stapling: ₹{p.corner_staple:.2f} (Complimentary / Free)
"""


customizations_manager = CustomizationManager()
