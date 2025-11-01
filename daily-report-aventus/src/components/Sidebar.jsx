import React from "react";
import { Home, FileEdit, List } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-30 md:w-50 bg-green-600 flex flex-col gap-5 shadow-md text-white rounded-md">
      <img
        className="h-25 w-auto object-contain m-4 drop-shadow-[0_0_10px_white]"
        src="/aventuslogoandname.png"
        alt="aventus logo and name"
      />
      <Link
        to="/"
        className="btn btn-ghost justify-start gap-2 text-sm md:text-lg"
      >
        <Home size={18} /> Dashboard
      </Link>

      <Link
        to="/create-report"
        className="btn btn-ghost justify-start gap-2 md:text-lg"
      >
        <FileEdit size={18} /> Create Report
      </Link>

      <Link
        to="/reports-history"
        className="btn btn-ghost justify-start gap-2 md:text-lg"
      >
        <List size={18} /> Reports History
      </Link>
    </div>
  );
};

export default Sidebar;
