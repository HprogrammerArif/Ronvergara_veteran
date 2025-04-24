

import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useVerternInfoMutation } from '../../redux/features/baseApi';

function Veteran_Information() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const [formData, setFormData] = React.useState(null);
  const [verternInfo, {isLoading}] = useVerternInfoMutation()
  const nagivate = useNavigate();

  const onSubmit = async (vaData) => {
    console.log(vaData);
    // setFormData(vaData);
    
    localStorage.setItem('vaDataInfo', JSON.stringify(vaData));

    try {
      const response = await verternInfo(vaData).unwrap();
      console.log(response, "response from server")
      // nagivate('/issues'); 
    } catch (error) {
      console.log("error sending data", error)
    }

  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center md:pb-36 pb-10 md:pt-36 pt-24">
      <div className="w-full max-w-4xl bg-white md:shadow-md rounded-lg md:p-6 p-2">
        <h1 className="md:text-2xl text-lg font-bold text-blue-800 mb-6 text-center">Veteran Information</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* first Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              {...register('veteran_first_name', { required: 'First Name is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
            {errors.veteran_first_name && <span className="text-red-500 text-sm">{errors.veteran_first_name.message}</span>}
          </div>

          {/* last name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              {...register('veteran_last_name', { required: 'Full Name is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
            {errors.veteran_last_name && <span className="text-red-500 text-sm">{errors.veteran_last_name.message}</span>}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              {...register('email_address', { 
                required: 'Email is required', 
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' } 
              })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
            {errors.email_address && <span className="text-red-500 text-sm">{errors.email_address.message}</span>}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              {...register('telephone_number', { required: 'Phone Number is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
            {errors.telephone_number && <span className="text-red-500 text-sm">{errors.telephone_number.message}</span>}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth (YYYY-MM-DD)</label>
            <input
              type="date"
              {...register('veteran_dob', { required: 'Date of Birth is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
            {errors.veteran_dob && <span className="text-red-500 text-sm">{errors.veteran_dob.message}</span>}
          </div>

          {/* Current Physical Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Physical Address</label>
            <input
              {...register('mailing_address_city', { required: 'Address is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
            {errors.mailing_address_city && <span className="text-red-500 text-sm">{errors.mailing_address_city.message}</span>}
          </div>

          {/* Branch of Service */}
          <div>
  <label className="block text-sm font-medium text-gray-700">Branch of Service</label>
  <select
    {...register('branchOfService', 
      // { required: 'Branch of Service is required' }
    )
    }
    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
  >
    <option value="">Select Branch</option>
    <option value="Army">Army</option>
    <option value="Navy">Navy</option>
    <option value="Marine Corps">Marine Corps</option>
    <option value="Air Force">Air Force</option>
    <option value="Coast Guard">Coast Guard</option>
    <option value="Space Force">Space Force</option>
    <option value="NOAA">National Oceanic and Atmospheric Administration (NOAA)</option>
    <option value="USPHS">U.S. Public Health Service (USPHS)</option>
  </select>
  {/* {errors.branchOfService && <span className="text-red-500 text-sm">{errors.branchOfService.message}</span>} */}
</div>

          {/* Did you ever serve under another name? */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Did you ever serve under another name?</label>
            <select
              {...register('serviceUnder', 
                // { required: 'This field is required' }


              )}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {/* {errors.serviceUnder && <span className="text-red-500 text-sm">{errors.serviceUnder.message}</span>} */}
          </div>

          {/* Service Details */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Please Provide the Other Service-Related Details</label>
            <textarea
              {...register('serviceDetails')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
              rows="3"
            />
          </div> */}

          {/* Entry Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Entry Date</label>
            <input
              type="date"
              {...register('entryDate')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
          </div>

          {/* Exit Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Exit Date</label>
            <input
              type="date"
              {...register('exitDate')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
          </div>

          {/* Place of Separation */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Place of Separation</label>
            <input
              type="text"
              {...register('placeOfService')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
          </div>

          {/* National Guard or Reserves */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Did You Serve in the National Guard or Reserves?</label>
            <select
              {...register('nationalGuardReserves', { required: 'This field is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.nationalGuardReserves && <span className="text-red-500 text-sm">{errors.nationalGuardReserves.message}</span>}
          </div>

          {/* Guard/Reserves Dates */}
          <div>
            <label className="block text-sm font-medium text-gray-700">What Were Your Dates of Service in the National Guard/Reserves?</label>
            <input
              type="date"
              {...register('guardReservesDates')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
          </div>

          {/* Active Duty Orders */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Are You Currently on Any Active Duty Federal Orders?</label>
            <select
              {...register('activeDutyOrders', { required: 'This field is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.activeDutyOrders && <span className="text-red-500 text-sm">{errors.activeDutyOrders.message}</span>}
          </div>

          {/* VA Direct Deposit */}
          <div>
            <label className="block text-sm font-medium text-gray-700">VA Direct Deposit Setup?</label>
            <select
              {...register('vaDirectDeposit', { required: 'This field is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.vaDirectDeposit && <span className="text-red-500 text-sm">{errors.vaDirectDeposit.message}</span>}
          </div>

          {/* Homeless Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Are you currently homeless or at risk of becoming homeless?</label>
            <select
              {...register('vaHealthCare', { required: 'This field is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.vaHealthCare && <span className="text-red-500 text-sm">{errors.vaHealthCare.message}</span>}
          </div>

          {/* Living Situation */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-blue-800">
              Check The Answer That Most Closely Aligns To Your Living Situation:
            </label>
            <select
              {...register('livingSituation', { required: 'Living Situation is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            >
              <option value="">Select an option</option>
              <option value="Living In A Homeless Shelter">Living In A Homeless Shelter</option>
              <option value="Not Currently In A Sheltered Environment">
                Not Currently In A Sheltered Environment (e.g., living in a car or tent)
              </option>
              <option value="Staying With Another Person">Staying With Another Person</option>
              <option value="Fleeing Current Residence">Fleeing Current Residence</option>
              <option value="Housing Will Be Lost In 30 Days">Housing Will Be Lost In 30 Days</option>
              <option value="Leaving Publicly Funded System Of Care">
                Leaving Publicly Funded System Of Care
              </option>
            </select>
            {errors.livingSituation && (
              <span className="text-red-500 text-sm">{errors.livingSituation.message}</span>
            )}
          </div>

          <div className="flex justify-center mx-auto w-[200px] text-center">
            <button
              type="submit"
              className="w-full bg-[#B31942] text-white py-2 px-4 rounded-md hover:bg-[#aa2b4d] font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mr-4"
            >
              Submit
            </button>
            <Link
              to="/issues"
              className="w-full bg-[#B31942] text-white py-2 px-4 rounded-md hover:bg-[#aa2b4d] font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Continue
            </Link>
          </div>
        </form>

        {/* Display Submitted Data */}
       
      </div>
    </div>
  );
}

export default Veteran_Information;