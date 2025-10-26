import React from 'react'
import BreadCrum from '../../components/BreadCrum'
import Img from '/img/hers.jpeg'
import PortFolioHero from '../../components/PortFolioHero'
import PortfolioClientRev from '../../components/PortfolioClientRev'
import PortFolionAboutProject from '../../components/PortFolionAboutProject'
import PortFolioGoals from '../../components/PortFolioGoals'
import PortfolioLaunc from '../../components/PortfolioLaunc'
import PortFolioSolution from '../../components/PortFolioSolution'
import PortfolioFunctionality from '../../components/PortfolioFunctionality'
import PortFolioMainFeature from '../../components/PortFolioMainFeature'
import Contact from '../../components/Contact'

const Website = () => {
  return (
    <div>
      <section>
        <div className="paddingY-axis">
          <BreadCrum
            pages={[
              { name: 'Portfolio', link: '/portfolio' },
              { name: 'Devsync' },
            ]}
          />
          <PortFolioHero
            heroTitle="Devsync Website"
            heroDesc="Hemie is a web platform designed to innovate the Swedish rental market by enabling users to find and exchange rental properties easily and efficiently."
            heroCat="Portfolio Website"
            heroService="web developement"
            heroImg={Img}
          />
        </div>
      </section>

      {/* client review */}
      <section>
        <PortfolioClientRev
          clientImg="/img/reviewDesktop.avif"
          backgroundColor="bg-[#ffeccc]"
          projectRevTitle="SolveIt took over our app project and has been instrumental in transitioning our service to web."
          projectRevDesc={`"The project management was exemplary. SolveIt's dedication and innovative approach have significantly enhanced our project's potential.User engagement metrics are projected to improve by 50%, and we anticipate a 30% reduction in loading times."`}
          clientName="George Mata, CEO at Hemie"
          clientFlag="https://flagcdn.com/w20/ua.png"
        />
      </section>

      {/* about the projects */}
      <section className="paddingY-axis">
        <PortFolionAboutProject />
      </section>

      {/* The Goals */}
      <section>
        <PortFolioGoals backgroundTab="bg-[#ffeccc]" />
      </section>

      {/* launching web and app */}
      <section>
        <PortfolioLaunc backgroundColor="bg-[#ffeccc]" />
      </section>

      {/* The portfolio solutions */}
      <section className="paddingY-axis">
        <PortFolioSolution />
      </section>

      {/* functionality */}
      <section>
        <PortfolioFunctionality backgroundColor="bg-[#ffeccc]" />
      </section>

      {/* main features */}
      <section className="paddingY-axis">
        <PortFolioMainFeature backgroundCard="#ffeccc" />
      </section>

      {/* Contact */}
      <section className="paddingY-axis">
        <Contact />
      </section>
    </div>
  )
}

export default Website
