import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const DontCompromise = ({title}) => {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-between">

      {/* LEFT SIDE */}
      <div className="md:w-3/5 w-full">
        <h2 className="Heading3 secondaryColor">
          {title}
        </h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:w-2/5 w-full flex justify-center mt-8 md:mt-0">
        
        {/* Button as Link */}
        <a
          href="https://example.com" // yahan apna link daal do
          className="relative flex items-center justify-center w-40 h-40"
        >
          {/* Rotating Text */}
          <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
            <svg viewBox="0 0 200 200" className="w-full h-full GlobleTextColor">
              <defs>
                <path
                  id="circlePath"
                  d="
                    M 100, 100
                    m -75, 0
                    a 75,75 0 1,1 150,0
                    a 75,75 0 1,1 -150,0
                  "
                />
              </defs>
              <text fill="currentColor" fontSize="18">
                <textPath href="#circlePath" className="tracking-[6px] uppercase">
                  Contact us • Contact us • Contact us •
                </textPath>
              </text>
            </svg>
          </div>

          {/* Middle Circle */}
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
            <FaArrowRight className="GlobleTextColor transform -rotate-45 text-xl" />
          </div>
        </a>

      </div>

    </div>
  )
}

export default DontCompromise
