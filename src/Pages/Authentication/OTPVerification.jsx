

// import { useState, useRef, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const OTPVerification = () => {
//   const [otp, setOtp] = useState(new Array(6).fill(""));
//   const [otpVerify, setOTPVerify] = useState(false);
//   const [email, setEmail] = useState(""); 
//   const inputRefs = useRef([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedEmail = localStorage.getItem("email");
//     if (storedEmail) {
//       setEmail(storedEmail);
//     } else {
//       console.warn("No email found in localStorage");
//     }
//   }, []);

//   const handleChange = (e, index) => {
//     const value = e.target.value.replace(/[^0-9]/g, ""); 
//     if (!value) return;

//     const newOtp = [...otp];
//     newOtp[index] = value.slice(-1);
//     setOtp(newOtp);

//     if (index < 5 && value) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace") {
//       if (!otp[index] && index > 0) {
//         inputRefs.current[index - 1].focus();
//       }
//       const newOtp = [...otp];
//       newOtp[index] = "";
//       setOtp(newOtp);
//     }
//     if (e.key === "Enter") {
//       handleSubmit();
//     }
//   };

//   const handleSubmit = (e) => {
//     if (e) e.preventDefault();
//     if (otp.join("").length === 6) {
//       console.log("OTP Entered:", otp.join(""));
//       setOTPVerify(true);
//       setTimeout(() => navigate("/reset_password"), 1500);
//     }
//   };

//   const handleResend = () => {
//     console.log("Resend Code Triggered");
  
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B2A52] text-white">
//       <div className="max-w-md w-full p-4 md:px-0">
//         <h2 className="text-3xl font-bold mb-2 text-start">Account Verification</h2>
//         <p className="text-sm text-gray-300 mb-10 text-start">
//           Enter the code sent to{" "}
//           <span className="font-semibold text-white">{email || "user@example.com"}</span>
//         </p>

//         <form onSubmit={handleSubmit} className="flex md:gap-4 gap-2 justify-between mb-6">
//           {otp.map((digit, index) => (
//             <input
//               key={index}
//               type="text"
//               maxLength="1"
//               ref={(el) => (inputRefs.current[index] = el)}
//               value={digit}
//               onChange={(e) => handleChange(e, index)}
//               onKeyDown={(e) => handleKeyDown(e, index)}
//               className="md:w-14 md:h-14 w-12 h-12 text-2xl text-center bg-white text-black rounded-md border border-gray-300 focus:border-[#B31942] outline-none"
//             />
//           ))}
//         </form>

//         <button
//           type="submit"
//           className="w-full bg-[#B31942] py-2 rounded-md text-white font-semibold hover:opacity-90"
//           onClick={handleSubmit}
//         >
//           {otpVerify ? "Verifying OTP" : "Verify OTP"}
//         </button>

//         <p className="mt-4 text-gray-300 text-end">
//           Did not receive code?{" "}
//           <span onClick={handleResend} className="text-[#B31942] font-semibold cursor-pointer">
//             Resend
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default OTPVerification;
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useOtpVerificationMutation } from "../../redux/features/baseApi";

const OTPVerification = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
    },
  });
  const [otpVerify, setOTPVerify] = useState(false);
  const [email, setEmail] = useState("");
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const [otpVerification] = useOtpVerificationMutation();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      console.warn("No email found in localStorage");
    }
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); 
    if (!value) return;

    setValue(`otp${index + 1}`, value.slice(-1), { shouldValidate: true });

    if (index < 5 && value) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!e.target.value && index > 0) {
        inputRefs.current[index - 1].focus();
      }
     
      setValue(`otp${index + 1}`, "", { shouldValidate: true });
    }
  };

  const onSubmit = (data) => {
    const otp = Object.values(data).join("");
    localStorage.setItem("otp", otp);

    if (otp.length === 6) {
      console.log("OTP Entered:", otp);

      const email = localStorage.getItem("email");

     try {
      const response = otpVerification({email, otp}).unwrap();
      console.log("otpveri", response)
      setOTPVerify(true);
      setTimeout(() => navigate("/reset_password"), 1500);
     } catch (error) {
      console.log("error", error)
     }

      
    }
  };

  const handleResend = () => {
    console.log("Resend Code Triggered");
    // TODO: Implement resend logic with forgetPassword mutation
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B2A52] text-white">
      <div className="max-w-md w-full p-4 md:px-0">
        <h2 className="text-3xl font-bold mb-2 text-start">Account Verification</h2>
        <p className="text-sm text-gray-300 mb-10 text-start">
          Enter the code sent to{" "}
          <span className="font-semibold text-white">{email || "user@example.com"}</span>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex md:gap-4 gap-2 justify-between mb-6">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              {...register(`otp${index + 1}`, {
                required: "Digit required",
                pattern: {
                  value: /^[0-9]$/,
                  message: "Must be a number",
                },
              })}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`md:w-14 md:h-14 w-12 h-12 text-2xl text-center bg-white text-black rounded-md border ${
                errors[`otp${index + 1}`] ? "border-red-500" : "border-gray-300"
              } focus:border-[#B31942] outline-none`}
            />
          ))}
        </form>

        {/* Display errors if any */}
        {Object.keys(errors).length > 0 && (
          <p className="text-red-500 text-sm mb-4">
            {errors.otp1?.message || "Please enter a valid 6-digit OTP"}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-[#B31942] py-2 rounded-md text-white font-semibold hover:opacity-90"
          onClick={handleSubmit(onSubmit)}
        >
          {otpVerify ? "Verifying OTP" : "Verify OTP"}
        </button>

        <p className="mt-4 text-gray-300 text-end">
          Did not receive code?{" "}
          <span onClick={handleResend} className="text-[#B31942] font-semibold cursor-pointer">
            Resend
          </span>
        </p>
      </div>
    </div>
  );
};

export default OTPVerification;