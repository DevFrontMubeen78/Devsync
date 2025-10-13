import React from "react";
import { ArrowDownRight } from "lucide-react";

const DiscussSection = () => {
  return (
    <div className="bg-[#1f2b2f] text-white rounded-[40px] border border-white/10 p-10 md:p-16 relative overflow-hidden">
      {/* Arrow Top Center */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-[#1f2b2f]">
        <ArrowDownRight className="text-yellow-400 w-6 h-6 rotate-45" />
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            HAVE A GREAT IDEA?
            <br />
            LET’S DISCUSS IT!
          </h2>
        </div>

        {/* Right side button with line */}
        <div className="relative flex items-center justify-center md:justify-end w-full md:w-auto">
          {/* Curved line */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 100"
            className="absolute -left-48 top-0 w-[300px] h-[100px] hidden md:block"
          >
            <path
              d="M0,50 C100,0 200,100 300,50"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="transparent"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f8c25a" />
                <stop offset="100%" stopColor="#b76ef5" />
              </linearGradient>
            </defs>
          </svg>

          {/* Button */}
          <a
            href="/contact"
            className="relative z-10 bg-[#f8c25a] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#ffde8a] transition-all duration-300"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default DiscussSection;
