import React from "react";
import { Printer, Shield, User, Home, MapPin, Sparkles } from "lucide-react";

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 overflow-x-auto scrollbar-none">
        {/* Brand */}
        <div
          onClick={() => setActiveTab("landing")}
          className="flex items-center space-x-2.5 cursor-pointer group shrink-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
            <Printer className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                EasePrint
              </span>
              <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                Cloud
              </span>
            </div>
            <div className="hidden sm:flex items-center text-[11px] text-slate-500 space-x-1">
              <MapPin className="w-3 h-3 text-red-500" />
              <span>Hyderabad Campus Xerox</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200/80 shrink-0">
          <button
            onClick={() => setActiveTab("preview")}
            className={`flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "preview"
                ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
                : "text-blue-700 hover:text-blue-900 hover:bg-blue-50/80"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>Preview</span>
          </button>
          <button
            onClick={() => setActiveTab("landing")}
            className={`flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === "landing"
                ? "bg-white text-sky-700 shadow-sm shadow-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <button
            onClick={() => setActiveTab("student")}
            className={`flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === "student"
                ? "bg-white text-sky-700 shadow-sm shadow-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Student</span>
          </button>
          <button
            onClick={() => setActiveTab("staff")}
            className={`flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === "staff"
                ? "bg-white text-indigo-700 shadow-sm shadow-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Staff</span>
          </button>
        </div>

        {/* Live Pulse Indicator */}
        <div className="hidden lg:flex items-center space-x-2 text-xs text-slate-500">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
          <span className="font-semibold text-slate-700 font-mono text-[11px]">Station B3 • Online</span>
        </div>
      </div>
    </header>
  );
}
