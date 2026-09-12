import React, { useState, useEffect } from "react";
import {
  Printer,
  CheckCircle,
  Clock,
  FileText,
  MessageSquare,
  AlertTriangle,
  Play,
  Check,
  ExternalLink,
  Send,
  RefreshCw,
  SlidersHorizontal,
  ChevronRight,
  Phone,
  Settings,
  UploadCloud,
  X,
  FileCheck,
  Save,
  BookOpen,
  Tag,
  Sparkles,
  Search,
  XCircle,
  CreditCard,
} from "lucide-react";
import {
  fetchAllJobs,
  updateJobStatus,
  markJobReady,
  fetchCustomizations,
  saveCustomizations,
  uploadKnowledgeFile,
  rejectJob,
} from "../api";

export default function StaffDashboard() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterChannel, setFilterChannel] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [rejectingJob, setRejectingJob] = useState(null); // jobId
  const [rejectReason, setRejectReason] = useState("Unsupported file format or damaged document");
  const [activePrinting, setActivePrinting] = useState({}); // { jobId: progressPercent }
  const [notificationLog, setNotificationLog] = useState([]);
  const [showCustomizations, setShowCustomizations] = useState(false);

  // Fetch all jobs
  const loadJobs = async () => {
    try {
      const data = await fetchAllJobs();
      setJobs(data);
    } catch (e) {
      console.warn("Could not load jobs:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
    const interval = setInterval(loadJobs, 4000);
    return () => clearInterval(interval);
  }, []);

  // Filter jobs by channel and search term
  const filteredJobs = jobs.filter((j) => {
    const matchesChannel =
      filterChannel === "all" || (j.source_channel || "").toLowerCase() === filterChannel;
    if (!matchesChannel) return false;
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      (j.job_id || "").toLowerCase().includes(term) ||
      (j.sender_name || "").toLowerCase().includes(term) ||
      (j.file_name || "").toLowerCase().includes(term)
    );
  });

  // Group into Kanban columns
  const columns = {
    received: filteredJobs.filter((j) => j.status === "received" || j.status === "needs_info"),
    queued: filteredJobs.filter((j) => j.status === "queued"),
    printing: filteredJobs.filter((j) => j.status === "printing"),
    ready: filteredJobs.filter((j) => j.status === "ready"),
    completed: filteredJobs.filter((j) => j.status === "completed"),
    rejected: filteredJobs.filter((j) => j.status === "rejected"),
  };

  const handleConfirmReject = async (jobId) => {
    try {
      await rejectJob(jobId, rejectReason);
      setRejectingJob(null);
      loadJobs();
    } catch (e) {
      alert("Failed to reject job: " + e.message);
    }
  };

  // Virtual Printer Simulation
  const handleSimulatePrint = async (jobId) => {
    // 1. Move to printing status in DynamoDB
    await updateJobStatus(jobId, "printing", "Virtual printer simulation active");
    setActivePrinting((prev) => ({ ...prev, [jobId]: 10 }));
    loadJobs();

    // 2. Animate progress bar over 6 seconds
    let progress = 10;
    const progressInterval = setInterval(async () => {
      progress += 20;
      setActivePrinting((prev) => ({ ...prev, [jobId]: Math.min(progress, 100) }));

      if (progress >= 100) {
        clearInterval(progressInterval);
        setActivePrinting((prev) => {
          const next = { ...prev };
          delete next[jobId];
          return next;
        });

        // 3. Mark ready & trigger backward completion notification!
        try {
          const res = await markJobReady(jobId, "Counter 1 (Main)", "Printed via Virtual Printer");
          setNotificationLog((prev) => [
            {
              id: Date.now(),
              text: `Dispatched backward alert to ${res.outbound_payload?.target_channel} (${res.outbound_payload?.sender_id}): "Order #${jobId} ready!"`,
            },
            ...prev,
          ]);
          loadJobs();
        } catch (e) {
          console.error("Print ready dispatch error:", e);
        }
      }
    }, 1200);
  };

  // Manual Mark Completed
  const handleMarkCompleted = async (jobId) => {
    await updateJobStatus(jobId, "completed", "Order handed over to student");
    loadJobs();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner & Stats */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Staff Print Station & Virtual Printer</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800">
              Live Queue
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Monitor multi-channel orders, simulate printer output, and dispatch backward alerts to students.
          </p>
        </div>

        {/* Quick Stats Pills */}
        <div className="flex items-center space-x-3">
          <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-center">
            <div className="text-lg font-black text-slate-800">{jobs.length}</div>
            <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Total</div>
          </div>
          <div className="px-4 py-2 bg-sky-50 border border-sky-100 rounded-xl text-center">
            <div className="text-lg font-black text-sky-700">{columns.queued.length}</div>
            <div className="text-[10px] uppercase font-bold text-sky-600 tracking-wider">Queued</div>
          </div>
          <div className="px-4 py-2 bg-amber-50 border border-amber-100 rounded-xl text-center">
            <div className="text-lg font-black text-amber-700">~{(columns.queued.length + columns.printing.length) * 2}m</div>
            <div className="text-[10px] uppercase font-bold text-amber-600 tracking-wider">Est. Wait</div>
          </div>
          <div className="px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-xl text-center">
            <div className="text-lg font-black text-emerald-700">{columns.ready.length}</div>
            <div className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider">Ready</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs, Search & Refresh */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center space-x-2 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-slate-400 px-2 uppercase tracking-wider">Channel:</span>
            {["all", "whatsapp", "telegram", "web"].map((c) => (
              <button
                key={c}
                onClick={() => setFilterChannel(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                  filterChannel === c ? "bg-indigo-600 text-white shadow-sm" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {c === "all" ? "All Channels" : c}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Job ID, Student, or File..."
              className="pl-9 pr-3 py-2 border border-slate-200 bg-white rounded-xl text-xs font-semibold focus:ring-2 focus:ring-indigo-500 w-64 shadow-sm"
            />
          </div>

          <button
            onClick={() => setShowCustomizations(true)}
            className="flex items-center space-x-1.5 px-3.5 py-2 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm shadow-indigo-500/20"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Customizations & Prices</span>
          </button>
        </div>

        <button
          onClick={loadJobs}
          className="flex items-center space-x-2 px-3.5 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold transition-colors shadow-sm"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refresh Queue</span>
        </button>
      </div>

      {/* Notification Toast Log (Backward Alerts) */}
      {notificationLog.length > 0 && (
        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-xs text-emerald-900 space-y-1">
          <div className="font-bold flex items-center space-x-1.5">
            <Send className="w-3.5 h-3.5 text-emerald-600" />
            <span>Outbound Relay Dispatch Activity:</span>
          </div>
          {notificationLog.slice(0, 2).map((log) => (
            <div key={log.id} className="text-emerald-700 font-mono text-[11px]">
              • {log.text}
            </div>
          ))}
        </div>
      )}

      {/* Kanban Board Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Column 1: Received / Needs Info */}
        <div className="bg-slate-100/70 p-3.5 rounded-2xl border border-slate-200/80 flex flex-col h-[680px]">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <span>Intake / Needs Info</span>
            </span>
            <span className="text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded-full shadow-sm">
              {columns.received.length}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto space-y-3 pr-1">
            {columns.received.map((job) => (
              <JobCard
                key={job.job_id}
                job={job}
                onReject={(id) => setRejectingJob(id)}
                actionButton={
                  <div className="space-y-1.5 mt-2">
                    <button
                      onClick={async () => {
                        await updateJobStatus(job.job_id, "queued", "Staff manual override to queued");
                        loadJobs();
                      }}
                      className="w-full py-1.5 px-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1 shadow-sm transition-all"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Approve & Queue</span>
                    </button>
                    <button
                      onClick={() => handleSimulatePrint(job.job_id)}
                      className="w-full py-1.5 px-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1 shadow-sm transition-all"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Print Directly</span>
                    </button>
                  </div>
                }
              />
            ))}
            {columns.received.length === 0 && <EmptyColumn text="No pending inquiries" />}
          </div>
        </div>

        {/* Column 2: Queued (Ready for Printer) */}
        <div className="bg-slate-100/70 p-3.5 rounded-2xl border border-slate-200/80 flex flex-col h-[680px]">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
              <span>Queued (Ready)</span>
            </span>
            <span className="text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded-full shadow-sm">
              {columns.queued.length}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto space-y-3 pr-1">
            {columns.queued.map((job) => (
              <JobCard
                key={job.job_id}
                job={job}
                onReject={(id) => setRejectingJob(id)}
                actionButton={
                  <button
                    onClick={() => handleSimulatePrint(job.job_id)}
                    className="w-full mt-2 py-2 px-3 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 shadow-sm transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Simulate Print</span>
                  </button>
                }
              />
            ))}
            {columns.queued.length === 0 && <EmptyColumn text="Queue empty" />}
          </div>
        </div>

        {/* Column 3: Printing (Virtual Printer Progress) */}
        <div className="bg-slate-100/70 p-3.5 rounded-2xl border border-slate-200/80 flex flex-col h-[680px]">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
              <span>Printing...</span>
            </span>
            <span className="text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded-full shadow-sm">
              {columns.printing.length}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto space-y-3 pr-1">
            {columns.printing.map((job) => {
              const prog = activePrinting[job.job_id] || 40;
              return (
                <div key={job.job_id} className="bg-white p-3.5 rounded-xl border border-indigo-200 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-slate-900">{job.job_id}</span>
                    <span className="text-[10px] font-bold text-indigo-600">{prog}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${prog}%` }}
                    ></div>
                  </div>
                  <p className="text-[11px] text-slate-500 italic">Virtual printer processing sheets...</p>
                </div>
              );
            })}
            {columns.printing.length === 0 && <EmptyColumn text="No jobs active" />}
          </div>
        </div>

        {/* Column 4: Ready for Pickup */}
        <div className="bg-slate-100/70 p-3.5 rounded-2xl border border-slate-200/80 flex flex-col h-[680px]">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span>Ready for Pickup</span>
            </span>
            <span className="text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded-full shadow-sm">
              {columns.ready.length}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto space-y-3 pr-1">
            {columns.ready.map((job) => (
              <JobCard
                key={job.job_id}
                job={job}
                actionButton={
                  <button
                    onClick={() => handleMarkCompleted(job.job_id)}
                    className="w-full mt-2 py-1.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1 shadow-sm transition-all"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Handover & Complete</span>
                  </button>
                }
              />
            ))}
            {columns.ready.length === 0 && <EmptyColumn text="No prints waiting" />}
          </div>
        </div>

        {/* Column 5: Completed */}
        <div className="bg-slate-100/70 p-3.5 rounded-2xl border border-slate-200/80 flex flex-col h-[680px]">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
              <span>Archived / Completed</span>
            </span>
            <span className="text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded-full shadow-sm">
              {columns.completed.length}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto space-y-3 pr-1">
            {columns.completed.map((job) => (
              <JobCard key={job.job_id} job={job} />
            ))}
            {columns.completed.length === 0 && <EmptyColumn text="No archived orders" />}
          </div>
        </div>

        {/* Column 6: Rejected */}
        {columns.rejected?.length > 0 && (
          <div className="bg-rose-50/60 p-3.5 rounded-2xl border border-rose-200/80 flex flex-col h-[680px]">
            <div className="flex items-center justify-between pb-3 border-b border-rose-200 mb-3">
              <span className="text-xs font-bold text-rose-700 uppercase tracking-wider flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span>Rejected Orders</span>
              </span>
              <span className="text-xs font-bold text-rose-700 bg-white px-2 py-0.5 rounded-full shadow-sm">
                {columns.rejected.length}
              </span>
            </div>
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {columns.rejected.map((job) => (
                <JobCard key={job.job_id} job={job} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Reject Order Reason Modal */}
      {rejectingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full border border-slate-200 shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-slate-900 flex items-center space-x-2">
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>Reject Order #{rejectingJob}</span>
              </h3>
              <button
                onClick={() => setRejectingJob(null)}
                className="w-7 h-7 rounded-full hover:bg-slate-100 text-slate-400 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-500">
              Select a reason for rejecting this print request. The student will be notified and the job marked as rejected.
            </p>

            <div className="space-y-2">
              {[
                "Unsupported file format or damaged document",
                "Paper stock or binding materials out of stock",
                "Page count / color specifications mismatch",
                "Payment verification failed / unpaid request",
                "Violates campus academic printing policy",
              ].map((r) => (
                <label
                  key={r}
                  className={`flex items-center space-x-2 p-2.5 rounded-xl border text-xs cursor-pointer transition-colors ${
                    rejectReason === r
                      ? "border-rose-500 bg-rose-50/50 text-rose-900 font-bold"
                      : "border-slate-200 hover:bg-slate-50 text-slate-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="rejectReason"
                    value={r}
                    checked={rejectReason === r}
                    onChange={(e) => setRejectReason(e.target.value)}
                    className="text-rose-600 focus:ring-rose-500"
                  />
                  <span>{r}</span>
                </label>
              ))}
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={() => setRejectingJob(null)}
                className="flex-1 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={() => handleConfirmReject(rejectingJob)}
                className="flex-1 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-xl shadow-sm transition-all"
              >
                Confirm Rejection
              </button>
            </div>
          </div>
        </div>
      )}

      <CustomizationsModal
        isOpen={showCustomizations}
        onClose={() => setShowCustomizations(false)}
        onSaved={loadJobs}
      />
    </div>
  );
}

function EmptyColumn({ text }) {
  return (
    <div className="h-32 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-xs font-medium text-slate-400">
      {text}
    </div>
  );
}

function JobCard({ job, actionButton }) {
  const channelColors = {
    whatsapp: "bg-emerald-100 text-emerald-800 border-emerald-200",
    telegram: "bg-sky-100 text-sky-800 border-sky-200",
    web: "bg-purple-100 text-purple-800 border-purple-200",
  };

  const channel = (job.source_channel || "web").toLowerCase();

  return (
    <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-2.5">
      {/* Top row: Job ID and Channel badge */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-extrabold text-slate-900 tracking-tight">{job.job_id}</span>
        <span
          className={`px-2 py-0.5 rounded-md text-[10px] font-bold border uppercase tracking-wider ${
            channelColors[channel] || "bg-slate-100 text-slate-700"
          }`}
        >
          {channel}
        </span>
      </div>

      {/* Customer Name & Message */}
      <div>
        <div className="text-xs font-bold text-slate-800 truncate">{job.sender_name || "Anonymous"}</div>
        <div className="text-[11px] text-slate-500 truncate">{job.sender_id}</div>
        {job.message_text && (
          <p className="text-[11px] text-slate-600 italic bg-slate-50 p-1.5 rounded-lg mt-1 line-clamp-2">
            "{job.message_text}"
          </p>
        )}
      </div>

      {/* Specifications pills */}
      <div className="flex flex-wrap gap-1 text-[10px] font-semibold text-slate-600">
        {job.requirements?.copies && (
          <span className="bg-slate-100 px-1.5 py-0.5 rounded">{job.requirements.copies} Copy</span>
        )}
        {job.requirements?.color_mode && (
          <span className="bg-slate-100 px-1.5 py-0.5 rounded uppercase">{job.requirements.color_mode}</span>
        )}
        {job.requirements?.sides && (
          <span className="bg-slate-100 px-1.5 py-0.5 rounded capitalize">{job.requirements.sides}</span>
        )}
        {job.requirements?.binding && job.requirements.binding !== "none" && (
          <span className="bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded capitalize">
            {job.requirements.binding} Bind
          </span>
        )}
      </div>

      {/* Payment Status & File link */}
      <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-xs">
        <div className="flex items-center space-x-1.5">
          <span className="font-extrabold text-slate-900">
            ₹{(job.total_amount_inr || job.pricing?.total_amount_inr || 0).toFixed(2)}
          </span>
          {job.payment_status === "paid" ? (
            <span className="text-[9px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded flex items-center space-x-0.5">
              <CreditCard className="w-2.5 h-2.5 text-emerald-600" />
              <span>PAID</span>
            </span>
          ) : (
            <span className="text-[9px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded">
              UNPAID
            </span>
          )}
        </div>
        {job.file_url && job.file_url !== "[PURGED_FOR_PRIVACY]" ? (
          <a
            href={job.file_url}
            target="_blank"
            rel="noreferrer"
            className="text-sky-600 hover:text-sky-700 font-bold text-[11px] flex items-center space-x-0.5"
          >
            <span>View Doc</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded flex items-center space-x-1">
            <span>🔒 File Shredded</span>
          </span>
        )}
      </div>

      {job.status === "rejected" && (
        <div className="p-2 bg-rose-50 border border-rose-200 rounded-lg text-[10px] text-rose-700 font-medium">
          <strong>Rejected:</strong> {job.rejection_reason || "Unsuitable order"}
        </div>
      )}

      {/* Optional action button & Reject option */}
      {actionButton}

      {job.status !== "ready" && job.status !== "completed" && job.status !== "rejected" && onReject && (
        <button
          onClick={() => onReject(job.job_id)}
          className="w-full text-center text-[10px] font-bold text-slate-400 hover:text-rose-600 pt-1 transition-colors"
        >
          Reject Order
        </button>
      )}
    </div>
  );
}

function CustomizationsModal({ isOpen, onClose, onSaved }) {
  const [activeTab, setActiveTab] = useState("pricing");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadMsg, setUploadMsg] = useState("");
  const [config, setConfig] = useState(null);

  useEffect(() => {
    if (isOpen) {
      loadConfig();
    }
  }, [isOpen]);

  const loadConfig = async () => {
    setLoading(true);
    try {
      const data = await fetchCustomizations();
      setConfig(data);
    } catch (e) {
      console.error("Failed to load customizations:", e);
    } finally {
      setLoading(false);
    }
  };

  const handlePriceChange = (field, val) => {
    setConfig((prev) => ({
      ...prev,
      pricing: {
        ...prev.pricing,
        [field]: parseFloat(val) || 0,
      },
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await saveCustomizations(config);
      onSaved?.();
      onClose();
    } catch (e) {
      alert("Failed to save customizations: " + e.message);
    } finally {
      setSaving(false);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setUploadMsg("");
    try {
      const res = await uploadKnowledgeFile(file);
      setUploadMsg(`Extracted ${res.extracted_chars} characters from ${res.filename} and added to AI context.`);
      await loadConfig();
    } catch (e) {
      setUploadMsg("Upload failed: " + e.message);
    } finally {
      setUploading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center shadow-inner">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 tracking-tight">Store AI Customizations & Pricing</h2>
              <p className="text-xs text-slate-500">Live configuration updated across Bedrock AI and Hyderabad rate calculator</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 bg-white px-6">
          <button
            onClick={() => setActiveTab("pricing")}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center space-x-2 ${
              activeTab === "pricing"
                ? "border-indigo-600 text-indigo-700"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <Tag className="w-3.5 h-3.5" />
            <span>Pricing Matrix</span>
          </button>
          <button
            onClick={() => setActiveTab("persona")}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center space-x-2 ${
              activeTab === "persona"
                ? "border-indigo-600 text-indigo-700"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Persona & Tone</span>
          </button>
          <button
            onClick={() => setActiveTab("context")}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center space-x-2 ${
              activeTab === "context"
                ? "border-indigo-600 text-indigo-700"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Business Context & RAG</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {loading ? (
            <div className="py-12 text-center text-slate-400 text-xs flex items-center justify-center space-x-2">
              <RefreshCw className="w-4 h-4 animate-spin text-indigo-600" />
              <span>Loading store configuration...</span>
            </div>
          ) : activeTab === "pricing" ? (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">A4 B&W Single-sided (₹/page)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-bold">₹</span>
                    <input
                      type="number"
                      step="0.5"
                      value={config?.pricing?.bw_single ?? 2}
                      onChange={(e) => handlePriceChange("bw_single", e.target.value)}
                      className="w-full pl-7 pr-3 py-2 border border-slate-300 rounded-xl text-xs font-bold focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">A4 B&W Double-sided (₹/sheet)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-bold">₹</span>
                    <input
                      type="number"
                      step="0.5"
                      value={config?.pricing?.bw_duplex ?? 3}
                      onChange={(e) => handlePriceChange("bw_duplex", e.target.value)}
                      className="w-full pl-7 pr-3 py-2 border border-slate-300 rounded-xl text-xs font-bold focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">A4 Color Standard (₹/page)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-bold">₹</span>
                    <input
                      type="number"
                      step="1"
                      value={config?.pricing?.color_standard ?? 10}
                      onChange={(e) => handlePriceChange("color_standard", e.target.value)}
                      className="w-full pl-7 pr-3 py-2 border border-slate-300 rounded-xl text-xs font-bold focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">A4 Color Glossy (₹/page)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-bold">₹</span>
                    <input
                      type="number"
                      step="1"
                      value={config?.pricing?.color_glossy ?? 15}
                      onChange={(e) => handlePriceChange("color_glossy", e.target.value)}
                      className="w-full pl-7 pr-3 py-2 border border-slate-300 rounded-xl text-xs font-bold focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Spiral Binding (₹)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-bold">₹</span>
                    <input
                      type="number"
                      step="5"
                      value={config?.pricing?.spiral_binding ?? 30}
                      onChange={(e) => handlePriceChange("spiral_binding", e.target.value)}
                      className="w-full pl-7 pr-3 py-2 border border-slate-300 rounded-xl text-xs font-bold focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Soft Binding (₹)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-bold">₹</span>
                    <input
                      type="number"
                      step="5"
                      value={config?.pricing?.soft_binding ?? 50}
                      onChange={(e) => handlePriceChange("soft_binding", e.target.value)}
                      className="w-full pl-7 pr-3 py-2 border border-slate-300 rounded-xl text-xs font-bold focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Hard Project/Thesis Binding (₹)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-bold">₹</span>
                    <input
                      type="number"
                      step="10"
                      value={config?.pricing?.hard_binding ?? 180}
                      onChange={(e) => handlePriceChange("hard_binding", e.target.value)}
                      className="w-full pl-7 pr-3 py-2 border border-slate-300 rounded-xl text-xs font-bold focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Corner Stapling (₹)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-bold">₹</span>
                    <input
                      type="number"
                      step="1"
                      value={config?.pricing?.corner_staple ?? 0}
                      onChange={(e) => handlePriceChange("corner_staple", e.target.value)}
                      className="w-full pl-7 pr-3 py-2 border border-slate-300 rounded-xl text-xs font-bold focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <label className="text-xs font-bold text-slate-700">Custom Promotions & Special Rules</label>
                <textarea
                  rows="3"
                  value={config?.custom_rules || ""}
                  onChange={(e) => setConfig((prev) => ({ ...prev, custom_rules: e.target.value }))}
                  placeholder="e.g. Free soft binding for orders over ₹200. Express prints available."
                  className="w-full p-3 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 leading-relaxed"
                />
              </div>
            </div>
          ) : activeTab === "persona" ? (
            <div className="space-y-5">
              <div className="bg-indigo-50/70 border border-indigo-100 p-4 rounded-2xl">
                <div className="flex items-center space-x-2 text-indigo-900 font-bold text-xs mb-1">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>Configurable Agent Persona & Voice</span>
                </div>
                <p className="text-[11px] text-indigo-700 leading-relaxed">
                  Choose a preset or type a customized persona. The intake AI agent adopts this personality when interacting with students on Telegram and Web, while always quoting the exact live rates from your <strong>Pricing Matrix</strong>.
                </p>
              </div>

              {/* Persona Presets */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">Quick Persona Presets</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setConfig((prev) => ({
                        ...prev,
                        persona:
                          "Friendly, efficient, and student-focused campus Xerox assistant with local Hyderabad warmth. Explains print options clearly, concisely, and patiently.",
                      }))
                    }
                    className="p-3 text-left border border-slate-200 hover:border-indigo-500 rounded-xl bg-slate-50/50 hover:bg-indigo-50/40 transition-all"
                  >
                    <div className="font-bold text-xs text-slate-900 flex items-center space-x-1.5">
                      <span>🎓 Friendly Student Peer</span>
                      <span className="text-[9px] bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded-full font-bold">Default</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1 line-clamp-2">
                      Warm, supportive campus tone. Patiently explains double-sided savings and binding perks.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setConfig((prev) => ({
                        ...prev,
                        persona:
                          "High-speed, laser-focused academic print intake agent. Answers in rapid bullet points, prioritizes fast fulfillment, and queues jobs in under 10 seconds.",
                      }))
                    }
                    className="p-3 text-left border border-slate-200 hover:border-indigo-500 rounded-xl bg-slate-50/50 hover:bg-indigo-50/40 transition-all"
                  >
                    <div className="font-bold text-xs text-slate-900">⚡ Express / Urgent Sprint</div>
                    <p className="text-[10px] text-slate-500 mt-1 line-clamp-2">
                      Minimal text, ultra-fast turnarounds, instant calculation, and prompt queueing.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setConfig((prev) => ({
                        ...prev,
                        persona:
                          "Polite, formal, and professional print shop consultant. Provides structured itemized summaries, advises on paper weights, and delivers executive-grade service.",
                      }))
                    }
                    className="p-3 text-left border border-slate-200 hover:border-indigo-500 rounded-xl bg-slate-50/50 hover:bg-indigo-50/40 transition-all"
                  >
                    <div className="font-bold text-xs text-slate-900">💼 Formal Print Specialist</div>
                    <p className="text-[10px] text-slate-500 mt-1 line-clamp-2">
                      Crisp, polite corporate etiquette with clear itemized price breakdowns.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setConfig((prev) => ({
                        ...prev,
                        persona:
                          "Colloquial Hyderabad campus Xerox Bhayya. Speaks with local warmth and colloquial phrases ('Namaskaram! Haan bhai, what do you need to print today?'). Always makes sure students get the best price.",
                      }))
                    }
                    className="p-3 text-left border border-slate-200 hover:border-indigo-500 rounded-xl bg-slate-50/50 hover:bg-indigo-50/40 transition-all"
                  >
                    <div className="font-bold text-xs text-slate-900">🇮🇳 Campus Xerox Bhayya</div>
                    <p className="text-[10px] text-slate-500 mt-1 line-clamp-2">
                      Authentic local student hub flavor with genuine hospitality and care.
                    </p>
                  </button>
                </div>
              </div>

              {/* Active Persona Custom Prompt */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700">Active Agent Persona Prompt</label>
                  <button
                    type="button"
                    onClick={() =>
                      setConfig((prev) => ({
                        ...prev,
                        persona:
                          "Friendly, efficient, and student-focused campus Xerox assistant with local Hyderabad warmth. Explains print options clearly, concisely, and patiently.",
                      }))
                    }
                    className="text-[10px] font-bold text-indigo-600 hover:text-indigo-800"
                  >
                    Reset to Base Default
                  </button>
                </div>
                <textarea
                  rows="4"
                  value={config?.persona || ""}
                  onChange={(e) => setConfig((prev) => ({ ...prev, persona: e.target.value }))}
                  placeholder="Define custom persona, attitude, greeting style, or communication rules..."
                  className="w-full p-3 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 leading-relaxed font-mono text-slate-800"
                />
              </div>

              <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl text-[11px] text-amber-800 flex items-start space-x-2">
                <Tag className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Price Reference Guarantee:</strong> Regardless of which persona you choose, the agent strictly uses your configured rate card (e.g. ₹{config?.pricing?.bw_duplex ? config.pricing.bw_duplex / 2 : 1.5}/side double-sided, ₹{config?.pricing?.color_standard ?? 10}/page color, ₹{config?.pricing?.spiral_binding ?? 30} spiral).
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Store Display Name</label>
                <input
                  type="text"
                  value={config?.store_name || ""}
                  onChange={(e) => setConfig((prev) => ({ ...prev, store_name: e.target.value }))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-bold focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Business Context & Guidelines (AI RAG Context)</label>
                <textarea
                  rows="4"
                  value={config?.business_context || ""}
                  onChange={(e) => setConfig((prev) => ({ ...prev, business_context: e.target.value }))}
                  placeholder="Describe your store hours, values, pickup counters, thesis binding procedures..."
                  className="w-full p-3 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 leading-relaxed"
                />
              </div>

              {/* Document Uploader */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span>Upload Knowledge Base File (PDF or TXT)</span>
                  {uploading && <span className="text-indigo-600 animate-pulse text-[11px]">Extracting text...</span>}
                </label>
                <label className="border-2 border-dashed border-slate-300 hover:border-indigo-500 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-50/50 hover:bg-indigo-50/30">
                  <input type="file" onChange={handleFileUpload} accept=".pdf,.txt,.md" className="hidden" />
                  <UploadCloud className="w-8 h-8 text-indigo-600 mb-1.5" />
                  <span className="font-bold text-xs text-slate-800">
                    {uploading ? "Extracting & Ingesting Document..." : "Click or drop reference file here"}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-0.5">Upload policy documents, rate cards, or campus xerox manuals</span>
                </label>
                {uploadMsg && (
                  <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 p-2 rounded-lg">{uploadMsg}</p>
                )}
              </div>

              {/* Uploaded Documents List */}
              {config?.uploaded_knowledge_docs?.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Active Knowledge Documents:</span>
                  <div className="space-y-1.5 max-h-40 overflow-y-auto">
                    {config.uploaded_knowledge_docs.map((doc, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs">
                        <div className="flex items-center space-x-2 truncate max-w-[320px]">
                          <FileText className="w-4 h-4 text-indigo-600 shrink-0" />
                          <span className="font-semibold text-slate-800 truncate">{doc.name}</span>
                        </div>
                        <span className="text-[10px] text-emerald-700 bg-emerald-100 font-bold px-2 py-0.5 rounded-full shrink-0">
                          Active in RAG
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center space-x-1.5 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 transition-all"
          >
            <Save className="w-3.5 h-3.5" />
            <span>{saving ? "Saving AI Context..." : "Save & Update AI Context"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
