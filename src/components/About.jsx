// src/components/CraftedFromTheGround.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CraftedFromTheGround = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Animate once per scroll
  }, []);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div
          className="lg:w-1/2 text-center lg:text-left lg:pr-12"
          data-aos="fade-right"
        >
          <h2 className="text-3xl font-semibold mb-4">
            Crafted From The Ground
          </h2>
          <p className="text-gray-600 mb-4">
            Basalt rocks are a treasure trove of skin-loving minerals like
            magnesium, calcium, and iron. These natural wonders help regulate
            skin pH, reduce inflammation, and support the skin's natural barrier
            function.
          </p>
          <p className="text-gray-600">
            The result? A radiant, balanced complexion that’s resilient to
            environmental stressors. By harnessing the power of basalt, our
            skincare products nourish and protect your skin, revealing its full
            potential.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="lg:w-1/2 mt-8 lg:mt-0"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            src="/image.png" // Replace with your actual image path
            alt="Basalt texture"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CraftedFromTheGround;
