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
const WebDevelopment = lazy(() => import("./pages/services/WebDevelopment"));
const MobileAppDev = lazy(() => import("./pages/services/MobileAppDev"));
const CustomSoftware = lazy(() => import("./pages/services/CustomSoftware"));
const MvpDevelopment = lazy(() => import("./pages/services/MvpDevelopment"));
const DiscoverPhase = lazy(() => import("./pages/services/DiscoverPhase"));
const DedicatedTeam = lazy(() => import("./pages/services/DedicatedTeam"));
const MobileAppDes = lazy(() => import("./pages/services/MobileAppDes"));
const UiuxDesing = lazy(() => import("./pages/services/UiuxDesing"));
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
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDev />} />
            <Route path="/services/custom-software" element={<CustomSoftware />} />
            <Route path="/services/mvp-development" element={<MvpDevelopment />} />
            <Route path="/services/discover-phase-services" element={<DiscoverPhase />} />
            <Route path="/services/dedicated-team" element={<DedicatedTeam />} />
            <Route path="/services/mobile-app-design" element={<MobileAppDes />} />
            <Route path="/services/ui-ux-design" element={<UiuxDesing />} />
            <Route path="*" element={<NotFound />} /> 
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
