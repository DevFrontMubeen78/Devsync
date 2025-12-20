import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const OurServices = () => {
  const services = [
    {
      title: 'Mobile Apps',
      description:
        'We create high-quality mobile apps that bring profit. From idea validation to successful launch.',
      links: [
        { name: 'iOS App Development', url: '/services/ios-app' },
        { name: 'Android App Development', url: '/services/android-app' },
        {
          name: 'Cross-platform App Development',
          url: '/services/cross-platform-app',
        },
      ],
      link: '/services/mobile-app-development',
    },
    {
      title: 'Web Solutions',
      description:
        'We deliver web solutions from simple websites to engaging applications. We build regular web apps, as well as SPA and PWA.',
      links: [{ name: 'Front-end Development', url: '/services/ios-app' }],
      link: '/services/web-development',
    },
    {
      title: 'Custom software',
      description:
        'Custom software gives you full control over your business processes and cuts burdening costs.',
      link: '/services/custom-software',
    },
    {
      title: 'MVP development',
      description:
        'Our team helps you get the product to the market within 3 months.',
      link: '/services/mvp-development',
    },
    {
      title: 'Discovery Phase',
      description:
        'A proper project discovery phase helps to reduce time-to-market and initial project estimates by 20%.',
      link: '/services/discover-phase-services',
    },
    {
      title: 'Dedicated Team',
      description:
        'Hire a flexible team with the skill set you need to reduce costs and speed up development.',
      link: '/services/dedicated-team',
    },
    {
      title: 'UI/UX Design Services',
      description:
        'Our UI/UX experts follow modern design principles and trends to ensure your app looks up to date.',
      link: '/services/ui-ux-design',
    },
    {
      title: 'Mobile App Design',
      description:
        'We provide app design services including user research, prototyping, design consulting, and also app redesign.',
      link: '/services/mobile-app-design',
    },
    {
      title: 'Tech Consulting & Audit',
      description:
        'Our experts help to identify bottlenecks and ways to improve your software performance.',
    },
    {
      title: 'QA & Testing',
      description:
        'We ensure the quality of the developed solutions with a variety of software testing services: manual and automation testing, usability and security testing, QA consulting.',
    },
    {
      title: 'SLA Support',
      description:
        'Except for our free 30-day post-launch warranty we provide full-cycle SLA support on flexible terms.',
    },
  ]

  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="container flex flex-col gap-10">
      <h1 className="Heading3 secondaryColor">Our Services</h1>

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

export default OurServices
