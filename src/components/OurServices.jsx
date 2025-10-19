import React from "react";
import { ArrowRight } from "lucide-react";

const OurServices = () => {
  // 🔹 Dynamic data (array of objects with link names & URLs)
  const services = [
    {
      title: "Web Development",
      description:
        "We build scalable and responsive web applications using modern technologies.",
      links: [
        { name: "Frontend Development", url: "/services/frontend" },
        { name: "Backend APIs", url: "/services/backend" },
        { name: "Full Stack Solutions", url: "/services/fullstack" },
      ],
    },
    {
      title: "Mobile Apps",
      description:
        "Delivering user-friendly mobile apps for Android and iOS platforms.",
      links: [
        { name: "React Native Apps", url: "/services/react-native" },
        { name: "Flutter Solutions", url: "/services/flutter" },
        { name: "App Maintenance", url: "/services/maintenance" },
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Crafting intuitive interfaces and delightful user experiences.",
      links: [
        { name: "Wireframing", url: "/services/wireframing" },
        { name: "Prototyping", url: "/services/prototyping" },
        { name: "Design Systems", url: "/services/design-systems" },
      ],
    },
    {
      title: "Digital Marketing",
      description:
        "Boosting online presence through SEO, SEM, and social campaigns.",
      links: [
        { name: "SEO Optimization", url: "/services/seo" },
        { name: "Content Strategy", url: "/services/content-strategy" },
        { name: "Paid Ads Management", url: "/services/ads" },
      ],
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Building secure and feature-rich e-commerce platforms.",
      links: [
        { name: "Shopify Stores", url: "/services/shopify" },
        { name: "WooCommerce", url: "/services/woocommerce" },
        { name: "Custom Integrations", url: "/services/custom-integrations" },
      ],
    },
    {
      title: "Cloud Services",
      description:
        "Enabling cloud migration, automation, and scalable infrastructure.",
      links: [
        { name: "AWS Setup", url: "/services/aws" },
        { name: "DevOps CI/CD", url: "/services/devops" },
        { name: "Cloud Security", url: "/services/cloud-security" },
      ],
    },
    {
      title: "Cybersecurity",
      description:
        "Protecting your data and applications from evolving threats.",
      links: [
        { name: "Security Audits", url: "/services/audits" },
        { name: "Penetration Testing", url: "/services/pentest" },
        { name: "Compliance Checks", url: "/services/compliance" },
      ],
    },
    {
      title: "Data Analytics",
      description:
        "Turning raw data into valuable business insights.",
      links: [
        { name: "Data Warehousing", url: "/services/data-warehousing" },
        { name: "BI Dashboards", url: "/services/bi-dashboards" },
        { name: "Predictive Analytics", url: "/services/predictive" },
      ],
    },
    {
      title: "AI & Automation",
      description:
        "Streamlining processes using AI models and automation pipelines.",
      links: [
        { name: "Chatbots", url: "/services/chatbots" },
        { name: "ML Models", url: "/services/ml-models" },
        { name: "Process Automation", url: "/services/automation" },
      ],
    },
    {
      title: "Brand Strategy",
      description:
        "Helping brands build strong digital identities and storytelling.",
      links: [
        { name: "Logo Design", url: "/services/logo" },
        { name: "Brand Guidelines", url: "/services/brand-guidelines" },
        { name: "Market Research", url: "/services/market-research" },
      ],
    },
    {
      title: "Consulting",
      description:
        "Guiding businesses toward digital transformation and growth.",
      links: [
        { name: "Tech Consulting", url: "/services/tech-consulting" },
        { name: "Strategy Planning", url: "/services/strategy" },
        { name: "Workshops", url: "/services/workshops" },
      ],
    },
    {
      title: "Support & Maintenance",
      description:
        "Ensuring systems run smoothly with 24/7 technical support.",
      links: [
        { name: "Bug Fixing", url: "/services/bug-fixing" },
        { name: "System Updates", url: "/services/system-updates" },
        { name: "Performance Optimization", url: "/services/optimization" },
      ],
    },
  ];

  return (
    <div className="container flex flex-col gap-10">
      <h1 className="text_two color_two">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#26363b] p-6 rounded-2xl shadow-md border border-gray-700"
          >
            {/* Heading */}
            <h2 className="text_three color_two mb-2">{service.title}</h2>

            {/* Border bottom */}
            <div className="border-b border-gray-500 mb-3"></div>

            {/* Paragraph */}
            <p className="text_four mb-4">
              {service.description}
            </p>

            {/* Links List */}
            <ul className="space-y-2">
              {service.links.map((link, i) => (
                <li key={i} className="text_five color_four flex items-center gap-2">
                  <a
                    href={link.url}
                    className="list underline-offset-2"
                  >
                    {link.name}
                  </a>
                  <ArrowRight size={16} className="mr-2 text-gray-400 -rotate-45" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
