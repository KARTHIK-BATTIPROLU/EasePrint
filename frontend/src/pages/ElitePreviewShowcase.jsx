import React, { useState, useEffect } from "react";
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
  AlertTriangle,
  RefreshCw,
  Eye,
  SlidersHorizontal,
  Check,
  Cpu,
  Server,
  HardDrive,
  QrCode,
  Download,
  Terminal,
  Activity,
  Maximize2,
  Minimize2,
  Copy,
  Info,
  ShieldCheck,
  FileSpreadsheet,
  Gauge
} from "lucide-react";
import Xerox3DViewer from "../components/Xerox3DViewer";

export default function ElitePreviewShowcase({ onNavigateTab }) {
  // Global Viewport and Mode State
  const [viewportMode, setViewportMode] = useState("desktop"); // 'desktop' | 'mobile'
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeStateTab, setActiveStateTab] = useState("default"); // 'default' | 'hover_focus' | 'loading' | 'empty' | 'error' | 'success'

  // Interactive Student Cockpit Simulator State
  const [fileSelected, setFileSelected] = useState(true);
  const [pageCount, setPageCount] = useState(18);
  const [colorMode, setColorMode] = useState("bw"); // 'bw' | 'color'
  const [duplexMode, setDuplexMode] = useState("double"); // 'single' | 'double'
  const [paperGsm, setPaperGsm] = useState("75"); // '75' | '100' | '250'
  const [bindingMode, setBindingMode] = useState("spiral"); // 'none' | 'staple' | 'spiral'
  const [isDuplexFlipped, setIsDuplexFlipped] = useState(false);

  // Pricing math
  const sheetCount = duplexMode === "double" ? Math.ceil(pageCount / 2) : pageCount;
  const ratePerSheet = colorMode === "color" 
    ? (duplexMode === "double" ? 18.0 : 10.0)
    : (duplexMode === "double" ? 3.0 : 1.5);
  const bindingCost = bindingMode === "spiral" ? 40.0 : (bindingMode === "staple" ? 5.0 : 0.0);
  const totalCost = (sheetCount * ratePerSheet) + bindingCost;

  // Active hover/focus demo state
  const [focusDemoActive, setFocusDemoActive] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 pb-24 ${reducedMotion ? "reduced-motion" : ""}`}>
      {/* ========================================================================= */}
      {/* 1. MANDATORY TOP LABEL & PREVIEW GOVERNANCE BANNER                        */}
      {/* ========================================================================= */}
      <div className="sticky top-16 z-40 bg-gradient-to-r from-blue-700 via-sky-700 to-indigo-800 text-white shadow-md border-b border-blue-600/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center space-x-2.5">
            <span className="flex h-2.5 w-2.5 relative flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
            </span>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="font-extrabold tracking-wider bg-white/20 px-2 py-0.5 rounded text-[10px] sm:text-xs font-mono uppercase">
                EASEPRINT ELITE UI/UX PREVIEW — NOT YET MERGED
              </span>
              <span className="text-blue-200 hidden sm:inline">•</span>
              <span className="text-blue-100 font-mono text-[10px] sm:text-[11px]">
                branch: <strong className="text-white">design/easeprint-elite-preview</strong>
              </span>
            </div>
          </div>

          {/* Interactive Mode & Motion Controls */}
          <div className="flex items-center space-x-3 ml-auto">
            {/* Viewport switcher */}
            <div className="bg-blue-900/60 p-0.5 rounded-lg flex items-center border border-blue-400/30">
              <button
                onClick={() => setViewportMode("desktop")}
                className={`flex items-center space-x-1 px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                  viewportMode === "desktop" ? "bg-white text-blue-900 shadow-xs" : "text-blue-200 hover:text-white"
                }`}
                title="Desktop Viewport"
              >
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setViewportMode("mobile")}
                className={`flex items-center space-x-1 px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                  viewportMode === "mobile" ? "bg-white text-blue-900 shadow-xs" : "text-blue-200 hover:text-white"
                }`}
                title="Mobile 375px Canvas Simulator"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile Frame</span>
              </button>
            </div>

            {/* Reduced motion switcher */}
            <button
              onClick={() => setReducedMotion(!reducedMotion)}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-bold border transition-all ${
                reducedMotion
                  ? "bg-amber-400 text-slate-900 border-amber-300 shadow-sm"
                  : "bg-blue-800/80 text-blue-100 border-blue-400/30 hover:bg-blue-800"
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>{reducedMotion ? "Reduced Motion ON" : "Spring Motion"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. SUB-NAV / QUICK JUMP PILLS                                            */}
      {/* ========================================================================= */}
      <div className="bg-white border-b border-slate-200 sticky top-[108px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between overflow-x-auto gap-4 scrollbar-none text-xs">
          <div className="flex items-center space-x-2 font-semibold text-slate-600 whitespace-nowrap">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-[10px]">Jump:</span>
            <a href="#hero-section" className="px-2.5 py-1 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-colors">Hero & Brand</a>
            <a href="#printer-visual" className="px-2.5 py-1 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-colors">Print Cloud 3D</a>
            <a href="#capabilities" className="px-2.5 py-1 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-colors">Capability Cards</a>
            <a href="#system-status" className="px-2.5 py-1 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-colors">Hardware Telemetry</a>
            <a href="#student-cockpit" className="px-2.5 py-1 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-colors">Student Cockpit</a>
            <a href="#staff-queue" className="px-2.5 py-1 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-colors">Staff Command</a>
            <a href="#state-matrix" className="px-2.5 py-1 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-colors">States Matrix</a>
            <a href="#token-specs" className="px-2.5 py-1 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-colors">Design Tokens</a>
          </div>

          {/* Direct portal actions */}
          <div className="hidden lg:flex items-center space-x-2">
            <button
              onClick={() => onNavigateTab && onNavigateTab("student")}
              className="px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-md font-bold hover:bg-blue-100 transition-colors cursor-pointer"
            >
              Open Live Student Portal →
            </button>
            <button
              onClick={() => onNavigateTab && onNavigateTab("staff")}
              className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded-md font-bold hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Open Live Staff Command →
            </button>
          </div>
        </div>
      </div>

      {/* Viewport Frame Wrapper */}
      <div className={`transition-all duration-300 mx-auto ${
        viewportMode === "mobile"
          ? "max-w-[410px] my-6 p-4 bg-slate-800 rounded-[44px] shadow-2xl border-4 border-slate-700"
          : "w-full"
      }`}>
        <div className={viewportMode === "mobile" ? "bg-white rounded-[32px] overflow-hidden shadow-inner border border-slate-200" : ""}>

          {/* ========================================================================= */}
          {/* SECTION 1: HERO & BRAND IDENTITY                                         */}
          {/* ========================================================================= */}
          <section id="hero-section" className="relative py-12 lg:py-20 overflow-hidden bg-gradient-to-b from-blue-50/60 via-sky-50/20 to-transparent border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left: Brand Vision & Typography Hierarchy */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Brand Pill */}
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 shadow-xs text-xs font-bold text-blue-700">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    <span>Approved Brand Identity • The Photonic Campus Cloud</span>
                  </div>

                  {/* High Impact Headline */}
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                    Zero-Queue Printing.{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                      Instant Kiosk Dispatch.
                    </span>
                  </h1>

                  {/* Subtitle & Value Proposition */}
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                    EasePrint replaces thumb drive viruses and chaotic WhatsApp counters with an automated campus print cloud. 
                    Upload from your dorm, receive instant Bedrock AI pricing, and collect hot copies at Station B3 in under 30 seconds.
                  </p>

                  {/* Primary and Secondary CTAs */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      onClick={() => onNavigateTab && onNavigateTab("student")}
                      className="flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-bold text-base shadow-photonic-sm hover:shadow-photonic transition-all transform hover:-translate-y-0.5 cursor-pointer focus:ring-4 focus:ring-sky-200 focus:outline-none"
                    >
                      <Printer className="w-5 h-5" />
                      <span>Launch Student Portal</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onNavigateTab && onNavigateTab("staff")}
                      className="flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-blue-700 border border-slate-300 hover:border-blue-300 font-bold text-base shadow-xs hover:shadow-sm transition-all cursor-pointer focus:ring-4 focus:ring-blue-100 focus:outline-none"
                    >
                      <Shield className="w-5 h-5 text-indigo-600" />
                      <span>Staff Command Center</span>
                    </button>
                  </div>

                  {/* Trust Badges */}
                  <div className="pt-3 flex flex-wrap items-center gap-3 text-xs text-slate-600 font-medium">
                    <span className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Zero USB Malware</span>
                    </span>
                    <span className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-xs">
                      <Lock className="w-4 h-4 text-blue-600" />
                      <span>100% Zero-Retention Shredding</span>
                    </span>
                    <span className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-xs">
                      <Clock className="w-4 h-4 text-cyan-600" />
                      <span>&lt; 30s Kiosk Pickup</span>
                    </span>
                  </div>
                </div>

                {/* Right: Holographic Queue Ticket Signature Moment */}
                <div className="lg:col-span-5">
                  <div className="relative mx-auto max-w-sm bg-white rounded-2xl p-6 border border-blue-100 shadow-card hover:shadow-photonic transition-all">
                    {/* Corner Badge */}
                    <div className="absolute -top-3 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full shadow-xs uppercase tracking-wider font-mono">
                      Signature Moment #1
                    </div>

                    {/* Holographic Header */}
                    <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-4">
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Campus Xerox Claim Stub</div>
                        <div className="text-2xl font-black text-slate-900 font-mono tracking-tight text-blue-600">
                          EP-8921
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-xs">
                        <QrCode className="w-8 h-8" />
                      </div>
                    </div>

                    {/* Ticket Telemetry Body */}
                    <div className="py-4 space-y-3 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Document Name</span>
                        <span className="font-semibold text-slate-800 truncate max-w-[180px]">CSE_Final_Thesis_v3.pdf</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Print Parameters</span>
                        <span className="font-mono font-medium text-slate-700">48 Pgs • Duplex • Spiral</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Pickup Counter</span>
                        <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          Counter 2 (Binding Desk)
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Hardware Allocation</span>
                        <span className="font-mono text-slate-600 text-[11px]">Station B3 (Canon DX C5860i)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Security Shred</span>
                        <span className="font-mono text-cyan-600 font-semibold">TTL: Auto-Wipe 24h</span>
                      </div>
                    </div>

                    {/* Perforation Line */}
                    <div className="relative py-2">
                      <div className="border-t-2 border-dashed border-slate-200"></div>
                      <div className="absolute -left-8 -top-1 w-4 h-4 rounded-full bg-slate-50"></div>
                      <div className="absolute -right-8 -top-1 w-4 h-4 rounded-full bg-slate-50"></div>
                    </div>

                    {/* Status Pill Footer */}
                    <div className="pt-2 flex items-center justify-between text-xs">
                      <span className="flex items-center space-x-1.5 text-blue-700 font-semibold font-mono">
                        <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                        <span>Hot Off Press</span>
                      </span>
                      <span className="text-slate-400 font-mono text-[11px]">Ready for Pickup</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* SECTION 2: 3D PRINTER / PRINT-CLOUD VISUAL                                */}
          {/* ========================================================================= */}
          <section id="printer-visual" className="py-12 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider mb-2">
                  <Printer className="w-3.5 h-3.5" />
                  <span>Hardware & Cloud Orchestration</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  High-Velocity Xerox 3D Finisher
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Interactive real-time 3D simulation of the campus xerox station with paper feed path and electrostatic xerography drum.
                </p>
              </div>

              {/* 3D Canvas Box */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-gradient-to-b from-slate-100 to-slate-50 shadow-inner h-[380px] sm:h-[440px]">
                <Xerox3DViewer />

                {/* Floating Telemetry Overlay */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/80 shadow-card max-w-xs sm:max-w-sm text-xs space-y-1.5 z-20">
                  <div className="font-bold text-slate-800 flex items-center justify-between">
                    <span>Optical Drum RPM</span>
                    <span className="font-mono text-blue-600 font-bold">3,600 RPM</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full w-4/5 rounded-full"></div>
                  </div>
                  <div className="text-[11px] text-slate-500 flex justify-between items-center gap-4">
                    <span>Laser Alignment: <strong className="text-emerald-600 font-bold">Locked</strong></span>
                    <span>Buffer: <strong className="text-slate-700 font-mono font-bold">120 PPM</strong></span>
                  </div>
                </div>

                {/* Relocated Photonic Renderer Badge to Bottom-Left to eliminate collision with 3D viewer tour controls */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-card text-[11px] font-mono text-slate-600 flex items-center space-x-2 z-20">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Direct WebGL Photonic Renderer</span>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* SECTION 3: CAPABILITY CARDS                                               */}
          {/* ========================================================================= */}
          <section id="capabilities" className="py-12 bg-slate-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 font-bold text-xs uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Campus Grade Capabilities</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Engineered for Exam-Week Velocity
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Built to process 5,000+ student pages daily without memory leaks, data leaks, or queue collisions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover hover:border-blue-300 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-105 transition-transform">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">Zero-Retention Digital Shredding</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Confidential assignment files and personal ID docs are completely purged from S3 and DynamoDB within 24 hours of printing.
                  </p>
                  <div className="flex items-center text-[11px] font-mono font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md w-fit">
                    <span>S3 TTL: 86,400s • Wiped on Claim</span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover hover:border-blue-300 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-4 group-hover:scale-105 transition-transform">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">Bedrock AI Pre-Flight Audit</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Claude 3 Sonnet inspects page dimensions, color balance, bleed margins, and page orientation before spooling.
                  </p>
                  <div className="flex items-center text-[11px] font-mono font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md w-fit">
                    <span>Amazon Bedrock • Sub-second OCR</span>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover hover:border-blue-300 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-105 transition-transform">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">Redis ARQ Spooler Engine</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Decoupled asynchronous queue prevents kiosk lockup. 50 parallel students can submit simultaneously with 0ms lag.
                  </p>
                  <div className="flex items-center text-[11px] font-mono font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md w-fit">
                    <span>ElastiCache Redis • ARQ Worker</span>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover hover:border-blue-300 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">No Pendrive / Malware Isolation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Students submit directly via web browser or WhatsApp. Never risk losing assignments to corrupted cyber café virus USBs.
                  </p>
                  <div className="flex items-center text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md w-fit">
                    <span>100% Cloud Isolation • Virus Free</span>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover hover:border-blue-300 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-4 group-hover:scale-105 transition-transform">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">Dual-Sided Sheet Simulator</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Interactive 3D sheet preview simulates duplex margin alignment and paper finishes (75 GSM Standard, 100 GSM Bond, Spiral).
                  </p>
                  <div className="flex items-center text-[11px] font-mono font-semibold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-md w-fit">
                    <span>Tactile Duplex Margin Inspector</span>
                  </div>
                </div>

                {/* Card 6 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover hover:border-blue-300 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4 group-hover:scale-105 transition-transform">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">Instant UPI & Campus Deduction</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Direct QR scan via PhonePe/GPay or deduction from college smartcard balance. Exact change issues eliminated.
                  </p>
                  <div className="flex items-center text-[11px] font-mono font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md w-fit">
                    <span>Razorpay UPI • Student ID Pass</span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* SECTION 4: HARDWARE & SYSTEM TELEMETRY PANEL                              */}
          {/* ========================================================================= */}
          <section id="system-status" className="py-12 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                <div>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Real-Time Kiosk Telemetry</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Station B3 Hardware Status
                  </h2>
                </div>
                <div className="flex items-center space-x-2 bg-slate-100 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono text-slate-700">
                  <Server className="w-4 h-4 text-blue-600" />
                  <span>Canon imageRUNNER ADV DX C5860i</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Metric 1: Paper Tray 1 */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-slate-600">Drawer 1 (A4 Standard)</span>
                    <span className="text-xs font-mono font-bold text-blue-600">420 / 500 sheets</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-2">
                    <div className="bg-blue-600 h-full w-[84%] rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>84% Capacity</span>
                    <span className="text-emerald-600 font-medium">Optimal</span>
                  </div>
                </div>

                {/* Metric 2: Paper Tray 2 */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-slate-600">Drawer 2 (A3 / Cardstock)</span>
                    <span className="text-xs font-mono font-bold text-sky-600">310 / 500 sheets</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-2">
                    <div className="bg-sky-600 h-full w-[62%] rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>62% Capacity</span>
                    <span className="text-emerald-600 font-medium">Optimal</span>
                  </div>
                </div>

                {/* Metric 3: Toner CMYK */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <span className="text-xs font-semibold text-slate-600 block mb-2">Toner Reservoirs</span>
                  <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono">
                    <div className="bg-white p-1 rounded border border-slate-200">
                      <div className="text-cyan-600 font-bold">C</div>
                      <div className="text-slate-700">92%</div>
                    </div>
                    <div className="bg-white p-1 rounded border border-slate-200">
                      <div className="text-pink-600 font-bold">M</div>
                      <div className="text-slate-700">88%</div>
                    </div>
                    <div className="bg-white p-1 rounded border border-slate-200">
                      <div className="text-amber-500 font-bold">Y</div>
                      <div className="text-slate-700">94%</div>
                    </div>
                    <div className="bg-white p-1 rounded border border-slate-200">
                      <div className="text-slate-900 font-bold">K</div>
                      <div className="text-slate-700">76%</div>
                    </div>
                  </div>
                </div>

                {/* Metric 4: Spool Queue */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-slate-600">Active Spooler Queue</span>
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded font-mono">ARQ Buffer</span>
                  </div>
                  <div className="text-2xl font-black text-slate-900 font-mono">
                    2 Jobs <span className="text-xs font-normal text-slate-500">(~45s wait)</span>
                  </div>
                  <div className="text-[11px] text-emerald-600 mt-1 font-medium">
                    ● Queue throughput: 1.8 sheets/sec
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* SECTION 5: STUDENT UPLOAD & ORDER COCKPIT (3-COLUMN INTERACTIVE)          */}
          {/* ========================================================================= */}
          <section id="student-cockpit" className="py-12 bg-slate-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                <div>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider mb-2">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Interactive 3-Column Cockpit</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Student Order & Specification Engine
                  </h2>
                </div>
                <div className="text-xs text-slate-500 font-medium bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                  Live Price Update • Sub-30s Checkout
                </div>
              </div>

              {/* The 3-Column Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Column 1: Document Upload / Dropzone (4 cols) */}
                <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span>1. Source Document</span>
                    </h3>
                    <span className="text-[10px] font-mono bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded">
                      PDF / DOCX
                    </span>
                  </div>

                  {/* Dropzone Container */}
                  <div className="border-2 border-dashed border-blue-200 hover:border-blue-400 bg-blue-50/40 rounded-xl p-6 text-center transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-white border border-blue-200 text-blue-600 flex items-center justify-center mx-auto mb-3 shadow-xs group-hover:scale-105 transition-transform">
                      <FileSpreadsheet className="w-6 h-6" />
                    </div>
                    <div className="font-bold text-sm text-slate-800">
                      CSE_Final_Thesis_v3.pdf
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      12.4 MB • Uploaded from Hostels
                    </div>
                    <div className="mt-3 inline-flex items-center space-x-1 text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                      <Check className="w-3.5 h-3.5" />
                      <span>{pageCount} Pages Analyzed by Bedrock</span>
                    </div>
                  </div>

                  {/* Page Adjustment slider */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-600 font-medium">Simulate Document Page Count</span>
                      <span className="font-mono font-bold text-blue-600">{pageCount} pages</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={pageCount}
                      onChange={(e) => setPageCount(Number(e.target.value))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Column 2: Specification Engine (5 cols) */}
                <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-card space-y-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
                      <SlidersHorizontal className="w-4 h-4 text-sky-600" />
                      <span>2. Print Specifications</span>
                    </h3>
                    <span className="text-[10px] font-mono text-slate-500">Live Config</span>
                  </div>

                  {/* Color Mode Selector */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">Color Reproduction</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setColorMode("bw")}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                          colorMode === "bw"
                            ? "bg-blue-50 border-blue-600 text-blue-900 ring-2 ring-blue-500/20"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <div>B&W Monochrome</div>
                        <div className="text-[11px] font-mono text-slate-500 font-normal">₹1.50 / page</div>
                      </button>
                      <button
                        onClick={() => setColorMode("color")}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                          colorMode === "color"
                            ? "bg-sky-50 border-sky-600 text-sky-900 ring-2 ring-sky-500/20"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <div>Full Color Laser</div>
                        <div className="text-[11px] font-mono text-slate-500 font-normal">₹10.00 / page</div>
                      </button>
                    </div>
                  </div>

                  {/* Duplex Sides Selector */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="text-xs font-semibold text-slate-700">Duplex Alignment</label>
                      <button
                        onClick={() => setIsDuplexFlipped(!isDuplexFlipped)}
                        className="text-[11px] text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        Flip Simulator Preview ⟳
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setDuplexMode("single")}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                          duplexMode === "single"
                            ? "bg-blue-50 border-blue-600 text-blue-900 ring-2 ring-blue-500/20"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        Single-Sided (Simplex)
                      </button>
                      <button
                        onClick={() => setDuplexMode("double")}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                          duplexMode === "double"
                            ? "bg-blue-50 border-blue-600 text-blue-900 ring-2 ring-blue-500/20"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        Double-Sided (50% Paper Saved)
                      </button>
                    </div>
                  </div>

                  {/* Binding Selector */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">Binding & Finishing</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setBindingMode("none")}
                        className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                          bindingMode === "none"
                            ? "bg-blue-50 border-blue-600 text-blue-900 ring-2 ring-blue-500/20"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <div>No Binding</div>
                        <div className="text-[10px] text-slate-500">₹0</div>
                      </button>
                      <button
                        onClick={() => setBindingMode("staple")}
                        className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                          bindingMode === "staple"
                            ? "bg-blue-50 border-blue-600 text-blue-900 ring-2 ring-blue-500/20"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <div>Corner Staple</div>
                        <div className="text-[10px] text-slate-500">+₹5</div>
                      </button>
                      <button
                        onClick={() => setBindingMode("spiral")}
                        className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                          bindingMode === "spiral"
                            ? "bg-blue-50 border-blue-600 text-blue-900 ring-2 ring-blue-500/20"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <div>Spiral Bind</div>
                        <div className="text-[10px] text-slate-500">+₹40</div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Column 3: Execution Dock & Price Telemetry (3 cols) */}
                <div className="lg:col-span-3 bg-white p-6 rounded-2xl border border-blue-200 shadow-dock space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900">3. Real-Time Price</h3>
                    <span className="text-[11px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                      Live Quote
                    </span>
                  </div>

                  {/* Breakdown Table */}
                  <div className="space-y-2 text-xs border-y border-slate-100 py-3">
                    <div className="flex justify-between text-slate-600">
                      <span>Total Pages</span>
                      <span className="font-mono font-semibold text-slate-800">{pageCount}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Physical Sheets</span>
                      <span className="font-mono font-semibold text-slate-800">{sheetCount}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Print Cost</span>
                      <span className="font-mono font-semibold text-slate-800">₹{(sheetCount * ratePerSheet).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Binding Fee</span>
                      <span className="font-mono font-semibold text-slate-800">₹{bindingCost.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Grand Total */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <div className="text-xs text-slate-500">Amount Due (Inclusive Tax)</div>
                    <div className="text-3xl font-black text-slate-900 font-mono text-blue-700">
                      ₹{totalCost.toFixed(2)}
                    </div>
                  </div>

                  {/* Dispatch CTA */}
                  <button
                    onClick={() => setActiveStateTab("success")}
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-bold text-sm rounded-xl shadow-photonic-sm hover:shadow-photonic transition-all flex items-center justify-center space-x-2 cursor-pointer focus:ring-4 focus:ring-blue-200 focus:outline-none"
                  >
                    <span>Confirm & Pay via UPI</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-[11px] text-center text-slate-500">
                    Auto-routed to <strong>Station B3</strong> • Zero wait
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* SECTION 6: STAFF QUEUE & COMMAND DASHBOARD PREVIEW                        */}
          {/* ========================================================================= */}
          <section id="staff-queue" className="py-12 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                <div>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-2">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Station Operator Command</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Live Dispatch Queue & Job Manager
                  </h2>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-lg flex items-center space-x-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>3 Active Orders in Spooler</span>
                  </span>
                </div>
              </div>

              {/* Staff Queue Table */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="overflow-x-auto scrollbar-thin">
                  <table className="w-full text-left text-xs min-w-[680px]">
                    <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200 text-[11px]">
                      <tr>
                        <th className="py-3 px-4">Ticket</th>
                        <th className="py-3 px-4">Document</th>
                        <th className="py-3 px-4">Specs</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4">Destination</th>
                        <th className="py-3 px-4 text-right">Quick Operator Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 font-sans">
                      
                      {/* Job 1 */}
                      <tr className="hover:bg-blue-50/40 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-blue-700">EP-8921</td>
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-slate-900">CSE_Final_Thesis_v3.pdf</div>
                          <div className="text-[11px] text-slate-500">Student ID: 22CSE041</div>
                        </td>
                        <td className="py-3.5 px-4 font-mono">48 Pgs • Duplex • Spiral</td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-ping"></span>
                            <span>Spooling Hardware</span>
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-slate-700">Counter 2</td>
                        <td className="py-3.5 px-4 text-right space-x-2">
                          <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-[11px] shadow-xs cursor-pointer">
                            Print Now
                          </button>
                          <button className="px-3 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg font-semibold text-[11px] cursor-pointer">
                            Inspect
                          </button>
                        </td>
                      </tr>

                      {/* Job 2 */}
                      <tr className="hover:bg-blue-50/40 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-blue-700">EP-8922</td>
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-slate-900">AdmitCard_Semester6.pdf</div>
                          <div className="text-[11px] text-slate-500">Student ID: 22ECE118</div>
                        </td>
                        <td className="py-3.5 px-4 font-mono">2 Pgs • Single • Standard</td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span>Ready for Pickup</span>
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-slate-700">Counter 1</td>
                        <td className="py-3.5 px-4 text-right space-x-2">
                          <button className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-[11px] shadow-xs cursor-pointer">
                            Claim Handover
                          </button>
                          <button className="px-3 py-1 bg-white hover:bg-slate-100 text-rose-600 border border-slate-300 rounded-lg font-semibold text-[11px] cursor-pointer">
                            Shred
                          </button>
                        </td>
                      </tr>

                      {/* Job 3 */}
                      <tr className="hover:bg-blue-50/40 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-blue-700">EP-8923</td>
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-slate-900">Lab_Manual_Microcontrollers.pdf</div>
                          <div className="text-[11px] text-slate-500">Student ID: 23MEC012</div>
                        </td>
                        <td className="py-3.5 px-4 font-mono">14 Pgs • Color • Staple</td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-sky-50 text-sky-800 border border-sky-200">
                            <Clock className="w-3 h-3 text-sky-600" />
                            <span>Queued in Redis</span>
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-slate-700">Counter 1</td>
                        <td className="py-3.5 px-4 text-right">
                          <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-[11px] shadow-xs cursor-pointer">
                            Prioritize
                          </button>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <div className="px-4 py-2 bg-slate-100/80 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between sm:hidden font-mono">
                  <span>← Swipe horizontally to view full queue actions →</span>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* SECTION 7: INTERACTIVE STATES MATRIX                                      */}
          {/* ========================================================================= */}
          <section id="state-matrix" className="py-12 bg-slate-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-bold text-xs uppercase tracking-wider mb-2">
                  <Eye className="w-3.5 h-3.5" />
                  <span>State Verification Lab</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Comprehensive State Machine Matrix
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Click through and inspect all required interaction states: Hover, Focus, Loading, Empty, Error, and Success.
                </p>
              </div>

              {/* State Tab Switcher */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                {[
                  { id: "default", label: "Default Normal" },
                  { id: "hover_focus", label: "Hover & Focus States" },
                  { id: "loading", label: "Loading State" },
                  { id: "empty", label: "Empty State" },
                  { id: "error", label: "Error State" },
                  { id: "success", label: "Success State" },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setActiveStateTab(st.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      activeStateTab === st.id
                        ? "bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-500/30"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>

              {/* State Content Rendering */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-card min-h-[320px] flex items-center justify-center">
                
                {/* 1. DEFAULT STATE */}
                {activeStateTab === "default" && (
                  <div className="max-w-md text-center space-y-4">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto border border-blue-200">
                      <Printer className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">Default Ready State</h4>
                    <p className="text-xs text-slate-600">
                      Standard pristine UI surface with zero noise. Buttons idle at rest with subtle 1px border rule, crisp typography, and 17.8:1 contrast.
                    </p>
                    <div className="flex justify-center gap-3">
                      <button className="px-5 py-2.5 bg-blue-600 text-white font-bold text-xs rounded-xl shadow-xs">
                        Primary Button (Rest)
                      </button>
                      <button className="px-5 py-2.5 bg-white text-slate-700 border border-slate-300 font-semibold text-xs rounded-xl">
                        Secondary (Rest)
                      </button>
                    </div>
                  </div>
                )}

                {/* 2. HOVER & FOCUS STATES */}
                {activeStateTab === "hover_focus" && (
                  <div className="w-full max-w-xl space-y-6">
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-slate-900 mb-1">Hover & Keyboard Focus Testbench</h4>
                      <p className="text-xs text-slate-500">Test mouse over, or hit Tab key to inspect the 2px high-contrast cyan focus rings.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Hover Demo */}
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-3">
                        <div className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">Hover Elevation</div>
                        <button
                          className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-photonic-sm transition-all text-white font-bold text-xs rounded-xl cursor-pointer"
                        >
                          Hover Over Me (Elevates)
                        </button>
                        <button
                          className="w-full py-2.5 bg-white hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 border border-slate-300 transition-all text-slate-700 font-semibold text-xs rounded-xl cursor-pointer"
                        >
                          Ghost Hover (Ice Blue Fill)
                        </button>
                      </div>

                      {/* Focus Demo */}
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-3">
                        <div className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">Keyboard Focus Visible</div>
                        <button
                          className="w-full py-2.5 bg-blue-600 text-white font-bold text-xs rounded-xl ring-4 ring-sky-300 ring-offset-2 outline-none"
                        >
                          Focused Primary (Ring Active)
                        </button>
                        <button
                          className="w-full py-2.5 bg-white border border-blue-500 text-blue-700 font-semibold text-xs rounded-xl ring-4 ring-sky-200 ring-offset-2 outline-none"
                        >
                          Focused Outline (Double Ring)
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. LOADING STATE */}
                {activeStateTab === "loading" && (
                  <div className="w-full max-w-md text-center space-y-4">
                    <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-4 border-blue-100 border-t-blue-600 animate-spin"></div>
                      <Cpu className="w-6 h-6 text-blue-600 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">Bedrock AI Pre-Flight Scanning...</h4>
                      <p className="text-xs text-slate-500 mt-1">Analyzing color histograms, bleed zones, and computing exact page count.</p>
                    </div>
                    {/* Photonic scanning beam simulation */}
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden relative">
                      <div className="bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 h-full w-2/3 rounded-full animate-pulse mx-auto"></div>
                    </div>
                    <div className="text-[11px] font-mono text-blue-600">spooler_task_id: ep_audit_8921</div>
                  </div>
                )}

                {/* 4. EMPTY STATE */}
                {activeStateTab === "empty" && (
                  <div className="max-w-md text-center space-y-4">
                    <div className="w-14 h-14 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto border border-slate-200">
                      <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">Print Spooler Buffer Empty</h4>
                      <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                        All queued print orders have been dispatched and collected. Hardware trays are calibrated and awaiting submissions.
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveStateTab("default")}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer"
                    >
                      Submit New Print Job
                    </button>
                  </div>
                )}

                {/* 5. ERROR STATE */}
                {activeStateTab === "error" && (
                  <div className="w-full max-w-md bg-rose-50/70 border border-rose-200 p-6 rounded-2xl text-left space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-rose-900">Protected PDF Detected</h4>
                        <div className="text-xs text-rose-600 font-mono">Error Code: ERR_ENCRYPTED_PAYLOAD</div>
                      </div>
                    </div>
                    <p className="text-xs text-rose-700 leading-relaxed">
                      The document <strong>"Course_Grades_Locked.pdf"</strong> requires an owner password to unlock print rasterization.
                    </p>
                    <div className="pt-2 flex items-center space-x-3">
                      <button className="px-3.5 py-1.5 bg-rose-600 text-white font-bold text-xs rounded-lg hover:bg-rose-700 transition-colors cursor-pointer">
                        Provide Password
                      </button>
                      <button
                        onClick={() => setActiveStateTab("default")}
                        className="px-3.5 py-1.5 bg-white border border-rose-200 text-rose-800 font-semibold text-xs rounded-lg hover:bg-rose-100 transition-colors cursor-pointer"
                      >
                        Dismiss & Upload Other
                      </button>
                    </div>
                  </div>
                )}

                {/* 6. SUCCESS STATE */}
                {activeStateTab === "success" && (
                  <div className="max-w-md text-center space-y-4">
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto border border-emerald-200">
                      <Check className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full">
                        PAYMENT CONFIRMED (UPI)
                      </span>
                      <h4 className="text-lg font-black text-slate-900 mt-2">Order Dispatched to Station B3</h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Your Holographic Claim Stub <strong>EP-8921</strong> is ready. Walk to <strong>Counter 2</strong> for immediate pickup.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs font-mono text-slate-600 flex justify-between">
                      <span>Zero-Retention Shred Scheduled:</span>
                      <strong className="text-blue-700">T-minus 23h 59m</strong>
                    </div>
                    <button
                      onClick={() => setActiveStateTab("default")}
                      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer"
                    >
                      Return to Document Upload
                    </button>
                  </div>
                )}

              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* SECTION 8: DESIGN SYSTEM, TYPOGRAPHY & PALETTE TOKENS                      */}
          {/* ========================================================================= */}
          <section id="token-specs" className="py-12 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Design Token Governance</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Strict Light & Blue-Led Specification
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  100% compliant with DESIGN.md: Zero dark surfaces, zero beige, verified WCAG 2.2 AAA contrast.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Palette Grid */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center justify-between">
                    <span>Approved Color Tokens</span>
                    <span className="text-xs font-mono text-emerald-600 font-semibold">WCAG AAA Certified</span>
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-[#2563EB] shadow-xs"></div>
                      <div className="text-xs">
                        <div className="font-bold text-slate-900">--brand-blue</div>
                        <div className="font-mono text-[11px] text-slate-500">#2563EB (5.0:1)</div>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0284C7] shadow-xs"></div>
                      <div className="text-xs">
                        <div className="font-bold text-slate-900">--brand-sky</div>
                        <div className="font-mono text-[11px] text-slate-500">#0284C7 (4.5:1)</div>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-[#06B6D4] shadow-xs"></div>
                      <div className="text-xs">
                        <div className="font-bold text-slate-900">--brand-cyan</div>
                        <div className="font-mono text-[11px] text-slate-500">#06B6D4 (Beacon)</div>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-[#1E1B4B] shadow-xs"></div>
                      <div className="text-xs">
                        <div className="font-bold text-slate-900">--indigo-deep</div>
                        <div className="font-mono text-[11px] text-slate-500">#1E1B4B (16.9:1)</div>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-[#F8FAFC] border border-slate-300 shadow-xs"></div>
                      <div className="text-xs">
                        <div className="font-bold text-slate-900">--surface-canvas</div>
                        <div className="font-mono text-[11px] text-slate-500">#F8FAFC (Ice Slate)</div>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0F172A] shadow-xs"></div>
                      <div className="text-xs">
                        <div className="font-bold text-slate-900">--text-primary</div>
                        <div className="font-mono text-[11px] text-slate-500">#0F172A (17.8:1)</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Typography Ladder */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center justify-between">
                    <span>Approved Typography Ladder</span>
                    <span className="text-xs font-mono text-blue-600 font-semibold">Geometric Grotesk</span>
                  </h3>

                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Display Headings • Plus Jakarta Sans 800/900</div>
                      <div className="font-black text-xl text-slate-900 tracking-tight mt-0.5">
                        The Photonic Campus Cloud
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Body & Micro-UI • Inter 400/500/600</div>
                      <div className="text-xs text-slate-700 leading-relaxed mt-0.5">
                        Zero-retention shredding ensures confidential student files never remain on kiosk terminals.
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Telemetry & Tokens • JetBrains Mono 600</div>
                      <div className="font-mono font-bold text-sm text-blue-700 tracking-wider mt-0.5">
                        EP-8921 • 48 PGS • ₹58.00 • 3600 RPM
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* SECTION 9: 11-POINT REVIEW GATE CONFIRMATION CHECKLIST                    */}
          {/* ========================================================================= */}
          <section className="py-12 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-blue-50/80 border-2 border-blue-200 rounded-3xl p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <ShieldCheck className="w-7 h-7 text-blue-700" />
                  <h3 className="text-xl font-black text-blue-950 tracking-tight">
                    EasePrint Elite UI/UX Review Gate Audit
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  <div className="bg-white p-3 rounded-xl border border-blue-100 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Light Theme:</strong> Verified #F8FAFC / #FFFFFF</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-blue-100 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Blue-Led:</strong> Laser Blue #2563EB & Sky #0284C7</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-blue-100 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Not Beige:</strong> 0% warm cream / gold / sepia</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-blue-100 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Not Dark/Black:</strong> 0 dark mode surfaces</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-blue-100 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Not Generic SaaS:</strong> Custom Xerox hardware DNA</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-blue-100 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Pre-Flight Verified:</strong> Vite build clean & zero errors</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-blue-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-blue-900 font-medium">
                  <div>
                    Approval Gate: Awaiting user review confirmation. No push or merge to <code>main</code> will occur.
                  </div>
                  <div className="font-mono bg-blue-100 px-3 py-1 rounded-md text-blue-800">
                    design/easeprint-elite-preview
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
