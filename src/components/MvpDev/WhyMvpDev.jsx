import React from 'react'

const WhyMvpDev = () => {
  const items = [
    {
      index: '01',
      title: 'Cost-effectiveness',
      text: 'Concentrating and developing only valuable features makes the MVP development cost as low as possible. Further, according to user feedback, you can add features that bring the most impact.',
    },
    {
      index: '02',
      title: 'Faster launch',
      text: 'Generally MVP development process takes from 4 weeks to 5 months, which results in faster income, real results, and investors’ interest.',
    },
    {
      index: '03',
      title: 'Market test and early feedback',
      text: 'With a reputable MVP development company, you will quickly enter the real market, validate your idea, and gather timely feedback to navigate necessary product improvements.',
    },
  ]

  return (
    <div className="container mx-auto">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-12">
        <h2 className="Heading3 secondaryColor">
          Why MVP <br className="inline" /> development?
        </h2>
        <p className="mb-4 Text3 secondaryColor">
          MVP development is the best approach if you are ready to launch a new
          product. Professional MVP development services allow for minimizing
          business risks while helping you enter the market in the most
          effective way.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.index}
            className="p-6 shadow border-gray-600 border border-t-2 border-t-white hover:shadow-md transition-all"
          >
            <div className="flex flex-col gap-4">
              <div className="Heading5 secondaryColor mb-2 flex items-center gap-3">
                <span className="Text3 GlobleTextColor">/{item.index}</span>
                {item.title}
              </div>

              <p className="Text3 secondaryColor">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyMvpDev
