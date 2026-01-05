"use client";

import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Lifestyle Image Section */}
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden">
        <img
          src="https://assets.unileversolutions.com/v1/141814888.png" // Note: This is a placeholder as the exact lifestyle image URL wasn't in the provided list, but the structure follows the design.
          alt="Someone enjoying a Cornetto ice cream"
          className="w-full h-full object-cover object-center"
          style={{ transform: 'scale(1.1)' }}
          onError={(e) => {
            // High-res placeholder behavior if specific URL is missing
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1501443762994-82bd5dabb892?q=80&w=2070&auto=format&fit=crop";
          }}
        />
      </div>

      {/* Wavy Background Decoration & Text Content */}
      <div className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 px-4">
        {/* Subtle Decorative Wave */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `radial-gradient(circle at 50% 120%, #F2E9D8 20%, transparent 70%)`,
            opacity: 0.4
          }}
        />

        {/* Wavy Mask/Path Detail (Simulated with absolute elements) */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 z-10 translate-y-[-1px]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[60px] lg:h-[100px]"
            fill="#FFFFFF"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="container relative z-20 mx-auto text-center max-w-4xl">
          {/* Main Headline */}
          <h1 className="font-display text-[48px] md:text-[64px] lg:text-[72px] font-extrabold text-foreground leading-[1.1] mb-8 tracking-tight">
            Life tastes <em className="italic font-extrabold">better</em><br />
            with ice cream
            <span className="inline-block ml-2 align-middle">
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="#DA1F2C" 
                className="inline-block mb-2 md:w-[48px] md:h-[48px] lg:w-[56px] lg:h-[56px]"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </span>
          </h1>

          {/* Subtext */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="font-sans text-[16px] md:text-[18px] text-foreground font-semibold">
              Welcome to Kwality Wall&apos;s India Limited!
            </p>
            <p className="font-sans text-[16px] md:text-[18px] text-foreground leading-relaxed">
              We are home to some of the most famous and loved names in the world of ice creams: Magnum, Cornetto, Kwality Wall&apos;s, and many more!
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Wavy Bottom Transition */}
      <div className="w-full pointer-events-none -mt-4">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto block"
          fill="#FDF9F0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,800;1,800&family=Inter:wght@400;600;700&display=swap');
      `}</style>
    </section>
  );
};

export default HeroSection;