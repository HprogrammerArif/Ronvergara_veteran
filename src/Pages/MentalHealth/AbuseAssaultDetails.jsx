// import mentalLogo from "../../assets/mental_health_logo.png";

// import { Link, useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';

// const AbuseAssaultDetails = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate()
//   const onSubmit = (data) => {
//     console.log("abuse_assault_form",data); 
//     localStorage.setItem("abuse_assault_form", JSON.stringify(data))
//     navigate("/risk_details")
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-32 md:pb-20 pb-10">
//       <div className=" md:p-6 p-2 rounded-lg w-full max-w-4xl flex flex-col justify-between">
//         {/* Header Section (Centered Image and Text) */}
//            <div className="bg-[#002B5C] w-full rounded-lg p-6 mb-6 flex flex-col items-center">
//                             <div className="w-52 h-52 bg-purple-600 rounded-full flex items-center justify-center mb-3">
//                               <img src={mentalLogo} alt="Mental Health Logo" className="w-32 h-32 object-cover" />
//                             </div>
//                             <h1 className="text-white text-2xl font-medium mt-2">Mental Health</h1>
//                           </div>

//         {/* Form Section */}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex-grow md:mt-10 mt-5">

//           <label className="block text-lg font-medium text-gray-700">
//             Were You Ever Abused/Assaulted During Your Time In Service?
//             <select
//               {...register("abusedAssaulted", { required: "This field is required" })}
//               className={`mt-1 block w-full p-2 border border-gray-300 uppercase rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.abusedAssaulted ? 'border-red-500' : ''}`}
//             >
//               <option value="yes" selected>Yes</option>
//               <option value="no">No</option>
//             </select>
//             {errors.abusedAssaulted && <span className="text-red-500 text-sm">{errors.abusedAssaulted.message}</span>}
//           </label>

    

//           <label className="block text-lg font-medium text-gray-700">
//             Date Of Incident
//             <input
//               {...register("incidentDate", { required: "This field is required" })}
//               type="date"
//               className={`mt-1 block w-full p-2 border border-gray-300 uppercase rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm ${errors.incidentDate ? 'border-red-500' : ''}`}
//               placeholder="YYYY"
//             />
//             {errors.incidentDate && <span className="text-red-500 text-sm">{errors.incidentDate.message}</span>}
//           </label>

//           {/* Type Of Abuse/Assault */}
//           <label className="block text-lg font-medium text-gray-700">
//             Type Of Abuse/Assault
//             <select
//               {...register("abuseType", { required: "This field is required" })}
//               className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.abuseType ? 'border-red-500' : ''}`}
//             >
//               <option value="physical">PHYSICAL ABUSE</option>
//               <option value="assaultEmotional">ASSULT EMOTION</option>
//               <option value="psychological">PSYCHOLOGICAL ABUSE</option>
//               <option value="sexual">SEXUAL ABUSE</option>
//               <option value="other">OTHER</option>
//             </select>
//             {errors.abuseType && <span className="text-red-500 text-sm">{errors.abuseType.message}</span>}
//           </label>

  

        
//           <label className="block text-lg font-medium text-gray-700">
//             Names Of Anyone Involved In Incident
//             <input
//               {...register("involvedNames", { required: "This field is required" })}
//               type="text"
//               className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.involvedNames ? 'border-red-500' : ''}`}
//               placeholder="Enter names"
//             />
//             {errors.involvedNames && <span className="text-red-500 text-sm">{errors.involvedNames.message}</span>}
//           </label>

        
//           <label className="block text-lg font-medium text-gray-700">
//             Specific Details Of Incident
//             <textarea
//               {...register("incidentDetails", { required: "This field is required" })}
//               className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm h-32 resize-none ${errors.incidentDetails ? 'border-red-500' : ''}`}
//               placeholder="Enter details here..."
//             />
//             {errors.incidentDetails && <span className="text-red-500 text-sm">{errors.incidentDetails.message}</span>}
//           </label>

//              {/* Buttons Section (At the Bottom) */}
//           <div className="flex justify-center gap-10 md:mt-6 mt-20 pb-10 md:pb-0">
//                                   <button>
//                                    <button
//                                     type="submit"
//                                     className="bg-[#B31942] text-white py-2 px-6 md:px-20 md:w-[200px] w-[150px] rounded-md hover:bg-[#aa2b4d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 font-semibold"
//                                   >
//                                     Continue
//                                   </button>
//                                   </button>
//                               <div>
//                                    <Link
//                                     type="button"
//                                     className="bg-white text-blue-800 py-2 px-6 md:px-20 md:w-[200px] w-[150px] border border-blue-800 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold"
//                                     onClick={() => window.history.back()}
//                                   >
//                                     Back
//                                   </Link>
//                               </div>
//                                 </div>
//         </form>

     
//       </div>
//     </div>
//   );
// };

// export default AbuseAssaultDetails;


import React from 'react';
import mentalLogo from "../../assets/mental_health_logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const AbuseAssaultDetails = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("abuse_assault_form", data); 
    localStorage.setItem("abuse_assault_form", JSON.stringify(data));
    navigate("/risk_details");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-32 md:pb-20 pb-10">
      <div className="md:p-6 p-2 rounded-lg w-full max-w-4xl flex flex-col justify-between">
        {/* Header Section (Centered Image and Text) */}
        <div className="bg-[#002B5C] w-full rounded-lg p-6 mb-6 flex flex-col items-center">
          <div className="w-52 h-52 bg-purple-600 rounded-full flex items-center justify-center mb-3">
            <img src={mentalLogo} alt="Mental Health Logo" className="w-32 h-32 object-cover" />
          </div>
          <h1 className="text-white text-2xl font-medium mt-2">Mental Health</h1>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex-grow md:mt-10 mt-5">

          <label className="block text-lg font-medium text-gray-700">
            Were You Ever Abused/Assaulted During Your Time In Service?
            <select
              {...register("abusedAssaulted", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 uppercase rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.abusedAssaulted ? 'border-red-500' : ''}`}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.abusedAssaulted && <span className="text-red-500 text-sm">{errors.abusedAssaulted.message}</span>}
          </label>

          <label className="block text-lg font-medium text-gray-700">
            Date Of Incident
            <input
              {...register("incidentDate", { required: "This field is required" })}
              type="date"
              className={`mt-1 block w-full p-2 border border-gray-300 uppercase rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  text-sm ${errors.incidentDate ? 'border-red-500' : ''}`}
              placeholder="YYYY"
            />
            {errors.incidentDate && <span className="text-red-500 text-sm">{errors.incidentDate.message}</span>}
          </label>

          <label className="block text-lg font-medium text-gray-700">
            Type Of Abuse/Assault
            <select
              {...register("abuseType", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.abuseType ? 'border-red-500' : ''}`}
            >
              <option value="">SELECT TYPE</option>
              <option value="physical">PHYSICAL ABUSE</option>
              <option value="assaultEmotional">ASSAULT EMOTIONAL</option>
              <option value="psychological">PSYCHOLOGICAL ABUSE</option>
              <option value="sexual">SEXUAL ABUSE</option>
              <option value="other">OTHER</option>
            </select>
            {errors.abuseType && <span className="text-red-500 text-sm">{errors.abuseType.message}</span>}
          </label>

          <label className="block text-lg font-medium text-gray-700">
            Names Of Anyone Involved In Incident
            <input
              {...register("involvedNames", { required: "This field is required" })}
              type="text"
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${errors.involvedNames ? 'border-red-500' : ''}`}
              placeholder="Enter names"
            />
            {errors.involvedNames && <span className="text-red-500 text-sm">{errors.involvedNames.message}</span>}
          </label>

          <label className="block text-lg font-medium text-gray-700">
            Specific Details Of Incident
            <textarea
              {...register("incidentDetails", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm h-32 resize-none ${errors.incidentDetails ? 'border-red-500' : ''}`}
              placeholder="Enter details here..."
            />
            {errors.incidentDetails && <span className="text-red-500 text-sm">{errors.incidentDetails.message}</span>}
          </label>

          {/* Buttons Section (Corrected) */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8 pb-10 md:pb-0">
            <button
              type="submit"
              className="bg-[#B31942] text-white py-2 px-6 w-40 md:w-52 rounded-md hover:bg-[#aa2b4d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 font-semibold"
            >
              Continue
            </button>

            <Link
              to="#"
              onClick={() => navigate(-1)}
              className="bg-white text-blue-800 py-2 px-6 w-40 md:w-52 border border-blue-800 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold text-center"
            >
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AbuseAssaultDetails;
