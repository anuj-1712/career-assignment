import React from "react";

export default function Footer() {
  return (
    <div className="bg-blue-700">
      <div
        className="bg-black flex flex-wrap gap-4 md:justify-evenly justify-between items-center p-12"
        style={{ borderTopLeftRadius: "30%" }}
      >
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-xl font-semibold">Jobs by location</h4>
          <div className="flex flex-col gap-1">
            <a href="/" className="text-white text-sm hover:underline">
              Jobs in Gurgaon / Noida
            </a>
            <a href="/" className="text-white text-sm hover:underline">
              Jobs in Bangalore
            </a>
            <a href="/" className="text-white text-sm hover:underline">
              Jobs in Hyderabad
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-xl font-semibold">
            Top Companies Hiring
          </h4>
          <div className="flex flex-col gap-1">
            <a href="/" className="text-white text-sm hover:underline">
              Paytm Jobs
            </a>
            <a href="/" className="text-white text-sm hover:underline">
              Amazon Jobs
            </a>
            <a href="/" className="text-white text-sm hover:underline">
              Cred Jobs
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-xl font-semibold">
            Popular Collections
          </h4>
          <div className="flex flex-col gap-1">
            <a href="/" className="text-white text-sm hover:underline">
              Video Editing Jobs
            </a>
            <a href="/" className="text-white text-sm hover:underline">
              Data Science Jobs
            </a>
            <a href="/" className="text-white text-sm hover:underline">
              Product Manager Jobs
            </a>
          </div>
        </div>
        <div className="w-full bg-white h-[2px] opacity-40" />
      </div>
      <div className="bg-black flex flex-wrap justify-center gap-4 -mt-8 pb-8 px-8">
        <a href="/" className="text-slate-400 text-sm hover:text-white">About us</a>
        <a href="/" className="text-slate-400 text-sm hover:text-white">Term of Use</a>
        <a href="/" className="text-slate-400 text-sm hover:text-white">Privacy Policy</a>
        <a href="/" className="text-slate-400 text-sm hover:text-white">Cookie Policy</a>
        <a href="/" className="text-slate-400 text-sm hover:text-white">Help Center</a>
      </div>
    </div>
  );
}
