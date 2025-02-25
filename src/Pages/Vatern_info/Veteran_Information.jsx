import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Veteran_Information() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center md:pb-36 pb-10 md:pt-36 pt-24">
      <div className="w-full max-w-4xl bg-white md:shadow-md rounded-lg md:p-6 p-2">
        <h1 className="md:text-2xl text-lg font-bold text-blue-800 mb-6 text-center">Veteran Information</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              {...register('fullName', { required: 'Full Name is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
            {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' } })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

            <div>
            <label className="block text-sm font-medium text-gray-700">Number</label>
            <input
              type="tel"
              {...register('number', { required: 'Phone Number is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
            {errors.number && <span className="text-red-500 text-sm">{errors.number.message}</span>}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              {...register('phoneNumber', { required: 'Phone Number is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
            {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth (YYYY-MM-DD)</label>
            <input
              type="date"
              {...register('dateOfBirth', { required: 'Date of Birth is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
            {errors.dateOfBirth && <span className="text-red-500 text-sm">{errors.dateOfBirth.message}</span>}
          </div>

          {/* Current Physical Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Physical Address</label>
            <input
              {...register('address', { required: 'Address is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
              rows="3"
            />
            {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
          </div>

          {/* Branch of Service */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Branch of Service</label>
            <select
              {...register('branchOfService', { required: 'Branch of Service is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            >
              <option value="">Select Branch</option>
              <option value="Army">Army</option>
              <option value="Navy">Navy</option>
              <option value="Air Force">Air Force</option>
              <option value="Marines">Marines</option>
              <option value="Coast Guard">Coast Guard</option>
              <option value="National Guard">National Guard</option>
            </select>
            {errors.branchOfService && <span className="text-red-500 text-sm">{errors.branchOfService.message}</span>}
          </div>

          {/* Did You Receive an Honorable Discharge? */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Did you ever serve under another name?</label>
            <select
              {...register('serviceUnder', { required: 'This field is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.serviceUnder && <span className="text-red-500 text-sm">{errors.serviceUnder.message}</span>}
          </div>

          {/* Please Provide the Other Service-Related Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Please Provide the Other Service-Related Details</label>
            <textarea
              {...register('serviceDetails')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
              rows="3"
            />
          </div>

          {/* entry date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Entry Date:</label>
            <input
              type="text"
              {...register('rank')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
          </div>

          {/* exit date */}
           <div>
            <label className="block text-sm font-medium text-gray-700">Exit Date:</label>
            <input
              type="text"
              {...register('rank')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
          </div>

          {/* Unit */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Unit</label>
            <input
              type="text"
              {...register('unit')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
          </div> */}

          {/* Place of Separation: */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Place of Separation:</label>
            <input
              type="text"
              {...register('placeOfService')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
          </div>

          {/* Did You Serve in the National Guard or Reserves? */}
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

          {/* What Were Your Dates of Service in the National Guard/Reserves? */}
          <div>
            <label className="block text-sm font-medium text-gray-700">What Were Your Dates of Service in the National Guard/Reserves?</label>
            <input
              type="date"
              {...register('guardReservesDates')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
          </div>

          {/* Are You Currently on Any Active Duty Federal Orders? */}
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

          {/* VA Direct Deposit Setup? */}
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

          {/* Are You Currently Enrolled in VA Health Care? */}
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

          {/* Check the Answer That Most Applies to Your Living Situation */}
        <div className="space-y-2 ">
      <label className="block text-sm font-medium text-blue-800">
        Check The Answer That Most Closely Aligns To Your Living Situation:
      </label>
     <div >
         <select
        {...register('livingSituation', { required: 'Living Situation is required' })}
        className="mt-1 block md:w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
      >
        <option value="">Select an option</option>
        <option value="Living In A Homeless Shelter">Living In A Homeless Shelter</option>
        <option value="Not Currently In A Sheltered Environment (e.g., living in a car or tent)">
          Not Currently In A Sheltered Environment (e.g., living in a car or tent)
        </option>
        <option value="Staying With Another Person">Staying With Another Person</option>
        <option value="Fleeing Current Residence">Fleeing Current Residence</option>
        <option value="Housing Will Be Lost In 30 Days">Housing Will Be Lost In 30 Days</option>
        <option value="Leaving Publicly Funded System Of Care">Leaving Publicly Funded System Of Care</option>
      </select>
      {errors.livingSituation && (
        <span className="text-red-500 text-sm">{errors.livingSituation.message}</span>
      )}
     </div>
    </div>

         <div className='flex justify-center mx-auto w-[200px] text-center'>
             <Link to="/issue_details"
            type="submit"
            className="w-full bg-[#B31942] text-white py-2 px-4 rounded-md hover:bg-[#aa2b4d] font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Continue
          </Link>
         </div>
        </form>
      </div>
    </div>
  );
}

export default Veteran_Information;