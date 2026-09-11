import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import StudentPortal from "./pages/StudentPortal";
import StaffDashboard from "./pages/StaffDashboard";

export default function App() {
  const getInitialTab = () => {
    if (typeof window !== "undefined") {
      if (window.location.pathname.includes("staff")) return "staff";
    }
    return "student";
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", `/${tab}`);
    }
  };

  useEffect(() => {
    const onPopState = () => {
      setActiveTab(window.location.pathname.includes("staff") ? "staff" : "student");
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />
      <main className="flex-1">
        {activeTab === "student" ? <StudentPortal /> : <StaffDashboard />}
      </main>
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>EasePrint © 2026 — Omnichannel Stationery & Print Station (Hyderabad, Telangana)</span>
          <span className="text-slate-400">Powered by Amazon Bedrock, DynamoDB, ElastiCache, S3 & ARQ</span>
        </div>
      </footer>
    </div>
  );
}
