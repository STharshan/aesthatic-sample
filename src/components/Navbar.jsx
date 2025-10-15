"use client";
import React, { useState, useEffect } from "react";
import { FaSearch, FaQuestionCircle } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for background color change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-md"
          : "bg-transparent backdrop-blur-sm"
      } text-[#f0f0f0] font-inter`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4 relative">
        {/* Left Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          {["Shop", "About", "Articles", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Center Logo */}
        <div className="text-white font-bold text-lg tracking-wide absolute left-1/2 -translate-x-1/2">
          ©BASALT
        </div>

        {/* Right Side: Icons + Menu */}
        <div className="flex items-center gap-5 text-sm ml-auto">
          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
              <span role="img" aria-label="flag">
                🇺🇸
              </span>
            </div>
            <a
              href="#account"
              className="hover:text-white transition-colors duration-300"
            >
              Account
            </a>
            <FaSearch className="cursor-pointer hover:text-white transition-colors duration-300" />
            <FaQuestionCircle className="cursor-pointer hover:text-white transition-colors duration-300" />
          </div>

          {/* Mobile Menu Toggle aligned RIGHT */}
          <button
            className="md:hidden text-white text-2xl ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md py-5 transition-all duration-300">
          <nav className="flex flex-col items-center gap-5 text-sm">
            {["Shop", "About", "Articles", "Contact", "Account"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex items-center gap-5 pt-2">
              <FaSearch className="cursor-pointer hover:text-white transition-colors duration-300" />
              <FaQuestionCircle className="cursor-pointer hover:text-white transition-colors duration-300" />
              <span role="img" aria-label="flag" className="cursor-pointer">
                🇺🇸
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}