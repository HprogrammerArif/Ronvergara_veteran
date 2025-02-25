import React from 'react';
import { Link } from 'react-router-dom';

function GreatConfirmation() {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-4 mt-14">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-[#B31942] mb-6">GREAT!</h1>
        <p className="text-blue-800 md:text-lg text-md mb-8">
        Now we need some additional information on these conditions. In the next step, please provide as much detail as you can recall for each condition. This will help make your claim stronger and add verifiable evidence
        </p>
    <button>
            <Link
        to="/"

          className="bg-[#0A3161] text-white py-3 px-20 rounded-md hover:bg-[#104381] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold"
        >
          Save & Proceed
        </Link>
    </button>
      </div>
    </div>
  );
}

export default GreatConfirmation;