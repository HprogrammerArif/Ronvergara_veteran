import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const InjuriesDetails = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate()
  const onSubmit = (data) => {
    console.log(data); 
    localStorage.setItem("injuries_details", JSON.stringify(data));
    navigate("/sickcall_details")
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 mt-10">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl space-y-6 my-10">
        {/* Header Section */}
        <div className="flex flex-col items-center bg-[#0A3161] p-8 rounded-md w-3/6 mx-auto">
          <div className="w-28 h-28 mb-4">
            <img
              src="https://i.ibb.co.com/FLFMyh5F/Group-2147225241.png"
              alt="Mental Health Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl md:text-[24px] font-semibold text-center text-white">
          body health
          </h1>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Did you have any specific injuries during your service? */}
          <label className="block text-sm font-medium text-gray-700">
            Did you have any specific injuries during your service?
            <select
              {...register("hadInjuries", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 uppercase rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.hadInjuries ? 'border-red-500' : ''}`}
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.hadInjuries && <span className="text-red-500 text-sm">{errors.hadInjuries.message}</span>}
          </label>

          {/* Please list the injuries, how they occurred, and where they occurred (what base/location) */}
          <label className="block text-sm font-medium text-gray-700">
            Please list the injuries, how they occurred, and where they occurred (what base/location)
            <textarea
              {...register("injuryDetails", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 uppercase rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm h-32 resize-none ${errors.injuryDetails ? 'border-red-500' : ''}`}
              placeholder="Enter details"
            />
            {errors.injuryDetails && <span className="text-red-500 text-sm">{errors.injuryDetails.message}</span>}
          </label>

        <div className="flex flex-col justify-center gap-5 mx-auto ">
                           <button
                          //  to="/sickcall_details"
                             type="submit"
                             className="btn bg-[#B31942] border-gray-400  py-2 text-white text-center font-semibold rounded-md"
                           >
                             Continue
                           </button>
                           <button
                             type="submit"
                             className="btn  text-[#001F3F] font-semibold border  border-[#001F3F] py-2 rounded-md"  
                           >
                             Back
                           </button>
                         </div>
        </form>
      </div>
    </div>
  );
};

export default InjuriesDetails;