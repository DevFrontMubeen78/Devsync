import React from "react";

const logos = [
  "/img/award1.avif",
  "/img/award2.avif",
  "/img/award3.avif",
  "/img/award4.avif",
  "/img/award5.avif",
  "/img/award6.avif",
];

const TopDev = () => {
  return (
    <div className="container flex flex-col gap-10 overflow-hidden">
      <h1 className="xl:text-5xl md:text-4xl text-3xl leading-tight font-extrabold uppercase text-center md:text-left">
        Among The Top App <br className="inline" />
        Developers Worldwide
      </h1>

      {/* Slider Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-12">
          {[...logos, ...logos].map((item, index) => (
            <img
              key={index}
              className="w-24 sm:w-28 md:w-30 lg:w-34 xl:w-38 flex-shrink-0 object-contain"
              src={item}
              alt={`Logo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDev;
