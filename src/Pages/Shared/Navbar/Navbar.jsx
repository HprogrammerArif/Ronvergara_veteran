// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";
// import logo from "../../../assets/VALR_logo.png"

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Success Stories", path: "/success" },
//     { name: "Services", path: "/services" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="bg-[#0B2A52] fixed w-full top-0 z-50 shadow-lg">
//       <div className="container mx-auto py-3  flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-lg font-bold flex items-center z-10">
//           <img src={logo} alt="logo" className="md:w-20 md:h-[80px] pl-2 md:pl-0 w-16 h-[60px] transition-all duration-300" />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-14">
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`text-white uppercase tracking-wide transition-all duration-200 hover:text-opacity-90 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 ${
//                 location.pathname === link.path
//                   ? "after:scale-x-100 font-semibold"
//                   : "opacity-75 hover:opacity-100 hover:after:scale-x-100"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* Buttons */}
//         <div className="hidden md:flex space-x-3">
//           <Link to="/login" className="bg-[#B31942] font-semibold text-white px-6 py-2.5 rounded-md transition-all duration-300 hover:bg-opacity-90 hover:transform hover:scale-105 active:scale-95">
//             Sign In
//           </Link>
//           <Link to="/sign_up" className="bg-white text-[#0A3161] font-semibold px-6 py-2.5 rounded-md transition-all duration-300 hover:bg-opacity-90 hover:transform hover:scale-105 active:scale-95">
//             Sign Up
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white text-2xl z-10 p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden absolute top-full left-0 right-0 bg-[#0B2A52] shadow-lg transition-all duration-300 ease-in-out ${
//           menuOpen
//             ? "opacity-100 translate-y-0"
//             : "opacity-0 -translate-y-4 pointer-events-none"
//         }`}
//       >
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex flex-col space-y-3">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`text-white text-center p-3 rounded-md transition-all duration-200 ${
//                   location.pathname === link.path
//                     ? "bg-white/10 font-semibold"
//                     : "hover:bg-white/5"
//                 }`}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           <div className="flex items-center justify-center gap-5 mt-5">

//               <Link to="/login" className="bg-[#B31942] px-10 py-2 font-semibold text-white rounded-md">
//                   Sign In
//               </Link>
//               <Link to="/sign_up" className="bg-white text-[#0A3161] px-10 py-2 font-semibold  rounded-md">
//                   Sign Up
//               </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";
// import logo from "../../../assets/VALR_logo.png";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Success Stories", path: "/success" },
//     { name: "Services", path: "/services" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="bg-[#0B2A52] fixed w-full top-0 z-50 shadow-lg">
//       <div className="container mx-auto py-3 flex justify-between items-center relative">
//         {/* Logo */}
//         <div className="text-white text-lg font-bold flex items-center z-20">
//           <img
//             src={logo}
//             alt="logo"
//             className="md:w-20 md:h-[80px] pl-2 md:pl-0 w-16 h-[60px] transition-all duration-300"
//           />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-14">
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`text-white uppercase tracking-wide transition-all duration-200 hover:text-opacity-90 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 ${
//                 location.pathname === link.path
//                   ? "after:scale-x-100 font-semibold"
//                   : "opacity-75 hover:opacity-100 hover:after:scale-x-100"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* Buttons */}
//         <div className="hidden md:flex space-x-3">
//           <Link
//             to="/login"
//             className="bg-[#B31942] font-semibold text-white px-6 py-2.5 rounded-md transition-all duration-300 hover:bg-opacity-90 hover:scale-105 active:scale-95"
//           >
//             Sign In
//           </Link>
//           <Link
//             to="/sign_up"
//             className="bg-white text-[#0A3161] font-semibold px-6 py-2.5 rounded-md transition-all duration-300 hover:bg-opacity-90 hover:scale-105 active:scale-95"
//           >
//             Sign Up
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white text-2xl z-50 p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
//           onClick={() => setMenuOpen(false)}
//         ></div>
//       )}

//       {/* Mobile Menu (Slide-in from Left) */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-[#0B2A52] shadow-lg z-50 transform transition-transform duration-300 ${
//           menuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Close Button Inside Menu */}
//         <div className="p-4 flex justify-between items-center">
//           <img src={logo} alt="logo" className="w-16 h-auto" />
//           <button onClick={() => setMenuOpen(false)} className="text-white text-2xl">
//             <FiX />
//           </button>
//         </div>

//         <div className="flex flex-col space-y-3 p-4">
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`text-white text-lg p-3 rounded-md transition-all duration-200 ${
//                 location.pathname === link.path
//                   ? "bg-white/10 font-semibold"
//                   : "hover:bg-white/5"
//               }`}
//               onClick={() => setMenuOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         <div className="flex flex-col items-center gap-3 mt-5 px-4">
//           <Link
//             to="/login"
//             className="bg-[#B31942] w-full text-center py-2 font-semibold text-white rounded-md"
//             onClick={() => setMenuOpen(false)}
//           >
//             Sign In
//           </Link>
//           <Link
//             to="/sign_up"
//             className="bg-white w-full text-center py-2 font-semibold text-[#0A3161] rounded-md"
//             onClick={() => setMenuOpen(false)}
//           >
//             Sign Up
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import logo from "../../../assets/VALR_logo.png"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Success Stories", path: "/success" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#0B2A52] shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <div className="z-10 flex items-center font-bold text-white">
          <img
            src={logo}
            alt="logo"
            width={80}
            height={80}
            className="h-[60px] w-16 pl-2 transition-all duration-300 md:h-[80px] md:w-20 md:pl-0"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden space-x-14 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-white uppercase tracking-wide transition-all duration-200 hover:text-opacity-90 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:content-[''] ${
                location === link.path
                  ? "after:scale-x-100 font-semibold"
                  : "opacity-75 hover:opacity-100 hover:after:scale-x-100"
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
                  href={link.path}
                  className={`px-6 py-4 text-white transition-colors duration-200 ${
                    location === link.path ? "bg-white/10 font-semibold" : "hover:bg-white/5"
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
  )
}

