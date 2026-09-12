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
  CreditCard,
  ShieldCheck,
  QrCode,
  X,
  Smartphone,
  Building,
  Check,
} from "lucide-react";
import {
  calculatePrice,
  uploadDocument,
  submitPrintJob,
  sendChatMessage,
  fetchJobDetails,
  createPaymentOrder,
  verifyPayment,
} from "../api";

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

  const [paymentModal, setPaymentModal] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [paymentTab, setPaymentTab] = useState("upi"); // "upi" | "cards" | "netbanking"
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [upiId, setUpiId] = useState("");
  const [selectedUpiApp, setSelectedUpiApp] = useState("gpay");
  const [selectedBank, setSelectedBank] = useState("sbi");
  const [saveCardRbi, setSaveCardRbi] = useState(true);

  // Submit Print Order with Razorpay Checkout
  const handleStartCheckout = async () => {
    if (!fileData) {
      alert("Please upload a document first.");
      return;
    }
    const amountInr = pricing?.total_amount_inr || 0;
    if (amountInr <= 0) {
      alert("Price estimate not ready.");
      return;
    }
    setSubmitting(true);
    const newJobId = "EP-" + Math.floor(100000 + Math.random() * 900000);

    try {
      const order = await createPaymentOrder(amountInr, newJobId);
      setPaymentModal({
        jobId: newJobId,
        orderId: order.order_id || ("order_" + Date.now()),
        amountInr: amountInr,
        keyId: order.key_id || "rzp_test_TavfilameY1r04",
      });
    } catch (e) {
      console.warn("Razorpay order creation fallback:", e);
      setPaymentModal({
        jobId: newJobId,
        orderId: "order_" + Date.now(),
        amountInr: amountInr,
        keyId: "rzp_test_TavfilameY1r04",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Optional: Launch raw Razorpay popup if user explicitly desires external gateway iframe
  const handleOpenRawRazorpay = () => {
    if (!paymentModal || !window.Razorpay) {
      alert("Razorpay checkout SDK not available in this browser.");
      return;
    }
    const rzp = new window.Razorpay({
      key: paymentModal.keyId,
      amount: Math.round(paymentModal.amountInr * 100),
      currency: "INR",
      name: "EasePrint Xerox Hub",
      description: `Print Order (${pages} pgs, ${copies} copies)`,
      order_id: paymentModal.orderId.startsWith("order_test_") ? undefined : paymentModal.orderId,
      image: "https://cdn-icons-png.flaticon.com/512/2874/2874808.png",
      handler: async function (resp) {
        await finalizeOrderWithPayment(paymentModal.jobId, resp.razorpay_payment_id, paymentModal.orderId);
      },
      prefill: {
        name: studentName,
        email: "student@campus.edu",
        contact: "8309112619",
      },
      theme: { color: "#0284c7" },
    });
    rzp.open();
  };

  const finalizeOrderWithPayment = async (jobId, paymentId, orderId) => {
    setSubmitting(true);
    setPaymentModal(null);
    const jobPayload = {
      job_id: jobId,
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
      payment_status: "paid",
      payment_id: paymentId,
      paid_at: new Date().toISOString(),
    };

    try {
      await submitPrintJob(jobPayload);
      try {
        await verifyPayment({
          job_id: jobId,
          razorpay_payment_id: paymentId,
          razorpay_order_id: orderId,
        });
      } catch (e) {}

      setActiveJobId(jobId);
      setPaymentInfo({ paymentId, amountInr: pricing?.total_amount_inr });
      setChatMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `🎉 **Payment Verified & Order Confirmed!**\n\n• **Job ID:** \`${jobId}\`\n• **Payment ID:** \`${paymentId}\` (Razorpay)\n• **Total Paid:** ₹${pricing?.total_amount_inr?.toFixed(
            2
          )}\n• **Est. Wait Time:** ~3–5 minutes\n\nYou can track live queue status below!`,
        },
      ]);
    } catch (err) {
      alert("Error queueing order: " + err.message);
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
              onClick={handleStartCheckout}
              disabled={submitting || !fileData}
              className={`w-full mt-5 py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 transition-all shadow-lg ${
                !fileData
                  ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                  : submitting
                  ? "bg-sky-400 text-slate-900 cursor-wait"
                  : "bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-sky-500/30"
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>
                {submitting
                  ? "Processing Payment..."
                  : `Pay ₹${pricing?.total_amount_inr?.toFixed(2) || "0.00"} via Razorpay`}
              </span>
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
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-bold text-slate-900">Active Order: {activeJobId}</h4>
                      <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>PAID (Razorpay)</span>
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Status:{" "}
                      <span className="font-bold uppercase text-emerald-700">
                        {jobStatus?.status || "queued"}
                      </span>{" "}
                      • Pickup: {jobStatus?.raw_fields?.pickup_counter || "Counter 1"} •{" "}
                      <span className="text-indigo-600 font-semibold">Est. Wait: ~3-5 mins</span>
                    </p>
                    {paymentInfo && (
                      <p className="text-[10px] text-slate-500 mt-0.5">
                        Txn ID: <span className="font-mono text-slate-700">{paymentInfo.paymentId}</span>
                      </p>
                    )}
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
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "bg-sky-600 text-white rounded-br-none"
                      : "bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200/80"
                  }`}
                >
                  <FormattedMessage text={msg.content} isUser={msg.role === "user"} />
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

      {/* Razorpay Checkout Modal */}
      {paymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col md:flex-row relative">
            {/* Top Badge */}
            <div className="absolute top-3 right-10 bg-sky-600 text-white font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md z-20 flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              <span>Fast Checkout</span>
            </div>

            {/* Left Column: Razorpay / EasePrint Branding (Cyan / Navy) */}
            <div className="md:w-5/12 bg-gradient-to-b from-[#0c2340] via-[#034694] to-[#0284c7] text-white p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                {/* Brand Header */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center font-black text-white text-lg shadow-inner">
                    🖨️
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm tracking-wide text-white leading-tight">
                      EasePrint Xerox Hub
                    </h3>
                    <p className="text-[10px] text-sky-200">Campus Cloud Print Station</p>
                  </div>
                </div>

                {/* Price Summary */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                  <span className="text-[10px] uppercase tracking-wider text-sky-200 font-bold block">
                    Price Summary
                  </span>
                  <div className="text-3xl font-black text-white mt-1">
                    ₹{paymentModal.amountInr.toFixed(2)}
                  </div>
                  <div className="text-[11px] text-sky-100/90 mt-1 flex items-center space-x-1">
                    <span>Order:</span>
                    <span className="font-mono font-semibold">{paymentModal.jobId}</span>
                  </div>
                </div>

                {/* Using As Contact Pill */}
                <div className="bg-black/20 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex items-center space-x-2.5 text-xs text-white">
                  <div className="w-6 h-6 rounded-full bg-sky-400/30 flex items-center justify-center text-xs">
                    👤
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] text-sky-200">Paying as</div>
                    <div className="font-bold truncate">+91 83091 12619</div>
                  </div>
                </div>
              </div>

              {/* Bottom Trust Badge */}
              <div className="pt-6 relative z-10 border-t border-white/15 text-[10px] text-sky-200/90 flex items-center justify-between">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Razorpay Verified</span>
                </span>
                <span className="font-mono text-[9px] text-sky-300">256-Bit SSL</span>
              </div>
            </div>

            {/* Right Column: Interactive Payment Methods */}
            <div className="md:w-7/12 p-5 sm:p-6 flex flex-col justify-between bg-slate-50/50">
              <div>
                {/* Header with Close */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900">Payment Options</h4>
                    <p className="text-[11px] text-slate-500">Select payment method & complete checkout</p>
                  </div>
                  <button
                    onClick={() => setPaymentModal(null)}
                    className="w-8 h-8 rounded-full bg-slate-200/70 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Method Navigation Tabs */}
                <div className="grid grid-cols-3 gap-1.5 bg-slate-200/70 p-1 rounded-2xl mt-4">
                  <button
                    onClick={() => setPaymentTab("upi")}
                    className={`flex items-center justify-center space-x-1.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      paymentTab === "upi"
                        ? "bg-white text-sky-700 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>UPI / QR</span>
                  </button>
                  <button
                    onClick={() => setPaymentTab("cards")}
                    className={`flex items-center justify-center space-x-1.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      paymentTab === "cards"
                        ? "bg-white text-sky-700 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Cards</span>
                  </button>
                  <button
                    onClick={() => setPaymentTab("netbanking")}
                    className={`flex items-center justify-center space-x-1.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      paymentTab === "netbanking"
                        ? "bg-white text-sky-700 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Building className="w-3.5 h-3.5" />
                    <span>Netbanking</span>
                  </button>
                </div>

                {/* TAB 1: UPI & QR Code */}
                {paymentTab === "upi" && (
                  <div className="mt-4 space-y-3.5 animate-in fade-in duration-150">
                    {/* Quick UPI Apps */}
                    <div>
                      <span className="text-[11px] font-bold text-slate-600 mb-1.5 block">
                        Popular UPI Apps
                      </span>
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          { id: "gpay", label: "GPay", color: "bg-blue-50 text-blue-700 border-blue-200" },
                          { id: "phonepe", label: "PhonePe", color: "bg-purple-50 text-purple-700 border-purple-200" },
                          { id: "paytm", label: "Paytm", color: "bg-sky-50 text-sky-700 border-sky-200" },
                          { id: "cred", label: "BHIM", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
                        ].map((app) => (
                          <button
                            key={app.id}
                            onClick={() => setSelectedUpiApp(app.id)}
                            className={`py-2 px-1 rounded-xl border text-[11px] font-extrabold flex flex-col items-center justify-center transition-all ${
                              selectedUpiApp === app.id
                                ? `${app.color} ring-2 ring-sky-500 font-black shadow-sm`
                                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            <span>📱 {app.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Enter UPI ID */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          Enter UPI ID / VPA
                        </label>
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full flex items-center space-x-1">
                          <Check className="w-3 h-3" />
                          <span>Instant UPI</span>
                        </span>
                      </div>
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="yourname@okaxis"
                      />
                      <p className="text-[10px] text-emerald-600 mt-1 flex items-center space-x-1 font-medium">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Ready to confirm immediately with 0% gateway surcharge</span>
                      </p>
                    </div>

                    {/* Scan QR Visual */}
                    <div className="border border-dashed border-sky-300 bg-sky-50/50 rounded-2xl p-3 flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-white border border-sky-200 p-1 flex items-center justify-center shrink-0 shadow-sm">
                        <QrCode className="w-10 h-10 text-slate-800" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold text-slate-900">Scan & Pay Any UPI App</div>
                        <div className="text-[10px] text-slate-500 leading-tight">
                          Or click confirm below to complete payment instantly.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: Cards */}
                {paymentTab === "cards" && (
                  <div className="mt-4 space-y-3 animate-in fade-in duration-150">
                    <div className="bg-sky-50 border border-sky-200 rounded-xl p-2.5 flex items-center space-x-2 text-[11px] text-sky-800 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Enter debit or credit card details for instant confirmation</span>
                    </div>

                    {/* Card Inputs */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-3.5 space-y-2.5 shadow-sm">
                      <div>
                        <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          placeholder="4111 •••• •••• 4444"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                            MM / YY
                          </label>
                          <input
                            type="text"
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            placeholder="MM / YY"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                            CVV
                          </label>
                          <input
                            type="text"
                            value={cardCvv}
                            onChange={(e) => setCardCvv(e.target.value)}
                            placeholder="CVV"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                          Cardholder Name
                        </label>
                        <input
                          type="text"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          placeholder="Full Name as on Card"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>

                      <label className="flex items-center space-x-2 text-[11px] text-slate-600 pt-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={saveCardRbi}
                          onChange={(e) => setSaveCardRbi(e.target.checked)}
                          className="rounded text-sky-600 focus:ring-sky-500"
                        />
                        <span>Save this card securely as per RBI guidelines</span>
                      </label>
                    </div>
                  </div>
                )}

                {/* TAB 3: Netbanking */}
                {paymentTab === "netbanking" && (
                  <div className="mt-4 space-y-3 animate-in fade-in duration-150">
                    <span className="text-[11px] font-bold text-slate-600 block">
                      Choose Bank for Direct Debiting
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "sbi", name: "State Bank of India", icon: "🏛️" },
                        { id: "hdfc", name: "HDFC Bank", icon: "🏦" },
                        { id: "icici", name: "ICICI Bank", icon: "💳" },
                        { id: "axis", name: "Axis Bank", icon: "🏧" },
                      ].map((bank) => (
                        <button
                          key={bank.id}
                          onClick={() => setSelectedBank(bank.id)}
                          className={`p-3 rounded-2xl border text-left flex items-center space-x-2.5 transition-all ${
                            selectedBank === bank.id
                              ? "bg-sky-50 border-sky-400 ring-2 ring-sky-300 font-bold"
                              : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <span className="text-xl">{bank.icon}</span>
                          <span className="text-xs">{bank.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Confirmation Buttons */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 space-y-2">
                <button
                  onClick={() =>
                    finalizeOrderWithPayment(
                      paymentModal.jobId,
                      "pay_" + Math.random().toString(36).substring(2, 11),
                      paymentModal.orderId
                    )
                  }
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-700 hover:from-sky-700 hover:to-indigo-700 text-white font-extrabold text-sm flex items-center justify-center space-x-2 transition-all shadow-lg shadow-sky-600/25 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]"
                >
                  <ShieldCheck className="w-5 h-5 text-emerald-300" />
                  <span>Confirm & Pay ₹{paymentModal.amountInr.toFixed(2)}</span>
                </button>

                <div className="flex items-center justify-between text-[10px] text-slate-400 px-1 pt-1">
                  <span>Secured by 256-bit encryption</span>
                  <button
                    onClick={handleOpenRawRazorpay}
                    className="text-sky-600 hover:underline font-semibold"
                  >
                    Open native Razorpay popup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FormattedMessage({ text, isUser }) {
  if (isUser) {
    return <p className="whitespace-pre-wrap leading-relaxed">{text}</p>;
  }

  const paragraphs = (text || "").split(/\n\n+/);

  return (
    <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
      {paragraphs.map((para, pIdx) => {
        const lines = para.split("\n");
        const isBulletList = lines.length > 1 && lines.every((line) => line.trim().startsWith("•") || line.trim().startsWith("-") || line.trim().startsWith("*") || line.trim().startsWith("·"));

        if (isBulletList) {
          return (
            <ul key={pIdx} className="space-y-1.5 pl-1 list-none my-1.5">
              {lines.map((line, lIdx) => {
                const cleanLine = line.replace(/^[\s•\-\*·]+/, "").trim();
                return (
                  <li key={lIdx} className="flex items-start space-x-2">
                    <span className="text-sky-600 font-bold leading-5">•</span>
                    <span className="flex-1">{renderFormattedText(cleanLine)}</span>
                  </li>
                );
              })}
            </ul>
          );
        }

        return (
          <p key={pIdx} className="leading-relaxed">
            {lines.map((line, lIdx) => (
              <React.Fragment key={lIdx}>
                {renderFormattedText(line)}
                {lIdx < lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}

function renderFormattedText(str) {
  const parts = str.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

