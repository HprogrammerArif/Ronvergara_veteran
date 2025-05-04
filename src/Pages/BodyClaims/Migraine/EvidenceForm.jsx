
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const EvidenceForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      hasEvidence: "",
      evidenceType: "",
      file: null,
    },
  });

  const hasEvidence = watch("hasEvidence");

  // Convert uploaded file to Base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const onSubmit = async (data) => {
    let fileBase64 = null;
    const file = data.file?.[0];

    if (file) {
      fileBase64 = await toBase64(file);
    }

    const storedData = {
      hasEvidence: data.hasEvidence,
      evidenceType: data.evidenceType,
      file: fileBase64,
      fileName: file?.name,
    };

    localStorage.setItem("evidenceData", JSON.stringify(storedData));
    console.log("Saved to localStorage:", storedData);

    // Navigate to next page
    navigate("/progress");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 max-w-4xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {/* Has Evidence Select */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            DO YOU HAVE ANY SUPPORTING EVIDENCE TO UPLOAD?
          </label>
          <select
            {...register("hasEvidence", {
              required: "Please select an option",
            })}
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
              errors.hasEvidence ? "border-red-500" : ""
            }`}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select>
          {errors.hasEvidence && (
            <p className="text-red-500 text-sm mt-1">
              {errors.hasEvidence.message}
            </p>
          )}
        </div>

        {/* File Upload Section */}
        {hasEvidence === "NO" && (
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              UPLOAD FILE
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-2 text-center bg-white">
              <p className="text-gray-500 mb-2">
                {watch("file")?.[0]?.name || "CLICK TO UPLOAD OR DRAG & DROP"}
              </p>
              <input
                type="file"
                {...register("file", {
                  required: "Please upload a file",
                })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                id="file-upload"
              />
              {errors.file && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.file.message}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Evidence Type Select */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            WHAT TYPE OF EVIDENCE ARE YOU SUBMITTING?
          </label>
          <select
            {...register("evidenceType", {
              required: "This field is required",
            })}
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
              errors.evidenceType ? "border-red-500" : ""
            }`}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="buddy">
              Buddy Statements (Statements from friends or family verifying stressors and conditions)
            </option>
            <option value="police">
              Police/Incident Reports (Including victim reports)
            </option>
            <option value="news">News Articles</option>
            <option value="medical">Medical Records</option>
          </select>
          {errors.evidenceType && (
            <span className="text-red-500 text-sm mt-1">
              {errors.evidenceType.message}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-5 mx-auto">
          <button
            type="submit"
            className="btn bg-[#B31942] border-gray-400 py-2 text-white text-center font-semibold rounded-md"
          >
            Continue
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn text-[#001F3F] font-semibold border border-[#001F3F] py-2 rounded-md"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default EvidenceForm;



// import React from "react";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";

// const EvidenceForm = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       hasEvidence: "",
//       evidenceType: "",
//       file: null,
//     },
//   });

//   const hasEvidence = watch("hasEvidence");

//   const onSubmit = (data) => {
//     console.log("Form Data:", data);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4 max-w-4xl mx-auto">
//       <form onSubmit={handleSubmit(onSubmit)} className="w-full">
//         <div className="mb-6">
//           <label className="block text-gray-700 font-semibold mb-2">
//             DO YOU HAVE ANY SUPPORTING EVIDENCE TO UPLOAD?
//           </label>
//           <select
//             {...register("hasEvidence", {
//               required: "Please select an option",
//             })}
//             className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
//               errors.hasEvidence ? "border-red-500" : ""
//             }`}
//           >
//             <option value="" disabled>
//               Select an option
//             </option>
//             <option value="YES">YES</option>
//             <option value="NO">NO</option>
//           </select>
//           {errors.hasEvidence && (
//             <p className="text-red-500 text-sm mt-1">
//               {errors.hasEvidence.message}
//             </p>
//           )}
//         </div>

//         {hasEvidence === "NO" && (
//           <>
//             <div className="mb-6">
//               <label className="block text-gray-700 font-semibold mb-2">
//                 UPLOAD FILE
//               </label>
//               <div className="border-2 border-dashed border-gray-300 rounded-md p-2 text-center bg-white">
//                 <p className="text-gray-500 mb-2">
//                   {watch("file")?.[0]?.name || "CLICK TO UPLOAD OR DRAG & DROP"}
//                 </p>
//                 <input
//                   type="file"
//                   {...register("file", {
//                     required: "Please upload a file",
//                   })}
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
//                   id="file-upload"
//                 />
//                 {errors.file && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.file.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </>
//         )}

//             <div className="mb-6">
//               <label className="block text-gray-700 font-semibold mb-2">
//                 WHAT TYPE OF EVIDENCE ARE YOU SUBMITTING?
//               </label>
//               <select
//                 {...register("evidenceType", {
//                   required: "This field is required",
//                 })}
//                 className={`mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 ${
//                   errors.evidenceType ? "border-red-500" : ""
//                 }`}
//               >
//                 <option value="" disabled>
//                   Select an option
//                 </option>
//                 <option value="buddy">
//                   Buddy Statements (Statements from friends or family verifying stressors and conditions)
//                 </option>
//                 <option value="police">
//                   Police/Incident Reports (Including victim reports)
//                 </option>
//                 <option value="news">News Articles</option>
//                 <option value="medical">Medical Records</option>
//               </select>
//               {errors.evidenceType && (
//                 <span className="text-red-500 text-sm mt-1">
//                   {errors.evidenceType.message}
//                 </span>
//               )}
//             </div>

//         <div className="flex flex-col justify-center gap-5 mx-auto">
//           <Link
//             to="/progress"
//             className="btn bg-[#B31942] border-gray-400 py-2 text-white text-center font-semibold rounded-md"
//           >
//             Continue
//           </Link>
//           <button
//             type="submit"
//             className="btn text-[#001F3F] font-semibold border border-[#001F3F] py-2 rounded-md"
//           >
//             Back
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EvidenceForm;