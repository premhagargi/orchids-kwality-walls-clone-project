import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * ContactUs Section
 * 
 * Clones the "Contact us" section with pixel-perfect accuracy.
 * Features:
 * - Wavy SVG background/divider (transition from yellow leadership section)
 * - Light cream (vanilla) background
 * - Centered heading in Playfair Display
 * - Green pill CTA button with arrow
 * - Spacious vertical padding (120px per design system)
 */
const ContactUs = () => {
  return (
    <section 
      id="contact-us" 
      className="relative bg-[#FDF9F0] overflow-hidden"
    >
      {/* Wavy Divider Transition (Top) */}
      {/* This creates the 'melting' effect from the previous yellow section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 select-none pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[120px]"
          fill="#F7D969" 
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-8 pt-[240px] pb-[120px] text-left relative z-10">
        <div className="max-w-[1280px] mx-auto">
          {/* Section Heading */}
          <h2 className="font-display text-[48px] font-[800] leading-[1.2] text-[#1D1D1B] mb-6">
            Contact <em className="italic font-[800]">us</em>
          </h2>

          {/* Subtext */}
          <p className="font-sans text-[18px] font-[400] leading-[1.6] text-[#1D1D1B] mb-8">
            Get in touch with Kwality Wall&apos;s India Limited.
          </p>

          {/* Contact Us Button */}
          <a 
            href="/contact-us"
            className="inline-flex items-center justify-center bg-[#82C1A4] hover:opacity-90 transition-all duration-200 px-[28px] py-[12px] rounded-full text-[#1D1D1B] font-sans font-[700] text-[14px] group"
          >
            Contact Us
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Subtle bottom wave to finish the section logic (if required by full page flow) */}
      <div className="w-full h-1 bg-[#EDE4D3] mt-auto"></div>
    </section>
  );
};

export default ContactUs;