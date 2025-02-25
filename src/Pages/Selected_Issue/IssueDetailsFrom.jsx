import { Section } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function IssueDetailsForm() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: {
      ankleLocation: {
        leftLeg: false,
        rightLeg: false,
      },
      armLocation: {
        leftLeg: false,
        rightLeg: false,
        both: false,
      },
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    alert('Form submitted successfully!');
  };

  // Watch ankle location checkboxes for mutual exclusivity
  const ankleLocationValues = watch('ankleLocation');
  React.useEffect(() => {
    const values = Object.values(ankleLocationValues);
    const checkedCount = values.filter(Boolean).length;

    if (checkedCount > 1) {
      Object.keys(ankleLocationValues).forEach((key) => {
        if (ankleLocationValues[key] && values.lastIndexOf(true) !== values.indexOf(ankleLocationValues[key])) {
          ankleLocationValues[key] = false;
        }
      });
    }
  }, [ankleLocationValues]);

  // Watch arm location checkboxes for mutual exclusivity
  const armLocationValues = watch('armLocation');
  React.useEffect(() => {
    const values = Object.values(armLocationValues);
    const checkedCount = values.filter(Boolean).length;

    if (checkedCount > 1) {
      Object.keys(armLocationValues).forEach((key) => {
        if (armLocationValues[key] && values.lastIndexOf(true) !== values.indexOf(ankleLocationValues[key])) {
          armLocationValues[key] = false;
        }
      });
    }
  }, [armLocationValues]);

  return (
    <section className="md:mt-44 md:mb-10 mb-0 mt-28">
      <div className="min-h-screen bg-white flex justify-center items-center md:p-4 p-2">
        <div className="w-full max-w-4xl bg-white md:shadow-md rounded-lg md:p-6">
          <h1 className="md:text-2xl text-xl font-bold text-blue-800 mb-6 text-center">
            Provide detailed information regarding your selected issue.
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* 1. PTSD (Post-Traumatic Stress Disorder) */}
            <div className="space-y-4">
              <h2 className="md:text-xl font-semibold text-blue-800">1. PTSD (Post-Traumatic Stress Disorder)</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  When and Where Did Your Symptoms Begin?
                </label>
                <input
                  type="text"
                  {...register('ptsdStart', { required: 'This field is required' })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                />
                {errors.ptsdStart && <span className="text-red-500 text-sm">{errors.ptsdStart.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Details</label>
                <textarea
                  {...register('ptsdDetails')}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                  rows="4"
                />
              </div>
            </div>

            {/* 2. Ankle Pain */}
            <div className="space-y-4">
              <h2 className="md:text-2xl text-xl font-semibold text-blue-800">2. Ankle Pain</h2>
              <div>
                
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register('ankleLocation.leftLeg')}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-blue-800">Left Leg</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register('ankleLocation.rightLeg')}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-blue-800">Right Leg</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register('armLocation.both')}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-blue-800">Both</span>
                  </label>
                </div>
                {errors.ankleLocation && (
                  <span className="text-red-500 text-sm">
                    Please select at least one location
                  </span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  When Did The Problem Start?
                </label>
                <input
                  type="text"
                  {...register('ankleStart', { required: 'This field is required' })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                />
                {errors.ankleStart && <span className="text-red-500 text-sm">{errors.ankleStart.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Details</label>
                <textarea
                  {...register('ankleDetails')}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                  rows="4"
                />
              </div>
            </div>

            {/* 3. Arm Pain */}
            <div className="space-y-4">
              <h2 className="md:text-2xl text-xl/ font-semibold text-blue-800">3. Arm Pain</h2>
              <div>
               
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register('armLocation.leftLeg')}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-blue-800">Left Leg</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register('armLocation.rightLeg')}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-blue-800">Right Leg</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register('armLocation.both')}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-blue-800">Both</span>
                  </label>
                </div>
                {errors.armLocation && (
                  <span className="text-red-500 text-sm">
                    Please select at least one location
                  </span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  When Did The Problem Start?
                </label>
                <input
                  type="text"
                  {...register('armStart', { required: 'This field is required' })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                />
                {errors.armStart && <span className="text-red-500 text-sm">{errors.armStart.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Details</label>
                <textarea
                  {...register('armDetails')}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                  rows="4"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-10 mt-6 pb-10 md:pb-0">
              <Link
              to="/gulf_war_location"
                type="submit"
                className="bg-[#B31942] text-white py-2 px-6 md:px-20 md:w-[200px] w-[150px] rounded-md hover:bg-[#aa2b4d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 font-semibold"
              >
                Continue
              </Link>
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
    </section>
  );
}

export default IssueDetailsForm;