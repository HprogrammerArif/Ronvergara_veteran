// import React from "react";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";

// const OthersIssues = () => {
//   // Initialize React Hook Form
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       hypertension: "",
//       symptomsStartDate: "",
//       dailyMedication: "",
//       complainedWhileInService: "",
//       details: "",
//     },
//   });

//   // Handle form submission
//   const onSubmit = (data) => {
//     console.log("Tinnitus and Hearing Loss Form Data:", data);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4 max-w-4xl mx-auto">
//       {/* Header */}
//       <div className="bg-[#001F3F] text-white text-center py-4 px-6 rounded-lg mb-6 w-full max-w-md">
//         <h2 className="text-xl font-bold">
//           TINNITUS AND HEARING LOSS CLAIM INFORMATION
//         </h2>
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit(onSubmit)} className="w-full">
//         {/* Hypertension */}
//         <div className="mb-6">
//           <label className="block text-gray-700 font-semibold mb-2">
//             DO YOU HAVE ANY OF THE FOLLOWING CONDITIONS?
//           </label>
//           <select
//             {...register("hypertension", { required: "This field is required" })}
//             className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
//               errors.hypertension ? "border-red-500" : ""
//             }`}
//           >
//             <option value="" disabled>
//               Select an option
//             </option>
//             <option value="HYPERTENSION">HYPERTENSION</option>
//             <option value="NONE">Cancer</option>
//             <option value="NONE">Diabetes</option>
//             <option value="NONE">Other</option>
//           </select>
//           {errors.hypertension && (
//             <p className="text-red-500 text-sm mt-1">
//               {errors.hypertension.message}
//             </p>
//           )}
//         </div>

//         {/* Symptoms Start Date */}
//         <div className="mb-6">
//           <label className="block text-gray-700 font-semibold mb-2">
//             WHEN DID YOUR SYMPTOMS START?
//           </label>
//           <input
//             type="date"
//             {...register("symptomsStartDate", {
//               required: "This field is required",
//             })}
//             className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
//               errors.symptomsStartDate ? "border-red-500" : ""
//             }`}
//           />
//           {errors.symptomsStartDate && (
//             <p className="text-red-500 text-sm mt-1">
//               {errors.symptomsStartDate.message}
//             </p>
//           )}
//         </div>

//         {/* Daily Medication */}
//         <div className="mb-6">
//           <label className="block text-gray-700 font-semibold mb-2">
//             DID YOU RECEIVE ANY TREATMENT FOR THIS CONDITION WHILE IN SERVICE?
//           </label>
//           <select
//             {...register("dailyMedication", {
//               required: "This field is required",
//             })}
//             className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
//               errors.dailyMedication ? "border-red-500" : ""
//             }`}
//           >
//             <option value="" disabled>
//               Select an option
//             </option>
//             <option value="YES">YES</option>
//             <option value="NO">NO</option>
//           </select>
//           {errors.dailyMedication && (
//             <p className="text-red-500 text-sm mt-1">
//               {errors.dailyMedication.message}
//             </p>
//           )}
//         </div>

//         {/* Complained While in Service */}
//         <div className="mb-6">
//           <label className="block text-gray-700 font-semibold mb-2">
//             DID YOU EVER COMPLAIN OF THIS TO SICK CALL WHILE IN SERVICE?
//           </label>
//           <select
//             {...register("complainedWhileInService", {
//               required: "This field is required",
//             })}
//             className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
//               errors.complainedWhileInService ? "border-red-500" : ""
//             }`}
//           >
//             <option value="" disabled>
//               Select an option
//             </option>
//             <option value="YES">YES</option>
//             <option value="NO">NO</option>
//           </select>
//           {errors.complainedWhileInService && (
//             <p className="text-red-500 text-sm mt-1">
//               {errors.complainedWhileInService.message}
//             </p>
//           )}
//         </div>

//         {/* Details */}
//         <div className="mb-6">
//           <label className="block text-gray-700 font-semibold mb-2">
//             PLEASE PROVIDE DETAILS
//           </label>
//           <textarea
//             {...register("details", { required: "This field is required" })}
//             className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 h-32 resize-none ${
//               errors.details ? "border-red-500" : ""
//             }`}
//             placeholder="Enter details here..."
//           />
//           {errors.details && (
//             <p className="text-red-500 text-sm mt-1">
//               {errors.details.message}
//             </p>
//           )}
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col justify-center gap-5 mx-auto">
//           <Link
//             to="/progress"
//             className="bg-[#B31942] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#a01638] transition-colors text-center"
//           >
//             Continue
//           </Link>
//           <Link
//             to="/previous-page"
//             className="text-[#001F3F] font-semibold border border-[#001F3F] py-2 px-6 rounded-md hover:bg-gray-100 transition-colors text-center"
//           >
//             Back
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default OthersIssues;
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useCategoryNavigation from "../../hooks/useCategoryNavigation";
import { useSelector } from "react-redux";

const OthersIssues = () => {
  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      hypertension: "",
      symptomsStartDate: "",
      dailyMedication: "",
      complainedWhileInService: "",
      details: "",
    },
  });
  const {navigateToNextCategory} = useCategoryNavigation()

  const selectedCategories = useSelector((state) => state.issueSlice.selectedCategories); 

  const onSubmit = (data) => {

    console.log(data);
    const currentCategoryIndex = selectedCategories.indexOf("Other");

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
    <div className="flex flex-col items-center justify-center min-h-screen p-4 max-w-4xl mx-auto py-20 pt-40">
      {/* Header */}
      <div className="flex flex-col items-center bg-[#0A3161] p-8 rounded-md w-3/6 mx-auto mb-10">
          <div className="w-28 h-28 mb-4">
            <img
              src="https://i.ibb.co.com/tT3ShjtP/Group-2147225242.png"
              alt="Mental Health Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl md:text-[24px] font-semibold text-center text-white">
          ANY OTHER CLAIMS </h1>
        </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {/* Hypertension */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            DO YOU HAVE ANY OF THE FOLLOWING CONDITIONS?
          </label>
          <select
            {...register("hypertension", { required: "This field is required" })}
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
              errors.hypertension ? "border-red-500" : ""
            }`}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="HYPERTENSION">HYPERTENSION</option>
            <option value="CANCER" >CANCER</option>
            <option value="DIABETES">DIABETES</option>
            <option value="OTHER">OTHER</option>
          </select>
          {errors.hypertension && (
            <p className="text-red-500 text-sm mt-1">
              {errors.hypertension.message}
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

        {/* Daily Medication */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            DID YOU RECEIVE ANY TREATMENT FOR THIS CONDITION WHILE IN SERVICE?
          </label>
          <select
            {...register("dailyMedication", {
              required: "This field is required",
            })}
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
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
            // to="/progress"
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

export default OthersIssues;
