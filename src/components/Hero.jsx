import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration (ms)
      once: true, // Animate only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url(/path-to-your-image.jpg)" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-6 md:px-12">
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl mx-auto leading-tight"
        >
          Nature’s Way to Healthy, Radiant Skin.
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
        >
          Rooted in nature, our Basalt skincare harnesses the power of natural
          ingredients to work in harmony with your skin, revealing a radiant
          glow that’s uniquely yours.
        </p>

        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 flex justify-center"
        >
          <button className="border-2 border-white hover:border-gray-300 bg-transparent hover:bg-white hover:text-black transition-all duration-300 px-6 py-3 rounded-xl flex items-center gap-2 font-semibold">
            <span className="text-sm md:text-base">Shop Products</span>
            <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
