

import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"; // Example icons from react-icons (install if needed)
import logo from "../../../assets/VALR_logo.png"
import { IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="bg-[#152A45] text-white py-6 px-4">
      <div className="container mx-auto">
        {/* Top Section: Logo and Description */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img src={logo} alt="logo"  className="md:w-20 md:h-[80px] w-16 h-[60px] mb-5"/>
            <p className=" text-gray-300 max-w-md">
            Ac is a veteran-owned organization dedicated to simplifying the VA process, whether you’ve been denied before or never applied, we’re here to fight for you.
          </p>
       
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0 mt-5">
            <a href="https://facebook.com" className="text-gray-300 hover:text-white">
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" className="text-gray-300 hover:text-white">
              <FaLinkedinIn className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" className="text-gray-300 hover:text-white">
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>

          {/* Disclaimer */}
       
       
          </div>

             {/* Main Content: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Helpful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">HELPFUL LINKS</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-white">About us</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/contact" className="hover:text-white">Contact us</a></li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">OTHER LINKS</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/faq" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT INFORMATION</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2 text-red-500"><IoMailOutline  className="text-lg text-[#B31942]"/>
</span>
                <a href="mailto:Pappyroy6393@gmail.com" className="hover:text-white">valrOrg@gmail.com</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-red-500"><BsTelephone className="text-lg text-[#B31942]" />
</span>
                <a href="tel:01405366393" className="hover:text-white">01405366393</a>
              </li>
            </ul>
          </div>
        </div>
        </div>

        <div className="border-t border-gray-300"></div>

      <p className="text-center mt-6 text-xs w-10/12 mx-auto text-gray-500">
        <span className="text-red-700 font-semibold">Disclainer:</span> Vac2023 is not an accredited agent and/or a pool of attorneys, law firm or law office. It is not an accredited or recognized VA claim agent nor is it an individual or entity that is allowed and accredited by the VA to represent any and all of its Affiliates. Vac2023 does NOT represent veterans before the VA or BVA in connection with any claim for VA disability benefits. Veterans are appraised that there are free resources available to aid them in the applications they have before Department of Veterans Affairs (VA) such as but not limited to the preparation, filing, presentation and processing of the VA disability claim.
Copyright © 2025 VAC . All Rights Reserved
      </p>
        
      </div>
    </footer>
  );
}
