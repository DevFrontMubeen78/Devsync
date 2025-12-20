import React, { useRef, useState, useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

const MobileFeatures = ({ slides }) => {
  const scrollRef = useRef(null)
  const [slidesToShow, setSlidesToShow] = useState(1)

  const updateSlidesToShow = () => {
    const width = window.innerWidth
    if (width >= 1024) setSlidesToShow(3)
    else if (width >= 640) setSlidesToShow(2)
    else setSlidesToShow(1)
  }

  useEffect(() => {
    updateSlidesToShow()
    window.addEventListener('resize', updateSlidesToShow)
    return () => window.removeEventListener('resize', updateSlidesToShow)
  }, [])

  const scrollLeft = () => {
    const width = scrollRef.current.clientWidth / slidesToShow
    scrollRef.current.scrollBy({ left: -width, behavior: 'smooth' })
  }

  const scrollRight = () => {
    const width = scrollRef.current.clientWidth / slidesToShow
    scrollRef.current.scrollBy({ left: width, behavior: 'smooth' })
  }

  return (
    <div className="container mx-auto mt-10 relative">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-4">
          <h1 className="Heading3 secondaryColor">Our featured works</h1>

          <div className="flex gap-4 justify-start md:justify-end">
            <button
              onClick={scrollLeft}
              className="cursor-pointer text-2xl p-2"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={scrollRight}
              className="cursor-pointer text-2xl p-2"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-none rounded-lg shadow-lg overflow-hidden"
              style={{
                width: `calc(${100 / slidesToShow}% - 16px)`,
                scrollSnapAlign: 'start',
              }}
            >
              <div className="relative w-full rounded-xl overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4">
                  <h2 className="Heading5 secondaryColor">
                    {slide.overlayTitle}
                  </h2>
                  <p className="Text3 secondaryColor mt-2">{slide.overlayDescription}</p>
                </div>
              </div>

              <div className="pt-5">
                <h2 className="Text1 secondaryColor">
                  {slide.title}
                </h2>
                <p className="mt-2 Text3 secondaryColor bg-[#293538a3] px-4 py-2 inline-block rounded-full">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileFeatures
