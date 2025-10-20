import React from 'react';

const GetAQuote = ({ name }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <button
        onClick={handleScroll}
        className="cursor-pointer bg-[#025c9e] text-white font-semibold md:px-7 px-3 py-3 rounded-full border-2 border-[#025c9e] hover:bg-transparent hover:text-[#025c9e] transition-all duration-300"
      >
        {name}
      </button>
    </div>
  );
};

export default GetAQuote;
