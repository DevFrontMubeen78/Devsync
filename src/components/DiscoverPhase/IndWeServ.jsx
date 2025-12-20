import React, { useEffect, useState } from "react";

const IndWeServ = () => {
  const industries = [
    "E-commerce",
    "Healthcare",
    "Real estate",
    "Artificial Intelligence",
    "Travel and booking",
    "Transportation",
    "Social and streaming",
    "Education",
    "Finance",
  ];

  const sliderData = [...industries, ...industries];

  const sizeData = [
    { percentage: 55, label: "Startups" },
    { percentage: 35, label: "Medium size companies" },
    { percentage: 10, label: "Fortune 500 companies" },
  ];

  const [counts, setCounts] = useState(sizeData.map(() => 0));

  useEffect(() => {
    const intervals = sizeData.map((item, index) => {
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < item.percentage) {
            newCounts[index] += 1;
          }
          return newCounts;
        });
      }, 20); // Adjust speed here
    });

    // Cleanup intervals
    return () => intervals.forEach((id) => clearInterval(id));
  }, [sizeData]);

  return (
    <div className="container">
      <div className="flex flex-col gap-10">
        <h2 className="Heading3 secondaryColor">Industries we serve</h2>

        {/* Slider directly under heading */}
        <div className="overflow-hidden w-full relative bg-[#253135] p-4">
          <div className="flex animate-scroll whitespace-nowrap">
            {sliderData.map((item, index) => (
              <div
                key={index}
                className="flex items-center Text3 secondaryColor mx-4"
              >
                <span className="mr-2 Text3 GlobleTextColor">/</span> {item}
              </div>
            ))}
          </div>
        </div>

        {/* Container with border */}
        <div className="relative border border-gray-200">
          {/* Corner squares */}
          <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg_section border border-secondary"></div>
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg_section border border-secondary"></div>
          <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg_section border border-secondary"></div>
          <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg_section border border-secondary"></div>

          {/* Size Range title */}
          <div className="absolute -top-4 left-6 bg-[#1f2b2f] px-2 Heading5 secondaryColor">
            Size Range
          </div>

          {/* Percent items row */}
          <div className="flex flex-col md:flex-row justify-between gap-6 paddingY-axis">
            {sizeData.map((item, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col md:gap-6 gap-0 items-center"
              >
                <div className="Heading2 secondaryColor">{counts[index]}%</div>
                <div className="Text3 secondaryColor">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndWeServ;
