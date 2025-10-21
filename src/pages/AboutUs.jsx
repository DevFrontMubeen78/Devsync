import React from 'react'
import BreadCrum from '../components/BreadCrum'
import ServeRevi from '../components/ServeRevi'
import Contact from '../components/Contact'
import Team from '../components/Team'
import TechStack from '../components/TechStack'
import Industries from '../components/Industries'
import WhyWorkWIthSolve from '../components/WhyWorkWIthSolve'

const AboutUs = () => {
  return (
    <div>
      {/* hero section */}
      <section className="paddingY-axis bg-[url('/img/noise2.png')] bg-cover bg-center bg-no-repeat">
        <BreadCrum exPage="About Us" HomePage="Home" />
        <ServeRevi pageName="About Us" />
      </section>


      {/* Team section */}
      <section className='paddingY-axis'>
        <Team />
      </section>

      {/* Teck Stack section */}
      <section className='bg_section paddingY-axis'>
        <TechStack />
      </section>

      {/* industries section */}
      <section className=' paddingY-axis'>
        <Industries />
      </section>

      {/* wha work section */}
      <section className=''>
        <WhyWorkWIthSolve />
      </section>

      {/* Contact section */}
      <section className='paddingY-axis'>
        <Contact />
      </section>

    </div>
  )
}

export default AboutUs
