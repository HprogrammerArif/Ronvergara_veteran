import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const SickCallDetails = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data); 
    localStorage.setItem("sickCall_details", JSON.stringify(data));
    navigate("/discharge_condition")
   
  };

  return (
    <div className="flex justify-center items-center min-h-[85vh] md:min-h-screen md:bg-gray-100">
      <div className="bg-white md:shadow-md rounded-lg md:p-6 p-2 w-full max-w-4xl space-y-6">
        {/* Header Section */}
       <div className="flex flex-col items-center bg-[#0A3161] p-8 rounded-md md:w-3/6 mx-auto">
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-1 md:px-0">
          {/* Were you ever seen at sick call for these injuries? */}
          <label className="block text-sm font-medium text-gray-700">
            Were you ever seen at sick call for these injuries?
            <select
              {...register("seenAtSickCall", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 uppercase rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.seenAtSickCall ? 'border-red-500' : ''}`}
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.seenAtSickCall && <span className="text-red-500 text-sm">{errors.seenAtSickCall.message}</span>}
          </label>

      
        {/* Buttons */}
        <div className="flex flex-col justify-center gap-4 mx-auto ">
                           <button
                             type="submit"
                             className="btn bg-[#B31942] uppercase border-gray-400  py-2 text-white text-center font-semibold rounded-md"
                           >
                             Continue
                           </button>
                           <button
                             
                             className="btn  text-[#001F3F] uppercase font-semibold border  border-[#001F3F] py-2 rounded-md"  
                             onClick={() => window.history.back()}
                           >
                             Back
                           </button>
                         </div>
        </form>
      </div>
    </div>
  );
};

export default SickCallDetails;