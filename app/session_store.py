import json
import logging
from typing import List, Dict, Any, Optional
import redis.asyncio as redis
from app.config import settings

logger = logging.getLogger("print_queue_service.session_store")

_memory_fallback: Dict[str, List[Dict[str, str]]] = {}


class SessionStore:
    def __init__(self):
        self.redis_url = settings.ELASTICACHE_REDIS_URL or settings.REDIS_URL
        self.ttl_seconds = 3600  # 1 hour session retention
        self._redis_client: Optional[redis.Redis] = None

    async def _get_client(self) -> Optional[redis.Redis]:
        if self._redis_client is None:
            try:
                self._redis_client = redis.from_url(
                    self.redis_url,
                    decode_responses=True,
                    socket_timeout=2.0
                )
                await self._redis_client.ping()
                logger.info(f"Connected to ElastiCache / Redis session store at {self.redis_url}")
            except Exception as exc:
                logger.warning(f"Could not connect to Redis for session storage ({exc}). Using in-memory fallback.")
                self._redis_client = None
        return self._redis_client

    def _key(self, session_id: str) -> str:
        return f"easeprint:session:{session_id}"

    async def get_history(self, session_id: str, limit: int = 10) -> List[Dict[str, str]]:
        """Retrieve recent conversation turns for the given session."""
        client = await self._get_client()
        if client:
            try:
                key = self._key(session_id)
                raw_items = await client.lrange(key, -limit, -1)
                return [json.loads(item) for item in raw_items]
            except Exception as exc:
                logger.warning(f"Redis get_history failed for {session_id}: {exc}")

        # Fallback
        items = _memory_fallback.get(session_id, [])
        return items[-limit:]

    async def append_message(self, session_id: str, role: str, content: str) -> None:
        """Add a turn (user or assistant) to the session history with automatic TTL renewal."""
        message = {"role": role, "content": content}
        client = await self._get_client()
        if client:
            try:
                key = self._key(session_id)
                await client.rpush(key, json.dumps(message))
                await client.expire(key, self.ttl_seconds)
                return
            except Exception as exc:
                logger.warning(f"Redis append_message failed for {session_id}: {exc}")

        # Fallback
        if session_id not in _memory_fallback:
            _memory_fallback[session_id] = []
        _memory_fallback[session_id].append(message)

    async def clear_history(self, session_id: str) -> None:
        """Clear conversation history for a given session."""
        client = await self._get_client()
        if client:
            try:
                await client.delete(self._key(session_id))
            except Exception as exc:
                logger.warning(f"Redis clear_history failed for {session_id}: {exc}")

        _memory_fallback.pop(session_id, None)


session_store = SessionStore()
