

// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';

// const Auto_Narative = () => {
//   const { register, handleSubmit, watch } = useForm();
//   const [step, setStep] = useState('start');
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     console.log("💾 Form Data:", data);
//     // Save to localStorage or backend here
//     navigate('/video');
//   };

//   const applied = watch('applied');
//   const hasLetter = watch('hasLetter');
//   const hasIntent = watch('hasIntent');

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="min-h-screen bg-[#0B1E35] text-white flex justify-center items-center p-6">
//       <div className="bg-white text-black p-6 rounded shadow-md w-full max-w-xl space-y-4">

//         {step === 'start' && (
//           <>
//             <h2 className="text-xl font-semibold">Have you ever applied for VA benefits?</h2>
//             <select {...register("applied")} onChange={(e) => {
//               if (e.target.value === 'yes') setStep('yesFlowStart');
//               else if (e.target.value === 'no') setStep('noFlowStart');
//             }} className="w-full p-2 border rounded">
//               <option value="">Select</option>
//               <option value="yes">YES</option>
//               <option value="no">NO</option>
//             </select>
//           </>
//         )}

//         {/* ========== YES PART ========== */}
//         {step === 'yesFlowStart' && (
//           <>
//             <h2 className="text-xl font-semibold">Do you have a decision letter within the past year?</h2>
//             <select {...register("hasLetter")} onChange={(e) => {
//               if (e.target.value === 'yes') setStep('letterDetails');
//               else if (e.target.value === 'no') setStep('ratingsDetails');
//             }} className="w-full p-2 border rounded">
//               <option value="">Select</option>
//               <option value="yes">YES</option>
//               <option value="no">NO</option>
//             </select>
//           </>
//         )}

//         {step === 'letterDetails' && (
//           <>
//             <h2 className="text-xl font-semibold">What is the date of that letter?</h2>
//             <input type="date" {...register("letterDate")} className="w-full p-2 border rounded" />

//             <h2 className="text-xl font-semibold mt-4">
//               What are the conditions listed in this recent letter and what were they rated at?
//             </h2>
//             <textarea {...register("conditionsListed")} className="w-full p-2 border rounded" rows="4" />

//             <button type="submit" className="mt-6 bg-pink-600 text-white px-6 py-2 rounded">
//               NEXT
//             </button>
//           </>
//         )}

//         {step === 'ratingsDetails' && (
//           <>
//             <h2 className="text-xl font-semibold">
//               What are your current ratings and when were they rated? (Exact dates if possible)
//             </h2>
//             <textarea {...register("currentRatings")} className="w-full p-2 border rounded" rows="4" />

//             <h2 className="text-xl font-semibold mt-4">What is the date of that letter?</h2>
//             <input type="date" {...register("ratingsLetterDate")} className="w-full p-2 border rounded" />

//             <button type="submit" className="mt-6 bg-pink-600 text-white px-6 py-2 rounded">
//               NEXT
//             </button>
//           </>
//         )}

//         {/* ========== NO PART ========== */}
//         {step === 'noFlowStart' && (
//           <>
//             <h2 className="text-xl font-semibold">Do you have an active intent to file?</h2>
//             <select {...register("hasIntent")} onChange={(e) => {
//               if (e.target.value === 'yes') setStep('intentDetails');
//               else if (e.target.value === 'no') setStep('startNow');
//             }} className="w-full p-2 border rounded">
//               <option value="">Select</option>
//               <option value="yes">YES</option>
//               <option value="no">NO</option>
//             </select>
//           </>
//         )}

//         {step === 'intentDetails' && (
//           <>
//             <h2 className="text-xl font-semibold">What date was your intent to file submitted?</h2>
//             <input type="date" {...register("intentDate")} className="w-full p-2 border rounded" />

//             <h2 className="text-xl font-semibold mt-4">Did you submit anything else with your intent?</h2>
//             <select {...register("submittedOthers")} className="w-full p-2 border rounded">
//               <option value="">Select</option>
//               <option value="yes">YES</option>
//               <option value="no">NO</option>
//             </select>

//             <h2 className="text-xl font-semibold mt-4">Please list any other items submitted:</h2>
//             <textarea {...register("otherItemsListed")} className="w-full p-2 border rounded" rows="4" />

//             <button type="submit" className="mt-6 bg-pink-600 text-white px-6 py-2 rounded">
//               NEXT
//             </button>
//           </>
//         )}

//         {step === 'startNow' && (
//           <>
//             <h2 className="text-xl font-semibold">Perfect! Let’s get started.</h2>
//             <button type="submit" className="mt-6 bg-pink-600 text-white px-6 py-2 rounded">
//               NEXT
//             </button>
//           </>
//         )}
//       </div>
//     </form>
//   );
// };

// export default Auto_Narative;



import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Auto_Narative = () => {
  const { register, handleSubmit, watch } = useForm();
  const [step, setStep] = useState('start');
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("\u{1F4BE} Form Data:", data);
    navigate('/video');
  };

  // Watchers for live changes
  const applied = watch('applied');
  const hasLetter = watch('hasLetter');
  const hasIntent = watch('hasIntent');

  const goBack = () => {
    if (step === 'yesFlowStart') setStep('start');
    else if (step === 'letterDetails' || step === 'ratingsDetails') setStep('yesFlowStart');
    else if (step === 'noFlowStart') setStep('start');
    else if (step === 'intentDetails') setStep('noFlowStart');
    else if (step === 'startNow') setStep('noFlowStart');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-h-screen bg-[#0A3161] text-white flex justify-center items-center p-6">
      <div className="bg-white text-black p-6 rounded shadow-md w-full max-w-xl space-y-4">

        {step === 'start' && (
          <>
            <h2 className="text-xl font-semibold">Have you ever applied for VA benefits?</h2>
            <select {...register("applied")} onChange={(e) => {
              if (e.target.value === 'yes') setStep('yesFlowStart');
              else if (e.target.value === 'no') setStep('noFlowStart');
            }} className="w-full p-2 border rounded">
              <option value="">Select</option>
              <option value="yes">YES</option>
              <option value="no">NO</option>
            </select>
          </>
        )}

        {/* YES Flow */}
        {step === 'yesFlowStart' && (
          <>
            <h2 className="text-xl font-semibold">Do you have a decision letter within the past year?</h2>
            <select {...register("hasLetter")} onChange={(e) => {
              if (e.target.value === 'yes') setStep('letterDetails');
              else if (e.target.value === 'no') setStep('ratingsDetails');
            }} className="w-full p-2 border rounded">
              <option value="">Select</option>
              <option value="yes">YES</option>
              <option value="no">NO</option>
            </select>

            <button type="button" onClick={goBack} className="mt-4 bg-gray-300 text-black px-4 py-2 rounded">Back</button>
          </>
        )}

        {step === 'letterDetails' && (
          <>
            <h2 className="text-xl font-semibold">What is the date of that letter?</h2>
            <input type="date" {...register("letterDate")} className="w-full p-2 border rounded" />

            <h2 className="text-xl font-semibold mt-4">What are the conditions listed in this recent letter and what were they rated at?</h2>
            <textarea {...register("conditionsListed")} className="w-full p-2 border rounded" rows="4" />

            <div className="flex justify-between mt-6">
              <button type="button" onClick={goBack} className="bg-gray-300 text-black px-4 py-2 rounded">Back</button>
              <button type="submit" className="bg-[#B31942] text-white px-6 py-2 rounded">NEXT</button>
            </div>
          </>
        )}

        {step === 'ratingsDetails' && (
          <>
            <h2 className="text-xl font-semibold">What are your current ratings and when were they rated? (Exact dates if possible)</h2>
            <textarea {...register("currentRatings")} className="w-full p-2 border rounded" rows="4" />

            <h2 className="text-xl font-semibold mt-4">What is the date of that letter?</h2>
            <input type="date" {...register("ratingsLetterDate")} className="w-full p-2 border rounded" />

            <div className="flex justify-between mt-6">
              <button type="button" onClick={goBack} className="bg-gray-300 text-black px-4 py-2 rounded">Back</button>
              <button type="submit" className="bg-pink-600 text-white px-6 py-2 rounded">NEXT</button>
            </div>
          </>
        )}

        {/* NO Flow */}
        {step === 'noFlowStart' && (
          <>
            <h2 className="text-xl font-semibold">Do you have an active intent to file?</h2>
            <select {...register("hasIntent")} onChange={(e) => {
              if (e.target.value === 'yes') setStep('intentDetails');
              else if (e.target.value === 'no') setStep('startNow');
            }} className="w-full p-2 border rounded">
              <option value="">Select</option>
              <option value="yes">YES</option>
              <option value="no">NO</option>
            </select>

            <button type="button" onClick={goBack} className="mt-4 bg-gray-300 text-black px-4 py-2 rounded">Back</button>
          </>
        )}

        {step === 'intentDetails' && (
          <>
            <h2 className="text-xl font-semibold">What date was your intent to file submitted?</h2>
            <input type="date" {...register("intentDate")} className="w-full p-2 border rounded" />

            <h2 className="text-xl font-semibold mt-4">Did you submit anything else with your intent?</h2>
            <select {...register("submittedOthers")} className="w-full p-2 border rounded">
              <option value="">Select</option>
              <option value="yes">YES</option>
              <option value="no">NO</option>
            </select>

            <h2 className="text-xl font-semibold mt-4">Please list any other items submitted:</h2>
            <textarea {...register("otherItemsListed")} className="w-full p-2 border rounded" rows="4" />

            <div className="flex justify-between mt-6">
              <button type="button" onClick={goBack} className="bg-gray-300 text-black px-4 py-2 rounded">Back</button>
              <button type="submit" className="bg-pink-600 text-white px-6 py-2 rounded">NEXT</button>
            </div>
          </>
        )}

        {step === 'startNow' && (
          <>
            <h2 className="text-xl font-semibold">Perfect! Let’s get started.</h2>
            <div className="flex justify-between mt-6">
              <button type="button" onClick={goBack} className="bg-gray-300 text-black px-4 py-2 rounded">Back</button>
              <button type="submit" className="bg-pink-600 text-white px-6 py-2 rounded">NEXT</button>
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default Auto_Narative;
