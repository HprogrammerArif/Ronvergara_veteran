


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Auto_Narative = () => {
//   const [step, setStep] = useState('start');
//   const [letterDate, setLetterDate] = useState('');
//   const [conditions, setConditions] = useState('');
//   const [ratings, setRatings] = useState('');
//   const [intentDate, setIntentDate] = useState('');
//   const [submittedOtherItems, setSubmittedOtherItems] = useState('');
//   const navigate = useNavigate();

//   const handleFirstDropdown = (e) => {
//     const value = e.target.value;
//     if (value === 'yes') setStep('yesFlowStart');
//     else if (value === 'no') setStep('noFlowStart');
//   };

//   const handleYesFlowStart = (e) => {
//     const value = e.target.value;
//     if (value === 'yes') setStep('letterDetails');
//     else if (value === 'no') setStep('ratingsDetails');
//   };

//   const handleNoFlowStart = (e) => {
//     const value = e.target.value;
//     if (value === 'yes') setStep('intentDetails');
//     else if (value === 'no') setStep('startNow');
//   };

//   const handleNext = () => {
//     navigate('/video');
//   };

//   return (
//     <div className="min-h-screen bg-[#0B1E35] text-white flex justify-center items-center p-6">
//       <div className="bg-white text-black p-6 rounded shadow-md w-full max-w-xl space-y-4">

//         {step === 'start' && (
//           <>
//             <h2 className="text-xl font-semibold">Have you ever applied for VA benefits?</h2>
//             <select onChange={handleFirstDropdown} className="w-full p-2 border rounded">
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
//             <select onChange={handleYesFlowStart} className="w-full p-2 border rounded">
//               <option value="">Select</option>
//               <option value="yes">YES</option>
//               <option value="no">NO</option>
//             </select>
//           </>
//         )}

//         {step === 'letterDetails' && (
//           <>
//             <h2 className="text-xl font-semibold">What is the date of that letter?</h2>
//             <input
//               type="date"
//               className="w-full p-2 border rounded"
//               value={letterDate}
//               onChange={(e) => setLetterDate(e.target.value)}
//             />

//             <h2 className="text-xl font-semibold mt-4">
//               What are the conditions listed in this recent letter and what were they rated at?
//             </h2>
//             <textarea
//               className="w-full p-2 border rounded"
//               rows="4"
//               placeholder="Enter conditions and ratings..."
//               value={conditions}
//               onChange={(e) => setConditions(e.target.value)}
//             />

//             <button
//               onClick={handleNext}
//               className="mt-6 bg-pink-600 text-white px-6 py-2 rounded"
//             >
//               NEXT
//             </button>
//           </>
//         )}

//         {step === 'ratingsDetails' && (
//           <>
//             <h2 className="text-xl font-semibold">
//               What are your current ratings and when were they rated? (Exact dates if possible)
//             </h2>
//             <textarea
//               className="w-full p-2 border rounded"
//               rows="4"
//               placeholder="Enter rating info..."
//               value={ratings}
//               onChange={(e) => setRatings(e.target.value)}
//             />

//             <h2 className="text-xl font-semibold mt-4">What is the date of that letter?</h2>
//             <input
//               type="date"
//               className="w-full p-2 border rounded"
//               value={letterDate}
//               onChange={(e) => setLetterDate(e.target.value)}
//             />

//             <button
//               onClick={handleNext}
//               className="mt-6 bg-pink-600 text-white px-6 py-2 rounded"
//             >
//               NEXT
//             </button>
//           </>
//         )}

//         {/* ========== NO PART ========== */}
//         {step === 'noFlowStart' && (
//           <>
//             <h2 className="text-xl font-semibold">Do you have an active intent to file?</h2>
//             <select onChange={handleNoFlowStart} className="w-full p-2 border rounded">
//               <option value="">Select</option>
//               <option value="yes">YES</option>
//               <option value="no">NO</option>
//             </select>
//           </>
//         )}

//         {step === 'intentDetails' && (
//           <>
//             <h2 className="text-xl font-semibold">What date was your intent to file submitted?</h2>
//             <input
//               type="date"
//               className="w-full p-2 border rounded"
//               value={intentDate}
//               onChange={(e) => setIntentDate(e.target.value)}
//             />

//             <h2 className="text-xl font-semibold mt-4">Did you submit anything else with your intent?</h2>
//             <select className="w-full p-2 border rounded">
//               <option value="">Select</option>
//               <option value="yes">YES</option>
//               <option value="no">NO</option>
//             </select>

//             <h2 className="text-xl font-semibold mt-4">Please list any other items submitted:</h2>
//             <textarea
//               className="w-full p-2 border rounded"
//               rows="4"
//               placeholder="List items submitted..."
//               value={submittedOtherItems}
//               onChange={(e) => setSubmittedOtherItems(e.target.value)}
//             />

//             <button
//               onClick={handleNext}
//               className="mt-6 bg-pink-600 text-white px-6 py-2 rounded"
//             >
//               NEXT
//             </button>
//           </>
//         )}

//         {step === 'startNow' && (
//           <>
//             <h2 className="text-xl font-semibold">Perfect! Let’s get started.</h2>
//             <button
//               onClick={handleNext}
//               className="mt-6 bg-pink-600 text-white px-6 py-2 rounded"
//             >
//               NEXT
//             </button>
//           </>
//         )}
//       </div>
//     </div>
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
    console.log("💾 Form Data:", data);
    // Save to localStorage or backend here
    navigate('/video');
  };

  const applied = watch('applied');
  const hasLetter = watch('hasLetter');
  const hasIntent = watch('hasIntent');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-h-screen bg-[#0B1E35] text-white flex justify-center items-center p-6">
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

        {/* ========== YES PART ========== */}
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
          </>
        )}

        {step === 'letterDetails' && (
          <>
            <h2 className="text-xl font-semibold">What is the date of that letter?</h2>
            <input type="date" {...register("letterDate")} className="w-full p-2 border rounded" />

            <h2 className="text-xl font-semibold mt-4">
              What are the conditions listed in this recent letter and what were they rated at?
            </h2>
            <textarea {...register("conditionsListed")} className="w-full p-2 border rounded" rows="4" />

            <button type="submit" className="mt-6 bg-pink-600 text-white px-6 py-2 rounded">
              NEXT
            </button>
          </>
        )}

        {step === 'ratingsDetails' && (
          <>
            <h2 className="text-xl font-semibold">
              What are your current ratings and when were they rated? (Exact dates if possible)
            </h2>
            <textarea {...register("currentRatings")} className="w-full p-2 border rounded" rows="4" />

            <h2 className="text-xl font-semibold mt-4">What is the date of that letter?</h2>
            <input type="date" {...register("ratingsLetterDate")} className="w-full p-2 border rounded" />

            <button type="submit" className="mt-6 bg-pink-600 text-white px-6 py-2 rounded">
              NEXT
            </button>
          </>
        )}

        {/* ========== NO PART ========== */}
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

            <button type="submit" className="mt-6 bg-pink-600 text-white px-6 py-2 rounded">
              NEXT
            </button>
          </>
        )}

        {step === 'startNow' && (
          <>
            <h2 className="text-xl font-semibold">Perfect! Let’s get started.</h2>
            <button type="submit" className="mt-6 bg-pink-600 text-white px-6 py-2 rounded">
              NEXT
            </button>
          </>
        )}
      </div>
    </form>
  );
};

export default Auto_Narative;
