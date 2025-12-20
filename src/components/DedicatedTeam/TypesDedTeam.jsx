import React from 'react'
import benefitsRectangleImg from '../../../public/img/benefitsRectangle.avif'

const TypesDedTeam = () => {
  const items = [
    {
      title: 'Full-service dedicated team',
      list: [
        'You don’t have any development team',
        'You need an all-set team that includes all specialists required for the project',
        'Perfect to deliver the project from scratch',
      ],
    },
    {
      title: 'Team extension',
      list: [
        'You have an in-house development team',
        'You need standalone specialists for specific tasks or with particular expertise',
        'Perfect to onboard additional team members fast',
      ],
    },
  ]

  return (
    <div className="container mx-auto flex flex-col gap-10">
      <div className=''>
        <h2 className="Heading3 secondaryColor relative inline-block">
          {/* This image is positioned absolutely inside the h2 */}
          <img
            src={benefitsRectangleImg}
            alt="Benefits rectangle"
            className="absolute top-1 -left-4 w-116 h-auto z-0"
          />
          {/* This text is positioned relative and stays on top of the image */}
          <span className="relative z-10 mr-2">Types</span>
        </h2>

        <h2 className="Heading3 secondaryColor">
          of dedicated <br className="inline" />
          development team
        </h2>
      </div>

      {/* Cards With Lists */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-10">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-6 shadow border-gray-600 border border-t-2 border-t-white hover:shadow-md transition-all"
          >
            <div className="flex flex-col gap-4">
              <div className="Heading5 secondaryColor mb-2 flex items-center gap-3">
                {item.title}
              </div>

              <ul className="Text3 secondaryColor list-disc pl-5 space-y-2">
                {item.list.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TypesDedTeam
