import React from "react";
import GetAQuote from "./GetAQuote";

const DiscussSection = () => {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-between gap-10 border border-white/20 rounded-3xl md:p-12 p-6">
      <h2 className="text_two color_two">
        HAVE A GREAT IDEA?
        <br className="inline" />
        LET’S DISCUSS IT!
      </h2>

      <GetAQuote name="Contact Us" />
    </div>
  );
};

export default DiscussSection;
