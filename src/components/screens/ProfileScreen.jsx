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

const ProfileItem = ({ icon, title, isSignOut = false }) => (
  <div className="w-[342px] h-[60px] bg-[#F8F8F8] rounded-[16px] flex flex-row items-center px-[20px] cursor-pointer hover:bg-gray-100 transition-colors">
    <div className="w-[40px] h-[40px] bg-[#E9E9E9] rounded-[16px] flex justify-center items-center">
      {icon}
    </div>
    <span className="font-sans font-bold text-[16px] text-[#151515] ml-[20px]">
      {title}
    </span>
    {!isSignOut && (
      <svg className="ml-auto w-6 h-6 text-[#1B1B1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    )}
  </div>
);

const ProfileScreen = ({ onTabChange }) => {
  return (
    <div className="w-[390px] h-[844px] bg-white relative">
      
      {/* Top Profile Card */}
      <div className="absolute left-[24px] top-[57px] w-[342px] h-[204px] bg-[#F8F8F8] rounded-[24px] flex flex-col items-center pt-[20px]">
        <div className="w-[80px] h-[80px] rounded-[16px] bg-[#D9D9D9] overflow-hidden mb-[20px]">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Toni Kross" className="w-full h-full object-cover" />
        </div>
        <h1 className="font-sans font-bold text-[28px] leading-[36px] text-[#1B1B1B]">
          Toni Kross
        </h1>
        <p className="font-sans font-normal text-[16px] leading-[24px] text-[#1B1B1B] opacity-60">
          tonikross@gmai.com
        </p>
      </div>

      {/* Menu Items */}
      <div className="absolute left-[24px] top-[285px] flex flex-col gap-[20px]">
        
        <ProfileItem 
          title="Profile setting"
          icon={<svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
        />
        
        <ProfileItem 
          title="Setting"
          icon={<svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
        />
        
        <ProfileItem 
          title="Support"
          icon={<svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>} // Using generic icon as placeholder for headset
        />
        
        <ProfileItem 
          title="Sign out"
          isSignOut={true}
          icon={<svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>}
        />
        
      </div>

      {/* Bottom Nav */}
      <div className="absolute bottom-0 left-0 w-[390px] h-[80px] bg-[#E7E7E7]/80 backdrop-blur-[40px] rounded-t-[30px] flex flex-row items-center px-[20px] shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        
        <NavIcon label="Home" onClick={() => onTabChange && onTabChange('home')}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        </NavIcon>
        
        <NavIcon label="Card" onClick={() => onTabChange && onTabChange('card')}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
        </NavIcon>
        
        <NavIcon label="Transaction" onClick={() => onTabChange && onTabChange('transaction')}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
        </NavIcon>
        
        <NavIcon label="Profile" active={true} onClick={() => onTabChange && onTabChange('profile')}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        </NavIcon>

      </div>

    </div>
  );
};

export default ProfileScreen;
