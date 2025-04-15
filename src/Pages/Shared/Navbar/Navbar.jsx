
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../../assets/VALR_logo.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about_us" },
    // { name: "Success Stories", path: "/success" },
    // { name: "Services", path: "/services" },
    { name: "Calculator", path: "/calculator" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#0B2A52] shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <div className="z-10 flex items-center font-bold text-white">
          <img
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="h-[60px] w-16 pl-2 transition-all duration-300 md:h-[70px] md:w-[70px] md:pl-0"
          />
        </div>


        <div className="hidden space-x-14 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-white uppercase tracking-wide transition-all duration-200 hover:text-opacity-90 
                after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-white after:transition-transform after:duration-300 after:content-[''] 
                ${
                  location.pathname === link.path
                    ? "after:scale-x-100 font-semibold"
                    : "after:scale-x-0 opacity-75 hover:opacity-100 hover:after:scale-x-100"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden space-x-3 md:flex">
          <Link
            to="/login"
            className="rounded-md bg-[#B31942] px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:transform hover:scale-105 hover:bg-opacity-90 active:scale-95"
          >
            Sign In
          </Link>
          <Link
            to="/sign_up"
            className="rounded-md bg-white px-6 py-2.5 font-semibold text-[#0A3161] transition-all duration-300 hover:transform hover:scale-105 hover:bg-opacity-90 active:scale-95"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg me-2 p-1 text-2xl text-white transition-colors duration-200 hover:bg-white/10 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 transition-opacity md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 bottom-0 left-0 z-50 w-[280px] bg-[#0B2A52] shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Mobile Logo */}
          <div className="flex h-[80px] items-center mx-auto border-b border-white/10 px-6">
            <img src={logo} alt="logo" width={64} height={48} className="h-12 w-14" />
          </div>

          {/* Mobile Nav Links */}
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-6 py-4 text-white transition-colors duration-200 relative
                    ${
                      location.pathname === link.path
                        ? "bg-white/10 font-semibold after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white"
                        : "hover:bg-white/5"
                    }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="border-t border-white/10 p-6">
            <div className="flex flex-col gap-3">
              <Link
                to="/login"
                className="rounded-md bg-[#B31942] px-6 py-2.5 text-center font-semibold text-white transition-colors hover:bg-opacity-90"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/sign_up"
                className="rounded-md bg-white px-6 py-2.5 text-center font-semibold text-[#0A3161] transition-colors hover:bg-opacity-90"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
