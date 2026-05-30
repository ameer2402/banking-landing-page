import React from 'react';

const FeatureCard = ({ title, description, linkText, iconUrl }) => {
  return (
    <div className="flex flex-col gap-[26px] group">
      {/* Icon (Frame 26 or Frame 33) */}
      <div className="flex justify-between items-end w-full">
        <div className="w-[47px] h-[49px] flex-shrink-0">
          {iconUrl ? (
            <img src={iconUrl} alt={title} className="w-full h-full object-contain" />
          ) : (
            <div className="w-full h-full text-primary group-hover:text-primary/80 transition-colors duration-300">
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
          )}
        </div>
        {(title === "Loan Origination System" || title === "Loan Management System") && (
          <span className="text-[#e9f4f9] text-[14px] font-mono font-medium tracking-wide">NBFC</span>
        )}
      </div>

      {/* Content (Frame 25) */}
      <div className="flex flex-col gap-[32px]">
        <h3 className="text-[22px] leading-[26.4px] font-sans font-medium text-[#e9f4f9]">
          {title}
        </h3>
        <p className="text-[16px] leading-[20.8px] text-[#e9f4f9] font-sans">
          {description}
        </p>
      </div>

      {/* Learn More Link (Component 3) */}
      <div className="mt-auto pt-2">
        <a href="#" className="inline-block group/link">
          <img src="/component3.svg" alt="learn more" className="h-[24px] object-contain opacity-90 group-hover/link:opacity-100 transition-opacity" />
        </a>
      </div>
    </div>
  );
};

const featuresList = [
  {
    title: "Core Banking CB7",
    description: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    linkText: "learn more",
    iconUrl: "/feature1.svg"
  },
  {
    title: "Digital Banking N7",
    description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    linkText: "learn more",
    iconUrl: "/feature2.svg"
  },
  {
    title: "Open Banking",
    description: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    linkText: "learn more",
    iconUrl: "/feature3.svg"
  },
  {
    title: "Loan Origination System",
    description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    linkText: "learn more",
    iconUrl: "/feature4.svg"
  },
  {
    title: "Loan Management System",
    description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    linkText: "learn more",
    iconUrl: "/feature5.svg"
  }
];

const Features = () => {

  return (
    <section className="py-12 border-t border-white/10 flex justify-center lg:justify-start">
      <div className="flex flex-wrap gap-[76px] w-full max-w-[613.01px]">
        {featuresList.map((feature, idx) => (
          <div key={idx} className="w-[268.5px]">
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
