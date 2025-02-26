import React from 'react';
import mentalLogo from "../../assets/mental_health_logo.png";
import { Link } from 'react-router-dom';

const MentailHealthDetails = () => {
  return (
    <div className="flex justify-center items-center min-h-screen pt-32 bg-gray-100">
      <div className=" md:p-6 p-2 rounded-lg  w-full max-w-4xl  flex flex-col justify-between">
        {/* Header Section (Centered Image and Text) */}
        <div className="bg-[#002B5C] w-full rounded-lg p-6  mb-6 flex flex-col items-center">
                      <div className="w-52 h-52 bg-purple-600 rounded-full flex items-center justify-center mb-3">
                 <img src={mentalLogo} alt="" className="w-32 h-32 object-cover" />
               </div>
               
               
                         <h1 className="text-white text-2xl font-medium mt-2">Mental Health</h1>
                       </div>

        {/* Form Section */}
        <form className="space-y-4 flex-grow">
          <label className="block text-lg font-medium text-gray-700">
            Were You Deployed?
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[15px]">
              <option value="yes" selected>Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          <label className="block text-lg font-medium text-gray-700">
            Deployed Area Name
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[15px]"
              placeholder="Enter area name"
            />
          </label>

          <label className="block text-lg font-medium text-gray-700">
            Duration Of Deployment
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[15px]"
              placeholder="Enter duration"
            />
          </label>

          <label className="block text-lg font-medium text-gray-700">
            Type Of Deployment
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[15px]">
              <option value="combat" selected>Combat Zone</option>
              <option value="peacekeeping">Peacekeeping Mission</option>
              <option value="humanitarian">Humanitarian Aid</option>
              <option value="training">Training/Advisory Role</option>
            </select>
          </label>

      
        </form>

        {/* Buttons Section (At the Bottom) */}
               <div className="flex justify-center gap-10 md:mt-6 mt-14 pb-10 md:pb-0">
                                       <button>
                                        <Link
                                        
                                         type="submit"
                                         className="bg-[#B31942] text-white py-2 px-6 md:px-20 md:w-[200px] w-[150px] rounded-md hover:bg-[#aa2b4d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 font-semibold"
                                       >
                                         Continue
                                       </Link>
                                       </button>
                                   <div>
                                        <Link
                                         type="button"
                                         className="bg-white text-blue-800 py-2 px-6 md:px-20 md:w-[200px] w-[150px] border border-blue-800 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold"
                                         onClick={() => window.history.back()}
                                       >
                                         Back
                                       </Link>
                                   </div>
                                     </div>
      </div>
    </div>
  );
};

export default MentailHealthDetails;