import React from 'react';

const PhoneMockup = ({ children }) => (
  <div className="relative w-[268.31px] h-[580.65px] bg-black rounded-[40px] shadow-2xl shrink-0 border-[6px] border-[#1e1e1e]">
    {/* Notch */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[24px] bg-black rounded-b-[20px] z-50"></div>
    {/* Screen */}
    <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
      <div 
        className="absolute top-0 left-0 w-[390px] h-[844px] origin-top-left"
        style={{ transform: 'scale(0.68797)' }}
      >
        {children}
      </div>
    </div>
  </div>
);

export default PhoneMockup;
