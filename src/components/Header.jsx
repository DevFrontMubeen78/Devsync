import React, { useState, useEffect } from "react";
import GetAQuote from "../components/QuoteBtnPage";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // Fix for iOS
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 shadow-[0px_0px_16px_rgba(11,_11,_26,_0.1)] py-4 px-4 sm:px-6 bg-white/70 backdrop-blur-xs tracking-wide z-50 transition-all duration-300">
      <div className="container grid grid-cols-12 items-center">
        {/* Logo */}
        <div className="col-span-3 flex items-center">
          <a href="/" className="max-sm:hidden">
            <img src="/img/dev-logo.png" alt="logo" className="w-20" />
          </a>
          <a href="/" className="hidden max-sm:block">
            <img src="/img/dev-logo.png" alt="logo" className="w-20" />
          </a>
        </div>

        {/* Navigation */}
        <div className="col-span-9 flex justify-end items-center">
          <ul className="hidden lg:flex items-center gap-8">
            <li className="list">
              <a href="/expertise" className="font-medium hover:text-[#025c9e] text-md">Expertise</a>
            </li>
            <li className="list">
              <a href="/services" className="font-medium hover:text-[#025c9e] text-md">Services</a>
            </li>
            <li className="list">
              <a href="/about" className="font-medium hover:text-[#025c9e] text-md">About Us</a>
            </li>
            <li className="list">
              <a href="/portfolio" className="font-medium hover:text-[#025c9e] text-md">Portfolio</a>
            </li>
            <li className="list"><GetAQuote name="Get A Quote" /></li>
          </ul>

          {/* Mobile Toggle */}
          <button onClick={() => setMenuOpen(true)} className="lg:hidden cursor-pointer ml-auto">
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-y-auto fixed top-0 bottom-0 right-0 w-2/3 max-w-[350px] h-[100vh] bg-white rounded-tl-3xl shadow-xl transform transition-transform duration-300 ease-in-out z-50
        ${menuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 z-[100] rounded-full bg-white/50 backdrop-blur-sm w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-black" viewBox="0 0 320.591 320.591">
            <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
            <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922a30.368 30.368 0 0 1-23.078 7.288z" />
          </svg>
        </button>

        <ul className="flex flex-col gap-6 mt-16 px-6 py-2">
          <li className="list">
            <a href="/" className="hidden max-sm:block">
              <img src="/img/dev-logo.png" alt="logo" className="w-20" />
            </a>
          </li>
          <li className="list border-b border-gray-100 py-2"><a href="/expertise" className="font-medium">Expertise</a></li>
          <li className="list border-b border-gray-100 py-2"><a href="/services" className="font-medium">Services</a></li>
          <li className="list border-b border-gray-100 py-2"><a href="/about" className="font-medium">About Us</a></li>
          <li className="list"><a href="/portfolio" className="font-medium">Portfolio</a></li>
          <li className="list pt-4"><GetAQuote name="Get A Quote" /></li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-white/90 backdrop-blur-xs z-40 lg:hidden transition-all duration-300"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
