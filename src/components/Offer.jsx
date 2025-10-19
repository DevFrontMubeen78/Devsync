import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import ViewButton from "../components/ViewButton";

const cardsData = [
  {
    title: "Creative Strategy",
    desc: "We build design-driven strategies for brands that inspire trust and engagement.",
    icon: "/img/icon1.avif",
    link: "/services/creative-strategy",
  },
  {
    title: "UI/UX Design",
    desc: "Crafting intuitive user experiences that feel natural and efficient.",
    icon: "/img/icon2.avif",
    link: "/services/ui-ux",
  },
  {
    title: "Web Development",
    desc: "Delivering high-performance, scalable websites and apps.",
    icon: "/img/icon3.avif",
    link: "/services/web-development",
  },
  {
    title: "Brand Identity",
    desc: "Building recognizable and strong brand identities that last.",
    icon: "/img/icon4.avif",
    link: "/services/brand-identity",
  },
  {
    title: "Digital Marketing",
    desc: "Helping your business grow online with effective strategies.",
    icon: "/img/icon5.avif",
    link: "/services/digital-marketing",
  },
  {
    title: "Product Launch",
    desc: "We assist in every step from ideation to successful product launch.",
    icon: "/img/icon6.avif",
    link: "/services/product-launch",
  },
];

const Offer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container flex flex-col gap-10">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left Column: Heading + First Column Cards */}
        <div>
          {/* Heading */}
          <h1 className="text_two color_one mb-10">
            What we offer
          </h1>

          {/* Left Column Cards (indexes: 0, 2, 4) */}
          <div className="flex flex-col gap-8 mt-10">
            {cardsData
              .filter((_, i) => i % 2 === 0)
              .map((card, index) => {
                const actualIndex = index * 2;
                const isActive = activeIndex === actualIndex;

                return (
                  <a
                    href={card.link}
                    key={actualIndex}
                    onMouseEnter={() => setActiveIndex(actualIndex)}
                    className={`group block transition-all duration-500 p-8 rounded-[50px] cursor-pointer no-underline ${isActive
                        ? "bg-[#1f2b2f] text-white"
                        : "bg-[#f4f5f6] text-[#1f2b2f] hover:bg-[#1f2b2f] hover:text-white"
                      }`}
                  >
                    {/* Top Row: Icon + Arrow */}
                    <div className="flex items-center justify-between mb-6">
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="w-16 h-16 transition-all duration-500"
                      />
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-500 opacity-0 ${isActive
                            ? "opacity-100 border-white bg-white/10"
                            : "group-hover:opacity-100 border-[#1f2b2f] group-hover:border-white group-hover:bg-white/10"
                          }`}
                      >
                        <ArrowRight
                          className={`w-5 h-5 transition-all duration-500 ${isActive
                              ? "text-white"
                              : "text-[#1f2b2f] group-hover:text-white"
                            }`}
                        />
                      </div>
                    </div>

                    <h3 className="text_three mb-3">{card.title}</h3>
                    {/* ✅ Global paragraph class used here */}
                    <p className="text_four">{card.desc}</p>
                  </a>
                );
              })}
          </div>
        </div>

        {/* Right Column Cards (indexes: 1, 3, 5) */}
        <div className="flex flex-col gap-8">
          {cardsData
            .filter((_, i) => i % 2 === 1)
            .map((card, index) => {
              const actualIndex = index * 2 + 1;
              const isActive = activeIndex === actualIndex;

              return (
                <a
                  href={card.link}
                  key={actualIndex}
                  onMouseEnter={() => setActiveIndex(actualIndex)}
                  className={`group block transition-all duration-500 p-8 rounded-[50px] cursor-pointer no-underline ${isActive
                      ? "bg-[#1f2b2f] text-white"
                      : "bg-[#f5f8fb] text-[#1f2b2f] hover:bg-[#1f2b2f] hover:text-white"
                    }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-16 h-16 transition-all duration-500"
                    />
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-500 opacity-0 ${isActive
                          ? "opacity-100 border-white bg-white/10"
                          : "group-hover:opacity-100 border-[#1f2b2f] group-hover:border-white group-hover:bg-white/10"
                        }`}
                    >
                      <ArrowRight
                        className={`w-5 h-5 transition-all duration-500 ${isActive
                            ? "text-white"
                            : "text-[#1f2b2f] group-hover:text-white"
                          }`}
                      />
                    </div>
                  </div>

                  <h3 className="text_three mb-3">{card.title}</h3>
                  {/* ✅ Global paragraph class used here */}
                  <p className="text_four">{card.desc}</p>
                </a>
              );
            })}
        </div>
      </div>
      <ViewButton name="More Services" link="/services" />
    </div>
  );
};

export default Offer;
