import React from "react";
import GetAQuote from "./GetAQuote";

const DiscussSection = () => {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-between gap-10 border border-white/20 rounded-3xl p-12">
      <h2 className="text-2xl md:text-4xl font-extrabold text-center md:text-left leading-tight">
        HAVE A GREAT IDEA?
        <br className="inline" />
        LET’S DISCUSS IT!
      </h2>

      <GetAQuote name="Contact Us" />
    </div>
  );
};

export default DiscussSection;
