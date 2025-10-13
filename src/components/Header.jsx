import React, { useState } from "react";
import GetAQuote from '../components/GetAQuote';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-[0px_0px_16px_rgba(17,_17,_26,_0.1)] py-4 px-4 sm:px-6 bg-white min-h-[70px] tracking-wide relative z-50">
      <div className="container grid grid-cols-12 items-center max-w-screen-xl mx-auto">
        {/* ===== Logo (smaller column) ===== */}
        <div className="col-span-3 flex items-center">
          <a href="/" className="max-sm:hidden">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-36"
            />
          </a>
          <a href="/" className="hidden max-sm:block">
            <img
              src="https://readymadeui.com/readymadeui-short.svg"
              alt="logo"
              className="w-9"
            />
          </a>
        </div>

        {/* ===== Navigation (larger column) ===== */}
        <div className="col-span-9 flex justify-end items-center">
          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            <li>
              <a
                href="/expertise"
                className="text-slate-900 font-medium hover:text-blue-700 text-base"
              >
                Expertise
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-slate-900 font-medium hover:text-blue-700 text-base"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-slate-900 font-medium hover:text-blue-700 text-base"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                className="text-slate-900 font-medium hover:text-blue-700 text-base"
              >
                Portfolio
              </a>
            </li>
            <li>
              <GetAQuote />
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden cursor-pointer ml-auto"
          >
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-[300px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${menuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 fill-black"
            viewBox="0 0 320.591 320.591"
          >
            <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
            <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922a30.368 30.368 0 0 1-23.078 7.288z" />
          </svg>
        </button>

        {/* Mobile Links */}
        <ul className="flex flex-col gap-6 mt-16 px-6">
          <li>
            <a href="/expertise" className="text-slate-900 font-medium">
              Expertise
            </a>
          </li>
          <li>
            <a href="/services" className="text-slate-900 font-medium">
              Services
            </a>
          </li>
          <li>
            <a href="/about" className="text-slate-900 font-medium">
              About Us
            </a>
          </li>
          <li>
            <a href="/portfolio" className="text-slate-900 font-medium">
              Portfolio
            </a>
          </li>
          <li>
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md text-white font-medium"
            >
              Get a Quote
            </button>
          </li>
        </ul>
      </div>

      {/* ===== Overlay for Mobile ===== */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
