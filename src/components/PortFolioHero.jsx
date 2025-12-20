import React from 'react'

const PortFolioHero = ({heroTitle, heroDesc, heroCat, heroService, heroImg}) => {
  return (
    <div className="container">
      <div className="flex flex-col-reverse md:flex-row items-start gap-14">
        {/* Left Section (Text) */}
        <div className="w-full md:w-1/2 flex flex-col md:gap-10 gap-6 justify-center text-left">
          <h2 className="Heading3 primaryColor">
            {heroTitle}
          </h2>

          <div className="flex flex-col gap-2">
            <strong className='Heading5 primaryColor'>Description:</strong>
            <p className="Text3 primaryColor">
             {heroDesc}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <strong className='Heading5 primaryColor'>Category:</strong>
            <p className="Text3 primaryColor">
              {heroCat}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <strong className='Heading5 primaryColor'>Service:</strong>
            <p className="Text3 primaryColor">
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
