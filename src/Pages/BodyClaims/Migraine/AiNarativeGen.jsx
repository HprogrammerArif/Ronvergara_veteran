


// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useGenerateNarrationMutation } from '../../../redux/features/baseApi';

// const AiNarrativeGen = () => {
//   const navigate = useNavigate();
//   const [generateNarration, { isLoading, isError, error }] = useGenerateNarrationMutation();
//   const [narrationResult, setNarrationResult] = useState(null); 

//   const handleGenerateNarrative = async () => {
//     try {
//       const excludedKeys = ['access_token', 'refresh_token'];
//       const payload = {};

//       for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i);
//         if (!excludedKeys.includes(key)) {
//           const value = localStorage.getItem(key);
//           try {
//             payload[key] = JSON.parse(value);
//           } catch (e) {
//             console.warn(`Skipping ${key}: Invalid JSON`);
//           }
//         }
//       }

//       const response = await generateNarration(payload).unwrap();
//       console.log('Narration generated successfully:', response?.notation);

//       // ✅ Show response on the page
//       setNarrationResult(response);

//     } catch (err) {
//       console.error('Failed to generate narration:', err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
//         AI Narrative Generation
//       </h2>
//       <p className="text-gray-600 mb-8 text-center max-w-md">
//         Use this page to generate AI-powered narratives. Choose an option below to continue.
//       </p>

//       <div className="flex flex-wrap gap-4 justify-center w-full max-w-2xl">
//         <button
//           type="button"
//           onClick={handleGenerateNarrative}
//           disabled={isLoading}
//           className="w-48 btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold disabled:opacity-50"
//         >
//           {isLoading ? <span className="loading loading-bars loading-lg"></span>
//  : 'Generate Narrative'}
//         </button>

//         <Link
//           to="/progress"
//           className="w-48 btn bg-[#B31942] hover:bg-[#991231] text-white py-2 px-4 rounded-md font-semibold"
//         >
//           Continue
//         </Link>

//         <button
//           type="button"
//           onClick={() => navigate(-1)}
//           className="w-48 btn border border-[#001F3F] text-[#001F3F] hover:bg-gray-100 py-2 px-4 rounded-md font-semibold"
//         >
//           Back
//         </button>
//       </div>

//       {/* Error message */}
//       {isError && (
//         <p className="text-red-500 mt-4">
//           {error?.data?.message || 'An error occurred during generation.'}
//         </p>
//       )}

//       {/* ✅ Narration Output */}
//       {narrationResult && (
//         <div className="mt-10 w-full max-w-4xl bg-gray-100 p-6 rounded shadow-md">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">Generated Narrative</h3>
//           <pre className="whitespace-pre-wrap text-gray-700 text-sm overflow-x-auto">
//             {typeof narrationResult === 'string'
//               ? narrationResult
//               : JSON.stringify(narrationResult, null, 2)}
//           </pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AiNarrativeGen;

import { Link, useNavigate } from 'react-router-dom';
import { useGenerateNarrationMutation } from '../../../redux/features/baseApi';

const AiNarrativeGen = () => {
  const navigate = useNavigate();
  const [generateNarration, { isLoading, isError, error }] = useGenerateNarrationMutation();

  const savedNotation = localStorage.getItem('generatedNotation');
  console.log(savedNotation)

  const handleGenerateNarrative = async () => {
    try {
      const excludedKeys = ['access_token', 'refresh_token'];
      const payload = {};

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!excludedKeys.includes(key)) {
          const value = localStorage.getItem(key);
          try {
            payload[key] = JSON.parse(value);
          } catch (e) {
            console.warn(`Skipping ${key}: Invalid JSON`);
          }
        }
      }

      const response = await generateNarration(payload).unwrap();

      // ✅ Save the generated notation to localStorage
      if (response?.notation) {
        localStorage.setItem('generatedNotation', response.notation);
      }
    } catch (err) {
      console.error('Failed to generate narration:', err);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        AI Narrative Generation
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Use this page to generate AI-powered narratives. Choose an option below to continue.
      </p>

      {/* ✅ Display saved notation above buttons */}
      {savedNotation && (
        <div className="mb-10 w-full max-w-4xl bg-gray-100 p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Generated Narrative</h3>
          <pre className="whitespace-pre-wrap text-gray-700 text-sm overflow-x-auto">
            {savedNotation}
          </pre>
        </div>
      )}

      <div className="flex flex-wrap gap-4 justify-center w-full max-w-2xl">
        <button
          type="button"
          onClick={handleGenerateNarrative}
          disabled={isLoading}
          className="w-48 btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold disabled:opacity-50"
        >
          {isLoading ? (
            <span className="loading loading-bars loading-lg"></span>
          ) : (
            'Generate Narrative'
          )}
        </button>

        <Link
          to="/progress"
          className="w-48 btn bg-[#B31942] hover:bg-[#991231] text-white py-2 px-4 rounded-md font-semibold"
        >
          Continue
        </Link>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-48 btn border border-[#001F3F] text-[#001F3F] hover:bg-gray-100 py-2 px-4 rounded-md font-semibold"
        >
          Back
        </button>
      </div>

      {isError && (
        <p className="text-red-500 mt-4">
          {error?.data?.message || 'An error occurred during generation.'}
        </p>
      )}
    </div>
  );
};

export default AiNarrativeGen;

