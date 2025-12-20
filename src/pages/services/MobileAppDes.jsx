import React from 'react'
import ServicesComponent from '../../components/ServicesComponent'
import UxuiServices from '../../components/AppDesign/UxuiServices'
import MobileAppdesignServices from '../../components/AppDesign/MobileAppdesignServices'
import WebDevServices from '../../components/AppDesign/WebDevServices'
import BrandingServices from '../../components/AppDesign/BrandingServices'
import UxConsultant from '../../components/AppDesign/UxConsultant'
import MotionDesign from '../../components/AppDesign/MotionDesign'
import MobileFeatures from '../../components/MobileAppDev/MobileFeatures'
import Slider from '../../data/Slider'
import Contact from '../../components/Contact'
import BreadCrum from '../../components/BreadCrum'

const WebDevelopment = () => {
  return (
    <div className="">
      <div className="bg_section flex flex-col gap-5 paddingY-axis">
        <BreadCrum
          pages={[
            { name: 'Services', link: '/services' },
            { name: 'APP DESIGN SERVICES' },
          ]}
        />
        <ServicesComponent
          title="APP DESIGN SERVICES"
          description="Our mobile app design approach embraces the needs of people, technology best practices, and business requirements. We create designs that users love."
          imageUrl="../../public/img/app-desig.avif"
          buttons={[
            { text: 'UX/UI Design', textColor: 'color_four', link: '#UxuiServices' },
            { text: 'Mobile App Design', textColor: 'color_four', link: '#MobileAppdesignServices' },
            { text: 'Web App Design', textColor: 'color_four', link: '#WebDevServices' },
            { text: 'Branding', textColor: 'color_four', link: '#BrandingServices' },
            { text: 'Design Consulting', textColor: 'color_four', link: '#UxConsultant' },
            { text: 'Motion Design', textColor: 'color_four', link: '#MotionDesign' },
          ]}
        />
      </div>

      <div id='UxuiServices' className="paddingY-axis">
        <UxuiServices />
      </div>

      <div id='MobileAppdesignServices'
        className="bg_section paddingY-axis bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('../../../public/img/mobileAppBackground.png",
        }}
      >
        <MobileAppdesignServices />
      </div>

      <div id='WebDevServices' className="paddingY-axis">
        <WebDevServices />
      </div>

      <div id='BrandingServices' className="paddingY-axis">
        <BrandingServices />
      </div>

      <div id='UxConsultant' className="paddingY-axis">
        <UxConsultant />
      </div>

      <div id='MotionDesign' className="paddingY-axis">
        <MotionDesign />
      </div>

      <section className="MobileFeatures bg_section paddingY-axis">
        <MobileFeatures slides={Slider[0].MotonApp} />
      </section>

      <section className="paddingY-axis">
        <Contact />
      </section>
    </div>
  )
}

export default WebDevelopment
