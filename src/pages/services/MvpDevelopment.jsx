import React from 'react'
import ServicesComponent from '../../components/ServicesComponent'
import WebAppDeliv from '../../components/WebDevServices/WebAppDeliv'
import dashedComp from '../../data/DashedComp'
import DontCompromise from '../../components/CustomSoftware/DontCompromise'
import WhyMvpDev from '../../components/MvpDev/WhyMvpDev'
import MvpTechStack from '../../components/MvpDev/MvpTechStack'
import WhyChooseDev from '../../components/MobileAppDev/WhyChooseDev'
import WhyChooseCard from '../../data/WhyChooseCard'
import EngagementModels from '../../components/MobileAppDev/EngagementModels'
import FAQ from '../../components/MobileAppDev/FAQ'
import MainFaq from '../../data/Faq'
import MobileFeatures from '../../components/MobileAppDev/MobileFeatures'
import Slider from '../../data/Slider'
import Contact from '../../components/Contact'
import BreadCrum from '../../components/BreadCrum'
// import MobileImg from '../../public/img/headerImageweb.avif';

const WebDevelopment = () => {
  return (
    <div className="">
      <div className="bg_section">
        <div className="flex flex-col gap-5 paddingY-axis">
          <BreadCrum
            pages={[
              { name: 'Services', link: '/services' },
              { name: 'Mvp development' },
            ]}
          />
          <ServicesComponent
            title="MVP development services for startups"
            description="Full-cycle MVP development services from discovery to app publishing in stores. Launch fully functioning MVP within 3 months!"
            imageUrl="../../public/img/rocket-mvp.svg"
            buttons={[
              {
                text: 'MVP services',
                textColor: 'color_four',
                link: '#WebAppDeliv',
              },
              { text: 'Why MVP', textColor: 'color_four', link: '#WhyMvpDev' },
              {
                text: 'MVP TechStach',
                textColor: 'color_four',
                link: '#MvpTechStack',
              },
              { text: 'Why choose', textColor: 'color_four', link: '#WhyChooseDev' },
              { text: 'Engagement models', textColor: 'color_four', link: '#EngagementModels' },
              { text: 'Q&A', textColor: 'color_four', link: '#FAQ' },
              { text: 'Mobile Features', textColor: 'color_four', link: '#MobileFeatures' },
              { text: 'Get a quote', textColor: 'color_four', link: '#contect' },
            ]}
          />
        </div>

        <section id="WebAppDeliv" className="services paddingY-axis">
          <WebAppDeliv
            title="MVP services"
            data={dashedComp[0].DashedMVPComponent}
            showItems={false}
          />
        </section>

        <section id='DontCompromise' className="bg-[#253135] DontCompromise paddingY-axis">
          <DontCompromise
            title={
              <>
                let’s solve it <span className="">together!</span>
              </>
            }
          />
        </section>

        <section id="WhyMvpDev" className="services paddingY-axis">
          <WhyMvpDev />
        </section>

        <section id="MvpTechStack" className="services paddingY-axis">
          <MvpTechStack />
        </section>

        <section id="WhyChooseDev"
          className="bg-[#253135] WhyChooseDev services paddingY-axis mt-20"
        >
          <WhyChooseDev
            title={
              <>
                Why Choose Devsync for
                <br className="inline" /> MVP Development
              </>
            }
            cards={WhyChooseCard[0].cardsDataMvp}
          />
        </section>

        <section id='EngagementModels' className="EngagementModels paddingY-axis">
          <EngagementModels />
        </section>

        <section id='FAQ' className="FAQ paddingY-axis">
          <FAQ faqs={MainFaq[0].faqDataMvp} />
        </section>

        <section id='MobileFeatures' className="MobileFeatures paddingY-axis">
          <MobileFeatures slides={Slider[0].MvpFeatures} />
        </section>
      </div>
      <section id='contect' className="paddingY-axis">
        <Contact />
      </section>
    </div>
  )
}

export default WebDevelopment
