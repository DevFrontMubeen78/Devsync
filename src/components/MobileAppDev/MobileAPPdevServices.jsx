import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const MobileAPPdevServices = () => {
  const services = [
    {
      title: 'Mobile app consulting',
      description:
        'Get professional assistance with your app development project. We provide extensive discovery phase services and product audits.',
      links: [{ name: 'Discovery phase', url: '#' }],
    },
    {
      title: 'MVP development',
      description:
        'Build a new product as a fully functioning MVP within 3 months. Turn-key project delivery to minimize risks and successfully enter the market.',
      links: [{ name: 'MVP development', url: '#' }],
    },
    {
      title: 'Native app development',
      description:
        'Develop a mobile app with the best-in-class performance and 100% native experience. Suitable for complex apps.',
      links: [
        { name: 'iOS app development', url: '#' },
        { name: 'Android app development', url: '#' },
      ],
    },
    {
      title: 'Cross-platform app development',
      description:
        'Launch your mobile app 20% more cost-effective and faster compared to native app development.',
      links: [{ name: 'Flutter app development', url: '#' }],
    },
    {
      title: 'Mobile app design',
      description:
        'Get an eye-catching app interface and smooth user experience thought out to the last detail.',
      links: [{ name: 'UI/UX design', url: '#' }],
    },
    {
      title: 'Dedicated Team',
      description:
      'Onboard experienced custom app developers to boost your project: a full-fledged team or standalone specialists.',
      links: [{ name: 'Hire dedicated team', url: '#' }],
    }
  ]

  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="container flex flex-col gap-10">
      <h1 className="Heading3 secondaryColor">Mobile development services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#26363b] p-6 rounded-2xl shadow-md border border-gray-700 relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h2
              className="Heading5 secondaryColor mb-2 relative flex items-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {service.title}

              {hoveredIndex === index && service.link && (
                <a
                  href={service.link}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 transition"
                >
                  <ArrowRight size={16} className="text-white" />
                </a>
              )}
            </h2>

            {/* Border bottom */}
            <div className="border-b border-gray-500 mb-3"></div>

            {/* Paragraph */}
            <p className="Text3 secondaryColor mb-4">{service.description}</p>

            {/* Links list (only if exist) */}
            {service.links && (
              <ul className="space-y-2">
                {service.links.map((link, i) => (
                  <li
                    key={i}
                    className="Text4 secondaryColor flex items-center gap-2"
                  >
                    <a href={link.url} className="list underline-offset-2">
                      {link.name}
                    </a>
                    <ArrowRight
                      size={16}
                      className="mr-2 text-gray-400 -rotate-45"
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MobileAPPdevServices
