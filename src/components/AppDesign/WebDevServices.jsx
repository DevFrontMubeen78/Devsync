import React, { useState } from 'react'
// import img from "../../../public/img/webAppDesignPic.avif"

const WebDevServices = () => {
  const [activeTab, setActiveTab] = useState('spa')

  const spaText = `We create convenient enterprise custom app designs that increase users’ productivity, automate business processes, and drive profitability.`

  const pwaText = `When modernizing web applications, we focus on the fundamental goals of the business and the intentions of users of the application. It is important for us to identify critical problems that users face when using the application.`

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-10 items-start">
      {/* Left Image - static so it does not move */}
      <div className='flex flex-col gap-10'>
        <div className="">
          <h2 className="Heading3 primaryColor mb-4">web app design</h2>

          <p className="mb-6 Text3 primaryColor">
            Our web app UI design services, as well as UX design services, are
            based on human psychology. It helps people interact with your app
            seamlessly while reducing support costs.
          </p>
        </div>
        {/* Tabs */}
        <div className="">
          <div className="flex gap-6 mb-4 border-b pb-2">
            <button
              onClick={() => setActiveTab('spa')}
              className={`${
                activeTab === 'spa'
                  ? 'Heading5 primaryColor border-b-2 border-white'
                  : 'opacity-70 hover:opacity-100'
              } cursor-pointer`}
            >
              Enterprise app design
            </button>

            <button
              onClick={() => setActiveTab('pwa')}
              className={`${
                activeTab === 'pwa'
                  ? 'Heading5 primaryColor border-b-2 border-white'
                  : 'opacity-70 hover:opacity-100'
              } cursor-pointer`}
            >
              App design modernization
            </button>
          </div>

          {/* Tab Content */}
          <div className="Text3 primaryColor">
            {activeTab === 'spa' ? spaText : pwaText}
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex justify-center md:justify-start">
        <img
          src="../../../public/img/webAppDesignPic.avif"
          alt="Web App Approach"
          className="w-full"
        />
      </div>
    </div>
  )
}

export default WebDevServices
