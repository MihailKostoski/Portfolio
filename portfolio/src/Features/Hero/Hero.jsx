import React from "react";

function Hero() {
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center px-12">
      <div className="relative px-4  rounded-xl bg-blue-700 opacity-95 pt-4 flex flex-col items-start shadow-xl  shadow-blue-500/50 mt-10 h-[160px] w-[340px]">
        <span className="text-teal-100  font-semibold  text-2xl shadow-md px-2 rounded-md shadow-blue-500/10">
          Welcome To
        </span>
        <span className="text-2xl mt-1 shadow-md px-2 rounded-md shadow-blue-500/10 whitespace-pre-line wrap text-emerald-200 font-semibold">
          Mihail Kostoski devfolio
        </span>
      </div>
    </div>
  );
}

export default Hero;
