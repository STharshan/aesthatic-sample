import React from "react";

export default function ContactBanner() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center text-center py-24 px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1604176354204-926873782b0d?w=1200&auto=format&fit=crop')",
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Questions?</h2>
        <p className="text-sm md:text-base text-gray-200 mb-6">
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
