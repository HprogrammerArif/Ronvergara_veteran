// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const OTPVerification = () => {
//   const [otp, setOtp] = useState(new Array(6).fill(""));
//   const navigate = useNavigate();

//   const handleChange = (e, index) => {
//     const newOtp = [...otp];
//     newOtp[index] = e.target.value.slice(-1);
//     setOtp(newOtp);
    
//     if (e.target.nextSibling) e.target.nextSibling.focus();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (otp.join("").length === 6) {
//       console.log("OTP Entered:", otp.join(""));
//       navigate("/reset_password");
//     }
//   };


//   const handleResend = (data) =>{
//     console.log(data)
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B2A52] text-white">
//      <div className="max-w-md">
//          <h2 className="text-3xl font-bold mb-2">New Account Verification</h2>
//       <p className="text-sm text-gray-300 mb-6">
//         Enter the code sent to user@example.com
//       </p>

//       <form onSubmit={handleSubmit} className="flex gap-3 mb-6 w-full">
//         {otp.map((digit, index) => (
//           <input
//             key={index}
//             type="text"
//             maxLength="1"
//             value={digit}
//             onChange={(e) => handleChange(e, index)}
//             className="w-14 h-14 text-2xl text-center bg-white text-black rounded-md"
//           />
//         ))}
//       </form>

//       <button className="w-full bg-[#B31942] py-2 rounded-md text-white font-semibold hover:opacity-90" onClick={handleSubmit}>
//         Send
//       </button>

//       <p className="mt-4 text-gray-300 text-end">
//         Did not receive code? <Link onClick={handleResend("resend_code")} className="text-[#B31942] font-semibold">Resend</Link>
//       </p>
//      </div>
//     </div>
//   );
// };

// export default OTPVerification;


import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const OTPVerification = () => {
const [otp, setOtp] = useState(new Array(6).fill(""));
const [otpVerify, setOTPVerify] = useState(false);

  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Move to next input if exists
    if (index < 5 && value) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      }
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (otp.join("").length === 6) {
      console.log("OTP Entered:", otp.join(""));
      setOTPVerify(true)
      setTimeout(()=>navigate("/reset_password"), 1500);
    }
  };

  const handleResend = () => {
    console.log("Resend Code Triggered");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B2A52] text-white">
      <div className="max-w-md w-full p-4 md:px-0">
        <h2 className="text-3xl font-bold mb-2 text-start ">Account Verification</h2>
        <p className="text-sm text-gray-300 mb-10 text-start">
          Enter the code sent to <span className="font-semibold text-white">user@example.com</span>
        </p>

        <form onSubmit={handleSubmit} className="flex md:gap-4 gap-2 justify-between mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={(el) => (inputRefs.current[index] = el)}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="md:w-14 md:h-14 w-12 h-12 text-2xl text-center bg-white text-black rounded-md border border-gray-300 focus:border-[#B31942] outline-none"
            />
          ))}
        </form>

        <button
          type="submit"
          className="w-full bg-[#B31942] py-2 rounded-md text-white font-semibold hover:opacity-90"
          onClick={handleSubmit}
        >
          {otpVerify ? "Verifying OTP" : "Verify OTP"}
        </button>

        <p className="mt-4 text-gray-300 text-end">
          Did not receive code?{" "}
          <Link onClick={handleResend} className="text-[#B31942] font-semibold cursor-pointer">
            Resend
          </Link>
        </p>
      </div>
    </div>
  );
};

export default OTPVerification;
