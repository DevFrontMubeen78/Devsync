import React from 'react'
import HeroUiux from '../../components/UiuxDesign/HeroUiux'
import UiuxConsult from '../../components/UiuxDesign/UiuxConsult'
import UiuxSlider from '../../components/UiuxDesign/UiuxSlider'
import TrustedUiux from '../../components/UiuxDesign/TrustedUiux'
import UiuxProcess from '../../components/UiuxDesign/UiuxProcess'
import WhyChooseUiux from '../../components/UiuxDesign/WhyChooseUiux'
import Portfolio from '../../components/Portfolio'
import FaqUiux from '../../components/UiuxDesign/FaqUiux'
import UiuxDesignServices from '../../components/UiuxDesign/UiuxDesignServices'
import Uiux from '../../../public/img/bg-uiux.jpg'

const UiuxDesing = () => {
  return (
    <div>
      <section
        className="paddingY-axis flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Uiux})`,
        }}
      >
        <HeroUiux />
      </section>

      <section className="bg-[#000] paddingY-axis">
        <UiuxDesignServices />
      </section>

      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Uiux})`,
        }}
      >
        <div className="paddingY-axis">
          <UiuxConsult />
        </div>
        <UiuxSlider />
      </section>

      <section className="bg-[#253135] paddingY-axis">
        <TrustedUiux
          title={
            <>
              Looking for a trusted UI/UX design services company?
              <span className="GlobleTextColor">Contact DevSync! </span>
            </>
          }
        />
      </section>

      <section
        className="bg-cover bg-center bg-no-repeat sticky"
        style={{
          backgroundImage: `url(${Uiux})`,
        }}
      >
        <UiuxProcess />
      </section>

      <section className="bg-[#253135] paddingY-axis flex flex-col lg:gap-30 md:gap-20 gap-10">
        <WhyChooseUiux />
        <Portfolio
          limit={3}
          showButton={true}
          title={
            <>
              Our Portfolio in UI/UX <br className="inline" /> design and
              development
            </>
          }
        />
      </section>

      <section
        className="bg-cover bg-center bg-no-repeat paddingY-axis"
        style={{
          backgroundImage: `url(${Uiux})`,
        }}
      >
        <FaqUiux />
      </section>
    </div>
  )
}

export default UiuxDesing
