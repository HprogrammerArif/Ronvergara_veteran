import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

function GulfWarLocationsForm() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      locations: {
        iraq: false,
        kuwait: false,
        saudiArabia: false,
        saudiNeutralZone: false,
        bahrain: false,
        qatar: false,
        unitedArabEmirates: false,
        persianGulf: false,
        israel: false,
        egypt: false,
        turkey: false,
        syria: false,
        jordan: false,
        djibouti: false,
        uzbekistan: false,
        arabianSea: false,
        oman: false,
        yemen: false,
        lebanon: false,
        somalia: false,
        afghanistan: false,
        gulfOfAden: false,
        gulfOfOman: false,
        redSea: false,
      },
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate('/agent_location')
 
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center md:p-4 p-2 md:pt-32 pt-28">
      <div className="w-full max-w-5xl h-full md:bg-white md:shadow-md border md:border-none rounded-lg md:p-6">
        <h1 className="md:text-2xl text-lg font-bold text-blue-800 mb-6 text-center">
          Have you worked in the following Gulf War-risk locations?
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Checkboxes for locations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:mt-20 mt-10">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.iraq')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Iraq</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.kuwait')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Kuwait</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.saudiArabia')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Saudi Arabia</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.saudiNeutralZone')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Saudi Neutral Zone</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.bahrain')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Bahrain</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.qatar')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Qatar</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.unitedArabEmirates')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">United Arab Emirates</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.persianGulf')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Persian Gulf</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.israel')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Israel</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.egypt')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Egypt</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.turkey')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Turkey</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.syria')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Syria</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.jordan')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Jordan</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.djibouti')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Djibouti</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.uzbekistan')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Uzbekistan</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.arabianSea')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Arabian Sea</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.oman')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Oman</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.yemen')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Yemen</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.lebanon')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Lebanon</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.somalia')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Somalia</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.afghanistan')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Afghanistan</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.gulfOfAden')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Gulf Of Aden</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.gulfOfOman')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Gulf Of Oman</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('locations.redSea')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-blue-800">Red Sea</span>
            </label>
          </div>

          {/* Buttons */}
       <div className="flex justify-center gap-10 md:mt-6 md:pt-10 mt-10 pt-10  pb-10 md:pb-0">
                     <button>
                      <Link
                    //  to="/agent_location"
                    onClick={handleSubmit(onSubmit)}
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

export default GulfWarLocationsForm;