import React from "react";

const Homepage = () => {
  return (
    <div className="mx-auto flex flex-col justify-center items-center h-screen w-full gap-8">
      <img src=".\src\assets\background-image.png" alt="Aventus background" />
      <h1 className="font-mono px-5 text-3xl tracking-widest">Daily Report</h1>
      <button className="btn btn-outline btn-success btn-wide">Get started!</button>
    </div>
  );
};

export default Homepage;
