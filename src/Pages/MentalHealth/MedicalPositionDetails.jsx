

import React from 'react';
import mentalLogo from "../../assets/mental_health_logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const MedicalPositionDetails = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const livesAccident = watch("livesAccident");

  const onSubmit = (data) => {
    console.log("medicalPosition", data);
    localStorage.setItem("medical_position_details", JSON.stringify(data));
    navigate("/crash_details");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-24 pb-10 mt-10">
      <div className="md:p-6 p-2 rounded-lg w-full max-w-4xl flex flex-col justify-between">
        {/* Header Section */}
        <div className="bg-[#002B5C] w-full rounded-lg p-6 mb-6 flex flex-col items-center">
          <div className="w-52 h-52 bg-purple-600 rounded-full flex items-center justify-center mb-3">
            <img
              src={mentalLogo}
              alt="Mental Health Logo"
              className="w-32 h-32 object-cover"
            />
          </div>
          <h1 className="text-white text-2xl font-medium mt-2">Mental Health</h1>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-5">
          {/* Main Question */}
          <label className="block text-lg font-medium text-gray-700">
            Did You Work In A Medical Position Or Other Position Where You Witnessed Severe Accidents/Deaths Frequently?
            <select
              {...register("livesAccident", { required: "This field is required" })}
              className={`mt-1 block w-full uppercase p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
                errors.livesAccident ? "border-red-500" : ""
              }`}
              defaultValue=""
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.livesAccident && (
              <span className="text-red-500 text-sm">
                {errors.livesAccident.message}
              </span>
            )}
          </label>

          {/* Conditionally render these fields if "Yes" */}
          {livesAccident === "yes" && (
            <>
              {/* Dates Of Incident */}
              <label className="block text-lg font-medium text-gray-700">
                Dates Of Incident
                <input
                  {...register("incidentDates", {
                    required: "This field is required",
                  })}
                  type="date"
                  className={`mt-1 block uppercase w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
                    errors.incidentDates ? "border-red-500" : ""
                  }`}
                  placeholder="MM/DD/YYYY"
                />
                {errors.incidentDates && (
                  <span className="text-red-500 text-sm">
                    {errors.incidentDates.message}
                  </span>
                )}
              </label>

              {/* Location Of Incident */}
              <label className="block text-lg font-medium text-gray-700">
                Location Of Incident
                <input
                  {...register("incidentLocation", {
                    required: "This field is required",
                  })}
                  type="text"
                  className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
                    errors.incidentLocation ? "border-red-500" : ""
                  }`}
                  placeholder="Enter location"
                />
                {errors.incidentLocation && (
                  <span className="text-red-500 text-sm">
                    {errors.incidentLocation.message}
                  </span>
                )}
              </label>

              {/* Type Of Incident */}
              <label className="block text-lg font-medium text-gray-700">
                Type Of Incident
                <select
                  {...register("incidentType", {
                    required: "This field is required",
                  })}
                  className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none uppercase focus:ring-2 focus:ring-blue-500 text-sm ${
                    errors.incidentType ? "border-red-500" : ""
                  }`}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select incident type
                  </option>
                  <option value="accident">Accident</option>
                  <option value="injury">Injury</option>
                  <option value="assault">Assault</option>
                  <option value="naturalDisaster">Natural Disaster</option>
                  <option value="other">Other</option>
                </select>
                {errors.incidentType && (
                  <span className="text-red-500 text-sm">
                    {errors.incidentType.message}
                  </span>
                )}
              </label>

              {/* Specific Details Of Incident */}
              <label className="block text-lg font-medium text-gray-700 pb-10">
                Specific Details Of Incident
                <textarea
                  {...register("incidentDetails", {
                    required: "This field is required",
                  })}
                  className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm h-32 resize-none ${
                    errors.incidentDetails ? "border-red-500" : ""
                  }`}
                  placeholder="Enter details here..."
                />
                {errors.incidentDetails && (
                  <span className="text-red-500 text-sm">
                    {errors.incidentDetails.message}
                  </span>
                )}
              </label>
            </>
          )}

          {/* Buttons */}
          <div className="flex justify-center gap-10 md:mt-6 mt-20 md:pb-10">
            <button
              type="submit"
              className="bg-[#B31942] text-white py-2 px-6 md:px-20 md:w-[200px] w-[150px] rounded-md hover:bg-[#aa2b4d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 font-semibold"
            >
              Continue
            </button>

            <Link
              type="button"
              className="bg-white text-blue-800 py-2 px-6 md:px-20 md:w-[200px] w-[150px] border border-blue-800 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold flex items-center justify-center"
              onClick={() => window.history.back()}
            >
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MedicalPositionDetails;
