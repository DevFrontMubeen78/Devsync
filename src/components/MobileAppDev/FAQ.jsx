import React, { useState } from 'react'

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="container flex flex-col lg:flex-row gap-8 lg:gap-20">
      {/* Left Section */}
      <div className="w-full lg:w-2/5 flex flex-col gap-4 font-bold">
        <h1 className="Heading3 secondaryColor">Frequently asked questions</h1>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-3/5 flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-600 pb-8">
            <div
              className="cursor-pointer font-semibold flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <span className="Text2 secondaryColor">{faq.question}</span>
              <span className="ml-2 Text4 secondaryColor">
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className="mt-2 text_five color_four">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
