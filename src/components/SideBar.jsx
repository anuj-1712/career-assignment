import React from "react";
import { IconContext } from "react-icons";
import { RxCross2 } from "react-icons/rx";

export default function SideBar({closeNav}) {
  return (
    <div className="hidden flex-col items-center fixed top-0 right-0 h-full sm:w-1/4 w-full bg-blue-500 z-10" id="sidebar">
      <IconContext.Provider value={{ className: "cross-icon" }}>
        <RxCross2 onClick={closeNav}/>
      </IconContext.Provider>
      <nav className="flex flex-col gap-4 my-10">
        <a href="/" className="font-serif text-white">
          Home
        </a>
        <a href="/" className="font-serif text-white">
          Jobs
        </a>
        <a href="/" className="font-serif text-white">
          Companies
        </a>
        <a href="/" className="font-serif text-white">
          Employers
        </a>
        <a href="/" className="font-serif text-white">
          Contact Us
        </a>
      </nav>
      <div className="flex flex-col gap-4">
        <button className="text-blue-500 bg-white font-medium h-9 w-28 rounded-md">Sign Up</button>
        <button className="text-blue-500 bg-white font-medium h-9 w-28 rounded-md">Login</button>
      </div>
    </div>
  );
}
