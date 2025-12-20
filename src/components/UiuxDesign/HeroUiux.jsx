import React from 'react'
import Logos from '../../components/Logos'

const HeroUiux = () => {
  return (
    <div className="container flex flex-col md:gap-20 gap-10">
      <div className="text-center flex flex-col md:gap-20 gap-10 p-5 relative focus-corners">
        <p className="mb-4 Text3 primaryColor">
          [ UI/UX design and development services since 2016.' '
          <br className="inline" />
          With us, our clients outperform their competitors - find out how! ]
        </p>

        <div className="flex flex-col md:gap-10 gap-5">
          <div className="flex flex-col md:gap-10 gap-5 uppercase">
            <h1 className="Heading1 text-[#836aff]">
              Ui/Ux Design{' '}
              <span className="bg-[#836aff] secondaryColor px-5 rounded-3xl">
                And
              </span>{' '}
              <br className="inline" />
            </h1>
            <h1 className="Heading1 primaryColor">consulting services</h1>
          </div>

          {/* Button */}
          <button className="px-6 md:px-10 lg:px-12 py-3 md:py-4 bg-[#836aff] text-black rounded shadow-md font-medium text-white transition-all w-fit mx-auto text-sm md:text-base">
            Get Started
          </button>
        </div>

        {/* Camera focus corners */}
        <span className="corner top-left"></span>
        <span className="corner top-right"></span>
        <span className="corner bottom-left"></span>
        <span className="corner bottom-right"></span>
      </div>

      <Logos />
      <style>{`
        .focus-corners {
          position: relative;
        }

        .corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 3px solid #836aff;
        }

        .top-left {
          top: -3px;
          left: -3px;
          border-right: none;
          border-bottom: none;
        }

        .top-right {
          top: -3px;
          right: -3px;
          border-left: none;
          border-bottom: none;
        }

        .bottom-left {
          bottom: -3px;
          left: -3px;
          border-right: none;
          border-top: none;
        }

        .bottom-right {
          bottom: -3px;
          right: -3px;
          border-left: none;
          border-top: none;
        }
      `}</style>
    </div>
  )
}

export default HeroUiux
