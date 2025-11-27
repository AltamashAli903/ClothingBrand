import React from "react";
import logo from '../Image/Altamash.jpg';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white rounded-xl shadow-md mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section with Logo */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Altamash Ali Logo" className="w-32 mb-3" />
          <p className="text-sm text-gray-400">
            Premium clothing with timeless style and elegance.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Shop</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white">Men</a></li>
            <li><a href="#" className="hover:text-white">Women</a></li>
            <li><a href="#" className="hover:text-white">Accessories</a></li>
          </ul>
        </div>

        {/* About Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">About</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Our Story</a></li>
            <li><a href="#" className="hover:text-white">Sustainability</a></li>
            <li><a href="#" className="hover:text-white">Stores</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Altamash Ali. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
