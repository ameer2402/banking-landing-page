import React from 'react';

const NavIcon = ({ active, label, onClick, children }) => (
  <div onClick={onClick} className="flex flex-col items-center justify-center gap-1 w-1/4 h-full relative cursor-pointer">
    {active && (
      <div className="absolute top-0 w-[40px] h-[2px] bg-[#081E69]" />
    )}
    <div className={`w-6 h-6 flex justify-center items-center ${active ? 'text-[#081E69]' : 'text-[#1B1B1B]'}`}>
      {children}
    </div>
    <span className={`font-sans font-medium text-[14px] ${active ? 'text-[#081E69]' : 'text-[#1B1B1B]'}`}>
      {label}
    </span>
  </div>
);

const TransactionItem = ({ type, title, subtitle, date, amount, color }) => (
  <div className="flex flex-col w-full relative">
    <div className="flex flex-row items-center w-full h-[64px]">
      <div className={`w-[48px] h-[48px] rounded-[16px] flex justify-center items-center ${color}`}>
        {type === 'out' ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19L19 5M19 5v10M19 5H9" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 5L5 19M5 19V9M5 19h10" />
          </svg>
        )}
      </div>
      <div className="flex flex-col ml-[16px]">
        <div className="flex flex-row items-center gap-[6px]">
          <span className="font-sans font-bold text-[16px] text-[#0B0B0B]">{title}</span>
          <span className="font-sans font-medium text-[16px] text-[#0B0B0B] opacity-60">• {subtitle}</span>
        </div>
        <span className="font-sans font-normal text-[12px] text-[#0B0B0B] opacity-80 mt-[2px]">{date}</span>
      </div>
      <span className="font-sans font-bold text-[16px] text-[#0B0B0B] ml-auto">
        {amount}
      </span>
    </div>
    <div className="w-[342px] h-[1px] bg-[#0D0D0C] opacity-20 mt-[16px] mb-[16px]" />
  </div>
);

const FilterBadge = ({ label, active }) => (
  <div className={`h-[24px] rounded-[16px] flex justify-center items-center px-[12px] cursor-pointer ${active ? 'bg-[#081E69] text-white' : 'bg-[#F8F8F8] text-[#0D0D0C]'}`}>
    <span className="font-sans font-medium text-[12px] leading-[20px]">{label}</span>
  </div>
);

const Bar = ({ month, active }) => (
  <div className="flex flex-col items-center gap-[8px]">
    <div className={`w-[30px] h-[172px] rounded-[8px] ${active ? 'bg-[#081E69]' : 'bg-[#E9E9E9]'}`} />
    <span className="font-sans font-bold text-[12px] text-[#1C1C1C]">{month}</span>
  </div>
);

const TransactionScreen = ({ onTabChange }) => {
  return (
    <div className="w-[390px] h-[844px] bg-white relative">
      
      {/* Top Main Card */}
      <div className="absolute left-[24px] top-[60px] w-[342px] h-[418px] bg-[#F8F8F8] rounded-[24px] p-[20px]">
        
        {/* Header */}
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col">
            <span className="font-sans font-normal text-[14px] text-[#1B1B1B] opacity-60">March 2022</span>
            <span className="font-sans font-bold text-[28px] text-[#081E69] mt-[8px]">$8,295.00 USD</span>
          </div>
          <div className="w-[62px] h-[32px] border border-[#081E69]/20 rounded-[12px] flex flex-row justify-center items-center gap-[4px] cursor-pointer bg-white">
            <span className="font-sans font-bold text-[12px] text-[#081E69]">M</span>
            <svg className="w-4 h-4 text-[#081E69]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="flex flex-row justify-between mt-[36px]">
          <Bar month="Jan" />
          <Bar month="Feb" />
          <Bar month="Mar" active />
          <Bar month="Apr" />
          <Bar month="May" />
          <Bar month="Jun" />
        </div>

        {/* Separator */}
        <div className="w-[302px] h-[1px] bg-white mt-[20px]" />

        {/* Income / Spend */}
        <div className="flex flex-row mt-[20px]">
          {/* Income */}
          <div className="flex flex-row items-center w-1/2">
            <div className="w-[40px] h-[40px] bg-[#E9E9E9] rounded-[8px] flex justify-center items-center">
               <svg className="w-6 h-6 text-[#1B1B1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 5L5 19M5 19V9M5 19h10" />
              </svg>
            </div>
            <div className="flex flex-col ml-[12px]">
              <span className="font-sans font-normal text-[12px] text-[#191919] opacity-60">Income</span>
              <span className="font-sans font-bold text-[20px] text-[#191919]">$453.00</span>
            </div>
          </div>
          {/* Vertical Separator */}
          <div className="w-[1px] h-[40px] bg-white opacity-50" />
          {/* Spend */}
          <div className="flex flex-row items-center w-1/2 pl-[16px]">
             <div className="w-[40px] h-[40px] bg-[#E9E9E9] rounded-[8px] flex justify-center items-center">
               <svg className="w-6 h-6 text-[#1B1B1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19L19 5M19 5v10M19 5H9" />
              </svg>
            </div>
            <div className="flex flex-col ml-[12px]">
              <span className="font-sans font-normal text-[12px] text-[#191919] opacity-60">Spend</span>
              <span className="font-sans font-bold text-[20px] text-[#191919]">$453.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="absolute left-[19px] top-[518px] w-[369px] flex flex-col">
        <h3 className="font-sans font-bold text-[20px] text-[#0F0F0F] mb-[20px]">Recent activity</h3>
        
        {/* Filters */}
        <div className="flex flex-row gap-[10px] mb-[24px]">
          <FilterBadge label="This Day" />
          <FilterBadge label="This Week" active />
          <FilterBadge label="This Month" />
          <FilterBadge label="6 Month" />
        </div>

        {/* Transactions List */}
        <div className="flex flex-col w-[342px]">
          <TransactionItem 
            type="out"
            title="To Jin"
            subtitle="Work"
            date="12 jun 2022"
            amount="-$59"
            color="bg-[#9280FD]"
          />
          <TransactionItem 
            type="in"
            title="From Google"
            subtitle="Salary"
            date="10 jun 2022"
            amount="+$859"
            color="bg-[#1738AD]"
          />
          <TransactionItem 
            type="out"
            title="To David"
            subtitle="Work"
            date="7 jun 2022"
            amount="-$479"
            color="bg-[#9280FD]"
          />
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="absolute bottom-0 left-0 w-[390px] h-[80px] bg-[#E7E7E7]/90 backdrop-blur-[40px] rounded-t-[30px] flex flex-row items-center px-[20px] shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50">
        
        <NavIcon label="Home" active={true} onClick={() => onTabChange && onTabChange('home')}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        </NavIcon>
        
        <NavIcon label="Card" onClick={() => onTabChange && onTabChange('card')}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
        </NavIcon>
        
        <NavIcon label="Transaction" onClick={() => onTabChange && onTabChange('transaction')}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
        </NavIcon>
        
        <NavIcon label="Profile" onClick={() => onTabChange && onTabChange('profile')}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        </NavIcon>

      </div>

    </div>
  );
};

export default TransactionScreen;
