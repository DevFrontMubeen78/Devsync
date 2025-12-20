import React from 'react'
import engagementBackground from '../../../public/img/engagementBackground.png'

const EngagementModels = () => {
  const cards = [
    {
      title: 'Time and material',
      description: 'This model is for you if',
      items: [
        'It’s hard to determine the amount of work',
        'The technical documentation is poor or absent',
      ],
      details: {
        'How it works':
          'You pay only for the working hours spent on your project.',
        'Project duration (months)': '1+',
        Billing: 'Hourly based invoice',
      },
    },
    {
      title: 'Fixed price',
      description: 'This model is for you if',
      items: [
        'You have a project specification',
        'You have technical documentation',
        'You have clear requirements about your website or portal.',
      ],
      details: {
        'How it works': 'Develop your project within the exact budget.',
        'Project duration (months)': '1-3',
        Billing: 'Cost based on estimates',
      },
    },
    {
      title: 'Dedicated team',
      description: 'This model is for you if',
      items: [
        'You need a full-time team',
        'You want to control the development process as much as possible',
        'Scalable team',
      ],
      details: {
        'How it works':
          'You hire your own flexible team with the skill set you need.',
        'Project duration (months)': '3+',
        Billing: 'Monthly cost',
      },
    },
  ]

  return (
    <div
      className="container mx-auto bg-contain bg-center"
      style={{
        backgroundImage: `url(${engagementBackground})`,
      }}
    >
      <div className="flex flex-col gap-10">
        <h1 className="Heading3 secondaryColor">Engagement models</h1>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-[#293538a3] border border-gray-600 rounded-lg p-6 shadow-md flex-1 md:min-w-[30%] flex flex-col gap-6
      ${index === 1 ? 'md:mt-10 md:-mb-10' : ''} 
      ${index === 2 ? 'md:mt-20 md:-mb-20' : ''}`}
            >
              <div className="flex flex-col gap-4">
                <h2 className="Heading5 secondaryColor">{card.title}</h2>
                <p className="mb-2 Text3 secondaryColor">{card.description}</p>
              </div>
              <div className="flex flex-col gap-4">
                <ul className="list-disc list-outside pl-3 mb-4">
                  {card.items.map((item, i) => (
                    <li className="Text4 secondaryColor" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
                {Object.entries(card.details).map(([key, value], i) => (
                  <div key={i}>
                    <h6 className="Text3 secondaryColor mb-2">{key}</h6>
                    <p className="Text4">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EngagementModels
