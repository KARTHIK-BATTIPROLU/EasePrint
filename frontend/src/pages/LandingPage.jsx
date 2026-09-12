import React, { useState } from "react";
import Xerox3DViewer from "../components/Xerox3DViewer";
import {
  Printer,
  Shield,
  Zap,
  Clock,
  Sparkles,
  Lock,
  FileText,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ChevronRight,
  Sliders,
  Smartphone,
  Layers,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  FolderLock,
  Cpu,
  RefreshCw,
  Users,
  Store,
  DollarSign,
  Award,
} from "lucide-react";

export default function LandingPage({ onSelectPortal }) {
  // Calculator state
  const [monthlyPages, setMonthlyPages] = useState(120);
  const [selectedAudience, setSelectedAudience] = useState("students");
  const [openFaq, setOpenFaq] = useState(0);

  // Quick Instant Estimator State
  const [quickPages, setQuickPages] = useState(10);
  const [quickColor, setQuickColor] = useState("bw");
  const [quickSides, setQuickSides] = useState("double");
  const [quickBinding, setQuickBinding] = useState("none");

  const sheets = quickSides === "double" ? Math.ceil(quickPages / 2) : quickPages;
  const ratePerSheet =
    quickColor === "color"
      ? quickSides === "double"
        ? 18.0
        : 10.0
      : quickSides === "double"
      ? 3.0
      : 1.5;
  const bindingCost = quickBinding === "spiral" ? 40.0 : quickBinding === "staple" ? 5.0 : 0.0;
  const calcPrice = sheets * ratePerSheet + bindingCost;

  // Dynamic calculations for the interactive savings calculator
  const timeSavedMinutes = Math.round((monthlyPages / 5) * 4.5); // avg 4.5 mins saved per 5 pages
  const queuesAvoided = Math.round(monthlyPages / 15);
  const privacyScore = "100% Zero-Retention";

  const faqs = [
    {
      q: "How does EasePrint guarantee student document privacy?",
      a: "Unlike traditional shops where documents sit indefinitely on shared PCs, EasePrint implements Zero-Retention Digital Shredding. The moment the print job is marked ready for pickup, the document is immediately deleted from Amazon S3, removed from local disk storage, DynamoDB privacy fields are wiped, and an automatic 24-hour TTL buffer ensures zero leftover traces.",
    },
    {
      q: "Do I need to plug in a USB pendrive?",
      a: "Never! EasePrint operates entirely in the cloud. You can upload PDFs or Word docs directly from your phone, laptop, or WhatsApp. You never have to risk malware, trojans, or corrupted drives from infected cyber café computers.",
    },
    {
      q: "How is pricing calculated?",
      a: "Our Amazon Bedrock AI agent parses your document, extracts exact page counts, and applies the live campus pricing matrix configured by the store owner (e.g., ₹1.50/page B&W, ₹10/page Color, ₹40 Spiral Binding). You get the exact price in bold ₹ before confirming.",
    },
    {
      q: "What happens when my prints are ready?",
      a: "You receive an instant notification in your portal (or via WhatsApp/Telegram) stating your documents are hot off the press along with your designated pickup counter (e.g., Counter 1 for Xerox, Counter 2 for Binding). Walk up, pick up, and go!",
    },
    {
      q: "Can store owners customize their prices and policies?",
      a: "Yes! The Staff Command Center has a dedicated Customizations engine where owners can edit B&W rates, color rates, binding fees, and upload store knowledge files (PDF/TXT) which the AI agent references in real-time.",
    },
  ];

  return (
    <div className="bg-slate-50/25 text-slate-800 min-h-screen relative selection:bg-sky-500 selection:text-white">
      {/* ========================================================================= */}
      {/* GLOBAL FIXED 3D PRINTER BACKGROUND (BEHIND ENTIRE SITE WHILE SCROLLING)   */}
      {/* ========================================================================= */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-75 filter blur-[0.4px]">
        <Xerox3DViewer />
      </div>

      {/* Atmospheric overlay to ensure foreground text is crisp across all sections */}
      <div className="fixed inset-0 bg-gradient-to-b from-white/35 via-white/10 to-white/50 pointer-events-none z-[1]" />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (TRANSPARENT FOREGROUND, 3D MODEL BEHIND ON THE RIGHT)    */}
      {/* ========================================================================= */}
      <section className="relative z-10 min-h-[580px] lg:min-h-[660px] flex items-start justify-center pt-4 pb-12 lg:pt-7 lg:pb-16 overflow-hidden border-b border-slate-200/80 bg-transparent">
        {/* Foreground Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-2 lg:pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Main Headline, Value Prop, CTAs & Trust Badges (7 cols) */}
            <div className="lg:col-span-7 space-y-4 lg:space-y-5 text-center lg:text-left">
              {/* Pill Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-sky-200 text-xs font-semibold text-sky-700 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
                <span>Next-Gen Campus Print Ecosystem • AWS Bedrock AI</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-slate-900 drop-shadow-sm max-w-xl">
                The Autonomous{" "}
                <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Campus Print Cloud
                </span>
              </h1>

              {/* Subhead / Quotation - constrained width so it never touches the 3D model */}
              <p className="text-base sm:text-lg text-slate-600 max-w-lg lg:max-w-[490px] font-normal leading-relaxed mx-auto lg:mx-0">
                Eliminate WhatsApp queue chaos, USB malware risks, and lost files. Order from your hostel bed, let Bedrock
                AI quote instant ₹ rates, and pick up your{" "}
                <strong className="text-sky-700 font-semibold">100% Zero-Retention shredded</strong> prints with zero wait.
              </p>

              {/* Dual Direct Portal Entry Actions */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
                <button
                  onClick={() => onSelectPortal("student")}
                  className="group flex items-center space-x-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-base shadow-lg shadow-sky-600/25 hover:shadow-xl hover:shadow-sky-600/35 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <Printer className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                  <span>Launch Student Portal</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onSelectPortal("staff")}
                  className="flex items-center space-x-2.5 px-5 py-3.5 rounded-2xl bg-white/95 hover:bg-white text-slate-800 hover:text-indigo-600 border border-slate-200/90 hover:border-indigo-300 font-bold text-base shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <Shield className="w-5 h-5 text-indigo-600" />
                  <span>Staff Command</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs text-slate-600">
                <span className="flex items-center gap-1.5 bg-white/85 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Zero USB Pen-Drive Virus
                </span>
                <span className="flex items-center gap-1.5 bg-white/85 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Instant File Shredder (S3 Purge)
                </span>
                <span className="flex items-center gap-1.5 bg-white/85 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Verified UPI & Razorpay
                </span>
              </div>
            </div>

            {/* Right Column: Kept open & empty so the 3D printer is unobstructed, with minimal sleek floating icon badges */}
            <div className="lg:col-span-5 hidden lg:flex flex-col items-end justify-center space-y-4 py-8 pointer-events-none select-none">
              {/* Minimal Floating Icon Badge 1 */}
              <div className="flex items-center space-x-2.5 px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-md shadow-slate-200/40 text-xs font-semibold text-slate-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                <Printer className="w-4 h-4 text-sky-600" />
                <span>Dual High-Speed Xerox Engine</span>
              </div>

              {/* Minimal Floating Icon Badge 2 */}
              <div className="flex items-center space-x-2.5 px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-md shadow-slate-200/40 text-xs font-semibold text-slate-700">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Sub-second Bedrock AI Quoting</span>
              </div>

              {/* Minimal Floating Icon Badge 3 */}
              <div className="flex items-center space-x-2.5 px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-md shadow-slate-200/40 text-xs font-semibold text-slate-700">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>100% Zero-Retention Auto-Shred</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. LIVE CAMPUS PULSE & QUANTIFIED METRICS (LIGHT THEME)                   */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-10 bg-white/75 backdrop-blur-sm border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
              <div className="text-3xl sm:text-4xl font-black text-sky-700 font-mono">&lt; 10s</div>
              <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mt-1">Order Submission Time</div>
              <p className="text-[11px] text-slate-500 mt-1">From upload to queue confirmation</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 font-mono">100%</div>
              <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mt-1">Zero-Retention Privacy</div>
              <p className="text-[11px] text-slate-500 mt-1">S3 & local files shredded on handover</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
              <div className="text-3xl sm:text-4xl font-black text-amber-600 font-mono">₹0</div>
              <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mt-1">Hidden Overcharges</div>
              <p className="text-[11px] text-slate-500 mt-1">Exact Hyderabad student rates upfront</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
              <div className="text-3xl sm:text-4xl font-black text-indigo-700 font-mono">3 Channels</div>
              <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mt-1">Unified Ingestion</div>
              <p className="text-[11px] text-slate-500 mt-1">Web, WhatsApp, and Telegram in 1 queue</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE PROBLEM: WHAT ISSUES WE ARE SOLVING                                */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-16 lg:py-24 bg-slate-50/65 backdrop-blur-sm border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              The Reality Today
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Why Campus Print Shops Are Badly Broken
            </h2>
            <p className="text-slate-600 mt-2 text-base sm:text-lg">
              Every college campus in India suffers from the same outdated, chaotic printout routine. Students lose hours
              every semester to these 5 painful bottlenecks:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Issue 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-rose-300 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">1. WhatsApp DM Chaos & Lost Files</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hundreds of students message a single shop owner's personal WhatsApp. PDFs get lost in endless chats,
                unnamed files get printed twice or forgotten, and students constantly argue over whose message arrived first.
              </p>
            </div>

            {/* Issue 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-rose-300 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">2. USB Pendrive Malware Nightmares</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Plugging personal student flash drives into shared print shop PCs spreads trojans, ransomware, and shortcut
                viruses. One trip to the Xerox shop often corrupts a semester’s worth of project code and thesis files.
              </p>
            </div>

            {/* Issue 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-rose-300 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FolderLock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">3. Zero Privacy & Dangerous Data Leaks</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Personal Aadhaar cards, hall tickets, medical certificates, and confidential exam papers stay permanently
                saved in the shop PC’s "Downloads" folder. Anyone standing near the desktop can view and copy private student data.
              </p>
            </div>

            {/* Issue 4 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-rose-300 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">4. Opaque Mental Math & Surprise Pricing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Busy operators guess prices verbally on the fly. Students are frequently overcharged for duplex vs single-sided,
                glossy sheets, or spiral binding, leading to disputes and cash change arguments.
              </p>
            </div>

            {/* Issue 5 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-rose-300 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">5. 40-Minute Crowd Bottlenecks</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                During submission deadlines, 30+ students crowd the counter between lectures, with zero visibility into queue
                progress. Students waste precious study time standing in line just to ask "is my 4-page printout ready?".
              </p>
            </div>

            {/* Summary Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-50 via-white to-indigo-50 border border-sky-200 shadow-sm flex flex-col justify-center text-left">
              <div className="flex items-center space-x-2 text-sky-700 font-bold mb-2">
                <Sparkles className="w-5 h-5" />
                <span>The EasePrint Solution</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">An Autonomous Digital Kiosk</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                EasePrint completely reimagines campus printing by replacing physical queues with an AI-driven, cloud-native
                orchestration engine designed for speed, privacy, and operator ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHAT WE ARE SOLVING PARTICULARLY: THE EASEPRINT ARCHITECTURE           */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-16 lg:py-24 bg-white/75 backdrop-blur-sm border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              The Technology
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              What We Are Solving Particularly
            </h2>
            <p className="text-slate-600 mt-2 text-base sm:text-lg">
              Engineered with AWS cloud infrastructure and Amazon Bedrock generative intelligence to make printing
              effortless, private, and instantaneous.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-all flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">1. Amazon Bedrock AI Document Specialist</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Our embedded Bedrock agent automatically extracts page counts directly from uploaded PDF bytes, understands
                  conversational specifications ("2 copies double-sided with spiral binding"), and computes exact Hyderabad
                  campus rates in under 1 second with sub-token precision.
                </p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-600 font-mono">
                <span className="text-sky-700 font-bold">AWS Bedrock:</span> us.amazon.nova-lite-v1:0 (Sub-second Converse API)
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-all flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">2. Military-Grade Zero-Retention Shredder</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Privacy isn't an afterthought; it's hardcoded. The instant the staff hits "Print Ready", EasePrint
                  triggers a 4-way shredder: permanent Amazon S3 object purge, local server disk deletion, DynamoDB data
                  scrub, and a 24-hour TTL buffer. Your private data never lingers.
                </p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-600 font-mono">
                <span className="text-emerald-700 font-bold">Privacy Protocol:</span> S3 delete_object + local os.remove + TTL Buffer
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-all flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">3. Autonomous Counter Orchestration</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Jobs are automatically categorized and routed based on specifications. Standard high-speed printouts are
                  directed to <strong>Counter 1 (Xerox)</strong>, while spiral, soft, and thesis jobs are routed to{" "}
                  <strong>Counter 2 (Binding)</strong>, eliminating bottlenecks at the physical counter.
                </p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-600 font-mono">
                <span className="text-indigo-700 font-bold">Dispatch Engine:</span> Counter 1 (Xerox) • Counter 2 (Binding)
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-all flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center mb-6">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">4. Dynamic Pricing & Custom RAG Knowledge</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Campus stationery shops have fluctuating paper costs. The Staff Dashboard features a live Customizations
                  Matrix where operators can modify B&W, color, or binding rates, and upload business documents (PDF/TXT)
                  that dynamically enrich the AI agent's RAG knowledge base.
                </p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-600 font-mono">
                <span className="text-sky-700 font-bold">Customizer:</span> Live Rates Sync + In-Memory RAG Context Injection
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. DIRECT COMPARISON MATRIX: TRADITIONAL XEROX VS EASEPRINT                */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-16 lg:py-24 bg-slate-50/65 backdrop-blur-sm border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              The Head-to-Head
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Comparison with Existing Systems
            </h2>
            <p className="text-slate-600 mt-2 text-base sm:text-lg">
              See why moving from traditional campus print shops to EasePrint transforms the entire university experience:
            </p>
          </div>

          {/* Table Container (Light Theme) */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-xs uppercase tracking-wider text-slate-600 border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6 font-semibold">Feature / Workflow</th>
                  <th className="py-4 px-6 font-semibold text-rose-700 bg-rose-50">Traditional Campus Xerox</th>
                  <th className="py-4 px-6 font-semibold text-sky-800 bg-sky-50">EasePrint Cloud Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-slate-500" />
                    <span>Order Placement</span>
                  </td>
                  <td className="py-4 px-6 bg-rose-50/30">
                    <div className="flex items-center gap-2 text-rose-700">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Cluttered WhatsApp DMs or standing in crowd</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 bg-sky-50/40 font-semibold text-slate-900">
                    <div className="flex items-center gap-2 text-sky-700">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Instant Web Portal + WhatsApp & Telegram Bots</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-slate-500" />
                    <span>Student Data Privacy</span>
                  </td>
                  <td className="py-4 px-6 bg-rose-50/30">
                    <div className="flex items-center gap-2 text-rose-700">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Documents saved forever on shared public desktop</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 bg-sky-50/40 font-semibold text-slate-900">
                    <div className="flex items-center gap-2 text-emerald-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>100% Zero-Retention Shredder (S3/Local deleted on ready)</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-slate-500" />
                    <span>Malware & Virus Exposure</span>
                  </td>
                  <td className="py-4 px-6 bg-rose-50/30">
                    <div className="flex items-center gap-2 text-rose-700">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>High risk: USB flash drives spread PC viruses</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 bg-sky-50/40 font-semibold text-slate-900">
                    <div className="flex items-center gap-2 text-sky-700">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Zero-Touch cloud upload (No USB ever required)</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-slate-500" />
                    <span>Price Transparency</span>
                  </td>
                  <td className="py-4 px-6 bg-rose-50/30">
                    <div className="flex items-center gap-2 text-rose-700">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Verbal guessing / surprise costs upon collection</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 bg-sky-50/40 font-semibold text-slate-900">
                    <div className="flex items-center gap-2 text-sky-700">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Instant AI rate calculation with itemized ₹ receipt</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span>Queue & Progress Tracking</span>
                  </td>
                  <td className="py-4 px-6 bg-rose-50/30">
                    <div className="flex items-center gap-2 text-rose-700">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Zero visibility: Wait in crowd and interrupt staff</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 bg-sky-50/40 font-semibold text-slate-900">
                    <div className="flex items-center gap-2 text-sky-700">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Live status banner + pickup alert notification</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-slate-500" />
                    <span>Pickup Organization</span>
                  </td>
                  <td className="py-4 px-6 bg-rose-50/30">
                    <div className="flex items-center gap-2 text-rose-700">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>1 crowded counter with mixed Xerox and binding jobs</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 bg-sky-50/40 font-semibold text-slate-900">
                    <div className="flex items-center gap-2 text-sky-700">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Automated Counter 1 (Xerox) / Counter 2 (Binding)</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-900 flex items-center gap-2">
                    <Store className="w-4 h-4 text-slate-500" />
                    <span>Store Price Customization</span>
                  </td>
                  <td className="py-4 px-6 bg-rose-50/30">
                    <div className="flex items-center gap-2 text-rose-700">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Fixed rates painted on walls; hard to adapt</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 bg-sky-50/40 font-semibold text-slate-900">
                    <div className="flex items-center gap-2 text-sky-700">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Live web price matrix + custom RAG policy upload</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHY PEOPLE HAVE TO CHOOSE THIS PLATFORM (VALUE BY STAKEHOLDER)         */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-16 lg:py-24 bg-white/75 backdrop-blur-sm border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              The Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Why Choose EasePrint?
            </h2>
            <p className="text-slate-600 mt-2 text-base sm:text-lg">
              Tailored specifically for both the student who needs urgent prints before class, and the campus store owner
              who wants smooth, profitable operations.
            </p>

            {/* Audience Toggle */}
            <div className="inline-flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200 mt-6">
              <button
                onClick={() => setSelectedAudience("students")}
                className={`flex items-center space-x-2 px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                  selectedAudience === "students"
                    ? "bg-white text-sky-700 shadow-sm shadow-slate-300/60"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Users className="w-4 h-4" />
                <span>For Students & Scholars</span>
              </button>
              <button
                onClick={() => setSelectedAudience("staff")}
                className={`flex items-center space-x-2 px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                  selectedAudience === "staff"
                    ? "bg-white text-indigo-700 shadow-sm shadow-slate-300/60"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Store className="w-4 h-4" />
                <span>For Campus Store Owners</span>
              </button>
            </div>
          </div>

          {selectedAudience === "students" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Zero Waiting in Line</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Send your assignment from hostel at 8:30 AM. Get notified when it's printed. Walk in at 8:55 AM, grab it
                  from Counter 1, and head straight to class without standing in a single line.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Complete Digital Privacy</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Rest easy knowing your Aadhaar, bank statements, and project documents will not remain on a public shop
                  desktop for other students to snoop through. The file is purged permanently upon pickup.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">AI Cost Optimization</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ask our AI agent how to get the most cost-effective format. Get instant advice on double-sided B&W savings,
                  spiral vs staple options, and pay the exact amount via UPI without needing cash change.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">3x Higher Daily Throughput</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  No more manually typing page counts, opening infected thumb drives, or searching for lost WhatsApp chats.
                  Every job arrives pre-validated with exact specs ready to print in 1 click.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center mb-6">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Dynamic Price Matrix</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Update your standard B&W, color, or binding rates anytime from the dashboard. The AI agent immediately
                  quotes your updated rates to every student across Web, WhatsApp, and Telegram.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Zero Revenue Leakage</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Eliminate unpaid prints, duplicate misprints, and verbal calculation errors. Integrated Razorpay & UPI
                  verification ensures every page printed is tracked, recorded, and accounted for.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. INTERACTIVE SAVINGS & IMPACT CALCULATOR (LIGHT THEME)                  */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-16 lg:py-24 bg-slate-50/65 backdrop-blur-sm border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 backdrop-blur-sm">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                Interactive ROI Tool
              </span>
              <h2 className="text-3xl font-black text-slate-900 mt-3">Calculate Your Semester Savings</h2>
              <p className="text-sm text-slate-600 mt-2">
                Slide your estimated monthly printout volume to see how much time and hassle EasePrint eliminates.
              </p>
            </div>

            {/* Slider Control */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-slate-700">Monthly Document Pages:</span>
                <span className="text-2xl font-black text-sky-700 font-mono">{monthlyPages} pages</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={monthlyPages}
                onChange={(e) => setMonthlyPages(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>10 pages (Light)</span>
                <span>250 pages (Typical Eng/Med)</span>
                <span>500 pages (Thesis / Lab)</span>
              </div>
            </div>

            {/* Metrics Output Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-3xl font-black text-sky-700 font-mono">~{timeSavedMinutes} mins</div>
                <div className="text-xs font-semibold text-slate-700 uppercase tracking-wide mt-1">
                  Queue Waiting Time Saved
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Equivalent to {Math.round(timeSavedMinutes / 50)} full study lectures</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-3xl font-black text-emerald-600 font-mono">0% Risk</div>
                <div className="text-xs font-semibold text-slate-700 uppercase tracking-wide mt-1">
                  Malware & Leak Exposure
                </div>
                <p className="text-[11px] text-slate-500 mt-1">100% digital shredder on completion</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-3xl font-black text-indigo-700 font-mono">{queuesAvoided} Queues</div>
                <div className="text-xs font-semibold text-slate-700 uppercase tracking-wide mt-1">
                  Physical Bottlenecks Avoided
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Instant counter grab-and-go</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FREQUENTLY ASKED QUESTIONS (FAQ)                                       */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-16 lg:py-24 bg-white/75 backdrop-blur-sm border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-semibold text-slate-900 hover:text-sky-700 transition-colors"
                >
                  <span className="text-base">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-sky-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FINAL BOTTOM DUAL CTA BANNER                                           */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-sky-600/90 via-indigo-600/90 to-sky-700/90 backdrop-blur-sm text-center relative overflow-hidden text-white">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-semibold text-white">
            <Award className="w-3.5 h-3.5" />
            <span>Ready for the Next Class</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Experience the Fastest Printout on Campus?
          </h2>

          <p className="text-sky-100 text-base sm:text-lg max-w-2xl mx-auto">
            Choose your role below to launch the interactive portal or manage the shop floor right now.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onSelectPortal("student")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-base shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <Printer className="w-5 h-5 text-sky-600" />
              <span>Launch Student Portal</span>
            </button>

            <button
              onClick={() => onSelectPortal("staff")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/40 hover:bg-slate-900/60 text-white font-bold text-base border border-white/30 backdrop-blur-md flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <Shield className="w-5 h-5 text-white" />
              <span>Open Staff Command Center</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
