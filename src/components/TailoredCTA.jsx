import React from 'react';

const TailoredCTA = () => {
  return (
    <section className="py-24 flex flex-col items-start justify-center text-left gap-[48px] bg-transparent">
      <h2 className="text-[37px] font-sans text-text-light max-w-[433px] leading-[44.4px] text-left">
        All of our solutions are tailor-made to your needs
      </h2>
      <button className="bg-transparent border border-text-light hover:bg-white/5 text-text-light font-mono font-medium text-[15px] leading-[19.5px] py-4 px-12 rounded-[10px] transition-all uppercase">
        request demo
      </button>
    </section>
  );
};

export default TailoredCTA;
