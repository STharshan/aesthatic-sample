// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white text-center pt-32 pb-16 px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Nature’s Way to Healthy, Radiant Skin.
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Rooted in nature, our Basalt skincare harnesses the power of natural ingredients to work in harmony with your skin, revealing a radiant glow that’s uniquely yours.
        </p>
        <div className="mt-8">
          <a href="#shop" className="bg-white text-gray-800 py-3 px-8 rounded-full text-xl font-semibold hover:bg-gray-200">
            Shop Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
