import React from 'react'
import serviceP from "../../assets/service_provider.png"
import PhoneIcon from "../../assets/phone_icon.png"
import CheckList from "../../assets/checklist.png"

const Services = () => {
  return (
    <section  className='bg-gray-200 pb-10'>
    
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">SERVICES WE PROVIDE</h2>
      <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto text-center">
        We offer a wide range of services to support your needs, including benefits assistance, financial guidance, healthcare resources, educational opportunities, and personalized plans. Our goal is to simplify the process and ensure you have access to the tools and support you deserve. Let us help you every step of the way.
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto text-center">
        <div className="bg-[#0A316133] p-6 rounded-lg shadow-lg">
         <div className='flex flex-col items-center justify-between'>
             <img src={CheckList} alt="icon" className='w-1/6 mx-auto mb-5' />
          <h3 className="text-xl font-semibold text-gray-800 mb-5 text-center ">Benefits Eligibility Assessment</h3>
         </div>
          <p className="text-gray-600 text-center">
           Discover your eligibility for VA benefits with our detailed assessments. We analyze your service history and unique circumstances to determine the benefits you’ve earned and guide you through the next steps.
          </p>
        </div>
        <div className="bg-[#0A3161] text-white p-6 rounded-lg shadow-lg text-center">
         <div className='flex flex-col items-center justify-between'>
              <img src={PhoneIcon} alt="icon" className='w-1/6 mx-auto mb-5'/>
          <h3 className="text-xl font-semibold  mb-5">Application Assistance</h3>
         </div>
          <p className="">
            Filing for VA Benefits can be overwhelming. Our team simplifies the process, ensuring your application is complete, accurate, and submitted correctly for the best chance of approval.
          </p>
        </div>
        <div className="bg-[#0A316133] p-6 rounded-lg shadow-lg">
          <div className='flex flex-col items-center justify-between'>
            <img src={serviceP} alt="icon" className='w-1/6 mx-auto mb-5'/>
          <h3 className="text-xl font-semibold text-gray-800 mb-5">Appeal Support</h3>
          </div>
          <p className="text-gray-600">
            Denied benefits? Don't worry—We specialize in reviewing and appealing denied claims. Our advocates ensure no stone is left unturned in securing the benefits you deserve.
          </p>
        </div>
      </div>
  

    </section>
  )
}

export default Services
