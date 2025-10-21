import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Mail, Linkedin } from "lucide-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const teamMembers = [
  {
    img: "/img/kateGargun.png",
    name: "Kerin Lee",
    designation: "CEO",
    email: "mailto:ali.raza@company.com",
    linkedin: "#",
  },
  {
    img: "/img/alinaMankevich.png",
    name: "Ch Mia Khalifa",
    designation: "Designer",
    email: "mailto:fatima.ali@company.com",
    linkedin: "#",
  },
  {
    img: "/img/mariaKravchinskaja.png",
    name: "Johny Gujjar",
    designation: "Marketing Lead",
    email: "mailto:sara.khan@company.com",
    linkedin: "#",
  },
  {
    img: "/img/andreySavich.png",
    name: "Sunney Jutt",
    designation: "Developer",
    email: "mailto:ahmed.nawaz@company.com",
    linkedin: "#",
  },
  {
    img: "/img/kateGargun.png",
    name: "Kate Gargun",
    designation: "HR Manager",
    email: "mailto:bilal.hussain@company.com",
    linkedin: "#",
  },
];

export default function TeamSlider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // 🧠 Listen for screen resize
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const prevSlide = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return (
    <div className="container w-full">
      {/* Header */}
        <h2 className="text_two color_one">Our Team</h2>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          setSlidesPerView(swiper.params.slidesPerView);
        }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="transition-all"
      >
        {teamMembers.map((member, i) => {
          // 3rd visible slide index
          const zoomedIndex = activeIndex + 2;
          const isZoomed = i === zoomedIndex && slidesPerView > 1;

          return (
            <SwiperSlide key={i}>
              <div
                className={`flex flex-col items-center text-center transition-all duration-300 ${
                  isZoomed
                    ? `scale-110 ${
                        isDesktop ? "shadow-2xl" : ""
                      } bg-white rounded-2xl py-4`
                    : "scale-100"
                }`}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mb-3 object-cover"
                />
                <h3 className="text_three color_one">{member.name}</h3>
                <p className="text_five color_three mb-2">
                  {member.designation}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={member.email}
                    className="text-gray-600 hover:text-gray-800"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="text-gray-600 hover:text-gray-800"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Buttons BELOW the slider */}
      <div className="flex justify-center sm:justify-end gap-4 mt-4">
        <button
          onClick={prevSlide}
          className="bg_section cursor-pointer p-3 sm:p-4 rounded-full hover:bg-gray-700 transition shadow-md"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg_section cursor-pointer p-3 sm:p-4 rounded-full hover:bg-gray-700 transition shadow-md"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
