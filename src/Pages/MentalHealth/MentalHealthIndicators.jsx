// import React from 'react';

// import mentalLogo from "../../assets/mental_health_logo.png";
// import { Link } from 'react-router-dom';
// import { useForm } from 'react-hook-form';

// const MentalHealthIndicators = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       indicators: {} 
//     }
//   });

//   const onSubmit = (data) => {
//     console.log(data); 
//   };

//   const indicatorQuestions = [
//     "Did You Have Any Increased Visits To A Medical Professional? Any Counseling Or Mental Health Services?",
//     "Did You Request For A Change In Occupational Series Or Duty Assignment?",
//     "Did You Ever Have Increased Or Decreased Use Of Leave?",
//     "Any Changes In Your Performance Or Performance Evaluations?",
//     "Did You Have Episodes Of Depression, Panic Attacks, Or Anxiety?",
//     "Any Increased Use Of Prescription Medications, Over-The-Counter Medications, Drugs, Or Alcohol?",
//     "Any Disciplinary Or Legal Difficulties?",
//     "Any Pregnancy Tests Or Tests For STDs/STIs?",
//     "Any Economic Or Social Behavior Changes? Isolating Yourself Or Withdrawing From Others?",
//     "Any Changes Or Breakups Of A Significant Relationship?"
//   ];

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-24 pb-10 mt-10">
//       <div className="md:p-6 p-2 rounded-lg w-full max-w-4xl  flex flex-col justify-between ">
//         {/* Header Section (Centered Image and Text) */}
//         <div className="bg-[#002B5C] w-full rounded-lg p-6 mb-6 flex flex-col items-center">
//                  <div className="w-52 h-52 bg-purple-600 rounded-full flex items-center justify-center mb-3">
//                    <img src={mentalLogo} alt="Mental Health Logo" className="w-32 h-32 object-cover" />
//                  </div>
//                  <h1 className="text-white text-2xl font-medium mt-2">Mental Health</h1>
//                </div>

//         {/* Form Section */}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex-grow">
//           {indicatorQuestions.map((question, index) => (
//             <div
//               key={index}
//               className="p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
//             >
//               <label className="block text-lg font-medium text-gray-700">
//                 {question}
//                 <div className="mt-1 flex items-center space-x-4">
//                   {/* Help Icon (Pink Circle with 'H') - Positioned as shown in the image */}
                 
//                   <div className="flex items-center">
//                     <input
//                       type="radio"
//                       {...register(`indicators.question${index}`, { required: "Please select Yes or No" })}
//                       value="yes"
//                       className={`w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 ${errors.indicators?.[`question${index}`] ? 'border-red-500' : ''}`}
//                     />
//                     <span className="ml-2">Yes</span>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       type="radio"
//                       {...register(`indicators.question${index}`, { required: "Please select Yes or No" })}
//                       value="no"
//                       className={`w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 ${errors.indicators?.[`question${index}`] ? 'border-red-500' : ''}`}
//                     />
//                     <span className="ml-2">No</span>
//                   </div>
//                 </div>
//                 {errors.indicators?.[`question${index}`] && (
//                   <span className="text-red-500 text-sm">{errors.indicators[`question${index}`].message}</span>
//                 )}
//               </label>
//             </div>
//           ))}
//             {/* Buttons Section (At the Bottom) */}
//            <button className="mt-4 w-full mx-auto text-center">
//                   <Link
//                   to="/migraine"
//                     type="submit"
//                     className="bg-[#B31942] mx-auto text-white px-6 py-2 rounded-md hover:bg-[#aa2b4d]  focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
//                   >
//                     Continue
//                   </Link>
               
//                 </button>
//         </form>

      
//       </div>
//     </div>
//   );
// };

// export default MentalHealthIndicators;




// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import mentalLogo from "../../assets/mental_health_logo.png";
// import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';

// const MentalHealthIndicators = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       indicators: {},
//     }
//   });

//   const navigate = useNavigate();
//   const selectedCategories = useSelector((state) => state.issueSlice.selectedCategories);

//   const onSubmit = (data) => {
//     console.log(data); 

//     // After submission, navigate based on selected categories
//     if (selectedCategories && selectedCategories.includes("Body Health")) {
//       // If Body Health is selected, redirect to the Body Health page
//       navigate('/body_health_static');  // Redirect to Body Health page
//     } else {
//       // If only Mental Health is selected, navigate to final page (or next page)
//       navigate('/final_page');  // Final page or next step
//     }
//   };

//   const indicatorQuestions = [
//     "Did You Have Any Increased Visits To A Medical Professional? Any Counseling Or Mental Health Services?",
//     "Did You Request For A Change In Occupational Series Or Duty Assignment?",
//     "Did You Ever Have Increased Or Decreased Use Of Leave?",
//     "Any Changes In Your Performance Or Performance Evaluations?",
//     "Did You Have Episodes Of Depression, Panic Attacks, Or Anxiety?",
//     "Any Increased Use Of Prescription Medications, Over-The-Counter Medications, Drugs, Or Alcohol?",
//     "Any Disciplinary Or Legal Difficulties?",
//     "Any Pregnancy Tests Or Tests For STDs/STIs?",
//     "Any Economic Or Social Behavior Changes? Isolating Yourself Or Withdrawing From Others?",
//     "Any Changes Or Breakups Of A Significant Relationship?"
//   ];

//   useEffect(() => {
//     // Log to check the state value
//     console.log("Selected Categories:", selectedCategories);
//   }, [selectedCategories]);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-24 pb-10 mt-10">
//       <div className="md:p-6 p-2 rounded-lg w-full max-w-4xl flex flex-col justify-between">
//         <div className="bg-[#002B5C] w-full rounded-lg p-6 mb-6 flex flex-col items-center">
//           <div className="w-52 h-52 bg-purple-600 rounded-full flex items-center justify-center mb-3">
//             <img src={mentalLogo} alt="Mental Health Logo" className="w-32 h-32 object-cover" />
//           </div>
//           <h1 className="text-white text-2xl font-medium mt-2">Mental Health</h1>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex-grow">
//           {indicatorQuestions.map((question, index) => (
//             <div key={index} className="p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-sm">
//               <label className="block text-lg font-medium text-gray-700">
//                 {question}
//                 <div className="mt-1 flex items-center space-x-4">
//                   <div className="flex items-center">
//                     <input
//                       type="radio"
//                       {...register(`indicators.question${index}`, { required: "Please select Yes or No" })}
//                       value="yes"
//                       className={`w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 ${errors.indicators?.[`question${index}`] ? 'border-red-500' : ''}`}
//                     />
//                     <span className="ml-2">Yes</span>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       type="radio"
//                       {...register(`indicators.question${index}`, { required: "Please select Yes or No" })}
//                       value="no"
//                       className={`w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 ${errors.indicators?.[`question${index}`] ? 'border-red-500' : ''}`}
//                     />
//                     <span className="ml-2">No</span>
//                   </div>
//                 </div>
//                 {errors.indicators?.[`question${index}`] && (
//                   <span className="text-red-500 text-sm">{errors.indicators[`question${index}`].message}</span>
//                 )}
//               </label>
//             </div>
//           ))}
//           <button type="submit" className="mt-4 w-full mx-auto text-center">
//             <Link
//               // to="/migraine"
//               type="submit"
//               className="bg-[#B31942] mx-auto text-white px-6 py-2 rounded-md hover:bg-[#aa2b4d]  focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
//             >
//               Continue
//             </Link>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MentalHealthIndicators;



import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import mentalLogo from "../../assets/mental_health_logo.png";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const MentalHealthIndicators = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      indicators: {},
    }
  });

  const navigate = useNavigate();
  const selectedCategories = useSelector((state) => state.issueSlice.selectedCategories); // Accessing the selected categories from the Redux state

  const onSubmit = (data) => {
    console.log(data); 

    // Find out the current category index in the selectedCategories list
    const currentCategoryIndex = selectedCategories.indexOf("Mental Health");

    // If Body Health is next in the selected categories, redirect to Body Health
    if (currentCategoryIndex !== -1 && selectedCategories[currentCategoryIndex + 1]) {
      const nextCategory = selectedCategories[currentCategoryIndex + 1];

      // Redirect to the next category page dynamically
      if (nextCategory === "Body Health") {
        navigate('/service_details');  // Redirect to Body Health page
      }
      else if (nextCategory === "Migraine") {
        navigate('/migraine');  // Redirect to Migraine page
      }
      else if(nextCategory==="Sinusitis, Rhinitis & Asthma Claim Information"){
        navigate ('/sinusitis_form')}
        else if(nextCategory==="Gastrointestinal Issues (GERD/IBS) Claim Information"){
          navigate ('/gastrointestinal_form')}
          else if (nextCategory==="Tinnitus and Hearing Loss Claim Information"){
            navigate('/tinnitus_hearing_loss')
          }
      else {
        navigate('/final_page'); // Redirect to a final page or last step
      }
    }
  };



 

  const indicatorQuestions = [
    "Did You Have Any Increased Visits To A Medical Professional? Any Counseling Or Mental Health Services?",
    "Did You Request For A Change In Occupational Series Or Duty Assignment?",
    "Did You Ever Have Increased Or Decreased Use Of Leave?",
    "Any Changes In Your Performance Or Performance Evaluations?",
    "Did You Have Episodes Of Depression, Panic Attacks, Or Anxiety?",
    "Any Increased Use Of Prescription Medications, Over-The-Counter Medications, Drugs, Or Alcohol?",
    "Any Disciplinary Or Legal Difficulties?",
    "Any Pregnancy Tests Or Tests For STDs/STIs?",
    "Any Economic Or Social Behavior Changes? Isolating Yourself Or Withdrawing From Others?",
    "Any Changes Or Breakups Of A Significant Relationship?"
  ];

  useEffect(() => {
    // Log to check the state value
    console.log("Selected Categories:", selectedCategories);
  }, [selectedCategories]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-24 pb-10 mt-10">
      <div className="md:p-6 p-2 rounded-lg w-full max-w-4xl flex flex-col justify-between">
        <div className="bg-[#002B5C] w-full rounded-lg p-6 mb-6 flex flex-col items-center">
          <div className="w-52 h-52 bg-purple-600 rounded-full flex items-center justify-center mb-3">
            <img src={mentalLogo} alt="Mental Health Logo" className="w-32 h-32 object-cover" />
          </div>
          <h1 className="text-white text-2xl font-medium mt-2">Mental Health</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex-grow">
          {indicatorQuestions.map((question, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-sm">
              <label className="block text-lg font-medium text-gray-700">
                {question}
                <div className="mt-1 flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      {...register(`indicators.question${index}`, { required: "Please select Yes or No" })}
                      value="yes"
                      className={`w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 ${errors.indicators?.[`question${index}`] ? 'border-red-500' : ''}`}
                    />
                    <span className="ml-2">Yes</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      {...register(`indicators.question${index}`, { required: "Please select Yes or No" })}
                      value="no"
                      className={`w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 ${errors.indicators?.[`question${index}`] ? 'border-red-500' : ''}`}
                    />
                    <span className="ml-2">No</span>
                  </div>
                </div>
                {errors.indicators?.[`question${index}`] && (
                  <span className="text-red-500 text-sm">{errors.indicators[`question${index}`].message}</span>
                )}
              </label>
            </div>
          ))}
          <button type="submit" className="mt-4 w-full mx-auto text-center">
            <Link
              type="submit"
              className="bg-[#B31942] mx-auto text-white px-6 py-2 rounded-md hover:bg-[#aa2b4d]  focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
            >
              Continue
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default MentalHealthIndicators;
