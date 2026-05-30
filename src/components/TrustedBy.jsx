import React from 'react';

const TrustedBy = () => {
  return (
    <section className="py-8 w-full overflow-hidden">
      <div className="flex flex-col gap-[16px] max-w-[621.36px] w-full">
        <h3 className="text-text-light/60 font-medium text-[16px] leading-[20.8px] font-sans tracking-wide w-[83px]">
          trusted by:
        </h3>
        <div className="w-full flex items-center justify-center lg:justify-start">
          <img
            src="/trustedby_logos.svg"
            alt="Trusted by companies"
            className="w-full max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
