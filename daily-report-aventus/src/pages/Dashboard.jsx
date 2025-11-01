import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Content from "../components/Content.jsx";
import CreateReport from "../components/CreateReport.jsx";
import ReportsHistory from "../components/ReportsHistory.jsx";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <div className="flex h-screen w-screen overflow-hidden gap-2 md:gap-3">
      {/* Sidebar */}
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* Main Area */}
      <div className="flex flex-col flex-1 gap-2 md:gap-3">
        <Header />

        {/* Content wrapper (fills remaining height) */}
        <div className="flex-1 overflow-auto rounded shadow-md bg-gray-500">
          {activeMenu === "dashboard" && <Content />}
          {activeMenu === "create-report" && <CreateReport />}
          {activeMenu === "reports-history" && <ReportsHistory />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
