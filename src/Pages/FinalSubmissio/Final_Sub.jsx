// import React from 'react';
// import { Link } from 'react-router-dom';

// function Final_Sub() {
//   return (
//     <div className="min-h-screen bg-white flex justify-center items-center p-4 mt-14">
//       <div className="w-full max-w-2xl text-center">
//         <h1 className="text-5xl font-bold text-[#B31942] mb-6">GREAT!</h1>
//         <p className="text-blue-800 md:text-lg text-md mb-8">
//         We are 
//  done. Want to submit the form? 
//         </p>
//     <button>
//             <Link
//         to="/e_signature"

//           className="bg-[#0A3161] text-white py-3 px-20 rounded-md hover:bg-[#104381] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold"
//         >
//           Submit
//         </Link>
//     </button>
//       </div>
//     </div>
//   );
// }

// export default Final_Sub;
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Final_Sub() {
  const navigate = useNavigate();

  const handleSubmit = async () => {
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

    // Step 3: Send to API
    try {
      const response = await fetch("http://192.168.10.208:8500/api/va/vaform/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const result = await response.json();
      console.log("✅ Data submitted successfully:", result);

      // Step 4: Navigate to signature page
      navigate("/e_signature");
    } catch (error) {
      console.error("❌ Submission error:", error);
      alert("Failed to submit. Please try again.");
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
          className="bg-[#0A3161] text-white py-3 px-20 rounded-md hover:bg-[#104381] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Final_Sub;
