import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/D-Go.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <nav
      className={`${
        lastScrollY > 500 && "fixed w-full  transition-all  z-20"
      } bg-white  mx-auto transition-all static top-0 `}
    >
      <div className={`mx-auto sm:px-6 lg:px-8  max-w-7xl  `}>
        <div className="flex justify-between items-center h-[75px]">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="Company Logo"
                className="h-[100px] w-auto object-contain sm:ml-10"
              />
            </Link>
          </div>

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

          {/* CTA button on desktop */}
          <div className="hidden lg:flex items-center mr-3 sm:mr-10">
            <Link
              to="/pricing#pricingsection"
              className="bg-red-800 hover:bg-red-700 text-white px-5 py-1 rounded-md text-lg font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center mr-5">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-red-800 text-2xl focus:outline-none"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 text-xl font-semibold transform transition-transform duration-500 ease-in-out z-50 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button inside menu */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-red-800 text-3xl focus:outline-none"
        >
          <FaTimes />
        </button>

        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="text-red-800 hover:text-red-600"
        >
          Home
        </Link>
        <Link
          to="/features"
          onClick={() => setMobileMenuOpen(false)}
          className="text-red-800 hover:text-red-600"
        >
          Features
        </Link>
        <Link
          to="/pricing"
          onClick={() => setMobileMenuOpen(false)}
          className="text-red-800 hover:text-red-600"
        >
          Pricing
        </Link>
        <Link
          to="/about"
          onClick={() => setMobileMenuOpen(false)}
          className="text-red-800 hover:text-red-600"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          onClick={() => setMobileMenuOpen(false)}
          className="text-red-800 hover:text-red-600"
        >
          Contact Us
        </Link>
        <Link
          to="/pricing#pricingsection"
          onClick={() => setMobileMenuOpen(false)}
          className="bg-red-800 hover:bg-red-700 text-white px-6 py-3 rounded-md text-lg"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
