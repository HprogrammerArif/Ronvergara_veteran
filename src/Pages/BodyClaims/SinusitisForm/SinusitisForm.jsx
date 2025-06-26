import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useCategoryNavigation from "../../../hooks/useCategoryNavigation";
import { removeCategoryByName } from "../../../redux/slice/IssueSlice";
import { store } from "../../../redux/store";

const SinusitisForm = () => {
  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      runnyNose: "",
      complainedWhileInService: "",
      exposedToBurnPits: "",
      symptomsStartDate: "",
      symptomsFrequency: "",
      dailyMedication: "",
      officiallyDiagnosed: "",
      treatmentProvided: "",
      details: "",
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedCategories = useSelector(
    (state) => state.issueSlice.selectedCategories
  ); // Accessing the selected categories from the Redux state
  const { navigateToNextCategory } = useCategoryNavigation();
  // Handle form submission
  const onSubmit = (data) => {
    
    console.log(data);
    localStorage.setItem("sinusitis_form", JSON.stringify(data));
    
    const currentCategoryIndex = selectedCategories.indexOf("Sinusitis, Rhinitis & Asthma Claim Information");

    if (currentCategoryIndex !== -1) { 
      if(selectedCategories[currentCategoryIndex + 1]){
        const nextCategory = selectedCategories[currentCategoryIndex + 1];
        navigateToNextCategory(nextCategory)
      }else{
        navigateToNextCategory("");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-24 mt-10 p-4 md:max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center bg-[#0A3161] p-8 rounded-md md:w-3/6 mx-auto mb-10">
        <div className="md:w-28 md;h-28 mb-4">
          <img
            src="https://i.ibb.co.com/bgjW5zrC/graphic-elements.png"
            alt="Mental Health Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-2xl md:text-[24px] font-semibold text-center text-white">
          Sinusitis, Rhinitis & <br />
          Asthma Claim <br /> Information
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {/* Runny Nose */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            DO YOU HAVE ANY OF THE FOLLOWING SYMPTOMS?
          </label>
          <select
            {...register("runnyNose", { required: "This field is required" })}
            className={`mt-1 block w-full p-2 border border-gray-300 uppercase rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
              errors.runnyNose ? "border-red-500" : ""
            }`}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="YES"> RUNNY NOSE</option>
            <option value="NO">Post-nasal drip</option>
            <option value="NO">Coughing</option>
            <option value="NO">Trouble breathing</option>
            <option value="NO">Sneezing</option>
          </select>
          {errors.runnyNose && (
            <p className="text-red-500 text-sm mt-1">
              {errors.runnyNose.message}
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
            className={`mt-1 block w-full p-2 border uppercase border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
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

        {/* Exposed to Burn Pits */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            WERE YOU EVER EXPOSED TO ANY OF THE FOLLOWING WHILE IN SERVICE? BURN
            PITS
          </label>
          <select
            {...register("exposedToBurnPits", {
              required: "This field is required",
            })}
            className={`mt-1 block w-full p-2 border uppercase border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
              errors.exposedToBurnPits ? "border-red-500" : ""
            }`}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select>
          {errors.exposedToBurnPits && (
            <p className="text-red-500 text-sm mt-1">
              {errors.exposedToBurnPits.message}
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
            <option value="MONTHLY">SEASONALLY</option>
          </select>
          {errors.symptomsFrequency && (
            <p className="text-red-500 text-sm mt-1">
              {errors.symptomsFrequency.message}
            </p>
          )}
        </div>

        {/* Daily Medication */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            DO YOU TAKE ANY MEDICATION DAILY FOR THIS CONDITION?
          </label>
          <select
            {...register("dailyMedication", {
              required: "This field is required",
            })}
            className={`mt-1 block w-full p-2 border uppercase border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
              errors.dailyMedication ? "border-red-500" : ""
            }`}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select>
          {errors.dailyMedication && (
            <p className="text-red-500 text-sm mt-1">
              {errors.dailyMedication.message}
            </p>
          )}
        </div>

        {/* Officially Diagnosed */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            HAVE YOU BEEN OFFICIALLY DIAGNOSED WITH SINUSITIS, RHINITIS, OR
            ASTHMA?
          </label>
          <select
            {...register("officiallyDiagnosed", {
              required: "This field is required",
            })}
            className={`mt-1 block w-full p-2 border uppercase border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
              errors.officiallyDiagnosed ? "border-red-500" : ""
            }`}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select>
          {errors.officiallyDiagnosed && (
            <p className="text-red-500 text-sm mt-1">
              {errors.officiallyDiagnosed.message}
            </p>
          )}
        </div>

        {/* Treatment Provided */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            WHAT TREATMENT WAS PROVIDED?
          </label>
          <select
            {...register("treatmentProvided", {
              required: "This field is required",
            })}
            className={`mt-1 block w-full p-2 border uppercase border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
              errors.treatmentProvided ? "border-red-500" : ""
            }`}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="YES">MEDICATIONS</option>
            <option value="NO" className="uppercase">
              INHALERS
            </option>
            <option value="NO" className="uppercase">
              ALLERGY SHOTS
            </option>
            <option value="NO" className="uppercase">
              SURGERY
            </option>
          </select>
          {errors.treatmentProvided && (
            <p className="text-red-500 text-sm mt-1">
              {errors.treatmentProvided.message}
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
            className={`mt-1 block w-full p-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 h-32 resize-none ${
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
          <button
            type="submit"
            className="bg-[#B31942] text-white uppercase font-semibold py-2 px-6 rounded-md hover:bg-[#a01638] transition-colors text-center"
          >
            Continue
          </button>
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

export default SinusitisForm;

// import React from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { removeCategoryByNameThunk } from "../../../redux/slice/IssueSlice"; // Import the thunk action

// const SinusitisForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       runnyNose: "",
//       complainedWhileInService: "",
//       exposedToBurnPits: "",
//       symptomsStartDate: "",
//       symptomsFrequency: "",
//       dailyMedication: "",
//       officiallyDiagnosed: "",
//       treatmentProvided: "",
//       details: "",
//     },
//   });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const selectedCategories = useSelector((state) => state.issueSlice.selectedCategories); // Access selected categories from Redux store

//   const onSubmit = (data) => {
//     console.log("Sinusitis Form Data:", data);

//     const name = "Sinusitis, Rhinitis & Asthma Claim Information";
//     const currentCategoryIndex = selectedCategories.indexOf(name);

//     // If the category exists in selected categories, remove it
//     if (currentCategoryIndex !== -1) {
//       // Dispatch the async thunk to remove the category and navigate
//       dispatch(removeCategoryByNameThunk(name)); // Using the thunk to remove category and navigate
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 mt-20">
//       <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl space-y-6 my-10">
//         {/* Header Section */}
//         <div className="flex flex-col items-center bg-[#0A3161] p-8 rounded-md w-3/6 mx-auto">
//           <div className="w-28 h-28 mb-4">
//             <img
//               src="https://i.ibb.co.com/FLFMyh5F/Group-2147225241.png"
//               alt="Mental Health Logo"
//               className="w-full h-full object-contain"
//             />
//           </div>
//           <h1 className="text-2xl md:text-[24px] font-semibold text-center text-white">
//             Sinusitis, Rhinitis & <br />
//             Asthma Claim <br /> Information
//           </h1>
//         </div>

//         {/* Form Section */}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* Runny Nose */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               DO YOU HAVE ANY OF THE FOLLOWING SYMPTOMS?
//               <select
//                 {...register("runnyNose", { required: "This field is required" })}
//                 className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
//                   errors.runnyNose ? "border-red-500" : ""
//                 }`}
//               >
//                 <option value="" disabled>
//                   Select an option
//                 </option>
//                 <option value="YES">RUNNY NOSE</option>
//                 <option value="NO">Post-nasal drip</option>
//                 <option value="NO">Coughing</option>
//                 <option value="NO">Trouble breathing</option>
//                 <option value="NO">Sneezing</option>
//               </select>
//             </label>
//             {errors.runnyNose && (
//               <span className="text-red-500 text-sm">{errors.runnyNose.message}</span>
//             )}
//           </div>

//           {/* Complained While in Service */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               DID YOU EVER COMPLAIN OF THIS TO SICK CALL WHILE IN SERVICE?
//               <select
//                 {...register("complainedWhileInService", {
//                   required: "This field is required",
//                 })}
//                 className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
//                   errors.complainedWhileInService ? "border-red-500" : ""
//                 }`}
//               >
//                 <option value="" disabled>
//                   Select an option
//                 </option>
//                 <option value="YES">YES</option>
//                 <option value="NO">NO</option>
//               </select>
//             </label>
//             {errors.complainedWhileInService && (
//               <span className="text-red-500 text-sm">
//                 {errors.complainedWhileInService.message}
//               </span>
//             )}
//           </div>

//           {/* Exposed to Burn Pits */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               WERE YOU EVER EXPOSED TO ANY OF THE FOLLOWING WHILE IN SERVICE? BURN PITS
//               <select
//                 {...register("exposedToBurnPits", {
//                   required: "This field is required",
//                 })}
//                 className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
//                   errors.exposedToBurnPits ? "border-red-500" : ""
//                 }`}
//               >
//                 <option value="" disabled>
//                   Select an option
//                 </option>
//                 <option value="YES">YES</option>
//                 <option value="NO">NO</option>
//               </select>
//             </label>
//             {errors.exposedToBurnPits && (
//               <span className="text-red-500 text-sm">{errors.exposedToBurnPits.message}</span>
//             )}
//           </div>

//           {/* Symptoms Start Date */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               WHEN DID YOUR SYMPTOMS START?
//               <input
//                 type="date"
//                 {...register("symptomsStartDate", {
//                   required: "This field is required",
//                 })}
//                 className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
//                   errors.symptomsStartDate ? "border-red-500" : ""
//                 }`}
//               />
//             </label>
//             {errors.symptomsStartDate && (
//               <span className="text-red-500 text-sm">{errors.symptomsStartDate.message}</span>
//             )}
//           </div>

//           {/* Symptoms Frequency */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               HOW OFTEN DO YOU EXPERIENCE THESE SYMPTOMS?
//               <select
//                 {...register("symptomsFrequency", {
//                   required: "This field is required",
//                 })}
//                 className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
//                   errors.symptomsFrequency ? "border-red-500" : ""
//                 }`}
//               >
//                 <option value="" disabled>
//                   Select an option
//                 </option>
//                 <option value="DAILY">DAILY</option>
//                 <option value="WEEKLY">WEEKLY</option>
//                 <option value="MONTHLY">SEASONALLY</option>
//               </select>
//             </label>
//             {errors.symptomsFrequency && (
//               <span className="text-red-500 text-sm">{errors.symptomsFrequency.message}</span>
//             )}
//           </div>

//           {/* Daily Medication */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               DO YOU TAKE ANY MEDICATION DAILY FOR THIS CONDITION?
//               <select
//                 {...register("dailyMedication", {
//                   required: "This field is required",
//                 })}
//                 className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
//                   errors.dailyMedication ? "border-red-500" : ""
//                 }`}
//               >
//                 <option value="" disabled>
//                   Select an option
//                 </option>
//                 <option value="YES">YES</option>
//                 <option value="NO">NO</option>
//               </select>
//             </label>
//             {errors.dailyMedication && (
//               <span className="text-red-500 text-sm">{errors.dailyMedication.message}</span>
//             )}
//           </div>

//           {/* Officially Diagnosed */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               HAVE YOU BEEN OFFICIALLY DIAGNOSED WITH SINUSITIS, RHINITIS, OR ASTHMA?
//               <select
//                 {...register("officiallyDiagnosed", {
//                   required: "This field is required",
//                 })}
//                 className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
//                   errors.officiallyDiagnosed ? "border-red-500" : ""
//                 }`}
//               >
//                 <option value="" disabled>
//                   Select an option
//                 </option>
//                 <option value="YES">YES</option>
//                 <option value="NO">NO</option>
//               </select>
//             </label>
//             {errors.officiallyDiagnosed && (
//               <span className="text-red-500 text-sm">{errors.officiallyDiagnosed.message}</span>
//             )}
//           </div>

//           {/* Treatment Provided */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               WHAT TREATMENT WAS PROVIDED?
//               <select
//                 {...register("treatmentProvided", {
//                   required: "This field is required",
//                 })}
//                 className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
//                   errors.treatmentProvided ? "border-red-500" : ""
//                 }`}
//               >
//                 <option value="" disabled>
//                   Select an option
//                 </option>
//                 <option value="YES">MEDICATIONS</option>
//                 <option value="NO" className="uppercase">
//                   INHALERS
//                 </option>
//                 <option value="NO" className="uppercase">
//                   ALLERGY SHOTS
//                 </option>
//                 <option value="NO" className="uppercase">
//                   SURGERY
//                 </option>
//               </select>
//             </label>
//             {errors.treatmentProvided && (
//               <span className="text-red-500 text-sm">{errors.treatmentProvided.message}</span>
//             )}
//           </div>

//           {/* Details */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               PLEASE PROVIDE DETAILS
//               <textarea
//                 {...register("details", { required: "This field is required" })}
//                 className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm h-32 resize-none ${
//                   errors.details ? "border-red-500" : ""
//                 }`}
//                 placeholder="Enter details here..."
//               />
//             </label>
//             {errors.details && (
//               <span className="text-red-500 text-sm">{errors.details.message}</span>
//             )}
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col justify-center gap-5 mx-auto">
//             <button
//               type="submit"
//               className="btn bg-[#B31942] text-white py-2 px-6 rounded-md hover:bg-[#aa2b4d]"
//             >
//               Continue
//             </button>
//             <Link
//               to="/previous-page"
//               className="text-[#001F3F] font-semibold border border-[#001F3F] py-2 px-6 rounded-md hover:bg-gray-100 transition-colors text-center"
//             >
//               Back
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SinusitisForm;