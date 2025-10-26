import React from 'react'

const PortfolioClientRev = ({
  backgroundColor,
  clientImg,
  projectRevTitle,
  projectRevDesc,
  clientName,
  clientFlag,
}) => {
  return (
    <div className={`paddingY-axis ${backgroundColor}`}>
      <div className="container flex flex-col gap-10 ">
        <h2 className="text_two color_one text-2xl md:text-4xl font-semibold">
          Client Review's
        </h2>
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
          {/* Left Section */}
          <div className="col-span-5">
            <img className="w-full" src={clientImg} alt={clientImg} />
          </div>

          {/* Right Section */}
          <div className="col-span-7 rounded-3xl bg-[#f6f6f6] md:p-10 p-6 flex flex-col gap-5">
            <h1 className="text_three color_one">{projectRevTitle}</h1>
            <p className="text_four color_three">{projectRevDesc}</p>

            {/* Client Info Section */}
            <div className="flex items-center gap-3 pt-2">
              <img
                src={clientFlag}
                alt={clientFlag}
                className="w-6 h-4 rounded-sm object-cover"
              />
              <span className="text-sm font-semibold text-gray-700">
                — {clientName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioClientRev
