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
    <div className="bg-slate-900 text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION & 3D XEROX MACHINE                                        */}
      {/* ========================================================================= */}
      <section className="relative pt-8 pb-20 lg:pt-16 lg:pb-32 overflow-hidden border-b border-slate-800">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Value Proposition & Hero CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Pill Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-cyan-400 shadow-inner">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
                <span>Next-Gen Campus Print Ecosystem • AWS Bedrock AI</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
                The Autonomous{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  Campus Print Cloud
                </span>
              </h1>

              {/* Subhead */}
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
                Eliminate WhatsApp queue chaos, USB malware risks, and lost files. Order from your hostel bed, let Bedrock
                AI quote instant ₹ rates, and pick up your{" "}
                <strong className="text-cyan-400 font-semibold">100% Zero-Retention shredded</strong> prints with zero wait.
              </p>

              {/* DUAL PORTAL SWITCHER: THE TWO ENTRANCES */}
              <div className="pt-4 pb-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 text-center lg:text-left">
                  Choose Your Dashboard to Enter:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0">
                  {/* Card 1: Student Portal */}
                  <button
                    onClick={() => onSelectPortal("student")}
                    className="group relative text-left p-5 rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-800/50 border border-slate-700 hover:border-cyan-500/80 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                        <Printer className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        Student Access
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1">
                      Student Portal
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      Upload PDF, chat with Bedrock AI, get instant ₹ rates, pay via UPI, and track print progress.
                    </p>
                  </button>

                  {/* Card 2: Staff Command */}
                  <button
                    onClick={() => onSelectPortal("staff")}
                    className="group relative text-left p-5 rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-800/50 border border-slate-700 hover:border-indigo-500/80 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                        <Shield className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        Staff & Operator
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors flex items-center gap-1">
                      Staff Command
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      Live Kanban print queue, auto-counter routing, custom pricing matrix, and 1-click cloud shredder.
                    </p>
                  </button>
                </div>
              </div>

              {/* Quick Instant Price Calculator */}
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 shadow-xl max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center space-x-2 text-xs font-bold text-cyan-400 uppercase tracking-wide">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    <span>Instant Rate Calculator</span>
                  </div>
                  <span className="text-[10px] bg-slate-900/90 border border-slate-700/70 px-2 py-0.5 rounded-full text-cyan-300 font-mono">
                    Hyderabad Campus Rates
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3 text-xs">
                  {/* Pages */}
                  <div className="bg-slate-900/90 p-2 rounded-xl border border-slate-700/60">
                    <span className="text-[10px] text-slate-400 block mb-1">Pages</span>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => setQuickPages(Math.max(1, quickPages - 5))}
                        className="w-5 h-5 flex items-center justify-center bg-slate-800 hover:bg-slate-700 rounded text-slate-300 font-bold"
                      >
                        -
                      </button>
                      <span className="font-bold font-mono text-white text-sm">{quickPages}</span>
                      <button
                        onClick={() => setQuickPages(quickPages + 5)}
                        className="w-5 h-5 flex items-center justify-center bg-slate-800 hover:bg-slate-700 rounded text-slate-300 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Mode */}
                  <div className="bg-slate-900/90 p-2 rounded-xl border border-slate-700/60">
                    <span className="text-[10px] text-slate-400 block mb-1">Mode</span>
                    <button
                      onClick={() => setQuickColor(quickColor === "bw" ? "color" : "bw")}
                      className={`w-full py-0.5 px-1 rounded font-bold text-xs uppercase transition-colors ${
                        quickColor === "color"
                          ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                          : "bg-slate-800 text-slate-200"
                      }`}
                    >
                      {quickColor === "color" ? "Color (₹10)" : "B&W (₹1.5)"}
                    </button>
                  </div>

                  {/* Sides */}
                  <div className="bg-slate-900/90 p-2 rounded-xl border border-slate-700/60">
                    <span className="text-[10px] text-slate-400 block mb-1">Sides</span>
                    <button
                      onClick={() => setQuickSides(quickSides === "single" ? "double" : "single")}
                      className="w-full py-0.5 px-1 rounded font-bold text-xs bg-slate-800 text-slate-200 capitalize transition-colors"
                    >
                      {quickSides}
                    </button>
                  </div>

                  {/* Binding */}
                  <div className="bg-slate-900/90 p-2 rounded-xl border border-slate-700/60">
                    <span className="text-[10px] text-slate-400 block mb-1">Binding</span>
                    <button
                      onClick={() =>
                        setQuickBinding(
                          quickBinding === "none"
                            ? "spiral"
                            : quickBinding === "spiral"
                            ? "staple"
                            : "none"
                        )
                      }
                      className="w-full py-0.5 px-1 rounded font-bold text-xs bg-slate-800 text-slate-200 capitalize truncate transition-colors"
                    >
                      {quickBinding}
                    </button>
                  </div>
                </div>

                {/* Calculation Output & Direct Portal Launch */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-700/70">
                  <div>
                    <span className="text-[10px] text-slate-400 block leading-tight">Total Estimate:</span>
                    <span className="text-xl font-black text-cyan-400 font-mono">₹{calcPrice.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => onSelectPortal("student")}
                    className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all hover:scale-105"
                  >
                    <span>Print in Student Portal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Zero USB Pen-Drive Virus
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Instant File Shredder (S3 Purge)
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Verified UPI & Razorpay
                </span>
              </div>
            </div>

            {/* Right: Interactive 3D Xerox Machine */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl bg-gradient-to-b from-slate-800/40 via-slate-900/60 to-slate-950 border border-slate-700/60 p-2 shadow-2xl backdrop-blur-xl">
                <Xerox3DViewer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. LIVE CAMPUS PULSE & QUANTIFIED METRICS                                  */}
      {/* ========================================================================= */}
      <section className="py-12 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono">&lt; 10s</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Order Submission Time</div>
              <p className="text-[11px] text-slate-500 mt-1">From upload to queue confirmation</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">100%</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Zero-Retention Privacy</div>
              <p className="text-[11px] text-slate-500 mt-1">S3 & local files shredded on handover</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono">₹0</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Hidden Overcharges</div>
              <p className="text-[11px] text-slate-500 mt-1">Exact Hyderabad student rates upfront</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-3xl sm:text-4xl font-black text-indigo-400 font-mono">3 Channels</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Unified Ingestion</div>
              <p className="text-[11px] text-slate-500 mt-1">Web, WhatsApp, and Telegram in 1 queue</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE PROBLEM: WHAT ISSUES WE ARE SOLVING                                */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-900/90 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
              The Reality Today
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 tracking-tight">
              Why Campus Print Shops Are Badly Broken
            </h2>
            <p className="text-slate-400 mt-3 text-base sm:text-lg">
              Every college campus in India suffers from the same outdated, chaotic printout routine. Students lose hours
              every semester to these 5 painful bottlenecks:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Issue 1 */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/70 hover:border-rose-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">1. WhatsApp DM Chaos & Lost Files</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Hundreds of students message a single shop owner's personal WhatsApp. PDFs get lost in endless chats,
                unnamed files get printed twice or forgotten, and students constantly argue over whose message arrived first.
              </p>
            </div>

            {/* Issue 2 */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/70 hover:border-rose-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">2. USB Pendrive Malware Nightmares</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Plugging personal student flash drives into shared print shop PCs spreads trojans, ransomware, and shortcut
                viruses. One trip to the Xerox shop often corrupts a semester’s worth of project code and thesis files.
              </p>
            </div>

            {/* Issue 3 */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/70 hover:border-rose-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FolderLock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">3. Zero Privacy & Dangerous Data Leaks</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Personal Aadhaar cards, hall tickets, medical certificates, and confidential exam papers stay permanently
                saved in the shop PC’s "Downloads" folder. Anyone standing near the desktop can view and copy private student data.
              </p>
            </div>

            {/* Issue 4 */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/70 hover:border-rose-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">4. Opaque Mental Math & Surprise Pricing</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Busy operators guess prices verbally on the fly. Students are frequently overcharged for duplex vs single-sided,
                glossy sheets, or spiral binding, leading to disputes and cash change arguments.
              </p>
            </div>

            {/* Issue 5 */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/70 hover:border-rose-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">5. 40-Minute Crowd Bottlenecks</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                During submission deadlines, 30+ students crowd the counter between lectures, with zero visibility into queue
                progress. Students waste precious study time standing in line just to ask "is my 4-page printout ready?".
              </p>
            </div>

            {/* Summary Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-800/80 to-indigo-950/40 border border-cyan-500/30 flex flex-col justify-center text-left">
              <div className="flex items-center space-x-2 text-cyan-400 font-bold mb-2">
                <Sparkles className="w-5 h-5" />
                <span>The EasePrint Difference</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">An Autonomous Digital Kiosk</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
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
      <section className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              The Technology
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 tracking-tight">
              What We Are Solving Particularly
            </h2>
            <p className="text-slate-400 mt-3 text-base sm:text-lg">
              Engineered with AWS cloud infrastructure and Amazon Bedrock generative intelligence to make printing
              effortless, private, and instantaneous.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">1. Amazon Bedrock AI Document Specialist</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Our embedded Bedrock agent automatically extracts page counts directly from uploaded PDF bytes, understands
                  conversational specifications ("2 copies double-sided with spiral binding"), and computes exact Hyderabad
                  campus rates in under 1 second with sub-token precision.
                </p>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-400 font-mono">
                <span className="text-cyan-400 font-bold">AWS Bedrock:</span> us.amazon.nova-lite-v1:0 (Sub-second Converse API)
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">2. Military-Grade Zero-Retention Shredder</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Privacy isn't an afterthought; it's hardcoded. The instant the staff hits "Print Ready", EasePrint
                  triggers a 4-way shredder: permanent Amazon S3 object purge, local server disk deletion, DynamoDB data
                  scrub, and a 24-hour TTL buffer. Your private data never lingers.
                </p>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-400 font-mono">
                <span className="text-emerald-400 font-bold">Privacy Protocol:</span> S3 delete_object + local os.remove + TTL Buffer
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">3. Autonomous Counter Orchestration</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Jobs are automatically categorized and routed based on specifications. Standard high-speed printouts are
                  directed to <strong>Counter 1 (Xerox)</strong>, while spiral, soft, and thesis jobs are routed to{" "}
                  <strong>Counter 2 (Binding)</strong>, eliminating bottlenecks at the physical counter.
                </p>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-400 font-mono">
                <span className="text-indigo-400 font-bold">Dispatch Engine:</span> Counter 1 (Xerox) • Counter 2 (Binding)
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-6">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">4. Dynamic Pricing & Custom RAG Knowledge</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Campus stationery shops have fluctuating paper costs. The Staff Dashboard features a live Customizations
                  Matrix where operators can modify B&W, color, or binding rates, and upload business documents (PDF/TXT)
                  that dynamically enrich the AI agent's RAG knowledge base.
                </p>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-400 font-mono">
                <span className="text-sky-400 font-bold">Customizer:</span> Live Rates Sync + In-Memory RAG Context Injection
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. DIRECT COMPARISON MATRIX: TRADITIONAL XEROX VS EASEPRINT                */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-900/90 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              The Head-to-Head
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 tracking-tight">
              Comparison with Existing Systems
            </h2>
            <p className="text-slate-400 mt-3 text-base sm:text-lg">
              See why moving from traditional campus print shops to EasePrint transforms the entire university experience:
            </p>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900/90 text-xs uppercase tracking-wider text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6 font-semibold">Feature / Workflow</th>
                  <th className="py-4 px-6 font-semibold text-rose-400 bg-rose-950/20">Traditional Campus Xerox</th>
                  <th className="py-4 px-6 font-semibold text-cyan-400 bg-cyan-950/30">EasePrint Cloud Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-4 px-6 font-medium text-white flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-slate-400" />
                    <span>Order Placement</span>
                  </td>
                  <td className="py-4 px-6 bg-rose-950/10">
                    <div className="flex items-center gap-2 text-rose-300">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Cluttered WhatsApp DMs or standing in crowd</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 bg-cyan-950/20 font-medium text-white">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Instant Web Portal + WhatsApp & Telegram Bots</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-4 px-6 font-medium text-white flex items-center gap-2">
                    <Shield className="w-4 h-4 text-slate-400" />
                    <span>Student Data Privacy</span>
                  </td>
                  <td className="py-4 px-6 bg-rose-950/10">
                    <div className="flex items-center gap-2 text-rose-300">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Documents saved forever on shared public desktop</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 bg-cyan-950/20 font-medium text-white">
                    <div className="flex items-center gap-2 text-emerald-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>100% Zero-Retention Shredder (S3/Local deleted on ready)</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-4 px-6 font-medium text-white flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-slate-400" />
                    <span>Malware & Virus Exposure</span>
                  </td>
                  <td className="py-4 px-6 bg-rose-950/10">
                    <div className="flex items-center gap-2 text-rose-300">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>High risk: USB flash drives spread PC viruses</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 bg-cyan-950/20 font-medium text-white">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Zero-Touch cloud upload (No USB ever required)</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-4 px-6 font-medium text-white flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-slate-400" />
                    <span>Price Transparency</span>
                  </td>
                  <td className="py-4 px-6 bg-rose-950/10">
                    <div className="flex items-center gap-2 text-rose-300">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Verbal guessing / surprise costs upon collection</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 bg-cyan-950/20 font-medium text-white">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Instant AI rate calculation with itemized ₹ receipt</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-4 px-6 font-medium text-white flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Queue & Progress Tracking</span>
                  </td>
                  <td className="py-4 px-6 bg-rose-950/10">
                    <div className="flex items-center gap-2 text-rose-300">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Zero visibility: Wait in crowd and interrupt staff</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 bg-cyan-950/20 font-medium text-white">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Live status banner + pickup alert notification</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-4 px-6 font-medium text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-slate-400" />
                    <span>Pickup Organization</span>
                  </td>
                  <td className="py-4 px-6 bg-rose-950/10">
                    <div className="flex items-center gap-2 text-rose-300">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>1 crowded counter with mixed Xerox and binding jobs</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 bg-cyan-950/20 font-medium text-white">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Automated Counter 1 (Xerox) / Counter 2 (Binding)</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-4 px-6 font-medium text-white flex items-center gap-2">
                    <Store className="w-4 h-4 text-slate-400" />
                    <span>Store Price Customization</span>
                  </td>
                  <td className="py-4 px-6 bg-rose-950/10">
                    <div className="flex items-center gap-2 text-rose-300">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Fixed rates painted on walls; hard to adapt</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 bg-cyan-950/20 font-medium text-white">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
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
      <section className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              The Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 tracking-tight">
              Why Choose EasePrint?
            </h2>
            <p className="text-slate-400 mt-3 text-base sm:text-lg">
              Tailored specifically for both the student who needs urgent prints before class, and the campus store owner
              who wants smooth, profitable operations.
            </p>

            {/* Audience Toggle */}
            <div className="inline-flex items-center bg-slate-900 p-1.5 rounded-2xl border border-slate-800 mt-8">
              <button
                onClick={() => setSelectedAudience("students")}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  selectedAudience === "students"
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Users className="w-4 h-4" />
                <span>For Students & Scholars</span>
              </button>
              <button
                onClick={() => setSelectedAudience("staff")}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  selectedAudience === "staff"
                    ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Store className="w-4 h-4" />
                <span>For Campus Store Owners</span>
              </button>
            </div>
          </div>

          {selectedAudience === "students" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Zero Waiting in Line</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Send your assignment from hostel at 8:30 AM. Get notified when it's printed. Walk in at 8:55 AM, grab it
                  from Counter 1, and head straight to class without standing in a single line.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Complete Digital Privacy</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Rest easy knowing your Aadhaar, bank statements, and project documents will not remain on a public shop
                  desktop for other students to snoop through. The file is purged permanently upon pickup.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Cost Optimization</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Ask our AI agent how to get the most cost-effective format. Get instant advice on double-sided B&W savings,
                  spiral vs staple options, and pay the exact amount via UPI without needing cash change.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">3x Higher Daily Throughput</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  No more manually typing page counts, opening infected thumb drives, or searching for lost WhatsApp chats.
                  Every job arrives pre-validated with exact specs ready to print in 1 click.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Dynamic Price Matrix</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Update your standard B&W, color, or binding rates anytime from the dashboard. The AI agent immediately
                  quotes your updated rates to every student across Web, WhatsApp, and Telegram.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Zero Revenue Leakage</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Eliminate unpaid prints, duplicate misprints, and verbal calculation errors. Integrated Razorpay & UPI
                  verification ensures every page printed is tracked, recorded, and accounted for.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. INTERACTIVE SAVINGS & IMPACT CALCULATOR                                 */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-900/90 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-b from-slate-800/80 to-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-700 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                Interactive ROI Tool
              </span>
              <h2 className="text-3xl font-black text-white mt-3">Calculate Your Semester Savings</h2>
              <p className="text-sm text-slate-400 mt-2">
                Slide your estimated monthly printout volume to see how much time and hassle EasePrint eliminates.
              </p>
            </div>

            {/* Slider Control */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-slate-300">Monthly Document Pages:</span>
                <span className="text-2xl font-black text-cyan-400 font-mono">{monthlyPages} pages</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={monthlyPages}
                onChange={(e) => setMonthlyPages(Number(e.target.value))}
                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>10 pages (Light)</span>
                <span>250 pages (Typical Eng/Med)</span>
                <span>500 pages (Thesis / Lab)</span>
              </div>
            </div>

            {/* Metrics Output Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="text-3xl font-black text-cyan-400 font-mono">~{timeSavedMinutes} mins</div>
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wide mt-1">
                  Queue Waiting Time Saved
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Equivalent to {Math.round(timeSavedMinutes / 50)} full study lectures</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="text-3xl font-black text-emerald-400 font-mono">0% Risk</div>
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wide mt-1">
                  Malware & Leak Exposure
                </div>
                <p className="text-[11px] text-slate-500 mt-1">100% digital shredder on completion</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="text-3xl font-black text-indigo-400 font-mono">{queuesAvoided} Queues</div>
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wide mt-1">
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
      <section className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-semibold text-white hover:text-cyan-400 transition-colors"
                >
                  <span className="text-base">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
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
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
            <Award className="w-3.5 h-3.5" />
            <span>Ready for the Next Class</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Experience the Fastest Printout on Campus?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Choose your role below to launch the interactive portal or manage the shop floor right now.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onSelectPortal("student")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <Printer className="w-5 h-5" />
              <span>Launch Student Portal</span>
            </button>

            <button
              onClick={() => onSelectPortal("staff")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-base border border-slate-700 flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <Shield className="w-5 h-5 text-indigo-400" />
              <span>Open Staff Command Center</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
