import React from 'react'

const UiuxConsult = () => {
  const cards = [
    {
      title: 'Design audit',
      text: 'Get a meticulous assessment of your app design and actionable insights to improve its UI/UX. This service is designed to instill confidence in your design choices and ensure alignment with user expectations.',
    },
    {
      title: 'UI/UX consulting',
      text: "Align your product strategy with the latest UX trends and industry best practices. Our UI/UX consultants are here to guide you toward user-centered success and enhance your product's overall usability, accessibility, and effectiveness.",
    },
    {
      title: 'UX research',
      text: 'Increase conversions and improve user journey with our UX research service. We’ll help you improve the user experience by considerably reducing friction to get users to their final goal.',
    },
    {
      title: 'Usability testing',
      text: 'We’ll put your app in front of real users to investigate how they interact with it. We’ll pay attention to any bottlenecks or confusion they face to suggest data-based improvements.',
    },
  ]

  const BackgroudImage = '../../../public/img/smallCard.png'

  return (
    <div className="container flex flex-col gap-10">
      <h2 className="primaryColor Heading3">UI/UX Consulting Services</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {cards.map((card, index) => (
          <div key={index} className="relative flex flex-col justify-center">
            <img className='shadow rounded-4xl' src={BackgroudImage} alt={BackgroudImage} />
            <div className="absolute  p-10">
              <h3 className="primaryColor Heading5 mb-3">{card.title}</h3>
              <p className="Text3 primaryColor">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UiuxConsult
