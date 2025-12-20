import React from 'react'
import ServicesComponent from '../../components/ServicesComponent'
import Benefits from '../../components/DiscoverPhase/Benefits'
import IndWeServ from '../../components/DiscoverPhase/IndWeServ'
import DiscoverPhaseSec from '../../components/DiscoverPhase/DiscoverPhaseSec'
import DontCompromise from '../../components/CustomSoftware/DontCompromise'
import DevProcess from '../../components/MobileAppDev/DevProcess'
import stepsData from '../../data/DevProcess'
import WhyChooseDev from '../../components/MobileAppDev/WhyChooseDev'
import WhyChooseCard from '../../data/WhyChooseCard'
import MobileFeatures from '../../components/MobileAppDev/MobileFeatures'
import Slider from '../../data/Slider'
import Contact from '../../components/Contact'
import BreadCrum from '../../components/BreadCrum'
// import MobileImg from '../../public/img/headerImageweb.avif';

const WebDevelopment = () => {
  return (
    <div className="">
      <div className="bg_section paddingY-axis">
        <div className="flex flex-col gap-5">
          {/* Breadcrumb */}
          <BreadCrum
            pages={[
              { name: 'Services', link: '/services' },
              { name: 'Discovery Phase Services' },
            ]}
          />

          {/* Discovery Phase Section */}
          <ServicesComponent
            title="Discovery Phase Services"
            description="Validate your project idea with our comprehensive discovery phase services and get valuable insights to build a truly outstanding product!"
            imageUrl="../../public/img/discovery.svg"
            buttons={[
              {
                text: 'Benefits of the discovery phase',
                textColor: 'color_four',
                link: '#benifits',
              },
              {
                text: 'Discovery process',
                textColor: 'color_four',
                link: '#DiscoverPhaseSec',
              },
              {
                text: 'Steps of discovery ',
                textColor: 'color_four',
                link: '#DevProcess',
              },
              {
                text: 'Industries',
                textColor: 'color_four',
                link: '#IndWeServ',
              },
              {
                text: 'Why Devsync',
                textColor: 'color_four',
                link: '#WhyChooseDev',
              },
              {
                text: 'Cases',
                textColor: 'color_four',
                link: '#MobileFeatures',
              },
              { text: 'Contact Us', textColor: 'color_four', link: '#contact' },
            ]}
          />
        </div>

        <section id="benifits" className="benifits paddingY-axis">
          <Benefits />
        </section>

        <section
          id="DiscoverPhaseSec"
          className="DiscoverPhaseSec paddingY-axis"
        >
          <DiscoverPhaseSec />
        </section>

        <section
          id="DontCompromise"
          className="bg-[#253135] DontCompromise paddingY-axis"
        >
          <DontCompromise
            title={
              <>
                If none of these packages suits you, we’ll propose an offer
                tailored to<span className="GlobleTextColor">your needs</span>
              </>
            }
          />
        </section>

        <section id="DevProcess" className="DevelompentProcess paddingY-axis">
          <DevProcess
            steps={stepsData[0].DiscoverPhaseDev}
            defaultStepId={1}
            title={
              <>
                Steps of discovery <br className="inline" /> phase
              </>
            }
          />
        </section>

        <section id="IndWeServ" className="benifits paddingY-axis">
          <IndWeServ />
        </section>

        <section
          id="WhyChooseDev"
          className="bg-[#253135] WhyChooseDev services paddingY-axis mt-20"
        >
          <WhyChooseDev
            title="Why Devsync"
            cards={WhyChooseCard[0].cardsDataDisPhase}
          />
        </section>

        <section id="MobileFeatures" className="MobileFeatures paddingY-axis">
          <MobileFeatures slides={Slider[0].DiscoverPhaseFeatures} />
        </section>
      </div>
      
      <section id="contact" className="paddingY-axis">
        <Contact />
      </section>
    </div>
  )
}

export default WebDevelopment
