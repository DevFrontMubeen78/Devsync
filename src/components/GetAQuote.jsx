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
        className="cursor-pointer GlobleColor Text2 primaryColor md:px-7 px-5 py-3 rounded-full"
      >
        {name}
      </button>
    </div>
  );
};

export default GetAQuote;
