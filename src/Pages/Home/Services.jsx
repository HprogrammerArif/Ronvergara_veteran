import { HiOutlineUsers } from "react-icons/hi";
import { IoSettings } from "react-icons/io5";
import { RiBarChart2Fill } from "react-icons/ri";

export default function Services() {
  return (
    <div>
       <div className="text-center container mx-auto w-3/6 mt-24">
       <h1 className="md:text-4xl font-bold text-[#0B2A52] pb-6">Services</h1>
          <p className="text-gray-500 font-medium">   We provide a comprehensive approach to help you navigate the VA benefits process with confidence. From assessing your eligibility based on your unique service history to assisting with applications and supporting you through appeals, our team is here to ensure you receive the benefits you've rightfully earned — every step of the way.</p>
      </div>
      <div className="min-h-[90vh] bg-gray-50 p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full flex items-center justify-between">
  
        <div className="relative">
       <div className="p-10 bg-gray-100 shadow-md  rounded-full">
           <div className="w-80 h-80 rounded-full shadow-gray-400 bg-gradient-to-br from-[#0B2A52] via-blue-800 to-blue-900 shadow-4xl flex items-center justify-center relative">
            <img src="https://i.ibb.co/99r83sPw/Untitled-design-6.png" className="w-80 h-80 rounded-full object-cover" alt="" />
          </div>
       </div>

          {/* Connecting Lines */}
          <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
            <div className="absolute w-[350px] h-px bg-gray-400 transform -rotate-45 origin-left" style={{ top: "" }}></div>
            <div className="absolute w-[350px] h-px bg-gray-400 "></div>
            <div className="absolute w-[350px] h-px bg-gray-400 transform rotate-45 origin-left" style={{ top: "" }}></div>
          </div>
        </div>

        {/* Services - Right Side */}
        <div className="flex flex-col space-y-16 ml-20">
          {/* Benefits Eligibility Assessment */}
          <div className="flex items-center relative">
            <div className="w-28 h-28  rounded-full absolute -left-14 bg-gradient-to-br border border-white from-[#0B2A52] to-blue-800 shadow-xl flex items-center justify-center mr-6">
              <div className="text-red-200">
                <HiOutlineUsers size={44} className="text-white" />

              </div>
            </div>
            <div className="bg-gradient-to-r from-[#0B2A52] to-blue-800 text-white px-8 py-6 rounded-xl shadow-xl max-w-xl">
              <h3 className="font-bold text-xl mb-3 ms-10">Benefits Eligibility Assessment</h3>
              <p className="text-sm leading-relaxed opacity-90 ms-10">
                Discover your eligibility for VA benefits with our detailed assessments. We analyze your service history and unique circumstances to determine the benefits you’ve earned and guide you through the next steps.
              </p>
            </div>
          </div>

          {/* Application Assistance */}
           <div className="flex items-center relative">
            <div className="w-28 h-28  rounded-full absolute -left-14 bg-gradient-to-br from-[#0B2A52] border border-white to-blue-800 shadow-xl flex items-center justify-center mr-6">
              <div className="text-red-200">
              <RiBarChart2Fill size={44} className="text-white"/>

              </div>
            </div>
            <div className="bg-gradient-to-r from-[#0B2A52] to-blue-800 text-white px-8 py-6 rounded-xl shadow-xl max-w-xl">
              <h3 className="font-bold text-xl mb-3 ms-10">Application Assistance</h3>
              <p className="text-sm leading-relaxed opacity-90 ms-10">
               Discover your eligibility for VA benefits with our detailed assessments. We analyze your service history and unique circumstances to determine the benefits you’ve earned and guide you through the next steps.
              </p>
            </div>
          </div>

          {/* Appeal Support */}
           <div className="flex items-center relative">
            <div className="w-28 h-28  rounded-full absolute -left-14 bg-gradient-to-br from-[#0B2A52] to-blue-800 border border-white shadow-xl flex items-center justify-center mr-6">
              <div className="text-red-200">
                <IoSettings size={44} className="text-white"/>

              </div>
            </div>
            <div className="bg-gradient-to-r from-[#0B2A52] to-blue-800 text-white px-8 py-6 rounded-xl shadow-xl max-w-xl">
              <h3 className="font-bold text-xl mb-3 ms-10">Appeal Support</h3>
              <p className="text-sm leading-relaxed opacity-90 ms-10">
                Discover your eligibility for VA benefits with our detailed assessments. We analyze your service history and unique circumstances to determine the benefits you’ve earned and guide you through the next steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}



