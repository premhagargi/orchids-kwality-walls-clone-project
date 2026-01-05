"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MoveRight, MoveLeft } from "lucide-react";

const brands = [
  {
    id: "cornetto",
    name: "Cornetto",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3797e126-3744-4518-b29a-4f6bb8597c87-kwalitywallsindia-com/scroll_2.png",
    description:
      "Cornetto has delighted ice cream lovers worldwide with its iconic combination of creamy ice cream, a crunchy cone, and a chocolate tip. Originating as the classic combination of Vanilla and Chocolate, this handheld ice cream has become a global bestseller.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L8 14H24L16 2Z" stroke="#1D1D1B" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 14L16 30L24 14" stroke="#1D1D1B" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="16" cy="11" r="3" stroke="#1D1D1B" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "magnum",
    name: "Magnum",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3797e126-3744-4518-b29a-4f6bb8597c87-kwalitywallsindia-com/scroll_2.png", // Placeholder, using available asset
    description:
      "The Magnum brand has become renowned for pleasure – and ice cream decadence – around the world. As the icon of indulgence, Magnum believes that true pleasure makes life worth living.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect x="10" y="6" width="12" height="16" rx="6" stroke="#1D1D1B" strokeWidth="1.5" />
         <path d="M16 22V28" stroke="#1D1D1B" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "kwalitywalls",
    name: "Kwality Wall's",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3797e126-3744-4518-b29a-4f6bb8597c87-kwalitywallsindia-com/scroll_2.png", // Placeholder
    description:
      "Kwality Wall's, the brand with a big heart, offers a range of delightful ice creams and frozen desserts that bring smiles to millions of Indians. You might know some of our delicious sub-brands like Feast, Twister and many more!",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 28C16 28 4 20 4 12C4 8 7 5 11 5C13.5 5 15.2 6.5 16 8C16.8 6.5 18.5 5 21 5C25 5 28 8 28 12C28 20 16 28 16 28Z" stroke="#DA1F2C" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function IconicBrandsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % brands.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + brands.length) % brands.length);
  };

  return (
    <section className="bg-[#FDF9F0] py-[120px] overflow-hidden">
      <div className="container mx-auto px-8">
        {/* Intro Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="font-display text-[48px] font-extrabold text-[#1D1D1B] mb-6 leading-[1.2]">
            Our iconic <em>brands</em>
          </h2>
          <p className="font-sans text-[18px] text-[#1D1D1B] leading-[1.6] mb-8">
            Kwality Wall's India Limited has an iconic portfolio of brands. Here are
            some of our biggest and best-known brands: Cornetto, Magnum, and
            Kwality Wall's.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#F8D7DA] hover:opacity-90 transition-all rounded-full px-[28px] py-[12px] text-[14px] font-bold text-[#1D1D1B]"
          >
            See all brands <MoveRight size={16} />
          </a>
        </div>

        {/* Carousel Content */}
        <div className="relative mt-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 transition-opacity duration-500">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center relative">
              <div className="relative w-full max-w-[500px] aspect-square rounded-[24px] overflow-hidden">
                <Image
                  src={brands[currentIndex].image}
                  alt={brands[currentIndex].name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 text-left">
              <div className="mb-6">{brands[currentIndex].icon}</div>
              <h3 className="font-display text-[32px] font-bold text-[#1D1D1B] mb-6">
                {brands[currentIndex].name}
              </h3>
              <p className="font-sans text-[18px] text-[#1D1D1B] leading-[1.6] mb-12 max-w-[540px]">
                {brands[currentIndex].description}
              </p>

              {/* Navigation Controls */}
              <div className="flex items-center gap-8">
                <button
                  onClick={prevSlide}
                  className="p-2 text-[#1D1D1B] hover:opacity-60 transition-opacity"
                  aria-label="Previous brand"
                >
                  <MoveLeft size={24} strokeWidth={1} />
                </button>

                {/* Pagination Dots */}
                <div className="flex gap-2">
                  {brands.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentIndex === index
                          ? "bg-[#DA1F2C] w-3"
                          : "bg-[#737373] opacity-30"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="p-2 text-[#1D1D1B] hover:opacity-60 transition-opacity"
                  aria-label="Next brand"
                >
                  <MoveRight size={24} strokeWidth={1} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}