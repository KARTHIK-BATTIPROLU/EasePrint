import logging
from typing import Dict, Any
import httpx
from anthropic import AsyncAnthropic, APIConnectionError, RateLimitError
from arq import Retry
from arq.connections import RedisSettings
from app.config import settings
from app.agent import PrintAgent

logger = logging.getLogger("print_queue_service.worker")


async def startup(ctx: Dict[str, Any]) -> None:
    """Initialize persistent resources for ARQ worker lifecycle."""
    logger.info("Initializing ARQ Worker resources...")
    ctx["http_client"] = httpx.AsyncClient(timeout=15.0)
    if settings.ANTHROPIC_API_KEY:
        ctx["anthropic_client"] = AsyncAnthropic(api_key=settings.ANTHROPIC_API_KEY)
    else:
        ctx["anthropic_client"] = None
        logger.warning("Worker starting without ANTHROPIC_API_KEY; using heuristic evaluation fallback.")


async def shutdown(ctx: Dict[str, Any]) -> None:
    """Clean up worker resources on shutdown."""
    logger.info("Shutting down ARQ Worker resources...")
    client: httpx.AsyncClient = ctx.get("http_client")
    if client and not client.is_closed:
        await client.aclose()


async def process_job(ctx: Dict[str, Any], job_data: Dict[str, Any]) -> str:
    """
    ARQ Background Task function.
    Processes an enqueued print job by invoking the Anthropic Claude agent.
    """
    job_id = job_data.get("job_id", "unknown")
    job_try = ctx.get("job_try", 1)
    logger.info(f"Processing job {job_id} (Attempt {job_try}/3)")

    agent = PrintAgent(
        anthropic_client=ctx.get("anthropic_client"),
        http_client=ctx.get("http_client"),
    )

    try:
        result = await agent.process_job_with_agent(job_data)
        logger.info(f"Successfully processed job {job_id}: {result}")
        return result

    except (httpx.RequestError, APIConnectionError, RateLimitError) as transient_err:
        logger.warning(f"Transient error processing job {job_id} on try {job_try}: {transient_err}")
        if job_try < 3:
            delay = 2 ** job_try  # Exponential backoff (2s, 4s)
            logger.info(f"Retrying job {job_id} in {delay} seconds...")
            raise Retry(defer=delay)
        else:
            logger.error(f"Job {job_id} failed after maximum retry attempts.")
            # Record failure in DynamoDB
            await agent.dynamodb_client.update_job_status(
                job_id=job_id,
                status="needs_info",
                notes=f"Transient service error after 3 retries: {str(transient_err)}"
            )
            raise transient_err

    except Exception as exc:
        # Non-transient errors (logic, parsing, validation) should not be blindly retried
        logger.error(f"Unrecoverable error processing job {job_id}: {exc}", exc_info=True)
        await agent.dynamodb_client.update_job_status(
            job_id=job_id,
            status="needs_info",
            notes=f"Error processing job: {str(exc)}"
        )
        return f"Error: {str(exc)}"


class WorkerSettings:
    """Configuration class for the ARQ worker process."""
    functions = [process_job]
    redis_settings: RedisSettings = settings.redis_settings
    on_startup = startup
    on_shutdown = shutdown
    max_jobs = settings.MAX_JOBS
    max_tries = 3
    job_timeout = 60  # seconds
