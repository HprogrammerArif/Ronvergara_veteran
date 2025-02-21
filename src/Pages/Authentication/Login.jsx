import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0A3161] text-white p-4">
      <form onSubmit={handleSubmit(onSubmit)} className=" text-white md:p-8 rounded-lg md:shadow-lg w-full md:max-w-lg">
        <h2 className="md:text-4xl text-3xl font-bold mb-4 text-start">Login to Account</h2>
        <p className="text-start md:text-base md:mb-16 mb-8 text-gray-200">Please enter your details below</p>

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

        {/* Remember me and Forgot Password */}
        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center text-sm">
            <input type="checkbox" {...register("rememberMe")} className="mr-2" />
            Remember Me
          </label>
          <Link to="/email_verification" className="text-sm text-[#B31942] font-medium">Forgot Password?</Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-[#B31942] text-white rounded-lg font-semibold hover:bg-[#af2a4d] transition"
        >
          Login
        </button>

        {/* Sign-up Link */}
        <div className="mt-4 mb-4 text-center">
          <p className="text-base text-end">
            Create account? <a  className="text-[#B31942]">
                <Link to="/sign_up" className='font-semibold'>Sign Up</Link>
                </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
