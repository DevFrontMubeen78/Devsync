import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import GetAQuote from '../../components/GetAQuote';

const reviews = [
  {
    title: "The Review",
    text: "Excellent service, quick response, and professional behavior. Highly recommended!",
    date: "Oct 10, 2025",
    rating: 5.0,
    details: [
      { label: "Quality", value: 5.0 },
      { label: "Schedule", value: 5.0 },
      { label: "Cost", value: 5.0 },
      { label: "Willing to Refer", value: 5.0 },
    ],
  },
  {
    title: "The Review",
    text: "Very cooperative team, delivered before deadline. Great experience overall.",
    date: "Sep 28, 2025",
    rating: 5.0,
    details: [
      { label: "Quality", value: 5.0 },
      { label: "Schedule", value: 5.0 },
      { label: "Cost", value: 5.0 },
      { label: "Willing to Refer", value: 5.0 },
    ],
  },
  {
    title: "The Review",
    text: "Top-notch work! I’m totally satisfied with the overall project execution.",
    date: "Aug 17, 2025",
    rating: 5.0,
    details: [
      { label: "Quality", value: 5.0 },
      { label: "Schedule", value: 5.0 },
      { label: "Cost", value: 5.0 },
      { label: "Willing to Refer", value: 5.0 },
    ],
  },
];

const WhyClientLove = ({ title }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <div className="container flex flex-col md:flex-col lg:flex-row justify-between gap-14">
      {/* LEFT SIDE */}
      <div className="lg:w-3/5 w-full flex flex-col gap-8">
        <h2 className="Heading3 secondaryColor">{title}</h2>
         <GetAQuote name="Contact Us" />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 relative flex flex-col items-center md:items-end">
        
        {/* Slider Wrapper */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="min-w-full border-2 border-dashed border-gray-600 rounded p-5 sm:p-6 relative"
                style={{ backgroundColor: "transparent" }}
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg_section p-5 rounded">
                  
                  {/* Left */}
                  <div className="md:w-1/2 w-full">
                    <h3 className="text_three color_two mb-2">{review.title}</h3>
                    <p className="text_five color_four mb-3">{review.text}</p>
                    <span className="bgParagraph">{review.date}</span>
                  </div>

                  {/* Right */}
                  <div className="md:w-1/2 w-full">
                    <div className="flex gap-3 mb-2 items-center">
                      <div className="font-bold">{review.rating.toFixed(1)}</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <ul className="border-t border-dashed border-gray-300 pt-3 space-y-2">
                      {review.details.map((item, i) => (
                        <li key={i} className="list flex justify-between">
                          <span>{item.label}</span>
                          <span>{item.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex gap-5 mt-5 justify-end w-full">
          <button
            onClick={prevSlide}
            className="text-2xl cursor-pointer"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="text-2xl cursor-pointer"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyClientLove;
