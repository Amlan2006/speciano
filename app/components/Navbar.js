'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white transform hover:scale-105 transition-transform duration-200">
              Speciano
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50 transform hover:scale-105 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#shop"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50 transform hover:scale-105 relative group"
              >
                Shop
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50 transform hover:scale-105 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`}></span>
                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/90 backdrop-blur-md rounded-b-lg">
            <a
              href="#about"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-gray-700/50 transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#shop"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-gray-700/50 transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-gray-700/50 transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 