
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Final_Sub() {
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     const payload = {};

//     for (let i = 0; i < localStorage.length; i++) {
//       const key = localStorage.key(i);
//       try {
//         const value = JSON.parse(localStorage.getItem(key));
//         payload[key] = value;
//       } catch (err) {
//         payload[key] = localStorage.getItem(key);
//       }
//     }

//     payload.document = {
//       discharge_condition: payload["discharge_condition"] || {},
//       evidenceData: payload["evidenceData"] || {},
//     };


//     try {
//       const response = await fetch("http://192.168.10.8:4000/api/va/vaform/submit/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(payload)
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit data");
//       }

//       const result = await response.json();
//       console.log("✅ Data submitted successfully:", result);

//       navigate("/va_form");
//     } catch (error) {
//       console.error("❌ Submission error:", error);
//       alert("Failed to submit. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white flex justify-center items-center p-4 mt-14">
//       <div className="w-full max-w-2xl text-center">
//         <h1 className="text-5xl font-bold text-[#B31942] mb-6">GREAT!</h1>
//         <p className="text-blue-800 md:text-lg text-md mb-8">
//           We are done. Want to submit the form?
//         </p>

//         <button
//           onClick={handleSubmit}
//           className="bg-[#0A3161] text-white py-3 px-20 rounded-md hover:bg-[#104381] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Final_Sub;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify

function Final_Sub() {
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state
  const navigate = useNavigate();

  const token  = localStorage.getItem("access_token");
  console.log(token)

  const handleSubmit = async () => {
    setIsSubmitting(true); // Show loading spinner
    const payload = {};

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      try {
        const value = JSON.parse(localStorage.getItem(key));
        payload[key] = value;
      } catch (err) {
        payload[key] = localStorage.getItem(key);
      }
    }


    payload.document = {
      discharge_condition: payload["discharge_condition"] || {},
      evidenceData: payload["evidenceData"] || {},
    };

    try {
      const response = await fetch("http://192.168.10.8:4000/api/va/vaform/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },

        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const result = await response.json();
      console.log("✅ Data submitted successfully:", result);

      toast.success("Form submitted successfully!"); // Success Toast
      navigate("/va_form");
    } catch (error) {
      console.error("❌ Submission error:", error);
      toast.error("Failed to submit. Please try again."); // Error Toast
    } finally {
      setIsSubmitting(false); // Hide loading spinner
    }
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-4 mt-14">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-[#B31942] mb-6">GREAT!</h1>
        <p className="text-blue-800 md:text-lg text-md mb-8">
          We are done. Want to submit the form?
        </p>

        <button
          onClick={handleSubmit}
          className={`bg-[#0A3161] text-white py-3 px-20 rounded-md hover:bg-[#104381] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold ${isSubmitting ? ' cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="loading loading-bars loading-lg"></span>

          ) : (
            'Submit'
          )}
        </button>
      </div>

      {/* ToastContainer for notifications */}
      <ToastContainer />
    </div>
  );
}

export default Final_Sub;
