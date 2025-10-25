import { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    number: "01",
    heading: "Clients are <br> saying",
    review:
      "Working with this team was an absolute pleasure. They delivered everything on time and beyond expectations.",
    name: "Ali Raza",
    designation: "CEO, Alpha Tech",
    video: "https://www.youtube.com/embed/IJeSR-LJBnk",
  },
  {
    id: 2,
    number: "02",
    heading: "Clients are <br> saying",
    review:
      "Outstanding service and support throughout the project. Highly recommended for their professionalism.",
    name: "Sara Khan",
    designation: "Marketing Head, BetaSoft",
    video: "https://www.youtube.com/embed/__bHEfJ29j0",
  },
  {
    id: 3,
    number: "03",
    heading: "Clients are <br> saying",
    review:
      "Their creativity and attention to detail made all the difference. Will definitely work with them again.",
    name: "Ahmed Malik",
    designation: "Founder, CreativeHub",
    video: "https://www.youtube.com/embed/rTuxUAuJRyY",
  },
];

function ClientSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  // Auto slide every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const activeReview = reviews[activeIndex];

  return (
    <div className="container flex bg-[#f6f8fb] flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* LEFT SIDE (Slider) */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center overflow-hidden h-[440px]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            width: `${reviews.length * 100}%`,
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="w-full flex-shrink-0 flex flex-col justify-center items-center px-6"
              style={{ width: "100%" }}
            >
              <span className="text-[80px] text-gray-300 font-extrabold leading-none select-none">
                {review.number}
              </span>

              <h2
                className="absolute -top-10 left-0 text_two relative z-10 text-center"
                dangerouslySetInnerHTML={{ __html: review.heading }}
              ></h2>

              <p className="text-gray-700 text-base mb-6 relative z-10 max-w-md text-center md:text-left">
                {review.review}
              </p>

              <div className="w-[30px] h-[2px] bg-gray-400 mb-4"></div>

              <h3 className="font-bold text-gray-900">{review.name}</h3>
              <p className="text-sm text-gray-500">{review.designation}</p>
            </div>
          ))}
        </div>

        {/* Numbers (Slider Indicators) */}
        <div className="absolute bottom-4 flex gap-3 cursor-pointer">
          {reviews.map((r, index) => (
            <button
              key={r.id}
              onClick={() => setActiveIndex(index)}
              className={`transition-colors rounded-full w-8 h-8 p-1 cursor-pointer ${
                index === activeIndex ? "bg-blue-200" : "bg-gray-200"
              }`}
            >
              {r.number}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE (Video with Play Icon) */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 relative h-[440px]">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={`https://img.youtube.com/vi/${
              activeReview.video.split("/embed/")[1]
            }/hqdefault.jpg`}
            alt="Video thumbnail"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Play Button Overlay */}
          <button
            onClick={() => setShowVideo(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* FULLSCREEN VIDEO OVERLAY */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[70%] lg:w-[50%] aspect-video">
            <iframe
              src={`${activeReview.video}?autoplay=1`}
              title="Client Review Video"
              className="w-full h-full rounded-xl shadow-2xl"
              allow="autoplay; fullscreen"
            ></iframe>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-300 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClientSlider;
