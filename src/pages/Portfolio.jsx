import React from 'react'
import Portfolios from "../components/Portfolio"
import BreadCrum from '../components/BreadCrum'

const Portfolio = () => {
  return (
    <div>
      {/* hero section */}
      <section className='bg_section paddingY-axis'>
        <BreadCrum pages={[{ name: 'Portfolio' }]} />
        <Portfolios title="Portfolio" />
      </section>
    </div>
  )
}

export default Portfolio
