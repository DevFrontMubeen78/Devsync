import React from 'react'
// import image from '../../../public/img/motionDesignLogo.png'

const BrandingServices = () => {
  return (
    <div className="container border-2 border border-gray-300 p-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* LEFT COLUMN - IMAGE */}
      <div>
        <img
          src="../../../public/img/design.gif"
          alt="Motion Services"
          className="w-98 border-1 border-dashed border-gray-300"
        />
      </div>

      {/* RIGHT COLUMN - TEXT */}
      <div className="flex flex-col gap-4">
        <div className="flex gap-5">
          <h2 className="Heading3 primaryColor">Motion</h2>
          <img
            src="../../../public/img/motionDesignLogo.png"
            alt="Motion logo"
            className="w-52"
          />
        </div>
        <p className="Text3 primaryColor">
          Your brand is more than just a logo. Websites, web, and mobile apps
          are integral parts of a modern brand.
        </p>
        <p className="Text3 primaryColor">
          We provide new and established companies with digital branding
          services: develop a design from scratch, create new products within an
          existing brand design, or make adjustments to the design of an
          established brand.
        </p>
      </div>
    </div>
  )
}

export default BrandingServices
