import React from 'react';

const NavIcon = ({ active, label, onClick, children }) => (
  <div onClick={onClick} className="flex flex-col items-center justify-center gap-1 w-1/4 h-full relative cursor-pointer">
    {active && (
      <div className="absolute top-0 w-[40px] h-[2px] bg-[#031A6E]" />
    )}
    <div className={`w-6 h-6 flex justify-center items-center ${active ? 'text-[#031A6E]' : 'text-[#CBCBDD]'}`}>
      {children}
    </div>
    <span className={`font-sans font-medium text-[14px] ${active ? 'text-[#031A6E]' : 'text-[#1B1B1B]'}`}>
      {label}
    </span>
  </div>
);

const TransactionItem = ({ title, subtitle, date, amount, amountColor, icon }) => (
  <div className="w-[342px] h-[72px] bg-white shadow-[0_5px_25px_rgba(0,0,0,0.02)] rounded-[12px] flex flex-row items-center px-[20px] mb-[16px]">
    <div className="w-[44px] h-[44px] bg-[#031A6E]/10 rounded-[12px] flex justify-center items-center">
      {icon}
    </div>
    <div className="flex flex-col ml-[16px]">
      <span className="font-sans font-bold text-[16px] text-[#222222]">{title}</span>
      <span className="font-sans font-normal text-[14px] text-[#222222] opacity-40">{subtitle}</span>
    </div>
    <div className="flex flex-col items-end ml-auto">
      <span className={`font-sans font-bold text-[16px] ${amountColor}`}>{amount}</span>
      <span className="font-sans font-normal text-[14px] text-[#222222] opacity-40">{date}</span>
    </div>
  </div>
);

const HomeScreen = ({ onTabChange }) => {
  return (
    <div className="w-[390px] h-[844px] bg-[#F9FAFC] relative">
      
      {/* Top Background White Area */}
      <div className="absolute top-0 left-0 w-full h-[280px] bg-white rounded-b-[30px] shadow-sm" />

      {/* Top Header */}
      <div className="absolute top-[60px] left-[24px] right-[24px] flex flex-row justify-between items-center z-10">
        <div className="flex flex-col">
          <span className="font-sans font-normal text-[14px] text-[#222222] opacity-40">Welcome Back,</span>
          <span className="font-sans font-bold text-[18px] text-[#222222]">Barly Vallendito</span>
        </div>
        <div className="flex flex-row items-center gap-[16px]">
          {/* Notification Bell */}
          <div className="relative">
            <svg className="w-6 h-6 text-[#222222]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <div className="absolute top-0 right-0 w-[10px] h-[10px] bg-[#E6492D] border-2 border-white rounded-full" />
          </div>
          {/* Profile Image */}
          <div className="w-[44px] h-[44px] rounded-[12px] bg-gray-300 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Balance Card */}
      <div className="absolute top-[140px] left-[24px] w-[342px] h-[140px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-[16px] p-[24px] z-10 flex flex-col justify-center">
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col">
            <span className="font-sans font-bold text-[16px] text-[#222222]">Balance</span>
            <span className="font-sans font-normal text-[12px] text-[#222222] opacity-40 mt-1">Today, 08 Sept 2019</span>
            <span className="font-sans font-bold text-[32px] text-[#031A6E] mt-[12px]">$4,420.00</span>
            <span className="font-sans font-normal text-[12px] text-[#222222] opacity-70 mt-1">Down by 2% from last month</span>
          </div>
          {/* Graph Placeholder */}
          <div className="w-[80px] h-[40px] mt-[10px]">
            <svg viewBox="0 0 100 40" fill="none" className="w-full h-full">
              <path d="M0 30 Q 25 10, 50 20 T 100 0" stroke="#031A6E" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Recent Transactions Section */}
      <div className="absolute top-[320px] left-[24px] w-[342px] flex flex-col z-10 pb-[100px]">
        <div className="flex flex-row justify-between items-center mb-[20px]">
          <h3 className="font-sans font-bold text-[18px] text-[#000000]">Recent Transactions</h3>
          <span className="font-sans font-bold text-[14px] text-[#031A6E] cursor-pointer">See all</span>
        </div>

        {/* Transactions List */}
        <TransactionItem 
          title="Dropbox Plan"
          subtitle="Subscription"
          date="18 Sept 2019"
          amount="- $144.00"
          amountColor="text-[#E6492D]"
          icon={
            <svg className="w-6 h-6 text-[#031A6E]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4 7l8 5 8-5-8-5zm0 11.5l-8-5v2.5l8 5 8-5V8l-8 5.5z"/></svg>
          }
        />
        <TransactionItem 
          title="Spotify Subscr."
          subtitle="Subscription"
          date="12 Sept 2019"
          amount="- $24.00"
          amountColor="text-[#E6492D]"
          icon={
            <svg className="w-6 h-6 text-[#031A6E]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.684 14.44a.622.622 0 01-.853.208c-2.333-1.425-5.267-1.748-8.73-.956a.622.622 0 11-.274-1.214c3.811-.87 7.054-.492 9.65 1.108a.622.622 0 01.207.854zm1.206-2.693a.778.778 0 01-1.066.26c-2.668-1.64-6.732-2.008-10.026-1.1A.778.778 0 015.39 11.4c3.8-1.052 8.32-.628 11.43 1.282a.778.778 0 01.26 1.065zm.12-2.825c-3.197-1.897-8.473-2.072-11.517-1.147a.972.972 0 01-.565-1.859c3.551-1.08 9.388-.874 13.064 1.011a.972.972 0 11-.982 1.995z"/></svg>
          }
        />
        <TransactionItem 
          title="Youtube Ads."
          subtitle="Income"
          date="10 Sept 2019"
          amount="+ $32.00"
          amountColor="text-[#34AA44]"
          icon={
            <svg className="w-6 h-6 text-[#031A6E]" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582 6.186a2.6 2.6 0 00-1.824-1.824C18.147 4 12 4 12 4s-6.147 0-7.758.362a2.6 2.6 0 00-1.824 1.824C2 7.797 2 12 2 12s0 4.203.362 5.814a2.6 2.6 0 001.824 1.824C5.853 20 12 20 12 20s6.147 0 7.758-.362a2.6 2.6 0 001.824-1.824C22 16.203 22 12 22 12s0-4.203-.362-5.814zM9.8 15.5v-7l6.4 3.5-6.4 3.5z"/></svg>
          }
        />
        <TransactionItem 
          title="Freelance Work"
          subtitle="Income"
          date="06 Sept 2019"
          amount="+ $421.00"
          amountColor="text-[#34AA44]"
          icon={
             <svg className="w-6 h-6 text-[#031A6E]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 7h-4V5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM10 5h4v2h-4V5zm10 14H4V9h16v10z"/></svg>
          }
        />
      </div>

      {/* Bottom Nav */}
      <div className="absolute bottom-0 left-0 w-[390px] h-[80px] bg-white shadow-[0_-10px_20px_rgba(0,0,0,0.05)] rounded-t-[30px] flex flex-row items-center px-[20px] z-50">
        
        <NavIcon label="" active={true} onClick={() => onTabChange && onTabChange('home')}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3l9 8h-3v8h-4v-6h-4v6H6v-8H3l9-8z" /></svg>
        </NavIcon>
        
        <NavIcon label="" onClick={() => onTabChange && onTabChange('card')}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4H5v9h14v-9h-3zm-4-4a2 2 0 012 2v4h-4V9a2 2 0 012-2z" /></svg>
        </NavIcon>
        
        <NavIcon label="" onClick={() => onTabChange && onTabChange('transaction')}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" /></svg>
        </NavIcon>
        
        <NavIcon label="" onClick={() => onTabChange && onTabChange('profile')}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" /></svg>
        </NavIcon>

      </div>

    </div>
  );
};

export default HomeScreen;
