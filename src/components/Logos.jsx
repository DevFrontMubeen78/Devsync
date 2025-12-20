import React from 'react'

const logos = [
  '/img/award1.avif',
  '/img/award2.avif',
  '/img/award3.avif',
  '/img/award4.avif',
  '/img/award5.avif',
  '/img/award6.avif',
]

const Logos = () => {
  return (
    <div>
      {/* ✅ Slider Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-12">
          {[...logos, ...logos].map((item, index) => (
            <img
              key={index}
              className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 flex-shrink-0 object-contain"
              src={item}
              alt={`Logo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Logos
