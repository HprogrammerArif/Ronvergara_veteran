import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import mentalLogo from "../../assets/mental_health_logo.png";

const DisasterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const navigate = useNavigate()
  const onSubmit = (data) => {
    console.log("disaster_form", data);
    localStorage.setItem("disaster_form", JSON.stringify(data))
    navigate("/abuse_assault_form")
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-32">
      <div className=" md:p-6 p-2 rounded-lg  w-full max-w-4xl  flex flex-col justify-between">
        
        {/* Header Section */}
         <div className="bg-[#002B5C] w-full rounded-lg p-6 mb-6 flex flex-col items-center">
                     <div className="w-52 h-52 bg-purple-600 rounded-full flex items-center justify-center mb-3">
                       <img src={mentalLogo} alt="Mental Health Logo" className="w-32 h-32 object-cover" />
                     </div>
                     <h1 className="text-white text-2xl font-medium mt-2">Mental Health</h1>
                   </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex-grow mt-5">
          
          {/* Natural Disaster Experience */}
          <label className="block text-lg font-medium text-gray-700">
            Did You Ever Experience A Natural Disaster While Serving?
            <select
              {...register("experiencedDisaster", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.experiencedDisaster ? "border-red-500" : ""
              }`}
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.experiencedDisaster && (
              <span className="text-red-500 text-sm">{errors.experiencedDisaster.message}</span>
            )}
          </label>

          {/* Date of Incident */}
          <label className="block text-lg font-medium text-gray-700">
            Dates Of Incident
            <input
              type="date"
              {...register("incidentDate", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.incidentDate ? "border-red-500" : ""
              }`}
            />
            {errors.incidentDate && (
              <span className="text-red-500 text-sm">{errors.incidentDate.message}</span>
            )}
          </label>

          {/* Type Of Incident */}
          <label className="block text-lg font-medium text-gray-700">
            Type Of Incident
            <select
              {...register("incidentType", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.incidentType ? "border-red-500" : ""
              }`}
            >
              <option value="">Select an option</option>
              <option value="flood">Flood</option>
              <option value="combatZone">Combat Zone</option>
              <option value="earthquake">Earthquake</option>
              <option value="volcanicEruption">Volcanic Eruption</option>
              <option value="hurricane">Hurricane</option>
              <option value="wildfire">Wildfire</option>
            </select>
            {errors.incidentType && (
              <span className="text-red-500 text-sm">{errors.incidentType.message}</span>
            )}
          </label>

          {/* Names of People Involved */}
          <label className="block text-lg font-medium text-gray-700">
            Names Of Anyone Involved In Incident
            <input
              type="text"
              {...register("peopleInvolved")}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter names..."
            />
          </label>

          {/* Additional Details */}
          <label className="block text-lg font-medium text-gray-700">
            Please Provide As Much Detail As Possible As It Will Help To Strengthen Your Claim.
            <textarea
              {...register("incidentDetails", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none ${
                errors.incidentDetails ? "border-red-500" : ""
              }`}
              placeholder="Enter details here..."
            />
            {errors.incidentDetails && (
              <span className="text-red-500 text-sm">{errors.incidentDetails.message}</span>
            )}
          </label>

          {/* Buttons */}
          <div className="flex justify-center gap-10 mt-6 md:pt-10 pt-5 pb-10">
           <button>
             <button
            
              type="submit"
              className="bg-[#B31942] text-white py-2 px-6 md:px-20 md:w-[200px] w-[150px] rounded-md hover:bg-[#aa2b4d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 font-semibold"
            >
              Continue
            </button>
           </button>

           <button>
             <Link
              to="#"
              onClick={() => window.history.back()}
              className="bg-white text-blue-800 py-2 px-6 md:px-20 md:w-[200px] w-[150px] border border-blue-800 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold"
            >
              Back
            </Link>
           </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DisasterForm;
