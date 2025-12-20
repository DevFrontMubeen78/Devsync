import React, { useState, useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

const CustomDevSev = ({ services, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)

  // Update visibleCount on window resize
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3)
      else if (window.innerWidth >= 768) setVisibleCount(2)
      else setVisibleCount(1)
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const scrollRight = () => {
    setCurrentIndex((prev) =>
      prev + 1 > services.length - visibleCount ? prev : prev + 1
    )
  }

  const scrollLeft = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1))
  }

  return (
    <div className="container">
      <div className="mx-auto flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-4">
          <h1 className="Heading3 secondaryColor">{title}</h1>

          <div className="flex gap-4 justify-start md:justify-end">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className={`cursor-pointer text-2xl p-2 ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={scrollRight}
              disabled={currentIndex >= services.length - visibleCount}
              className={`cursor-pointer text-2xl p-2 ${
                currentIndex >= services.length - visibleCount
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 py-10"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2`}
              >
                <div className="border border-gray-600 p-6 justify-start rounded-xl shadow-md h-full flex flex-col justify-between relative">
                  {/* Number and Arrow */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-xl font-semibold">
                      {service.id}
                      <div className="w-6 h-1 bg-gray-400 mt-1 rounded"></div>
                    </div>
                    {service.link !== '#' && (
                      <a
                        href={service.link}
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-100 text-2xl -rotate-45 text-white"
                      >
                        &#8594;
                      </a>
                    )}
                  </div>

                  {/* Title and Description */}
                  <div>
                    <h3 className="Heading5 secondaryColor">{service.title}</h3>
                    <p className="Text3 secondaryColor">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomDevSev
