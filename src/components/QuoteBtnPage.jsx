import React from "react";

const QuoteBtnPage = ({ name }) => {
  return (
    <a
      href="/contact"
      className="cursor-pointer Text3 GlobleColor font-semibold px-7 py-3 rounded-full"
    >
      {name}
    </a>
  );
};

export default QuoteBtnPage;
