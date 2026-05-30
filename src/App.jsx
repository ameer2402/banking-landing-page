import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import TailoredCTA from './components/TailoredCTA'
import CB7Details from './components/CB7Details'
import N7Details from './components/N7Details'
import CaseStudies from './components/CaseStudies'
import Insights from './components/Insights'
import BottomCTA from './components/BottomCTA'
import Footer from './components/Footer'

const SectionWrapper = ({ children, delay = 0, yOffset = 50 }) => (
  <motion.div
    initial={{ opacity: 0, y: yOffset }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

function App() {

  return (
    <div className="min-h-screen w-full bg-dark text-text-light font-sans selection:bg-primary/30 relative flex flex-col">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar />
      </motion.div>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] pb-12 lg:pb-24 pt-12 space-y-32">
        
        {/* First Section */}
        <SectionWrapper delay={0.1}>
          <div className="space-y-24">
            <Hero />
            <TrustedBy />
          </div>
        </SectionWrapper>

        {/* Second Section */}
        <SectionWrapper delay={0.2}>
          <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-12 xl:gap-24 relative z-10">
            <div className="w-full xl:w-auto flex-shrink-0 pt-12">
              <TailoredCTA />
            </div>
            <div className="w-full xl:w-auto">
              <Features />
            </div>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper>
        <CB7Details />
      </SectionWrapper>
      
      <SectionWrapper>
        <N7Details />
      </SectionWrapper>
      
      <SectionWrapper>
        <Insights />
      </SectionWrapper>
      
      <SectionWrapper>
        <CaseStudies />
      </SectionWrapper>
      
      <SectionWrapper>
        <BottomCTA />
      </SectionWrapper>
      
      <SectionWrapper yOffset={20}>
        <Footer />
      </SectionWrapper>
    </div>
  )
}

export default App
