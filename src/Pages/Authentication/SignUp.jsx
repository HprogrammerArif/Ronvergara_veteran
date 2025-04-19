// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
// import { useCreateUserMutation } from '../../redux/features/baseApi';

// const SignUp     = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [createUser] = useCreateUserMutation()

//   const onSubmit = (userData) => {
    
//     try {
//       const response = createUser({userData, role: 'user'}).unwrap();
//       console.log(response);
//     } catch (error) {
//       console.log("error", error)
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-[#0A3161] text-white p-4">
//       <form onSubmit={handleSubmit(onSubmit)} className="md:p-8 rounded-lg md:shadow-lg w-full md:max-w-lg">
//         <h2 className="md:text-4xl text-3xl font-bold text-center mb-4">Create Account</h2>
//         <p className="text-center text-gray-200 md:mb-16 mb-8 md:text-base">Please enter information and click the button. We will send an email with a verification code for you to enter.</p>

//         {/* Name */}
//         <div className="mb-4">
//           <label htmlFor="name" className="block font-semibold">Your Name</label>
//           <input
//             type="text"
//             id="name"
//             className="w-full p-3 border border-gray-300 rounded-lg mt-2 text-sm text-gray-800"
//             placeholder="Name"
//             {...register("name", { required: "Name is required" })}
//           />
//           {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
//         </div>

//         {/* Email */}
//         <div className="mb-4">
//           <label htmlFor="email" className="block  font-semibold">Your Email</label>
//           <input
//             type="email"
//             id="email"
//             className="w-full p-3 border border-gray-300 rounded-lg mt-2 text-sm text-gray-800"
//             placeholder="Enter Email"
//             {...register("email", { required: "Email is required" })}
//           />
//           {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
//         </div>

//         {/* Password */}
//         <div className="mb-4">
//           <label htmlFor="password" className="block  font-semibold">New Password</label>
//           <input
//             type="password"
//             id="password"
//             className="w-full p-3 border border-gray-300 rounded-lg mt-2 text-sm text-gray-800"
//             placeholder="Enter New Password"
//             {...register("password", { required: "Password is required" })}
//           />
//           {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
//         </div>

//         {/* Confirm Password */}
//         <div className="mb-6">
//           <label htmlFor="confirmPassword" className="block  font-semibold">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             className="w-full p-3 border border-gray-300 rounded-lg mt-2 text-sm text-gray-800"
//             placeholder="Confirm New Password"
//             {...register("confirmPassword", { required: "Please confirm your password" })}
//           />
//           {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full p-3 bg-[#B31942] text-white rounded-lg font-semibold hover:bg-[#af2a4d]  transition"
//         >
//           Sign Up
//         </button>

//         {/* Login Link */}
//         <div className="mt-4 text-center">
//           <p className="text-base ">
//             Already have an account? 
//             <Link to="/login" className="text-[#B31942] font-semibold"> Login</Link>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignUp;


import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserMutation } from '../../redux/features/baseApi';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [createUser, { isLoading, isError, error, isSuccess }] = useCreateUserMutation();
  const navigate = useNavigate();

  
  const password = watch('password');

  const onSubmit = async (data) => {
   
    const { name, email, password } = data;
    const userData = { name, email, password, role: 'user' };

    try {
      const response = await createUser(userData).unwrap();
  console.log("response", response)

  navigate("/login")
    } catch (err) {
      console.error('Error creating user:', err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0A3161] text-white p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="md:p-8 rounded-lg md:shadow-lg w-full md:max-w-lg">
        <h2 className="md:text-4xl text-3xl font-bold text-center mb-4">Create Account</h2>
        <p className="text-center text-gray-200 md:mb-16 mb-8 md:text-base">
          Please enter information and click the button. We will send an email with a verification code for you to enter.
        </p>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold">Your Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-lg mt-2 text-sm text-gray-800"
            placeholder="Name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold">Your Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg mt-2 text-sm text-gray-800"
            placeholder="Enter Email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold">New Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border border-gray-300 rounded-lg mt-2 text-sm text-gray-800"
            placeholder="Enter New Password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />
          {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block font-semibold">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full p-3 border border-gray-300 rounded-lg mt-2 text-sm text-gray-800"
            placeholder="Confirm New Password"
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (value) => value === password || 'Passwords do not match',
            })}
          />
          {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-[#B31942] text-white rounded-lg font-semibold hover:bg-[#af2a4d] transition"
          disabled={isLoading}
        >
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </button>

   
        {isSuccess && <p className="text-green-500 text-center mt-4">Registration successful! Check your email for verification.</p>}
        {isError && <p className="text-red-500 text-center mt-4">Error: {error?.response?.message || 'Failed to sign up'}</p>}

      
        <div className="mt-4 text-center">
          <p className="text-base">
            Already have an account?{' '}
            <Link to="/login" className="text-[#B31942] font-semibold">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;