import React, { useState } from 'react'

const PortFolioMainFeature = ({ backgroundCard }) => {
  const [activeCard, setActiveCard] = useState(0)

  const cards = [
    {
      title: 'Creative Design',
      desc: 'Modern and visually appealing designs tailored to your brand.',
    },
    {
      title: 'Responsive Layout',
      desc: 'Seamless performance across all screen sizes and devices.',
    },
    {
      title: 'Fast Performance',
      desc: 'Optimized code ensures smooth and quick user experience.',
    },
    {
      title: 'SEO Friendly',
      desc: 'Boost your visibility with SEO-optimized website structure.',
    },
  ]

  const listItems = [
    {
      title: 'High Client Satisfaction',
      desc: 'Our designs consistently receive top ratings and client praise.',
      rating: 5,
    },
    {
      title: 'Award-Winning Projects',
      desc: 'Recognized for creativity and innovation across industries.',
      rating: 4,
    },
    {
      title: 'Continuous Support',
      desc: 'We stay with you post-launch to ensure lasting success.',
      rating: 3,
    },
    {
      title: 'Timely Delivery',
      desc: 'Projects delivered on schedule without compromising quality.',
      rating: 4,
    },
    {
      title: 'Innovative Solutions',
      desc: 'We bring modern and cutting-edge ideas to your brand identity.',
      rating: 5,
    },
  ]

  return (
    <div className="container flex flex-col md:gap-20 gap-10">
      {/* first row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT COLUMN */}
        <div className="w-full flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text_two color_one text-2xl md:text-4xl font-semibold">
              Our Main Features
            </h2>
            <p className="text_four colur_three">
              Discover the key features that make our portfolio stand out and
              deliver outstanding results for our clients.
            </p>
          </div>

          <div className="space-y-6">
            {cards.map((card, index) => (
              <div
                key={index}
                onMouseEnter={() =>
                  window.innerWidth >= 768 && setActiveCard(index)
                }
                className={`border border-gray-300 rounded-3xl p-5 transition-all duration-300 ${
                  activeCard === index
                    ? 'md:translate-x-8 md:shadow-lg'
                    : 'translate-x-0 bg-[#ffffff]'
                }`}
                style={{
                  cursor: window.innerWidth >= 768 ? 'pointer' : 'default',
                  background:
                    activeCard === index
                      ? backgroundCard || '#ffeccc'
                      : '#ffffff',
                }}
              >
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text_four colur_three">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - IMAGE */}
        <div className="w-full">
          <img
            src="/img/img1Desktop111.avif"
            alt="Portfolio Feature"
            className="rounded-3xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* second row with background image */}
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{
          backgroundImage: "url('/img/img2Desktop23.jpeg')", // 👈 change this path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/40 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white">
          {/* LEFT COLUMN (Empty) */}
          <div></div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-10 bg-[#68685c] md:p-16 p-8 rounded-tl-3xl rounded-bl-3xl">
            {listItems.map((item, index) => {
              const percentage = (item.rating / 5) * 100
              return (
                <div key={index} className="flex items-center md:gap-6 gap-3">
                  {/* Circle with progress border */}
                  <div className="relative w-14 h-14">
                    <svg
                      className="w-14 h-14 transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        className="text-gray-300"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
                      />
                      <path
                        className="text-yellow-500"
                        strokeWidth="3"
                        strokeDasharray={`${percentage}, 100`}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                      {item.rating}/5
                    </div>
                  </div>

                  {/* Texts */}
                  <div className="flex flex-col gap-2">
                    <h4 className="text_four color_two font-bold">{item.title}</h4>
                    <p className="text_five color_two">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortFolioMainFeature
