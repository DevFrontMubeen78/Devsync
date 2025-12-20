const UxConsultant = () => {
  return (
    <div className="container border-1 border border-gray-300 p-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      {/* LEFT COLUMN - TEXT (Desktop: Left, Mobile: Below Image) */}
      <div className="order-2 md:order-1 flex flex-col gap-4">
        <h2 className="Heading3 primaryColor">UX CONSULTING</h2>
        <p className="Text3 primaryColor">
          Get recommendations in terms of user experience, user interface,
          design systems. UX/UI consulting helps easily scale the product and
          avoid complexities in development.
        </p>
        <p className="Text3 primaryColor">
          User experience consultants will analyze your product and goals to
          provide detailed feedback on possible improvements to meet the needs
          of your business.
        </p>
      </div>

      {/* RIGHT COLUMN - IMAGE (Desktop: Right, Mobile: Top) */}
      <div className="order-1 md:order-2 flex justify-end">
        <img
          src="/img/consultingGif.gif"
          alt="Branding Services"
          className="w-98"
        />
      </div>

    </div>
  )
}

export default UxConsultant
