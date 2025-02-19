

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../../assets/VALR_logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Success Stories", path: "/success" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#0B2A52] fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto py-3  flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-lg font-bold flex items-center z-10">
          <img src={logo} alt="logo" className="md:w-20 md:h-[80px] w-16 h-[60px] transition-all duration-300" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-14">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-white uppercase tracking-wide transition-all duration-200 hover:text-opacity-90 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 ${
                location.pathname === link.path
                  ? "after:scale-x-100 font-semibold"
                  : "opacity-75 hover:opacity-100 hover:after:scale-x-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-3">
          <button className="bg-[#B31942] font-semibold text-white px-6 py-2.5 rounded-md transition-all duration-300 hover:bg-opacity-90 hover:transform hover:scale-105 active:scale-95">
            Sign In
          </button>
          <button className="bg-white text-[#0A3161] font-semibold px-6 py-2.5 rounded-md transition-all duration-300 hover:bg-opacity-90 hover:transform hover:scale-105 active:scale-95">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl z-10 p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#0B2A52] shadow-lg transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-white text-center p-3 rounded-md transition-all duration-200 ${
                  location.pathname === link.path
                    ? "bg-white/10 font-semibold"
                    : "hover:bg-white/5"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Buttons for mobile */}
          <div className="flex flex-col space-y-3 mt-4 pt-4 border-t border-white/10">
            <button className="bg-[#B31942] text-white font-semibold w-full px-4 py-3 rounded-md transition-all duration-200 hover:bg-opacity-90 active:scale-95">
              Sign In
            </button>
            <button className="bg-white text-[#0A3161] font-semibold w-full px-4 py-3 rounded-md transition-all duration-200 hover:bg-opacity-90 active:scale-95">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;