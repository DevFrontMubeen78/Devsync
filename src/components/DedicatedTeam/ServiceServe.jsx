import React, { useEffect, useState } from 'react'

const ServiceServe = () => {
  const sizeData = [
    { percentage: 85, label: 'Middle and Senior level specialists' },
    { percentage: 10, label: 'Customer satisfaction score' },
    { percentage: 7, label: 'Days to onboard a senior developer', suffix: '+' },
  ]

  const [counts, setCounts] = useState(sizeData.map(() => 0))

  useEffect(() => {
    const intervals = sizeData.map((item, index) => {
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev]
          if (newCounts[index] < item.percentage) {
            newCounts[index] += 1
          }
          return newCounts
        })
      }, 20) // Adjust speed here
    })

    // Cleanup intervals
    return () => intervals.forEach((id) => clearInterval(id))
  }, [sizeData])

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {sizeData.map((item, index) => (
          <div
            key={index}
            className="relative flex-1 border border-gray-300 md:p-16 p-10 rounded-lg"
          >
            {/* Counter number top-right center */}
            <div className="absolute -top-8 right-1/2 transform translate-x-1/2 bg-[#1f2b2f] px-3 py-1 Heading2 secondaryColor">
               {counts[index]}{item.suffix ? item.suffix : "%"}
            </div>

            {/* Label centered */}
            <div className="flex justify-center items-center h-full">
              <span className="Text3 secondaryColor text-center">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceServe
