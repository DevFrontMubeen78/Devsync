import React from 'react'
import ServicesComponent from '../../components/ServicesComponent'
import BenifitsDedicateTeam from '../../components/DedicatedTeam/BenifitsDedicateTeam'
import WhyClientLove from '../../components/DedicatedTeam/WhyClientLove'
import TypesDedTeam from '../../components/DedicatedTeam/TypesDedTeam'
import ServiceServe from '../../components/DedicatedTeam/ServiceServe'
import DedTechStack from '../../components/DedicatedTeam/DedTechStack'
import DevProcess from '../../components/MobileAppDev/DevProcess'
import stepsData from '../../data/DevProcess'
import CustomDevSev from '../../components/CustomSoftware/CustomDevSev'
import CustomSoftware from '../../data/CustomSoftware'
import MobileFeatures from '../../components/MobileAppDev/MobileFeatures'
import Slider from '../../data/Slider'
import Contact from '../../components/Contact'
import FAQ from '../../components/MobileAppDev/FAQ'
import MainFaq from '../../data/Faq'
import BreadCrum from '../../components/BreadCrum'
// import MobileImg from '../../public/img/headerImageweb.avif';

const WebDevelopment = () => {
  return (
    <div className="">
      <div className="bg_section">
        <div className="flex flex-col gap-5 paddingY-axis">
          {/* Breadcrumb */}
          <BreadCrum
            pages={[
              { name: 'Services', link: '/services' },
              { name: 'HIRE DEDICATED DEVELOPMENT TEAM' },
            ]}
          />

          {/* Discovery Phase Section */}
          <ServicesComponent
            title="HIRE DEDICATED DEVELOPMENT TEAM"
            description="Onboard professional team within 3+ days!"
            imageUrl="../../public/img/discovery.svg"
            buttons={[
              {
                text: 'Hire a team',
                // bg: '',
                textColor: 'color_four',
                link: '/contact',
              },
            ]}
          />
        </div>

        <div className="paddingY-axis">
          <BenifitsDedicateTeam />
        </div>

        <div className="bg-[#253135] paddingY-axis">
          <WhyClientLove
            title={
              <>
                Find out why clients love{' '}
                <span className=""> working with Devsync!</span>
              </>
            }
          />
        </div>

        <div className="paddingY-axis">
          <TypesDedTeam />
        </div>

        <section
          id="DevProcess"
          className="DevelompentProcess paddingY-axis flex flex-col md:gap-20 gap-10"
        >
          <DevProcess
            steps={stepsData[0].DedicatedTeam}
            defaultStepId={1}
            title={
              <>
                Devsync DEDICATED <br className="inline" /> RESOURCES
              </>
            }
          />

          <ServiceServe />
        </section>

        <section id="cusServ" className="CustomDevSev paddingY-axis">
          <CustomDevSev
            title="SETUP PROCESS"
            services={CustomSoftware[0].dedicatedTeam}
          />
        </section>

        <div className="paddingY-axis">
          <DedTechStack />
        </div>

        <section id="MobileFeatures" className="MobileFeatures paddingY-axis">
          <MobileFeatures slides={Slider[0].DedicateTeam} />
        </section>

        <section className="FAQ paddingY-axis">
          <FAQ faqs={MainFaq[0].faqDedicate} />
        </section>
      </div>
      <section id="contact" className="paddingY-axis">
        <Contact />
      </section>
    </div>
  )
}

export default WebDevelopment
