import React from 'react';
import amlDashboardImg from '../assets/aml-dashboard.png';
import ckycDashboardImg from '../assets/ckyc-dashboard.png';

const CheckItem = ({ text }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 bg-gradient-to-r from-[#00b4fd] to-[#003ace] rounded-full w-5 h-5 flex items-center justify-center shrink-0">
      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <span className="text-text-light/80 text-base font-sans flex-1">{text}</span>
  </div>
);

const checkListItems = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing",
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and management",
  "Establishing criteria for minimum balances & rates"
];

const CB7Details = () => {
  return (
    <section className="py-12 lg:py-24 relative overflow-hidden flex flex-col gap-24 lg:gap-32 w-full px-6 lg:px-[120px] max-w-[1440px] mx-auto">
      
      {/* CB7 Watermark Background */}
      <div 
        className="absolute left-[-5%] top-[5%] opacity-30 lg:opacity-50 pointer-events-none select-none z-0"
        style={{ 
          color: 'transparent',
          WebkitTextStroke: '2px #003ace' 
        }}
      >
        <h1 className="text-[250px] lg:text-[572px] font-sans font-medium leading-[1.2]">CB7</h1>
      </div>

      {/* Part 1: Intro */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 w-full">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl lg:text-[53px] font-sans font-normal leading-tight tracking-[-0.01em] text-[#e9f4f9]">
              A complete cloud-based core banking.
            </h2>
            <p className="text-lg lg:text-[16px] font-sans font-normal leading-[1.3] text-[#e9f4f9] opacity-80 max-w-md mx-auto lg:mx-0">
              Faster time to market with our cloud-based core banking services
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-6">
            <button className="flex flex-row justify-center items-center px-10 py-4 rounded-[10px] bg-gradient-to-r from-[#00b4fd] to-[#003ace] hover:opacity-90 transition-opacity">
              <span className="font-mono font-medium text-[15px] uppercase text-white">
                REQUEST DEMO
              </span>
            </button>

            <div className="flex flex-col items-center lg:items-start gap-1 group/link cursor-pointer">
              <div className="flex flex-row justify-center items-center gap-2">
                <span className="font-mono font-medium text-[14px] uppercase text-[#00b4fd]">
                  learn more
                </span>
                <svg className="w-[14px] h-[14px] text-[#00b4fd] group-hover/link:translate-x-1 transition-transform" viewBox="0 0 14 15" fill="none" stroke="currentColor">
                  <path d="M1 7.5H13M13 7.5L7 1.5M13 7.5L7 13.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="w-[32px] border-t border-[#00b4fd]"></div>
            </div>
          </div>
        </div>

        {/* Right Laptop Mockup */}
        <div className="w-[85%] sm:w-full max-w-[550px] lg:max-w-[651px] lg:w-1/2 relative group mx-auto lg:mx-0">
          <div className="relative w-full pt-[66%]">
            {/* Screen Frame */}
            <div className="absolute left-0 top-0 w-full h-full rounded-t-[15px] border-[2px] border-[#00b4fd] border-b-0 bg-transparent flex items-center justify-center overflow-hidden">
               <img 
                src={amlDashboardImg} 
                alt="AML Dashboard" 
                className="absolute left-[1.5%] top-[1.5%] w-[97%] h-[97%] object-cover opacity-90 group-hover:opacity-100 transition-opacity rounded-t-sm"
              />
            </div>
            {/* Base */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-[115%] h-[20px] lg:h-[30px] rounded-b-[14px] rounded-t-[5px] border-[2px] border-[#00b4fd] bg-[#000d12]"></div>
          </div>
        </div>
      </div>


      {/* Part 2: Efficiency and Checklist */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-8 w-full mt-12 lg:mt-24">
        
        {/* Left Laptop Image */}
        <div className="w-[85%] sm:w-full max-w-[550px] lg:max-w-[651px] lg:w-1/2 relative mx-auto lg:mx-0">
           <div className="relative w-full pt-[66%]">
            {/* Gradient Screen Frame */}
            <div 
              className="absolute left-0 top-0 w-full h-full rounded-t-[15px] opacity-50"
              style={{ background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)' }}
            />
            {/* Inner Image */}
            <div className="absolute left-[1.5%] top-[1.5%] w-[97%] h-[97%] rounded-t-sm overflow-hidden bg-[#d9d9d9]">
              <img 
                src={ckycDashboardImg} 
                alt="CKYC Dashboard" 
                className="w-full h-full object-cover mix-blend-normal"
              />
            </div>
            {/* Gradient Base */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 top-full w-[115%] h-[20px] lg:h-[30px] rounded-b-[14px] rounded-t-[5px] opacity-40 shadow-[0px_-12px_12px_#000000]"
              style={{ background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)' }}
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-8 lg:pl-12">
          <h2 className="w-full max-w-[495px] text-3xl lg:text-[27px] text-center lg:text-left font-sans font-normal leading-tight text-[#e9f4f9]">
            Run a more efficient, flexible, and digitally connected core banking system
          </h2>

          <div className="w-full flex flex-col gap-6">
            <h3 className="text-lg font-sans font-semibold text-[#e9f4f9] text-center lg:text-left">
              What you will get:
            </h3>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {checkListItems.map((text, i) => (
                <CheckItem key={i} text={text} />
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Part 3: Paperless CTA */}
      <div className="relative z-10 w-full mt-12 lg:mt-24 rounded-[27px] overflow-hidden p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12"
           style={{ background: 'linear-gradient(99.21deg, #031E2A -12.22%, #000D12 59.26%)' }}>
        
        {/* Faint Outline Text */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sans font-medium text-[250px] lg:text-[400px] text-center opacity-30 select-none pointer-events-none"
          style={{ 
            color: 'transparent',
            WebkitTextStroke: '1px rgba(0, 180, 253, 0.3)' 
          }}
        >
          CB7
        </div>

        {/* Left Text */}
        <div className="relative z-10 w-full lg:w-[60%] flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
          <h2 className="font-sans font-normal text-3xl lg:text-[53px] leading-tight tracking-[-0.01em] text-[#e9f4f9]">
            Take the full advantage of going paper-less now.
          </h2>
          <p className="font-sans font-normal text-base text-[#e9f4f9] opacity-80 max-w-lg">
            CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
          </p>
        </div>

        {/* Right Buttons */}
        <div className="relative z-10 w-full lg:w-[40%] flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6">
          <button className="w-full sm:w-auto px-8 py-4 border border-[#e9f4f9] rounded-[10px] hover:bg-white/5 transition-colors">
            <span className="font-mono font-normal text-[15px] uppercase text-[#e9f4f9]">
              Contact Us
            </span>
          </button>
          <button 
            className="w-full sm:w-auto px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity shadow-lg shadow-[#003ace]/20"
            style={{ background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)' }}
          >
            <span className="font-mono font-normal text-[15px] uppercase text-white">
              REQUEST DEMO
            </span>
          </button>
        </div>
      </div>

    </section>
  );
};

export default CB7Details;
