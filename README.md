# EasePrint 🖨️🤖
> **Intelligent Multi-Channel Print Queue System Powered by FastAPI, Redis, ARQ, and Anthropic Claude Agent**

---

## 📌 Overview

**EasePrint** is an autonomous print shop intake and queue management platform designed to streamline print requests coming from fragmented channels. Instead of students or customers waiting in line or sending unformatted files via different messaging apps without clear specifications, EasePrint provides:

1. **Omnichannel Ingestion:** Connects **WhatsApp Business Cloud API**, **Telegram Bot**, and a **Web Form** through an **n8n** automation pipeline.
2. **Automated Asset & Metadata Management:** Automatically offloads print files into **AWS S3** and records incoming orders in **Airtable**.
3. **Asynchronous Processing Engine:** Built with **FastAPI**, **Redis**, and **ARQ** for low-latency (<200ms) job intake and non-blocking background task distribution.
4. **Agentic Intake Reasoning:** An **Anthropic Claude** agent equipped with tool-calling capabilities reviews incoming job descriptions. If crucial print settings (color vs. B&W, paper size, number of copies, single vs. double-sided) are missing, the agent initiates clarifying questions back to the original messaging channel before queueing the job.
5. **Virtual Printer & Live Dashboard:** Tracks lifecycle states (`received` ➔ `needs_info` ➔ `queued` ➔ `processing` ➔ `ready` ➔ `completed`) for both customer tracking and staff fulfillment.

---

## 🏗️ System Architecture

```mermaid
flowchart TD
    subgraph Clients["Customer Ingestion Channels"]
        WA["📱 WhatsApp Business"]
        TG["💬 Telegram Bot"]
        WEB["🌐 Web Portal"]
    end

    subgraph N8N["n8n Orchestration Layer"]
        T1["WhatsApp Trigger"]
        T2["Telegram Trigger"]
        T3["HTTP Webhook (/intake/web)"]
        NORM["Normalize Payload & Extract Files"]
        S3UP["Upload File to AWS S3"]
        AT_REC["Create Record in Airtable (status: received)"]
        HANDOFF["POST /jobs to FastAPI Backend"]
        CB_NODE["Callback Relayer (Send Question to User)"]
    end

    subgraph Storage["Storage & Records"]
        S3[("AWS S3 Bucket\n(jobs/{channel}/{id}/...)")]
        AT[("Airtable Base\n(Live Status & Metadata)")]
    end

    subgraph Backend["FastAPI & Worker Cluster"]
        API["FastAPI App (POST /jobs, GET /jobs/{id})"]
        REDIS[("Redis Queue")]
        ARQ["ARQ Worker Pool"]
    end

    subgraph Agentic["Anthropic Claude AI Agent"]
        CLAUDE["Claude Agent (claude-sonnet)"]
        T_DETAILS["Tool: get_job_details"]
        T_STATUS["Tool: update_job_status"]
        T_REQ["Tool: set_print_requirements"]
        T_ASK["Tool: ask_clarifying_question"]
    end

    %% Client to n8n
    WA --> T1
    TG --> T2
    WEB --> T3
    T1 & T2 & T3 --> NORM

    %% n8n Pipeline
    NORM --> S3UP --> S3
    S3UP --> AT_REC --> AT
    AT_REC --> HANDOFF --> API

    %% Backend to Queue
    API -->|Enqueue (<200ms)| REDIS
    REDIS -->|Dequeue Task| ARQ

    %% Worker to Agent
    ARQ <-->|Tool Loop (max 6 iters)| CLAUDE
    CLAUDE --> T_DETAILS & T_STATUS & T_REQ & T_ASK

    %% Tool Actions
    T_DETAILS <-->|Read Details| AT
    T_STATUS & T_REQ -->|Write Updates| AT
    T_ASK -->|POST Callback| CB_NODE
    CB_NODE -->|Clarification Message| Clients
```

---

## 🔄 End-to-End Workflow

1. **Submission:** Customer submits a document with a caption or message via WhatsApp, Telegram, or Web.
2. **Normalization & S3 Upload (n8n):**
   - n8n extracts sender info, text, and raw media.
   - Media file is uploaded to AWS S3 under `jobs/{source_channel}/{sender_id}/{timestamp}_{file_name}`.
   - An Airtable row is created with status `received`.
3. **Queue Ingestion (FastAPI):**
   - n8n fires a non-blocking `POST /jobs` request to FastAPI.
   - FastAPI validates the payload with Pydantic and pushes a task into Redis via ARQ in `<200ms`, returning `{"job_id": "...", "status": "queued"}`.
4. **Intelligent Inspection (ARQ + Claude Agent):**
   - The ARQ worker spins up an Anthropic Claude session with access to four tools:
     - `get_job_details(job_id)`
     - `update_job_status(job_id, status, notes)`
     - `set_print_requirements(job_id, copies, color_mode, paper_size, sides)`
     - `ask_clarifying_question(job_id, channel, sender_id, question_text)`
   - **Reasoning Loop:**
     - The agent verifies whether the prompt specifies: **Copies**, **Color Mode** (Color / Grayscale), **Paper Size** (A4, A3, etc.), and **Sidedness** (Single / Double-sided).
     - **If information is missing:** Agent triggers `ask_clarifying_question`, setting status to `needs_info`. The question is posted back to n8n, which messages the customer directly on WhatsApp/Telegram/Web.
     - **If information is complete:** Agent invokes `set_print_requirements` and transitions status to `queued`.
5. **Fulfillment (Virtual / Physical Printer):**
   - The staff dashboard monitors queued jobs, triggering print execution.
   - Status updates sequentially: `queued` ➔ `processing` ➔ `ready` (notifying student for pickup) ➔ `completed`.

---

## 📂 Project Structure

```text
EasePrint/
├── app/
│   ├── __init__.py
│   ├── main.py            # FastAPI endpoints (POST /jobs, GET /jobs/{job_id}, healthcheck)
│   ├── models.py          # Pydantic schemas (JobIn, JobStatus, PrintRequirements)
│   ├── worker.py          # ARQ WorkerSettings & task runner (process_job)
│   ├── agent.py           # Anthropic Claude agent & tool invocation loop
│   ├── airtable_client.py # Async Airtable client wrapper
│   └── config.py          # Settings validation via Pydantic BaseSettings
├── docker-compose.yml     # Multi-service setup: fastapi, arq_worker, redis
├── requirements.txt       # Python dependencies
├── .env.example           # Environment template
└── README.md              # Documentation
```

---

## 📋 Data Schemas

### Normalized Intake Payload (`POST /jobs`)
```json
{
  "job_id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  "source_channel": "whatsapp",
  "sender_id": "+1234567890",
  "sender_name": "Alex Smith",
  "message_text": "Please print 3 copies of this assignment in B&W, double-sided, A4.",
  "file_url": "https://easeprint-bucket.s3.amazonaws.com/jobs/whatsapp/+1234567890/1694500000_assignment.pdf",
  "file_name": "assignment.pdf",
  "received_at": "2026-09-12T00:15:30Z"
}
```

### Job Status States
| Status | Description |
| :--- | :--- |
| `received` | Initial ingestion record created in Airtable |
| `needs_info` | Claude agent identified missing print parameters; waiting for customer reply |
| `queued` | All parameters confirmed; job is waiting in queue |
| `processing` | Job sent to virtual/physical printer |
| `ready` | Document printed; customer notified for pickup |
| `completed` | Document collected; job archived |

---

## 🚀 Quickstart & Local Development

### 1. Prerequisites
- Docker & Docker Compose
- Python 3.11+
- Redis (optional if running via Docker)

### 2. Environment Configuration
Copy `.env.example` to `.env` and provide your credentials:
```bash
cp .env.example .env
```

Required variables:
```ini
# Redis
REDIS_URL=redis://redis:6379/0

# Anthropic API
ANTHROPIC_API_KEY=sk-ant-api03-...
MODEL_NAME=claude-sonnet-4-6

# Airtable
AIRTABLE_API_KEY=pat...
AIRTABLE_BASE_ID=app...
AIRTABLE_TABLE_NAME=PrintJobs

# n8n Callback Webhook
N8N_CALLBACK_URL=https://n8n.yourdomain.com/webhook/print-clarifications
```

### 3. Running with Docker Compose
Start FastAPI, the ARQ background worker, and Redis in one command:
```bash
docker compose up --build
```

Services started:
- `fastapi`: Serving API on `http://localhost:8000`
- `redis`: Listening on port `6379`
- `arq_worker`: Concurrently processing up to 10 jobs

### 4. Testing Job Ingestion
```bash
curl -X POST http://localhost:8000/jobs \
  -H "Content-Type: application/json" \
  -d '{
    "job_id": "test-job-001",
    "source_channel": "telegram",
    "sender_id": "987654321",
    "sender_name": "Jordan Doe",
    "message_text": "Need this printed fast please",
    "file_url": "https://easeprint-bucket.s3.amazonaws.com/jobs/telegram/987654321/notes.pdf",
    "file_name": "notes.pdf",
    "received_at": "2026-09-12T00:20:00Z"
  }'
```

---

## 🛠️ Third-Party Services Setup (Human Checklist)

Before running the complete system in production, configure the following external platforms:

### 1. 📱 WhatsApp Business Cloud API
1. Create a developer account at [Meta for Developers](https://developers.facebook.com/).
2. Create an App under **Business** type and add the **WhatsApp** product.
3. Obtain your **Phone Number ID** and generate a **System User Access Token** (with `whatsapp_business_messaging` permissions).
4. Configure the Webhook URL in Meta App settings to point to your n8n WhatsApp Trigger node URL and verify the webhook token.

### 2. 💬 Telegram Bot
1. Open Telegram and search for `@BotFather`.
2. Send `/newbot`, name your bot (e.g. `EasePrintBot`), and choose a username.
3. Save the HTTP API bot token and paste it into the n8n Telegram Trigger node.

### 3. ☁️ AWS S3 Bucket
1. Log in to the [AWS Management Console](https://console.aws.amazon.com/) and navigate to S3.
2. Create a bucket (e.g., `easeprint-storage`) with appropriate block public access rules.
3. In IAM, create a user or service role with a scoped policy granting `s3:PutObject` and `s3:GetObject` on `arn:aws:s3:::easeprint-storage/*`.
4. Generate an Access Key ID and Secret Access Key for n8n's AWS S3 credentials.

### 4. 📊 Airtable Base
1. Create a new Airtable base named **EasePrint** with a table named **PrintJobs**.
2. Add fields with matching names:
   - `job_id` (Single line text / UUID)
   - `source_channel` (Single select: `whatsapp`, `telegram`, `web`)
   - `sender_id` (Single line text)
   - `sender_name` (Single line text)
   - `status` (Single select: `received`, `needs_info`, `queued`, `processing`, `ready`, `completed`)
   - `file_url` (URL)
   - `file_name` (Single line text)
   - `message_text` (Long text)
   - `copies` (Number)
   - `color_mode` (Single select: `color`, `bw`)
   - `paper_size` (Single select: `A4`, `A3`, `Letter`)
   - `sides` (Single select: `single`, `double`)
   - `received_at` (Date/Time)
3. Generate an Airtable **Personal Access Token** with `data.records:read` and `data.records:write` scopes.

### 5. 🧠 Anthropic Claude API
1. Visit [Anthropic Console](https://console.anthropic.com/).
2. Generate an API Key and fund credits.
3. Set `ANTHROPIC_API_KEY` in the `.env` file.

### 6. 🔄 n8n Integration & Callback Webhook
1. Import the n8n workflow for intake and normalization.
2. Set the HTTP Request node destination to `http://<YOUR_FASTAPI_HOST>:8000/jobs`.
3. Create a callback workflow with an HTTP Webhook trigger listening for `N8N_CALLBACK_URL`. Connect it to router nodes that dispatch messages back to the corresponding channel (WhatsApp API / Telegram Bot API).

---

## 👥 Contributors & License
Developed for **EasePrint** by [KARTHIK-BATTIPROLU](https://github.com/KARTHIK-BATTIPROLU).
Licensed under the [MIT License](LICENSE).
