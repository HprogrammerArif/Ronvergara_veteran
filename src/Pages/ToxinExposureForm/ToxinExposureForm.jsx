import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function ToxinExposureForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      exposures: {
        asbestos: false,
        shipboardHazardAndDefense: false,
        mustard: false,
        militaryOccupationalSpecialties: false,
        radiation: false,
        contaminatedWaterCampLejeune: false,
        jetFuel: false,
      },
      otherToxins: '',
      additionalDetails: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center md:p-4 p-2 pt-28 md:mt-14">
      <div className="w-full max-w-2xl md:bg-white md:shadow-md rounded-lg md:p-6">
        <h1 className="md:text-2xl text-xl font-bold text-blue-800 mb-6 text-center">
          Have you been exposed to any of the following? 
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Checkboxes for exposures */}
          <div className="grid grid-cols-1 gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('exposures.asbestos')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Asbestos</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('exposures.shipboardHazardAndDefense')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Shipboard Hazard And Defense (SHAD)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('exposures.mustard')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Mustard </span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('exposures.militaryOccupationalSpecialties')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Military Occupational Specialties (MOS) Related Toxin</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('exposures.radiation')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Radiation</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('exposures.contaminatedWaterCampLejeune')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Contaminated Water At Camp Lejeune</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('exposures.jetFuel')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Jet Fuel</span>
            </label>
          </div>

          {/* Other Toxins Input */}
          <div>
            <label className="block text-sm font-medium text-blue-800 mt-10">
             Please Specify Any Other Toxins You Were Exposed To?
            </label>
            <input  
              type="text"
              {...register('otherToxins')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
          </div>

          {/* Additional Details Textarea */}
          <div>
            <label className="block text-sm font-medium text-blue-800">
              Please provide additional details in the space below
            </label>
            <textarea
              {...register('additionalDetails')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
              rows="4"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-10 md:mt-6 md:pt-10 mt-10 pt-10  pb-10 md:pb-0">
                                       <button>
                                        <Link
                                            to="/confirmation"
                                         type="submit"
                                         className="bg-[#B31942] text-white py-2 px-6 md:px-20 md:w-[200px] w-[150px] rounded-md hover:bg-[#aa2b4d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 font-semibold text-center"
                                       >
                                         Continue
                                       </Link>
                                       </button>
                                       <button
                                         type="button"
                                         className="bg-white text-blue-800 py-2 px-6 md:px-20 md:w-[200px] w-[150px] border border-blue-800 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold"
                                         onClick={() => window.history.back()}
                                       >
                                         Back
                                       </button>
                                     </div>
        </form>
      </div>
    </div>
  );
}

export default ToxinExposureForm;