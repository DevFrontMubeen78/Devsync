import React from 'react'

const logo = [
  "/img/brainzLogo.avif",
  "/img/entrepreneurLogo.avif",
  "/img/touchPointsLogo.avif",
  "/img/brainzLogo.avif",
  "/img/touchPointsLogo.avif",
]

const FeaturesIn = () => {
  return (
      <div className="container flex flex-col gap-10">
        <h1 className='heading'>Features In</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-10 md:gap-12 xl:gap-16 items-center">
          {logo.map((item, index) => (
            <img
              key={index}
              className='w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48'
              src={item}
              alt={`Logo ${index + 1}`}
            />
          ))}
        </div>
    </div>
  )
}

export default FeaturesIn
