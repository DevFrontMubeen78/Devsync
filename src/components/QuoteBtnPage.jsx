import React from "react";

const QuoteBtnPage = ({ name }) => {
  return (
    <div>
      <a
        href="/contact"
        className="cursor-pointer bg-blue-600 text-white font-semibold px-7 py-3 rounded-full border-2 border-blue-600 hover:bg-transparent hover:text-blue-600 transition-all duration-300"
      >
        {name}
      </a>
    </div>
  );
};

export default QuoteBtnPage;
