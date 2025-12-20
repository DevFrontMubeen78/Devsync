import React from 'react'
import softwareImg from '../../../public/img/benefits.avif'

const BenifitsSoftware = () => {
  const benefits = [
    "Designed for specific business process",
    "Full control",
    "Easy to modify and scale",
    "Don’t pay for the functionality you don’t use",
    "No subscription or royalty fees",
    "The technology of your choice"
  ]

  return (
    <div className="container flex flex-col md:flex-row items-center gap-10 md:gap-16">

      {/* LEFT IMAGE */}
      <div className="w-full md:w-1/2">
        <img 
          src={softwareImg} 
          alt="software-benefits" 
          className="w-full rounded-xl shadow-md"
        />
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="w-full md:w-1/2">
        <h2 className="Heading3 secondaryColor mb-6">
          Benefits of custom software
        </h2>

        <ul className="space-y-4">
          {benefits.map((item, index) => (
            <li 
              key={index}
              className="flex items-start gap-3 Text3 secondaryColor"
            >
              <span className="GlobleTextColor">
                /
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default BenifitsSoftware
