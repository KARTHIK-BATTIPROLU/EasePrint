import React from "react";
import { Printer, Shield, User, Home, MapPin } from "lucide-react";

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div
          onClick={() => setActiveTab("landing")}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <Printer className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                EasePrint
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                AI Station
              </span>
            </div>
            <div className="flex items-center text-xs text-slate-500 space-x-1">
              <MapPin className="w-3 h-3 text-red-500" />
              <span>Hyderabad Campus Xerox & Stationery</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab("landing")}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === "landing"
                ? "bg-white text-sky-700 shadow-sm shadow-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </button>
          <button
            onClick={() => setActiveTab("student")}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === "student"
                ? "bg-white text-sky-700 shadow-sm shadow-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <User className="w-4 h-4" />
            <span>Student Portal</span>
          </button>
          <button
            onClick={() => setActiveTab("staff")}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === "staff"
                ? "bg-white text-indigo-700 shadow-sm shadow-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Staff Command</span>
          </button>
        </div>

        {/* Live Pulse Indicator */}
        <div className="hidden lg:flex items-center space-x-2 text-xs text-slate-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium text-slate-600">Bedrock & ARQ Active</span>
        </div>
      </div>
    </header>
  );
}
