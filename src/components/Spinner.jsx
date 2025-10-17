import React, { useEffect, useState } from "react";

const Spinner = () => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const word = "devsync";

  // Typing animation
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(word.slice(0, i + 1));
      i++;
      if (i === word.length) clearInterval(typing);
    }, 300);
    return () => clearInterval(typing);
  }, []);

  // Progress bar animation
  useEffect(() => {
    let width = 0;
    const progressInterval = setInterval(() => {
      width += Math.floor(Math.random() * 10) + 3; // random smooth increment
      if (width >= 100) {
        width = 100;
        clearInterval(progressInterval);
      }
      setProgress(width);
    }, 200);
    return () => clearInterval(progressInterval);
  }, []);

  const renderColoredText = () => {
    const dev = text.slice(0, 3);
    const sync = text.slice(3);
    return (
      <>
        <span className="text-[#005ba2]">{dev}</span>
        <span className="text-[#e70606]">{sync}</span>
        <span className="animate-pulse text-gray-700">|</span>
      </>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Logo */}
      <img
        src="/img/dev-logo-spinner.webp"
        alt=""
        className="w-18 h-18 sm:w-24 sm:h-24 md:w-22 md:h-22 object-contain drop-shadow-md"
      />

      {/* Devsync text */}
      <p className="font-extrabold text-xl sm:text-2xl md:text-3xl tracking-widest uppercase text-center mt-3 mb-4">
        {renderColoredText()}
      </p>

      {/* Progress bar */}
      <div className="w-40 sm:w-50 md:w-60 h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#005ba2] to-[#e70606] transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Progress text */}
      <p className="text-gray-600 mt-2 text-sm font-semibold">{progress}%</p>
    </div>
  );
};

export default Spinner;
