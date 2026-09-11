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
} from "lucide-react";
import { fetchAllJobs, updateJobStatus, markJobReady } from "../api";

export default function StaffDashboard() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterChannel, setFilterChannel] = useState("all");
  const [activePrinting, setActivePrinting] = useState({}); // { jobId: progressPercent }
  const [notificationLog, setNotificationLog] = useState([]);

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

  // Filter jobs by channel
  const filteredJobs = jobs.filter((j) => {
    if (filterChannel === "all") return true;
    return (j.source_channel || "").toLowerCase() === filterChannel;
  });

  // Group into Kanban columns
  const columns = {
    received: filteredJobs.filter((j) => j.status === "received" || j.status === "needs_info"),
    queued: filteredJobs.filter((j) => j.status === "queued"),
    printing: filteredJobs.filter((j) => j.status === "printing"),
    ready: filteredJobs.filter((j) => j.status === "ready"),
    completed: filteredJobs.filter((j) => j.status === "completed"),
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
          <div className="px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-xl text-center">
            <div className="text-lg font-black text-emerald-700">{columns.ready.length}</div>
            <div className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider">Ready</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Refresh */}
      <div className="flex flex-wrap items-center justify-between gap-4">
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
              <JobCard key={job.job_id} job={job} />
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
      </div>
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

      {/* Pricing and File link */}
      <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-xs">
        <span className="font-extrabold text-slate-900">
          ₹{(job.total_amount_inr || job.pricing?.total_amount_inr || 0).toFixed(2)}
        </span>
        {job.file_url && (
          <a
            href={job.file_url}
            target="_blank"
            rel="noreferrer"
            className="text-sky-600 hover:text-sky-700 font-bold text-[11px] flex items-center space-x-0.5"
          >
            <span>View Doc</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Optional action button */}
      {actionButton}
    </div>
  );
}
