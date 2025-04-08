import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const TinnitusHearingLossForm = () => {
  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      exposureWhileServing: "",
      hearingProtection: "",
      symptomsStartDate: "",
      symptomsFrequency: "",
      complainedWhileInService: "",
      details: "",
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Tinnitus and Hearing Loss Form Data:", data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 max-w-4xl mx-auto py-20 pt-40">
      {/* Header */}
      <div className="flex flex-col items-center bg-[#0A3161] p-8 rounded-md w-3/6 mx-auto mb-10">
          <div className="w-28 h-28 mb-4">
            <img
              src="https://i.ibb.co.com/wNVRsJvd/Group-1597882599.png"
              alt="Mental Health Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl md:text-[24px] font-semibold text-center text-white">
          Gastrointestinal Issues <br /> (GERD/IBS) Claim <br />Information          </h1>
        </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {/* Exposure While Serving */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            WERE YOU EXPOSED TO ANY OF THE FOLLOWING WHILE SERVING?
          </label>
          <select
            {...register("exposureWhileServing", {
              required: "This field is required",
            })}
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
              errors.exposureWhileServing ? "border-red-500" : ""
            }`}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="AIRCRAFTS">AIRCRAFTS</option>
            <option value="EXPLOSIONS">EXPLOSIONS</option>
            <option value="HEAVY_MACHINERY">HEAVY MACHINERY</option>
            <option value="GUNFIRE">GUNFIRE</option>
            <option value="NONE">NONE</option>
          </select>
          {errors.exposureWhileServing && (
            <p className="text-red-500 text-sm mt-1">
              {errors.exposureWhileServing.message}
            </p>
          )}
        </div>

        {/* Hearing Protection */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            DID YOU HAVE HEARING PROTECTION ALL THE TIME?
          </label>
          <select
            {...register("hearingProtection", {
              required: "This field is required",
            })}
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
              errors.hearingProtection ? "border-red-500" : ""
            }`}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select>
          {errors.hearingProtection && (
            <p className="text-red-500 text-sm mt-1">
              {errors.hearingProtection.message}
            </p>
          )}
        </div>

        {/* Symptoms Start Date */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            WHEN DID YOUR SYMPTOMS START?
          </label>
          <input
            type="date"
            {...register("symptomsStartDate", {
              required: "This field is required",
            })}
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
              errors.symptomsStartDate ? "border-red-500" : ""
            }`}
          />
          {errors.symptomsStartDate && (
            <p className="text-red-500 text-sm mt-1">
              {errors.symptomsStartDate.message}
            </p>
          )}
        </div>

        {/* Symptoms Frequency */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            HOW OFTEN DO YOU EXPERIENCE THESE SYMPTOMS?
          </label>
          <select
            {...register("symptomsFrequency", {
              required: "This field is required",
            })}
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
              errors.symptomsFrequency ? "border-red-500" : ""
            }`}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="DAILY">DAILY</option>
            <option value="WEEKLY">WEEKLY</option>
            <option value="MONTHLY">MONTHLY</option>
            <option value="OCCASIONALLY">OCCASIONALLY</option>
          </select>
          {errors.symptomsFrequency && (
            <p className="text-red-500 text-sm mt-1">
              {errors.symptomsFrequency.message}
            </p>
          )}
        </div>

        {/* Complained While in Service */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            DID YOU EVER COMPLAIN OF THIS TO SICK CALL WHILE IN SERVICE?
          </label>
          <select
            {...register("complainedWhileInService", {
              required: "This field is required",
            })}
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
              errors.complainedWhileInService ? "border-red-500" : ""
            }`}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select>
          {errors.complainedWhileInService && (
            <p className="text-red-500 text-sm mt-1">
              {errors.complainedWhileInService.message}
            </p>
          )}
        </div>

        {/* Details */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            PLEASE PROVIDE DETAILS
          </label>
          <textarea
            {...register("details", { required: "This field is required" })}
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 h-32 resize-none ${
              errors.details ? "border-red-500" : ""
            }`}
            placeholder="Enter details here..."
          />
          {errors.details && (
            <p className="text-red-500 text-sm mt-1">
              {errors.details.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col justify-center gap-5 mx-auto">
          <Link
            to="/progress"
            className="bg-[#B31942] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#a01638] transition-colors text-center"
          >
            Continue
          </Link>
          <Link
            to="/previous-page"
            className="text-[#001F3F] font-semibold border border-[#001F3F] py-2 px-6 rounded-md hover:bg-gray-100 transition-colors text-center"
          >
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default TinnitusHearingLossForm;