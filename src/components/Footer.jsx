"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10 px-8 font-inter">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
        {/* Left Section */}
        <div className="font-bold text-lg tracking-wide">©BASALT</div>

        {/* Center Dot */}
        <div className="w-3 h-3 rounded-full border border-gray-400 md:mt-1"></div>

        {/* Right Section */}
        <div className="flex gap-16 text-sm tracking-wide text-gray-800">
          {/* Navigate */}
          <div>
            <p className="uppercase text-[12px] text-gray-500 mb-3">(Navigate)</p>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-black">Home</a></li>
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Shop</a></li>
              <li><a href="#" className="hover:text-black">Articles</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="uppercase text-[12px] text-gray-500 mb-3">(Support)</p>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-black">Contact</a></li>
              <li><a href="#" className="hover:text-black">FAQ</a></li>
              <li><a href="#" className="hover:text-black">Privacy</a></li>
              <li><a href="#" className="hover:text-black">404</a></li>
            </ul>
          </div>
        </div>

      {/* Bottom Bar - Copyright */}
      </div>
         {/* Bottom Bar - Powered By */}
      <div className="text-center font-semibold text-xs sm:text-sm mt-2 md:text-base">
        <p>
          Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline transition-all duration-300"
          >
            Ansely
          </a>
        </p>
      </div>
    </footer>
  );
}