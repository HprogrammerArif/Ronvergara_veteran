import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeCategoryByName } from "../../../redux/slice/IssueSlice";
import useCategoryNavigation from "../../../hooks/useCategoryNavigation";

const DischargeCondition = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const selectedCategories = useSelector
  ((state) => state.issueSlice.selectedCategories)
const dispatch = useDispatch()
const {navigateToNextCategory} = useCategoryNavigation()
  const onSubmit = (data) => {
    console.log(data); 
    console.log(selectedCategories); 

    const currentCategoryIndex = selectedCategories.indexOf("Body Health");

    if (currentCategoryIndex !== -1) {
      dispatch(removeCategoryByName("Body Health"))

      const nextCategory = selectedCategories?.[0]??"";
      navigateToNextCategory(nextCategory)
    }

  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
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
          {/* Were you ever seen at sick call for these injuries? */}
          <label className="block text-sm font-medium text-gray-700">
          Have you been seen since discharge for any of these conditions?
            <select
              {...register("seenAtSickCall", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.seenAtSickCall ? 'border-red-500' : ''}`}
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.seenAtSickCall && <span className="text-red-500 text-sm">{errors.seenAtSickCall.message}</span>}
          </label>


          <label className="block text-sm font-medium text-gray-700">
          Are you on any regular medications for these conditions?
            <select
              {...register("seenAtSickCall", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.seenAtSickCall ? 'border-red-500' : ''}`}
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.seenAtSickCall && <span className="text-red-500 text-sm">{errors.seenAtSickCall.message}</span>}
          </label>


          <label className="block text-sm font-medium text-gray-700">
          Have you had any surgeries relating to these conditions?
            <select
              {...register("seenAtSickCall", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.seenAtSickCall ? 'border-red-500' : ''}`}
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.seenAtSickCall && <span className="text-red-500 text-sm">{errors.seenAtSickCall.message}</span>}
          </label>

      
        {/* Buttons */}
        <div className="flex flex-col justify-center gap-5 mx-auto pt-10">
        <button
          type="submit"
          
        >
        
        <Link
        to="/health_details"
            
              className="btn bg-[#B31942] w-full text-white py-2 px-6 rounded-md hover:bg-[#aa2b4d]"
            >
              Continue
            </Link>

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

export default DischargeCondition;