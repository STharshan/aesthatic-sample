import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-md text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">Basalt</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-semibold">
          <li>
            <a href="#shop" className="hover:text-gray-500 transition-colors">
              Shop
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-500 transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#articles"
              className="hover:text-gray-500 transition-colors"
            >
              Articles
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-500 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full shadow-md transform transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100 bg-white text-black"
            : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6 font-semibold">
          <li>
            <a
              href="#shop"
              className="hover:text-gray-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-gray-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#articles"
              className="hover:text-gray-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Articles
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
