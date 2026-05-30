import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
      {/* Left Content (Frame 5) */}
      <div className="flex-1 w-full max-w-[608px] flex flex-col items-center lg:items-start text-center lg:text-left gap-8 lg:gap-[52px] z-10">
        
        {/* Texts (Frame 4) */}
        <div className="flex flex-col gap-[16px] w-full">
          <h1 className="text-4xl sm:text-5xl lg:text-[67px] font-medium leading-[1.2] lg:leading-[80.4px] text-text-light font-sans tracking-tight w-full">
            The new foundation of modern banking
          </h1>
          <p className="text-[16px] text-text-light font-sans leading-[20.8px] max-w-[356px] mx-auto lg:mx-0 opacity-80">
            We drive innovation and growth, provide seamless customer experience and operational excellence
          </p>
        </div>
        
        {/* Buttons (Frame 3) */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-[20px] w-full">
          <button className="bg-primary hover:bg-primary/90 text-white font-mono font-medium text-[15px] leading-[19.5px] w-full sm:w-[210px] h-[49px] rounded-[10px] transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 uppercase flex items-center justify-center">
            REQUEST DEMO
          </button>
          <button className="bg-transparent hover:bg-white/5 border border-text-light text-text-light font-mono font-medium text-[15px] leading-[19.5px] w-full sm:w-[208px] h-[49px] rounded-[10px] transition-all uppercase flex items-center justify-center">
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Dashboard Mockup (Frame 114 SVG) */}
      <div className="flex-1 w-full lg:w-auto relative flex justify-center lg:justify-end">
        <img 
          src="/frame114.svg" 
          alt="Banking Dashboard Mockup" 
          className="w-full max-w-[650px] object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
