import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpinnerOverlay from "./components/Spinner";

// Lazy imports
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Expertise = lazy(() => import("./pages/Expertise"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Services = lazy(() => import("./pages/Services"));
const Website = lazy(() => import("./pages/portfolio/Website"));
const NotFound = lazy(() => import("./components/NotFound"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative flex flex-col min-h-screen">
        <Suspense fallback={<SpinnerOverlay />}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio/devsync" element={<Website />} />
            <Route path="*" element={<NotFound />} /> 
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
