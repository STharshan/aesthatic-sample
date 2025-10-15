// src/components/HeroSection.js
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-white text-center   pt-32 pb-16 px-6 md:px-12">
                <h1 className="text-5xl md:text-7xl max-w-3xl mt-18 mx-auto font-bold leading-tight">
                    Nature’s Way to Healthy, Radiant Skin.
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                    Rooted in nature, our Basalt skincare harnesses the power of natural ingredients to work in harmony with your skin, revealing a radiant glow that’s uniquely yours.
                </p>
                <div className="mt-8">
                    <button className="border-2 border-primary bg-primary-hover mx-auto rounded-xl justify-center text-white hover:text-black px-6 py-3  flex items-center gap-2 group hover:bg-primary transition font-semibold">
                        <span className="transition-transform duration-300 text-sm lg:text-base group-hover:-translate-x-1 group-active:-translate-x-1">
                            Shop Products
                        </span>
                        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1 mt-1" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
