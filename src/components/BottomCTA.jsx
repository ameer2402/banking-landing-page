import React from 'react';

const BottomCTA = () => {
  return (
    <section className="w-full relative bg-[#000d12] py-16 lg:py-24 px-6 lg:px-[120px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
          <h2 className="w-full max-w-[608px] font-sans font-normal text-4xl lg:text-[53px] leading-[1.2] tracking-[-0.01em] text-[#e9f4f9]">
            Take the full advantage of going paper-less now.
          </h2>
          <p className="w-full max-w-[462px] font-sans font-normal text-base leading-[1.3] text-[#e9f4f9] opacity-70">
            CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
          </p>
        </div>

        {/* Right Buttons */}
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6">
          <button className="w-full sm:w-auto flex flex-row justify-center items-center px-8 lg:px-10 py-4 h-[49px] border border-[#e9f4f9] rounded-[10px] hover:bg-white/5 transition-colors">
            <span className="font-mono font-normal text-[15px] leading-[1.3] uppercase text-[#e9f4f9]">
              Contact Us
            </span>
          </button>
          
          <button 
            className="w-full sm:w-auto flex flex-row justify-center items-center px-8 lg:px-10 py-4 h-[49px] rounded-[10px] hover:opacity-90 transition-opacity shadow-lg shadow-[#003ace]/20"
            style={{ background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)' }}
          >
            <span className="font-mono font-normal text-[15px] leading-[1.3] uppercase text-white">
              REQUEST DEMO
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default BottomCTA;
