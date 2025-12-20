import React from 'react'
import QuoteBtnPage from './QuoteBtnPage'

const PortfolioLaunc = ({backgroundColor}) => {
  return (
    <div
      style={{
        backgroundImage:
          "url('/img/shapeRightDesktop.jpeg'), url('/img/shapeLeftDesktop.jpeg')",
        backgroundPosition: 'top right, bottom left',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: 'contain',
      }}
      className={backgroundColor}
    >
      <div className="container paddingY-axis flex flex-col items-center justify-center text-center gap-2">
        <h1 className="Heading3 primaryColor">
          Launching proptech app?
        </h1>
        <p className="Text3 primaryColor mb-5">
          We’re ready to help with design, development, and growth!
        </p>
        <QuoteBtnPage name="Contact Us" />
      </div>
    </div>
  )
}

export default PortfolioLaunc
