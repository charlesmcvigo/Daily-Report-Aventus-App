import React from "react";
import { Home, FileEdit, List } from "lucide-react";

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  return (
    <div className="h-screen w-30 md:w-50 bg-green-500 flex flex-col gap-5 shadow-md text-white rounded">
      <img
        className="h-25 w-auto object-contain m-4 drop-shadow-[0_0_10px_white]"
        src="/aventuslogoandname.png"
        alt="aventus logo and name"
      />

      <button
        onClick={() => setActiveMenu("dashboard")}
        className={`btn btn-ghost justify-start gap-2 text-sm md:text-lg ${
          activeMenu === "dashboard" && "bg-white text-green-700"
        }`}
      >
        <Home size={18} /> Dashboard
      </button>

      <button
        onClick={() => setActiveMenu("create-report")}
        className={`btn btn-ghost justify-start gap-2 md:text-lg ${
          activeMenu === "create-report" && "bg-white text-green-700"
        }`}
      >
        <FileEdit size={18} /> Create Report
      </button>

      <button
        onClick={() => setActiveMenu("reports-history")}
        className={`btn btn-ghost justify-start gap-2 md:text-lg ${
          activeMenu === "reports-history" && "bg-white text-green-700"
        }`}
      >
        <List size={18} /> Reports History
      </button>
    </div>
  );
};

export default Sidebar;
