// src/components/FeaturesSection.js
import React from 'react';
import { FaLeaf, FaPaw, FaCheckCircle, FaTruck } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <FaLeaf className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Natural Formula</h3>
            <p className="text-gray-600 text-center">
              Crafted with pure, skin-loving ingredients for ultimate care.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <FaPaw className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cruelty-Free</h3>
            <p className="text-gray-600 text-center">
              Our products are never tested on animals, guaranteed ethical.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <FaCheckCircle className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Approved</h3>
            <p className="text-gray-600 text-center">
              Carefully tested to ensure safety and visible results.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <FaTruck className="text-4xl text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p className="text-gray-600 text-center">
              Delivered to your doorstep with no extra costs worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
