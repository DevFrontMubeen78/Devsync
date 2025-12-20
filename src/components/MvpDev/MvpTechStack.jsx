import React from 'react'

const MvpTechStack = () => {
  const groups = [
    { title: 'Mobile', items: ['Swift', 'Objective-C', 'Kotlin', 'Flutter'] },
    { title: 'Backend', items: ['Java', 'NodeJS'] },
    { title: 'Frontend', items: ['React.js', 'HTML 5', 'React Redux'] },
    { title: 'Databases', items: ['PostgreSQL', 'Redis'] },
    { title: 'Documentation', items: ['Swagger'] },
    {
      title: 'Infrastructure',
      items: [
        'AWS',
        'DigitalOcean',
        'Azure',
        'Google Cloud Platform',
        'Firebase',
        'Docker',
      ],
    },
  ]

  return (
    <div className="container p-6 grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-700 rounded shadow">
      <h2 className="col-span-full Heading3 secondaryColor mb-4">Tech Stack</h2>

      {groups.map((g) => (
        <section key={g.title} className="">
          <div className="Heading5 secondaryColor mb-3">{g.title}</div>
          <div className="flex flex-wrap gap-3">
            {g.items.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-xl shadow Text4 secondaryColortext-sm font-medium bg-[#253135] border border-gray-700"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default MvpTechStack
