import React from "react";
import footer from "../assets/img/Footer.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-700 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* 4 Columns in one line */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8 h-[200px]">
          {/* Image */}
          <div className="flex items-start gap-6">
            <img
              src={footer}
              alt="Company Logo"
              className="max-w-5xl -ml-28 -mt-32"
            />
          </div>

          {/* Column 1 */}
          <div>
            <p className="text-gray-300 -mr-10 mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Column 2 */}
          <div className="ml-20 mt-10">
            <ul className="space-y-2 text-gray-300">
              <li>Pricing</li>
              <li>Faqs</li>
              <li>Terms</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="ml-10 mt-10">
            <ul className="space-y-2 text-gray-300">
              <li>Features</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="ml-10 mt-10">
            <ul className="space-y-2 text-gray-300">
              <li>Take Demo</li>
              <li>Location</li>
              <li>Help Center</li>
            </ul>
          </div>
        </div>

        {/* Copyright Row with 4 DGO Watermarks */}
        <div className="relative py-4 h-[100px]">
          {/* Watermark DGO repeated 4 times with different opacities */}
          <div className="absolute inset-0 grid grid-cols-4 gap-10 pointer-events-none h-full">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center justify-center h-full">
                <p
                  className={`text-[170px] font-light leading-none ${
                    i === 1 || i === 2
                      ? "text-gray-600 opacity-10"
                      : "text-gray-400 opacity-20"
                  }`}
                >
                  DGO
                </p>
              </div>
            ))}
          </div>

          {/* Copyright Text - Centered */}
          <div className="relative z-10 text-center h-full flex items-center justify-center">
            <p className="text-gray-300 mt-32">All rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
