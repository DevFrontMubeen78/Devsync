import React, { useState } from 'react'

const DevProcess = ({ steps, defaultStepId, title, description }) => {
  const [activeStep, setActiveStep] = useState(defaultStepId || steps[0].id)

  return (
    <div className="container flex flex-col gap-6">
      <div className="mx-auto flex flex-col-reverse gap-y-12 md:flex-row lg:gap-40 md:gap-20">
        {/* Left Tabs + Title & Description */}
        <div className="md:w-1/2 w-full space-y-6 mb-6 md:mb-0">
          <h1 className="Heading3 secondaryColor">{title}</h1>
          {description && (
            <p className="md:w-128 w-full text_five color_four">
              {description}
            </p>
          )}

          {/* Tabs */}
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`Text3 secondaryColor w-full cursor-pointer text-left p-4 border-b border-gray-700 flex items-center space-x-2 ${
                activeStep === step.id
                  ? 'font-bold text-gray-300'
                  : 'hover:bg-[#293538] text-gray-400'
              }`}
            >
              <span className="w-5 flex justify-center">
                {activeStep === step.id ? '-' : '+'}
              </span>
              <span>{step.title}</span>
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full flex flex-col items-start md:mt-20 mt-0 relative">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`transition-transform duration-500 flex flex-col gap-4 ${
                activeStep === step.id
                  ? 'scale-105 opacity-100 relative'
                  : 'scale-95 opacity-0 absolute top-0 left-0 w-full'
              }`}
            >
              <div className="flex justify-center md:justify-start">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full max-w-md rounded-lg"
                />
              </div>
              <p className="Text3 secondaryColor">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DevProcess
