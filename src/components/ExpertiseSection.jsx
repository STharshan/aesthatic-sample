'use client'; // if using Next.js

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ExpertiseSection() {
  const services = [
    {
      title: "Manicure",
      description:
        "Give your hands the care they deserve! Our manicures are designed to improve the health and appearance of your nails.",
      image: "a1.png",
    },
    {
      title: "Massage",
      description:
        "Our team of professional masseuses will give you a customized massage that will be tailored to your specific needs.",
      image: "a2.png",
    },
    {
      title: "Hairstyles",
      description:
        "Our team of stylists will help you find the perfect hairstyle for your face and style.",
      image: "a3.png",
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
      offset: 100,    // offset (in px) from the original trigger point
    });
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-10 tracking-wide">
          OUR AREAS OF EXPERTISE
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up" // AOS animation
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-35 object-cover"
              />
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl text-left font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-left mb-4 flex-grow">
                  {service.description}
                </p>
                <button className="mt-6 text-sm text-left font-medium text-gray-700 hover:text-gray-900">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
