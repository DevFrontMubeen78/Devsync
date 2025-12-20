import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
// import im from '../../../public/img/ximage1.avif'

const designServices = [
  {
    image: '../../../public/img/ximage1.avif',
    alt: 'Mobile and web app UI/UX design',
    subtitle: 'Let’s make your app design a reality!',
    title: 'Mobile and web app UI/UX design',
    description:
      'Our UI/UX designers create attractive mobile and web interfaces that ensure sustained user engagement. We follow modern design principles and trends to ensure your app looks up to date.',
  },
  {
    image: '../../../public/img/ximage2.avif',
    alt: 'User research',
    subtitle: 'Let’s match your app and target audience needs!',
    title: 'User research',
    description:
      "Our UI/UX designers dive deep into your audience to precisely determine who they are, their expectations, and how they will interact with it. It helps to ensure your app's success with its target users.",
  },
  {
    image: '../../../public/img/ximage3.avif',
    alt: 'Prototyping and wireframing',
    subtitle: 'Let’s visualize how your future app will look in action!',
    title: 'Prototyping and wireframing',
    description:
      'Our UI/UX design services team assists you in ensuring that the design will look just as envisioned. You will also be able to make adjustments while it’s still feasible.',
  },
  {
    image: '../../../public/img/ximage4.avif',
    alt: 'App redesign',
    subtitle: 'Let’s refresh your app with a new look!',
    title: 'App redesign',
    description:
      "We'll transform the outdated interface into a modern app, attracting new users and re-engaging current ones.",
  },
]

const UiuxDesignServices = () => {
  return (
    <div className="container text-white">
      <h2 className="Heading3 secondaryColor mb-20">UI/UX design services</h2>
      <div className="flex flex-col lg:block hidden">
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-2 relative">
            <div className="">
              <img
                className="w-full h-62"
                src="../../../public/img/uxcard1.png"
                alt="uxcard1"
              />
            </div>
            <div className="absolute top-0 grid grid-cols-[30%_70%] flex gap-4  p-4">
              <h2 className="relative Text3 GlobleTextColor p-2">
                Let’s make your app design a reality!{' '}
                <FaArrowRight className="absolute right-0 top-12 rotate-45 text-lg" />
              </h2>
              <div className="flex flex-col gap-2 mt-20 p-3">
                <h2 className="Heading5 secondaryColor">
                  Mobile and web app UI/UX design
                </h2>
                <p className="Text4 secondaryColor">
                  Our UI/UX designers create attractive mobile and web
                  interfaces that ensure sustained user engagement. We follow
                  modern design principles and trends to ensure your app looks
                  up to date
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src="../../../public/img/uximage1.png" alt="uximage1" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10">
          <div className="-mt-20">
            <img src="../../../public/img/uximage2.png" alt="uximage1" />
          </div>
          <div className="col-span-2 relative">
            <div className="">
              <img
                className="w-full h-62"
                src="../../../public/img/uxcard2.png"
                alt="uxcard1"
              />
            </div>
            <div className="absolute top-0 grid grid-cols-[70%_30%] flex gap-4  p-4">
              <div className="flex flex-col gap-2 mt-16 p-1">
                <h2 className="Heading5 secondaryColor">User research</h2>
                <p className="Text3 secondaryColor">
                  Our UI/UX designers dives deep into your audience to precisely
                  determine who they are, their expectations, and how they will
                  interact with it. It helps to ensure your app's success with
                  its target users.
                </p>
              </div>
              <h2 className="relative Text3 GlobleTextColor px-2">
                Let’s match your app and target audience needs!
                <FaArrowRight className="absolute -left-10 top-13 rotate-145 text-lg" />
              </h2>
            </div>
          </div>
        </div>

        <div className="flex gap-10 mt-10">
          <div className="w-[80%] relative">
            <div className="">
              <img
                className="w-full h-62"
                src="../../../public/img/uxcard1.png"
                alt="uxcard1"
              />
            </div>
            <div className="absolute top-0 grid grid-cols-[30%_70%] flex gap-4 p-3">
              <h2 className="relative Text3 GlobleTextColor px-4">
                Let’s visualize how your future app will look in action!
                <FaArrowRight className="absolute right-0 top-12 rotate-45 text-lg" />
              </h2>
              <div className="flex flex-col gap-2 mt-24 p-2 mt-3">
                <h2 className="Heading5 secondaryColor">
                  Prototyping and wireframing
                </h2>
                <p className="Text3 secondaryColor">
                  Our UI/UX design services team assists you in ensuring that
                  the design will look just as envisioned. You will also be able
                  to make adjustments while it’s still feasible.
                </p>
              </div>
            </div>
          </div>
          <div className="-mt-30 w-[20%]">
            <img
              className="w-full h-92"
              src="../../../public/img/uximage3.png"
              alt="uximage1"
            />
          </div>
        </div>

        <div className="flex gap-10">
          <div className="w-[23%] -mt-35">
            <img src="../../../public/img/uximage4.png" alt="uximage1" />
          </div>
          <div className="w-[77%] col-span-2"></div>
        </div>

        <div className="grid grid-cols-3 gap-10 mt-10">
          <div className="col-span-2 relative">
            <div className="">
              <img
                className="w-full h-62"
                src="../../../public/img/uxcard2.png"
                alt="uxcard1"
              />
            </div>
            <div className="absolute top-0 grid grid-cols-[70%_30%] flex gap-4  p-5">
              <div className="flex flex-col gap-2 mt-26 px-3">
                <h2 className="Heading5 secondaryColor">App redesign</h2>
                <p className="Text3 secondaryColor pr-5">
                  We'll transform the outdated interface into a modern app,
                  attracting new users and re-engaging current ones.
                </p>
              </div>
              <h2 className="relative Text3 GlobleTextColor p-2">
                Let’s refresh your app with a new look!
                <FaArrowRight className="absolute -left-10 top-12 rotate-145 text-lg" />
              </h2>
            </div>
          </div>
          <div className="">
            <img
              className="w-full h-62 object-cover rounded-2xl"
              src="../../../public/img/uximage5.png"
              alt="uximage1"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 flex-wrap md:grid lg:hidden">
        {designServices.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-10">
              <img src={item.image} alt={item.alt} />
              <div className="flex flex-col gap-6">
                <p className="text-sm font-bold">{item.subtitle}</p>
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UiuxDesignServices
