import React from "react";

const QuoteBtnPage = ({ name }) => {
  return (
    <div>
      <a
        href="/contact"
        className="cursor-pointer bg-[#025c9e] text-white font-semibold px-7 py-3 rounded-full border-2 border-[#025c9e] hover:bg-transparent hover:text-[#025c9e] transition-all duration-300"
      >
        {name}
      </a>
    </div>
  );
};

export default QuoteBtnPage;
