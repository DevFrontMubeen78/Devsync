import React from 'react';

const WebAppDeliv = ({ data, title, showItems = true }) => {
  return (
    <div className="container text-white">
      <h2 className="Heading3 secondaryColor mb-6">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((card, index) => (
          <div key={index} className="p-6 relative border-2 border-gray-400 border-dashed shadow-sm">
            {/* Corners */}
            <div className="w-3 h-3 bg-white border border-blue-500 absolute -top-1 -left-1"></div>
            <div className="w-3 h-3 bg-white border border-blue-500 absolute -top-1 -right-1"></div>
            <div className="w-3 h-3 bg-white border border-blue-500 absolute -bottom-1 -left-1"></div>
            <div className="w-3 h-3 bg-white border border-blue-500 absolute -bottom-1 -right-1"></div>

            <h3 className="Heading5 secondaryColor mb-3">{card.title}</h3>
            <p className="mb-4 Text3 secondaryColor">{card.desc}</p>

            {/* Items sirf showItems true ho to show karen */}
            {showItems && card.items && (
              <div className="space-y-3 flex flex-col gap-3">
                {card.items.map((item, i) => (
                  <div key={i}>
                    <h4 className="Heading5 secondaryColor mb-3">{item.heading}</h4>
                    <p className="Text3 secondaryColor">{item.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebAppDeliv;
