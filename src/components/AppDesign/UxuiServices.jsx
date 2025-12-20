import React from 'react'

const UxuiServices = () => {
  const sections = [
    {
      title: 'Design as a development stage',
      text: `Design is an integral part of mobile and web development. Our app designers, UX consultants, and developers work together to find the best solutions for you and make the most of your budget.`,
    },
    {
      title: 'Design as a service',
      text: `We create a mobile user interface and UX design for your application or website based on the preferences of your target audience and business goals. We also deliver prototype design services so that you can present an interactive prototype to investors at the early stages.`,
    },
  ]

  return (
    <div className="container">
      <div className="flex flex-col gap-10">
        <h2 className="Heading3 primaryColor">ux/ui design services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-10">
          {sections.map((item, index) => (
            <div key={index}>
              <h3 className="Heading5 primaryColor mb-3">{item.title}</h3>
              <p className="Text3 primaryColor">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UxuiServices