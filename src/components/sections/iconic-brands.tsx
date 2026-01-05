import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

/**
 * IconicBrands Section
 * Features the centered "Our iconic brands" header and the brand spotlight carousel.
 * According to high-level design:
 * - Headlines: 42px Modern Serif (Playfair Display), bold, italicized keywords.
 * - Body: 16px Sans-Serif (Inter), 1.5 line height.
 * - Primary Background: #FBF8F3.
 * - Button Secondary: #FCE1E4 (pill-shaped).
 */

const IconicBrands = () => {
  return (
    <section className="bg-[#FBF8F3] py-[100px] overflow-hidden">
      <div className="container mx-auto px-8 max-w-[1280px]">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-[42px] leading-[1.1] font-display font-bold text-[#1F2121] mb-6">
            Our iconic <em className="italic">brands</em>
          </h2>
          <p className="text-[16px] leading-[1.5] font-sans text-[#1F2121] mb-8">
            Kwality Wall&apos;s India Limited has an iconic portfolio of brands. Here are some of our biggest and best-known brands: Cornetto, Magnum, and Kwality Wall&apos;s.
          </p>
          <a
            href="/brands"
            className="inline-flex items-center justify-center rounded-full bg-[#FCE1E4] px-6 py-3 text-[14px] font-bold text-[#1F2121] transition-opacity hover:opacity-90 group"
          >
            See all brands
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Brand Showcase Carousel (Spotlight) */}
        <div className="relative mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Visual Column */}
            <div className="relative flex justify-center items-center">
              {/* Decorative Background Shape */}
              <div 
                className="absolute z-0 w-[120%] h-[120%] -left-[10%] -top-[10%] opacity-20 pointer-events-none"
                style={{
                  clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
                  backgroundColor: '#8CC6A5'
                }}
              ></div>
              
              {/* Brand Asset Image */}
              <div className="relative z-10 w-full max-w-[450px]">
                <img
                  src="https://assets.unileversolutions.com/v1/141814888.png"
                  alt="Cornetto"
                  className="w-full h-auto drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))'
                  }}
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                {/* Brand Category Icon Placeholder */}
                <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full border border-[#E5E5E5]">
                  <svg 
                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                    className="text-[#E31B23]"
                  >
                    <path d="M12 2l4 18H8l4-18z" />
                    <path d="M12 2c4 0 4 4 4 4s-1 1-4 1-4-1-4-1 0-4 4-4z" />
                  </svg>
                </div>
                
                <h3 className="text-[32px] font-bold font-sans text-[#1F2121] mb-6">
                  Cornetto
                </h3>
                <p className="text-[16px] leading-[1.5] font-sans text-[#1F2121]">
                  Cornetto has delighted ice cream lovers worldwide with its iconic combination of creamy ice cream, a crunchy cone, and a chocolate tip. Originating as the classic combination of Vanilla and Chocolate, this handheld ice cream has become a global bestseller.
                </p>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center gap-6 mt-12">
                <button 
                  className="p-2 text-[#737373] hover:text-[#1F2121] transition-colors"
                  aria-label="Previous brand"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                {/* Indicators */}
                <div className="flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E31B23]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#E5E5E5]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#E5E5E5]"></span>
                </div>

                <button 
                  className="p-2 text-[#737373] hover:text-[#1F2121] transition-colors"
                  aria-label="Next brand"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconicBrands;