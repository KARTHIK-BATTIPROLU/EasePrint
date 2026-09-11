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
    REDIS_URL: str = "redis://localhost:6379/0"
    
    # Anthropic Claude API configuration
    ANTHROPIC_API_KEY: str = ""
    MODEL_NAME: str = "claude-sonnet-4-6"

    # AWS & DynamoDB Configuration
    AWS_REGION: str = "us-east-1"
    AWS_ACCESS_KEY_ID: str = ""
    AWS_SECRET_ACCESS_KEY: str = ""
    DYNAMODB_TABLE_NAME: str = "EasePrintJobs"
    DYNAMODB_ENDPOINT_URL: Optional[str] = None  # E.g. http://localhost:8000 or http://dynamodb-local:8000

    # n8n Webhook Relay URL
    N8N_CALLBACK_URL: str = "http://localhost:5678/webhook/print-clarifications"

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
        """Parse the REDIS_URL into an ARQ RedisSettings instance."""
        return RedisSettings.from_dsn(self.REDIS_URL)


settings = Settings()
