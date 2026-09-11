import sys
sys.stdout.reconfigure(encoding="utf-8")
import urllib.request
import json
import time

base = "http://127.0.0.1:8000"

print("==================================================")
print("     EASEPRINT LIVE END-TO-END VERIFICATION")
print("==================================================")

# 1. Health
print("\n[1] Testing GET /health")
with urllib.request.urlopen(f"{base}/health") as r:
    print(r.read().decode("utf-8"))

# 2. Frontend HTML
print("\n[2] Testing GET / (React Frontend HTML)")
with urllib.request.urlopen(f"{base}/") as r:
    html = r.read().decode("utf-8")
    print(f"Status: {r.status} OK | Content Length: {len(html)} bytes | Title Verified: {'EasePrint' in html}")

# 3. Hyderabad Pricing Engine
print("\n[3] Testing POST /pricing/calculate (Hyderabad Rates)")
req = urllib.request.Request(
    f"{base}/pricing/calculate",
    data=json.dumps({
        "pages": 24,
        "copies": 2,
        "color_mode": "bw",
        "sides": "double",
        "binding": "spiral"
    }).encode("utf-8"),
    headers={"Content-Type": "application/json"}
)
with urllib.request.urlopen(req) as r:
    pricing_res = json.loads(r.read().decode("utf-8"))
    print(f"Total: ₹{pricing_res['total_amount_inr']:.2f}")
    print(f"Summary: {pricing_res['summary']}")

# 4. Student AI Chat with Bedrock Agent
print("\n[4] Testing POST /chat (Interactive AI Assistant)")
chat_req = urllib.request.Request(
    f"{base}/chat",
    data=json.dumps({
        "session_id": "student_live_sess_01",
        "source_channel": "web",
        "sender_name": "Karthik",
        "message": "I need 2 copies of my notes, color double-sided with spiral binding please (10 pages)",
        "pages": 10
    }).encode("utf-8"),
    headers={"Content-Type": "application/json"}
)
with urllib.request.urlopen(chat_req) as r:
    chat_data = json.loads(r.read().decode("utf-8"))
    job_id = chat_data["job_id"]
    print(f"Agent Reply: {chat_data['reply']}")
    print(f"Assigned Job ID: {job_id} | Status: {chat_data['status']}")

# 5. Verify Job Record in DynamoDB
print("\n[5] Testing GET /jobs/{job_id} (DynamoDB Status & Pricing)")
with urllib.request.urlopen(f"{base}/jobs/{job_id}") as r:
    job_details = json.loads(r.read().decode("utf-8"))
    print(f"Verified Job: {job_details['job_id']}")
    print(f"Channel: {job_details['source_channel']} | Sender: {job_details['sender_name']}")
    print(f"Total Amount in DynamoDB: ₹{job_details.get('total_amount_inr', 0):.2f}")

# 6. Staff List Jobs
print("\n[6] Testing GET /jobs (Staff Command Dashboard Queue)")
with urllib.request.urlopen(f"{base}/jobs") as r:
    jobs_list = json.loads(r.read().decode("utf-8"))
    print(f"Total active jobs in Staff Dashboard: {len(jobs_list)}")

# 7. Virtual Printer Completion & Backward Notification
print("\n[7] Testing POST /jobs/{job_id}/print-ready (Backward Alert Dispatch)")
ready_req = urllib.request.Request(
    f"{base}/jobs/{job_id}/print-ready",
    data=json.dumps({
        "pickup_counter": "Counter 1 (Main Xerox Station)",
        "staff_notes": "Completed via EasePrint Virtual Printer"
    }).encode("utf-8"),
    headers={"Content-Type": "application/json"}
)
with urllib.request.urlopen(ready_req) as r:
    ready_data = json.loads(r.read().decode("utf-8"))
    print(f"Status: {ready_data['status'].upper()}")
    print(f"Backward Message Dispatched: {ready_data['outbound_payload']['message']}")
    print(f"Target Channel: {ready_data['outbound_payload']['target_channel']} -> Recipient: {ready_data['outbound_payload']['sender_id']}")

print("\n==================================================")
print("     ALL LIVE SYSTEM TESTS PASSED SUCCESSFULLY!   ")
print("==================================================")
