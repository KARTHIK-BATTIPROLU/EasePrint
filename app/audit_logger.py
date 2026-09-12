import os
import json
import datetime
import logging
from typing import List, Dict, Any, Optional

logger = logging.getLogger("print_queue_service.audit")

LOGS_DIR = "logs"
os.makedirs(LOGS_DIR, exist_ok=True)
AUDIT_LOG_FILE = os.path.join(LOGS_DIR, "audit.jsonl")


class AuditLogger:
    """Maintains an append-only JSONL audit file and an in-memory buffer of system events."""

    def __init__(self, max_buffer_size: int = 300):
        self.max_buffer_size = max_buffer_size
        self._buffer: List[Dict[str, Any]] = []
        self._load_recent()

    def _load_recent(self):
        """Loads the most recent events from audit.jsonl on startup."""
        if not os.path.exists(AUDIT_LOG_FILE):
            return
        try:
            lines = []
            with open(AUDIT_LOG_FILE, "r", encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if line:
                        lines.append(json.loads(line))
            self._buffer = lines[-self.max_buffer_size:]
        except Exception as e:
            logger.warning(f"Could not load historical audit logs: {e}")

    def log(
        self,
        event_type: str,
        message: str,
        job_id: Optional[str] = None,
        channel: Optional[str] = None,
        details: Optional[Dict[str, Any]] = None,
        level: str = "INFO",
    ) -> Dict[str, Any]:
        """Record an audit log event."""
        entry = {
            "id": f"log_{int(datetime.datetime.now().timestamp() * 1000)}",
            "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "event_type": event_type,
            "level": level.upper(),
            "message": message,
            "job_id": job_id,
            "channel": channel or "system",
            "details": details or {},
        }

        # Append to buffer
        self._buffer.insert(0, entry)
        if len(self._buffer) > self.max_buffer_size:
            self._buffer.pop()

        # Append to file
        try:
            with open(AUDIT_LOG_FILE, "a", encoding="utf-8") as f:
                f.write(json.dumps(entry, ensure_ascii=False) + "\n")
        except Exception as e:
            logger.error(f"Failed to append to audit log file: {e}")

        logger.info(f"[AUDIT] [{event_type}] ({job_id or 'SYS'}) {message}")
        return entry

    def get_logs(
        self,
        limit: int = 100,
        event_type: Optional[str] = None,
        job_id: Optional[str] = None,
    ) -> List[Dict[str, Any]]:
        """Query recent audit events with optional filters."""
        results = self._buffer
        if event_type and event_type != "ALL":
            results = [e for e in results if e["event_type"] == event_type]
        if job_id:
            results = [e for e in results if e.get("job_id") == job_id]
        return results[:limit]


audit_logger = AuditLogger()
