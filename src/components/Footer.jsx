"use client";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">
            SunCart
          </h2>
          <p className="text-sm leading-relaxed">
            Your trusted e-commerce store for summer essentials ☀️
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-orange-400 transition text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-orange-400 transition text-lg">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-orange-400 transition text-lg">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/*  Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact
          </h3>
          <p className="text-sm mb-1">📧 support@suncart.com</p>
          <p className="text-sm mb-1">📞 +880 1234-567890</p>
          <p className="text-sm">📍 Dhaka, Bangladesh</p>
        </div>

        {/*  Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <div className="flex flex-col space-y-2 text-sm">
            <a href="#" className="hover:text-orange-400 transition">
              Home
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              Products
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-xs sm:text-sm">
        © 2026 SunCart. All rights reserved.
      </div>
    </footer>
  );
}