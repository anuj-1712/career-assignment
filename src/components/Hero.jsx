import React from "react";

export default function Hero() {
  return (
    <div
      className="h-[70vh] min-h-[500px] max-h-[800px] w-full bg-no-repeat mt-[50px]"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        backgroundSize: "cover",
        backgroundColor: "#61b0e5",
        backgroundBlendMode: "multiply",
      }}
    >
      <p className="text-white font-extrabold text-3xl md:text-5xl w-1/4 md:w-1/3 min-w-[200px] mb-8 relative top-1/3 left-[15%]">
        We Understand Your Needs Better .
      </p>
      <div className="flex items-center gap-6 relative top-1/3 left-[15%] min-w-[220px] w-[40%]">
        <button className="flex items-center gap-2 text-white font-medium bg-blue-500 h-9 px-2 hover:border-b-2 hover:border-white hover:bg-transparent ">
          Find Jobs
        </button>
        <button className="flex items-center gap-2 text-white font-medium bg-blue-500 h-9 px-2 hover:border-b-2 hover:border-white hover:bg-transparent">
          Hire Talent
        </button>
      </div>
    </div>
  );
}
