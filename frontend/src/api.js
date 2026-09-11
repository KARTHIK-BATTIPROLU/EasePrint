const BASE_URL = "";

export async function calculatePrice(specs) {
  const res = await fetch(`${BASE_URL}/pricing/calculate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(specs),
  });
  if (!res.ok) throw new Error("Price calculation failed");
  return res.json();
}

export async function uploadDocument(file) {
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch(`${BASE_URL}/upload`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new Error("Upload failed");
  return res.json();
}

export async function submitPrintJob(jobData) {
  const res = await fetch(`${BASE_URL}/jobs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jobData),
  });
  if (!res.ok) throw new Error("Job submission failed");
  return res.json();
}

export async function sendChatMessage(chatPayload) {
  const res = await fetch(`${BASE_URL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(chatPayload),
  });
  if (!res.ok) throw new Error("Chat request failed");
  return res.json();
}

export async function fetchJobDetails(jobId) {
  const res = await fetch(`${BASE_URL}/jobs/${jobId}`);
  if (!res.ok) throw new Error("Job not found");
  return res.json();
}

export async function fetchAllJobs() {
  const res = await fetch(`${BASE_URL}/jobs`);
  if (!res.ok) throw new Error("Failed to fetch jobs");
  return res.json();
}

export async function updateJobStatus(jobId, status, notes = "") {
  const res = await fetch(`${BASE_URL}/jobs/${jobId}/status`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status, notes }),
  });
  if (!res.ok) throw new Error("Failed to update status");
  return res.json();
}

export async function markJobReady(jobId, pickupCounter = "Counter 1", staffNotes = "") {
  const res = await fetch(`${BASE_URL}/jobs/${jobId}/print-ready`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pickup_counter: pickupCounter, staff_notes: staffNotes }),
  });
  if (!res.ok) throw new Error("Failed to mark job ready");
  return res.json();
}

export async function fetchCustomizations() {
  const res = await fetch(`${BASE_URL}/customizations`);
  if (!res.ok) throw new Error("Failed to load store customizations");
  return res.json();
}

export async function saveCustomizations(config) {
  const res = await fetch(`${BASE_URL}/customizations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(config),
  });
  if (!res.ok) throw new Error("Failed to save store customizations");
  return res.json();
}

export async function uploadKnowledgeFile(file) {
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch(`${BASE_URL}/customizations/upload-knowledge`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new Error("Failed to upload knowledge document");
  return res.json();
}
