import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ServeRevi = () => {
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

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    return (
        <div className="container w-full flex flex-col lg:flex-row items-start justify-center gap-8">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col gap-6">
                <h2 className="bgHeading">Services</h2>
                <p className="paragraph">
                    Hear what our clients have to say about our work, communication, and reliability.
                    Each review reflects our dedication to quality and excellence.
                </p>
            </div>

            {/* Right Section (Carousel) */}
            <div className="w-full lg:w-1/2 relative flex flex-col items-end">
                <div className="w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="min-w-full border-2 border-dashed border-gray-600 rounded-2xl p-5 sm:p-6 relative"
                                style={{ backgroundColor: "transparent" }}
                            >
                                {/* Corner Borders */}
                                <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gray-500 rounded-tl-md"></span>
                                <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gray-500 rounded-tr-md"></span>
                                <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gray-500 rounded-bl-md"></span>
                                <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gray-500 rounded-br-md"></span>

                                {/* Slide Content */}
                                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                    {/* Left */}
                                    <div className="md:w-1/2 w-full">
                                        <h3 className="headingColor font-semibold mb-2">{review.title}</h3>
                                        <p className="paragraph mb-3">{review.text}</p>
                                        <span className="paragraph">{review.date}</span>
                                    </div>

                                    {/* Right */}
                                    <div className="md:w-1/2 w-full">
                                        <div className="font-bold mb-2">{review.rating.toFixed(1)}</div>
                                        <div className="flex mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className="text-yellow-400" />
                                            ))}
                                        </div>
                                        <ul className="border-t border-gray-700 pt-3 space-y-2">
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
                <div className="flex gap-5 mt-5 justify-end w-full pr-1 sm:pr-4">
                    <button
                        onClick={prevSlide}
                        className="bg-gray-800/70 p-3 sm:p-4 rounded-full hover:bg-gray-700 transition shadow-md"
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="bg-gray-800/70 p-3 sm:p-4 rounded-full hover:bg-gray-700 transition shadow-md"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServeRevi;
