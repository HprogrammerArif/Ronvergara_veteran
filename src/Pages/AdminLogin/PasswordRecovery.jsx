import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const PasswordRecovery = () => {

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
                        <h2 className="md:text-4xl text-3xl font-bold mb-10 text-start">Set new password </h2>
                
                
                        {/* Password */}
                        <div className="mb-6">
                          <label htmlFor="password" className="block text-sm font-semibold">Password</label>
                          <input
                            type="password"
                            id="password"
                            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                            placeholder="Enter Password"
                            {...register("password", { required: "Password is required" })}
                          />
                          {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                        </div>

                        <div className="mb-6">
                          <label htmlFor="confirm_password" className="block text-sm font-semibold">New Password</label>
                          <input
                            type="password"
                            id="confirm_password"
                            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                            placeholder="Re-type Password"
                            {...register("confirm_password", { required: "Confirm Password is required" })}
                          />
                          {errors.confirm_password && <p className="text-red-500 text-xs">{errors.confirm_password.message}</p>}
                        </div>

  
                    <Link to="/">
                    <button
                          type="submit"
                          className="w-full p-3 bg-[#B31942] text-white rounded-lg font-semibold hover:bg-[#af2a4d] transition"
                        >
                        
                          Reset
                      
                        </button>
                    </Link>
                  
                      </form>
            </div>
        </div>

    </section>
  )
}

export default PasswordRecovery;
