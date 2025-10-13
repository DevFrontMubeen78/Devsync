import React from "react";
import { ArrowRight } from "lucide-react";

const slides = [
    { id: 1, image: "/img/productivityAppDesktop.avif", link: "#" },
    { id: 2, image: "/img/productivityAppDesktop.avif", link: "#" },
    { id: 3, image: "/img/productivityAppDesktop.avif", link: "#" },
    { id: 4, image: "/img/productivityAppDesktop.avif", link: "#" },
    { id: 5, image: "/img/productivityAppDesktop.avif", link: "#" },
];

const ImageSlider = () => {
    const repeatedSlides = [...slides, ...slides];

    // Prevent default page reload on click
    const handleClick = (e) => e.preventDefault();

    return (
        <section className="w-full py-10 overflow-hidden">
            <div className="slider-wrapper group relative">
                <div className="slider-track flex w-[200%] animate-scroll gap-8 group-hover:[animation-play-state:paused]">
                    {repeatedSlides.map((slide, index) => (
                        <div
                            key={index}
                            className="relative w-[30%] flex-shrink-0 rounded-[50px] overflow-hidden cursor-pointer group/item"
                        >
                            {/* Image */}
                            <a href={slide.link} onClick={handleClick}>
                                <img
                                    src={slide.image}
                                    alt={`Slide ${slide.id}`}
                                    className="w-full h-[200px] sm:h-[260px] md:h-[270px] lg:h-[280px] rounded-[50px] object-cover sm:object-cover md:object-contain"
                                />
                            </a>

                            {/* Explore Button */}
                            <a
                                href={slide.link}
                                onClick={handleClick}
                                className="hidden md:flex absolute bottom-0 right-13 bg-white text-dark px-6 py-5 rounded-[50px] rounded-tr-[0px]
                                           items-center gap-2 transition-all duration-300 font-bold text-lg"
                            >
                                <span>Explore Now</span>
                                <ArrowRight className="relative-top-0.5 transition-transform duration-300 group-hover/item:translate-x-1 -rotate-45" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageSlider;
