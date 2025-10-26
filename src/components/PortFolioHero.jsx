import React from 'react'

const PortFolioHero = ({heroTitle, heroDesc, heroCat, heroService, heroImg}) => {
  return (
    <div className="container">
      <div className="flex flex-col-reverse md:flex-row items-start gap-14">
        {/* Left Section (Text) */}
        <div className="w-full md:w-1/2 flex flex-col md:gap-10 gap-6 justify-center text-left">
          <h2 className="text_two color_one text-2xl md:text-4xl font-semibold">
            {heroTitle}
          </h2>

          <div className="flex flex-col gap-2">
            <strong>Description:</strong>
            <p className="text_four color_three leading-relaxed text-sm md:text-base">
             {heroDesc}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <strong>Category:</strong>
            <p className="text_four color_three text-sm md:text-base">
              {heroCat}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <strong>Service:</strong>
            <p className="text_four color_three text-sm md:text-base">
             {heroService}
            </p>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={heroImg} alt={heroImg} className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default PortFolioHero
