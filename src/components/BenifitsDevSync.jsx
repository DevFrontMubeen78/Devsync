import React from "react";
import { FaCheck } from "react-icons/fa6"; // ✅ tick icon

const benefits = [
  { benefit: "Flexible working conditions: hours and location" },
  { benefit: "Collaborative and inclusive team culture" },
  { benefit: "Opportunities for professional growth" },
  { benefit: "Cutting-edge tools and technologies" },
  { benefit: "Health and wellness programs" },
  { benefit: "Recognition and reward system" },
];

const BenefitsDevSync = () => {
  return (
    <div className="flex flex-col md:gap-10 gap-10 overflow-hidden">
      {/* ✅ Heading */}
      <h1 className="container text_two color_two font-semibold leading-tight text-2xl">
        Benefits of working at DevSync
      </h1>

      {/* ✅ Scrolling Benefit Items */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-12">
          {[...benefits, ...benefits].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 min-w-max border border-white rounded-full p-2"
            >
              {/* ✅ White circular tick icon */}
              <div className="bg-white text-[#075fa1] rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                <FaCheck size={18} />
              </div>

              {/* ✅ Benefit text */}
              <h2 className="text-four font-medium color_two">
                {item.benefit}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsDevSync;
