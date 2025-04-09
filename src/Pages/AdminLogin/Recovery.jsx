import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Recovery = () => {

      const { register, handleSubmit, formState: { errors } } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
  return (
    <section className='min-h-screen'>
      
        <div className='flex items-center'>
            <div className='basis-6/12 bg-[#0A3161] h-screen flex flex-col items-center justify-center'>
                    <img src="https://i.ibb.co.com/RZzJHnG/Group-2147225243.png" alt="logo" />
            </div>

            <div className='basis-8/12  h-screen flex flex-col justify-center items-center'>

                  <form onSubmit={handleSubmit(onSubmit)} className=" text-[#0A3161] md:p-8 rounded-lg w-full md:max-w-lg">
                        <h2 className="md:text-4xl text-3xl font-bold mb-10 text-start">Recover password </h2>
                
                        {/* Email */}
                        <div className="mb-4">
                          <label htmlFor="email" className="block text-sm font-semibold">Your Email</label>
                          <input
                            type="email"
                            id="email"
                            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                            placeholder="Enter Email"
                            {...register("email", { required: "Email is required" })}
                          />
                          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                        </div>
                
                        <Link to="/recovery_password">
                                          <button
                                                type="submit"
                                                className="w-full p-3 bg-[#B31942] text-white rounded-lg font-semibold hover:bg-[#af2a4d] transition"
                                              >
                                              
                                                Send
                                            
                                              </button>
                                          </Link>
         
                  
                      </form>
            </div>
        </div>

    </section>
  )
}

export default Recovery
