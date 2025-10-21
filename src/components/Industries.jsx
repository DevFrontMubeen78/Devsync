import React, { useEffect, useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  LabelList
} from 'recharts'

const Industries = () => {
  // Data arrays
  const industries = [
    ['Retail & E-commerce', 'Healthcare', 'Fintech & Banking'],
    ['Travel & Booking', 'Transportation & Logistics', 'Telecom & Social'],
  ]

  const [animatedData, setAnimatedData] = useState([
    { name: 'Fortune 500 companies', members: 0 },
    { name: 'Medium size companies', members: 0 },
    { name: 'Startups', members: 0 },
  ])

  const finalData = [
    { name: 'Fortune 500 companies', members: 30 },
    { name: 'Medium size companies', members: 56 },
    { name: 'Startups', members: 20 },
  ]

  // Softer pastel colors 🎨
  const colors = ['#90B8F8', '#80E0C0', '#FFDFA5']

  useEffect(() => {
    const totalSteps = 200
    const duration = 8000
    let step = 0

    const interval = setInterval(() => {
      step++
      setAnimatedData(
        finalData.map((d) => ({
          ...d,
          members: Math.min((d.members * step) / totalSteps, d.members),
        }))
      )
      if (step >= totalSteps) clearInterval(interval)
    }, duration / totalSteps)
  }, [])

  // ✅ Custom tick with line height & larger font
  const CustomTick = ({ x, y, payload }) => {
    const words = payload.value.split(' ')
    const mid = Math.ceil(words.length / 2)
    const firstLine = words.slice(0, mid).join(' ')
    const secondLine = words.slice(mid).join(' ')

    return (
      <g transform={`translate(${x},${y + 10})`}>
        <text
          textAnchor="middle"
          fill="#555"
          fontSize={13}
          style={{ lineHeight: 1.2, fontWeight: 400 }}
        >
          <tspan x="0" dy="0">{firstLine}</tspan>
          {secondLine && <tspan x="0" dy="18">{secondLine}</tspan>}
        </text>
      </g>
    )
  }

  return (
    <div className='container flex justify-between flex-wrap gap-10'>
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-10">
        <h2 className="text_two color_one">Industries</h2>

        <ul className='flex gap-4 flex-wrap'>
          {industries.map((group, i) => (
            <div key={i} className="flex flex-col gap-4">
              {group.map((item, idx) => (
                <li key={idx} className='flex items-center gap-2'>
                  <span className='text-[#005da2] font-semibold'>/</span>
                  <span className='text_four color_three'>{item}</span>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>

      {/* RIGHT SIDE GRAPH */}
      <div className="flex flex-col justify-start items-start pt-2 w-full lg:w-[45%]">
        <h2 className='text_four color_one font-bold'>Our clients</h2>
        <div className="size-range-graph__canvas w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={animatedData}
              margin={{ top: 20, right: 20, bottom: 50, left: 0 }}
            >
              {/* ✅ Grid lines more visible */}
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#d0d0d0"
                strokeWidth={1.2}
              />

              {/* ✅ Custom tick for 2-line labels */}
              <XAxis
                dataKey="name"
                tickLine={false}
                interval={0}
                height={60}
                tick={<CustomTick />}
              />

              <Bar dataKey="members" radius={[8, 8, 0, 0]} isAnimationActive={false}>
                <LabelList
                  dataKey="members"
                  position="center"
                  formatter={(value) => `${Math.round(value)}%`}
                  style={{
                    fill: 'white',
                    fontSize: 13,
                    fontWeight: 600,
                    textAnchor: 'middle',
                  }}
                />

                {animatedData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Industries
