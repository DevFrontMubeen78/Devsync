import React from 'react'

const columns = [
    {
        title: (
            <>
                Why work <br className="hidden md:inline" />
                with <br className="hidden md:inline" />
                SolveIt
            </>
        ),
    },
    {
        items: [
            'UI/UX Design',
            'Mobile App Development',
            'Web Development',
            'QA & Testing',
            'Project Management',
        ],
    },
    {
        items: [
            'Fortune 500 Companies',
            'Startups',
            'Medium Businesses',
            'Agencies',
            'Entrepreneurs',
        ],
    },
]

const WhyWorkWIthSolve = () => {
    return (
        <div className="container">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10 text-left">
                {columns.map((col, i) => (
                    <div
                        key={i}
                        className="flex flex-col gap-6 justify-start items-start w-full"
                    >
                        {/* Title with responsive <br> */}
                        {col.title && (
                            <h2 className="text_two color_two font-semibold leading-tight">
                                {col.title}
                            </h2>
                        )}

                        {/* Column items with first word bold */}
                        {col.items && (
                            <ul className="flex flex-col md:gap-5 gap-2">
                                {col.items.map((item, idx) => {
                                    const [first, ...rest] = item.split(' ')
                                    return (
                                        <li
                                            key={idx}
                                            className="flex items-center gap-2 text_four color_two"
                                        >
                                            <span className="text-[#005da2] font-semibold">/</span>
                                            <span>
                                                <span className="font-semibold">{first}</span>{' '}
                                                {rest.join(' ')}
                                            </span>
                                        </li>
                                    )
                                })}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyWorkWIthSolve
