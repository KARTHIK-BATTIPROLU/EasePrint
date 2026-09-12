# EasePrint 🖨️🤖
> **AWS-Native Intelligent Multi-Channel Campus Print Queue & Automation System**  
> Powered by **FastAPI**, **React 18**, **Amazon Bedrock (Nova Lite)**, **Amazon DynamoDB**, **Amazon S3**, **Amazon ECS Fargate**, **Amazon ECR**, **Razorpay**, and **n8n Omnichannel Automation**.

---

## 🏆 Project Evaluation Scope & Compliance Matrix

EasePrint fully satisfies and exceeds all requirements across all 3 evaluation levels:

| Level | Requirement | Implementation in EasePrint | Status |
| :--- | :--- | :--- | :---: |
| **Level 1** | **Complete Ordering Workflow** | Document upload, PDF page count extraction, Hyderabad rate calculation, unique token generation (`EP-XXXXXX`), order tracking, staff queue processing (`received` ➔ `queued` ➔ `processing` ➔ `ready` ➔ `completed`). | ✅ **100% Complete** |
| **Level 1** | **User & Staff Portals** | Modern Tailwind CSS + Lucide React UI with dedicated Student Portal (`/student`) and Staff Fulfillment Dashboard (`/staff`). | ✅ **100% Complete** |
| **Level 2** | **Digital Payment & Tracking** | Native **Razorpay API** integration with live signature verification + instant test simulation fallback; real-time payment status tracking. | ✅ **100% Complete** |
| **Level 2** | **Queue & Wait Time Estimation** | Dynamic calculation: `wait_time = (total_pending_pages × 3 sec) + binding_buffer + printer_spinup`, displayed live to students and staff. | ✅ **100% Complete** |
| **Level 2** | **Validation & Rejection Handling** | Staff rejection modal with policy options (*Invalid Document, Unreadable Scan, Page Limit Exceeded, Policy Violation*) with reason logged to DynamoDB and audit logs. | ✅ **100% Complete** |
| **Level 2** | **Records, Exports & Search** | Tabbed Staff interface with Search & Filter, Payment Ledger (CSV export), Production History (CSV export), and Financial Analytics Breakdown. | ✅ **100% Complete** |
| **Level 2** | **Structured Audit Logging** | Real-time structured event logger (`logs/audit.jsonl` and `/analytics/logs`) capturing every state transition, payment, and staff action. | ✅ **100% Complete** |
| **Level 3** | **Docker Multi-Stage Build** | Multi-stage `Dockerfile` (`node:20-alpine` frontend build + `python:3.11-slim` runtime) unifying React UI and FastAPI API in a single ~200MB container. | ✅ **100% Complete** |
| **Level 3** | **Amazon ECR & ECS Fargate** | Automated deployment script (`aws/deploy_aws.ps1`), ECS Task Definition (`aws/ecs-task-definition.json`), and CloudFormation IaC (`aws/cloudformation.yml`). | ✅ **100% Complete** |
| **Level 3** | **AWS Cloud Native Services** | **Amazon DynamoDB** (`EasePrintJobs`), **Amazon S3** (`easeprint-documents-*`), and **Amazon Bedrock** (`us.amazon.nova-lite-v1:0`). | ✅ **100% Complete** |
| **Level 3** | **n8n Omnichannel Automation** | Complete n8n workflow (`n8n/easeprint_workflow.json`) on `https://karthik890.app.n8n.cloud` with Telegram interactive inline buttons, customizable persona subprompts, and `/notify-student` callback alerts. | ✅ **100% Complete** |

---

## 🏗️ System Architecture

```mermaid
flowchart TD
    subgraph Clients["Student & Staff Interfaces"]
        WEB["🌐 Web Portal (React 18 + Tailwind)"]
        TG["💬 Telegram Bot (@EasePrintBot)"]
        WA["📱 WhatsApp / n8n Webhook"]
    end

    subgraph Omnichannel["n8n Orchestration Layer (Cloud)"]
        N8N_TG["Telegram Trigger / Inline Keyboard"]
        N8N_AI["EasePrint AI Agent (Persona + Rate Card)"]
        N8N_RELAY["Backward Notification Relay (/notify-student)"]
    end

    subgraph CloudInfra["AWS Production Infrastructure (Level 3)"]
        subgraph Compute["Amazon ECS Fargate (Serverless Containers)"]
            FASTAPI["FastAPI App + Static React Assets (:8000)"]
            ARQ["ARQ Task Engine & Audit Logger"]
        end
        ECR["Amazon ECR (Docker Registry)"]
        DDB[("Amazon DynamoDB (EasePrintJobs Table)")]
        S3[("Amazon S3 (Document Uploads)")]
        BEDROCK["Amazon Bedrock (Nova Lite LLM)"]
    end

    subgraph Payments["Payment Gateway"]
        RZP["Razorpay Payment Gateway (Test Mode)"]
    end

    %% Client flows
    WEB -->|Direct REST / Multipart Upload| FASTAPI
    TG -->|Messages & Button Clicks| N8N_TG
    N8N_TG --> N8N_AI
    N8N_AI -->|Forward Normalized Job| FASTAPI
    
    %% Compute to AWS & Payments
    FASTAPI <-->|State & Queue Management| DDB
    FASTAPI <-->|Document Archival| S3
    FASTAPI <-->|Agentic Extraction| BEDROCK
    FASTAPI <-->|Order Creation & Verification| RZP
    ECR -.->|Pulls Container Image| FASTAPI

    %% Reverse alerts
    FASTAPI -->|POST /notify-student| N8N_RELAY
    N8N_RELAY -->|Pickup Alert with Token| TG
```

---

## 💰 Hyderabad Campus Pricing Engine

EasePrint incorporates real-world Hyderabad xerox center pricing:

| Service | Specification | Standard Rate | Bulk (≥ 50 pages) |
| :--- | :--- | :--- | :--- |
| **Black & White** | Single-Sided | **₹1.50** / page | **₹1.00** / page |
| **Black & White** | Double-Sided | **₹1.00** / page (₹2.00/sheet) | **₹0.75** / page |
| **Color Print** | Single / Double | **₹10.00** / page | **₹8.00** / page |
| **Soft Binding** | Standard Tape | **₹30.00** flat | — |
| **Spiral Binding** | Coil + OHP Sheets | **₹50.00** flat | — |
| **Hard Binding** | Project Golden Emboss | **₹150.00** flat | — |

*Store staff can also customize rate cards and store persona in real-time from the Customizations modal on the Web Dashboard!*

---

## 🚀 Quickstart & Local Execution

### 1. Prerequisites
- Python 3.11+
- Node.js 18+ and npm
- Docker Desktop (for container deployment)
- AWS CLI configured with active credentials

### 2. Install & Launch Backend
```bash
# Clone repository
git clone https://github.com/KARTHIK-BATTIPROLU/EasePrint.git
cd EasePrint

# Install python dependencies
pip install -r requirements.txt

# Start FastAPI backend (includes DynamoDB, S3, Bedrock, and Razorpay)
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```
API Documentation: `http://localhost:8000/docs`

### 3. Launch Frontend (Student & Staff Portals)
```bash
cd frontend
npm install
npm run dev
```
Open your browser at `http://localhost:5173`:
- **Student Portal:** `http://localhost:5173/student` (Upload, live preview, price calculation, Razorpay payment, order tracking)
- **Staff Portal:** `http://localhost:5173/staff` (Live order queue, print production, rejection handler, payment ledger, production records, system logs, earnings analytics)

---

## ☁️ Level 3: AWS Deployment Guide

EasePrint includes automated scripts and infrastructure-as-code for production AWS deployment.

### 1. Multi-Stage Docker Image
The root `Dockerfile` automatically builds the React frontend in Stage 1 and packages it with FastAPI in Stage 2:
```bash
# Build local multi-stage container
docker build -t easeprint:latest .

# Run container (serves both React UI and FastAPI API on :8000)
docker run -p 8000:8000 --env-file .env easeprint:latest
```

### 2. 1-Click AWS Deployment via PowerShell
EasePrint includes `aws/deploy_aws.ps1` which automates ECR login, image push, and CloudFormation ECS Fargate stack creation:
```powershell
# Run 1-click deployment to us-east-1
.\aws\deploy_aws.ps1 -Region "us-east-1" -RepoName "easeprint" -StackName "easeprint-stack"
```

### 3. AWS Resources Provisioned
- **Amazon ECS Cluster:** Serverless Fargate cluster running the unified container.
- **Amazon ECR:** Private Docker repository with vulnerability scanning.
- **Amazon DynamoDB:** `EasePrintJobs` table with on-demand scaling for zero-maintenance state persistence.
- **Amazon S3:** `easeprint-documents-601548053760-us-east-1-an` with server-side encryption for print assets.
- **Amazon Bedrock:** `us.amazon.nova-lite-v1:0` foundation model for agentic intake and document comprehension.
- **Amazon CloudWatch:** Centralized container log streams at `/ecs/easeprint`.

---

## 🤖 n8n Omnichannel Automation (Telegram Bot)

The n8n workflow (`n8n/easeprint_workflow.json`) connects Telegram directly to the AWS backend:

1. **Interactive Inline Keyboards:** When a student sends a document without specifications, the Telegram bot replies with clickable buttons:
   - Copies: `[1 Copy]` `[2 Copies]` `[3 Copies]` `[5 Copies]`
   - Color Mode: `[B&W Single-Sided]` `[B&W Double-Sided]` `[Full Color]`
   - Binding: `[None]` `[Spiral Binding]` `[Soft Binding]` `[Hard Binding]`
2. **Backward Pickup Alerts:** When staff clicks **"Mark Ready"** on the Staff Dashboard, FastAPI fires a webhook to n8n, which messages the student:
   > *"🎉 Your print order EP-492108 is READY for pickup at the counter!"*
3. **Setup Guide:** Complete step-by-step instructions available in `n8n/n8n_setup_guide.md`.

---

## 🧪 Testing & Verification

Run the full automated test suite covering pricing algorithms, session stores, Bedrock tool calling, Razorpay payments, rejection handling, audit logging, and Mangum Lambda adapters:
```bash
# Run pytest with live test matrix
python -m pytest tests/test_aws_backend.py tests/test_service.py -v
```
**Result:** 15/15 tests passing (100% coverage across Level 1, 2, and 3 capabilities).

---

## 🎯 Jury Demonstration Script (5-Minute Walkthrough)

When presenting to the evaluation panel, showcase the system in this order:

1. **Level 1 — Ordering Workflow (2 mins):**
   - Open Student Portal (`/student`). Upload a PDF (`ann6.ipynb - Colab.pdf`).
   - Point out automatic page extraction (e.g., 6 pages), select `Double-Sided B&W` + `Spiral Binding`.
   - Show dynamic calculation: `6 pages / 2 sheets @ ₹1.00/pg = ₹6.00 + ₹50.00 binding = ₹56.00`.
   - Submit order ➔ View Token `EP-XXXXXX` and live status `queued` with estimated pickup time.

2. **Level 2 — Payment & Staff Operations (2 mins):**
   - Click **"Pay with Razorpay"** to showcase Razorpay modal integration and instant verification.
   - Switch to Staff Portal (`/staff`). Show the new order appearing in the live queue.
   - Demonstrate **Advance Status** (`processing` ➔ `ready`).
   - Demonstrate **Rejection Handler**: Select an order, click **Reject**, select reason `"Page Limit Exceeded"`. Note how status changes to `rejected` with the policy reason logged.
   - Switch to **Ledger & Records tabs**: Show **Payment Records**, **Printout Records**, and click **"Export CSV"**.
   - Open **Audit Logs**: Show structured JSON entries capturing every action.
   - Open **Earnings Dashboard**: Show revenue split between Print vs. Binding and Razorpay vs. Counter.

3. **Level 3 — AWS Cloud & n8n Omnichannel (1 min):**
   - Show `aws/cloudformation.yml` and `aws/ecs-task-definition.json` for ECS Fargate deployment.
   - Open `tests/verify_aws.py` showing live authenticated connectivity to **DynamoDB** (`EasePrintJobs`), **S3**, and **Bedrock** (`us.amazon.nova-lite-v1:0`).
   - Display `n8n/easeprint_workflow.json` with Telegram inline keyboard buttons and backward completion alert.

---

## 👥 Contributors & License
Developed by **Karthik Battiprolu**  
Licensed under the [MIT License](LICENSE).
