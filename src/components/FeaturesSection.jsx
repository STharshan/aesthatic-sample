// src/components/FeaturesSection.js
import React, { useEffect } from "react";
import { FaLeaf, FaPaw, FaCheckCircle, FaTruck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // once: true prevents repeated animation
  }, []);

  const features = [
    {
      icon: <FaLeaf className="text-4xl mb-4" />,
      title: "Natural Formula",
      desc: "Crafted with pure, skin-loving ingredients for ultimate care.",
      anim: "zoom-in",
    },
    {
      icon: <FaPaw className="text-4xl  mb-4" />,
      title: "Cruelty-Free",
      desc: "Our products are never tested on animals, guaranteed ethical.",
      anim: "zoom-in",
    },
    {
      icon: <FaCheckCircle className="text-4xl  mb-4" />,
      title: "Expert Approved",
      desc: "Carefully tested to ensure safety and visible results.",
      anim: "zoom-in",
    },
    {
      icon: <FaTruck className="text-4xl  mb-4" />,
      title: "Free Shipping",
      desc: "Delivered to your doorstep with no extra costs worldwide.",
      anim: "zoom-in",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-3xl font-semibold mb-12"
          data-aos="fade-up"
        >
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
              data-aos={feature.anim}
              data-aos-delay={index * 150} // staggered animation
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
