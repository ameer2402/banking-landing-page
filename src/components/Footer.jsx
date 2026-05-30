import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full relative bg-[#000d12] overflow-hidden py-16 lg:py-24 px-6 lg:px-[120px]">
      
      {/* Background Glow */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[1440px] h-[556px] opacity-5 blur-[100px] pointer-events-none"
        style={{ background: 'linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)' }}
      />

      <div className="max-w-[1440px] mx-auto w-full relative z-10 flex flex-col gap-16 lg:gap-24">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8 w-full">
          
          {/* N7 Graphic */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start select-none pointer-events-none">
             <span 
               className="font-sans font-medium text-[150px] lg:text-[338px] leading-none tracking-tighter"
               style={{
                 background: 'linear-gradient(135deg, #01B4FD 0%, #013ACF 50%, #74F1AE 100%)',
                 WebkitBackgroundClip: 'text',
                 WebkitTextFillColor: 'transparent',
                 backgroundClip: 'text',
                 color: 'transparent'
               }}
             >
               N7
             </span>
          </div>

          {/* Links Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 pt-0 lg:pt-8">
            
            {/* Column 1 (London & Solutions) */}
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <h4 className="font-sans font-medium text-[16px] leading-[1.3] text-[#e9f4f9]">London</h4>
                <p className="font-sans font-normal text-[16px] leading-[1.3] text-[#e9f4f9] opacity-70">
                  Linktia Infosystems Ltd – CB7,<br/>
                  26 Main Road Sundridge,TN14 6EP,<br/>
                  England, United Kingdom.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-sans font-medium text-[16px] leading-[1.3] text-[#e9f4f9]">Solutions</h4>
                <div className="flex flex-col gap-3">
                  {['Core Banking CB7', 'Digital Banking N7', 'Open Banking', 'Loan Origination System', 'Loan Management System', 'Digital Transformation'].map((link) => (
                    <div key={link} className="flex flex-row items-center gap-3 cursor-pointer group">
                      <span className="font-sans font-normal text-[16px] leading-[1.3] text-[#e9f4f9] opacity-70 group-hover:opacity-100 transition-opacity">
                        {link}
                      </span>
                      <svg className="w-[14px] h-[14px] text-[#00b4fd] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2 (Dubai & N7 Banking) */}
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <h4 className="font-sans font-medium text-[16px] leading-[1.3] text-[#e9f4f9]">Dubai</h4>
                <p className="font-sans font-normal text-[16px] leading-[1.3] text-[#e9f4f9] opacity-70">
                  Linktia Infosystems Ltd – CB7,Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-sans font-medium text-[16px] leading-[1.3] text-[#e9f4f9]">N7 Banking</h4>
                <div className="flex flex-col gap-3">
                  {['About Us', 'Solutions', 'Contact', 'Company', 'Careers', 'Insights', 'Core Team', 'Brand Center'].map((link) => (
                    <div key={link} className="flex flex-row items-center gap-3 cursor-pointer group">
                      <span className="font-sans font-normal text-[16px] leading-[1.3] text-[#e9f4f9] opacity-70 group-hover:opacity-100 transition-opacity">
                        {link}
                      </span>
                      <svg className="w-[14px] h-[14px] text-[#00b4fd] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3 (Pune & Socials) */}
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <h4 className="font-sans font-medium text-[16px] leading-[1.3] text-[#e9f4f9]">London</h4>
                <p className="font-sans font-normal text-[16px] leading-[1.3] text-[#e9f4f9] opacity-70">
                  Linktia Infosystems Ltd – CB7,Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-sans font-medium text-[16px] leading-[1.3] text-[#e9f4f9]">Our Socials</h4>
                <div className="flex flex-col gap-3">
                  {['LinkedIn', 'X'].map((link) => (
                    <div key={link} className="flex flex-row items-center gap-3 cursor-pointer group">
                      <span className="font-sans font-normal text-[16px] leading-[1.3] text-[#e9f4f9] opacity-70 group-hover:opacity-100 transition-opacity">
                        {link}
                      </span>
                      <svg className="w-[14px] h-[14px] text-[#00b4fd] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 pt-8 mt-4 flex justify-center lg:justify-end">
          <p className="font-sans font-normal text-[12px] lg:text-[14px] leading-[1.4] text-[#e9f4f9] opacity-30 text-center lg:text-left max-w-3xl">
            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
