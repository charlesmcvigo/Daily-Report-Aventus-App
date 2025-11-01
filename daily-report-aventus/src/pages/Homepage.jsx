import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="mx-auto flex flex-col justify-center items-center h-screen w-full gap-8 px-4">
      <img
        src="/background-image.png"
        alt="Aventus background"
        className="w-full max-w-lg h-auto object-contain"
      />
      <h1 className="font-mono px-5 text-3xl tracking-widest text-center">
        Daily Report
      </h1>
      <Link to="/dashboard">
        <button className="btn btn-outline btn-success btn-wide">
          Get started!
        </button>
      </Link>
    </div>
  );
};

export default Homepage;
