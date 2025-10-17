import React from 'react'
import TechExpet from "../components/TechExpert"
import Contact from "../components/Contact"
import BreadCrum from '../components/BreadCrum'

const Expertise = () => {
  return (
    <div>
      {/* hero section */}
      <section className='bg_section paddingY-axis'>
        <BreadCrum exPage="Expertise" HomePage="Home" MultipleColor="text-white" />
        <TechExpet />
      </section>

      {/* Contact section */}
      <section className='paddingY-axis'>
        <Contact />
      </section>

    </div>
  )
}

export default Expertise
