import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ViewButton = ({ name, link, align = "center" }) => {
  // Alignment control
  const alignmentClass =
    align === "left"
      ? "justify-start"
      : align === "right"
      ? "justify-end"
      : "justify-center";

  return (
    <div className={`flex ${alignmentClass}`}>
      <Link
        to={link}
        className="group inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 font-semibold px-8 py-3 rounded-full 
                   hover:bg-blue-600 hover:text-white transition-all duration-300"
      >
        {name}
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ViewButton;
