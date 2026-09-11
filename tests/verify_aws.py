import sys
sys.stdout.reconfigure(encoding='utf-8')
import os
import boto3
from app.config import settings

print('==================================================')
print('        EASEPRINT AWS SERVICES LIVE CHECK')
print('==================================================')

session_kwargs = {'region_name': settings.AWS_REGION}
if settings.AWS_ACCESS_KEY_ID and settings.AWS_SECRET_ACCESS_KEY:
    session_kwargs['aws_access_key_id'] = settings.AWS_ACCESS_KEY_ID
    session_kwargs['aws_secret_access_key'] = settings.AWS_SECRET_ACCESS_KEY

# 1. IAM STS Identity
print('\n[1] Checking AWS IAM Identity...')
try:
    sts = boto3.client('sts', **session_kwargs)
    identity = sts.get_caller_identity()
    print(f'  [SUCCESS] Authenticated as: {identity.get(\"Arn\")}')
    print(f'  Account ID: {identity.get(\"Account\")}')
except Exception as e:
    print(f'  [FAILED] STS Authentication: {e}')

# 2. S3 Bucket Check
print(f'\n[2] Checking S3 Bucket: {settings.S3_BUCKET_NAME}...')
try:
    s3 = boto3.client('s3', **session_kwargs)
    s3.head_bucket(Bucket=settings.S3_BUCKET_NAME)
    print(f'  [SUCCESS] S3 Bucket exists and is accessible!')
except Exception as e:
    print(f'  [FAILED] S3 Check: {e}')

# 3. DynamoDB Table Check
print(f'\n[3] Checking DynamoDB Table: {settings.DYNAMODB_TABLE_NAME}...')
try:
    dynamo = boto3.client('dynamodb', **session_kwargs)
    desc = dynamo.describe_table(TableName=settings.DYNAMODB_TABLE_NAME)
    status = desc['Table']['TableStatus']
    print(f'  [SUCCESS] DynamoDB Table exists! Status: {status}')
except Exception as e:
    print(f'  [FAILED] DynamoDB Check: {e}')

# 4. Amazon Bedrock Live Inference Check
print(f'\n[4] Checking Bedrock Claude Model: {settings.BEDROCK_MODEL_ID}...')
try:
    bedrock = boto3.client('bedrock-runtime', region_name=settings.BEDROCK_REGION, 
                           aws_access_key_id=settings.AWS_ACCESS_KEY_ID or None,
                           aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY or None)
    response = bedrock.converse(
        modelId=settings.BEDROCK_MODEL_ID,
        messages=[{'role': 'user', 'content': [{'text': 'Respond with only: EasePrint Bedrock is active!'}]}],
        inferenceConfig={'maxTokens': 30, 'temperature': 0.1}
    )
    reply = response['output']['message']['content'][0]['text']
    print(f'  [SUCCESS] Bedrock Response: {reply.strip()}')
except Exception as e:
    print(f'  [FAILED] Bedrock Converse: {e}')

print('\n==================================================')
