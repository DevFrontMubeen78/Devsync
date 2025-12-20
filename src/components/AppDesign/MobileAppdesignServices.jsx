import React from 'react'
import image from "../../../public/img/mobileAppBackground.png"

const MobileAppdesignServices = ({
  title = "Mobile app design services",
  description1 = "As a mobile app design agency, we pay attention to every detail when developing an application: from user needs to your goals. You will get a modern UI design that is simple and intuitive to use.",
  description2 = "Our mobile app designers will create a unique application design that sets you apart from the competition.",
  sections = [
    {
      heading: "Native app design",
      text: "Mobile app design services tailored to each platform: Android and iOS. By using native elements in the application, we optimize the cost of the app development, and time-to-market, and also improve significantly user experience. Hire native app designers!"
    },
    {
      heading: "Cross-platform app design",
      text: "Optimized design of a cross-platform application so that it feels native on both platforms."
    }
  ],
  image = "../../../public/img/mobileAppDesignPic.png",
}) => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* LEFT COLUMN */}
        <div className="order-2 md:order-1 flex flex-col gap-8">
          <h2 className="Heading3 secondaryColor">{title}</h2>

          <p className="Text3 secondaryColor">{description1}</p>
          <p className="Text3 secondaryColor">{description2}</p>

          <div className="bg-[#253135] p-4 rounded-xl flex flex-col gap-6">
            {sections.map((sec, index) => (
              <div key={index}>
                <h3 className="text_three color_two mb-3">{sec.heading}</h3>
                <p className="Text3 secondaryColor">{sec.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="order-1 md:order-2">
          <img
            alt={title}
            className="w-full"
            src={image}
          />
        </div>
      </div>
    </div>
  )
}

export default MobileAppdesignServices