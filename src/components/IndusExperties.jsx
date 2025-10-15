import React from 'react'
import ViewButton from './ViewButton'

const IndusExperties = () => {
    const expertiseData = [
        { icon: "/img/health.avif", text: "Web Development" },
        { icon: "/img/health.avif", text: "App Development" },
        { icon: "/img/health.avif", text: "AI & Machine Learning" },
        { icon: "/img/health.avif", text: "Cloud Solutions" },
        { icon: "/img/health.avif", text: "Cyber Security" },
        { icon: "/img/health.avif", text: "UI/UX Design" },
        { icon: "/img/health.avif", text: "SEO Optimization" },
        { icon: "/img/health.avif", text: "Blockchain" },
    ]

    return (
        <div className="container flex flex-wrap">
            {/* ✅ Left Side (35%) */}
            <div className="w-full md:w-[35%] flex flex-col gap-10 text-center md:text-left mb-10 md:mb-0">
                <h2 className="uppercase text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                    Industry <br className='inline' /> Expertise
                </h2>

                {/* 👇 Button visible only on medium & large screens */}
                <div className="hidden md:block">
                    <ViewButton name="Learn More" align='left' />
                </div>
            </div>

            {/* ✅ Right Side (65%) */}
            <div className="w-full md:w-[65%] grid grid-cols-2 gap-6 p-3">
                {expertiseData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-col md:flex-row items-center gap-3 text-center md:text-left justify-center sm:justify-start"
                    >
                        <img
                            src={item.icon}
                            alt={item.text}
                            className="w-16 h-16 md:w-16 md:h-16 object-contain"
                            onError={(e) => e.target.style.display = 'none'}
                        />
                        <span className="text-gray-700 font-medium text-base sm:text-lg">{item.text}</span>
                    </div>
                ))}
            </div>

            {/* ✅ Button visible only on small screens (below list) */}
            <div className="w-full flex justify-center md:hidden mt-6">
                <ViewButton name="Learn More" />
            </div>
        </div>
    )
}

export default IndusExperties
