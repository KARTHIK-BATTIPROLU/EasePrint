import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import StudentPortal from "./pages/StudentPortal";
import StaffDashboard from "./pages/StaffDashboard";
import ElitePreviewShowcase from "./pages/ElitePreviewShowcase";

export default function App() {
  const getInitialTab = () => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path.includes("staff")) return "staff";
      if (path.includes("student")) return "student";
      if (path.includes("landing")) return "landing";
      if (path.includes("preview")) return "preview";
    }
    // Default to preview showcase on the preview branch
    return "preview";
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      const targetPath = tab === "preview" ? "/preview" : (tab === "landing" ? "/" : `/${tab}`);
      window.history.pushState(null, "", targetPath);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onPopState = () => {
      const path = window.location.pathname;
      if (path.includes("staff")) {
        setActiveTab("staff");
      } else if (path.includes("student")) {
        setActiveTab("student");
      } else if (path.includes("preview")) {
        setActiveTab("preview");
      } else {
        setActiveTab("landing");
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />
      <main className="flex-1">
        {activeTab === "preview" && <ElitePreviewShowcase onNavigateTab={handleTabChange} />}
        {activeTab === "landing" && <LandingPage onSelectPortal={handleTabChange} />}
        {activeTab === "student" && <StudentPortal />}
        {activeTab === "staff" && <StaffDashboard />}
      </main>
      <footer className="py-6 text-center text-xs bg-white border-t border-slate-200 text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>EasePrint © 2026 — Omnichannel Stationery & Print Station (Hyderabad, Telangana)</span>
          <span className="text-slate-400 font-mono">
            [BRANCH: design/easeprint-elite-preview • EASEPRINT ELITE UI/UX PREVIEW — NOT YET MERGED]
          </span>
        </div>
      </footer>
    </div>
  );
}
