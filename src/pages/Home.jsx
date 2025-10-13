import React from 'react';
import GetAQuote from '../components/GetAQuote';
import ViewButton from '../components/ViewButton';
import ImageSlider from '../components/ImageSlider';
import FeaturesIn from '../components/FeaturesIn';
import Successfull from '../components/Successfull';
import Offer from '../components/Offer';
import DiscussSection from '../components/DiscussSection';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section flex flex-col gap-6 paddingTop">
        <div className="container max-w-screen-xl mx-auto flex flex-col xl:gap-14 lg:gap-10 gap-6">
          {/* Heading Section */}
          <div className="text-left">
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-10 flex-wrap">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl md:text-5xl font-extrabold leading-tight">
                We build
              </h1>
              <img
                className="w-16 sm:w-24 lg:w-32"
                src="/img/stickerDesktop.avif"
                alt="Sticker"
              />
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl md:text-5xl font-extrabold leading-tight">
              mobile and web apps
            </h1>
          </div>

          {/* Description + Buttons */}
          <div className="w-full flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
            <p className="text-base sm:text-lg max-w-2xl leading-relaxed text-left">
              For startups, SMEs, and enterprises. Business-results oriented & AI-powered 🚀
            </p>
            <div className="hidden xl:flex gap-6 items-center">
              <GetAQuote />
              <ViewButton name="Portfolio" link="#" />
            </div>
          </div>
        </div>

        <div className="">
          <ImageSlider />
        </div>
      </section>

      {/* Features Section */}
      <section className="feature-section">
        <FeaturesIn />
      </section>

      {/* Features Section */}
      <section className="Successfull">
        <Successfull />
      </section>

      {/* Features Section */}
      <section className="Offer">
        <Offer />
      </section>

      {/* connect Section */}
      <section className="DiscussSection">
        <DiscussSection />
      </section>

    </div>
  );
};

export default Home;
