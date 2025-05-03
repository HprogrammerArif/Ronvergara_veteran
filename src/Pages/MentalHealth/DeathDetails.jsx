import React from 'react';
import mentalLogo from "../../assets/mental_health_logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const DeathDetails = () => {
    const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Death details Form Data:", data);
    navigate("/disaster_form")
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 md:mt-10 pt-32 md:py-20">
      <div className=" md:p-6 p-2 rounded-lg  w-full max-w-4xl justify-between">
        
        {/* Header Section */}
      <div className="bg-[#002B5C] w-full rounded-lg p-6 mb-6 flex flex-col items-center">
                <div className="w-52 h-52 bg-purple-600 rounded-full flex items-center justify-center mb-3">
                  <img src={mentalLogo} alt="Mental Health Logo" className="w-32 h-32 object-cover" />
                </div>
                <h1 className="text-white text-2xl font-medium mt-2">Mental Health</h1>
              </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex-grow  mt-10">
          {/* Did Anyone Close To You Pass Away? */}
          <label className="block text-lg font-medium text-gray-700">
            Did Anyone Close To You (Service Member Or Civilian) Pass Away?
            <select
              {...register("passedAway", { required: "This field is required" })}
              className={`mt-1 block text-sm w-full p-2 border border-gray-300 rounded-md focus:outline-none  ${errors.passedAway ? 'border-red-500' : ''}`}
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.passedAway && <span className="text-red-500 text-sm">{errors.passedAway.message}</span>}
          </label>

          {/* Type Of Death */}
          <label className="block text-lg font-medium text-gray-700">
            Type Of Death:
            <select
              {...register("deathType", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border text-sm border-gray-300 rounded-md focus:outline-none ${errors.deathType ? 'border-red-500' : ''}`}
            >
              <option value="">Select an option</option>
              <option value="accidental">Accidental Death</option>
              <option value="suicide">Suicide</option>
              <option value="other">Other</option>
            </select>
            {errors.deathType && <span className="text-red-500 text-sm">{errors.deathType.message}</span>}
          </label>

          {/* Relationship To The Deceased */}
          <label className="block text-lg font-medium text-gray-700">
            Relationship To The Deceased
            <select
              {...register("relationship", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none  ${errors.relationship ? 'border-red-500' : ''}`}
            >
              <option value="">Select an option</option>
              <option value="serviceMember">Service Member</option>
              <option value="civilian">Civilian</option>
              <option value="familyMember">Family Member</option>
              <option value="friend">Friend</option>
              <option value="other">Other</option>
            </select>
            {errors.relationship && <span className="text-red-500 text-sm">{errors.relationship.message}</span>}
          </label>

          {/* Details Of The Incident Textarea */}
          <label className="block text-lg font-medium text-gray-700 pb-5">
            Please Provide Any Details Of The Incident Including Names And Dates Of The Deceased.
            <textarea
              {...register("incidentDetails", { required: "This field is required" })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none   h-32 resize-none ${errors.incidentDetails ? 'border-red-500' : ''}`}
              placeholder="Enter details here..."
            />
            {errors.incidentDetails && <span className="text-red-500 text-sm">{errors.incidentDetails.message}</span>}
          </label>

          {/* Buttons Section */}
          <div className="flex justify-center gap-10 md:mt-6 mt-20 pb-10 md:pb-0">
           <button>
             <button
             to="/disaster_form"
              type="submit"
              className="bg-[#B31942] text-white py-2 px-6 md:px-20 md:w-[200px] w-[150px] rounded-md hover:bg-[#aa2b4d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 font-semibold"
            >
              Continue
            </button>
           </button>
 
            <button>
                 
             <Link
             onClick={() => window.history.back()}
              type="submit"
              className="bg-white text-[#002B5C] border-[#002B5C] border hover:bg-gray-100 py-2 px-6 md:px-20 md:w-[200px] w-[150px] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 font-semibold"
            >
              Back
            </Link>
           </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeathDetails;
