import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Package, Truck } from "lucide-react";
import { FaStethoscope } from "react-icons/fa";
import { FaMedapps } from "react-icons/fa6";

const cards = [
  {
    title: "Retail & E-commerce",
    description:
      "Custom e-commerce software with a powerful admin panel, payment integrations, inventory management, real-time reporting, shipping automation, loyalty program, and more.",
    list: [
      "Retail mobile applications",
      "Marketplaces",
      "Store inventory software",
      "Order management solutions",
    ],
    cases: [
      { name: "Mobile store of eco-products", link: "/portfolio/natural-health" },
      { name: "Children's store app", link: "/portfolio/mobile-app-for-children-store" },
    ],
    icon: <ShoppingCart />,
  },
  {
    title: "Healthcare",
    description:
      "Increase patient engagement and get positive healthcare outcomes with digital products and technology services for healthcare practitioners and organizations.",
    list: [
      "Health tracking applications",
      "Patient portals",
      "Apps for clinics, pharmacies, and medical centers",
      "Telemedicine software",
    ],
    cases: [{ name: "Dental center app", link: "/portfolio/med-expert-app" }],
    icon: <FaStethoscope />,
  },
  {
    title: "Transportation and Logistics",
    description:
      "Scalable software with intuitive interfaces and interactive maps to help clients get fast and easy access to transportation and logistics services.",
    list: [
      "Supply chain management solutions",
      "Warehouse management software",
      "Delivery and taxi apps",
      "Vehicle sharing and rental apps",
      "Route planning apps",
    ],
    cases: [
      { name: "Cargo ordering app", link: "/portfolio/coucouvan" },
      { name: "On-demand services app", link: "/portfolio/ymaster" },
      { name: "Car dealer app", link: "/portfolio/maximum-avto" },
    ],
    icon: <Truck />,
  },
  {
    title: "Travel & Booking",
    description: "Software for advanced traveler’s experience and agency sales growth.",
    list: [
      "Travel agency portals",
      "Booking apps",
      "Hotel management systems",
      "Trip planning software",
    ],
    cases: [{ name: "Flight tickets booking app", link: "/portfolio/vityaz-aero" }],
    icon: <Package />,
  },
  {
    title: "Telecom and social",
    description:
      "Custom solutions for internet and media service companies to manage business processes, and partners, extend service coverage, and improve client engagement.",
    list: [
      "Telecom service apps",
      "Social media solutions",
      "Client engagement platforms",
      "Business process automation",
    ],
    cases: [],
    icon: <FaMedapps />,
  },
  {
    title: "Finance",
    description:
      "We design and develop secure and compliant software with microservices technology that improves the financial experience.",
    list: [
      "Digital banking and neobank software",
      "Personal finance management apps",
      "E-wallets",
      "Leasing software",
      "Investment apps",
    ],
    cases: [],
    icon: <Truck />,
  },
];

function TechExpert() {
  return (
    <section className="container flex flex-col gap-20">
      <h2 className="Heading3 secondaryColor mb-12">Industry-specific Software</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
        {cards.map((card) => (
          <article
            key={card.title}
            className="relative border border-gray-600 rounded-none overflow-visible p-6"
          >
            {/* Icon Circle */}
            <div className="absolute -top-8 left-6 z-10 bg_section">
              <div className="w-16 h-16 flex items-center justify-center bg-transparent border border-gray-600 transition-all duration-500 ease-in-out group-hover:rounded-full">
                {card.icon}
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4">
              <h3 className="Heading4 GlobleTextColor mb-2">{card.title}</h3>

              <p className="Text3 secondaryColor mb-4">{card.description}</p>

              <ul className="space-y-1 mb-4">
                {card.list.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 Text3 secondaryColor">
                    <span className="Text3 GlobleTextColor inline-block w-4">/</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* <div className="flex flex-wrap gap-3">
                {card.cases.map((btn, i) => (
                  <Link
                    key={i}
                    to={btn.link}
                    className="inline-block Text4 secondaryColor px-3 py-2 border border-gray-600 rounded-md transition-all duration-300 GlobleHC"
                  >
                    {btn.name}
                  </Link>
                ))}
              </div> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TechExpert;
