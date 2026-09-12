import logging
from typing import Optional
from pydantic_settings import BaseSettings, SettingsConfigDict
from arq.connections import RedisSettings

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] [%(name)s]: %(message)s",
)
logger = logging.getLogger("print_queue_service")


class Settings(BaseSettings):
    # Redis / Amazon ElastiCache
    REDIS_URL: str = "redis://localhost:6379/0"
    ELASTICACHE_REDIS_URL: Optional[str] = None  # In AWS: e.g. redis://easeprint.cache.amazonaws.com:6379/0

    # AWS General Credentials & Region
    AWS_REGION: str = "us-east-1"
    AWS_ACCESS_KEY_ID: str = ""
    AWS_SECRET_ACCESS_KEY: str = ""

    # Amazon Bedrock
    BEDROCK_MODEL_ID: str = "anthropic.claude-3-5-sonnet-20241022-v2:0"
    BEDROCK_REGION: str = "us-east-1"
    
    # Legacy / Direct Anthropic Fallback Key
    ANTHROPIC_API_KEY: str = ""
    MODEL_NAME: str = "claude-sonnet-4-6"

    # Amazon DynamoDB
    DYNAMODB_TABLE_NAME: str = "EasePrintJobs"
    DYNAMODB_ENDPOINT_URL: Optional[str] = None  # Local DynamoDB (e.g. http://localhost:8001)

    # Amazon S3
    S3_BUCKET_NAME: str = "easeprint-documents"
    S3_ENDPOINT_URL: Optional[str] = None

    # n8n Webhook Outbound Relays (Live Published Workflow)
    N8N_BASE_URL: str = "https://astan8n.app.n8n.cloud/webhook"
    N8N_INTAKE_URL: str = "https://astan8n.app.n8n.cloud/webhook/intake/web"
    N8N_CALLBACK_URL: str = "https://astan8n.app.n8n.cloud/webhook/intake/web"
    N8N_COMPLETION_URL: str = "https://astan8n.app.n8n.cloud/webhook/notify-student"

    # Razorpay Payment Gateway (Test Mode)
    RAZORPAY_KEY_ID: Optional[str] = None
    RAZORPAY_KEY_SECRET: Optional[str] = None

    # Worker Concurrency & Debug
    MAX_JOBS: int = 10
    DEBUG: bool = False

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )

    @property
    def redis_settings(self) -> RedisSettings:
        """Parse the active Redis/ElastiCache URL into ARQ RedisSettings."""
        active_url = self.ELASTICACHE_REDIS_URL or self.REDIS_URL
        return RedisSettings.from_dsn(active_url)


settings = Settings()
