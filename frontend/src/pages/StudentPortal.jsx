import React, { useState, useEffect, useRef } from "react";
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertCircle,
  Send,
  Sparkles,
  RefreshCw,
  Clock,
  Layers,
  FileCheck,
  Tag,
  ArrowRight,
} from "lucide-react";
import { calculatePrice, uploadDocument, submitPrintJob, sendChatMessage, fetchJobDetails } from "../api";

export default function StudentPortal() {
  // Order Form State
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [fileData, setFileData] = useState(null);
  const [pages, setPages] = useState(1);
  const [copies, setCopies] = useState(1);
  const [colorMode, setColorMode] = useState("bw");
  const [sides, setSides] = useState("single");
  const [binding, setBinding] = useState("none");
  const [paperType, setPaperType] = useState("standard");
  const [pricing, setPricing] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [activeJobId, setActiveJobId] = useState(null);
  const [jobStatus, setJobStatus] = useState(null);

  // Chat State
  const [sessionId] = useState(() => "web_" + Math.random().toString(36).substring(2, 9));
  const [studentName, setStudentName] = useState("Student");
  const [chatMessages, setChatMessages] = useState([
    {
      role: "assistant",
      content:
        "Namaste! 🙏 I'm your EasePrint AI assistant for Hyderabad campus printouts. Upload your file or ask me for price quotes, binding options, or custom settings!",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Recalculate price whenever specs change
  useEffect(() => {
    async function updateEstimate() {
      try {
        const est = await calculatePrice({
          pages,
          copies,
          color_mode: colorMode,
          sides,
          binding,
          paper_type: paperType,
        });
        setPricing(est);
      } catch (err) {
        console.error("Pricing error:", err);
      }
    }
    updateEstimate();
  }, [pages, copies, colorMode, sides, binding, paperType]);

  // Scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  // Poll job status if activeJobId exists
  useEffect(() => {
    if (!activeJobId) return;
    const interval = setInterval(async () => {
      try {
        const details = await fetchJobDetails(activeJobId);
        setJobStatus(details);
      } catch (e) {
        console.warn("Polling error:", e);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [activeJobId]);

  // Handle File Upload
  const handleFileUpload = async (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    setFile(selected);
    setUploading(true);
    try {
      const res = await uploadDocument(selected);
      setFileData(res);
      if (res.pages && res.pages > 0) {
        setPages(res.pages);
      }
      // Notify chat
      setChatMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `📄 Uploaded **${res.file_name}**! I detected **${res.pages} page(s)**. I have adjusted your form on the left.`,
        },
      ]);
    } catch (err) {
      alert("Failed to upload file. Please ensure the backend is running.");
    } finally {
      setUploading(false);
    }
  };

  // Submit Print Order
  const handleConfirmOrder = async () => {
    if (!fileData) {
      alert("Please upload a document first.");
      return;
    }
    setSubmitting(true);
    const newJobId = "EP-" + Math.floor(100000 + Math.random() * 900000);
    const jobPayload = {
      job_id: newJobId,
      source_channel: "web",
      sender_id: sessionId,
      sender_name: studentName,
      message_text: `${copies} copies, ${colorMode.toUpperCase()}, ${sides}, ${binding} binding (${pages} pages)`,
      file_url: fileData.file_url,
      file_name: fileData.file_name,
      received_at: new Date().toISOString(),
      pages: pages,
      copies: copies,
      color_mode: colorMode,
      sides: sides,
      binding: binding,
      paper_type: paperType,
      total_amount_inr: pricing?.total_amount_inr || 0,
      pricing_summary: pricing?.summary || "",
    };

    try {
      await submitPrintJob(jobPayload);
      setActiveJobId(newJobId);
      setChatMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `🎉 **Order Confirmed!** Your Job ID is **${newJobId}**. Total: **₹${pricing?.total_amount_inr?.toFixed(
            2
          )}**. You can track real-time printing progress below!`,
        },
      ]);
    } catch (err) {
      alert("Error submitting job: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  // Handle AI Chat
  const handleSendChat = async (e) => {
    e?.preventDefault();
    if (!chatInput.trim() || chatLoading) return;
    const text = chatInput.trim();
    setChatInput("");
    setChatMessages((prev) => [...prev, { role: "user", content: text }]);
    setChatLoading(true);

    try {
      const res = await sendChatMessage({
        session_id: sessionId,
        source_channel: "web",
        sender_name: studentName,
        message: text,
        job_id: activeJobId,
        file_url: fileData?.file_url,
        file_name: fileData?.file_name,
        pages: pages,
      });

      setChatMessages((prev) => [...prev, { role: "assistant", content: res.reply }]);

      // Two-way sync: If the agent provided updated specs/pricing, reflect in form
      if (res.pricing) {
        if (res.pricing.copies) setCopies(res.pricing.copies);
        if (res.pricing.color_mode) setColorMode(res.pricing.color_mode);
        if (res.pricing.sides) setSides(res.pricing.sides);
        if (res.pricing.binding) setBinding(res.pricing.binding);
      }
    } catch (err) {
      setChatMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Sorry, could not reach the Bedrock agent. Make sure FastAPI is running." },
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Dynamic Google Form Style Order Station (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Header Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Student Print Intake Station</h1>
            <p className="text-sm text-slate-600 mt-1">
              Upload your document, select your preferences, or chat with our AI assistant to calculate Hyderabad Xerox rates.
            </p>

            {/* Student Name */}
            <div className="mt-4 flex items-center space-x-3">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Student Name:</label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="px-3 py-1.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          {/* 1. Document Upload */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold uppercase tracking-wider text-sky-600 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs">1</span>
                <span>Document Upload (PDF / DOCX / Image)</span>
              </span>
              {fileData && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                  <FileCheck className="w-3.5 h-3.5 mr-1" />
                  {fileData.pages} Pages Detected
                </span>
              )}
            </div>

            <label className="border-2 border-dashed border-slate-300 hover:border-sky-500 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-50/50 hover:bg-sky-50/30">
              <input type="file" onChange={handleFileUpload} accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" className="hidden" />
              <UploadCloud className="w-10 h-10 text-sky-600 mb-2 animate-bounce" />
              <span className="font-semibold text-sm text-slate-800">
                {uploading ? "Uploading & Detecting Page Count..." : file ? file.name : "Click or drag & drop files here"}
              </span>
              <span className="text-xs text-slate-500 mt-1">Automatic page count detection powered by PyPDF</span>
            </label>

            {fileData && (
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500 bg-slate-50 p-2.5 rounded-xl">
                <span className="truncate max-w-[280px]">File: {fileData.file_name}</span>
                <a
                  href={fileData.file_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600 font-semibold hover:underline"
                >
                  Preview File ↗
                </a>
              </div>
            )}
          </div>

          {/* 2. Print Specifications */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-6">
            <span className="text-sm font-bold uppercase tracking-wider text-sky-600 flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs">2</span>
              <span>Print Customizations</span>
            </span>

            {/* Pages and Copies */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Document Pages</label>
                <input
                  type="number"
                  min="1"
                  value={pages}
                  onChange={(e) => setPages(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Number of Copies</label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCopies(Math.max(1, copies - 1))}
                    className="w-10 h-10 rounded-xl border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100 font-bold"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-slate-800 text-base">{copies}</span>
                  <button
                    onClick={() => setCopies(copies + 1)}
                    className="w-10 h-10 rounded-xl border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Color Mode & Sidedness */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Color Mode */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">Color Mode</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setColorMode("bw")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      colorMode === "bw"
                        ? "border-sky-600 bg-sky-50 text-sky-700 shadow-sm"
                        : "border-slate-200 hover:bg-slate-50 text-slate-600"
                    }`}
                  >
                    B&W (₹2/page)
                  </button>
                  <button
                    onClick={() => setColorMode("color")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      colorMode === "color"
                        ? "border-sky-600 bg-sky-50 text-sky-700 shadow-sm"
                        : "border-slate-200 hover:bg-slate-50 text-slate-600"
                    }`}
                  >
                    Color (₹10/page)
                  </button>
                </div>
              </div>

              {/* Sidedness */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">Print Sidedness</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSides("single")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      sides === "single"
                        ? "border-sky-600 bg-sky-50 text-sky-700 shadow-sm"
                        : "border-slate-200 hover:bg-slate-50 text-slate-600"
                    }`}
                  >
                    Single-sided
                  </button>
                  <button
                    onClick={() => setSides("double")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      sides === "double"
                        ? "border-sky-600 bg-sky-50 text-sky-700 shadow-sm"
                        : "border-slate-200 hover:bg-slate-50 text-slate-600"
                    }`}
                  >
                    Duplex (₹3/sheet)
                  </button>
                </div>
              </div>
            </div>

            {/* Binding Options */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-2">Finishing & Binding</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "none", label: "No Binding", price: "₹0" },
                  { id: "staple", label: "Corner Staple", price: "Free" },
                  { id: "spiral", label: "Spiral Binding", price: "+₹30" },
                  { id: "hard", label: "Hard Thesis", price: "+₹180" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setBinding(item.id)}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      binding === item.id
                        ? "border-sky-600 bg-sky-50/70 shadow-sm"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-800">{item.label}</div>
                    <div className="text-[11px] text-sky-600 font-semibold mt-0.5">{item.price}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Live Hyderabad Price Breakdown & Submit */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center space-x-1.5">
                <Tag className="w-3.5 h-3.5" />
                <span>Hyderabad Xerox Rate Breakdown</span>
              </span>
              <span className="text-xs text-slate-400">Rate: ₹{pricing?.rate_per_unit || 2}/unit</span>
            </div>

            <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-4xl font-extrabold tracking-tight">₹{pricing?.total_amount_inr?.toFixed(2) || "0.00"}</span>
                <span className="text-xs text-slate-300 ml-2 font-medium">All taxes & campus handling included</span>
              </div>
            </div>

            <div className="mt-3 text-xs text-slate-300 flex items-center justify-between">
              <span>{pricing?.summary || "Estimating..."}</span>
              <span className="text-emerald-400 font-semibold">{pricing?.sheets_per_copy} Sheet(s) / Copy</span>
            </div>

            <button
              onClick={handleConfirmOrder}
              disabled={submitting || !fileData}
              className={`w-full mt-5 py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 transition-all shadow-lg ${
                !fileData
                  ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                  : submitting
                  ? "bg-sky-400 text-slate-900 cursor-wait"
                  : "bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-sky-500/30"
              }`}
            >
              <span>{submitting ? "Queueing Order..." : "Confirm & Send to Print Queue"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Active Job Tracker */}
          {activeJobId && (
            <div className="bg-white rounded-2xl p-5 border border-emerald-200 bg-emerald-50/30 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Clock className="w-5 h-5 animate-spin" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Active Order: {activeJobId}</h4>
                    <p className="text-xs text-slate-600">
                      Status:{" "}
                      <span className="font-bold uppercase text-emerald-700">
                        {jobStatus?.status || "queued"}
                      </span>{" "}
                      • Pickup: {jobStatus?.raw_fields?.pickup_counter || "Counter 1"}
                    </p>
                    {jobStatus?.status === "ready" && (
                      <p className="text-[11px] font-bold text-emerald-700 mt-1 flex items-center space-x-1">
                        <span>🔒 Digital file permanently shredded from cloud for your privacy.</span>
                      </p>
                    )}
                  </div>
                </div>
                <span className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                  Live Polling
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Embedded AI Print Assistant (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col h-[750px] bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          {/* Assistant Header */}
          <div className="p-4 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-sky-50/50 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-sky-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">EasePrint AI Assistant</h3>
                <p className="text-[11px] text-slate-500">Claude 3.5 Sonnet on Amazon Bedrock</p>
              </div>
            </div>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700">
              Online
            </span>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {chatMessages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-sky-600 text-white rounded-br-none shadow-sm"
                      : "bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200/60"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {chatLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 rounded-2xl px-4 py-3 text-xs text-slate-500 flex items-center space-x-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-sky-600" />
                  <span>Bedrock reasoning & calculating pricing...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Action Chips */}
          <div className="p-3 border-t border-slate-100 bg-slate-50/60 flex flex-wrap gap-1.5">
            {[
              "Price for 10 pages color?",
              "Add spiral binding please",
              "How much for 2 copies double-sided?",
            ].map((prompt, i) => (
              <button
                key={i}
                onClick={() => {
                  setChatInput(prompt);
                }}
                className="text-[11px] bg-white border border-slate-200 hover:border-sky-400 hover:text-sky-700 text-slate-600 px-2.5 py-1 rounded-full transition-colors truncate"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendChat} className="p-3 border-t border-slate-200 bg-white flex items-center space-x-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask for prices, customizations, or help..."
              className="flex-1 px-3.5 py-2 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button
              type="submit"
              disabled={chatLoading || !chatInput.trim()}
              className="w-10 h-10 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white flex items-center justify-center transition-colors shadow-sm"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
