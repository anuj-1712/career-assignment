import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineWifi } from "react-icons/ai";
import { FcPrivacy } from "react-icons/fc";
import { IoCloudDoneOutline } from "react-icons/io5";

export default function Features() {
  return (
    <div
      className="my-12 py-6 md:h-[350px] h-[1320px]"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        backgroundSize: "cover",
        backgroundColor: "#61b0e5",
        backgroundBlendMode: "multiply",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h3 className="text-4xl font-serif text-white text-center mt-8 mb-16">
        What we Provide ?
      </h3>
      <div className="flex md:flex-row flex-col justify-around items-center px-4 md:gap-0 gap-10">
        <div className="flex flex-col items-center gap-6 w-10/12 md:w-[30%] max-w-[400px] h-[350px] py-8 px-4 bg-white shadow-lg rounded">
          <IconContext.Provider value={{ className: "wifi-icon" }}>
            <AiOutlineWifi />
          </IconContext.Provider>
          <p className="text-xl lg:text-2xl text-[#525FE1] font-semibold font-serif">
            Faster Responses
          </p>
          <p className="font-sans">
            Tired of having your applications ignored by companies? Our company
            only matches you with the right jobs, leading to 5X response rates
            from companies compared to other job sites!
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 w-10/12 md:w-[30%] max-w-[400px] h-[350px] py-8 px-4 bg-white shadow-lg rounded">
          <IconContext.Provider value={{ className: "privacy-icon" }}>
            <FcPrivacy />
          </IconContext.Provider>
          <p className="text-xl lg:text-2xl text-[#525FE1] font-semibold font-serif">
            Privacy Guaranteed
          </p>
          <p className="font-sans">
            We value your privacy very highly. You can block specific companies
            from viewing your profile. Or you can block all companies and just
            apply to specific ones yourself.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 w-10/12 md:w-[30%] max-w-[400px] h-[350px] py-8 px-4 bg-white shadow-lg rounded">
          <IconContext.Provider value={{ className: "tick-icon" }}>
            <IoCloudDoneOutline />
          </IconContext.Provider>
          <p className="text-xl lg:text-2xl text-[#525FE1] font-semibold font-serif">
            Perfect Jobs
          </p>
          <p className="font-sans">
            Do you really want to look at thousands of irrelevant job postings
            or get spammed by job sites? At Career, we do the work of finding
            the best jobs for you, so you can sit back and relax.
          </p>
        </div>
      </div>
    </div>
  );
}
