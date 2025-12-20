import React from 'react'
import { ArrowRight } from 'lucide-react'

const items = [
  {
    icon: '🚀',
    title: 'Launch a mobile app',
    desc: 'With Solvelt, you get the product vision, architecture description and strategy, a prototype, and a precise development plan with specifications. Thus, you can start app development confidently, minimize development risks, and stay within budget and timeframes.',
    link: 'Learn more about Flutter services',
  },
  {
    icon: '🔍',
    title: 'Mobile app audit',
    desc: 'Our application development consultants perform the health check of your mobile application. It includes UI/UX audit, code audit, security and compliance review, device and platform compatibility audit.',
  },
  {
    icon: '⚙️',
    title: 'App modernization',
    desc: 'Mobile app consulting with Solvelt will help you to revamp your mobile app in the right way. We provide UI/UX redesign recommendations, performance best practices, architecture redesign, code refactoring, review of integrations, and feature upgrades.',
  },
]

const AppDevConsult = () => {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-14 border-b border-gray-700 py-8">
        {/* LEFT SIDE */}
        <div className="lg:w-1/2 w-full">
          <h1 className="Heading3 secondaryColor">
            APP DEVELOPMENT CONSULTING
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-1/2 w-full">
          <p className="Text3 secondaryColor">
            Native mobile applications are the best solution if you need best in
            class solution performance or a complex app, including AR/VR, games,
            big data mining, and more. Developing a native app means our design,
            customization, device hardware usage, and integration opportunities
            are limitless.
          </p>
        </div>
      </div>

      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-700 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* LEFT */}
            <div className="flex items-start gap-4 w-full lg:w-1/4">
              <div className="text-4xl">{item.icon}</div>
              <h3 className="Text3 secondaryColor">{item.title}</h3>
            </div>

            {/* CENTER */}
            <div className="w-full lg:w-2/4 text-gray-300">
              <p className="Text3 secondaryColor">{item.desc}</p>

              {item.link && (
                <a
                  href="#"
                  className="text-[#fff] underline mt-2 inline-flex items-center gap-1 font-medium"
                >
                  {item.link}
                  <ArrowRight
                    size={16}
                    className="mr-2 text-gray-400 -rotate-45"
                  />
                </a>
              )}
            </div>

            {/* RIGHT BUTTON */}
            <div className="w-full lg:w-auto">
              <button
                className="px-6 py-3 rounded-full Text3 primaryColor GlobleColor"
              >
                Get consultation
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AppDevConsult
