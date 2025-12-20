import { useState, useEffect, useRef } from 'react'

const UiuxProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Research',
      description:
        "During the initial phase of UI/UX design services, we dive deep into understanding your target audience. We gather valuable insights to inform our design decisions and ensure that our user experience design services align with your user's needs and preferences.",
    },
    {
      number: '02',
      title: 'Wireframing and prototyping',
      description:
        "At this stage, you will see how your application will function and look like. It's a pivotal step in our UI/UX services, as it helps us fine-tune the design based on feedback and timely refine the interface and UX elements.",
    },
    {
      number: '03',
      title: 'App design',
      description:
        'Our UI/UX design services company then moves on to bringing your vision to life with a focus on creating an attractive and user-friendly interface. Ensuring aesthetically pleasing visual elements, high app usability, and overall user satisfaction.',
    },
    {
      number: '04',
      title: 'Testing',
      description:
        "We meticulously evaluate the app's functionality and usability to identify any issues and ensure seamless user interaction. Here, we make sure to deliver UI/UX design services that meet your user needs and provide a positive experience with your application.",
    },
    // Add more steps if needed
  ]

  const rightColRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = rightColRef.current
      if (el) {
        const scrollTop = el.scrollTop
        const scrollHeight = el.scrollHeight - el.clientHeight
        const scrollPercent = (scrollTop / scrollHeight) * 100
        setScrollProgress(scrollPercent)
      }
    }

    const el = rightColRef.current
    if (el) {
      el.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (el) el.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="container py-20 lg:py-0">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-20 min-h-screen relative">
        {/* LEFT COLUMN */}
        <div className="flex justify-center items-center mb-8 lg:mb-0 sticky top-0 z-10">
          <h2 className="primaryColor Heading3">
            UI/UX design process in simple steps
          </h2>
        </div>

        {/* CENTER LINE */}
        <div className="hidden lg:block absolute top-0 left-1/2 w-px h-full -translate-x-1/2 bg-gray-600">
          <div
            className="w-full bg-[#836aff] origin-top transition-all duration-150"
            style={{ height: `${scrollProgress}%` }}
          ></div>
        </div>

        {/* CENTER ICON */}
        <img
          src="../../../public/img/shape2.png"
          alt="center icon"
          className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 p-2"
        />

        {/* RIGHT COLUMN */}
        <div
          ref={rightColRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-6 overflow-visible lg:overflow-y-auto lg:max-h-screen no-scrollbar"
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#836aff] text-white rounded-2xl shadow-md p-6 border border-[#836aff] hover:shadow-lg transition"
            >
              <span className="Text2 secondaryColor">{step.number}</span>
              <h3 className="Heading5 secondaryColor mt-2">{step.title}</h3>
              <p className="Text3 secondaryColor">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UiuxProcess
