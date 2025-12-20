import React from 'react'

const ChooseApproach = () => {
  return (
    <div className="container flex flex-col gap-10">
      <h1 className="Heading3 secondaryColor">
        CHOOSE APPROACH THAT <br className="inline" /> COVERS YOUR NEEDS
      </h1>

      {/* Left + Right Sections Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left Section */}
        <div className="flex flex-col md:gap-8 gap-4">
          <h2 className="Heading4 secondaryColor">Native app development</h2>
          <p className="Text3 secondaryColor">
            Native mobile applications are the best solution if you need best in
            class solution performance or a complex app, including, AR/VR,
            games, big data mining and other. Developing a native app means our
            design, customization, device hardware usage and integration
            opportunities are limitless.
          </p>
          <div className="p-3 bg-[#293538]">
            <p>
              Get best-performing mobile apps with authentic interfaces and UX
              to help users quickly learn and adapt.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="Text3 secondaryColor">
              Development time:
            </p>
            <p className="Text4 secondaryColor">over 6 months</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="Text3 secondaryColor">Tech stack:</p>
            <p className="Text4 secondaryColor">iOS: Swift / Objective-C</p>
            <p className="Text4 secondaryColor">Android: Java / Kotlin</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:gap-8 gap-4">
          <h2 className="Heading4 secondaryColor">Cross-platform app development</h2>
          <p className="Text3 secondaryColor">
            Cross-platform mobile development approach is a perfect solution in terms of price-quality ratio for most companies that don’t require complex interactions, animations, integrations or AR/VR.
          </p>
          <div className="p-3 bg-[#293538]">
            <p>
              Get high-quality mobile apps with a native experience, while lowering the total price by approximately 20%.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="Text3 secondaryColor">
              Development time:
            </p>
            <p className="Text4 secondaryColor">over 4 months</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="Text3 secondaryColor">Tech stack:</p>
            <p className="Text4 secondaryColor">ٖFlutter</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseApproach
