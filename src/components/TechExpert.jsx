import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Package, Truck } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Retail & E-commerce",
    desc:
      "Custom e-commerce software with a powerful admin panel, payment integrations, inventory management, real-time reporting, shipping automation, loyalty program, and more.",
    features: [
      "Retail mobile applications",
      "Inventory & order sync",
      "Payment gateway integrations",
      "Shipping automation",
      "Loyalty & coupon engines",
    ],
    icon: <ShoppingCart size={28} />,
  },
  {
    id: 2,
    title: "Supply Chain",
    desc: "Supply chain visibility, warehouse management, and logistics automation.",
    features: ["WMS", "Track & trace", "Automated reordering"],
    icon: <Truck size={28} />,
  },
  {
    id: 3,
    title: "Wholesale & B2B",
    desc: "B2B portals, price lists, credit management, and bulk order workflows.",
    features: ["B2B portal", "Volume pricing", "PO workflows"],
    icon: <Package size={28} />,
  },
  {
    id: 4,
    title: "Real Estate Tech",
    desc: "Smart property management systems and automation tools.",
    features: ["Property listings", "Payment tracking", "Tenant portals"],
    icon: <Package size={28} />,
  },
  {
    id: 5,
    title: "Healthcare",
    desc: "Clinic management and telehealth solutions.",
    features: ["Patient records", "Appointment scheduling", "e-Prescriptions"],
    icon: <Truck size={28} />,
  },
  {
    id: 6,
    title: "Education",
    desc: "Learning management systems and online course platforms.",
    features: ["Course creation", "Student portal", "Payment integration"],
    icon: <ShoppingCart size={28} />,
  },
];

function TechExpert() {
  return (
    <section className="container flex flex-col gap-20">
      <h2 className="text-2xl md:text-5xl font-extrabold text-center md:text-left uppercase mb-12">
        Industry-specific Software
      </h2>

      {/* 2 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
        {cards.map((card) => (
          <article
            key={card.id}
            className="relative border border-gray-600 rounded-none overflow-visible p-6"
          >
            {/* Icon Circle */}
            <div className="absolute -top-8 left-6 z-10 bg_section">
              <div className="w-16 h-16 flex items-center justify-center bg-transparent border border-gray-600 transition-all duration-500 ease-in-out group-hover:rounded-full">
                {card.icon}
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4">
              <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>

              {/* Paragraph updated */}
              <p className="paragraph mb-4">{card.desc}</p>

              <ul className="space-y-1 mb-4">
                {card.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 list">
                    <span className="inline-block w-4">/</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="#"
                  className="inline-block text-sm px-3 py-2 border border-gray-600 rounded-md transition-all duration-300 hover:bg-[#025c9e] hover:text-[#fff]"
                >
                  Mobile store of eco-products
                </Link>
                <Link
                  to="#"
                  className="inline-block text-sm px-3 py-2 border border-gray-600 rounded-md transition-all duration-300 hover:bg-[#025c9e] hover:text-[#fff]"
                >
                  Children's store app
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TechExpert
