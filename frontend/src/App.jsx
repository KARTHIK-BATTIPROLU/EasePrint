import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import StudentPortal from "./pages/StudentPortal";
import StaffDashboard from "./pages/StaffDashboard";

export default function App() {
  const getInitialTab = () => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path.includes("staff")) return "staff";
      if (path.includes("student")) return "student";
    }
    return "landing";
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      const targetPath = tab === "landing" ? "/" : `/${tab}`;
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
      } else {
        setActiveTab("landing");
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans text-slate-100">
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />
      <main className="flex-1">
        {activeTab === "landing" && <LandingPage onSelectPortal={handleTabChange} />}
        {activeTab === "student" && <StudentPortal />}
        {activeTab === "staff" && <StaffDashboard />}
      </main>
      <footer className="bg-slate-950 border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>EasePrint © 2026 — Omnichannel Stationery & Print Station (Hyderabad, Telangana)</span>
          <span className="text-slate-400">Powered by Amazon Bedrock, DynamoDB, ElastiCache, S3 & ARQ</span>
        </div>
      </footer>
    </div>
  );
}
