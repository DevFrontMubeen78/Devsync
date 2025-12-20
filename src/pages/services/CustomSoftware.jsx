import React from 'react'
import ServicesComponent from '../../components/ServicesComponent'
import BenifitsSoftware from '../../components/CustomSoftware/BenifitsSoftware'
import DontCompromise from '../../components/CustomSoftware/DontCompromise'
import CustomDevSev from '../../components/CustomSoftware/CustomDevSev'
import CustomSoftware from '../../data/CustomSoftware'
import DevProcess from '../../components/MobileAppDev/DevProcess'
import stepsData from '../../data/DevProcess'
import EngagementModels from '../../components/MobileAppDev/EngagementModels'
import WhyChooseDev from '../../components/MobileAppDev/WhyChooseDev'
import WhyChooseCard from '../../data/WhyChooseCard'
import FAQ from '../../components/MobileAppDev/FAQ'
import MainFaq from '../../data/Faq'
import MobileFeatures from '../../components/MobileAppDev/MobileFeatures'
import Slider from '../../data/Slider'
import Contact from '../../components/Contact'
import BreadCrum from '../../components/BreadCrum'

const WebDevelopment = () => {
  return (
    <div className="">
      <div className="bg_section">
        <div className="paddingY-axis">
          <div className="flex flex-col gap-5">
            <BreadCrum
              pages={[
                { name: 'Services', link: '/services' },
                { name: 'Custom Software Development' },
              ]}
            />
            <ServicesComponent
              title="Custom Software Development"
              description="Get software designed to your specific needs and processes."
              imageUrl="../../public/img/custom-software.svg"
              buttons={[
                {
                  text: 'Custom software benefits',
                  textColor: 'color_four',
                  link: '#benifits',
                },
                {
                  text: 'Custom development services',
                  textColor: 'color_four',
                  link: '#cusServ',
                },
                {
                  text: 'Industry-tailored',
                  textColor: 'color_four',
                  link: '#DevProcess',
                },
                {
                  text: 'Engagement models',
                  textColor: 'color_four',
                  link: '#engMod',
                },
                {
                  text: 'Why Devsync',
                  textColor: 'color_four',
                  link: '#whySol',
                },
                { text: 'Cases', textColor: 'color_four', link: '#Cases' },
                { text: 'FAQ', textColor: 'color_four', link: '#faq' },
              ]}
            />
          </div>
        </div>

        <section id="benifits" className="BenifitsSoftware paddingY-axis">
          <BenifitsSoftware />
        </section>

        <section className="bg-[#253135] DontCompromise paddingY-axis">
          <DontCompromise
            title={
              <>
                Don’t compromise on <br />
                <span className="">your business.</span>
              </>
            }
          />
        </section>

        <section id="cusServ" className="CustomDevSev paddingY-axis">
          <CustomDevSev
            title={
              <>
                Custom development <br className="inline" /> services
              </>
            }
            services={CustomSoftware[0].customDev}
          />
        </section>

        <section id="DevProcess" className="DevelompentProcess paddingY-axis">
          <DevProcess
            steps={stepsData[0].CustomDev}
            defaultStepId={1}
            title={
              <>
                INDUSTRY-TAILORED <br className="inline" /> SOFTWARE
              </>
            }
            description="We use our hands-on experience in multiple industries to transform your company goals into an actionable plan and supply it with the required software solution. So, with Devsync offshore software development services, you gain reliable architecture, relevant patterns, and enhanced user engagement."
          />
        </section>

        <section id="engMod" className="EngagementModels paddingY-axis">
          <EngagementModels />
        </section>

        <section
          id="whySol"
          className="bg-[#253135] WhyChooseDev services paddingY-axis mt-20"
        >
          <WhyChooseDev
            title="Why Devsync"
            cards={WhyChooseCard[0].cardsDataCustomDev}
          />
        </section>

        <section id="faq" className="FAQ paddingY-axis">
          <FAQ faqs={MainFaq[0].faqDataCustomDev} />
        </section>

        <section id="Cases" className="MobileFeatures paddingY-axis">
          <MobileFeatures slides={Slider[0].CustomWebFeatures} />
        </section>
      </div>
      <section id="contact" className="paddingY-axis">
        <Contact />
      </section>
    </div>
  )
}

export default WebDevelopment
