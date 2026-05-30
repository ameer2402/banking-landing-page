import React, { useState } from 'react';
import PhoneMockup from './PhoneMockup';
import TransactionScreen from './screens/TransactionScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';

const InteractivePhone = ({ initialTab = 'home' }) => {
  const [tab, setTab] = useState(initialTab);
  
  return (
    <PhoneMockup>
      {tab === 'home' && <HomeScreen onTabChange={setTab} />}
      {tab === 'transaction' && <TransactionScreen onTabChange={setTab} />}
      {tab === 'profile' && <ProfileScreen onTabChange={setTab} />}
      {tab === 'card' && <HomeScreen onTabChange={setTab} />}
    </PhoneMockup>
  );
};

const FeatureRow = ({ title, desc, features, reverse, initialTab }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between gap-12 lg:gap-24 relative z-10 w-full`}>
      <div className="w-full lg:w-1/2 flex justify-center">
        <InteractivePhone initialTab={initialTab} />
      </div>
      <div className="w-full lg:w-1/2 space-y-8 lg:space-y-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00b4fd] to-[#003ace] shadow-sm flex items-center justify-center shrink-0">
               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-2xl lg:text-[28px] font-sans font-medium text-[#000d12]">{title}</h3>
          </div>
          <p className="text-[#000d12] opacity-70 text-lg leading-relaxed pl-0 lg:pl-13">
            {desc}
          </p>
        </div>
        {features && (
          <div className="flex flex-col gap-4 pl-0 lg:pl-13">
             {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                   <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#00b4fd] to-[#003ace] flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   <span className="text-[#000d12] opacity-70 font-medium">{f}</span>
                </div>
             ))}
          </div>
        )}
      </div>
    </div>
  );
};

const N7Details = () => {
  return (
    <section className="w-full relative bg-[#e9f4f9] overflow-hidden">
      
      {/* Marquee (Responsive) */}
      <div className="relative w-full h-[80px] lg:h-[116px] bg-white overflow-hidden border-b border-gray-100 flex items-center">
        <div className="absolute left-0 flex flex-row items-center animate-marquee w-max h-full">
          {[1, 2, 3].map((sequenceIndex) => (
            <div key={sequenceIndex} className="flex flex-row items-center gap-6 pr-6 h-full">
              {/* Asterisk */}
              <div className="w-10 h-10 lg:w-[58px] lg:h-[58px] opacity-30 text-[#000d12] flex items-center justify-center shrink-0">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0V40M0 20H40M5.85786 5.85786L34.1421 34.1421M5.85786 34.1421L34.1421 5.85786" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              
              <span className="font-sans font-medium text-3xl lg:text-[47px] leading-[1.2] bg-gradient-to-r from-[#00b4fd] to-[#003ace] text-transparent bg-clip-text flex items-center shrink-0 whitespace-nowrap">
                N7
              </span>

              <div className="w-10 h-10 lg:w-[58px] lg:h-[58px] opacity-30 text-[#000d12] flex items-center justify-center shrink-0">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0V40M0 20H40M5.85786 5.85786L34.1421 34.1421M5.85786 34.1421L34.1421 5.85786" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>

              <span className="font-sans font-semibold text-3xl lg:text-[47px] leading-[1.2] text-[#000d12] flex items-center shrink-0 whitespace-nowrap">
                Say
              </span>

              <div className="text-4xl lg:text-[56px] -scale-x-100 shrink-0 whitespace-nowrap flex items-center px-4">
                👋
              </div>

              <span className="font-sans font-semibold text-3xl lg:text-[47px] leading-[1.2] text-[#000d12] flex items-center shrink-0 whitespace-nowrap">
                to the new way of banking
              </span>
            </div>
          ))}
        </div>
      </div>


      {/* Main Content Area */}
      <div className="relative w-full px-6 lg:px-[120px] max-w-[1440px] mx-auto py-12 lg:py-32 flex flex-col gap-24 lg:gap-40">
        
        {/* Background Watermarks & Glows */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[744px] h-[687px] font-sans font-medium text-[300px] lg:text-[572px] text-center opacity-[0.03] text-[#00b4fd] select-none pointer-events-none">
          N7
        </div>
        <div className="absolute left-[80%] top-[40%] font-sans font-medium text-[800px] lg:text-[1500px] opacity-[0.03] text-[#00b4fd] select-none pointer-events-none">
          7
        </div>

        <div className="absolute left-[-10%] top-[5%] w-[400px] h-[400px] lg:w-[585px] lg:h-[585px] rounded-full opacity-[0.03] blur-[60px] bg-gradient-to-r from-[#fda700] to-[#ce5700] pointer-events-none" />
        <div className="absolute right-[-10%] top-[40%] w-[500px] h-[500px] lg:w-[778px] lg:h-[778px] rounded-full opacity-[0.05] blur-[80px] bg-gradient-to-r from-[#fda700] to-[#ce5700] pointer-events-none" />
        <div className="absolute left-[-10%] bottom-[10%] w-[500px] h-[500px] lg:w-[778px] lg:h-[778px] rounded-full opacity-[0.05] blur-[80px] bg-gradient-to-r from-[#00cffd] to-[#0015ce] pointer-events-none" />


        {/* Intro Banner */}
        <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left gap-8 max-w-2xl mx-auto lg:mx-0">
          <div className="flex flex-col gap-4">
            <h2 className="font-sans font-normal text-4xl lg:text-[53px] leading-tight tracking-[-0.01em] text-[#000d12] opacity-95">
              Digital banking out-of-the-box
            </h2>
            <p className="font-sans font-normal text-lg text-[#000d12] opacity-70">
              N7 helps your financial institution improve the client experience, automate and optimize procedures
            </p>
          </div>
          <button 
            className="flex flex-row justify-center items-center w-[210px] h-[49px] rounded-[10px] hover:opacity-90 transition-opacity shadow-lg shadow-[#003ace]/20"
            style={{ background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)' }}
          >
            <span className="font-mono font-normal text-[15px] uppercase text-white">
              REQUEST DEMO
            </span>
          </button>
          
          <div className="flex flex-col items-center lg:items-start gap-1 cursor-pointer hover:opacity-80 group/link">
            <div className="flex flex-row items-center gap-2">
              <span className="font-mono font-normal text-[14px] uppercase bg-gradient-to-r from-[#00b4fd] to-[#003ace] text-transparent bg-clip-text">
                learn more
              </span>
              <svg className="w-[14px] h-[14px] text-[#003ace] group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <div className="w-[32px] h-[2px] bg-gradient-to-r from-[#00b4fd] to-[#003ace]" />
          </div>
        </div>

        {/* Unified Feature Rows */}
        <div className="flex flex-col gap-32 lg:gap-40 w-full relative z-10">
          <FeatureRow 
            title="Fully compliant with regulatory requirement"
            desc="The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank’s operational-risk protocols and procedures."
            features={[
              "Pre-integrated Security System",
              "Fully Compliant With Regulatory Requirement",
              "Digitally Connected Core"
            ]}
            reverse={false}
            initialTab="transaction"
          />

          <FeatureRow 
            title="No legacy IT systems"
            desc="Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance."
            features={[
              "Adaptive & Intelligent API monetization",
              "Ambient User Experience",
              "Cloud-native With lower TCO"
            ]}
            reverse={true}
            initialTab="profile"
          />

          <FeatureRow 
            title="No traditional branches"
            desc="Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience."
            features={[
              "Branchless & Paperless Banking",
              "Digital Transformation Capability",
              "Optimized, Adoptable and Scalable"
            ]}
            reverse={false}
            initialTab="home"
          />
        </div>

        {/* Bottom CTA Card */}
        <div className="relative z-10 w-full rounded-[27px] overflow-hidden p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 mt-12"
             style={{ background: 'linear-gradient(99.21deg, #031E2A -12.22%, #000D12 59.26%)' }}>
          
          {/* Faint Outline Text */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sans font-medium text-[250px] lg:text-[400px] text-center opacity-30 select-none pointer-events-none"
            style={{ 
              color: 'transparent',
              WebkitTextStroke: '1px rgba(0, 180, 253, 0.3)' 
            }}
          >
            N7
          </div>

          {/* Left Text Content */}
          <div className="relative z-10 w-full lg:w-[60%] flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
            <h2 className="font-sans font-normal text-3xl lg:text-[53px] leading-tight tracking-[-0.01em] text-[#e9f4f9]">
              Take the full advantage of going paper-less now.
            </h2>
            <p className="font-sans font-normal text-base text-[#e9f4f9] opacity-80 max-w-lg">
              N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
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

      </div>
    </section>
  );
};

export default N7Details;
