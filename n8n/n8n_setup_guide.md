# EasePrint - n8n Workflow Setup & Interactive Telegram Bot Guide

This guide explains how to import and activate the complete EasePrint omnichannel workflow in your n8n cloud dashboard (**`https://karthik890.app.n8n.cloud`**).

---

## 🚀 1. One-Click Workflow Import

1. Log into your n8n workspace at **`https://karthik890.app.n8n.cloud`**.
2. Click **Workflows** in the left sidebar $\rightarrow$ Click the **`...`** menu (top right) $\rightarrow$ Select **Import from File**.
3. Select the file: `n8n/easeprint_workflow.json`.
4. The complete workflow will load with all 17 nodes and connections pre-mapped.

---

## 🤖 2. Interactive Telegram Bot Setup (With Clickable Options)

To enable students to interact with the bot using clickable buttons (so they don't have to type everything):

### A. Add Telegram Credentials in n8n
1. In n8n, go to **Credentials** $\rightarrow$ Click **New Credential** $\rightarrow$ Select **Telegram**.
2. Enter your Bot Token generated from [@BotFather](https://t.me/BotFather) on Telegram:
   - Token format: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`
3. Save the credential as **`Telegram account`**.
4. In the workflow, assign this credential to:
   - **`Telegram Trigger`** node
   - **`Send Telegram Interactive Reply`** node
   - **`Notify Telegram Ready`** node

### B. How the Clickable Options Work
When a student uploads a document or sends an inquiry without specifying options, the bot automatically responds with Telegram **Inline Keyboard Buttons**:
- **Row 1 (Copies):** `[📄 1 Copy]` `[📄 2 Copies]` `[📄 3 Copies]`
- **Row 2 (Color):** `[⚫ B&W Single (₹2)]` `[📄 B&W Duplex (₹1.5)]` `[🎨 Color (₹10)]`
- **Row 3 (Binding):** `[📌 No Binding]` `[🌀 Spiral (₹30)]` `[📘 Hard Thesis (₹180)]`

When the student taps any button, Telegram sends the selection back through the **Telegram Trigger** callback query, updating the order specs instantly without typing!

---

## 💬 3. Subprompts for the n8n AI Agent Node

In your n8n workflow, open the **`EasePrint AI Agent`** node. In the **System Message** / **Options** tab, you can customize these two subprompts:

### Subprompt A: Store Persona & Tone Directive
Add this into the AI Agent System Message:
```text
[PERSONA DIRECTIVE]
Adopt a friendly, efficient, and student-focused campus Xerox assistant persona with authentic local Hyderabad warmth. 
- Greeting: Welcoming, courteous, and polite ("Namaskaram! What would you like to print today?").
- Communication Style: Speak patiently, explain back-to-back (duplex) paper savings clearly, and guide students to click the quick selection buttons below.
- Clarification: If page count or binding is not specified, ask ONE clear question with option prompts.
```

### Subprompt B: Dynamic Rate Card Reference
Add this into the AI Agent System Message:
```text
[HYDERABAD RATE CARD REFERENCE]
Strictly refer to these exact rates for all quotes:
- A4 B&W Single-sided: ₹2.00 per page
- A4 B&W Double-sided (Duplex): ₹3.00 per sheet (₹1.50 per side)
- A4 Color Standard: ₹10.00 per page
- A4 Color Glossy: ₹15.00 per page
- Spiral Binding: ₹30.00
- Soft Binding: ₹50.00
- Hard Project/Thesis Binding: ₹180.00
- Corner Stapling: Free

Never quote arbitrary prices. Always invoke the calculate_hyderabad_price tool to generate the itemized calculation before finalizing.
```

---

## 🔔 4. Backward Completion Notification Loop

When the print job is completed by the staff on the **Staff Dashboard** (`/staff`) or processed via the **Virtual Printer**:
1. FastAPI automatically calls the n8n webhook:
   ```
   POST https://karthik890.app.n8n.cloud/webhook/notify-student
   ```
2. The **`Job Ready Webhook`** receives the alert payload:
   ```json
   {
     "event": "print_ready",
     "job_id": "EP-10492-4821",
     "target_channel": "telegram",
     "sender_id": "123456789",
     "pickup_counter": "Counter 1 (Main)",
     "total_amount": 35.0,
     "file_purged": true,
     "message": "🎉 Hey! Your print order #EP-10492-4821 is printed and ready! Total: ₹35.00. Please collect it from Counter 1 (Main). 🔒 (Your digital document has been permanently deleted from our cloud for student privacy)."
   }
   ```
3. The **`Notify Telegram Ready`** node immediately sends this message to the student on Telegram!
4. In your project `.env` file, set:
   ```env
   N8N_COMPLETION_URL=https://karthik890.app.n8n.cloud/webhook/notify-student
   ```

---

## ✅ 5. Activation

Click the **Active** toggle switch (top right in n8n) to turn the workflow to **ACTIVE**. 
Your multi-channel AI Xerox intake hub is now live!
