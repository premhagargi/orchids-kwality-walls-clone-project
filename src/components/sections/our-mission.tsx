import React from 'react';
import Image from 'next/image';

const OurMission = () => {
  return (
    <section className="bg-[#FBF8F3] py-[100px] overflow-hidden">
      <div className="container max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[80px]">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <h2 className="text-[42px] font-display font-800 text-[#1F2121] leading-[1.1] mb-6">
              Our <em className="italic font-display">mission</em>
            </h2>
            
            <p className="text-[16px] font-sans text-[#1F2121] leading-[1.5] mb-6 max-w-[500px]">
              At Kwality Wall&apos;s India Limited, we take pleasure seriously — because life tastes better with ice cream.
            </p>
            
            <p className="text-[16px] font-sans text-[#1F2121] leading-[1.5] mb-10 max-w-[500px]">
              Crafting extraordinary experiences that turn ordinary moments into lasting memories is at the heart of what we do.
            </p>
            
            <a 
              href="/our-company.html"
              className="inline-flex items-center justify-center rounded-full bg-[#FCE1E4] px-[24px] py-[12px] text-[14px] font-sans font-700 text-[#1F2121] transition-opacity hover:opacity-90 group"
            >
              Our company
              <span className="ml-[8px] transition-transform group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </a>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] aspect-square rounded-[20px] overflow-hidden">
              <Image
                src="https://assets.unileversolutions.com/v1/141814888.png"
                alt="Multiple Cornetto cones on a blue background"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 540px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;