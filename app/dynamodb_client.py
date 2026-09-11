import asyncio
import logging
from typing import Optional, Dict, Any
import boto3
from botocore.exceptions import ClientError
from app.config import settings

logger = logging.getLogger("print_queue_service.dynamodb")

# In-memory fallback dictionary for testing/development when DynamoDB is not available
_mock_dynamodb_store: Dict[str, Dict[str, Any]] = {}


class DynamoDBClient:
    def __init__(self):
        self.table_name = settings.DYNAMODB_TABLE_NAME
        self.region = settings.AWS_REGION
        self.endpoint_url = settings.DYNAMODB_ENDPOINT_URL
        self.is_configured = bool(
            settings.AWS_ACCESS_KEY_ID or self.endpoint_url
        )

        if self.is_configured:
            boto_kwargs: Dict[str, Any] = {
                "region_name": self.region,
            }
            if settings.AWS_ACCESS_KEY_ID and settings.AWS_SECRET_ACCESS_KEY:
                boto_kwargs["aws_access_key_id"] = settings.AWS_ACCESS_KEY_ID
                boto_kwargs["aws_secret_access_key"] = settings.AWS_SECRET_ACCESS_KEY
            if self.endpoint_url:
                boto_kwargs["endpoint_url"] = self.endpoint_url

            self.dynamodb = boto3.resource("dynamodb", **boto_kwargs)
            self.table = self.dynamodb.Table(self.table_name)
        else:
            logger.warning(
                "DynamoDB is not configured (missing AWS credentials or DYNAMODB_ENDPOINT_URL). "
                "Operating in in-memory mock mode."
            )
            self.dynamodb = None
            self.table = None

    async def ensure_table_exists(self) -> None:
        """Create the table if it does not exist (useful for DynamoDB Local)."""
        if not self.is_configured or not self.dynamodb:
            return

        def _sync_ensure():
            try:
                self.table.load()
                logger.info(f"DynamoDB table '{self.table_name}' verified.")
            except ClientError as exc:
                if exc.response["Error"]["Code"] == "ResourceNotFoundException":
                    logger.info(f"Creating DynamoDB table '{self.table_name}'...")
                    table = self.dynamodb.create_table(
                        TableName=self.table_name,
                        KeySchema=[{"AttributeName": "job_id", "KeyType": "HASH"}],
                        AttributeDefinitions=[{"AttributeName": "job_id", "AttributeType": "S"}],
                        BillingMode="PAY_PER_REQUEST",
                    )
                    table.meta.client.get_waiter("table_exists").wait(TableName=self.table_name)
                    logger.info(f"DynamoDB table '{self.table_name}' created successfully.")
                else:
                    logger.error(f"Error checking DynamoDB table: {exc}")
                    raise

        await asyncio.to_thread(_sync_ensure)

    async def get_record_by_job_id(self, job_id: str) -> Optional[Dict[str, Any]]:
        """Fetch a job item by job_id."""
        if not self.is_configured or not self.table:
            return _mock_dynamodb_store.get(job_id)

        def _sync_get():
            try:
                response = self.table.get_item(Key={"job_id": job_id})
                return response.get("Item")
            except ClientError as exc:
                logger.error(f"Error fetching job {job_id} from DynamoDB: {exc}")
                raise

        return await asyncio.to_thread(_sync_get)

    async def update_job_fields(self, job_id: str, fields: Dict[str, Any]) -> bool:
        """Update attribute values for a job item."""
        if not self.is_configured or not self.table:
            if job_id not in _mock_dynamodb_store:
                _mock_dynamodb_store[job_id] = {"job_id": job_id}
            _mock_dynamodb_store[job_id].update(fields)
            logger.info(f"[Mock DynamoDB] Updated job {job_id} with fields: {fields}")
            return True

        update_expr_parts = []
        expr_attr_values = {}
        expr_attr_names = {}

        for idx, (k, v) in enumerate(fields.items()):
            attr_key = f"#k{idx}"
            val_key = f":v{idx}"
            update_expr_parts.append(f"{attr_key} = {val_key}")
            expr_attr_names[attr_key] = k
            expr_attr_values[val_key] = v

        update_expression = "SET " + ", ".join(update_expr_parts)

        def _sync_update():
            try:
                self.table.update_item(
                    Key={"job_id": job_id},
                    UpdateExpression=update_expression,
                    ExpressionAttributeNames=expr_attr_names,
                    ExpressionAttributeValues=expr_attr_values,
                )
                logger.info(f"Successfully updated DynamoDB item for job {job_id}.")
                return True
            except ClientError as exc:
                logger.error(f"Failed to update DynamoDB item for job {job_id}: {exc}")
                raise

        return await asyncio.to_thread(_sync_update)

    async def update_job_status(self, job_id: str, status: str, notes: Optional[str] = None) -> bool:
        """Update job status and optional notes."""
        fields: Dict[str, Any] = {"status": status}
        if notes is not None:
            fields["notes"] = notes
        return await self.update_job_fields(job_id, fields)

    async def set_print_requirements(
        self,
        job_id: str,
        copies: int,
        color_mode: str,
        paper_size: str,
        sides: str
    ) -> bool:
        """Store structured print requirements in DynamoDB."""
        fields = {
            "copies": copies,
            "color_mode": color_mode,
            "paper_size": paper_size,
            "sides": sides,
        }
        return await self.update_job_fields(job_id, fields)

    async def create_or_init_job(self, job_data: Dict[str, Any]) -> Dict[str, Any]:
        """Create or initialize job item in DynamoDB."""
        job_id = job_data["job_id"]
        if not self.is_configured or not self.table:
            if job_id not in _mock_dynamodb_store:
                _mock_dynamodb_store[job_id] = dict(job_data)
            return _mock_dynamodb_store[job_id]

        def _sync_put():
            try:
                # Only insert if it doesn't already exist
                self.table.put_item(
                    Item=job_data,
                    ConditionExpression="attribute_not_exists(job_id)"
                )
                logger.info(f"Initialized new job record in DynamoDB for job {job_id}.")
                return job_data
            except ClientError as exc:
                if exc.response["Error"]["Code"] == "ConditionalCheckFailedException":
                    logger.info(f"Job {job_id} already exists in DynamoDB.")
                    # Return existing item
                    return self.table.get_item(Key={"job_id": job_id}).get("Item", job_data)
                logger.error(f"Failed to create DynamoDB item for job {job_id}: {exc}")
                raise

        return await asyncio.to_thread(_sync_put)
