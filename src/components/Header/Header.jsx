import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const desktopRef = useRef();

  // Close desktop dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopRef.current && !desktopRef.current.contains(event.target)) {
        setDesktopDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white fixed w-full z-50 top-0 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-gray-900 font-serif text-2xl font-bold">
            Altamash Ali
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center" ref={desktopRef}>
            <div className="relative">
              <button
                className="text-gray-900 font-medium hover:text-yellow-600 transition-colors"
                onClick={() => setDesktopDropdown(!desktopDropdown)}
              >
                Shop
              </button>
              {desktopDropdown && (
                <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-20">
                  <Link
                    to="/shirt"
                    onClick={() => setDesktopDropdown(false)}
                    className="block px-4 py-2 text-gray-900 hover:bg-yellow-50 transition-colors"
                  >
                    Shirts
                  </Link>
                  <Link
                    to="/trouser"
                    onClick={() => setDesktopDropdown(false)}
                    className="block px-4 py-2 text-gray-900 hover:bg-yellow-50 transition-colors"
                  >
                    Trousers
                  </Link>
                  <Link
                    to="/kurta"
                    onClick={() => setDesktopDropdown(false)}
                    className="block px-4 py-2 text-gray-900 hover:bg-yellow-50 transition-colors"
                  >
                    Kurta
                  </Link>
                  <Link
                    to="/cordset"
                    onClick={() => setDesktopDropdown(false)}
                    className="block px-4 py-2 text-gray-900 hover:bg-yellow-50 transition-colors"
                  >
                    Cord Set
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/cartpage"
              className="text-gray-900 hover:text-yellow-600 font-medium transition-colors"
            >
              View Cart
            </Link>
            <Link
              to="/about"
              className="text-gray-900 hover:text-yellow-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-900 hover:text-yellow-600 font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 border-t border-gray-200">
          <div className="relative">
            <button
              className="text-gray-900 w-full text-left px-3 py-2 font-medium hover:text-yellow-600 transition-colors"
              onClick={() => setMobileDropdown(!mobileDropdown)}
            >
              Shop
            </button>
            {mobileDropdown && (
              <div className="ml-4 bg-gray-50 rounded-md overflow-hidden mt-1">
                <Link
                  to="/shirt"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setMobileDropdown(false);
                  }}
                  className="block px-4 py-2 text-gray-900 hover:bg-yellow-50 transition-colors"
                >
                  Shirts
                </Link>
                <Link
                  to="/trouser"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setMobileDropdown(false);
                  }}
                  className="block px-4 py-2 text-gray-900 hover:bg-yellow-50 transition-colors"
                >
                  Trousers
                </Link>
                <Link
                  to="/kurta"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setMobileDropdown(false);
                  }}
                  className="block px-4 py-2 text-gray-900 hover:bg-yellow-50 transition-colors"
                >
                  Kurta
                </Link>
                <Link
                  to="/cordset"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setMobileDropdown(false);
                  }}
                  className="block px-4 py-2 text-gray-900 hover:bg-yellow-50 transition-colors"
                >
                  Cord Set
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/cartpage"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-900 px-3 py-2 font-medium hover:text-yellow-600 rounded-md transition-colors"
          >
            View Cart
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-900 px-3 py-2 font-medium hover:text-yellow-600 rounded-md transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-900 px-3 py-2 font-medium hover:text-yellow-600 rounded-md transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
