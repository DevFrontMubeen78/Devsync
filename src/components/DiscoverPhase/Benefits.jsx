import React from 'react'
import benefitsRectangleImg from '../../../public/img/benefitsRectangle.avif'
import softwareImg from '../../../public/img/benefitss.avif'

const BenifitsSoftware = () => {
  const benefits = [
    'Get product vision with architecture description and strategy through our product discovery service',
    'Get a precise development plan with specifications from our discovery phase team',
    'Start development confidently',
    'Minimize development risks during the discovery phase process',
    'Stay within budget and timeframes with our discovery phase services for product development',
    'Get to know the team prior to product development',
    'Start development confidently',
  ]

  return (
    <div className="container flex flex-col md:flex-row items-center gap-10">
      {/* LEFT IMAGE WITH HEADING */}
      <div className="w-full md:w-1/2 relative">
        {/* Heading with absolute rectangle behind */}
        <h2 className="Heading3 secondaryColor relative inline-block">
          {/* This image is positioned absolutely inside the h2 */}
          <img
            src={benefitsRectangleImg}
            alt="Benefits rectangle"
            className="absolute -top-2 -left-3 w-116 h-auto z-0"
          />
          {/* This text is positioned relative and stays on top of the image */}
          <span className="relative z-10 mr-2">Benefits</span>
        </h2>

        <h2 className="Heading3 secondaryColor">
          of the discovery <br className="inline" /> phase services
        </h2>

        <img
          src={softwareImg}
          alt="Outcome of discovery phase"
          className="w-92"
        />
      </div>

      {/* RIGHT SIDE DESCRIPTION + LIST */}
      <div className="w-full md:w-1/2">
        <p className="Text3 secondaryColor mb-6">
          Skipping the discovery phase of a software project often results in an
          underestimated amount of investments and high risks. Moreover, without
          the discovery phase service, the budget becomes overused during
          development due to multiple tweaks in functionality and requirements.
        </p>

        <ul className="space-y-4">
          {benefits.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 Text3 secondaryColor"
            >
              <span className="Text3 GlobleTextColor">
                /
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BenifitsSoftware
