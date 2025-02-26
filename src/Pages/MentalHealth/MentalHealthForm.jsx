

import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import mentalLogo from ".././../assets/mental_health_logo.png"

export default function MentalHealthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // Handle form submission
  }

  return (
    <div className="min-h-screen p-2 md:p-6  mt-32">
      <div className="max-w-4xl mx-auto">
        {/* Header with Icon */}
        <div className="bg-[#002B5C] w-full rounded-lg p-6 mb-6 flex flex-col items-center">
       <div className="w-52 h-52 bg-purple-600 rounded-full flex items-center justify-center mb-3">
  <img src={mentalLogo} alt="" className="w-32 h-32 object-cover" />
</div>


          <h1 className="text-white text-2xl font-medium mt-2">Mental Health</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Job/Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              What Was Your Job/Role In The Service?
            </label>
            <input
              type="text"
              {...register("jobRole", { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
          </div>

          {/* Hours */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              How Many Hours Did You Typically Work?
            </label>
            <input
              type="text"
              {...register("hours", { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
          </div>

          {/* Stress Level 1 */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <label className="block text-sm font-medium text-gray-700">
                What Was Your Stress Level Like During Service?
              </label>
              
            </div>
            <input
              type="text"
              {...register("stressLevel1", { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
          </div>

          {/* Roles and Duties */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <label className="block text-sm font-medium text-gray-700">Describe Your Roles And Duties</label>
              
            </div>
            <textarea
              {...register("rolesAndDuties", { required: true })}
              rows={4}
              placeholder="Please provide as much detail as possible as it will help to strengthen your claim"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
          </div>

          {/* Buttons */}
         <div className="flex justify-center gap-10 mt-6 pb-10 md:pb-0">
                       <button>
                        <Link
                       to="/mental_health_survey"
                         type="submit"
                         className="bg-[#B31942] text-white py-2 px-6 md:px-20 md:w-[200px] w-[150px] rounded-md hover:bg-[#aa2b4d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 font-semibold"
                       >
                         Continue
                       </Link>
                       </button>
                   <div>
                        <Link
                         type="button"
                         className="bg-white text-blue-800 py-2 px-6 md:px-20 md:w-[200px] w-[150px] border border-blue-800 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold"
                         onClick={() => window.history.back()}
                       >
                         Back
                       </Link>
                   </div>
                     </div>
        </form>
      </div>
    </div>
  )
}

