import React from 'react'

const ServicesComponent = ({ title, description, buttons = [], imageUrl }) => {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="Heading3 secondaryColor">{title}</h2>
          <p className="secondaryColor Text3">{description}</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            {buttons.map((button, index) => {
              const hasBg = button.bg // Only buttons with bg defined will have background
              return (
                <a
                  key={index}
                  href={button.link || '#'}
                  className={`px-4 py-2 rounded-full border border-gray-500 Text4 secondaryColor transition
        ${
          hasBg
            ? `${button.bg} ${
                button.textColor || 'text-white'
              } hover:opacity-90`
            : 'hover:bg-transparent hover:text-[#025c9e]'
        }
      `}
                >
                  {button.text}
                </a>
              )
            })}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={imageUrl}
            alt={imageUrl}
            className="lg:w-98 md:w-88 w-78 object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default ServicesComponent
