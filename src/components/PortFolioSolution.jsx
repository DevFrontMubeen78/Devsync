import React from "react";

const PortFolioSolution = () => {
  const solutions = [
    {
      id: 1,
      title: "Why?",
      image: "/img/img1Desktop.avif",
      bgColor: "#f5eee3",
      position: "right",
      content: [
        "In Sweden, finding a rental apartment can take years due to limited availability. In Stockholm, the average wait is 10 years, and up to 25 in the city center. With tenants rarely moving out, the market stays locked, and mobility is low.",
        "To ease this, Swedish law allows legal apartment swaps with landlord approval, giving people a way to move without waiting in line for years. So, Hemie is, quite literally, actively transforming the rental industry by offering their solution."
      ]
    },
    {
      id: 2,
      title: "What?",
      image: "/img/whatImg.png",
      bgColor: "#ffeccc",
      position: "left",
      content: [
        "Our collaboration resulted in the web app development featuring both a user interface and an admin panel. The platform uses a familiar matching algorithm: your ideal apartment, house, or room must find the perfect match – you are either interested, or not.",
        "The platform launched first in Sweden’s largest cities, where demand is highest, allowing us to gather valuable user feedback and plan a controlled, data-driven local level expansion – gradually scaling up with growing traction and future investment support."
      ]
    },
    {
      id: 3,
      title: "How?",
      image: "/img/img2Desktop.avif",
      bgColor: "#e3f1ff",
      position: "right",
      content: [
        "Our collaboration resulted in the web app development featuring both a user interface and an admin panel. The platform uses a familiar matching algorithm: your ideal apartment, house, or room must find the perfect match – you are either interested, or not.",
        "The platform launched first in Sweden’s largest cities, where demand is highest, allowing us to gather valuable user feedback and plan a controlled, data-driven local level expansion – gradually scaling up with growing traction and future investment support."
      ]
    }
  ];

  return (
    <div className="container">
      <h2 className="text_two color_one text-2xl md:text-4xl font-semibold mb-8">
        The Solution
      </h2>

      <div className="flex flex-col gap-6 md:gap-10">
        {solutions.map((item) => {
          const imageOrder =
            item.position === "right" ? "md:order-2" : "md:order-1";
          const textOrder =
            item.position === "right" ? "md:order-1" : "md:order-2";

          return (
            <div
              key={item.id}
              className="grid md:grid-cols-2 items-stretch md:gap-8 gap-4"
            >
              {/* Image Section */}
              <div
                className={`order-1 ${imageOrder} flex items-center justify-center rounded-3xl overflow-hidden min-h-[220px] md:min-h-[400px]`}
              >
                <img
                  className="w-full h-full object-contain rounded-2xl"
                  src={item.image}
                  alt={item.title}
                />
              </div>

              {/* Content Section */}
              <div
                className={`order-2 ${textOrder} md:p-10 p-4 rounded-3xl shadow-sm flex flex-col gap-3 justify-center text-left min-h-[220px] md:min-h-[400px]`}
                style={{ backgroundColor: item.bgColor }}
              >
                <h3 className="text_three color_one">{item.title}</h3>
                {item.content.map((para, idx) => (
                  <p key={idx} className="text_four color_three mb-2">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortFolioSolution;
