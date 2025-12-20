import React from 'react'
import QuoteBtnPage from '../../components/QuoteBtnPage'
// import image from '../../../public/img/shape2.png'

const TrustedUiux = ({ title, textPath }) => {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-between">
      {/* LEFT SIDE */}
      <div className="md:w-3/5 w-full">
        <h2 className="Heading3 secondaryColor mb-10">{title}</h2>
        <QuoteBtnPage name="Get a free consultation"/>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:w-2/5 w-full flex justify-center mt-8 md:mt-0">
        {/* Button as Link */}
        <a
          href="#" // yahan apna link daal do
          className="relative flex items-center justify-center w-60 h-60 p-10"
        >
          {/* Rotating Text */}
          <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
            <svg viewBox="0 0 200 200" className="w-full h-full">
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
                <textPath
                  href="#circlePath"
                  className="tracking-[6px] uppercase text-white"
                >
                  Lets DevSync • Lets DevSync • Lets DevSync •
                </textPath>
              </text>
            </svg>
          </div>

          {/* Middle Circle */}
          <div className="w-40 h-40 rounded-full bg-secondary flex items-center justify-center">
            <img
              src="../../../public/img/shape2.png" // <-- replace with your image path
              alt="shape2"
            />
          </div>
        </a>
      </div>
    </div>
  )
}

export default TrustedUiux
