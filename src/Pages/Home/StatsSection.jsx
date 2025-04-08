import React from "react";
import { FaUser, FaStar, FaGraduationCap, FaRibbon } from "react-icons/fa"; // Import icons from react-icons

const StatsSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6 min-h-[50vh] bg-gray-200">
      {/* Card 1: 100% Success Rate */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center w-full max-w-xs">
        {/* Icon: Person with Star */}
        <div className="relative text-[#001F3F] text-4xl mb-4">
          <FaUser className="w-12 h-12" />
          <FaStar className="w-6 h-6 absolute top-0 right-0 -translate-y-2 translate-x-2" />
        </div>
        <h3 className="text-3xl font-bold text-[#B31942] mb-2">100%</h3>
        <p className="text-gray-700 text-center">SUCCESS RATE</p>
      </div>

      {/* Card 2: 60 Veteran Owned */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center w-full max-w-xs">
        {/* Icon: Graduation Cap */}
        <div className="text-[#001F3F] text-4xl mb-4">
          <FaGraduationCap className="w-12 h-12" />
        </div>
        <h3 className="text-3xl font-bold text-[#B31942] mb-2">60</h3>
        <p className="text-gray-700 text-center">VETERAN OWNED</p>
      </div>

      {/* Card 3: 1,000+ Successful Cases */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center w-full max-w-xs">
        {/* Icon: Ribbon */}
        <div className="text-[#001F3F] text-4xl mb-4">
          <FaRibbon className="w-12 h-12" />
        </div>
        <h3 className="text-3xl font-bold text-[#B31942] mb-2">1,000+</h3>
        <p className="text-gray-700 text-center">SUCCESSFUL CASES</p>
      </div>
    </div>
  );
};

export default StatsSection;