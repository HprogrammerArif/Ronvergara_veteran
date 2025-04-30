
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useCategoryNavigation from "../../../hooks/useCategoryNavigation";
import { useSelector } from "react-redux";

const Migraine = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {navigateToNextCategory} = useCategoryNavigation()
  const selectedCategories = useSelector(
    (state) => state.issueSlice.selectedCategories
  );

  const onSubmit = (data) => {
    console.log(data);
    const currentCategoryIndex = selectedCategories.indexOf("Migraine & Headache Claim Information");

    if (currentCategoryIndex !== -1 && selectedCategories[currentCategoryIndex + 1]) { const nextCategory = selectedCategories[currentCategoryIndex + 1];
      navigateToNextCategory(nextCategory)
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 pt-20">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-4xl space-y-8 my-16">
        {/* Centered Image and Title */}
        <div className="flex flex-col items-center bg-[#0A3161] p-8 rounded-md w-3/6 mx-auto">
          <div className="w-28 h-28 mb-4">
            <img
              src="https://i.ibb.co.com/VpQtPVqF/Group-1597882744.png"
              alt="Mental Health Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl md:text-[24px] font-semibold text-center text-white">
            Migraine & Headache <br /> Claim Information
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Frequency */}
          <label className="block text-lg font-medium text-gray-700">
            How often do your migraines occur?
            <select
              {...register("migraineFrequency", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.migraineFrequency ? 'border-red-500' : ''}`}
              defaultValue=""
            >
              <option value="" disabled>
                Select frequency
              </option>
              <option value="1-2 times per month">1-2 times per month</option>
              <option value="3-4 times per month">3-4 times per month</option>
              <option value="5-6 times per month">5-6 times per month</option>
              <option value="6+ times per month">6+ times per month</option>
            </select>
            {errors.migraineFrequency && <span className="text-red-500 text-sm">{errors.migraineFrequency.message}</span>}
          </label>

          {/* Duration */}
          <label className="block text-lg font-medium text-gray-700">
            How long do your migraines typically last?
            <select
              {...register("migraineDuration", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.migraineDuration ? 'border-red-500' : ''}`}
              defaultValue=""
            >
              <option value="" disabled>
                Select duration
              </option>
              <option value="Less than 1 hour">Less than 1 hour</option>
              <option value="1-4 hours">1-4 hours</option>
              <option value="4-24 hours">4-24 hours</option>
              <option value="More than 24 hours">More than 24 hours</option>
            </select>
            {errors.migraineDuration && <span className="text-red-500 text-sm">{errors.migraineDuration.message}</span>}
          </label>

          {/* Symptoms */}
          <label className="block text-lg font-medium text-gray-700">
            Do your migraines cause any of the following symptoms?
            <select
              {...register("migraineSymptoms", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.migraineSymptoms ? 'border-red-500' : ''}`}
              defaultValue=""
            >
              <option value="" disabled>
                Select symptoms
              </option>
              <option value="Sensitivity to light or sound">Sensitivity to light or sound</option>
              <option value="Nausea or vomiting">Nausea or vomiting</option>
              <option value="Vision changes">Vision changes</option>
              <option value="Other">Other</option>
            </select>
            {errors.migraineSymptoms && <span className="text-red-500 text-sm">{errors.migraineSymptoms.message}</span>}
          </label>

          {/* Impact */}
          <label className="block text-lg font-medium text-gray-700">
            How do migraines impact your daily activities?
            <select
              {...register("migraineImpact", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.migraineImpact ? 'border-red-500' : ''}`}
              defaultValue=""
            >
              <option value="" disabled>
                Select impact
              </option>
              <option value="Unable to work or perform normal tasks">Unable to work or perform normal tasks</option>
              <option value="Reduced productivity">Reduced productivity</option>
              <option value="Minimal impact">Minimal impact</option>
            </select>
            {errors.migraineImpact && <span className="text-red-500 text-sm">{errors.migraineImpact.message}</span>}
          </label>

          {/* Treatment */}
          <label className="block text-lg font-medium text-gray-700">
            Have you received medical treatment for migraines?
            <select
              {...register("migraineImpact", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.migraineImpact ? 'border-red-500' : ''}`}
              defaultValue=""
            >
              <option value="" disabled>
                Select impact
              </option>
              <option value="Unable to work or perform normal tasks">Yes</option>
              <option value="Reduced productivity">No</option>
         
            </select>
            {errors.medicalTreatment && <span className="text-red-500 text-sm">{errors.medicalTreatment.message}</span>}
          </label>

          {/* Visit Dates */}
          <label className="block text-lg font-medium text-gray-700">
            Dates of medical visits
            <input
              type="date"
              placeholder="MM/DD/YYYY"
              {...register("medicalVisitDates", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.medicalVisitDates ? 'border-red-500' : ''}`}
            />
            {errors.medicalVisitDates && <span className="text-red-500 text-sm">{errors.medicalVisitDates.message}</span>}
          </label>

          {/* Details */}
          <label className="block text-lg font-medium text-gray-700">
            Please provide details
            <textarea
              {...register("details", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm h-32 resize-none ${errors.details ? 'border-red-500' : ''}`}
              placeholder="Include any relevant information or context."
            />
            {errors.details && <span className="text-red-500 text-sm">{errors.details.message}</span>}
          </label>

          {/* Buttons */}
          <div className="flex flex-col justify-center gap-5 mx-auto">
            <button
            // to="/service_details"
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

export default Migraine;