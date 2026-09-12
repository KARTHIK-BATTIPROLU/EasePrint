<#
.SYNOPSIS
    EasePrint - Automated AWS Cloud Deployment Script (Level 3)
    Builds multi-stage Docker image, pushes to Amazon ECR, and deploys to Amazon ECS Fargate via CloudFormation.

.DESCRIPTION
    Prerequisites:
      - AWS CLI configured with valid credentials (e.g. easeprint-app)
      - Docker Desktop running on the machine
#>

[CmdletBinding()]
param (
    [string]$Region = "us-east-1",
    [string]$RepoName = "easeprint",
    [string]$StackName = "easeprint-stack"
)

$ErrorActionPreference = "Stop"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "🚀 EasePrint Level 3 - AWS Cloud Deployment Automation" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. Check AWS CLI and identity
Write-Host "`n[1/6] Verifying AWS CLI and Credentials..." -ForegroundColor Yellow
try {
    $identityJson = aws sts get-caller-identity --output json | ConvertFrom-Json
    $accountId = $identityJson.Account
    $arn = $identityJson.Arn
    Write-Host "  ✅ Authenticated as: $arn (Account: $accountId)" -ForegroundColor Green
} catch {
    Write-Host "  ❌ AWS CLI authentication failed. Please run 'aws configure' or check credentials." -ForegroundColor Red
    exit 1
}

$ecrRegistry = "$accountId.dkr.ecr.$Region.amazonaws.com"
$imageUri = "$ecrRegistry/${RepoName}:latest"

# 2. Check Docker Engine
Write-Host "`n[2/6] Checking Docker Engine..." -ForegroundColor Yellow
try {
    $dockerVer = docker version --format '{{.Server.Version}}' 2>$null
    if (-not $dockerVer) {
        throw "Docker engine not responding"
    }
    Write-Host "  ✅ Docker Daemon is running (Version: $dockerVer)" -ForegroundColor Green
} catch {
    Write-Host "  ⚠️  Docker Desktop is not currently running." -ForegroundColor Red
    Write-Host "     Please start Docker Desktop and re-run this script." -ForegroundColor DarkYellow
    Write-Host "     If running without Docker, your CloudFormation & ECS task definitions are ready in ./aws/" -ForegroundColor DarkYellow
    exit 1
}

# 3. Create ECR Repository if missing
Write-Host "`n[3/6] Ensuring Amazon ECR Repository exists: $RepoName..." -ForegroundColor Yellow
try {
    aws ecr describe-repositories --repository-names $RepoName --region $Region 2>$null | Out-Null
    Write-Host "  ✅ ECR Repository '$RepoName' already exists." -ForegroundColor Green
} catch {
    Write-Host "  ⚙️  Creating ECR Repository '$RepoName'..." -ForegroundColor Cyan
    aws ecr create-repository --repository-name $RepoName --region $Region --image-scanning-configuration scanOnPush=true | Out-Null
    Write-Host "  ✅ ECR Repository '$RepoName' created successfully." -ForegroundColor Green
}

# 4. Authenticate Docker with Amazon ECR
Write-Host "`n[4/6] Logging in to Amazon ECR ($ecrRegistry)..." -ForegroundColor Yellow
try {
    $password = aws ecr get-login-password --region $Region
    $password | docker login --username AWS --password-stdin $ecrRegistry
    Write-Host "  ✅ Successfully authenticated Docker with ECR." -ForegroundColor Green
} catch {
    Write-Host "  ❌ Failed to log in to ECR: $_" -ForegroundColor Red
    exit 1
}

# 5. Build and Push Docker Image
Write-Host "`n[5/6] Building and Pushing Multi-Stage Docker Image..." -ForegroundColor Yellow
Write-Host "  📦 Building image $imageUri (React 18 + FastAPI + Python 3.11)..." -ForegroundColor Cyan
docker build -t $RepoName:latest .
docker tag "$RepoName:latest" $imageUri

Write-Host "  🚀 Pushing $imageUri to Amazon ECR..." -ForegroundColor Cyan
docker push $imageUri
Write-Host "  ✅ Docker image successfully pushed to Amazon ECR!" -ForegroundColor Green

# 6. Deploy / Update CloudFormation Stack
Write-Host "`n[6/6] Deploying ECS Fargate CloudFormation Stack ($StackName)..." -ForegroundColor Yellow
try {
    aws cloudformation deploy `
        --template-file ./aws/cloudformation.yml `
        --stack-name $StackName `
        --capabilities CAPABILITY_NAMED_IAM `
        --parameter-overrides ContainerImage=$imageUri `
        --region $Region

    Write-Host "`n🎉 DEPLOYMENT COMPLETE!" -ForegroundColor Green
    Write-Host "==========================================================" -ForegroundColor Cyan
    
    # Query stack outputs
    $outputs = aws cloudformation describe-stacks --stack-name $StackName --region $Region --query "Stacks[0].Outputs" --output json | ConvertFrom-Json
    foreach ($out in $outputs) {
        Write-Host "  $($out.OutputKey): $($out.OutputValue)" -ForegroundColor White
    }
    Write-Host "==========================================================" -ForegroundColor Cyan
} catch {
    Write-Host "  ❌ CloudFormation deployment failed: $_" -ForegroundColor Red
    exit 1
}
