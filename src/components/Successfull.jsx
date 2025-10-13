import React, { useEffect, useState } from 'react';

const countersData = [
  { label: "Client satisfaction rate", value: 100, suffix: "%" },
  { label: "Solution release", value: 100, suffix: "+" },
  { label: "Years in business", value: 8, suffix: "" },
  { label: "Happy end-users", value: 250, suffix: "M+" },
  { label: "Clutch rating", value: 5, suffix: ".0" },
];

const logos = [
  "/img/designRush.6e9aaeda.svg",
  "/img/clutch.a5c29e19.svg",
  "/img/techBehemoths.b81cab89.svg",
  "/img/goodFirms.360e3aab.svg",
];

const Successfull = () => {
  const [counts, setCounts] = useState(countersData.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increments = countersData.map(c => c.value / steps);

    const interval = setInterval(() => {
      setCounts(prev =>
        prev.map((count, i) =>
          count + increments[i] >= countersData[i].value
            ? countersData[i].value
            : count + increments[i]
        )
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='paddingTop bg-[#1f2b2f]'>
      <div className="text-white py-12 px-5 container">
        <div className="max-w-7xl mx-auto">

          {/* First Row - Animated Counters */}
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-6 mb-12 text-center">
            {countersData.map((counter, index) => (
              <div key={index} className="mb-6">
                <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold">
                  {Math.floor(counts[index])}{counter.suffix}
                </h2>
                <p className="mt-1 text-sm sm:text-base">{counter.label}</p>
              </div>
            ))}
          </div>

          {/* Second Row - Logos */}
          <div className="flex flex-wrap justify-around items-center gap-8 border border-white/30 rounded-[50px] md:p-[100px] p-[50px]">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="max-h-10 object-contain"
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Successfull;
