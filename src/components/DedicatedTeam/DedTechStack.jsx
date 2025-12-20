import React, { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'

const techStackData = [
  {
    title: 'Mobile',
    items: [
      { category: 'iOS', technologies: ['Swift', 'Objective-C'] },
      { category: 'Android', technologies: ['Kotlin', 'Java'] },
      { category: 'Cross-platform', technologies: ['Flutter'] },
    ],
  },
  {
    title: 'Backend',
    items: [
      { category: 'Node.js', technologies: ['Express', 'NestJS', 'Koa', 'Hapi'] },
      { category: 'Python', technologies: ['Django', 'Flask', 'FastAPI', 'Tornado'] },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { category: 'React', technologies: ['ReactJS', 'NextJS', 'Redux', 'TypeScript'] },
      { category: 'Vue', technologies: ['VueJS', 'NuxtJS', 'Vuex', 'Pinia'] },
    ],
  },
  {
    title: 'Communication',
    items: [{ category: 'Tools', technologies: ['Slack', 'Zoom', 'Microsoft Teams', 'Discord'] }],
  },
  {
    title: 'Design',
    items: [{ category: 'Tools', technologies: ['Figma', 'Adobe XD', 'Sketch', 'Canva'] }],
  },
  {
    title: 'QA',
    items: [{ category: 'Testing', technologies: ['Jest', 'Cypress', 'Mocha', 'Selenium'] }],
  },
  {
    title: 'Management',
    items: [{ category: 'Tools', technologies: ['Jira', 'Trello', 'Asana', 'ClickUp'] }],
  },
]

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const leftData = techStackData.slice(0, 4)
  const rightData = techStackData.slice(4)

  const renderSection = (section, index) => (
    <div key={index} className="mb-2">
      <button
        onClick={() => toggleAccordion(index)}
        className="w-full flex justify-between items-center py-3 cursor-pointer Heading5 secondaryColor border-b border-gray-700 text-sm sm:text-base"
      >
        {section.title}
        {openIndex === index ? <FiMinus /> : <FiPlus />}
      </button>
      <div
        className={`overflow-hidden transition-max-h duration-300 ${
          openIndex === index ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        {section.items.map((item, idx) => (
          <div key={idx} className="pl-6 py-2 text-sm sm:text-base">
            <div className="Text1 secondaryColor">{item.category}</div>
            <div className="Text4 GlobleTextColor">{item.technologies.join(', ')}</div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="container mx-auto flex flex-col gap-10">
      <h2 className="Heading3 secondaryColor">Tech Stack</h2>
      <div className="flex flex-col md:flex-row md:gap-20 gap-0">
        <div className="flex-1">{leftData.map((s, i) => renderSection(s, i))}</div>
        <div className="flex-1">{rightData.map((s, i) => renderSection(s, i + leftData.length))}</div>
      </div>
    </div>
  )
}

export default Accordion
