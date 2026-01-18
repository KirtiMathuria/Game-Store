import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-950 text-gray-300 border-t border-gray-700 shadow-inner">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent tracking-wide cursor-pointer hover:scale-105 transition-transform duration-300">
          GameLoot
            </h2>
            <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">
              Explore, manage, and organize content with ease.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h3 className="font-semibold text-white mb-2 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-sm">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-white hover:underline transition duration-300 ${isActive ? "text-yellow-400" : ""}`
                }
              >
                About us
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-white hover:underline transition duration-300 ${isActive ? "text-yellow-400" : ""}`
                }
              >
                Contact
              </NavLink>

              <NavLink
                to="/privacy"
                className={({ isActive }) =>
                  `hover:text-white hover:underline transition duration-300 ${isActive ? "text-yellow-400" : ""}`
                }
              >
                Privacy
              </NavLink>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h3 className="font-semibold text-white mb-2 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Connect with us
            </h3>
            <div className="flex gap-4 text-xl">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition transform hover:scale-125"
              >
                <FaFacebookF />
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/?lang=en-in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition transform hover:scale-125"
              >
                <FaTwitter />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition transform hover:scale-125"
              >
                <FaInstagram />
              </a>

              {/* LinkedIn */}
              <a
                href="https://in.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-100 transition transform hover:scale-125"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-right">
              support@GameLoot.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} GameLoot. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
