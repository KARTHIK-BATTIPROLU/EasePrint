from enum import Enum
from typing import Optional, Any, Dict
from pydantic import BaseModel, Field


class ChannelType(str, Enum):
    WHATSAPP = "whatsapp"
    TELEGRAM = "telegram"
    WEB = "web"


class JobStatus(str, Enum):
    RECEIVED = "received"
    NEEDS_INFO = "needs_info"
    QUEUED = "queued"
    PROCESSING = "processing"
    READY = "ready"
    COMPLETED = "completed"


class ColorMode(str, Enum):
    COLOR = "color"
    BW = "bw"


class PaperSize(str, Enum):
    A4 = "A4"
    A3 = "A3"
    LETTER = "Letter"
    LEGAL = "Legal"


class Sides(str, Enum):
    SINGLE = "single"
    DOUBLE = "double"


class JobIn(BaseModel):
    job_id: str = Field(..., description="Unique job UUID or ID")
    source_channel: str = Field(..., description="whatsapp, telegram, or web")
    sender_id: str = Field(..., description="Identifier of the sender (e.g. phone number, chat ID, web session ID)")
    sender_name: Optional[str] = Field(default="Anonymous", description="Display name of sender")
    message_text: Optional[str] = Field(default="", description="Original message/instructions")
    file_url: Optional[str] = Field(default=None, description="Storage URL of file (e.g. S3 link)")
    file_name: Optional[str] = Field(default=None, description="Name of uploaded file")
    received_at: Optional[str] = Field(default=None, description="ISO 8601 timestamp string")


class PrintRequirements(BaseModel):
    copies: int = Field(default=1, ge=1, description="Number of copies")
    color_mode: ColorMode = Field(default=ColorMode.BW, description="Color or black & white")
    paper_size: PaperSize = Field(default=PaperSize.A4, description="Paper size")
    sides: Sides = Field(default=Sides.SINGLE, description="Single or double sided")


class JobEnqueueResponse(BaseModel):
    job_id: str
    status: str = "queued"
    message: str = "Job accepted and enqueued for processing"


class JobDetailResponse(BaseModel):
    job_id: str
    status: str
    source_channel: Optional[str] = None
    sender_id: Optional[str] = None
    sender_name: Optional[str] = None
    message_text: Optional[str] = None
    file_url: Optional[str] = None
    file_name: Optional[str] = None
    requirements: Optional[Dict[str, Any]] = None
    notes: Optional[str] = None
    received_at: Optional[str] = None
    raw_fields: Optional[Dict[str, Any]] = None
