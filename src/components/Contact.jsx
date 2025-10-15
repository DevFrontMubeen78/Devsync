import React, { useState } from "react";
import { Star, ArrowLeft, ArrowRight, Paperclip, Quote } from "lucide-react";
import ViewButton from "./ViewButton";

const Contact = () => {
  const testimonials = [
    {
      text: "Working with this team was an absolute pleasure! They delivered on time and exceeded expectations.",
      rating: 5.0,
      img: "/img/client1.avif",
      name: "Anna Harris",
      status: "CEO & Founder",
      country: "🇺🇸",
    },
    {
      text: "Great communication, strong technical skills, and very reliable throughout the project!",
      rating: 4.8,
      img: "/img/client2.avif",
      name: "John Smith",
      status: "Product Manager",
      country: "🇬🇧",
    },
    {
      text: "Amazing work! The final result was beyond what we imagined. Highly recommended!",
      rating: 5.0,
      img: "/img/client3.avif",
      name: "Sophia Lee",
      status: "CTO",
      country: "🇨🇦",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % testimonials.length);
  };

  return (
    <div id="contact" className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
      {/* ✅ LEFT SIDE: Contact Form */}
      <div className="flex flex-col justify-center">
        <h2 className="uppercase text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Got a project in mind?
        </h2>
        <p className="text-gray-600 mb-8">
          Fill the form and get a free consultation!
        </p>

        <form className="flex flex-col gap-6">
          {/* ✅ Two-column layout for inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border-b border-gray-200 focus:border-black outline-none pb-2 bg-transparent w-full"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border-b border-gray-200 focus:border-black outline-none pb-2 bg-transparent w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b border-gray-200 focus:border-black outline-none pb-2 bg-transparent w-full"
            />
            <input
              type="text"
              placeholder="Company"
              className="border-b border-gray-200 focus:border-black outline-none pb-2 bg-transparent w-full"
            />
          </div>

          {/* ✅ Full-width last field with attach */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-2 mt-4">
            <input
              type="text"
              placeholder="How can we help?"
              className="w-full outline-none bg-transparent"
            />
            <button type="button" className="text-gray-600 hover:text-black">
              <Paperclip size={20} />
            </button>
          </div>

          <div className="pt-4">
            <ViewButton name="Send Message" align="left" />
          </div>
        </form>
      </div>

      {/* ✅ RIGHT SIDE: Testimonial Carousel */}
      <div className="hidden md:flex flex-col items-center text-center border border-gray-200 rounded-[30px] p-10">
        {/* ✅ Double Quote Icon */}
        <div className="mb-4 bg-white/10 p-3 rounded-full">
          <Quote className="w-8 h-8 text-white" />
        </div>

        {/* Review */}
        <p className="text-gray-600 italic mb-4 max-w-md">
          “{testimonials[index].text}”
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-yellow-400 font-semibold">
            {testimonials[index].rating.toFixed(1)}
          </span>
          {Array.from({ length: Math.round(testimonials[index].rating) }).map(
            (_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-yellow-400 fill-yellow-400"
              />
            )
          )}
        </div>

        {/* Image carousel */}
        <div className="flex items-center gap-6">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <ArrowLeft />
          </button>

          <div className="flex items-center justify-center gap-4">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className={`transition-transform duration-300 ${
                  i === index ? "scale-110" : "scale-90 opacity-70"
                }`}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
                />
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <ArrowRight />
          </button>
        </div>

        {/* Name, status & flag */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold flex items-center justify-center gap-2">
            {testimonials[index].name}
          </h3>
          <p className="text-gray-400 flex items-center justify-center gap-2">
            {testimonials[index].status} {testimonials[index].country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
