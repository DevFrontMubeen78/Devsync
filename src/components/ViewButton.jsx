import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ViewButton = ({ name, link, align = "center", variant = "blue", extraClass = "" }) => {
  // Alignment control
  const alignmentClass =
    align === "left"
      ? "md:justify-start justify-center"
      : align === "right"
      ? "justify-end"
      : "justify-center";

  // Color variants → easily extendable
  const variantClasses = {
    blue: "border-[#025c9e] text-[#025c9e] hover:bg-[#025c9e] hover:text-white",
    green: "border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
    red: "border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
    yellow: "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black",
    gray: "border-gray-500 text-gray-300 hover:bg-gray-500 hover:text-white",
  };

  // Default to blue if no match
  const colorClass = variantClasses[variant] || variantClasses.blue;

  return (
    <div className={`flex ${alignmentClass}`}>
      <Link
        to={link}
        className={`group inline-flex items-center gap-2 border-2 font-semibold px-8 py-3 rounded-full 
                    transition-all duration-300 ${colorClass} ${extraClass}`}
      >
        {name}
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ViewButton;
