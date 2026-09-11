import io
import asyncio
import logging
from typing import Optional, Dict, Any
import boto3
from botocore.exceptions import ClientError
from pypdf import PdfReader
from app.config import settings

logger = logging.getLogger("print_queue_service.s3")


class S3Client:
    def __init__(self):
        self.bucket = settings.S3_BUCKET_NAME
        self.region = settings.AWS_REGION
        self.endpoint_url = settings.S3_ENDPOINT_URL

        boto_kwargs: Dict[str, Any] = {"region_name": self.region}
        if settings.AWS_ACCESS_KEY_ID and settings.AWS_SECRET_ACCESS_KEY:
            boto_kwargs["aws_access_key_id"] = settings.AWS_ACCESS_KEY_ID
            boto_kwargs["aws_secret_access_key"] = settings.AWS_SECRET_ACCESS_KEY
        if self.endpoint_url:
            boto_kwargs["endpoint_url"] = self.endpoint_url

        try:
            self.s3 = boto3.client("s3", **boto_kwargs)
            self.is_configured = True
        except Exception as exc:
            logger.warning(f"S3 client not configured ({exc}). Operating in mock mode.")
            self.s3 = None
            self.is_configured = False

    async def generate_presigned_download_url(self, s3_key: str, expiration_seconds: int = 3600) -> Optional[str]:
        """Generate a secure pre-signed download URL for staff or student view."""
        if not self.is_configured or not self.s3:
            return f"https://mock-s3.local/{self.bucket}/{s3_key}"

        def _sync_url():
            try:
                return self.s3.generate_presigned_url(
                    "get_object",
                    Params={"Bucket": self.bucket, "Key": s3_key},
                    ExpiresIn=expiration_seconds,
                )
            except ClientError as exc:
                logger.error(f"Failed to generate presigned S3 URL for {s3_key}: {exc}")
                return None

        return await asyncio.to_thread(_sync_url)

    async def extract_pdf_page_count_from_s3(self, s3_key: str) -> Optional[int]:
        """Download document stream from S3 and detect page count using pypdf."""
        if not self.is_configured or not self.s3:
            logger.info("S3 not configured; returning default 1 page for mock document.")
            return 1

        def _sync_count():
            try:
                response = self.s3.get_object(Bucket=self.bucket, Key=s3_key)
                file_bytes = response["Body"].read()
                reader = PdfReader(io.BytesIO(file_bytes))
                count = len(reader.pages)
                logger.info(f"Detected {count} pages from S3 key {s3_key}")
                return count
            except Exception as exc:
                logger.warning(f"Could not extract page count from S3 key {s3_key}: {exc}")
                return None

        return await asyncio.to_thread(_sync_count)

    def extract_page_count_from_bytes(self, file_bytes: bytes) -> int:
        """Extract page count directly from uploaded in-memory bytes."""
        try:
            reader = PdfReader(io.BytesIO(file_bytes))
            return max(1, len(reader.pages))
        except Exception as exc:
            logger.warning(f"Could not parse PDF page count from bytes: {exc}")
            return 1


s3_client = S3Client()
