import React, { useEffect, useState } from 'react';

const AnimatedText = ({ text }) => {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleChars((prev) => Math.min(prev + 1, text.replace(/ /g, '').length)); // Account for spaces
    }, 200); // Adjust timing for desired speed

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, [text]);

  const renderText = () => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        style={{
          opacity: index < visibleChars ? 1 : 0,
          transition: 'opacity 0.3s ease-out',
          display: 'inline-block',
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div className="relative">
      <h1 className="text-4xl font-bold">{renderText()}</h1>
    </div>
  );
};

export default AnimatedText;
