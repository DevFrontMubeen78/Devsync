import React from 'react'

const WhyChooseUiux = () => {
  return (
    <div className="container text-white">
      <div className="flex flex-col gap-10">
        <h2 className="Heading3 secondaryColor">
          Why choose DevSync <br className="inline" /> for UI/UX Services
        </h2>

        <div className="flex flex-col gap-8 md:gap-4">
          {/* Left Column */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-2/3 flex flex-col gap-2 border border-gray-600 p-6 md:p-8 rounded-2xl">
              <h3 className="secondaryColorColor Heading5">Quality-first approach</h3>
              <p className="text_five color_four">
                You will receive the most tailored UI/UX design services, fast
                and attentive communication, and high product quality. Our motto
                is to be confident that our clients get the best possible
                solution and do our best to exceed expectations.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex flex-col gap-2 border border-gray-600 p-6 md:p-8 rounded-2xl">
              <h3 className="secondaryColorColor Heading5">Seamless communication</h3>
              <p className="text_five color_four">
                You will definitely like working with us. 90% of our clients
                point out our communication style as timely, engaging,
                proactive, competent, and diligent. Just see our clients'
                reviews on.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-1/3 flex flex-col gap-2 border border-gray-600 p-6 md:p-8 rounded-2xl">
              <h3 className="secondaryColorColor Heading5">Fair costs</h3>
              <p className="text_five color_four">
                No overpricing or hidden costs - we are fully transparent and
                fair in pricing. You will be informed in detail and in advance
                about all expenses.
              </p>
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-2 border border-gray-600 p-6 md:p-8 rounded-2xl">
              <h3 className="secondaryColorColor Heading5">
                A partner, not a contractor
              </h3>
              <p className="text_five color_four">
                We consider every client’s project as our own and get 100%
                involved in its success. So, you will never feel as if you are
                paying money to a 3rd party team, but we’ll become one united
                team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUiux
