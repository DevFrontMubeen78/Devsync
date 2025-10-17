import React from 'react'
import Portfolios from "../components/Portfolio"
import BreadCrum from '../components/BreadCrum'

const Portfolio = () => {
  return (
    <div>
      {/* hero section */}
      <section className='bg_section paddingY-axis'>
        <BreadCrum exPage="Portfolio" HomePage="Home" MultipleColor="text-white" />
        <Portfolios />
      </section>
    </div>
  )
}

export default Portfolio
