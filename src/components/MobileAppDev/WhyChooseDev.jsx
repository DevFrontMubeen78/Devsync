import React from 'react'

const WhyChooseDev = ({ cards, title }) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <h1 className="Heading3 secondaryColor">
          {title}
        </h1>
        <div className="flex flex-col md:flex-row md:items-stretch md:space-x-6">
          {cards.map((card, index) => (
            <React.Fragment key={index}>
              <div className="flex-1 border border-gray-600 shadow-md rounded-lg p-8 mb-4 md:mb-0 flex flex-col">
                <h2 className="Heading5 secondaryColor mb-5">
                  {card.title}
                </h2>
                <p className="Text3 secondaryColor">{card.description}</p>
              </div>

              {/* Divider (only on desktop, centered) */}
              {index < cards.length - 1 && (
                <div className="hidden md:flex items-center">
                  <div className="h-0.5 w-6 bg-gradient-to-r from-gray-500"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyChooseDev
