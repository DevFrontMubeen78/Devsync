import React, { useEffect, useState } from "react";

const SpinnerOverlay = () => {
  const [text, setText] = useState("");
  const word = "devsync";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(word.slice(0, i + 1));
      i++;
      if (i === word.length) clearInterval(interval);
    }, 300); // typing speed
    return () => clearInterval(interval);
  }, []);

  // Split typed text into dev/sync for coloring
  const renderColoredText = () => {
    const dev = text.slice(0, 3);
    const sync = text.slice(3);
    return (
      <>
        <span style={{ color: "#005ba2" }}>{dev}</span>
        <span style={{ color: "#e70606" }}>{sync}</span>
        <span className="animate-pulse text-white">|</span>
      </>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-xs transition-opacity duration-300">
      <div className="flex flex-col items-center gap-2">
        <img
          src="/img/dev-logo.png"
          alt="Logo"
          className="w-20 h-20 object-contain drop-shadow-lg"
        />
        <p className="font-extrabold text-4xl tracking-wide uppercase">
          {renderColoredText()}
        </p>
      </div>
    </div>
  );
};

export default SpinnerOverlay;
