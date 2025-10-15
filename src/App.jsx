import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpinnerOverlay from "./components/Spinner";

const Header = lazy(() => import("../src/components/Header"));
const Footer = lazy(() => import("../src/components/Footer"));
const Home = lazy(() => import("../src/pages/Home"));
const AboutUs = lazy(() => import("../src/pages/AboutUs"));
const ContactUs = lazy(() => import("../src/pages/ContactUs"));
const Expertise = lazy(() => import("../src/pages/Expertise"));
const Portfolio = lazy(() => import("../src/pages/Portfolio"));
const Services = lazy(() => import("../src/pages/Services"));

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <main className="min-h-[70vh] py-8 relative">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<SpinnerOverlay />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<SpinnerOverlay />}>
                <AboutUs />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<SpinnerOverlay />}>
                <ContactUs />
              </Suspense>
            }
          />
          <Route
            path="/expertise"
            element={
              <Suspense fallback={<SpinnerOverlay />}>
                <Expertise />
              </Suspense>
            }
          />
          <Route
            path="/portfolio"
            element={
              <Suspense fallback={<SpinnerOverlay />}>
                <Portfolio />
              </Suspense>
            }
          />
          <Route
            path="/services"
            element={
              <Suspense fallback={<SpinnerOverlay />}>
                <Services />
              </Suspense>
            }
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
