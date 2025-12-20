import React from "react";

const services = [
  "UI/UX Design Services",
  "Consulting Services",
  "UI/UX Design Services",
  "Consulting Services",
  "UI/UX Design Services",
  "Consulting Services",
  "UI/UX Design Services",
  "Consulting Services",
  "UI/UX Design Services",
  "Consulting Services",
];

const IndWeServ = () => {
  const sliderData = [...services, ...services]; // duplicate for seamless scroll

  return (
    <div className="overflow-hidden w-full relative bg-[#836aff] p-4">
      <div className="flex animate-scroll whitespace-nowrap">
        {sliderData.map((item, index) => (
          <div
            key={index}
            className="flex items-center primaryColor Heading5 font-semibold mx-4"
          >
            {/* Icon */}
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M9.51859 19.008C9.15859 16.944 7.69459 14.352 4.91059 12.264C3.54259 11.232 2.15059 10.56 0.782595 10.272V9.264C3.49459 8.616 6.15859 6.792 7.86259 4.32C8.72659 3.072 9.27859 1.848 9.51859 0.576H10.5266C10.9346 3 12.8066 5.688 15.3506 7.488C16.5986 8.376 17.8946 8.976 19.2146 9.264V10.272C16.5506 10.824 13.4546 13.2 11.9186 15.624C11.1506 16.848 10.6946 17.976 10.5266 19.008H9.51859Z"
                fill="#ffffff"
              />
            </svg>
            {/* Text */}
            <h2 className="h2">{item}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndWeServ;
