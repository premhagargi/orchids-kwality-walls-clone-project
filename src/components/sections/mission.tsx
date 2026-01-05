import React from 'react';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className="bg-[#FDF9F0] py-[120px] overflow-hidden">
      <div className="container mx-auto px-8 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row items-center gap-[60px]">
          {/* Left Content Column */}
          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
            <h2 className="text-[#1D1D1B] text-[48px] font-display font-extrabold leading-[1.2]">
              Our <span className="italic">mission</span>
            </h2>
            
            <div className="space-y-6 max-w-[540px]">
              <p className="text-[#1D1D1B] text-[18px] font-sans leading-[1.6]">
                At Kwality Wall&apos;s India Limited, we take pleasure seriously — because life tastes better with ice cream.
              </p>
              
              <p className="text-[#1D1D1B] text-[18px] font-sans leading-[1.6]">
                Crafting extraordinary experiences that turn ordinary moments into lasting memories is at the heart of what we do.
              </p>
            </div>

            <a 
              href="/our-company.html" 
              className="mt-4 flex items-center gap-2 bg-[#F8D7DA] hover:bg-[#f1c4c8] transition-colors rounded-full px-[28px] py-[12px] text-[#1D1D1B] text-[14px] font-bold group"
            >
              Our company
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Image Grid Column */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-[24px] overflow-hidden aspect-[1/1] w-full max-w-[580px] ml-auto">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3797e126-3744-4518-b29a-4f6bb8597c87-kwalitywallsindia-com/scroll_1.png"
                alt="Various Cornetto cones on a blue background"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}