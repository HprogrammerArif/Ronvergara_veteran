import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function AgentOrangeLocationsForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      locations: {
        thailand: false,
        republicOfVietnam: false,
        laos: false,
        cambodia: false,
        guamOrAmericanSamoa: false,
        johnstonAtoll: false,
        koreanDMZ: false,
        c123Aircraft: false,
      },
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center md:p-4 p-2 pt-32 md:mt-10">
      <div className="w-full max-w-4xl md:bg-white md:shadow-md rounded-lg md:p-6">
        <h1 className="md:text-2xl text-lg font-bold text-blue-800 mb-6 text-center">
          Did you serve in any of the below herbicide (Agent Orange) hazard locations? 
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Checkboxes for locations */}
          <div className="grid grid-cols-1 gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.thailand')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Thailand (Any U.S. or Royal Thai Base)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.republicOfVietnam')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Republic of Vietnam, Including 12 Nautical Miles of Territorial Waters</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.laos')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Laos</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.cambodia')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Cambodia (Mimot, Krek, Kampong Cham Province)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.guamOrAmericanSamoa')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Guam or American Samoa (Including Territorial Waters)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.johnstonAtoll')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Johnston Atoll or Any Ship That Visited Johnston Atoll</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.koreanDMZ')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Korean Demilitarized Zone (DMZ)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.c123Aircraft')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">C-123 Aircraft Used For Herbicide Spraying Operations (Air Force and Air Force Reserves)</span>
            </label>
          </div>

          {/* Buttons */}
            <div className="flex justify-center gap-10 md:mt-6 md:pt-10 mt-10 pt-10  pb-10 md:pb-0">
                               <button>
                                <Link
                               to="/toxin_exposure"
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

export default AgentOrangeLocationsForm;