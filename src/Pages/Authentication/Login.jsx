
// import React, { useState } from 'react';

// import { useForm } from 'react-hook-form';
// import { Link, useNavigate } from 'react-router-dom';
// import { useLoggedInUserMutation } from '../../redux/features/baseApi';
// import { toast, ToastContainer } from 'react-toastify';
// import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

// const Login = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate();
//   const [loggedInUser] = useLoggedInUserMutation();
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false); // State for password visibility

//   const onSubmit = async (data) => {
//     const { email, password } = data;
//     const userData = { email, password, role: 'user' };

//     setIsLoading(true);

//     try {
//       const response = await loggedInUser(userData).unwrap();
//       console.log("login-response", response);

//       localStorage.setItem("access_token", response.access_token);
//       localStorage.setItem("refresh_token", response.refresh_token);

//       toast.success("Login successful!");
//       navigate("/");
//     } catch (error) {
//       console.log("error", error);
//       // toast.error("Login failed. Please check your credentials.");
//       toast.error(error?.non_field_errors || "Login failed. Please check your credentials.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Toggle password visibility
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-[#0A3161] text-white p-4">
//       <ToastContainer />
//       <form onSubmit={handleSubmit(onSubmit)} className="text-white md:p-8 rounded-lg md:shadow-lg w-full md:max-w-lg">
//         <h2 className="md:text-4xl text-3xl font-bold mb-4 text-start">Login to Account</h2>
//         <p className="text-start md:text-base md:mb-16 mb-8 text-gray-200">Please enter your details below</p>

//         {/* Email */}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-semibold">Your Email</label>
//           <input
//             type="email"
//             id="email"
//             className="w-full p-3 border border-gray-300 rounded-lg mt-2 text-black"
//             placeholder="Enter Email"
//             {...register("email", { required: "Email is required" })}
//           />
//           {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
//         </div>

//         {/* Password */}
//         <div className="mb-6">
//           <label htmlFor="password" className="block text-sm font-semibold">Password</label>
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               className="w-full p-3 border border-gray-300 rounded-lg mt-2 text-black"
//               placeholder="Enter Password"
//               {...register("password", { required: "Password is required" })}
//             />
//             <button
//               type="button"
//               onClick={togglePasswordVisibility}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//               aria-label={showPassword ? "Hide password" : "Show password"}
//             >
//               {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
//             </button>
//           </div>
//           {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
//         </div>

//         <div className="flex justify-between items-center mb-4">
//           <label className="flex items-center text-sm">
//             <input type="checkbox" {...register("rememberMe")} className="mr-2 checkbox checkbox-sm" />
//             Remember Me
//           </label>
//           <Link to="/email_verification" className="text-sm text-[#B31942] font-medium hover:underline">Forgot Password?</Link>
//         </div>

//         {/* Loader or Button */}
//         {isLoading ? (
//           <div className="w-full flex justify-center">
//             <span className="loading loading-bars loading-lg text-[#B31942]"></span>
//           </div>
//         ) : (
//           <button
//             type="submit"
//             className="w-full p-3 bg-[#B31942] text-white rounded-lg font-semibold hover:bg-[#af2a4d] transition"
//           >
//             Login
//           </button>
//         )}

//         <div className="mt-4 mb-4 text-center">
//           <p className="text-base text-end">
//             Create account?{' '}
//             <Link to="/sign_up" className="text-[#B31942] font-semibold">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLoggedInUserMutation } from '../../redux/features/baseApi';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname; // if redirected from PrivateRoute

  const [loggedInUser] = useLoggedInUserMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    const { email, password } = data;
    const userData = { email, password, role: 'user' };

    setIsLoading(true);

    try {
      const response = await loggedInUser(userData).unwrap();
      localStorage.setItem("access_token", response.access_token);
      localStorage.setItem("refresh_token", response.refresh_token);

      toast.success("Login successful!");

      const redirectPath = from ? "/plan" : "/";
      navigate(redirectPath, { replace: true });
    } catch (error) {
      console.log("error", error);
      toast.error(error?.non_field_errors || "Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0A3161] text-white p-4">
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="text-white md:p-8 rounded-lg md:shadow-lg w-full md:max-w-lg">
        <h2 className="md:text-4xl text-3xl font-bold mb-4 text-start">Login to Account</h2>
        <p className="text-start md:text-base md:mb-16 mb-8 text-gray-200">Please enter your details below</p>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold">Your Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg mt-2 text-black"
            placeholder="Enter Email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-semibold">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 text-black"
              placeholder="Enter Password"
              {...register("password", { required: "Password is required" })}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
        </div>

        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center text-sm">
            <input type="checkbox" {...register("rememberMe")} className="mr-2 checkbox checkbox-sm" />
            Remember Me
          </label>
          <Link to="/email_verification" className="text-sm text-[#B31942] font-medium hover:underline">Forgot Password?</Link>
        </div>

        {/* Loader or Button */}
        {isLoading ? (
          <div className="w-full flex justify-center">
            <span className="loading loading-bars loading-lg text-[#B31942]"></span>
          </div>
        ) : (
          <button
            type="submit"
            className="w-full p-3 bg-[#B31942] text-white rounded-lg font-semibold hover:bg-[#af2a4d] transition"
          >
            Login
          </button>
        )}

        <div className="mt-4 mb-4 text-center">
          <p className="text-base text-end">
            Create account?{' '}
            <Link to="/sign_up" className="text-[#B31942] font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
