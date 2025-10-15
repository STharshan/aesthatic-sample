'use client';

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactBanner() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="relative flex items-center justify-center text-center py-24 px-6 h-[400px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/c1.avif"
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-10"></div>

      {/* Content */}
      <div
        className="relative z-20 text-white max-w-xl mx-auto"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Questions?
        </h2>
        <p className="text-sm md:text-base max-w-lg mx-auto text-gray-200 mb-6">
          Got questions? Our team is here to help. Reach out anytime for
          personalized support.
        </p>

        <a
          href="#contact"
          className="inline-block bg-white text-gray-900 font-medium px-6 py-2 rounded-md hover:bg-gray-200 transition-all duration-300"
        >
          CONTACT →
        </a>
      </div>
    </section>
  );
}
