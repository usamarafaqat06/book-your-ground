import React from 'react';
import { ReactTyped } from 'react-typed';

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#090E18]">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="./images/banner.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
      />


      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
      <ReactTyped  className="text-8xl font-bold font-roboto my-3" strings={["GrounGo where sports come alive."]} typeSpeed={100} />

        {/* Animated Subheading */}
        <span className="font-roboto font-bold text-4xl mt-5 animate-fade-in text-bold text-primary">
          Experience the Future with Us
        </span>
      </div>
    </div>
  );
};

export default Banner;
