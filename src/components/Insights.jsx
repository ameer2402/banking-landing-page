import React from 'react';

const InsightCard = ({ category, title, author, date, linkText = "read more" }) => (
  <div className="bg-[#01141b] rounded-[18px] hover:shadow-2xl transition-shadow cursor-pointer p-8 flex flex-col justify-between min-h-[318px]">
    <div className="flex flex-col items-start gap-3">
      <span className="font-mono font-normal text-xs uppercase text-[#2490bb] opacity-80">
        {category}
      </span>
      <h3 className="w-full font-sans font-normal text-[22px] leading-tight text-[#e9f4f9]">
        {title}
      </h3>
      <div className="flex flex-row items-center gap-4 mt-2">
        <span className="font-sans font-normal text-sm text-[#64a8c4] opacity-80">{author}</span>
        <span className="font-sans font-normal text-sm text-[#64a8c4] opacity-80">{date}</span>
      </div>
    </div>
    <button className="w-full mt-8 flex flex-row justify-center items-center py-2 border border-[#e9f4f9]/50 rounded-[10px] hover:bg-white/5 transition-colors">
      <span className="font-mono font-normal text-xs uppercase text-[#e9f4f9]/50">{linkText}</span>
    </button>
  </div>
);

const Insights = () => {
  return (
    <section className="w-full relative bg-[#000d12] overflow-hidden flex justify-center py-24">
      {/* Background Ellipse */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[556px] h-[556px] opacity-10 rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)',
          filter: 'blur(100px)'
        }}
      />

      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-[120px] relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-8 justify-between">
        
        {/* Left Column (Title & Button) */}
        <div className="w-full lg:w-1/3 flex flex-col items-start gap-8 lg:gap-12">
          <h2 className="w-full font-sans font-normal text-4xl lg:text-[37px] leading-tight tracking-[-0.01em] text-[#e9f4f9]">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <button className="flex flex-row justify-center items-center px-10 py-4 border border-[#e9f4f9] rounded-[10px] hover:bg-white/10 transition-colors">
            <span className="font-mono font-normal text-[15px] leading-[1.3] uppercase text-[#e9f4f9]">
              INSIGHTS
            </span>
          </button>
        </div>

        {/* Right Column (Cards) */}
        <div className="w-full lg:w-[670px] flex flex-col gap-8">
          
          {/* Top Wide Card */}
          <div className="w-full bg-[#01141b] rounded-[18px] shadow-lg hover:shadow-2xl transition-shadow cursor-pointer p-6 sm:p-8 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
            
            {/* Left Graphic */}
            <div className="w-full sm:w-[260px] h-[240px] bg-[#07193c] rounded-[8px] flex justify-center items-center shrink-0">
              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 text-[#00b4fd] flex justify-center items-center">
                    <svg viewBox="0 0 97 97" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M48.5 0C48.5 26.78 26.78 48.5 0 48.5C26.78 48.5 48.5 70.22 48.5 97C48.5 70.22 70.22 48.5 97 48.5C70.22 48.5 48.5 26.78 48.5 0Z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-between h-full min-h-[240px]">
              <div className="flex flex-col items-start gap-3">
                <span className="font-mono font-normal text-xs uppercase text-[#2490bb] opacity-80">
                  getting started
                </span>
                <h3 className="w-full font-sans font-normal text-2xl lg:text-[27px] leading-tight text-[#e9f4f9]">
                  How to transition from a traditional to a digital bank
                </h3>
                <div className="flex flex-row items-center gap-4 mt-2">
                  <span className="font-sans font-normal text-sm text-[#64a8c4] opacity-80">
                    David Grohl
                  </span>
                  <span className="font-sans font-normal text-sm text-[#64a8c4] opacity-80">
                    17/08/24
                  </span>
                </div>
              </div>

              <button className="w-full mt-6 flex flex-row justify-center items-center py-2 border border-[#e9f4f9]/50 rounded-[10px] hover:bg-white/5 transition-colors">
                <span className="font-mono font-normal text-xs uppercase text-[#e9f4f9]/50">
                  read more
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Cards Row */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <InsightCard 
              category="getting started"
              title="How to transition from a traditional to a digital bank"
              author="David Grohl"
              date="17/08/24"
            />
            <InsightCard 
              category="getting started"
              title="How to transition from a traditional to a digital bank"
              author="David Grohl"
              date="17/08/24"
            />

          </div>

          {/* Read All Insights Link */}
          <div className="flex flex-col items-end gap-1 mt-4 cursor-pointer hover:opacity-80 group self-end">
            <div className="flex flex-row items-center gap-2">
              <span className="font-mono font-normal text-sm uppercase text-[#00b4fd]">
                read all insights
              </span>
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform">
                <path d="M1 7.5H13M13 7.5L7 1.5M13 7.5L7 13.5" stroke="#00B4FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="w-[32px] h-[1px] bg-[#00b4fd] mr-[18px]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Insights;
