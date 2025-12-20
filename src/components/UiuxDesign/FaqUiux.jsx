import React, { useState } from 'react'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqs = [
    {
      question: 'What UI/UX services do you provide?',
      answer: (
        <div className='flex flex-col gap-4'>
          <div>As a UI/UX design services company we deliver:</div>
          <ul className="list-disc ml-8">
            <li>user research,</li>
            <li>wireframing,</li>
            <li>app UI/UX design,</li>
            <li>app redesign,</li>
            <li>prototyping.</li>
          </ul>
          <div>
            Also, our clients get UI/UX design consulting services such as:
          </div>
          <ul className="list-disc ml-8">
            <li>design audits for enhancing existing design concepts,</li>
            <li>usability testing to identify and address interface issues,</li>
            <li>UX research to boost engagement and conversions,</li>
            <li>
              UI/UX consulting to align product strategy with industry best
              practices.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question:
        'What is the average hourly rate/average price for your UI/UX design services?',
      answer: (
        <div>
          <div>
            The average price for our UI/UX design services varies depending on
            the complexity of the project.
          </div>
          <div>
            For an MVP or a simple mobile app, the cost ranges from ~$5,000 to
            ~$10,000. Medium-complexity mobile app designs typically cost
            between ~$15,000 and ~$20,000, while complex app designs can exceed
            $20,000 due to extensive features.
          </div>
          <div>
            After a detailed assessment by our expert team, we can provide a
            more accurate estimate and outline an optimal UX/UI design budget
            for your project.
          </div>
        </div>
      ),
    },
    {
      question:
        'Do you provide UI/UX design services only from scratch? Can you do an existing app redesign?',
      answer: (
        <div>
          Yes, we offer web and mobile app redesign services, revamping outdated
          interfaces for a fresh and modern look. This can attract new users and
          re-engage existing ones. For example, we made a{' '}
          <a href="/portfolio/food-delivery-app">food delivery app redesign</a>{' '}
          that helped attract new users and increase revenue.
        </div>
      ),
    },
    {
      question: 'Why should I choose your company for UI/UX design services?',
      answer: (
        <div>
          SolveIt is the ideal choice for UI/UX design services if you need a
          quality-first approach, fair pricing, and fast and attentive
          communication. We take every client's project to heart, ensuring you
          feel like our only client and project.
        </div>
      ),
    },
  ]

  return (
    <div className="container flex flex-col lg:flex-row gap-8 lg:gap-20">
      {/* Left Section */}
      <div className="w-full lg:w-2/5 flex flex-col gap-4 font-bold">
        <h1 className="primaryColor Heading3">Frequently asked questions</h1>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-3/5 flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-500 pb-4">
            <div
              className="cursor-pointer font-semibold flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <span className="Heading5 primaryColor">{faq.question}</span>
              <span className="ml-2 text_two color-four">
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className="mt-2 Text3 primaryColor">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
