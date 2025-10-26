import React from 'react'
import BreadCrum from '../components/BreadCrum'
import ServeRevi from '../components/ServeRevi'
import OurServices from '../components/OurServices'
import Contact from '../components/Contact'

const Services = () => {
  return (
    <div>
      {/* hero section */}
      <section className="paddingY-axis bg-[url('/img/noise2.png')] bg-cover bg-center bg-no-repeat">
        <BreadCrum pages={[{ name: 'Services' }]} />
         <ServeRevi pageName="Services" />
      </section>


      {/* OurServices section */}
      <section className='bg_section paddingY-axis'>
        <OurServices />
      </section>

      {/* Contact section */}
      <section className='paddingY-axis'>
        <Contact />
      </section>

    </div>
  )
}

export default Services
