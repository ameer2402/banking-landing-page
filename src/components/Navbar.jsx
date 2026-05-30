import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center pt-[15px] lg:pt-[31px] relative z-50 w-full px-4">
      <nav className="flex flex-row items-center justify-between px-[20px] py-[9px] w-full max-w-[716px] h-auto min-h-[47px] bg-[#2f2f2f]/70 backdrop-blur-[7.5px] rounded-[12px]">
        
        {/* N7 Logo */}
        <div className="font-sans font-medium text-[24px] leading-[1.2] text-[#e9f4f9] shrink-0">
          N7
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex flex-row items-center gap-[40px]">
          <div className="flex flex-row items-center gap-[24px]">
            {/* solutions */}
            <div className="flex flex-row items-center gap-[6px] cursor-pointer hover:opacity-80">
              <span className="font-mono font-normal text-[12px] leading-[1.3] uppercase text-[#e9f4f9] whitespace-nowrap">
                solutions
              </span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#E9F4F9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* resources */}
            <div className="flex flex-row justify-center items-center gap-[6px] cursor-pointer hover:opacity-80">
              <span className="font-mono font-normal text-[12px] leading-[1.3] uppercase text-[#e9f4f9] whitespace-nowrap">
                resources
              </span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#E9F4F9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* About us */}
            <div className="flex flex-row justify-center items-center cursor-pointer hover:opacity-80">
              <span className="font-mono font-normal text-[12px] leading-[1.3] uppercase text-[#e9f4f9] whitespace-nowrap">
                About us
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <button className="flex flex-row justify-center items-center px-[24px] py-[6px] border border-[#e9f4f9] rounded-[6px] hover:bg-white/10 transition-colors shrink-0">
              <span className="font-mono font-normal text-[12px] leading-[1.3] uppercase text-[#e9f4f9] whitespace-nowrap">
                request demo
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <button 
          className="lg:hidden text-[#e9f4f9] p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             {isOpen ? (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
             ) : (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
             )}
          </svg>
        </button>

      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-[70px] left-4 right-4 bg-[#1a2327]/95 backdrop-blur-lg rounded-[12px] p-4 flex flex-col gap-4 shadow-xl border border-white/10 lg:hidden">
           <div className="flex flex-col gap-4">
              <span className="font-mono font-normal text-[14px] uppercase text-[#e9f4f9] px-2">Solutions</span>
              <span className="font-mono font-normal text-[14px] uppercase text-[#e9f4f9] px-2">Resources</span>
              <span className="font-mono font-normal text-[14px] uppercase text-[#e9f4f9] px-2">About Us</span>
           </div>
           <div className="w-full h-px bg-white/10 my-2" />
           <button className="w-full flex justify-center items-center py-3 border border-[#e9f4f9] rounded-[6px] hover:bg-white/10 transition-colors">
              <span className="font-mono font-normal text-[14px] uppercase text-[#e9f4f9]">
                request demo
              </span>
            </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
