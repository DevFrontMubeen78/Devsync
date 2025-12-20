import React from 'react'

const packagesData = [
  {
    title: 'Startup',
    subTitle: 'Your Goals',
    goals:
      'You have an idea that needs to be carefully investigated during the discovery phase and prepared for MVP development.',
    deliverables: [
      'Product brief',
      'Vision and scope',
      'Design concept and/or wireframes',
      'Architecture description with 3rd parties integrations details',
      'Project proposal',
    ],
    results: [
      'Validate your idea',
      'Check product-market fit',
      'Calculate unit economy to estimate profitability',
      'Get ready for MVP development',
      'Attract investors',
    ],
    investment: {
      duration: '2-4 weeks',
      cost: 'From $9,500*',
      uponRequest: ['Presentation for investors', 'Hypothesis testing'],
    },
  },
  {
    title: 'Product',
    subTitle: 'Your Goals',
    goals:
      'You want to attract new customers and boost revenue by launching your digital product.',
    deliverables: [
      'Detailed BA documentation (SRS) with market analysis',
      'Design concept and wireframes',
      'Architecture description with 3rd parties integrations details',
      'Project proposal',
    ],
    results: [
      'Attract new customers',
      'Win new markets',
      'Add new services',
      'Launch your product',
    ],
    investment: {
      duration: '4-6 weeks',
      cost: 'From $12,000*',
      uponRequest: ['Usability testing'],
    },
  },
  {
    title: 'Business Automation',
    subTitle: 'Your Goals',
    goals:
      'You are looking to increase profit by improving business processes with custom software leveraging our discovery phase services.',
    deliverables: [
      'Detailed BA documentation focused on your business',
      'Wireframes',
      'Architecture description with 3rd parties integrations details',
      'Project proposal',
    ],
    results: [
      'Increase efficiency',
      'Automate repetitive processes',
      'Save costs',
      'Enhance business performance',
    ],
    investment: {
      duration: '4-8 weeks',
      cost: 'From $15,000*',
      uponRequest: ['Custom requests based on your business needs'],
    },
  },
]

const DiscoverPhase = () => {
  return (
    <div className="container flex flex-col gap-10">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <h2 className="Heading3 secondaryColor md:w-6/12 w-full">
          Discovery Phase <br className="inline" /> Packages
        </h2>
        <p className="Text3 secondaryColor md:w-6/12 w-full">
          Our development approach is tightly connected with business needs.
          Thus, our discovery phase services depend on specific client
          requirements and goals. If you are not sure which one is your best
          fit, we’ll help you make the right choice or make an individual offer.
        </p>
      </div>

      {packagesData.map((pkg) => (
        <div key={pkg.title} className="space-y-6 md:space-y-10 lg:space-y-14">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="Heading5 secondaryColor">{pkg.title}</h3>
              <div className="bg-white h-1 w-full"></div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-0">
              <div className="flex flex-col gap-3 md:w-9/12 w-full">
                <h3 className="Heading5 secondaryColor">{pkg.subTitle}</h3>
                <p className="Text3 secondaryColor">{pkg.goals}</p>
              </div>
              <div>
                <a
                  href="/contact"
                  className="primaryColor Text3 GlobleColor px-5 py-2 rounded-full inline-block"
                >
                  Get Consultation
                </a>
              </div>
            </div>

            {/* 3-column section */}
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 mt-6">
              {/* Deliverables */}
              <div className="flex flex-col gap-2">
                <h4 className="Heading5 secondaryColor mb-2">Deliverables</h4>
                <ul className="list-disc list-inside space-y-1">
                  {pkg.deliverables.map((item, i) => (
                    <li key={i} className="flex">
                      <span className="mr-3 Text3 GlobleTextColor">/</span>
                      <span className="Text3 secondaryColor">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Your Results */}
              <div className="flex flex-col gap-2">
                <h4 className="Heading5 secondaryColor mb-2">Your Results</h4>
                <ul className="list-disc list-inside space-y-1">
                  {pkg.results.map((item, i) => (
                    <li key={i} className="flex">
                      <span className="mr-3 Text3 GlobleTextColor">/</span>
                      <span className="Text3 secondaryColor">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Investments + Upon Request */}
              <div className="flex flex-col gap-2">
                <h4 className="Heading5 secondaryColor mb-2">Investments</h4>
                <p className="Text3 secondaryColor">
                  {pkg.investment.duration} | {pkg.investment.cost}
                </p>
                {pkg.investment.uponRequest.length > 0 && (
                  <>
                    <h5 className="font-medium mt-2">Upon Request</h5>
                    <ul className="list-disc list-inside space-y-1">
                      {pkg.investment.uponRequest.map((item, i) => (
                        <li key={i} className="flex">
                          <span className="mr-3 Text3 GlobleTextColor">/</span>
                          <span className="Text3 secondaryColor">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DiscoverPhase
