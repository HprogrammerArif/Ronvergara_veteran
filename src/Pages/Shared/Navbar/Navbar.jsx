

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../../assets/VALR_logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGetLoggedUserQuery } from "../../../redux/features/baseApi";
import { FaCog, FaSignOutAlt, FaUser } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { data: loggedInUser } = useGetLoggedUserQuery();
  console.log(loggedInUser);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about_us" },
    { name: "Calculator", path: "/calculator" },
    { name: "Contact", path: "/contact" },
  ];

  // Logout
  const handleLogout = () => {
    setIsLoggingOut(true);
    console.log("Logging out...");
    localStorage.removeItem("acces_token");
    localStorage.removeItem("refresh_token");

    setTimeout(() => {
      setIsLoggingOut(false);
      navigate("/login");
    }, 2000);
  };

  // Function to open logout modal
  const openLogoutModal = () => {
    const modal = document.getElementById("logout_modal");
    if (modal) {
      modal.showModal();
    } else {
      console.error("Modal element not found");
    }
  };

  // Function to open profile modal
  const openProfileModal = () => {
    const modal = document.getElementById("profile_modal");
    if (modal) {
      modal.showModal();
    } else {
      console.error("Profile modal element not found");
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#0B2A52] shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <div className="z-10 flex items-center font-bold text-white">
          <img
            src={logo}
            alt="VALR Logo"
            width={50}
            height={50}
            className="h-[60px] w-16 pl-2 transition-all duration-300 md:h-[70px] md:w-[70px] md:pl-0"
          />
        </div>

        {/* Desktop Nav Links */}
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

        {/* Desktop Buttons or Avatar Dropdown */}
        <div className="hidden md:flex items-center space-x-3 relative">
          {loggedInUser ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="avatar flex items-center"
              >
                {/* Avatar */}
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                  <img
                    src={
                      loggedInUser.avatar ||
                      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    }
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Chevron button */}
                <button
                  type="button"
                  aria-label="Open user menu"
                  className="p-1 rounded-full"
                  onClick={() => console.log("toggle menu")}
                >
                  <ChevronDown size={20} className="text-white" />
                </button>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-1 z-[999] p-3 border border-white/20 shadow bg-[#002b5c] opacity-90 rounded-box w-48 space-y-2"
                role="menu"
                aria-label="User menu"
              >
                <li>
                  <button
                    onClick={openProfileModal} 
                    className="flex text-white items-center gap-3 py-2 px-3 text-base hover:bg-[#104685] rounded-md transition-colors duration-200"
                    role="menuitem"
                  >
                    <FaUser className="w-5 h-5 text-white" />
                    Profile
                  </button>
                </li>
                <li>
                  <button
                    onClick={openLogoutModal}
                    className="flex text-white items-center gap-3 py-2 text-[13.5px] px-3 hover:bg-[#104685] rounded-md transition-colors duration-200 uppercase"
                    role="menuitem"
                  >
                    <FaSignOutAlt className="w-5 h-5 text-red-500" />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
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
            </>
          )}
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
            <img
              src={logo}
              alt="VALR Logo"
              width={64}
              height={48}
              className="h-12 w-14"
            />
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

          {/* Mobile Buttons or Avatar */}
          <div className="border-t border-white/10 p-6">
            {loggedInUser ? (
              <div className="flex flex-col items-center gap-4">
                <img
                  src={
                    loggedInUser.avatar ||
                    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  }
                  alt="User Avatar"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <button
                  onClick={openProfileModal} // Added profile modal trigger
                  className="flex items-center gap-3 rounded-md bg-[#104685] px-6 py-2.5 text-white font-semibold transition-colors duration-200 hover:bg-opacity-90"
                >
                  <FaUser className="w-5 h-5 text-white" />
                  Profile
                </button>
                <button
                  onClick={openLogoutModal}
                  className="flex items-center gap-3 rounded-md bg-[#B31942] px-6 py-2.5 text-white font-semibold transition-colors duration-200 hover:bg-opacity-90"
                >
                  <FaSignOutAlt className="w-5 h-5 text-white" />
                  Logout
                </button>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </div>

      {/* Logout Modal */}
      <dialog id="logout_modal" className="modal backdrop-blur-[1px]">
        <div className="modal-box bg-[#002b5c] text-white">
          <h3 className="font-bold text-lg">Confirm Logout</h3>
          <p className="py-4">Are you sure you want to log out?</p>
          <div className="modal-action">
            <form method="dialog" className="space-x-2">
              <button className="btn btn-outline text-white hover:bg-white/10">
                Cancel
              </button>
              <button
                className="btn btn-error text-white"
                onClick={handleLogout}
                disabled={isLoggingOut}
              >
                {isLoggingOut ? (
                  <span className="loading loading-bars loading-xl text-red-600"></span>
                ) : (
                  "Logout"
                )}
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* Profile Modal */}
      <dialog id="profile_modal" className="modal backdrop-blur-[1px]">
        <div className="modal-box bg-[#002b5c] text-white max-w-md">
          <h3 className="font-bold text-lg mb-4">User Profile</h3>
          {loggedInUser ? (
            <div className="flex flex-col items-center gap-4">
              <img
                src={
                  loggedInUser.avatar ||
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                }
                alt="User Avatar"
                className="h-24 w-24 rounded-full object-cover border-2 border-white/20"
              />
              <div className="text-center">
                <h4 className="text-xl font-semibold">
                  {loggedInUser.name || "User Name"}
                </h4>
                <p className="text-white/80">{loggedInUser.email || "user@example.com"}</p>
              </div>
              <div className="w-full mt-4">
                <p className="text-sm">
                  <span className="font-semibold">Joined:</span>{" "}{" "}{" "}
                  {loggedInUser.joined_date
                    ? new Date(loggedInUser.joined_date).toLocaleDateString()
                    : "N/A"}
                </p>
                {/* Add more user details as needed */}
              </div>
            </div>
          ) : (
            <p className="text-white/80">Loading user data...</p>
          )}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-outline text-white hover:bg-white/10">
                Close
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </nav>
  );
}