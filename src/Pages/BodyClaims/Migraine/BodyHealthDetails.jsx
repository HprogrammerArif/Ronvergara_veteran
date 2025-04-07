import React from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const BodyHealthDetails = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission (e.g., API call, state update, etc.)
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 mt-20">
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
          {/* Do you have decreased range of motion? */}
          <label className="block text-sm font-medium text-gray-700">
          Do you have decreased range of motion?            <select
              {...register("decreasedRangeOfMotion", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.decreasedRangeOfMotion ? 'border-red-500' : ''}`}
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.decreasedRangeOfMotion && <span className="text-red-500 text-sm">{errors.decreasedRangeOfMotion.message}</span>}
          </label>

          {/* Do you have instability? */}
          <label className="block text-sm font-medium text-gray-700">
          Do you have instability?            <select
              {...register("instability", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.instability ? 'border-red-500' : ''}`}
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.instability && <span className="text-red-500 text-sm">{errors.instability.message}</span>}
          </label>

          {/* Do you have chronic pain? */}
          <label className="block text-sm font-medium text-gray-700">
          Do you have chronic pain?            <select
              {...register("chronicPain", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.chronicPain ? 'border-red-500' : ''}`}
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.chronicPain && <span className="text-red-500 text-sm">{errors.chronicPain.message}</span>}
          </label>

          {/* Do you have difficulty completing daily tasks? */}
          <label className="block text-sm font-medium text-gray-700">
          Do you have difficulty completing daily tasks?            <select
              {...register("difficultyDailyTasks", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.difficultyDailyTasks ? 'border-red-500' : ''}`}
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.difficultyDailyTasks && <span className="text-red-500 text-sm">{errors.difficultyDailyTasks.message}</span>}
          </label>

          {/* Do you feel limited in physical activities? */}
          <label className="block text-sm font-medium text-gray-700">
          Do you feel limited in physical activities?            <select
              {...register("limitedPhysicalActivities", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.limitedPhysicalActivities ? 'border-red-500' : ''}`}
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.limitedPhysicalActivities && <span className="text-red-500 text-sm">{errors.limitedPhysicalActivities.message}</span>}
          </label>

          {/* Do you have difficulty walking or standing for prolonged periods of time due to your injury? */}
          <label className="block text-sm font-medium text-gray-700">
          Do you have trouble walking or standing for prolonged periods of time due to your pain?
            <select
              {...register("difficultyWalkingStanding", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.difficultyWalkingStanding ? 'border-red-500' : ''}`}
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.difficultyWalkingStanding && <span className="text-red-500 text-sm">{errors.difficultyWalkingStanding.message}</span>}
          </label>

          {/* Have you had to give up hobbies you were unable to give up your pain? */}
          <label className="block text-sm font-medium text-gray-700">
          Have you had to give up hobbies you used to enjoy due to your pain?
            <select
              {...register("giveUpHobbies", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.giveUpHobbies ? 'border-red-500' : ''}`}
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.giveUpHobbies && <span className="text-red-500 text-sm">{errors.giveUpHobbies.message}</span>}
          </label>

          {/* If yes, please list the hobbies */}
          <label className="block text-sm font-medium text-gray-700">
          Do your joints constantly pop or ever give out?
            <textarea
              {...register("hobbiesList")}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm h-32 resize-none ${errors.hobbiesList ? 'border-red-500' : ''}`}
              placeholder="Enter hobbies"
            />
            {errors.hobbiesList && <span className="text-red-500 text-sm">{errors.hobbiesList.message}</span>}
          </label>

          {/* Do your joints constantly pop/crack or give out? */}
          <label className="block text-sm font-medium text-gray-700">
          Are there days you are stuck in bed or have flare ups where you cannot move?            <select
              {...register("jointsPopCrack", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.jointsPopCrack ? 'border-red-500' : ''}`}
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.jointsPopCrack && <span className="text-red-500 text-sm">{errors.jointsPopCrack.message}</span>}
          </label>

          <label className="block text-sm font-medium text-gray-700">
          Do you ever have numbness or tingling?
            <select
              {...register("tingling", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.tingling ? 'border-red-500' : ''}`}
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.tingling && <span className="text-red-500 text-sm">{errors.tingling.message}</span>}
          </label>

          {/* Are there days you are stuck in bed or have flare ups where you cannot move? */}
          <label className="block text-sm font-medium text-gray-700">
          Do you have decreased sensation?
            <select
              {...register("sensation", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.sensation ? 'border-red-500' : ''}`}
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.sensation && <span className="text-red-500 text-sm">{errors.sensation.message}</span>}
          </label>

          {/* If yes, how often do you experience 'stuck in bed' days? */}
          <label className="block text-sm font-medium text-gray-700">
          Do you feel like your quality of life has greatly decreased?
            <select
              {...register("greatly_decreased")}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.greatly_decreased ? 'border-red-500' : ''}`}
            >
              
              <option value="daily">Yes</option>
              <option value="weekly">No</option>
             
            </select>
            {errors.greatly_decreased && <span className="text-red-500 text-sm">{errors.greatly_decreased.message}</span>}
          </label>

        

        <div className="flex flex-col justify-center gap-5 mx-auto ">
                           <Link
                           to="/sickcall_details"
                             type="button"
                             className="btn bg-[#B31942] border-gray-400  py-2 text-white text-center font-semibold rounded-md"
                           >
                             Continue
                           </Link>
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

export default BodyHealthDetails;



