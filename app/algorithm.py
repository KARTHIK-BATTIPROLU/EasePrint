import logging
from typing import List, Dict, Any, Optional
from pydantic import BaseModel, Field

logger = logging.getLogger("print_queue_service.algorithm")


class QueueAlgorithmConfig(BaseModel):
    """Configuration for autonomous print queue execution and prioritization."""
    enabled: bool = Field(
        default=True,
        description="Whether autonomous queue execution (Auto-Pilot) is enabled"
    )
    priority_metric: str = Field(
        default="higher_price",
        description="Priority sorting criteria: 'higher_price', 'lower_price', 'more_pages', 'fewer_pages'"
    )
    auto_advance_intake: bool = Field(
        default=True,
        description="Auto-approve valid incoming inquiries directly to queue"
    )
    auto_print: bool = Field(
        default=True,
        description="Auto-pick highest priority queued job and start printing"
    )
    auto_ready: bool = Field(
        default=True,
        description="Auto-mark ready with backward notification & S3 zero-retention shredding"
    )
    auto_complete: bool = Field(
        default=False,
        description="Auto-complete & archive orders after pickup notification"
    )
    print_speed_seconds: int = Field(
        default=3,
        description="Simulated physical print duration per job in seconds"
    )


def extract_job_metrics(job: Dict[str, Any]) -> tuple:
    """Extracts comparable numerical metrics (amount, total_pages, created_at) from a job dictionary."""
    amount = float(
        job.get("total_amount_inr")
        or (job.get("pricing") or {}).get("total_amount_inr")
        or 0.0
    )
    req = job.get("requirements") or {}
    doc_meta = job.get("document_metadata") or {}
    pricing = job.get("pricing") or {}

    pages = int(
        job.get("pages")
        or job.get("page_count")
        or req.get("pages")
        or req.get("page_count")
        or doc_meta.get("pages")
        or doc_meta.get("page_count")
        or pricing.get("sheets_per_copy")
        or 1
    )
    copies = int(
        job.get("copies")
        or req.get("copies")
        or pricing.get("copies")
        or 1
    )
    total_pages = max(1, pages * copies)
    created_at = str(job.get("created_at") or job.get("received_at") or "")
    return amount, total_pages, created_at


def sort_jobs_by_priority(jobs: List[Dict[str, Any]], metric: str = "higher_price") -> List[Dict[str, Any]]:
    """
    Sorts a list of job dictionaries based on the configured priority criteria:
    - 'higher_price': Highest total amount first, tie-breaker earliest arrival (FIFO)
    - 'lower_price': Lowest total amount first, tie-breaker earliest arrival (FIFO)
    - 'more_pages': Highest page volume first, tie-breaker earliest arrival (FIFO)
    - 'fewer_pages': Lowest page volume first (Shortest Job First), tie-breaker earliest arrival (FIFO)
    """
    if not jobs:
        return []

    def sort_key(job):
        amount, total_pages, created_at = extract_job_metrics(job)
        if metric == "higher_price":
            return (-amount, created_at)
        elif metric == "lower_price":
            return (amount, created_at)
        elif metric == "more_pages":
            return (-total_pages, created_at)
        elif metric == "fewer_pages":
            return (total_pages, created_at)
        else:
            return created_at

    return sorted(jobs, key=sort_key)


def get_priority_metadata(job: Dict[str, Any], rank: int, metric: str) -> Dict[str, Any]:
    """Returns human-readable priority explanation and ranking badge."""
    amount, total_pages, _ = extract_job_metrics(job)
    if metric == "higher_price":
        reason = f"₹{amount:.2f} (Max Revenue First)"
    elif metric == "lower_price":
        reason = f"₹{amount:.2f} (Express Micro-Order)"
    elif metric == "more_pages":
        reason = f"{total_pages} sheets (Bulk Run)"
    elif metric == "fewer_pages":
        reason = f"{total_pages} sheets (Shortest Job First)"
    else:
        reason = "Standard FIFO"

    return {
        "priority_rank": rank,
        "priority_metric": metric,
        "priority_reason": reason,
        "is_top_priority": rank == 1,
    }
