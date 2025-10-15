import React from "react";

const cards = [
  {
    id: 1,
    number: "01",
    title: "Creative Solutions",
    points: ["/ Problem Solving", "/ Innovative Ideas", "/ Smart Execution"],
    image: "/img/noise1.png",
  },
  {
    id: 2,
    number: "02",
    title: "Expert Team",
    points: ["/ Skilled Developers", "/ UI/UX Designers", "/ Project Managers"],
    image: "/img/noise2.png",
  },
  {
    id: 3,
    number: "03",
    title: "Modern Tech",
    points: ["/ React & Next.js", "/ Node.js Backend", "/ Cloud Ready"],
    image: "/img/noise3.png",
  },
  {
    id: 4,
    number: "04",
    title: "Client Focused",
    points: ["/ Clear Communication", "/ On-time Delivery", "/ Long-term Support"],
    image: "/img/noise4.png",
  },
];

const WhySolveIT = () => {
  return (
    <div className="container">
      {/* Heading */}
      <h1 className="xl:text-5xl md:text-4xl text-3xl leading-tight font-extrabold uppercase mb-16">
        Why Solve IT
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group relative h-[350px] rounded-[25px] overflow-hidden shadow-lg cursor-pointer border border-white/10 bg-cover bg-center"
            style={{
              backgroundImage: `url(${card.image})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 transition-all duration-500"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
              {/* Title block (bottom by default) */}
              <div className="transition-all duration-700 ease-in-out group-hover:translate-y-[-100px] mb-4">
                <h1 className="text-6xl font-extrabold leading-none mb-2">
                  {card.number}
                </h1>
                <h2 className="text-xl font-bold">{card.title}</h2>
              </div>

              {/* Hidden List — animates from bottom to top on hover */}
              <ul className="absolute bottom-0 left-0 w-full p-6 space-y-2 text-lg opacity-0 translate-y-[80px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                {card.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySolveIT;
