"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Search, Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About us", hasDropdown: true },
    { name: "Brands", hasDropdown: false },
    { name: "Careers", hasDropdown: false },
    { name: "Investors", hasDropdown: true },
    { name: "Contact us", hasDropdown: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FDF9F0] border-b border-[#EDE4D3]">
      {/* Skip to Content links - standard accessibility requirement based on HTML structure */}
      <div className="sr-only focus-within:not-sr-only focus-within:absolute focus-within:top-0 focus-within:left-0 focus-within:z-[60] focus-within:bg-[#FDF9F0] focus-within:p-4">
        <a href="#contentWrapperSection" className="text-[#DA1F2C] underline font-bold px-4">Skip to Main Content</a>
      </div>

      <div className="container mx-auto px-4 md:px-8 h-[80px] flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <a href="/" className="block">
            <img
              src="https://assets.unileversolutions.com/v1/141814888.png"
              alt="Kwality Wall's India Limited Logo"
              width={180}
              height={60}
              className="h-[60px] w-auto object-contain"
            />
          </a>
        </div>

        {/* Central Navigation - Desktop */}
        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <button 
                  className="flex items-center text-[#1D1D1B] font-sans font-semibold text-[16px] leading-tight tracking-tight hover:text-[#DA1F2C] transition-colors gap-1 cursor-pointer"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 text-[#DA1F2C] group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </button>
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[#FDF9F0] border border-[#EDE4D3] shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <ul className="flex flex-col">
                      <li><a href="#" className="px-4 py-2 hover:bg-[#F2E9D8] text-[14px] text-[#1D1D1B] block">Our company</a></li>
                      <li><a href="#" className="px-4 py-2 hover:bg-[#F2E9D8] text-[14px] text-[#1D1D1B] block">Our leadership</a></li>
                      <li><a href="#" className="px-4 py-2 hover:bg-[#F2E9D8] text-[14px] text-[#1D1D1B] block">Sustainability</a></li>
                      <li><a href="#" className="px-4 py-2 hover:bg-[#F2E9D8] text-[14px] text-[#1D1D1B] block">History</a></li>
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Search Bar & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex relative items-center">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#EDE4D3] text-[#1D1D1B] text-[14px] font-sans py-2 pl-6 pr-10 rounded-[50px] w-[200px] lg:w-[240px] focus:outline-none focus:ring-1 focus:ring-[#DA1F2C] border-none"
            />
            <button className="absolute right-4 text-[#1D1D1B] hover:text-[#DA1F2C]">
              <Search className="w-4 h-4" />
            </button>
          </div>

          <button 
            className="lg:hidden p-2 text-[#1D1D1B]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[80px] left-0 w-full bg-[#FDF9F0] border-t border-[#EDE4D3] shadow-xl py-6 px-4 animate-in slide-in-from-top duration-300">
          <div className="mb-6">
            <div className="relative flex items-center mb-6">
              <input
                type="text"
                placeholder="Search"
                className="bg-[#EDE4D3] text-[#1D1D1B] text-[14px] font-sans py-3 pl-6 pr-10 rounded-[50px] w-full focus:outline-none border-none"
              />
              <button className="absolute right-4 text-[#1D1D1B]">
                <Search className="w-4 h-4" />
              </button>
            </div>
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name} className="border-b border-[#EDE4D3] pb-2">
                  <button className="flex items-center justify-between w-full text-[#1D1D1B] font-semibold text-[18px]">
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="w-5 h-5 text-[#DA1F2C]" />}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;