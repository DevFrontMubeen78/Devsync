import React, { useState } from 'react'
import { MapPin } from 'lucide-react'

const PortFolionAboutProject = () => {
  // default city set
  const [activeCity, setActiveCity] = useState('Paris')

  const cities = [
    { name: 'Paris', top: '25%', left: '45%' },
    { name: 'London', top: '35%', left: '40%' },
    { name: 'Berlin', top: '45%', left: '60%' },
    { name: 'Rome', top: '65%', left: '50%' },
    { name: 'Madrid', top: '60%', left: '35%' },
  ]

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-10 text-left">
          <h2 className="text_two color_one text-2xl md:text-4xl font-semibold">
            About the project
          </h2>

          {/* The Impact */}
          <div>
            <h3 className="text_three color_one mb-2">The Impact</h3>
            <p className="text_four color_three">
              Our project delivered transformative digital strategies,
              increasing the client’s online presence and brand recognition
              across Europe.
            </p>
          </div>

          {/* The Client */}
          <div>
            <h3 className="text_three color_one mb-2">The Client</h3>
            <p className="text_four color_three">
              BloomHouse Marketing is a creative agency based in Europe,
              specializing in brand growth and content innovation.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (Map + Markers) */}
        <div className="relative w-full h-[360px] sm:h-[350px] md:h-[400px] rounded-4xl shadow-lg overflow-hidden">
          <img
            src="/img/map.jpeg"
            alt="Europe Map"
            className="w-full h-full object-cover"
          />

          {/* City Markers */}
          {cities.map((city) => (
            <div
              key={city.name}
              className="absolute transition-all duration-300 cursor-pointer"
              style={{
                top: city.top,
                left: city.left,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => setActiveCity(city.name)}
              // ❌ removed onMouseLeave — so it stays active
            >
              <MapPin
                size={activeCity === city.name ? 36 : 22}
                className={`text-blue-600 drop-shadow-md transition-transform duration-300 ${
                  activeCity === city.name
                    ? 'scale-125 text-blue-700'
                    : 'scale-100 opacity-80'
                }`}
              />

              {activeCity === city.name && (
                <div
                  className="absolute top-[-55px] left-1/2 -translate-x-1/2 
                  bg-white text-gray-900 text-sm md:text-base font-semibold 
                  px-4 py-2 rounded-xl shadow-lg border border-blue-100 
                  whitespace-nowrap transition-all duration-300 scale-110"
                >
                  🌍 {city.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortFolionAboutProject
