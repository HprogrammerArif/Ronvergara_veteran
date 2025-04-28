import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CiEdit } from "react-icons/ci";
import { useGetLoggedUserQuery } from "../../redux/features/baseApi";

const Profile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("changePassword"); 
  const [profileData, setProfileData] = useState({
    name: "Pappu Due",
    email: "pappu@example.com",
  });


  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const baseUrl = localStorage.getItem("baseUrl");
  const {data:userData} = useGetLoggedUserQuery();
  console.log("userData",userData)

  const newPassword = watch("newPassword");


  const onPasswordSubmit = async (data) => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Password change data:", data);
      alert("Password changed successfully!");
    } catch (error) {
      console.error("Failed to change password:", error);
      alert("Failed to change password: Simulated error");
    } finally {
      setIsLoading(false);
    }
  };


  const onProfileSubmit = async (data) => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setProfileData({ name: data.name, email: data.email, image:data.image });
      console.log("Profile update data:", data);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Failed to update profile: Simulated error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-2xl">
        {/* Profile Section */}
        <div className="flex items-start justify-start mb-6">
          <div className="relative">
            <img
             src={`${baseUrl}${profileData?.image}`}

              alt="Profile"
              className="w-32 h-32 rounded-full border-2 border-gray-900"
            />
            <span className="absolute bottom-1 right-2 border border-[#0A3161] bg-gray-900 hover:bg-gray-900 text-white rounded-full p-1">
              
               <CiEdit  size={22} className="flex  items-center justify-center mx-auto "/>
            
            </span>
          </div>
          <h2 className="ml-4 text-xl font-semibold text-gray-800">{profileData.name}</h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-10">
          <button
            className={`font-medium ${
              activeTab === "editProfile"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab("editProfile")}
          >
            Edit Profile
          </button>
          <button
            className={`font-medium ${
              activeTab === "changePassword"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab("changePassword")}
          >
            Change Password
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === "editProfile" && (
          <>
          
            <form onSubmit={handleSubmit(onProfileSubmit)}>
              {/* Name */}
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  defaultValue={profileData.name}
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue={profileData.email}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Save Profile"}
              </button>
            </form>
          </>
        )}

        {activeTab === "changePassword" && (
          <>
       
            <form onSubmit={handleSubmit(onPasswordSubmit)}>
              {/* Current Password */}
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Current Password</label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    {...register("currentPassword", {
                      required: "Current password is required",
                    })}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.977 9.977 0 011.543-3.176m3.676-2.14A10.055 10.055 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.977 9.977 0 01-1.543 3.176m-3.676 2.14A10.055 10.055 0 0112 19c-1.657 0-3.223-.496-4.552-1.35m9.104 0A10.055 10.055 0 0019 12c0-1.657-.496-3.223-1.35-4.552m-9.104 0A10.055 10.055 0 005 12c0 1.657.496 3.223 1.35 4.552m9.104 0A10.055 10.055 0 0019 12c0-1.657-.496-3.223-1.35-4.552m-9.104 0A10.055 10.055 0 005 12c0 1.657.496 3.223 1.35 4.552"
                        />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                {errors.currentPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.currentPassword.message}</p>
                )}
              </div>

              {/* New Password */}
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">New Password</label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    {...register("newPassword", {
                      required: "New password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                    })}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.977 9.977 0 011.543-3.176m3.676-2.14A10.055 10.055 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.977 9.977 0 01-1.543 3.176m-3.676 2.14A10.055 10.055 0 0112 19c-1.657 0-3.223-.496-4.552-1.35m9.104 0A10.055 10.055 0 0019 12c0-1.657-.496-3.223-1.35-4.552m-9.104 0A10.055 10.055 0 005 12c0 1.657.496 3.223 1.35 4.552m9.104 0A10.055 10.055 0 0019 12c0-1.657-.496-3.223-1.35-4.552m-9.104 0A10.055 10.055 0 005 12c0 1.657.496 3.223 1.35 4.552"
                        />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                {errors.newPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.newPassword.message}</p>
                )}
              </div>

              {/* Confirm New Password */}
              <div className="mb-6">
                <label className="block text-gray-600 mb-2">Confirm New Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmNewPassword", {
                      required: "Please confirm your new password",
                      validate: (value) => value === newPassword || "Passwords do not match",
                    })}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.977 9.977 0 011.543-3.176m3.676-2.14A10.055 10.055 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.977 9.977 0 01-1.543 3.176m-3.676 2.14A10.055 10.055 0 0112 19c-1.657 0-3.223-.496-4.552-1.35m9.104 0A10.055 10.055 0 0019 12c0-1.657-.496-3.223-1.35-4.552m-9.104 0A10.055 10.055 0 005 12c0 1.657.496 3.223 1.35 4.552m9.104 0A10.055 10.055 0 0019 12c0-1.657-.496-3.223-1.35-4.552m-9.104 0A10.055 10.055 0 005 12c0 1.657.496 3.223 1.35 4.552"
                        />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                {errors.confirmNewPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmNewPassword.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Save & Change"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;