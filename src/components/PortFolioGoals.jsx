import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Star } from 'lucide-react'

const PortFolioGoals = ({ backgroundTab, backgroundColor }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqsLeft = [
    {
      question: '📌 What is your main portfolio goal?',
      answer:
        'My goal is to showcase my skills through modern, clean, and responsive UI designs.',
    },
    {
      question: '📌 Which technologies do you use?',
      answer:
        'I work with React, Tailwind CSS, Node.js, and modern frontend tools.',
    },
    {
      question: '📌 What kind of projects are included?',
      answer:
        'I include web apps, landing pages, dashboards, and interactive UI components.',
    },
  ]

  const faqsRight = [
    {
      question: '📌 How do you manage design consistency?',
      answer:
        'By following a design system and reusing components across projects.',
    },
    {
      question: '📌 How do you handle responsiveness?',
      answer:
        'Every project is mobile-first with adaptive layouts and scalable elements.',
    },
    {
      question: '📌 Do you focus on performance?',
      answer:
        'Yes, performance and accessibility are top priorities in every project.',
    },
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const renderAccordion = (faqs, columnOffset = 0) =>
    faqs.map((faq, i) => {
      const actualIndex = columnOffset + i
      return (
        <div
          key={actualIndex}
          className={`rounded-2xl shadow-md transition-all duration-300 cursor-pointer border border-[#e0d6c8] ${
            activeIndex === actualIndex ? backgroundTab : 'bg-[#f4f4f4]'
          }`}
          onClick={() => toggleAccordion(actualIndex)}
        >
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-3">
              <Star
                size={20}
                className={`${
                  activeIndex === actualIndex
                    ? 'text-yellow-600'
                    : 'text-amber-700'
                }`}
              />
              <h2 className="text_three color_one">{faq.question}</h2>
            </div>
            {activeIndex === actualIndex ? (
              <ChevronUp className="text-gray-600" />
            ) : (
              <ChevronDown className="text-gray-600" />
            )}
          </div>
          {activeIndex === actualIndex && (
            <div className="p-5 pt-0 text_four color_three transition-all duration-300">
              {faq.answer}
            </div>
          )}
        </div>
      )
    })

  return (
    <div className={backgroundColor}>
      <div className="container paddingY-axis flex flex-col gap-10">
        <h1 className="text_two color_one text-2xl md:text-4xl font-semibold">
          The Goals
        </h1>

        {/* Two independent columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="space-y-4">{renderAccordion(faqsLeft, 0)}</div>
          <div className="space-y-4">
            {renderAccordion(faqsRight, faqsLeft.length)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortFolioGoals
