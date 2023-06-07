import React from "react";

function Navbar() {
  return (
    <>
      <div className="bg-blue-800 shadow-xl shadow-blue-500/30 opacity-95 w-screen flex items-center z-50  h-20">
        <div className=" text-white brightness-200 flex flex-row w-full ">
          <span className="pl-10 ">Navbar</span>
          <div className="ml-auto pr-14 ">
            <ul className=" hidden md:flex  flex-row gap-5">
              <li>About</li>
              <li>Projects</li>
              <li>Technologies</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden w-full h-screen flex flex-col items-center justify-center bg-gray-400">
        <div className="w-full">
          <ul className="flex flex-col justify-center gap-10 px-10 items-center text-[22px] text-white">
            <li className=" border border-solid border-white w-full   text-center ">
              About
            </li>
            <li className=" border border-solid border-white  w-full  text-center  ">
              Projects
            </li>
            <li className=" border border-solid border-white w-full text-center  ">
              Technologies
            </li>
            <li className=" border border-solid border-white  w-full   text-center ">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
