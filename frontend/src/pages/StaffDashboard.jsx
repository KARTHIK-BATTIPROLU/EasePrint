import React, { useState, useEffect, useRef } from "react";
import {
  Printer,
  CheckCircle2,
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
  ChevronDown,
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
  DollarSign,
  TrendingUp,
  Download,
  ShieldCheck,
  Activity,
  Filter,
  Layers,
  FileSpreadsheet,
  Database,
  Lock,
  Coins,
  Copy,
} from "lucide-react";
import {
  fetchAllJobs,
  updateJobStatus,
  markJobReady,
  fetchCustomizations,
  saveCustomizations,
  uploadKnowledgeFile,
  rejectJob,
  fetchEarningsAnalytics,
  fetchSystemLogs,
} from "../api";

// CSV Download Helper
function downloadCSV(filename, rows) {
  if (!rows || !rows.length) return;
  const headers = Object.keys(rows[0]);
  const csvContent = [
    headers.join(","),
    ...rows.map((row) =>
      headers
        .map((header) => {
          let val = row[header] === null || row[header] === undefined ? "" : String(row[header]);
          val = val.replace(/"/g, '""');
          if (val.includes(",") || val.includes("\n") || val.includes('"')) {
            val = `"${val}"`;
          }
          return val;
        })
        .join(",")
    ),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// JSON Download Helper
function downloadJSON(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function StaffDashboard() {
  // Main view navigation: "queue" | "earnings" | "payments" | "printouts" | "logs"
  const [viewMode, setViewMode] = useState("queue");

  // Jobs state for Live Queue
  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [filterChannel, setFilterChannel] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [rejectingJob, setRejectingJob] = useState(null);
  const [rejectReason, setRejectReason] = useState("Unsupported file format or damaged document");
  const [activePrinting, setActivePrinting] = useState({});
  const [notificationLog, setNotificationLog] = useState([]);
  const [showCustomizations, setShowCustomizations] = useState(false);

  // Analytics & Earnings state
  const [analytics, setAnalytics] = useState(null);
  const [loadingAnalytics, setLoadingAnalytics] = useState(false);

  // Payment Records filters
  const [paymentSearch, setPaymentSearch] = useState("");
  const [paymentStatusFilter, setPaymentStatusFilter] = useState("all");

  // Printout Records filters
  const [printoutSearch, setPrintoutSearch] = useState("");
  const [printoutStatusFilter, setPrintoutStatusFilter] = useState("all");

  // System Audit Logs state
  const [logs, setLogs] = useState([]);
  const [loadingLogs, setLoadingLogs] = useState(false);
  const [logEventType, setLogEventType] = useState("ALL");
  const [logSearch, setLogSearch] = useState("");
  const [autoRefreshLogs, setAutoRefreshLogs] = useState(true);
  const [expandedLogId, setExpandedLogId] = useState(null);

  // Load live jobs with concurrency guard
  const loadingJobsRef = useRef(false);
  const loadJobs = async () => {
    if (loadingJobsRef.current) return;
    loadingJobsRef.current = true;
    try {
      const data = await fetchAllJobs();
      if (Array.isArray(data)) {
        const validJobs = data.filter((j) => j.job_id && !j.job_id.startsWith("_config"));
        setJobs(validJobs);
      }
    } catch (e) {
      console.warn("Could not load jobs:", e);
    } finally {
      loadingJobsRef.current = false;
      setLoadingJobs(false);
    }
  };

  // Load analytics & earnings
  const loadAnalytics = async () => {
    setLoadingAnalytics(true);
    try {
      const data = await fetchEarningsAnalytics();
      setAnalytics(data);
    } catch (e) {
      console.warn("Could not load analytics:", e);
    } finally {
      setLoadingAnalytics(false);
    }
  };

  // Load system audit logs
  const loadLogs = async () => {
    try {
      const data = await fetchSystemLogs(200, logEventType);
      setLogs(data.logs || []);
    } catch (e) {
      console.warn("Could not load audit logs:", e);
    } finally {
      setLoadingLogs(false);
    }
  };

  // Lifecycle polling based on active view
  useEffect(() => {
    loadJobs();
    loadAnalytics();
  }, []);

  useEffect(() => {
    let interval;
    if (viewMode === "queue") {
      interval = setInterval(loadJobs, 5000);
    } else if (viewMode === "earnings" || viewMode === "payments" || viewMode === "printouts") {
      loadAnalytics();
      interval = setInterval(loadAnalytics, 6000);
    } else if (viewMode === "logs") {
      loadLogs();
      if (autoRefreshLogs) {
        interval = setInterval(loadLogs, 4000);
      }
    }
    return () => clearInterval(interval);
  }, [viewMode, autoRefreshLogs, logEventType]);

  // Refresh all current data
  const handleRefreshCurrent = () => {
    if (viewMode === "queue") loadJobs();
    else if (viewMode === "logs") loadLogs();
    else loadAnalytics();
  };

  // Filtered jobs for Queue (guaranteed non-config print orders)
  const filteredJobs = jobs.filter((j) => {
    if (!j.job_id || j.job_id.startsWith("_config")) return false;
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

  const columns = {
    received: filteredJobs.filter(
      (j) => j.status === "received" || j.status === "needs_info" || j.status === "inquiry"
    ),
    queued: filteredJobs.filter((j) => j.status === "queued"),
    printing: filteredJobs.filter((j) => j.status === "printing"),
    ready: filteredJobs.filter((j) => j.status === "ready"),
    completed: filteredJobs.filter((j) => j.status === "completed"),
    rejected: filteredJobs.filter((j) => j.status === "rejected"),
  };

  const handleConfirmReject = async (jobId) => {
    // Instant optimistic UI update
    setJobs((prev) =>
      prev.map((j) =>
        j.job_id === jobId ? { ...j, status: "rejected", rejection_reason: rejectReason } : j
      )
    );
    setRejectingJob(null);
    try {
      await rejectJob(jobId, rejectReason);
      loadJobs();
      loadAnalytics();
    } catch (e) {
      alert("Failed to reject job: " + e.message);
      loadJobs();
    }
  };

  // Handle instant approve & queue with optimistic UI update
  const handleApproveAndQueue = async (jobId) => {
    // 1. Instantly move card to "queued" in UI
    setJobs((prev) =>
      prev.map((j) => (j.job_id === jobId ? { ...j, status: "queued" } : j))
    );
    try {
      await updateJobStatus(jobId, "queued", "Staff manual override to queued");
      loadJobs();
      loadAnalytics();
    } catch (err) {
      console.error("Status update error:", err);
      loadJobs();
    }
  };

  // Virtual Printer Simulation with instant optimistic move
  const handleSimulatePrint = async (jobId) => {
    setJobs((prev) =>
      prev.map((j) => (j.job_id === jobId ? { ...j, status: "printing" } : j))
    );
    setActivePrinting((prev) => ({ ...prev, [jobId]: 15 }));
    try {
      await updateJobStatus(jobId, "printing", "Virtual printer simulation active");
    } catch (e) {
      console.warn("Print status update:", e);
    }

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

        // Instantly move to ready in UI
        setJobs((prev) =>
          prev.map((j) => (j.job_id === jobId ? { ...j, status: "ready" } : j))
        );

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
          loadAnalytics();
        } catch (e) {
          console.error("Print ready dispatch error:", e);
        }
      }
    }, 1200);
  };

  // Manual Mark Completed with instant optimistic move
  const handleMarkCompleted = async (jobId) => {
    setJobs((prev) =>
      prev.map((j) => (j.job_id === jobId ? { ...j, status: "completed" } : j))
    );
    try {
      await updateJobStatus(jobId, "completed", "Order handed over to student");
      loadJobs();
      loadAnalytics();
    } catch (e) {
      console.error("Mark completed error:", e);
      loadJobs();
    }
  };

  // Filtered payment records
  const paymentRecords = (analytics?.payment_records || []).filter((p) => {
    if (paymentStatusFilter !== "all" && p.payment_status !== paymentStatusFilter) return false;
    if (!paymentSearch.trim()) return true;
    const term = paymentSearch.toLowerCase();
    return (
      (p.job_id || "").toLowerCase().includes(term) ||
      (p.customer_name || "").toLowerCase().includes(term) ||
      (p.payment_id || "").toLowerCase().includes(term)
    );
  });

  // Filtered printout records
  const printoutRecords = (analytics?.printout_records || []).filter((p) => {
    if (printoutStatusFilter !== "all" && p.status !== printoutStatusFilter) return false;
    if (!printoutSearch.trim()) return true;
    const term = printoutSearch.toLowerCase();
    return (
      (p.job_id || "").toLowerCase().includes(term) ||
      (p.customer_name || "").toLowerCase().includes(term) ||
      (p.file_name || "").toLowerCase().includes(term)
    );
  });

  // Filtered audit logs
  const filteredLogs = logs.filter((l) => {
    if (logEventType !== "ALL" && l.event_type !== logEventType) return false;
    if (!logSearch.trim()) return true;
    const term = logSearch.toLowerCase();
    return (
      (l.message || "").toLowerCase().includes(term) ||
      (l.job_id || "").toLowerCase().includes(term) ||
      (l.channel || "").toLowerCase().includes(term)
    );
  });

  const totalRevDisplay = analytics?.summary?.total_revenue ?? 0;
  const todayRevDisplay = analytics?.summary?.today_revenue ?? 0;
  const totalPagesDisplay = analytics?.summary?.total_pages_printed ?? 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2.5">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">Staff Print Station & Command</h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 uppercase tracking-wider flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>AWS Native</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Multi-channel queue, live virtual printer, earnings ledger, zero-retention privacy, and system audit logs.
              </p>
            </div>
          </div>
        </div>

        {/* Global Action Buttons */}
        <div className="flex items-center space-x-2.5">
          <button
            onClick={() => setShowCustomizations(true)}
            className="flex items-center space-x-1.5 px-3.5 py-2 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm shadow-indigo-500/20"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>AI Persona & Prices</span>
          </button>
          <button
            onClick={handleRefreshCurrent}
            className="flex items-center space-x-1.5 px-3.5 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold transition-colors shadow-sm"
          >
            <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Main View Switcher Navigation Bar */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200 shadow-inner">
        <button
          onClick={() => setViewMode("queue")}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            viewMode === "queue"
              ? "bg-white text-indigo-700 shadow-sm border border-slate-200"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
          }`}
        >
          <Printer className="w-4 h-4" />
          <span>Live Queue</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-indigo-100 text-indigo-800 font-extrabold">
            {columns.queued.length + columns.printing.length}
          </span>
        </button>

        <button
          onClick={() => setViewMode("earnings")}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            viewMode === "earnings"
              ? "bg-white text-indigo-700 shadow-sm border border-slate-200"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
          }`}
        >
          <TrendingUp className="w-4 h-4 text-emerald-600" />
          <span>Earnings Dashboard</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-100 text-emerald-800 font-extrabold">
            ₹{totalRevDisplay.toFixed(0)}
          </span>
        </button>

        <button
          onClick={() => setViewMode("payments")}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            viewMode === "payments"
              ? "bg-white text-indigo-700 shadow-sm border border-slate-200"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
          }`}
        >
          <CreditCard className="w-4 h-4 text-sky-600" />
          <span>Payment Records</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-sky-100 text-sky-800 font-extrabold">
            {analytics?.payment_records?.length ?? 0}
          </span>
        </button>

        <button
          onClick={() => setViewMode("printouts")}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            viewMode === "printouts"
              ? "bg-white text-indigo-700 shadow-sm border border-slate-200"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
          }`}
        >
          <FileSpreadsheet className="w-4 h-4 text-amber-600" />
          <span>Printout Records</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-amber-100 text-amber-800 font-extrabold">
            {totalPagesDisplay} pgs
          </span>
        </button>

        <button
          onClick={() => setViewMode("logs")}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            viewMode === "logs"
              ? "bg-white text-indigo-700 shadow-sm border border-slate-200"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
          }`}
        >
          <Activity className="w-4 h-4 text-purple-600" />
          <span>System Audit Logs</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* VIEW 1: LIVE QUEUE (KANBAN BOARD) */}
      {/* ========================================================================= */}
      {viewMode === "queue" && (
        <div className="space-y-6">
          {/* Quick Stats Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-black">
                {jobs.length}
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Orders</div>
                <div className="text-sm font-extrabold text-slate-800">{jobs.length} Jobs Received</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-sky-200 shadow-sm flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-black">
                {columns.queued.length}
              </div>
              <div>
                <div className="text-[11px] font-bold text-sky-500 uppercase tracking-wider">Queued in Line</div>
                <div className="text-sm font-extrabold text-sky-900">Ready to Print</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-sm flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black">
                ~{(columns.queued.length + columns.printing.length) * 2}m
              </div>
              <div>
                <div className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">Estimated Wait</div>
                <div className="text-sm font-extrabold text-amber-900">Queue Throughput</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-sm flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
                {columns.ready.length}
              </div>
              <div>
                <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Ready at Counter</div>
                <div className="text-sm font-extrabold text-emerald-900">Awaiting Student</div>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center space-x-1 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-[11px] font-bold text-slate-400 px-2 uppercase tracking-wider">Channel:</span>
                {["all", "whatsapp", "telegram", "web"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setFilterChannel(c)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                      filterChannel === c
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-100"
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
                  placeholder="Search Job ID, Student, File..."
                  className="pl-9 pr-3 py-2 border border-slate-200 bg-white rounded-xl text-xs font-semibold focus:ring-2 focus:ring-indigo-500 w-64 shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Outbound Notification Log Banner */}
          {notificationLog.length > 0 && (
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-xs text-emerald-900 space-y-1 shadow-sm">
              <div className="font-bold flex items-center space-x-1.5">
                <Send className="w-3.5 h-3.5 text-emerald-600" />
                <span>Outbound Backward Relay Dispatch:</span>
              </div>
              {notificationLog.slice(0, 2).map((log) => (
                <div key={log.id} className="text-emerald-700 font-mono text-[11px]">
                  • {log.text}
                </div>
              ))}
            </div>
          )}

          {/* Kanban Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Column 1: Received / Needs Info */}
            <div className="bg-slate-100/70 p-3.5 rounded-2xl border border-slate-200/80 flex flex-col h-[680px]">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span>Intake / Inquiry</span>
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
                          onClick={() => handleApproveAndQueue(job.job_id)}
                          className="w-full py-1.5 px-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1 shadow-sm transition-all active:scale-95 cursor-pointer"
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

            {/* Column 3: Printing */}
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
                {columns.printing.length === 0 && <EmptyColumn text="No active prints" />}
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
                  <span>Archived / Complete</span>
                </span>
                <span className="text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded-full shadow-sm">
                  {columns.completed.length}
                </span>
              </div>
              <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                {columns.completed.map((job) => (
                  <JobCard key={job.job_id} job={job} />
                ))}
                {columns.completed.length === 0 && <EmptyColumn text="No completed orders" />}
              </div>
            </div>
          </div>

          {/* Rejected section if any */}
          {columns.rejected?.length > 0 && (
            <div className="bg-rose-50/50 p-4 rounded-2xl border border-rose-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center space-x-2">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>Rejected Print Requests ({columns.rejected.length})</span>
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {columns.rejected.map((job) => (
                  <JobCard key={job.job_id} job={job} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 2: EARNINGS DASHBOARD */}
      {/* ========================================================================= */}
      {viewMode === "earnings" && (
        <div className="space-y-6">
          {/* Top KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Total Revenue */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Gross Revenue</span>
                <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  ₹
                </span>
              </div>
              <div className="text-3xl font-black text-slate-900 mt-2">
                ₹{totalRevDisplay.toFixed(2)}
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-emerald-600 font-bold mt-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Verified Collections</span>
              </div>
            </div>

            {/* Today's Revenue */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Today's Revenue</span>
                <span className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </span>
              </div>
              <div className="text-3xl font-black text-indigo-700 mt-2">
                ₹{todayRevDisplay.toFixed(2)}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">Today's Store Turnaround</div>
            </div>

            {/* Pages Volume */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pages Printed</span>
                <span className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Printer className="w-4 h-4" />
                </span>
              </div>
              <div className="text-3xl font-black text-slate-900 mt-2">
                {totalPagesDisplay}
              </div>
              <div className="text-xs text-slate-500 font-semibold mt-1 flex items-center space-x-1">
                <span>{analytics?.summary?.bw_pages_printed ?? 0} B&W</span>
                <span>•</span>
                <span className="text-sky-600">{analytics?.summary?.color_pages_printed ?? 0} Color</span>
              </div>
            </div>

            {/* Print vs Binding */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Binding Revenue</span>
                <span className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Tag className="w-4 h-4" />
                </span>
              </div>
              <div className="text-3xl font-black text-amber-700 mt-2">
                ₹{(analytics?.summary?.binding_revenue ?? 0).toFixed(2)}
              </div>
              <div className="text-xs text-slate-500 font-semibold mt-1">
                Printing: ₹{(analytics?.summary?.print_revenue ?? 0).toFixed(2)}
              </div>
            </div>

            {/* Average Order Value */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Avg Order Value</span>
                <span className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Coins className="w-4 h-4" />
                </span>
              </div>
              <div className="text-3xl font-black text-purple-700 mt-2">
                ₹{(analytics?.summary?.average_order_value ?? 0).toFixed(2)}
              </div>
              <div className="text-xs text-slate-500 font-semibold mt-1">
                {analytics?.summary?.completed_orders ?? 0} completed orders
              </div>
            </div>
          </div>

          {/* Breakdown Grids */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Payment Method Breakdown */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5 text-indigo-600" />
                  <h3 className="font-extrabold text-sm text-slate-900">Payment Methods Breakdown</h3>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  Real-Time
                </span>
              </div>

              <div className="space-y-4">
                {/* Razorpay Online */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-800 flex items-center space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span>Razorpay Online (UPI/Cards)</span>
                    </span>
                    <span className="text-emerald-700 font-extrabold">
                      ₹{(analytics?.payment_breakdown?.razorpay?.amount ?? 0).toFixed(2)} ({analytics?.payment_breakdown?.razorpay?.count ?? 0})
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-emerald-500 h-2 rounded-full"
                      style={{
                        width: `${
                          totalRevDisplay > 0
                            ? Math.min(
                                100,
                                ((analytics?.payment_breakdown?.razorpay?.amount ?? 0) / totalRevDisplay) * 100
                              )
                            : 0
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Counter / Cash */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-800 flex items-center space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                      <span>Counter Cash / Direct Pickup</span>
                    </span>
                    <span className="text-amber-700 font-extrabold">
                      ₹{(analytics?.payment_breakdown?.counter_or_unpaid?.amount ?? 0).toFixed(2)} ({analytics?.payment_breakdown?.counter_or_unpaid?.count ?? 0})
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-amber-400 h-2 rounded-full"
                      style={{
                        width: `${
                          totalRevDisplay > 0
                            ? Math.min(
                                100,
                                ((analytics?.payment_breakdown?.counter_or_unpaid?.amount ?? 0) / totalRevDisplay) * 100
                              )
                            : 0
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-600 space-y-1">
                <div className="font-bold text-slate-800 flex items-center space-x-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Settlement Guarantee</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Razorpay payments settle with 100% cryptographic checksum verification on webhook signatures before marking print status as complete.
                </p>
              </div>
            </div>

            {/* Channel Metrics */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <Layers className="w-5 h-5 text-sky-600" />
                  <h3 className="font-extrabold text-sm text-slate-900">Intake Channel Volume</h3>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-700">
                  Multi-Channel
                </span>
              </div>

              <div className="space-y-3">
                {["web", "telegram", "whatsapp"].map((ch) => {
                  const chData = analytics?.channel_breakdown?.[ch] || { count: 0, revenue: 0 };
                  const chColors = {
                    web: "text-purple-700 bg-purple-100 border-purple-200",
                    telegram: "text-sky-700 bg-sky-100 border-sky-200",
                    whatsapp: "text-emerald-700 bg-emerald-100 border-emerald-200",
                  };
                  return (
                    <div
                      key={ch}
                      className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/50"
                    >
                      <div className="flex items-center space-x-2">
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase border ${
                            chColors[ch] || "text-slate-700 bg-slate-100"
                          }`}
                        >
                          {ch}
                        </span>
                        <span className="text-xs font-bold text-slate-700">{chData.count} Orders</span>
                      </div>
                      <span className="text-xs font-black text-slate-900">₹{chData.revenue.toFixed(2)}</span>
                    </div>
                  );
                })}
              </div>

              <p className="text-[11px] text-slate-400 italic">
                Normalized into a single unified queue via Amazon DynamoDB and ARQ worker engine.
              </p>
            </div>

            {/* Quick Export Center */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 pb-3 border-b border-slate-100">
                  <Download className="w-5 h-5 text-indigo-600" />
                  <h3 className="font-extrabold text-sm text-slate-900">Ledger & Data Exports</h3>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Generate instant CSV sheets for campus accounting and audit records:
                </p>

                <div className="space-y-2 mt-4">
                  <button
                    onClick={() => downloadCSV(`easeprint_payments_${Date.now()}.csv`, analytics?.payment_records || [])}
                    className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 transition-colors shadow-sm"
                  >
                    <span className="flex items-center space-x-2">
                      <CreditCard className="w-4 h-4 text-emerald-600" />
                      <span>Export Payments Ledger (CSV)</span>
                    </span>
                    <Download className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  <button
                    onClick={() => downloadCSV(`easeprint_printouts_${Date.now()}.csv`, analytics?.printout_records || [])}
                    className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 transition-colors shadow-sm"
                  >
                    <span className="flex items-center space-x-2">
                      <FileSpreadsheet className="w-4 h-4 text-sky-600" />
                      <span>Export Printout Production (CSV)</span>
                    </span>
                    <Download className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  <button
                    onClick={() => downloadJSON(`easeprint_audit_logs_${Date.now()}.json`, logs)}
                    className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 transition-colors shadow-sm"
                  >
                    <span className="flex items-center space-x-2">
                      <Database className="w-4 h-4 text-purple-600" />
                      <span>Export System Audit Logs (JSON)</span>
                    </span>
                    <Download className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                Records are permanently stored in DynamoDB table: <strong>EasePrintJobs</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 3: PAYMENT RECORDS */}
      {/* ========================================================================= */}
      {viewMode === "payments" && (
        <div className="space-y-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
          {/* Header & Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center space-x-2">
                <CreditCard className="w-5 h-5 text-indigo-600" />
                <span>Financial & Payment Transactions Ledger</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Every transaction, Razorpay transaction ID, amount, and payment verification status.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {/* Search */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="text"
                  value={paymentSearch}
                  onChange={(e) => setPaymentSearch(e.target.value)}
                  placeholder="Search Job ID, Student, Pay ID..."
                  className="pl-9 pr-3 py-1.5 border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-indigo-500 w-56 shadow-sm"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl">
                {["all", "paid", "unpaid"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setPaymentStatusFilter(s)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold capitalize transition-all ${
                      paymentStatusFilter === s
                        ? "bg-white text-indigo-700 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <button
                onClick={() => downloadCSV(`payments_ledger_${Date.now()}.csv`, paymentRecords)}
                className="flex items-center space-x-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm shadow-emerald-500/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-3">Job ID</th>
                  <th className="py-3 px-3">Customer</th>
                  <th className="py-3 px-3">Channel</th>
                  <th className="py-3 px-3">Amount (₹)</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3">Razorpay Payment ID</th>
                  <th className="py-3 px-3">Order ID</th>
                  <th className="py-3 px-3">Date & Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {paymentRecords.map((p, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-3 font-mono font-bold text-indigo-700">{p.job_id}</td>
                    <td className="py-3 px-3 font-semibold text-slate-800">{p.customer_name}</td>
                    <td className="py-3 px-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-100 text-slate-700 border border-slate-200">
                        {p.channel}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-black text-slate-900">₹{p.amount_inr.toFixed(2)}</td>
                    <td className="py-3 px-3">
                      {p.payment_status === "paid" ? (
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>PAID</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                          <Clock className="w-3 h-3 text-amber-600" />
                          <span>UNPAID</span>
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-3 font-mono text-slate-600 text-[11px]">{p.payment_id}</td>
                    <td className="py-3 px-3 font-mono text-slate-400 text-[11px]">{p.razorpay_order_id}</td>
                    <td className="py-3 px-3 text-slate-500 text-[11px]">
                      {p.paid_at !== "—" ? p.paid_at.replace("T", " ").slice(0, 19) : p.created_at?.replace("T", " ").slice(0, 19) || "—"}
                    </td>
                  </tr>
                ))}
                {paymentRecords.length === 0 && (
                  <tr>
                    <td colSpan={8} className="py-8 text-center text-slate-400 text-xs font-medium">
                      No payment records found matching filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 4: PRINTOUT RECORDS */}
      {/* ========================================================================= */}
      {viewMode === "printouts" && (
        <div className="space-y-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
          {/* Header & Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center space-x-2">
                <FileSpreadsheet className="w-5 h-5 text-indigo-600" />
                <span>Physical Printout & Production Records</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Audit history of documents printed, binding specs, sheets consumed, and zero-retention shredding status.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {/* Search */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="text"
                  value={printoutSearch}
                  onChange={(e) => setPrintoutSearch(e.target.value)}
                  placeholder="Search Job ID, File, Student..."
                  className="pl-9 pr-3 py-1.5 border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-indigo-500 w-56 shadow-sm"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl">
                {["all", "ready", "completed", "queued", "rejected"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setPrintoutStatusFilter(s)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold capitalize transition-all ${
                      printoutStatusFilter === s
                        ? "bg-white text-indigo-700 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <button
                onClick={() => downloadCSV(`printouts_ledger_${Date.now()}.csv`, printoutRecords)}
                className="flex items-center space-x-1 px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm shadow-sky-500/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-3">Job ID</th>
                  <th className="py-3 px-3">Customer</th>
                  <th className="py-3 px-3">Document</th>
                  <th className="py-3 px-3">Specs (Pgs × Copies)</th>
                  <th className="py-3 px-3">Color Mode</th>
                  <th className="py-3 px-3">Sides</th>
                  <th className="py-3 px-3">Binding</th>
                  <th className="py-3 px-3">Amount (₹)</th>
                  <th className="py-3 px-3">Job Status</th>
                  <th className="py-3 px-3">Privacy Purge</th>
                  <th className="py-3 px-3">Completed Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {printoutRecords.map((r, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-3 font-mono font-bold text-indigo-700">{r.job_id}</td>
                    <td className="py-3 px-3 font-semibold text-slate-800">{r.customer_name}</td>
                    <td className="py-3 px-3 max-w-[160px] truncate text-slate-600" title={r.file_name}>
                      {r.file_name}
                    </td>
                    <td className="py-3 px-3 font-semibold text-slate-700">
                      {r.pages} pgs × {r.copies} cp ({r.total_sheets} sheets)
                    </td>
                    <td className="py-3 px-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          r.color_mode === "color"
                            ? "bg-purple-100 text-purple-700 border border-purple-200"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {r.color_mode}
                      </span>
                    </td>
                    <td className="py-3 px-3 capitalize text-slate-600">{r.sides}</td>
                    <td className="py-3 px-3">
                      {r.binding && r.binding !== "none" ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 capitalize">
                          {r.binding}
                        </span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                    <td className="py-3 px-3 font-black text-slate-900">₹{r.total_amount_inr.toFixed(2)}</td>
                    <td className="py-3 px-3">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                          r.status === "ready" || r.status === "completed"
                            ? "bg-emerald-100 text-emerald-800"
                            : r.status === "rejected"
                            ? "bg-rose-100 text-rose-800"
                            : "bg-sky-100 text-sky-800"
                        }`}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      {r.file_purged ? (
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          <Lock className="w-2.5 h-2.5 text-emerald-600" />
                          <span>🔒 Shredded</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-600">
                          <span>Active</span>
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-3 text-slate-500 text-[11px]">
                      {r.completed_at !== "—" ? r.completed_at.replace("T", " ").slice(0, 19) : "—"}
                    </td>
                  </tr>
                ))}
                {printoutRecords.length === 0 && (
                  <tr>
                    <td colSpan={11} className="py-8 text-center text-slate-400 text-xs font-medium">
                      No printout records found matching filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 5: SYSTEM AUDIT LOGS ("LOGS FOR EVERYTHING") */}
      {/* ========================================================================= */}
      {viewMode === "logs" && (
        <div className="space-y-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
          {/* Header & Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-purple-600" />
                <h2 className="text-lg font-black text-slate-900 tracking-tight">Real-Time System Audit Trail</h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800 border border-purple-200">
                  Append-Only
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Audit logs for every intake event, AI decision, Razorpay payment, zero-retention S3 purge, and relay notification.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {/* Auto-refresh toggle */}
              <label className="flex items-center space-x-1.5 text-xs font-bold text-slate-600 cursor-pointer bg-slate-100 px-3 py-1.5 rounded-xl">
                <input
                  type="checkbox"
                  checked={autoRefreshLogs}
                  onChange={(e) => setAutoRefreshLogs(e.target.checked)}
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Live Auto-Refresh (3s)</span>
                </span>
              </label>

              {/* Search */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="text"
                  value={logSearch}
                  onChange={(e) => setLogSearch(e.target.value)}
                  placeholder="Search logs or Job ID..."
                  className="pl-9 pr-3 py-1.5 border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-indigo-500 w-52 shadow-sm"
                />
              </div>

              <button
                onClick={() => downloadJSON(`audit_logs_${Date.now()}.json`, logs)}
                className="flex items-center space-x-1 px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm shadow-purple-500/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export JSON</span>
              </button>
            </div>
          </div>

          {/* Event Type Filter Pills */}
          <div className="flex flex-wrap gap-1.5 pb-2">
            {[
              "ALL",
              "ORDER_INTAKE",
              "PAYMENT_INTENT",
              "PAYMENT_SUCCESS",
              "STATUS_CHANGE",
              "PRINT_READY",
              "PRIVACY_SHRED",
              "NOTIFICATION_DISPATCH",
              "ORDER_REJECTED",
              "FILE_UPLOAD",
              "AI_CHAT",
            ].map((type) => (
              <button
                key={type}
                onClick={() => setLogEventType(type)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                  logEventType === type
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Log Stream Cards */}
          <div className="space-y-2.5 max-h-[620px] overflow-y-auto pr-1">
            {filteredLogs.map((entry) => {
              const eventColors = {
                ORDER_INTAKE: "bg-indigo-100 text-indigo-800 border-indigo-200",
                PAYMENT_INTENT: "bg-amber-100 text-amber-800 border-amber-200",
                PAYMENT_SUCCESS: "bg-emerald-100 text-emerald-800 border-emerald-200",
                STATUS_CHANGE: "bg-sky-100 text-sky-800 border-sky-200",
                PRINT_READY: "bg-blue-100 text-blue-800 border-blue-200",
                PRIVACY_SHRED: "bg-purple-100 text-purple-800 border-purple-200",
                NOTIFICATION_DISPATCH: "bg-teal-100 text-teal-800 border-teal-200",
                ORDER_REJECTED: "bg-rose-100 text-rose-800 border-rose-200",
                FILE_UPLOAD: "bg-slate-100 text-slate-800 border-slate-300",
                AI_CHAT: "bg-cyan-100 text-cyan-800 border-cyan-200",
              };

              const isExpanded = expandedLogId === entry.id;

              return (
                <div
                  key={entry.id}
                  className="bg-slate-50/70 hover:bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 transition-colors space-y-2 shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase border tracking-wider ${
                          eventColors[entry.event_type] || "bg-slate-200 text-slate-800"
                        }`}
                      >
                        {entry.event_type}
                      </span>
                      {entry.job_id && (
                        <span className="font-mono text-[11px] font-bold text-slate-800 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                          {entry.job_id}
                        </span>
                      )}
                      <span className="text-[10px] font-bold uppercase text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                        {entry.channel}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-slate-400">
                      {entry.timestamp?.replace("T", " ").slice(0, 19) || ""}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-slate-800 leading-relaxed">
                    {entry.message}
                  </p>

                  {/* Collapsible Details JSON Payload */}
                  {entry.details && Object.keys(entry.details).length > 0 && (
                    <div className="pt-1">
                      <button
                        onClick={() => setExpandedLogId(isExpanded ? null : entry.id)}
                        className="text-[10px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1 transition-colors"
                      >
                        <span>{isExpanded ? "Hide Structured Payload" : "Show Structured Payload"}</span>
                        {isExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                      </button>

                      {isExpanded && (
                        <pre className="mt-2 p-3 bg-slate-900 text-emerald-400 font-mono text-[11px] rounded-xl overflow-x-auto leading-normal">
                          {JSON.stringify(entry.details, null, 2)}
                        </pre>
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            {filteredLogs.length === 0 && (
              <div className="py-12 text-center text-slate-400 text-xs font-medium border-2 border-dashed border-slate-200 rounded-2xl">
                No audit log events match selected filters.
              </div>
            )}
          </div>
        </div>
      )}

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

      {/* Store Customizations & AI Persona Modal */}
      <CustomizationsModal
        isOpen={showCustomizations}
        onClose={() => setShowCustomizations(false)}
        onSaved={() => {
          loadJobs();
          loadAnalytics();
        }}
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

function JobCard({ job, actionButton, onReject }) {
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
