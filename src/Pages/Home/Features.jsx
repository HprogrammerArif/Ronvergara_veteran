import React from "react";
import uploadImg from "../../assets/DD_upload.png"; // Replace with the correct path
import narrationImg from "../../assets/narration.png"; // Replace with the correct path
import { Link } from "react-router-dom";

const FeaturesCard = () => {
  return (
    <div className="bg-gray-200 py-10 px-5 md:px-8 pt-32">
      <div className="md:flex items-stretch justify-center md:gap-10">
        
        {/* First Card */}
        <Link to="/dd_214_info" className="bg-[#0A3161] p-10 flex flex-col mb-5 md:mb-0 items-center justify-center w-full md:w-2/6 rounded-lg shadow-lg">
          <img src={uploadImg} alt="DD-214 Upload" className="w-[250px] h-auto cursor-pointer" />
          <h1 className="md:text-4xl text-2xl font-bold text-center mt-5 text-white capitalize">DD-214 Upload & Auto-Population</h1>
        </Link>

        {/* Second Card */}
        <div className="bg-[#0A3161] p-10 flex flex-col items-center justify-center w-full md:w-2/6 rounded-lg shadow-lg">
          <img src={narrationImg} alt="Auto Generated Claim" className="w-[250px] h-auto cursor-pointer" />
          <h1 className="md:text-4xl text-2xl text-center font-bold mt-20 text-white capitalize">auto generated claim narrative</h1>
        </div>

      </div>
    </div>
  );
};

export default FeaturesCard;
