import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/D-Go.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        if (window.scrollY > lastScrollY) {
          setScrollDirection("down"); // scrolling down
        } else {
          setScrollDirection("up"); // scrolling up
        }
        setShowFixedNavbar(true);
      } else {
        setShowFixedNavbar(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Reusable links
  const NavLinks = ({ closeMenu }) => (
    <>
      <Link
        to="/"
        onClick={closeMenu}
        className="text-red-800 px-3 py-2 text-[1.075rem] font-semibold hover:text-red-600 transition-colors"
      >
        Home
      </Link>
      <Link
        to="/features"
        onClick={closeMenu}
        className="text-red-800 px-3 py-2 text-[1.075rem] font-semibold hover:text-red-600 transition-colors"
      >
        Features
      </Link>
      <Link
        to="/pricing"
        onClick={closeMenu}
        className="text-red-800 px-3 py-2 text-[1.075rem] font-semibold hover:text-red-600 transition-colors"
      >
        Pricing
      </Link>
      <Link
        to="/about"
        onClick={closeMenu}
        className="text-red-800 px-3 py-2 text-[1.075rem] font-semibold hover:text-red-600 transition-colors"
      >
        About Us
      </Link>
      <Link
        to="/contact"
        onClick={closeMenu}
        className="text-red-800 px-3 py-2 text-[1.075rem] font-semibold hover:text-red-600 transition-colors"
      >
        Contact Us
      </Link>
    </>
  );

  const CtaButton = ({ closeMenu }) => (
    <Link
      to="/pricing#pricingsection"
      onClick={closeMenu}
      className="bg-red-800 hover:bg-red-700 text-white px-5 py-1 rounded-md text-lg font-medium transition-colors"
    >
      Get Started
    </Link>
  );

  return (
    <>
      {/* Original Navbar (Static) */}
      <nav className="bg-white max-w-7xl mx-auto relative">
        <div className="mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[75px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src={logo}
                  alt="Company Logo"
                  className="h-[100px] w-auto object-contain sm:ml-10"
                />
              </Link>
            </div>

            {/* Links (Desktop) */}
            <div className="hidden lg:flex flex-1 justify-center items-center gap-5">
              <NavLinks />
            </div>

            {/* CTA button on desktop */}
            <div className="hidden lg:flex items-center mr-3 sm:mr-10">
              <CtaButton />
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
      </nav>

      {/* Copy Navbar (Fixed after 500px) */}
      {showFixedNavbar && (
        <nav
          className={`fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-500 z-20 ${
            scrollDirection === "up" ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex justify-between items-center h-[75px]">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/">
                  <img
                    src={logo}
                    alt="Company Logo"
                    className="h-[90px] w-auto object-contain sm:ml-10"
                  />
                </Link>
              </div>

              {/* Links (Desktop) */}
              <div className="hidden lg:flex flex-1 justify-center items-center gap-5">
                <NavLinks />
              </div>

              {/* CTA button on desktop */}
              <div className="hidden lg:flex items-center mr-3 sm:mr-10">
                <CtaButton />
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
        </nav>
      )}

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

        <NavLinks closeMenu={() => setMobileMenuOpen(false)} />
        <CtaButton closeMenu={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Navbar;
