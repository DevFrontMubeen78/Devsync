import React from "react";
import { ArrowLeft } from "lucide-react";
import ViewButton from "./ViewButton";


const Portfolio = () => {
    const portfolioData = [
        {
            id: 1,
            title: "Project Management Dashboard",
            category: "Startup",
            type: "iOS & Mac",
            service: "According to iOS and Mac",
            result: "1.5M people downloaded",
            tag: "Productivity",
            image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
            link: "#",
        },
        {
            id: 2,
            title: "E-Commerce Storefront",
            category: "Business",
            type: "Web App",
            service: "Custom Shopify integration",
            result: "250K monthly visitors",
            tag: "Commerce",
            // ✅ Updated image that always loads
            image:
                "https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.webp?s=1024x1024&w=is&k=20&c=Gsr6lZkBHjjeP5o18w9_mvnWxMZBqB-ncOi6tqh87hM=",
            link: "#",
        },
        {
            id: 3,
            title: "AI Analytics Dashboard",
            category: "Tech",
            type: "Web & Mobile",
            service: "AI-powered insights system",
            result: "90% increase in efficiency",
            tag: "Analytics",
            image:
                "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
            link: "#",
        },
    ];

    return (
        <div className="container">
            <h2 className="text-2xl md:text-5xl font-extrabold text-center md:text-left uppercase mb-12">
                Portfolio
            </h2>
            <div className="flex flex-col gap-14">
                <div className="space-y-10">
                    {portfolioData.map((item, index) => (
                        <a
                            key={item.id}
                            href={item.link}
                            className={`block relative flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                } bg-[#243238] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300`}
                        >
                            {/* Left / Right: Image */}
                            <div
                                className="md:w-1/2 h-64 md:h-auto bg-cover bg-center"
                                style={{ backgroundImage: `url(${item.image})` }}
                            ></div>

                            {/* Right / Left: Content */}
                            <div className="md:w-1/2 p-8 flex flex-col justify-between">
                                <div>
                                    <p className="inline-block px-5 py-1 bg-[#2e3b40] text-sm uppercase rounded-full mb-4">
                                        {item.tag}
                                    </p>

                                    <h3 className="text-2xl md:text-3xl font-bold mb-6">
                                        {item.title}
                                    </h3>

                                    <div className="grid grid-cols-2 gap-6 text-sm md:text-base">
                                        <div>
                                            <h4 className="font-semibold text-gray-400">Category</h4>
                                            <p>{item.category}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-400">Type</h4>
                                            <p>{item.type}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-400">Service</h4>
                                            <p>{item.service}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-400">Result</h4>
                                            <p>{item.result}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Button → Always Left-Aligned */}
                                <div className="mt-8 flex justify-start">
                                    <div className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-semibold w-fit">
                                        <ArrowLeft className="w-5 h-5" />
                                        Read Full Course
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <ViewButton extraClass="border-white text-white" name="explore more our work" />
            </div>
        </div>
    );
};

export default Portfolio;
