import React from 'react'
import ViewButton from './ViewButton'

const IndusExperties = () => {
    const expertiseData = [
        { icon: "/img/realEstate.avif", text: "Real Estate" },
        { icon: "/img/health.avif", text: "Healthcare & Wellness" },
        { icon: "/img/commerce.avif", text: "E-commerce & Marketplaces" },
        { icon: "/img/logistics.avif", text: "Logistics & Transportation" },
        { icon: "/img/media.avif", text: "Media & Entertainment" },
        { icon: "/img/food.avif", text: "Food & Delivery" },
        { icon: "/img/travel.avif", text: "Travel & Booking" },
        { icon: "/img/socials.avif", text: "Social Networking" },
    ]

    return (
        <div className="container flex flex-wrap justify-start items-center text-left md:gap-0 gap-10">
            {/* ✅ Left Side (35%) */}
            <div className="w-full md:w-[35%] flex flex-col gap-10 text-left items-start mb-10 md:mb-0">
                <h2 className="heading text-left">
                    Industry <br className="inline" /> Expertise
                </h2>

                {/* 👇 Button visible only on medium & large screens */}
                <div className="hidden md:block text-left">
                    <ViewButton name="Learn More" link="/expertise" align="left" />
                </div>
            </div>

            {/* ✅ Right Side (65%) */}
            <div className="w-full md:w-[65%] grid grid-cols-2 gap-6 text-left">
                {expertiseData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row md:items-center items-start justify-start gap-3 text-left"
                    >
                        <img
                            src={item.icon}
                            alt={item.text}
                            className="w-16 h-16 object-contain"
                            onError={(e) => (e.target.style.display = 'none')}
                        />
                        <span className="paragraph text-left">{item.text}</span>
                    </div>
                ))}
            </div>

            {/* ✅ Button visible only on small screens (below list) */}
            <div className="w-full md:hidden mt-6 flex md:justify-start justify-center text-center">
                <ViewButton name="Learn More" link="/expertise" align="left" />
            </div>
        </div>
    )
}

export default IndusExperties
