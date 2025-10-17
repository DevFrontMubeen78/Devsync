import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="container paddingY-axis flex items-center justify-center">
      <div className="text-center max-w-lg">
        <h1 className="text-[7rem] font-extrabold leading-none text-neutral-800 tracking-tight">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-neutral-700 mb-3">
          Page Not Found
        </h2>
        <p className="paragraph text-neutral-500 mb-8 leading-relaxed">
          The page you’re looking for doesn’t exist, or it may have been moved.
          Please check the URL or return to the homepage.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#025c9e] px-6 py-3 rounded-full hover:bg-neutral-800 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
