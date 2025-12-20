import React from 'react';

const BestOptions = () => {
  return (
    <div className="container text-center paddingY-axis bg-[#253135]">
      <div className="flex flex-col gap-10">
        <h2 className="Heading3 secondaryColor">
          Can’t decide what is your <br />
          <span className="GlobleTextColor">best option?</span>
        </h2>
        <div className="brand-button-container">
          <a href="#contact">
            <button type="button" className="cursor-pointer GlobleColor px-6 py-3 rounded-full">
              <span className="primaryColor Text3">Got a project in mind?</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BestOptions;