import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const caseStudiesData = [
  {
    id: 1,
    category: "getting started",
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
    logoColor: "#586e84",
    logoIcon: <path d="M13 10V3L4 14h7v7l9-11h-7z" />,
    graphicType: "shuriken",
  },
  {
    id: 2,
    category: "transformation",
    title: "Transforming digital banking experiences globally",
    company: "FinFlow",
    logoColor: "#00b4fd",
    logoIcon: <path d="M12 2L2 22h20L12 2zm0 4.5l6 13.5H6l6-13.5z" />,
    graphicType: "polygon",
  },
  {
    id: 3,
    category: "infrastructure",
    title: "Scaling API infrastructure for millions of active users",
    company: "TechScale",
    logoColor: "#36D19B",
    logoIcon: <path d="M4 4h16v16H4zM6 6v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />,
    graphicType: "circles",
  },
  {
    id: 4,
    category: "security",
    title: "Revolutionizing cross-border payments with advanced AML",
    company: "PayStream",
    logoColor: "#FFB800",
    logoIcon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />,
    graphicType: "diamonds",
  }
];

const GraphicPattern = ({ type }) => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:gap-[32px] p-4">
      {[1, 2, 3, 4].map((i) => {
        if (type === 'shuriken') {
          return (
            <svg key={i} className="w-16 h-16 lg:w-[100px] lg:h-[100px] text-[#00b4fd]" viewBox="0 0 139 139" fill="currentColor">
              <path d="M69.5 0C69.5 38.38 38.38 69.5 0 69.5C38.38 69.5 69.5 100.62 69.5 139C69.5 100.62 100.62 69.5 139 69.5C100.62 69.5 69.5 38.38 69.5 0Z" />
            </svg>
          );
        }
        if (type === 'polygon') {
          return (
            <div key={i} className="w-16 h-16 lg:w-[100px] lg:h-[100px] bg-[#00b4fd] rounded-xl" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
          );
        }
        if (type === 'circles') {
          return (
            <div key={i} className="w-16 h-16 lg:w-[100px] lg:h-[100px] rounded-full border-[6px] lg:border-[8px] border-[#00b4fd] bg-transparent" />
          );
        }
        if (type === 'diamonds') {
           return (
             <div key={i} className="w-12 h-12 lg:w-[80px] lg:h-[80px] bg-[#00b4fd] transform rotate-45 m-2 lg:m-[10px]" />
           );
        }
        return null;
      })}
    </div>
  );
};

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % caseStudiesData.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + caseStudiesData.length) % caseStudiesData.length);

  const getPosition = (index) => {
    if (index === activeIndex) return 'center';
    if (index === (activeIndex - 1 + caseStudiesData.length) % caseStudiesData.length) return 'left';
    if (index === (activeIndex + 1) % caseStudiesData.length) return 'right';
    return 'hidden';
  };

  const desktopVariants = {
    center: { x: "-50%", y: 0, scale: 1, opacity: 1, zIndex: 20 },
    left: { x: "calc(-50% - 153px)", y: 32, scale: 0.87, opacity: 0.3, zIndex: 10 },
    right: { x: "calc(-50% + 153px)", y: 32, scale: 0.87, opacity: 0.3, zIndex: 10 },
    hidden: { x: "-50%", y: 32, scale: 0.5, opacity: 0, zIndex: 0 }
  };

  const mobileVariants = {
    center: { x: "-50%", y: 0, scale: 1, opacity: 1, zIndex: 20 },
    left: { x: "calc(-50% - 50px)", y: 20, scale: 0.9, opacity: 0, zIndex: 10 },
    right: { x: "calc(-50% + 50px)", y: 20, scale: 0.9, opacity: 0, zIndex: 10 },
    hidden: { x: "-50%", y: 20, scale: 0.5, opacity: 0, zIndex: 0 }
  };

  const variants = isMobile ? mobileVariants : desktopVariants;

  return (
    <section className="w-full relative bg-[#000d12] overflow-hidden py-12 lg:py-20">
      
      {/* Title */}
      <h2 className="w-full text-center font-sans font-normal text-4xl lg:text-[53px] leading-tight tracking-[-0.01em] text-[#e9f4f9] mb-12 lg:mb-20">
        Our Case Studies
      </h2>

      {/* Carousel Container */}
      <div className="relative w-full max-w-[1440px] mx-auto h-[600px] lg:h-[513px]">
        
        {/* Cards Area */}
        <div className="absolute left-0 w-full h-[500px] lg:h-[438px] perspective-[1000px]">
          <AnimatePresence initial={false}>
            {caseStudiesData.map((study, index) => {
              const position = getPosition(index);
              const isCenter = position === 'center';

              return (
                <motion.div
                  key={study.id}
                  variants={variants}
                  initial={false}
                  animate={position}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.15 }}
                  className="absolute left-1/2 top-0 origin-center bg-[#01141b] rounded-[18px] shadow-2xl overflow-hidden cursor-pointer flex flex-col lg:flex-row w-[90vw] sm:w-[80vw] lg:w-[1015px] h-[500px] lg:h-[438px] items-center lg:items-start p-4 lg:p-6 gap-6"
                  onClick={() => {
                     if (position === 'left') prevSlide();
                     if (position === 'right') nextSlide();
                  }}
                >
                  
                  {/* Graphic Box */}
                  <div className="w-full lg:w-[421px] h-[200px] lg:h-[381px] bg-[#07193c] rounded-[11.4px] flex justify-center items-center shrink-0">
                    <GraphicPattern type={study.graphicType} />
                  </div>

                  {/* Content Box */}
                  <motion.div 
                    className="flex-1 flex flex-col items-start justify-between h-full w-full lg:w-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isCenter ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: isCenter ? 0.3 : 0 }}
                  >
                    <div className="flex flex-col items-start gap-2 lg:gap-[11px] w-full">
                      <span className="font-mono font-normal text-[10px] lg:text-[12px] leading-[1.3] uppercase text-[#2490bb] opacity-80 tracking-widest">
                        {study.category}
                      </span>
                      
                      <h3 className="w-full font-sans font-normal text-2xl lg:text-[43px] leading-tight text-[#e9f4f9]">
                        {study.title}
                      </h3>
                      
                      {/* Logo Group */}
                      <div className="flex flex-row items-center gap-[7.5px] mt-2">
                        <div 
                          className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px] rounded-full flex justify-center items-center"
                          style={{ backgroundColor: study.logoColor }}
                        >
                          <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            {study.logoIcon}
                          </svg>
                        </div>
                        <span className="font-sans font-bold text-lg lg:text-[22.5px] leading-[1.1]" style={{ color: study.logoColor }}>
                          {study.company}
                        </span>
                      </div>
                    </div>

                    {/* Button */}
                    <button className="flex flex-row justify-center items-center w-full lg:w-[431px] h-[36px] lg:h-[40px] border border-white/20 rounded-[10px] hover:bg-white/5 transition-colors mt-4 lg:mt-auto">
                      <span className="font-mono font-normal text-[10px] lg:text-[12px] leading-[1.3] uppercase text-white/50 tracking-widest">
                        read more
                      </span>
                    </button>
                  </motion.div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[243px] h-[42px] flex flex-row justify-center items-center gap-[31px]">
          <button onClick={prevSlide} className="w-[42px] h-[42px] border-[1.36px] border-[#00b4fd] rounded-full flex justify-center items-center hover:bg-[#00b4fd]/10 transition-colors">
            <svg className="w-5 h-5 text-[#00b4fd]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Dots */}
          <div className="flex flex-row items-center gap-[7.73px]">
            {caseStudiesData.map((_, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`rounded-full cursor-pointer transition-all duration-300 ${idx === activeIndex ? 'w-[38px] h-[12px] bg-[#0b4b63]' : 'w-[12px] h-[12px] border border-[#0b4b63] hover:bg-[#0b4b63]/50'}`} 
              />
            ))}
          </div>

          <button onClick={nextSlide} className="w-[42px] h-[42px] border-[1.36px] border-[#00b4fd] rounded-full flex justify-center items-center hover:bg-[#00b4fd]/10 transition-colors">
            <svg className="w-5 h-5 text-[#00b4fd]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* View All */}
        <div className="absolute right-6 lg:right-[120px] bottom-0 flex flex-col items-end gap-[3px] cursor-pointer hover:opacity-80">
          <div className="flex flex-row justify-center items-center gap-[5px]">
            <span className="font-mono font-normal text-xs lg:text-[14px] leading-[1.3] uppercase text-[#00b4fd]">
              view all
            </span>
            <svg className="w-3 h-3 lg:w-[14px] lg:h-[14px] text-[#00b4fd]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
          <div className="w-[32px] h-[1px] bg-[#00b4fd]" />
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
