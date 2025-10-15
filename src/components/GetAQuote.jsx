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
        className="cursor-pointer bg-blue-600 text-white font-semibold px-7 py-3 rounded-full border-2 border-blue-600 hover:bg-transparent hover:text-blue-600 transition-all duration-300"
      >
        {name}
      </button>
    </div>
  );
};

export default GetAQuote;
