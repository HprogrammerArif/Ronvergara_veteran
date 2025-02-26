import React from 'react';
import mentalLogo from "../../assets/mental_health_logo.png";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const RiskDetails = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission (e.g., API call, state update, etc.)
    // You can add your submission logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-24 pb-10 mt-10">
      <div className=" md:p-6 p-2 rounded-lg w-full max-w-4xl  flex flex-col justify-between">
        {/* Header Section (Centered Image and Text) */}
         <div className="bg-[#002B5C] w-full rounded-lg p-6 mb-6 flex flex-col items-center">
                                    <div className="w-52 h-52 bg-purple-600 rounded-full flex items-center justify-center mb-3">
                                      <img src={mentalLogo} alt="Mental Health Logo" className="w-32 h-32 object-cover" />
                                    </div>
                                    <h1 className="text-white text-2xl font-medium mt-2">Mental Health</h1>
                                  </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex-grow md:pt-10">
          {/* Were Others Lives At Risk On A Day To Day Basis Due To The Nature Of Your Job? */}
          <label className="block text-lg font-medium text-gray-700">
            Were Others Lives At Risk On A Day To Day Basis Due To The Nature Of Your Job?
            <select
              {...register("livesAtRisk", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.livesAtRisk ? 'border-red-500' : ''}`}
            >
              <option value="yes" selected>Yes</option>
              <option value="no">No</option>
            </select>
            {errors.livesAtRisk && <span className="text-red-500 text-sm">{errors.livesAtRisk.message}</span>}
          </label>

      

          {/* Dates Of Job Assignment */}
          <label className="block text-lg font-medium text-gray-700">
            Dates Of Job Assignment
            <input
              {...register("jobAssignmentDates", { required: "This field is required" })}
              type="text"
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.jobAssignmentDates ? 'border-red-500' : ''}`}
              placeholder="MM/DD/YYYY"
            />
            {errors.jobAssignmentDates && <span className="text-red-500 text-sm">{errors.jobAssignmentDates.message}</span>}
          </label>

          {/* Type Of Risk */}
          <label className="block text-lg font-medium text-gray-700">
            Type Of Risk
            <select
              {...register("riskType", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.riskType ? 'border-red-500' : ''}`}
            >
              <option value="weapon">Weapon-Related Risk</option>
              <option value="mechanical">Mechanical Failure [E.G., Vehicle, Machinery]</option>
              <option value="environmental">Environmental Hazard [E.G., Working In Extreme Conditions]</option>
              <option value="other">Other</option>
            </select>
            {errors.riskType && <span className="text-red-500 text-sm">{errors.riskType.message}</span>}
          </label>

     

          {/* Please Provide Any Particular Stressful Scenarios That Stood Out Or Occurred Related To Your Job */}
          <label className="block text-lg font-medium text-gray-700 pb-10">
            Please Provide Any Particular Stressful Scenarios That Stood Out Or Occurred Related To Your Job.
            <textarea
              {...register("stressfulScenarios", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm h-32 resize-none ${errors.stressfulScenarios ? 'border-red-500' : ''}`}
              placeholder="Enter details here..."
            />
            {errors.stressfulScenarios && <span className="text-red-500 text-sm">{errors.stressfulScenarios.message}</span>}
          </label>

                   <div className="flex justify-center gap-10 md:mt-6 mt-20 md:pb-10 ">
                                            <button>
                                             <Link
                                             to="/medical_position_details"
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
        </form>


      </div>
    </div>
  );
};

export default RiskDetails;