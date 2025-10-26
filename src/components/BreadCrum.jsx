import React from "react";
import { Link } from "react-router-dom";

const BreadCrum = ({ pages = [], MultipleColor = "" }) => {
  return (
    <div className="container flex gap-2 text-sm uppercase">
      {/* Default Home Link */}
      <Link to="/" className={`hover:underline ${MultipleColor}`}>
        Home
      </Link>

      {pages.map((item, index) => (
        <React.Fragment key={index}>
          <span>/</span>

          {/* Last item text only, others clickable */}
          {index === pages.length - 1 ? (
            <p className="text-gray-500">{item.name}</p>
          ) : (
            <Link
              to={item.link}
              className={`hover:underline ${MultipleColor}`}
            >
              {item.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BreadCrum;
