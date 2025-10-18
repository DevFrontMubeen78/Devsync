import React from "react";
import { ArrowLeft } from "lucide-react";
import ViewButton from "./ViewButton";

const Portfolio = ({ limit, showButton = false }) => {
    const portfolioData = [
        {
            id: 1,
            title: "Project Management Dashboard",
            category: "Startup",
            type: "iOS & Mac",
            service: "According to iOS and Mac",
            result: "1.5M people downloaded",
            tag: "Productivity",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
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
            image: "https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.webp?s=1024x1024&w=is&k=20&c=Gsr6lZkBHjjeP5o18w9_mvnWxMZBqB-ncOi6tqh87hM=",
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
            image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
            link: "#",
        },
        {
            id: 4,
            title: "Healthcare App",
            category: "Medical",
            type: "Mobile",
            service: "Appointment & tracking system",
            result: "Used by 500 hospitals",
            tag: "Health",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
            link: "#",
        },
        {
            id: 5,
            title: "Real Estate Listing Platform",
            category: "Property",
            type: "Web & Mobile",
            service: "Property management & booking system",
            result: "20K daily listings",
            tag: "Real Estate",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
            link: "#",
        },
        {
            id: 6,
            title: "Food Delivery App",
            category: "Startup",
            type: "Mobile",
            service: "Custom delivery and tracking system",
            result: "Over 2M active users",
            tag: "Delivery",
            image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80",
            link: "#",
        },
        {
            id: 7,
            title: "Education LMS Platform",
            category: "Education",
            type: "Web App",
            service: "Online learning management system",
            result: "100K enrolled students",
            tag: "E-Learning",
            image: "https://images.unsplash.com/photo-1584697964198-2e7f7f1a2a3f?auto=format&fit=crop&w=800&q=80",
            link: "#",
        },
        {
            id: 8,
            title: "Travel Booking Portal",
            category: "Tourism",
            type: "Web App",
            service: "Flights, hotels & tours booking system",
            result: "50K bookings/month",
            tag: "Travel",
            image: "https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=800&q=80",
            link: "#",
        },
        {
            id: 9,
            title: "Fitness Tracker Dashboard",
            category: "Health & Fitness",
            type: "Mobile",
            service: "Workout & diet tracking app",
            result: "500K downloads worldwide",
            tag: "Fitness",
            image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=800&q=80",
            link: "#",
        },
        {
            id: 10,
            title: "Crypto Trading Dashboard",
            category: "Finance",
            type: "Web & Mobile",
            service: "Real-time trading analytics and alerts",
            result: "80% uptime improvement",
            tag: "FinTech",
            image: "https://images.unsplash.com/photo-1621504450181-5e4b3f3d0c65?auto=format&fit=crop&w=800&q=80",
            link: "#",
        },
    ];

    const dataToShow = limit ? portfolioData.slice(0, limit) : portfolioData;

    return (
        <div className="container flex flex-col gap-10">
            <h2 className="bgHeading uppercase">
                Portfolio
            </h2>
            <div className="flex flex-col md:gap-20 gap-16">
                    {dataToShow.map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            className="block relative flex flex-col md:flex-row bg-[#243238] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
                        >
                            {/* Left Side Image */}
                            <div
                                className="md:w-1/2 h-64 md:h-auto bg-cover bg-center"
                                style={{ backgroundImage: `url(${item.image})` }}
                            ></div>

                            {/* Right Side Content */}
                            <div className="md:w-1/2 md:p-8 p-4 flex flex-col gap-6 justify-between">
                                <div className="">
                                    <p className="inline-block px-5 py-1 bg-[#5b696f] text-sm rounded-full mb-4">
                                        {item.tag}
                                    </p>

                                    <h3 className="text-xl md:text-2xl font-bold mb-6 uppercase">
                                        {item.title}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-2 gap-10 text-sm md:text-base">
                                    <div className="flex flex-col gap-2">
                                        <h4 className="font-semibold text-lg uppercase">Category</h4>
                                        <p className="bgParagraph">{item.category}</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h4 className="font-semibold text-lg uppercase">Type</h4>
                                        <p className="bgParagraph">{item.type}</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h4 className="font-semibold text-lg uppercase">Service</h4>
                                        <p className="bgParagraph">{item.service}</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h4 className="font-semibold text-lg uppercase">Result</h4>
                                        <p className="bgParagraph">{item.result}</p>
                                    </div>
                                </div>

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

                {/* 👇 Show button only if showButton=true */}
                {showButton && (
                    <ViewButton extraClass="border-white text-white" name="explore more our work" link="/portfolio" />
                )}
            </div>
    );
};

export default Portfolio;
