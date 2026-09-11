import logging
from typing import Dict, Any
import httpx
from botocore.exceptions import ClientError
from arq import Retry
from arq.connections import RedisSettings
from app.config import settings
from app.bedrock_agent import BedrockPrintAgent

logger = logging.getLogger("print_queue_service.worker")


async def startup(ctx: Dict[str, Any]) -> None:
    """Initialize resources for ARQ worker lifecycle."""
    logger.info("Initializing ARQ Worker with ElastiCache / Redis...")
    ctx["http_client"] = httpx.AsyncClient(timeout=15.0)


async def shutdown(ctx: Dict[str, Any]) -> None:
    """Clean up worker resources on shutdown."""
    logger.info("Shutting down ARQ Worker resources...")
    client: httpx.AsyncClient = ctx.get("http_client")
    if client and not client.is_closed:
        await client.aclose()


async def process_job(ctx: Dict[str, Any], job_data: Dict[str, Any]) -> Dict[str, Any]:
    """
    ARQ Task Processor: Consumes queued print jobs from ElastiCache / Redis,
    invokes Bedrock AI Agent, and updates DynamoDB.
    """
    job_id = job_data.get("job_id", "unknown")
    job_try = ctx.get("job_try", 1)
    logger.info(f"ARQ processing print job {job_id} (Attempt {job_try}/3)")

    agent = BedrockPrintAgent(
        http_client=ctx.get("http_client")
    )

    try:
        result = await agent.process_job(job_data)
        logger.info(f"Successfully processed job {job_id}: {result.get('reply')}")
        return result

    except (httpx.RequestError, ClientError) as transient_err:
        logger.warning(f"Transient error on job {job_id} (Attempt {job_try}): {transient_err}")
        if job_try < 3:
            delay = 2 ** job_try
            logger.info(f"Scheduling retry in {delay} seconds...")
            raise Retry(defer=delay)
        else:
            logger.error(f"Exhausted retries for job {job_id}.")
            await agent.dynamodb_client.update_job_status(
                job_id=job_id,
                status="needs_info",
                notes=f"Transient failure after 3 attempts: {str(transient_err)}"
            )
            raise transient_err

    except Exception as exc:
        logger.error(f"Unrecoverable error on job {job_id}: {exc}", exc_info=True)
        await agent.dynamodb_client.update_job_status(
            job_id=job_id,
            status="needs_info",
            notes=f"Processing error: {str(exc)}"
        )
        return {"error": str(exc), "needs_clarification": True}


class WorkerSettings:
    """Configuration class for the ARQ worker process."""
    functions = [process_job]
    redis_settings: RedisSettings = settings.redis_settings
    on_startup = startup
    on_shutdown = shutdown
    max_jobs = settings.MAX_JOBS
    max_tries = 3
    job_timeout = 60
