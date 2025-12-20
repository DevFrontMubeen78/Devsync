import React from 'react'
import ServicesComponent from '../../components/ServicesComponent'
import BreadCrum from '../../components/BreadCrum'
import WebAppApproach from '../../components/WebDevServices/WebAppApproach'
import BestOptions from '../../components/WebDevServices/BestOptions'
import TechStack from '../../components/WebDevServices/TechStack'
import Contact from '../../components/Contact'
import DevProcess from '../../components/MobileAppDev/DevProcess'
import WebAppDeliv from '../../components/WebDevServices/WebAppDeliv'
import dashedComp from '../../data/DashedComp'
import MobileFeatures from '../../components/MobileAppDev/MobileFeatures'
import Slider from '../../data/Slider'
import EngagementModels from '../../components/MobileAppDev/EngagementModels'
import stepsData from '../../data/DevProcess'
// import MobileImg from '../../public/img/headerImageweb.avif';

const WebDevelopment = () => {
  return (
    <div>
      <div className="bg_section">
        <div className="bg_section paddingY-axis">
          <div className="flex flex-col gap-5">
            <BreadCrum
              pages={[
                { name: 'Services', link: '/services' },
                { name: 'web development services' },
              ]}
            />
            <ServicesComponent
              title="Custom web development company"
              description="Web development services for startups and operating businesses: from simple websites to engaging applications."
              imageUrl="../../public/img/headerImageweb.avif"
              buttons={[
                {
                  text: 'Admin panel',
                  textColor: 'color_four',
                  link: '#adminPanel',
                },
                {
                  text: 'Customer-facing app',
                  textColor: 'color_four',
                  bg: '#fff',
                  link: '#cusfacingAap',
                },
                {
                  text: 'SPA',
                  textColor: 'color_four',
                  link: '#spa',
                },
                {
                  text: 'PWA',
                  textColor: 'color_four',
                  link: '#pwa',
                },
              ]}
            />
          </div>
        </div>

        <section id='adminPanel' className="bg-[#253135] services paddingY-axis">
          <WebAppDeliv title="WEB APPS WE DELIVER" data={dashedComp[0].DashedWebComponent} showItems={true} />
        </section>

        <section id='cusfacingAap' className="WebAppApproach services paddingY-axis">
          <WebAppApproach />
        </section>

        <section  className="BestOptions services paddingY-axis">
          <BestOptions />
        </section>

        <section id='spa'  className="DevelompentProcess paddingY-axis">
          <DevProcess
            steps={stepsData[0].WebsiteData}
            defaultStepId={1}
            title="FULL-CYCLE DELIVERY"
            description="Devsync team is beyond standard tech services - our dedicated web development consultants and developers lead clients throughout the whole product launch journey. Transparently. On-time and within the budget."
          />
        </section>

        <section id='pwa' className="bg-[#253135] services paddingY-axis">
          <TechStack />
        </section>

        <section className="EngagementModels paddingY-axis">
          <EngagementModels />
        </section>

        <section className="MobileFeatures paddingY-axis">
          <MobileFeatures slides={Slider[0].WebsiteFeatures} />
        </section>
      </div>

      <section id='contact' className="paddingY-axis">
        <Contact />
      </section>
    </div>
  )
}

export default WebDevelopment
