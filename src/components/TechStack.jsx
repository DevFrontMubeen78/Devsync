import React from "react";
import { Send } from "lucide-react";

const TechStack = () => {
    const techData = [
        { logo: "/img/js.webp" },
        { logo: "/img/react.png" },
        { logo: "/img/node.js.png" },
        { logo: "/img/mongodb.png" },
        { logo: "/img/python.png" },
        { logo: "/img/typescript.webp" },
        { logo: "/img/wordpress.png" },
    ];

    const teamData = [
        { label: "Senior", value: "60%" },
        { label: "Middle", value: "30%" },
        { label: "Junior", value: "10%" },
    ];

    return (
        <div className="container mx-auto flex flex-col md:gap-16 gap-10">
            {/* Header */}
            <div className="mb-12 flex flex-col gap-10">
                <h2 className="text_two color_two">Technology Stack</h2>

                {/* Logos */}
                <div className="flex flex-wrap justify-between lg:gap-14 md:gap-10 gap-2">
                    {techData.map((tech, index) => (
                        <img
                            key={index}
                            src={tech.logo}
                            alt={`tech-logo-${index}`}
                            className="lg:w-18 lg:h-18 md:w-14 md:h-14 w-9 h-9 object-contain"
                        />
                    ))}
                </div>
            </div>
            {/* Team Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text_two color_two">
                        50+ in-house <br /> specialists
                    </h2>
                </div>

                <div className="flex justify-between gap-4 flex-wrap">
                    {teamData.map((item, i) => (
                        <div
                            key={i}
                            className="relative border-2 border-[#a4a2a2] p-5 flex flex-col items-center justify-center text_two color_two md:w-36 md:h-36 w-20 h-20 sm:w-24 sm:h-24"
                        >
                            <span
                                className={`absolute animated-label px-3 py-2 text_four z-10 color_one bg-[#fff] rounded-tr-4xl rounded-tl-4xl rounded-bl-4xl ${item.label === "Middle" ? "reverse-animation" : ""
                                    }`}
                            >
                                {item.label}

                                {/* Bottom-right corner ke liye Telegram arrow */}
                                <Send className="absolute -right-4 w-8 h-8 rotate-120 text-white" />
                            </span>

                            {/* Corner dots */}
                            <div className="absolute z-0 -top-1 -left-1 w-3 h-3 bg-white"></div>
                            <div className="absolute z-0 -top-1 -right-1 w-3 h-3 bg-white"></div>
                            <div className="absolute z-0 -bottom-1 -left-1 w-3 h-3 bg-white"></div>
                            <div className="absolute z-0 -bottom-1 -right-1 w-3 h-3 bg-white"></div>

                            {item.value && (
                                <span className="text-2xl md:text-4xl z-0">{item.value}</span>
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
