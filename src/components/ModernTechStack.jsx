import React from "react";

const techData = [
  { logo: "/img/html.png", title: "Frontend", name: "HTML" },
  { logo: "/img/css.png", title: "Frontend", name: "CSS" },
  { logo: "/img/js.webp", title: "Frontend", name: "JavaScript" },
  { logo: "/img/react.png", title: "Frontend", name: "React" },
  { logo: "/img/redux.png", title: "Frontend", name: "Redux" },
  { logo: "/img/react.png", title: "Mobile", name: "React Native" },
  { logo: "/img/next.png", title: "Framework", name: "Next.js" },
  { logo: "/img/node.js.png", title: "Backend", name: "Node.js" },
  { logo: "/img/aws.png", title: "Backend", name: "AWS" },
  { logo: "/img/mongodb.png", title: "Database", name: "MongoDB" },
  { logo: "/img/typescript.webp", title: "Language", name: "TypeScript" },
  { logo: "/img/python.png", title: "Language", name: "Python" },
  { logo: "/img/flutter.png", title: "Mobile", name: "Flutter" },
  { logo: "/img/wordpress.png", title: "CMS", name: "WordPress" },
];


const ModernTechStack = () => {
  return (
    <div className="container container_hide overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Heading */}
        <h2 className="bgHeading md:py-20 py-10 md:px-0 px-5 md:w-1/3">
          Tech Stack
          <br />
          Modern
        </h2>

        {/* Right Section */}
        <div className="w-full md:w-2/3 md:py-0 pb-20">
          {/* 🟢 Mobile view - 2 sliders (opposite direction) */}
          <div className="block md:hidden space-y-8">
            {/* Left to Right */}
            <div className="group overflow-hidden">
              <div className="flex animate-scroll-x-right gap-4">
                {[...techData, ...techData].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-start justify-center bg-[#26363b] rounded-2xl p-6 border border-white/20 shadow-md min-w-[200px]"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-12 h-12 mb-3 object-contain"
                    />
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="paragraph">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right to Left */}
            <div className="group overflow-hidden">
              <div className="flex animate-scroll-x-left gap-4">
                {[...techData, ...techData].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-start justify-center bg-[#26363b] rounded-2xl p-6 border border-white/20 shadow-md min-w-[200px]"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-12 h-12 mb-3 object-contain"
                    />
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-white/70">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 🟣 Desktop view - 3 vertical sliders */}
          <div className="hidden md:flex justify-center">
            {/* Slider 1 - Top to Bottom */}
            <div className="group h-[400px] w-1/3 overflow-hidden">
              <div className="animate-scrollY-down">
                {[...techData, ...techData].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-start justify-center bg-[#26363b] rounded-2xl p-6 m-3 border border-white/20 shadow-md"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-12 h-12 mb-3 object-contain"
                    />
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-white/70">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider 2 - Bottom to Top */}
            <div className="group h-[400px] w-1/3 overflow-hidden">
              <div className="animate-scrollY-up">
                {[...techData, ...techData].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-start justify-center bg-[#26363b] rounded-2xl p-6 m-3 border border-white/20 shadow-md"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-12 h-12 mb-3 object-contain"
                    />
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-white/70">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider 3 - Top to Bottom */}
            <div className="group h-[400px] w-1/3 overflow-hidden">
              <div className="animate-scrollY-down">
                {[...techData, ...techData].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-start justify-center bg-[#26363b] rounded-2xl p-6 m-3 border border-white/20 shadow-md"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-12 h-12 mb-3 object-contain"
                    />
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-white/70">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernTechStack;
