import React, { useState } from 'react';
// import img from "../../../public/img/approachImage.774c3258.svg"

const WebAppApproach = () => {
  const [activeTab, setActiveTab] = useState('spa');

  const spaText = `Single page applications are preferred by companies for great performance, high security, fast quality assurance, and portability. SPA is your solution if you need a rich user interface with many features and API exposure for external services.`;

  const pwaText = `Progressive web apps provide offline access, push notifications, fast loading, and a native-like feel. PWAs are perfect if you want a highly accessible and reliable application across devices.`;

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      
      {/* Left Image - static so it does not move */}
      <div className="flex justify-center md:justify-start">
        <img
          src="../../../public/img/approachImage.774c3258.svg"
          alt="Web App Approach"
          className="w-98"
        />
      </div>

      {/* Right Content */}
      <div>
        <h2 className="Heading3 secondaryColor mb-4">WEB APP DEVELOPMENT APPROACH</h2>

        <p className="mb-6 secondaryColor Text3">
          Along with traditional web application development (multi-page apps) Devsync also delivers
          single-page apps (SPA) and progressive web apps (PWA). With our attention and experience,
          you get a perfect solution that covers your business needs.
        </p>

        {/* Tabs */}
        <div className="flex gap-6 mb-4 border-b pb-2">
          <button
            onClick={() => setActiveTab('spa')}
            className={`${activeTab === 'spa' ? 'font-semibold border-b-2 border-white' : 'opacity-70 hover:opacity-100'} cursor-pointer`}
          >
            Single Page Apps
          </button>

          <button
            onClick={() => setActiveTab('pwa')}
            className={`${activeTab === 'pwa' ? 'font-semibold border-b-2 border-white' : 'opacity-70 hover:opacity-100'} cursor-pointer`}
          >
            Progressive Web Apps
          </button>
        </div>

        {/* Tab Content */}
        <div className="secondaryColor Text3">
          {activeTab === 'spa' ? spaText : pwaText}
        </div>
      </div>
    </div>
  );
};

export default WebAppApproach;