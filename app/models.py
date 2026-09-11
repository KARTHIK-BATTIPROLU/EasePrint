from enum import Enum
from typing import Optional, Any, Dict, List
from pydantic import BaseModel, Field
from app.pricing import PricingBreakdown


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


class BindingType(str, Enum):
    NONE = "none"
    STAPLE = "staple"
    SPIRAL = "spiral"
    SOFT = "soft"
    HARD = "hard"


class PaperType(str, Enum):
    STANDARD = "standard"
    GLOSSY = "glossy"


class JobIn(BaseModel):
    job_id: str = Field(..., description="Unique job UUID or ID")
    source_channel: str = Field(..., description="whatsapp, telegram, or web")
    sender_id: str = Field(..., description="Identifier of the sender")
    sender_name: Optional[str] = Field(default="Anonymous", description="Display name of sender")
    message_text: Optional[str] = Field(default="", description="Original message or instructions")
    file_url: Optional[str] = Field(default=None, description="Storage URL of file (e.g. S3 link)")
    file_name: Optional[str] = Field(default=None, description="Name of uploaded file")
    received_at: Optional[str] = Field(default=None, description="ISO 8601 timestamp string")


class PrintRequirements(BaseModel):
    pages: int = Field(default=1, ge=1, description="Number of document pages")
    copies: int = Field(default=1, ge=1, description="Number of copies")
    color_mode: ColorMode = Field(default=ColorMode.BW, description="color or bw")
    paper_size: PaperSize = Field(default=PaperSize.A4, description="Paper size")
    sides: Sides = Field(default=Sides.SINGLE, description="single or double")
    binding: BindingType = Field(default=BindingType.NONE, description="Binding type")
    paper_type: PaperType = Field(default=PaperType.STANDARD, description="Paper quality")


class PricingRequest(BaseModel):
    pages: int = Field(1, ge=1, description="Document page count")
    copies: int = Field(1, ge=1, description="Copies requested")
    color_mode: str = Field("bw", description="color or bw")
    sides: str = Field("single", description="single or double")
    binding: str = Field("none", description="none, staple, spiral, soft, hard")
    paper_type: str = Field("standard", description="standard or glossy")


class ChatRequest(BaseModel):
    session_id: str = Field(..., description="Unique user or session identifier")
    source_channel: str = Field(default="web", description="whatsapp, telegram, or web")
    sender_name: Optional[str] = Field(default="Student", description="User name")
    message: str = Field(..., description="Chat message text")
    job_id: Optional[str] = Field(default=None, description="Associated job ID if already created")
    file_url: Optional[str] = Field(default=None, description="File URL if uploaded")
    file_name: Optional[str] = Field(default=None, description="File name if uploaded")
    pages: Optional[int] = Field(default=None, description="Known page count")


class ChatResponse(BaseModel):
    reply: str
    session_id: str
    job_id: Optional[str] = None
    status: Optional[str] = None
    pricing: Optional[PricingBreakdown] = None
    needs_clarification: bool = False


class PrintReadyRequest(BaseModel):
    pickup_counter: str = Field(default="Counter 1", description="Collection counter location")
    staff_notes: Optional[str] = Field(default=None, description="Optional notes from shopkeeper")


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
    pricing: Optional[Dict[str, Any]] = None
    total_amount_inr: Optional[float] = None
    notes: Optional[str] = None
    received_at: Optional[str] = None
    raw_fields: Optional[Dict[str, Any]] = None
