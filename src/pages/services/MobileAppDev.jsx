import React from 'react'
import ServicesComponent from '../../components/ServicesComponent'
import BreadCrum from '../../components/BreadCrum'
import MobileAPPdevServices from '../../components/MobileAppDev/MobileAPPdevServices'
import ChooseApproach from '../../components/MobileAppDev/ChooseApproach'
import AppDevConsult from '../../components/MobileAppDev/AppDevConsult'
import EngagementModels from '../../components/MobileAppDev/EngagementModels'
import MobileFeatures from '../../components/MobileAppDev/MobileFeatures'
import Slider from '../../data/Slider'
import Contact from '../../components/Contact'
import FAQ from '../../components/MobileAppDev/FAQ'
import MainFaq from '../../data/Faq'
import DevProcess from '../../components/MobileAppDev/DevProcess'
import stepsData from '../../data/DevProcess'
import WhyChooseDev from '../../components/MobileAppDev/WhyChooseDev'
import WhyChooseCard from '../../data/WhyChooseCard'
// import MobileImg from '../../public/img/headerPic.avif';

const WebDevelopment = () => {
  return (
    <div>
      <div className="bg_section">
        <div className="paddingY-axis border-b border-gray-500 mb-3">
          <div className="flex flex-col gap-5">
            <BreadCrum
              pages={[
                { name: 'Services', link: '/services' },
                { name: 'Mobile app development services' },
              ]}
            />
            <ServicesComponent
              title="Mobile app development and consulting"
              description="We build stunning and profitable apps for startups and SMEs. Start with a free consultation!"
              imageUrl="../../public/img/headerPic.avif"
              buttons={[
                {
                  text: 'Contact Us',
                  bg: 'bg-[#fad171]',
                  textColor: 'primaryColor',
                  link: '/contact',
                },
              ]}
            />
          </div>
        </div>

        <section className="bg-[#253135] services paddingY-axis">
          <MobileAPPdevServices />
        </section>

        <section className="chooseApproach paddingY-axis">
          <ChooseApproach />
        </section>

        <section className="appDevConsultant paddingY-axis">
          <AppDevConsult />
        </section>

        <section className="DevelompentProcess paddingY-axis">
          <DevProcess
            steps={stepsData[0].MobileData}
            defaultStepId={1}
            title={
              <>
                Mobile app development <br className="inline" /> process
              </>
            }
          />
        </section>

        <section className="EngagementModels paddingY-axis">
          <EngagementModels />
        </section>

        <section className="WhyChooseDev bg-[#253135] services paddingY-axis mt-20">
          <WhyChooseDev
            title={
              <>
                WHY CHOOSE Devsync FOR <br className="inline" /> MOBILE
                DEVELOPMENT?
              </>
            }
            cards={WhyChooseCard[0].cardsDataMobile}
          />
        </section>

        <section className="MobileFeatures paddingY-axis">
          <MobileFeatures slides={Slider[0].MobileFeatures} />
        </section>

        <section className="FAQ paddingY-axis">
          <FAQ faqs={MainFaq[0].faqDataMobile} />
        </section>
      </div>
      <section className="paddingY-axis">
        <Contact />
      </section>
    </div>
  )
}

export default WebDevelopment
