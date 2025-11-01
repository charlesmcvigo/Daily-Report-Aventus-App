import React from "react";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full p-5 mb-3 flex items-center justify-between gap-4 shadow-md">
      <h1 className="md:text-lg lg:text-2xl font-semibold text-center flex-1 text-green-700 text-shadow-md">
        Welcome!
      </h1>

      <Menu size={24} className="cursor-pointer" />
    </div>
  );
};

export default Header;
