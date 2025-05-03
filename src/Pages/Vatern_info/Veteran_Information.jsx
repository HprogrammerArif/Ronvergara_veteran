import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

function Veteran_Information() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      Beginning_Date_Month: [''],
      Beginning_Date_Day: [''],
      Beginning_Date_Year: [''],
      Ending_Date_Month: [''],
      Ending_Date_Day: [''],
      Ending_Date_Year: [''],
    },
  });
  const navigate = useNavigate();

  const onSubmit = async (vaData) => {
    console.log(vaData);
    localStorage.setItem('vaDataInfo', JSON.stringify(vaData));
    navigate('/issues'); // Navigate to the next step after submission
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center md:pb-36 pb-10 md:pt-36 pt-24">
      <div className="w-full max-w-4xl bg-white md:shadow-md rounded-lg md:p-6 p-2">
        <h1 className="md:text-2xl text-lg font-bold text-blue-800 mb-6 text-center">Veteran Information</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              {...register('Veterans_Beneficiary_First_Name[0]', { required: 'First Name is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
            {errors.Veterans_Beneficiary_First_Name?.[0] && (
              <span className="text-red-500 text-sm">{errors.Veterans_Beneficiary_First_Name[0].message}</span>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              {...register('Last_Name[0]', { required: 'Last Name is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
            {errors.Last_Name?.[0] && (
              <span className="text-red-500 text-sm">{errors.Last_Name[0].message}</span>
            )}
          </div>

          {/* Email Address 1 */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              {...register('EMAIL_ADDRESS[0]', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' },
              })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
            {errors.EMAIL_ADDRESS?.[0] && (
              <span className="text-red-500 text-sm">{errors.EMAIL_ADDRESS[0].message}</span>
            )}
          </div>

          {/* Email Address 2 */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Alternate Email Address (Optional)</label>
            <input
              type="email"
              {...register('EMAIL_ADDRESS[1]')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
          </div>

          {/* International Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">International Phone Number (If applicable)</label>
            <input
              type="tel"
              {...register('International_Phone_Number[0]')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Telephone Number (Include Area Code)</label>
            <div className="flex space-x-2">
              <input
                type="text"
                maxLength="3"
                {...register('TelephoneNumber_FirstThreeNumbers[0]', {
                  required: 'Phone number is required',
                  pattern: { value: /^\d{3}$/, message: 'Must be 3 digits' },
                })}
                className="mt-1 block w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                placeholder="xxx"
              />
              <input
                type="text"
                maxLength="3"
                {...register('TelephoneNumber_SecondThreeNumbers[0]', {
                  required: 'Phone number is required',
                  pattern: { value: /^\d{3}$/, message: 'Must be 3 digits' },
                })}
                className="mt-1 block w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                placeholder="xxx"
              />
              <input
                type="text"
                maxLength="4"
                {...register('TelephoneNumber_LastFourNumbers[0]', {
                  required: 'Phone number is required',
                  pattern: { value: /^\d{4}$/, message: 'Must be 4 digits' },
                })}
                className="mt-1 block w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                placeholder="xxxx"
              />
            </div>
            {errors.TelephoneNumber_FirstThreeNumbers?.[0] && (
              <span className="text-red-500 text-sm">{errors.TelephoneNumber_FirstThreeNumbers[0].message}</span>
            )}
            {errors.TelephoneNumber_SecondThreeNumbers?.[0] && (
              <span className="text-red-500 text-sm">{errors.TelephoneNumber_SecondThreeNumbers[0].message}</span>
            )}
            {errors.TelephoneNumber_LastFourNumbers?.[0] && (
              <span className="text-red-500 text-sm">{errors.TelephoneNumber_LastFourNumbers[0].message}</span>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth (MM/DD/YYYY)</label>
            <div className="flex space-x-2">
              <input
                type="text"
                maxLength="2"
                {...register('DOB_Month[0]', {
                  required: 'Month is required',
                  pattern: { value: /^(0[1-9]|1[0-2])$/, message: 'Invalid month (01-12)' },
                })}
                className="mt-1 block w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                placeholder="MM"
              />
              <input
                type="text"
                maxLength="2"
                {...register('DOB_Day[0]', {
                  required: 'Day is required',
                  pattern: { value: /^(0[1-9]|[12][0-9]|3[01])$/, message: 'Invalid day (01-31)' },
                })}
                className="mt-1 block w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                placeholder="DD"
              />
              <input
                type="text"
                maxLength="4"
                {...register('DOB_Year[0]', {
                  required: 'Year is required',
                  pattern: { value: /^\d{4}$/, message: 'Invalid year (e.g., 1990)' },
                })}
                className="mt-1 block w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                placeholder="YYYY"
              />
            </div>
            {errors.DOB_Month?.[0] && <span className="text-red-500 text-sm">{errors.DOB_Month[0].message}</span>}
            {errors.DOB_Day?.[0] && <span className="text-red-500 text-sm">{errors.DOB_Day[0].message}</span>}
            {errors.DOB_Year?.[0] && <span className="text-red-500 text-sm">{errors.DOB_Year[0].message}</span>}
          </div>

          {/* Beginning Date (Entry Date) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Service Entry Date (MM/DD/YYYY)</label>
            <div className="flex space-x-2">
              <input
                type="text"
                maxLength="2"
                {...register('Beginning_Date_Month[0]', {
                  required: 'Month is required',
                  pattern: { value: /^(0[1-9]|1[0-2])$/, message: 'Invalid month (01-12)' },
                })}
                className="mt-1 block w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                placeholder="MM"
              />
              <input
                type="text"
                maxLength="2"
                {...register('Beginning_Date_Day[0]', {
                  required: 'Day is required',
                  pattern: { value: /^(0[1-9]|[12][0-9]|3[01])$/, message: 'Invalid day (01-31)' },
                })}
                className="mt-1 block w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                placeholder="DD"
              />
              <input
                type="text"
                maxLength="4"
                {...register('Beginning_Date_Year[0]', {
                  required: 'Year is required',
                  pattern: { value: /^\d{4}$/, message: 'Invalid year (e.g., 1990)' },
                })}
                className="mt-1 block w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                placeholder="YYYY"
              />
            </div>
            {errors.Beginning_Date_Month?.[0] && (
              <span className="text-red-500 text-sm">{errors.Beginning_Date_Month[0].message}</span>
            )}
            {errors.Beginning_Date_Day?.[0] && (
              <span className="text-red-500 text-sm">{errors.Beginning_Date_Day[0].message}</span>
            )}
            {errors.Beginning_Date_Year?.[0] && (
              <span className="text-red-500 text-sm">{errors.Beginning_Date_Year[0].message}</span>
            )}
          </div>

          {/* Ending Date (Exit Date) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Service Exit Date (MM/DD/YYYY)</label>
            <div className="flex space-x-2">
              <input
                type="text"
                maxLength="2"
                {...register('Ending_Date_Month[0]', {
                  required: 'Month is required',
                  pattern: { value: /^(0[1-9]|1[0-2])$/, message: 'Invalid month (01-12)' },
                })}
                className="mt-1 block w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                placeholder="MM"
              />
              <input
                type="text"
                maxLength="2"
                {...register('Ending_Date_Day[0]', {
                  required: 'Day is required',
                  pattern: { value: /^(0[1-9]|[12][0-9]|3[01])$/, message: 'Invalid day (01-31)' },
                })}
                className="mt-1 block w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                placeholder="DD"
              />
              <input
                type="text"
                maxLength="4"
                {...register('Ending_Date_Year[0]', {
                  required: 'Year is required',
                  pattern: { value: /^\d{4}$/, message: 'Invalid year (e.g., 1990)' },
                })}
                className="mt-1 block w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                placeholder="YYYY"
              />
            </div>
            {errors.Ending_Date_Month?.[0] && (
              <span className="text-red-500 text-sm">{errors.Ending_Date_Month[0].message}</span>
            )}
            {errors.Ending_Date_Day?.[0] && (
              <span className="text-red-500 text-sm">{errors.Ending_Date_Day[0].message}</span>
            )}
            {errors.Ending_Date_Year?.[0] && (
              <span className="text-red-500 text-sm">{errors.Ending_Date_Year[0].message}</span>
            )}
          </div>

          {/* Mailing Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Mailing Address (Street, Apt/Unit, City, State, ZIP, Country)</label>

            {/* Street Address */}
            <div className="flex space-x-2">
              <input
                type="text"
                {...register('MailingAddress_NumberAndStreet[0]', { required: 'Street Address is required' })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                placeholder="No. & Street"
              />
            </div>
            {errors.MailingAddress_NumberAndStreet?.[0] && (
              <span className="text-red-500 text-sm">{errors.MailingAddress_NumberAndStreet[0].message}</span>
            )}

            {/* Apt/Unit Number, City, State, Country */}
            <div className="flex space-x-2 mt-2">
              <div className="w-[25%]">
                <input
                  type="text"
                  {...register('MailingAddress_ApartmentOrUnitNumber[0]', { required: 'Apt/Unit Number is required' })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                  placeholder="Apt/Unit No."
                />
                {errors.MailingAddress_ApartmentOrUnitNumber?.[0] && (
                  <span className="text-red-500 text-sm">{errors.MailingAddress_ApartmentOrUnitNumber[0].message}</span>
                )}
              </div>
              <div className="w-[25%]">
                <input
                  type="text"
                  {...register('MailingAddress_City[0]', { required: 'City is required' })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                  placeholder="City"
                />
                {errors.MailingAddress_City?.[0] && (
                  <span className="text-red-500 text-sm">{errors.MailingAddress_City[0].message}</span>
                )}
              </div>
              <div className="w-[25%]">
                <input
                  type="text"
                  maxLength="2"
                  {...register('MailingAddress_StateOrProvince[0]', { required: 'State is required' })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                  placeholder="State"
                />
                {errors.MailingAddress_StateOrProvince?.[0] && (
                  <span className="text-red-500 text-sm">{errors.MailingAddress_StateOrProvince[0].message}</span>
                )}
              </div>
              <div className="w-[25%]">
                <input
                  type="text"
                  {...register('MailingAddress_Country[0]', { required: 'Country is required' })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                  placeholder="Country"
                />
                {errors.MailingAddress_Country?.[0] && (
                  <span className="text-red-500 text-sm">{errors.MailingAddress_Country[0].message}</span>
                )}
              </div>
            </div>

            {/* ZIP Code/Postal Code */}
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">ZIP Code/Postal Code</label>
              <div className="flex space-x-2">
                <div className="w-[40%]">
                  <input
                    type="text"
                    maxLength="5"
                    {...register('MailingAddress_ZIPOrPostalCode_FirstFiveNumbers[0]', {
                      required: 'First 5 digits of ZIP Code are required',
                      pattern: { value: /^\d{5}$/, message: 'Must be 5 digits' },
                    })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                    placeholder="ZIP (First 5)"
                  />
                  {errors.MailingAddress_ZIPOrPostalCode_FirstFiveNumbers?.[0] && (
                    <span className="text-red-500 text-sm">{errors.MailingAddress_ZIPOrPostalCode_FirstFiveNumbers[0].message}</span>
                  )}
                </div>
                <span className="mt-3">-</span>
                <div className="w-[40%]">
                  <input
                    type="text"
                    maxLength="4"
                    {...register('MailingAddress_ZIPOrPostalCode_LastFourNumbers[0]', {
                      required: 'Last 4 digits of ZIP Code are required',
                      pattern: { value: /^\d{4}$/, message: 'Must be 4 digits' },
                    })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
                    placeholder="ZIP (Last 4)"
                  />
                  {errors.MailingAddress_ZIPOrPostalCode_LastFourNumbers?.[0] && (
                    <span className="text-red-500 text-sm">{errors.MailingAddress_ZIPOrPostalCode_LastFourNumbers[0].message}</span>
                  )}
                </div>
              </div>
            </div>
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
              <option value="Marine Corps">Marine Corps</option>
              <option value="Air Force">Air Force</option>
              <option value="Coast Guard">Coast Guard</option>
              <option value="Space Force">Space Force</option>
              <option value="NOAA">National Oceanic and Atmospheric Administration (NOAA)</option>
              <option value="USPHS">U.S. Public Health Service (USPHS)</option>
            </select>
            {errors.branchOfService && (
              <span className="text-red-500 text-sm">{errors.branchOfService.message}</span>
            )}
          </div>

          {/* Did you ever serve under another name? */}
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
            {errors.serviceUnder && (
              <span className="text-red-500 text-sm">{errors.serviceUnder.message}</span>
            )}
          </div>

          {/* Place of Separation */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Place of Separation</label>
            <input
              type="text"
              {...register('placeOfService', { required: 'Place of Separation is required' })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 px-3 border"
            />
            {errors.placeOfService && (
              <span className="text-red-500 text-sm">{errors.placeOfService.message}</span>
            )}
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
            {errors.nationalGuardReserves && (
              <span className="text-red-500 text-sm">{errors.nationalGuardReserves.message}</span>
            )}
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
            {errors.activeDutyOrders && (
              <span className="text-red-500 text-sm">{errors.activeDutyOrders.message}</span>
            )}
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
            {errors.vaDirectDeposit && (
              <span className="text-red-500 text-sm">{errors.vaDirectDeposit.message}</span>
            )}
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
            {errors.vaHealthCare && (
              <span className="text-red-500 text-sm">{errors.vaHealthCare.message}</span>
            )}
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

          <div className="flex justify-center mx-auto w-[200px] space-x-4">
            <Link
              to="/previous-page" // Replace with the actual previous route
              className="w-full bg-[#B31942] text-white py-2 px-4 rounded-md hover:bg-[#aa2b4d] font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Back
            </Link>
            <button
              type="submit"
              className="w-full bg-[#B31942] text-white py-2 px-4 rounded-md hover:bg-[#aa2b4d] font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Veteran_Information;