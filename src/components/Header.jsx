import React, { useState } from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Jobslist from "./Jobslist";
import { motion } from "framer-motion";

export default function Header({ openNav }) {
  const [showJobsList , setShowJobsList] = useState(false)
  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 70) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <header
      className="flex md:justify-evenly justify-between items-end fixed top-0 w-screen h-[50px] z-10 py-2 px-4"
      style={{
        backgroundColor: colorChange ? "black" : "white",
        color: colorChange ? "white" : "black",
      }}
    >
      <div className="flex items-end lg:gap-14 gap-10">
        <h1 className="text-2xl md:text-3xl font-semibold text-blue-400">
          Career
        </h1>
        <nav className="hidden md:flex gap-4 lg:gap-6">
          <a
            href="/career-assignment"
            className="text-[14px] lg:text-[16px] font-serif hover:text-sky-400"
          >
            Home
          </a>
          <motion.div className="flex flex-col" onHoverStart={()=>setShowJobsList(true)} onHoverEnd={()=>setShowJobsList(false)} transition={{duration:2}}>
            <div className="flex items-center">
              <a
                href="/career-assignment"
                className="text-[14px] lg:text-[16px] font-serif hover:text-sky-400"
              >
                Jobs
              </a>
              <IconContext.Provider value={{ size: "1.3em" }}>
                <MdOutlineKeyboardArrowDown/>
              </IconContext.Provider>
            </div>
            { showJobsList && <Jobslist />}
          </motion.div>
          <a
            href="#companies"
            className="text-[14px] lg:text-[16px] font-serif hover:text-sky-400"
          >
            Companies
          </a>
          <a
            href="/career-assignment"
            className="text-[14px] lg:text-[16px] font-serif hover:text-sky-400"
          >
            Employers
          </a>
          <a
            href="#contact-us"
            className="text-[14px] lg:text-[16px] font-serif hover:text-sky-400"
          >
            Contact Us
          </a>
        </nav>
      </div>
      <div className="flex gap-4 lg:gap-8">
        <button className="hover:text-sky-400 text-[14px] lg:text-[16px] font-serif md:block hidden">
          Sign Up
        </button>
        <button className="hover:text-sky-400 text-[14px] lg:text-[16px] font-serif md:block hidden">
          Login
        </button>
        <IconContext.Provider value={{ className: "burger-icon" }}>
          <GiHamburgerMenu onClick={openNav} />
        </IconContext.Provider>
      </div>
    </header>
  );
}
