"use client";

import React from 'react';
import Image from 'next/image';

/**
 * LeadershipSection Component
 * 
 * Clones the "Our leadership" section with a distinctive yellow wavy background,
 * featuring text and a "Learn more about our leadership" button on the left,
 * and an image of two professionals working outdoors on the right.
 * 
 * Theme: Light
 * Primary Color: #F7D969 (Section Yellow)
 * Font Display: "Playfair Display", serif
 * Font Sans: "Inter", sans-serif
 */
const LeadershipSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Yellow Wavy Background Container */}
      <div className="relative w-full bg-[#F7D969] pt-24 pb-32 md:pt-32 md:pb-48">
        
        {/* Top Wave (Transition from previous section) */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[60px] md:h-[100px]"
            fill="#FDF9F0"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="flex flex-col items-start max-w-lg">
              <h2 className="font-display text-[40px] md:text-[48px] leading-[1.1] text-[#1D1D1B] mb-6">
                Our <em className="italic font-bold">leadership</em>
              </h2>
              <p className="font-sans text-[18px] md:text-[20px] leading-[1.6] text-[#1D1D1B] mb-8">
                Kwality Wall&apos;s India Limited is led by an experienced and diverse team of business experts.
              </p>
              
              <a 
                href="/leadership" 
                className="btn-pill bg-white text-[#1D1D1B] group hover:bg-opacity-90 flex items-center transition-all duration-200"
                style={{
                  padding: '12px 28px',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '14px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              >
                Learn more about our leadership
                <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>
            </div>

            {/* Right Image Column */}
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-[480px] aspect-[1/0.92] rounded-[24px] overflow-hidden shadow-xl">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3797e126-3744-4518-b29a-4f6bb8597c87-kwalitywallsindia-com/scroll_3.png"
                  alt="Kwality Wall's Leadership Professionals"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Wave (Transition to next cream section) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[80px] md:h-[140px]"
            fill="#FDF9F0"
          >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,2,1200,54.58V0Z"></path>
          </svg>
        </div>
      </div>

      <style jsx global>{`
        .font-display {
          font-family: 'Playfair Display', serif;
        }
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default LeadershipSection;