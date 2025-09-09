import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/D-Go.png";

const Navbar = () => {
  return (
    <nav className="bg-white  max-w-7xl mx-auto">
      <div className=" mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[75px]">
          {/* Logo pushed completely to the left */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="Company Logo"
                className="h-[100px] w-auto object-contain sm:ml-10"
              />
            </Link>
          </div>

          {/* Navigation links - centered in remaining space */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-5">
            <Link
              to="/"
              className="text-red-800 px-3 py-2 text-[1.075rem] font-semibold hover:text-red-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-red-800 px-3 py-2 text-[1.075rem] font-semibold hover:text-red-600 transition-colors"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-red-800 px-3 py-2 text-[1.075rem] font-semibold hover:text-red-600 transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-red-800 px-3 py-2 text-[1.075rem] font-semibold hover:text-red-600 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-red-800 px-3 py-2 text-[1.075rem] font-semibold hover:text-red-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* CTA button on right */}
          <div className="flex items-center mr-3 sm:mr-10">
            <Link
              to="/pricing#pricingsection"
              className="bg-red-800 hover:bg-red-700 text-white px-5 py-1 rounded-md text-lg font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
