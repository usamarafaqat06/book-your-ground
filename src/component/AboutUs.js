import React from 'react';

const AboutUs = ({ aboutUs }) => (
  <div className="container mx-auto w-full max-w-[1920px] text-center py-6">
    <h3 className='text-3xl font-bold mb-4'>Know Us</h3>
    <div className="flex justify-items-center flex-wrap gap-6 text-center">
      {aboutUs.map((item, index) => (
        <div key={index} className="max-w-xs mx-auto overflow-hidden">
          <div className="flex justify-center">
            <img src={item.image} alt={item.heading} className="h-48 object-cover rounded-md" />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{item.heading}</h2>
            <p className="font-semibold text-gray-800 mb-4">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AboutUs;
