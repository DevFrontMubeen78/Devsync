import React from 'react'
import { CheckCircle } from 'lucide-react'

const endUserPoints = [
  'User-friendly interface',
  'Fast loading pages',
  'Responsive design',
  'Secure login system',
  'Profile customization',
  'Real-time notifications',
  'Search functionality',
  'Wishlist and favorites',
  'Multi-language support',
  'Dark & light mode options',
]

const adminPanelPoints = [
  'Dashboard overview',
  'User management',
  'Content moderation',
  'Analytics & reports',
  'System settings',
]

const PortfolioFunctionality = ({ backgroundColor }) => {
  return (
    <div className={backgroundColor}>
      <div className="container paddingY-axis flex flex-col md:gap-20 gap-8">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - End User Part */}
          <div className="flex flex-col gap-9">
            <h2 className="text_two color_one text-2xl md:text-4xl font-semibold">
              Functionality
            </h2>
            <div className="bg-white rounded-3xl shadow p-6">
              <h2 className="text_three color_one mb-4">End User Part</h2>
              <ul className="space-y-3">
                {endUserPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-800 bg-white rounded-lg p-2 shadow-sm"
                  >
                    <CheckCircle className="text-green-500" size={20} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Admin Panel */}
          <div>
            {/* First Card */}
            <div className="bg-white rounded-3xl shadow p-6 mb-6">
              <h2 className="text_three color_one mb-4">Admin Panel</h2>
              <ul className="space-y-3">
                {adminPanelPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-800 bg-white rounded-lg p-2 shadow-sm"
                  >
                    <CheckCircle className="text-green-500" size={20} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Second Card (Image) */}
            <div className="bg-white rounded-3xl shadow flex justify-center">
              <img
                src="/img/bgTablet.avif"
                alt="Admin panel screenshot"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div>
          <img
            src="/img/imgDesktop.avif"
            alt="Website preview"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}

export default PortfolioFunctionality
