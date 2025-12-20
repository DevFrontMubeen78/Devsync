import React from "react";
import Logos from "./Logos";

const TopDev = () => {
  return (
    <div className="container flex flex-col md:gap-20 gap-14 overflow-hidden">
      {/* ✅ Heading follows same global typography structure */}
      <h1 className="Heading3 primaryColor">
        Among The Top App <br className="inline" />
        Developers Worldwide
      </h1>

      <Logos/>
    </div>
  );
};

export default TopDev;
