import React from 'react'
import vetern from "../../assets/vetern.png"
import client from "../../assets/client.png"
import confidence from "../../assets/confidence.png"
import bar from "../../assets/bar.png"

const VAC_Trust = () => {
  return (
    <section className='bg-gray-200 h-screen flex flex-col justify-center items-center'>

        <div className='container mx-auto '>
           <div className='md:flex items-center md:gap-32'>

                <div className='basis-4/12'>
                    <img src={vetern} alt="" />
                </div>

                <div className='basis-8/12'>
                    <h1 className='text-4xl uppercase md:text-4xl font-bold text-gray-900 pb-20'>Why Veterans Trust VAC</h1>
<div className='space-y-10'>

                    <div className='flex items-start gap-10'>
                       <div className='bg-[#0A3161] p-3 px-4 rounded-md'>
                         <img src={client} alt="" className='w-[67px] h-[67px]'/>
                       </div>
                        <div className='w-3/4'>
                            <h1 className='uppercase text-2xl font-semibold text-gray-900 mb-2'>unmatched experience</h1>
                            <p>With decades of experience, we’ve helped thousands of veterans secure their benefits. No case is too complex for our team.</p>
                        </div>
                    </div>

                       <div className='flex items-start gap-10'>
                       <div className='bg-[#0A3161] p-3 px-4 rounded-md'>
                         <img src={confidence} alt="" className='w-[67px] h-[67px]'/>
                       </div>
                        <div className='w-3/4'>
                            <h1 className='uppercase text-2xl font-semibold text-gray-900 mb-2'>Turn Your Disabilities Into Possibilities</h1>
                            <p>We transform the challenges of navigating the VA system into a clear path toward the benefits you deserve.</p>
                        </div>
                    </div>

                       <div className='flex items-start gap-10'>
                       <div className='bg-[#0A3161] p-3 px-4 rounded-md'>
                         <img src={bar} alt="" className='w-[67px] h-[67px]'/>
                       </div>
                        <div className='w-3/4'>
                            <h1 className='uppercase text-2xl font-semibold text-gray-900 mb-2'>100% Success Rate</h1>
                            <p>We’ve never failed to achieve our clients’ goals. Every veteran we’ve worked with has seen results.</p>
                        </div>
                    </div>
</div>
                    


                </div>
            
           </div>
        </div>
      
    </section>
  )
}

export default VAC_Trust
