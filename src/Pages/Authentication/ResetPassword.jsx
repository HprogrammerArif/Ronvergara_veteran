import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  
  const onSubmit = (data) => {
    console.log("New Password Set:", data.password);
    navigate("/success");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B2A52] text-white">
    
    <div className="w-full max-w-md p-4">
  <h2 className="text-3xl font-bold">Create New Password</h2>
      <p className="text-sm text-gray-300 mb-6">
        Your new password must be unique from those previously used.
      </p>
      
          <form onSubmit={handleSubmit(onSubmit)} >
        <label className="block  font-medium">New Password</label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          className="w-full px-4 py-3 rounded-md text-sm text-black mt-1 border"
          placeholder="Enter New Password"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        <label className="block  font-medium mt-4">Confirm Password</label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) => value === watch("password") || "Passwords do not match"
          })}
          className="w-full px-4 py-3 rounded-md text-black mt-1 border text-sm"
          placeholder="Confirm New Password"
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}

        <button className="w-full bg-[#B31942] py-2 mt-4 rounded-md text-white font-semibold hover:opacity-90">
          Reset Password
        </button>
      </form>
    </div>
    </div>
  );
};

export default ResetPassword;
