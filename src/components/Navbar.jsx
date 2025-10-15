// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-transparent fixed top-0 left-0 w-full z-10 px-6 py-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">Basalt</div>
        <ul className="hidden md:flex space-x-8 text-white">
          <li>
            <a href="#shop" className="hover:text-gray-400">Shop</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="#articles" className="hover:text-gray-400">Articles</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </li>
        </ul>
        <div className="md:hidden">
          <button className="text-white">Menu</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
