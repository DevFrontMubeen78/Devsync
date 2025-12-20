const cards = [
  {
    id: 1,
    title: 'Fast on-demand team scaling',
    desc: 'Recruitment takes from 3 days. Usually, we find relevant specialists within 1–2 weeks.',
    icon: '../../../public/img/benefitIcon1.png',
  },
  {
    id: 2,
    title: 'Reduce costs',
    desc: 'We handle recruiting, accounting, payroll, compliance, education, equipment, office facilities, and more.',
    icon: '../../../public/img/benefitIcon2.png',
  },
  {
    id: 3,
    title: 'Faster development',
    desc: 'With professional dedicated resources you get your project running faster.',
    icon: '../../../public/img/benefitIcon3.png',
  },
  {
    id: 4,
    title: 'Flexibility',
    desc: 'We set up communication in your timezone, using your tools, and following your rules.',
    icon: '../../../public/img/benefitIcon4.png',
  },
  {
    id: 5,
    title: 'High quality',
    desc: 'We monitor dedicated team performance and regularly request client’s feedback to make timely adjustments.',
    icon: '../../../public/img/benefitIcon5.png',
  },
  {
    id: 6,
    title: 'Full control',
    desc: 'Our dedicated teams and resources work under your management while you preserve full control and keep project data in-house.',
    icon: '../../../public/img/benefitIcon6.png',
  },
]

function BenifitsDedicateTeam() {
  return (
    <section className="container flex flex-col gap-14">
      <div className="lg:flex jusifity-between">
        <h2 className="Heading3 secondaryColor lg:w-3/5 w-full">
          Benefits OF DEDICATED <br className="inline" /> DEVELOPMENT TEAMS
        </h2>
        <p className="Text3 secondaryColor lg:w-2/5 w-full mt-2">
          A dedicated team is the best choice for large and long-term
          development projects. The flexibility of this cooperation model helps
          to make maximum efficiency even if the requirements change frequently.
        </p>
      </div>
      {/* 3 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((card) => (
          <article
            key={card.id}
            className="relative border border-gray-600 rounded-none overflow-visible p-6"
          >
            {/* Icon Circle */}
            <div className="absolute -top-8 left-6 z-10 bg_section">
              <div className="w-18 h-18 flex items-center justify-center bg_section p-2">
                <img src={card.icon} alt={card.icon} />
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4">
              <h3 className="Heading5 secondaryColor">{card.title}</h3>
              <p className="Text3 secondaryColor">{card.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BenifitsDedicateTeam
