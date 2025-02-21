import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Forgot_Password = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Sending Reset Email to:", data.email);
    setEmailSent(true);
    setTimeout(() => navigate("/verify"), 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B2A52] text-white p-4">
     
      

      <div className="w-full max-w-md">
  <h2 className="text-3xl font-bold mb-2 text-start">Forget Password?</h2>
      <p className="text-sm mb-6 text-gray-300">
        Kindly enter your email, and we’ll send a verification code.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} >
        <label className="block  font-medium">Your Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="w-full px-4 py-3 rounded-md text-black mt-1 border text-sm"
          placeholder="user@email.com"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <button className="w-full bg-[#B31942] py-2 mt-4 rounded-md text-white font-semibold hover:opacity-90">
          {emailSent ? "Sending..." : "Send"}
        </button>
      </form>
       <p className="mt-4 text-base text-end text-gray-300">
        Remember Password? {""}
        <Link to="/login" className="text-[#B31942] font-semibold">
          Login
        </Link>
      </p>
      </div>


     
    </div>
  );
};

export default Forgot_Password;
