import React from 'react';
import GetAQuote from '../components/GetAQuote';
import ViewButton from '../components/ViewButton';
import ImageSlider from '../components/ImageSlider';
import FeaturesIn from '../components/FeaturesIn';
import Successfull from '../components/Successfull';
import Offer from '../components/Offer';
import DiscussSection from '../components/DiscussSection';
import TopDev from '../components/TopDev';
import ModernTechStack from '../components/ModernTechStack';
import WhySolveIT from '../components/WhySolveIT';
import Portfolio from '../components/Portfolio';
import IndusExperties from '../components/IndusExperties';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';



const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section flex flex-col gap-16 paddingY-axis">
        <div className="container flex flex-col xl:gap-14 lg:gap-10 gap-6">
          {/* Heading Section */}
          <div className="text-left">
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-10 flex-wrap">
              <h1 className="text_one color_one">
                We build
              </h1>
              <img
                className="w-16 sm:w-24 lg:w-32"
                src="/img/stickerDesktop.avif"
                alt="Sticker"
              />
            </div>
            <h1 className="text_one color_one">
              mobile and web apps
            </h1>
          </div>

          {/* Description + Buttons */}
          <div className="w-full flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
            <p className="text_four color_three">
              For startups, SMEs, and enterprises. Business-results oriented & AI-powered 🚀
            </p>
            <div className="hidden lg:flex gap-6 items-center">
              <GetAQuote name="Get A Quote" />
              <ViewButton name="Portfolio" link="/portfolio" />
            </div>
          </div>
        </div>

        <ImageSlider />
      </section>

      {/* Features Section */}
      <section className="feature-section paddingY-axis">
        <FeaturesIn />
      </section>

      {/* Successfull Section */}
      <section className="Successfull paddingY-axis bg_section">
        <Successfull />
      </section>

      {/* Offer Section */}
      <section className="Offer paddingY-axis">
        <Offer />
      </section>

      {/* DiscussSection Section */}
      <section className="DiscussSection paddingY-axis bg_section">
        <DiscussSection />
      </section>

      {/* Top Development Section */}
      <section className="TopDevelopment paddingY-axis">
        <TopDev />
      </section>

      {/* Modern Tect Stack Section */}
      <section className="MordernTech bg_section">
        <ModernTechStack />
      </section>

      {/* why solve IT Section */}
      <section className="solveIT paddingY-axis">
        <WhySolveIT />
      </section>

      {/* Portfolio */}
      <section className="Portfolio paddingY-axis bg_section">
        <Portfolio limit={3} showButton={true} />
      </section>

      {/* IndusExperties Section */}
      <section className="IndusExperties paddingY-axis">
        <IndusExperties />
      </section>

      {/* Testimonial Section */}
      <section className="Testimonial paddingY-axis bg_section">
        <Testimonial />
      </section>

      {/* Contact Section */}
      <section className="Contact paddingY-axis">
        <Contact />
      </section>

    </div>
  );
};

export default Home;
