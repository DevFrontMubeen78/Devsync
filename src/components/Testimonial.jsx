import React from "react";
import { Star } from "lucide-react";

const Testimonial = () => {
  const testimonials = [
    {
      img: "/img/client1.avif",
      name: "Anna Harris",
      title: "CEO & Founder",
      country: "🇺🇸",
      review:
        "They have an incredibly hardworking team at affordable pricing. Devsync built the app earlier than expected and continues to complete new tasks within the client's budget and timeline.",
      rating: 5.0,
    },
    {
      img: "/img/client2.avif",
      name: "John Smith",
      title: "Product Manager",
      country: "🇬🇧",
      review:
        "Amazing experience! The team was very supportive and delivered more than what we expected.",
      rating: 4.8,
    },
    {
      img: "/img/client3.avif",
      name: "Sophia Lee",
      title: "CTO",
      country: "🇨🇦",
      review:
        "Professional and transparent communication throughout the entire project. Highly recommended!",
      rating: 5.0,
    },
    {
      img: "/img/client4.avif",
      name: "Michael Brown",
      title: "Founder of TechFlow",
      country: "🇦🇺",
      review:
        "Great design sense and perfect execution. Loved working with their creative team!",
      rating: 4.9,
    },
    {
      img: "/img/client5.avif",
      name: "Emily Davis",
      title: "Marketing Lead",
      country: "🇩🇪",
      review:
        "They always met our deadlines and went the extra mile to ensure satisfaction.",
      rating: 4.7,
    },
    {
      img: "/img/client6.avif",
      name: "David Wilson",
      title: "Operations Head",
      country: "🇫🇷",
      review:
        "A reliable team that delivers quality work every single time. We will collaborate again!",
      rating: 5.0,
    },
  ];

  return (
    <div className="container">
      <h2 className="Heading3 secondaryColor mb-12">
        Clients are saying
      </h2>

      {/* ✅ Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-[#27363b] p-6 rounded-[30px] border border-white/20 shadow-md transition-all duration-300"
          >
            {/* ✅ Top: Image + Info */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-400"
                onError={(e) => (e.target.style.display = 'none')}
              />
              <div>
                <h3 className="Text1 flex items-center gap-2">
                  {item.name} <span>{item.country}</span>
                </h3>
                {/* ✅ Global paragraph class instead of text-gray-400 */}
                <p className="Text4">{item.title}</p>
              </div>
            </div>

            {/* ✅ Review Text */}
            <p className="Text3 italic mb-4">“{item.review}”</p>

            {/* ✅ Star Ratings + Score */}
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text_four">
                {item.rating.toFixed(1)}
              </span>
              <div className="flex">
                {Array.from({ length: Math.round(item.rating) }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
