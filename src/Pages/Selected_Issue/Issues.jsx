// import React from 'react';

// import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';

// function Issues() {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       conditions: {}, // Initialize conditions as an object for checkboxes
//     },
//   });
//   const [submittedData, setSubmittedData] = React.useState(null);

//   const onSubmit = (data) => {
//     // Check if at least one condition is selected
//     const selectedConditions = Object.keys(data.conditions).filter(
//       (key) => data.conditions[key]
//     );
//     if (selectedConditions.length === 0) {
//       alert('Please select at least one condition.');
//       return;
//     }

//     console.log(data);
//     setSubmittedData(data);
//     alert('Form submitted successfully!');
//   };

//   const conditionsList = [
//     'PTSD',
//     'Prostrating Migraines',
//     'Diabetes',
//     'Depression',
//     'Traumatic Brain Injury',
//     'Cancer',
//     'Anxiety',
//     'Neck Condition',
//     'Hip Condition',
//     'Insomnia',
//     'Shoulder Condition',
//     'Elbow Condition',
//     'Rhinitis',
//     'Head Injury',
//     'Wrist Condition',
//     'Sinusitis',
//     'Tinnitus',
//     'Nerve Damage',
//     'Mid Back Condition',
//     'Knee Condition',
//     'Foot Condition',
//     'Low Back Condition',
//     'Leg Condition',
//     'Flat Feet',
//     'Hip Condition',
//     'Arm Condition',
//     'High Blood Pressure',
//     'Plantar Fasciitis',
//     'Ankle Condition',
//     'Hammer Toes',
//     'Ingrown Toenails',
//     'Radiculopathy of Upper Extremities',
//     'GERD (Acid Reflux)',
//     'IBS (Irritable Bowel Syndrome)',
//     'Sciatica',
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
//       <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
//         {/* Heading */}
//         <h1 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">
//           What condition(s) do you want to start a claim for?
//         </h1>

//         {/* Description */}
//         <p className="text-sm text-gray-600 mb-6">
//           You can choose multiple conditions. We recommend starting with mental health conditions
//           as they may be linked to other conditions. We'll guide you through the next steps once you
//           make your selection.
//         </p>

//         {/* Form with Checkboxes */}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {/* Checkbox List */}
//             {conditionsList.map((condition, index) => (
//               <div key={index} className="flex items-center">
//                 <input
//                   type="checkbox"
//                   {...register(`conditions.${condition}`)} // Register each checkbox under conditions object
//                   className="checkbox checkbox-primary mr-2"
//                 />
//                 <label className="text-sm text-gray-700">{condition}</label>
//               </div>
//             ))}
//           </div>

//           {/* Error Message for Validation */}
//           {errors.conditions && (
//             <span className="text-red-500 text-sm">
//               {errors.conditions.message || 'Please select at least one condition.'}
//             </span>
//           )}

//           {/* Buttons */}
//           <div className="flex w-1/3 mx-auto justify-end  space-x-4 mt-10 pt-10">
//           <Link
//             to="/issue_details"
//               type="submit"
//               className="w-full bg-[#B31942] text-white py-2 px-4 rounded-md hover:bg-[#aa2b4d] font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500  basis-6/12 flex items-center justify-center"
//             >
//               Back
//             </Link>
//             <Link
//             to="/issue_details"
//               type="submit"
//               className="w-full bg-[#B31942] text-white py-2 px-4 rounded-md hover:bg-[#aa2b4d] font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500  basis-6/12"
//             >
//               Continue
//             </Link>
//           </div>
//         </form>

      
//         {submittedData && (
//           <div className="mt-6 p-4 bg-gray-100 rounded-md">
//             <h2 className="text-lg font-bold text-blue-900 mb-4">Submitted Conditions:</h2>
//             <pre className="whitespace-pre-wrap">
//               {JSON.stringify(submittedData, null, 2)}
//             </pre>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Issues;



import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';

function Issues() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      conditions: {},
    },
  });
  const [submittedData, setSubmittedData] = React.useState(null);
  const navigate = useNavigate(); // Use navigate for dynamic routing

  const onSubmit = (data) => {
    const selectedConditions = Object.keys(data.conditions).filter(
      (key) => data.conditions[key]
    );
    if (selectedConditions.length === 0) {
      alert('Please select at least one condition.');
      return;
    }

    console.log(data);
    setSubmittedData(data);

    // Navigate to IssueDetailsForm with selected conditions
    navigate('/issue_details', { state: { selectedConditions } });
  };

  const conditionsList = [
    'PTSD',
    'Prostrating Migraines',
    'Diabetes',
    'Depression',
    'Traumatic Brain Injury',
    'Cancer',
    'Anxiety',
    'Neck Condition',
    'Hip Condition',
    'Insomnia',
    'Shoulder Condition',
    'Elbow Condition',
    'Rhinitis',
    'Head Injury',
    'Wrist Condition',
    'Sinusitis',
    'Tinnitus',
    'Nerve Damage',
    'Mid Back Condition',
    'Knee Condition',
    'Foot Condition',
    'Low Back Condition',
    'Leg Condition',
    'Flat Feet',
    'Hip Condition',
    'Arm Condition',
    'High Blood Pressure',
    'Plantar Fasciitis',
    'Ankle Condition',
    'Hammer Toes',
    'Ingrown Toenails',
    'Radiculopathy of Upper Extremities',
    'GERD (Acid Reflux)',
    'IBS (Irritable Bowel Syndrome)',
    'Sciatica',
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">
          What condition(s) do you want to start a claim for?
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          You can choose multiple conditions. We recommend starting with mental health conditions
          as they may be linked to other conditions. We'll guide you through the next steps once you
          make your selection.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {conditionsList.map((condition, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  {...register(`conditions.${condition}`)}
                  className="checkbox checkbox-primary mr-2"
                />
                <label className="text-sm text-gray-700">{condition}</label>
              </div>
            ))}
          </div>

          {errors.conditions && (
            <span className="text-red-500 text-sm">
              {errors.conditions.message || 'Please select at least one condition.'}
            </span>
          )}

          <div className="flex w-1/3 mx-auto justify-end space-x-4 mt-10 pt-10">
            <Link
              to="/issue_details"
              className="w-full bg-[#B31942] text-white py-2 px-4 rounded-md hover:bg-[#aa2b4d] font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 basis-6/12 flex items-center justify-center"
            >
              Back
            </Link>
            <button
              type="submit"
              className="w-full bg-[#B31942] text-white py-2 px-4 rounded-md hover:bg-[#aa2b4d] font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 basis-6/12"
            >
              Continue
            </button>
          </div>
        </form>

        {submittedData && (
          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <h2 className="text-lg font-bold text-blue-900 mb-4">Submitted Conditions:</h2>
            <pre className="whitespace-pre-wrap">{JSON.stringify(submittedData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default Issues;