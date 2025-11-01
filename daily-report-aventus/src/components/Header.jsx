import React from "react";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="p-5 flex items-center justify-between rounded shadow-md bg-green-300">
      <h1 className="md:text-lg lg:text-2xl font-semibold text-center flex-1 text-green-700 text-shadow-md">
        Welcome!
      </h1>

      <Menu size={24} className="cursor-pointer" />
    </div>
  );
};

export default Header;
