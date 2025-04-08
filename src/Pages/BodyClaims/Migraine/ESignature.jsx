import React from "react";
import { Link } from "react-router-dom";

const ESignature = () => {
  const handleSubmit = () => {
    console.log("Form submitted with e-signature");
    // Perform any additional submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 max-w-4xl mx-auto">
      {/* Header Text */}
      <h2 className="text-2xl font-bold text-[#001F3F] mb-6 text-center">
        SECURE & LEGALLY BINDING E-SIGNATURES SIGN YOUR VA FORMS WITH EASE
      </h2>

      {/* Signature Display Area */}
      <div className="w-full max-w-md bg-gray-200 rounded-lg p-6 mb-6 flex items-center justify-center">
        <p className="text-gray-500 text-lg italic">John Doe</p>
      </div>

      {/* Submit Button as Link */}
      <Link
        to="/va_form"
        onClick={handleSubmit}
        className="bg-[#B31942] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#a01638] transition-colors"
      >
        submit
      </Link>
    </div>
  );
};

export default ESignature;