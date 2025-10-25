import React, { useState, useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

const logos = [
  '/img/award1.avif',
  '/img/award2.avif',
  '/img/award3.avif',
  '/img/award4.avif',
  '/img/award5.avif',
  '/img/award6.avif',
]

const Awards = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(5)

  // Responsive visible count
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth
      if (width < 640) setVisibleCount(2) // mobile
      else if (width < 1024) setVisibleCount(4) // tablet
      else setVisibleCount(5) // desktop
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  // Infinite loop logic
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logos.length - 1 : prevIndex - 1
    )
  }

  // Make infinite loop by duplicating start + end
  const extendedLogos = [...logos, ...logos]

  const visibleLogos = extendedLogos.slice(
    currentIndex,
    currentIndex + visibleCount
  )

  return (
    <div className="container py-10 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text_two color_two font-semibold leading-tight">
          Awards
        </h2>

        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="bg-white shadow-md hover:bg-gray-100 transition-all color_one p-3 rounded-full cursor-pointer"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white shadow-md hover:bg-gray-100 transition-all color_one p-3 rounded-full cursor-pointer"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out">
          {visibleLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 p-3"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="bg-white hover:border hover:border-[#fff] hover:bg-[#1f2b2f] rounded-2xl shadow-sm flex items-center justify-center p-4 hover:shadow-lg transition">
                <img
                  src={logo}
                  alt={`Award ${index + 1}`}
                  className="h-20 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Awards
