import React from 'react'
import BreadCrum from '../components/BreadCrum'
import ServeRevi from '../components/ServeRevi'
import Contact from '../components/Contact'
import Team from '../components/Team'

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

      {/* Contact section */}
      <section className='paddingY-axis'>
        <Contact />
      </section>

    </div>
  )
}

export default AboutUs
