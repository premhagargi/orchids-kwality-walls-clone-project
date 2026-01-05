"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUp, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

/**
 * Footer Section Component
 * 
 * Includes:
 * - Cookie consent bar (bottom-fixed)
 * - Main footer section with social and legal links
 * - Brand red thick accent bar
 * - Floating "back to top" button
 */
export default function Footer() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="footer-content" className="relative w-full bg-[#FDF9F0]">
      {/* Cookie Consent Bar */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-[#FDF9F0] border-t border-[#EDE4D3] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="max-w-4xl text-[12px] leading-[1.6] text-[#1D1D1B]">
                <p>
                  We use cookies and similar technologies to improve your experience on our site and to display ads to your interests on our website and other third-party sites. Our{" "}
                  <a href="#" className="underline">Terms of Use</a> and{" "}
                  <a href="#" className="underline">Privacy Policy</a> apply to your use of this website. You can update your{" "}
                  <a href="#" className="underline">Your Privacy Rights</a> at any time.
                </p>
                <div className="flex items-center mt-2">
                  <span className="inline-block mr-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </span>
                  <a href="#" className="underline text-[#005EE6]">AdChoices</a>
                </div>
              </div>
              <div className="flex gap-3 shrink-0">
                <button 
                  onClick={() => setShowCookieBanner(false)}
                  className="px-8 py-2 bg-[#E2C499] text-[#1D1D1B] font-bold text-[14px] rounded-[4px] min-w-[120px] transition-colors hover:bg-[#D4B588]"
                >
                  Decline
                </button>
                <button 
                  onClick={() => setShowCookieBanner(false)}
                  className="px-8 py-2 bg-[#E2C499] text-[#1D1D1B] font-bold text-[14px] rounded-[4px] min-w-[120px] transition-colors hover:bg-[#D4B588]"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer Content */}
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-[24px] font-display font-bold text-[#1D1D1B]">Contact us</h3>
              <p className="text-[16px] text-[#1D1D1B]">Get in touch with Kwality Wall&apos;s India Limited.</p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-[#82C1A4] text-white font-bold text-[14px] rounded-full transition-all hover:bg-[#71B093] group"
              >
                Contact Us <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Social Connection */}
            <div className="space-y-6">
              <h3 className="text-[24px] font-display font-bold text-[#1D1D1B]">Connect with us</h3>
              <p className="text-[16px] text-[#1D1D1B]">We&apos;re always looking to connect with those who share an interest in ice cream.</p>
              <div className="flex gap-6">
                <a href="#" className="text-[#DA1F2C] hover:opacity-80 transition-opacity">
                  <Facebook size={24} strokeWidth={2} />
                </a>
                <a href="#" className="text-[#DA1F2C] hover:opacity-80 transition-opacity">
                  <Twitter size={24} strokeWidth={2} />
                </a>
                <a href="#" className="text-[#DA1F2C] hover:opacity-80 transition-opacity">
                  <Instagram size={24} strokeWidth={2} />
                </a>
                <a href="#" className="text-[#DA1F2C] hover:opacity-80 transition-opacity">
                  <Youtube size={24} strokeWidth={2} />
                </a>
              </div>
            </div>

            {/* Empty space for layout matching original grid */}
            <div className="hidden lg:block"></div>

            {/* Logo / Brand Info */}
            <div className="flex flex-col items-start lg:items-end">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3797e126-3744-4518-b29a-4f6bb8597c87-kwalitywallsindia-com/assets/images/ot_company_logo-5.png"
                alt="Kwality Wall's Logo"
                width={120}
                height={60}
                className="mb-4 grayscale opacity-60"
              />
            </div>
          </div>

          {/* Legal Links & Copyright */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-8 border-t border-[#EDE4D3] gap-6">
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-[14px] font-semibold text-[#1D1D1B]">
              <a href="#" className="hover:text-[#DA1F2C] transition-colors">Cookie Notice</a>
              <a href="#" className="hover:text-[#DA1F2C] transition-colors">Privacy Notice</a>
              <a href="#" className="hover:text-[#DA1F2C] transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-[#DA1F2C] transition-colors">Legal</a>
              <a href="#" className="hover:text-[#DA1F2C] transition-colors">Sitemap</a>
            </div>
            <div className="text-[14px] text-[#737373]">
              © 2025 Kwality Wall&apos;s India Limited All rights reserved
            </div>
          </div>
        </div>
      </div>

      {/* Final Brand-Red Horizontal Divider */}
      <div className="h-[8px] w-full bg-[#DA1F2C]"></div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-24 z-40 flex items-center justify-center w-[50px] h-[50px] bg-[#E1E8F0] text-[#1D1D1B] rounded-full shadow-lg transition-all duration-300 hover:bg-[#D1D8E0] ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} strokeWidth={2.5} />
      </button>

      {/* Powered By Logo (Bottom Right Corner) */}
      <div className="container mx-auto px-8 relative">
        <div className="absolute right-8 bottom-12 opacity-40">
           <Image 
             src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3797e126-3744-4518-b29a-4f6bb8597c87-kwalitywallsindia-com/assets/svgs/powered_by_logo-1.svg"
             alt="Powered by"
             width={80}
             height={20}
           />
        </div>
      </div>
    </footer>
  );
}