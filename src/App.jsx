import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spinner from "./components/Spinner";

const Header = lazy(() => import("../src/components/Header"));
const Footer = lazy(() => import("../src/components/Footer"));
const Home = lazy(() => import("../src/pages/Home"));
const AboutUs = lazy(() => import("../src/pages/AboutUs"));
const Contact = lazy(() => import("../src/pages/Contact"));
const Expertise = lazy(() => import("../src/pages/Expertise"));
const Portfolio = lazy(() => import("../src/pages/Portfolio"));
const Services = lazy(() => import("../src/pages/Services"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen bg-[#132440]/80">
            {/* <Spinner /> */}
            loading...
          </div>
        }
      >
        <Header />
        <main className="min-h-[70vh] py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
