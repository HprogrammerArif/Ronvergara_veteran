


// import { useState } from "react";

// const vaRatingTable = [
//   { rating: 10, amount: "$171.31" },
//   { rating: 20, amount: "$346.95" },
//   { rating: 30, amount: "$537.42" },
//   { rating: 40, amount: "$774.16" },
//   { rating: 50, amount: "$1,102.04" },
//   { rating: 60, amount: "$1,395.93" },
//   { rating: 70, amount: "$1,716.20" },
//   { rating: 80, amount: "$2,044.89" },
//   { rating: 90, amount: "$2,241.91" },
//   { rating: 100, amount: "$3,831.30" },
// ];

// const smcLevels = [
//   { level: "K", amount: "$136.06" },
//   { level: "L", amount: "$4,767.34" },
//   { level: "L ½", amount: "$5,013.79" },
//   { level: "M", amount: "$5,261.24" },
//   { level: "M ½", amount: "$5,622.78" },
//   { level: "N", amount: "$5,985.06" },
//   { level: "N ½", amount: "$6,337.11" },
//   { level: "O/P", amount: "$6,689.81" },
//   { level: "R-1", amount: "$9,559.22" },
//   { level: "R-2/T", amount: "$10,966.66" },
//   { level: "S", amount: "$4,071.15" },
// ];

// export default function VeteransDisabilityCalculator() {
//   const [currentDisability, setCurrentDisability] = useState(0);
//   const [selectedDisabilities, setSelectedDisabilities] = useState([]);
//   const [selectedPercentages, setSelectedPercentages] = useState({});
//   const [dependentsUnder18, setDependentsUnder18] = useState("");
//   const [dependentsBetween18And23, setDependentsBetween18And23] = useState("");
//   const [dependentParents, setDependentParents] = useState("");
//   const [maritalStatus, setMaritalStatus] = useState("Single");
//   const [monthlyPayment, setMonthlyPayment] = useState(0);

//   const physicalDisabilities = [
//     { id: "leftLeg", label: "Left Leg" },
//     { id: "rightLeg", label: "Right Leg" },
//     { id: "leftArm", label: "Left Arm" },
//     { id: "rightArm", label: "Right Arm" },
//     { id: "leftFoot", label: "Left Foot" },
//     { id: "rightFoot", label: "Right Foot" },
//     { id: "back", label: "Back" },
//     { id: "ssd", label: "SSD" },
//     { id: "ptsd", label: "PTSD" },
//     { id: "tinnitus", label: "Tinnitus" },
//     { id: "migraine", label: "Migraine" },
//     { id: "sleepApnea", label: "Sleep Apnea" },
//     { id: "others", label: "Others" },
//   ];

//   const percentages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//   const handleDisabilitySelect = (disability) => {
//     if (selectedDisabilities.includes(disability)) {
//       setSelectedDisabilities(selectedDisabilities.filter((d) => d !== disability));
//       const newPercentages = { ...selectedPercentages };
//       delete newPercentages[disability];
//       setSelectedPercentages(newPercentages);
//     } else {
//       setSelectedDisabilities([...selectedDisabilities, disability]);
//     }
//   };

//   const handlePercentageSelect = (percentage) => {
//     if (selectedDisabilities.length > 0) {
//       const lastSelected = selectedDisabilities[selectedDisabilities.length - 1];
//       const newPercentages = { ...selectedPercentages, [lastSelected]: percentage };
//       setSelectedPercentages(newPercentages);
//       calculateTotalDisability(newPercentages);
//     }
//   };

//   const calculateTotalDisability = (percentages) => {
//     const values = Object.values(percentages);
//     if (values.length === 0) {
//       setCurrentDisability(0);
//       setMonthlyPayment(0);
//       return;
//     }

//     // Simplified average for demonstration
//     const total = Math.min(100, Math.round(values.reduce((a, b) => a + b, 0) / values.length));
//     setCurrentDisability(total);

//     // Simplified payment calculation
//     const basePayment = total * 20; // $20 per percentage point (simplified)
//     const dependentMultiplier =
//       1 +
//       Number.parseInt(dependentsUnder18 || "0") * 0.05 +
//       Number.parseInt(dependentsBetween18And23 || "0") * 0.07 +
//       Number.parseInt(dependentParents || "0") * 0.1;
//     const maritalMultiplier = maritalStatus === "Married" ? 1.15 : 1;

//     setMonthlyPayment(Math.round(basePayment * dependentMultiplier * maritalMultiplier));
//   };

//   const resetAll = () => {
//     setCurrentDisability(0);
//     setSelectedDisabilities([]);
//     setSelectedPercentages({});
//     setDependentsUnder18("");
//     setDependentsBetween18And23("");
//     setDependentParents("");
//     setMaritalStatus("Single");
//     setMonthlyPayment(0);
//   };

//   return (
//     <div className="min-h-screen bg-[#002b5c] text-white flex flex-col items-center p-4 md:p-8 ">
//       {/* Header */}
//       <h1 className="text-2xl md:text-3xl font-bold mb-4 mt-10">Veterans Disability Calculator</h1>

//       {/* Calculator Section */}
//       <div className="w-full max-w-2xl flex flex-col items-center">
//         {/* Current Disability Percentage */}
//         <p className="text-center mb-2">Current Disability Percentage</p>
//         <div className="relative w-32 h-32 mb-8">
//           <div className="absolute inset-0 rounded-full bg-[#c41e3a] flex items-center justify-center">
//             <span className="text-4xl font-bold">{currentDisability}%</span>
//           </div>
//         </div>

//         {/* Physical Disability Selection */}
//         <h2 className="text-xl font-bold mb-4">Physical Disability</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8 w-full">
//           {physicalDisabilities.map((disability) => (
//             <button
//               key={disability.id}
//               className={`btn btn-sm rounded-md transition-colors duration-300 ${
//                 selectedDisabilities.includes(disability.id)
//                   ? "bg-[#c41e3a] text-white"
//                   : "bg-white text-black hover:bg-gray-200"
//               }`}
//               onClick={() => handleDisabilitySelect(disability.id)}
//             >
//               {disability.label}
//             </button>
//           ))}
//         </div>

//         {/* Disability Percentage Selection */}
//         <h2 className="text-xl font-bold mb-4">Disability Percentage</h2>
//         <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-8 w-full">
//           {percentages.map((percentage) => (
//             <button
//               key={percentage}
//               className="btn btn-sm bg-white text-black hover:bg-gray-200 rounded-md transition-colors duration-300"
//               onClick={() => handlePercentageSelect(percentage)}
//             >
//               {percentage}%
//             </button>
//           ))}
//         </div>

//         {/* Current Disabilities Applied */}
//         <h2 className="text-xl font-bold mb-4">Current Disabilities Applied</h2>
//         <div className="flex flex-wrap gap-2 mb-8 w-full justify-center">
//           {Object.entries(selectedPercentages).map(([disability, percentage]) => {
//             const label = physicalDisabilities.find((d) => d.id === disability)?.label || disability;
//             return (
//               <div key={disability} className="badge bg-[#c41e3a] text-white p-3 rounded-md">
//                 {percentage}% {label}
//               </div>
//             );
//           })}
//         </div>

//         {/* Additional Payment Factors */}
//         <h2 className="text-xl font-bold mb-4">Additional Payment Amount Factors</h2>
//         <div className="w-full space-y-4 mb-8">
//           <div>
//             <label className="text-sm mb-1 block">Number of Dependent Children Under 18 Years Old</label>
//             <select
//               className="select select-bordered w-full bg-white text-black rounded-md"
//               value={dependentsUnder18}
//               onChange={(e) => setDependentsUnder18(e.target.value)}
//             >
//               <option value="">Select a number</option>
//               {[0, 1, 2, 3, 4, 5].map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="text-sm mb-1 block">Number of Dependent Children Between 18 and 23 Years Old</label>
//             <select
//               className="select select-bordered w-full bg-white text-black rounded-md"
//               value={dependentsBetween18And23}
//               onChange={(e) => setDependentsBetween18And23(e.target.value)}
//             >
//               <option value="">Select a number</option>
//               {[0, 1, 2, 3, 4, 5].map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="text-sm mb-1 block">Number of Dependent Parents</label>
//             <select
//               className="select select-bordered w-full bg-white text-black rounded-md"
//               value={dependentParents}
//               onChange={(e) => setDependentParents(e.target.value)}
//             >
//               <option value="">Select a number</option>
//               {[0, 1, 2].map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Marital Status */}
//         <div className="w-full mb-8">
//           <p className="text-center mb-2">Marital Status</p>
//           <div className="flex justify-center gap-4">
//             <button
//               className={`btn rounded-md transition-colors duration-300 ${
//                 maritalStatus === "Single" ? "bg-[#c41e3a] text-white" : "bg-white text-black hover:bg-gray-200"
//               }`}
//               onClick={() => setMaritalStatus("Single")}
//             >
//               Single
//             </button>
//             <button
//               className={`btn rounded-md transition-colors duration-300 ${
//                 maritalStatus === "Married" ? "bg-[#c41e3a] text-white" : "bg-white text-black hover:bg-gray-200"
//               }`}
//               onClick={() => setMaritalStatus("Married")}
//             >
//               Married
//             </button>
//           </div>
//         </div>

//         {/* Current Disability Rating */}
//         <h2 className="text-xl font-bold mb-4">Current Disability Rating</h2>
//         <div className="relative w-32 h-32 mb-8">
//           <div className="absolute inset-0 rounded-full bg-[#c41e3a] flex items-center justify-center">
//             <span className="text-4xl font-bold">{currentDisability}%</span>
//           </div>
//         </div>

//         {/* Monthly Payment Amount */}
//         <h2 className="text-xl font-bold mb-4">Your Monthly Payment Amount</h2>
//         <div className="text-4xl font-bold text-[#c41e3a] mb-8">${monthlyPayment}</div>

//         {/* Reset Button */}
//         <button
//           className="btn bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors duration-300"
//           onClick={resetAll}
//         >
//           Reset All
//         </button>
//       </div>

//       {/* VA Rating and SMC Tables */}
//       <div className="w-full max-w-4xl mt-12">
//         {/* Combined VA Rating Table */}
//         <div className="bg-[#c41e3a] text-white p-4 flex justify-between items-center rounded-t-md">
//           <h2 className="text-xl font-bold">Combined VA Rating</h2>
//           <h2 className="text-xl font-bold">2025 VA Disability Pay Rate</h2>
//         </div>
//         <div className="bg-white text-[#002b5c] w-full rounded-b-md">
//           {vaRatingTable.map((item) => (
//             <div key={item.rating} className="flex justify-between p-3 border-b last:border-b-0">
//               <div className="font-bold">{item.rating}%</div>
//               <div className="text-[#c41e3a] font-bold">{item.amount}</div>
//             </div>
//           ))}
//         </div>

//         {/* Link to Learn More */}
//         <div className="mt-8 text-center">
//           <a href="#" className="text-[#c41e3a] underline font-bold hover:text-[#a11830] transition-colors duration-300">
//             To Find Out More, Click Here.
//           </a>
//         </div>

//         {/* Special Monthly Compensation Section */}
//         <h2 className="text-2xl font-bold text-[#c41e3a] mt-8 text-center">
//           What is Special Monthly Compensation (SMC)?
//         </h2>
//         <h3 className="text-xl font-bold mt-6 mb-4 text-center">How Long Have You Been Awarded?</h3>
//         <p className="text-white mb-6 text-center max-w-3xl mx-auto">
//           The U.S. Department of Veterans Affairs (VA) awards special monthly compensation (SMC) to veterans with
//           service-connected conditions so severe that they warrant a rating higher than 100 percent; the idea is that
//           certain disabilities or combinations of disabilities are more debilitating than accounted for by the regular
//           rating schedule.
//         </p>

//         {/* SMC Levels Table */}
//         <div className="bg-white text-[#002b5c] w-full mt-6 rounded-md">
//           <div className="bg-[#c41e3a] text-white p-4 flex justify-between items-center rounded-t-md">
//             <h2 className="text-xl font-bold">SMC Level</h2>
//             <h2 className="text-xl font-bold">2025 VA SMC Amount</h2>
//           </div>
//           {smcLevels.map((item) => (
//             <div key={item.level} className="flex justify-between p-3 border-b last:border-b-0">
//               <div className="font-bold">{item.level}</div>
//               <div className="text-[#c41e3a] font-bold">{item.amount}</div>
//             </div>
//           ))}
//         </div>

//         {/* Disclaimer */}
//         <div className="mt-12 mb-6">
//           <h2 className="text-xl font-bold mb-4 text-center">Disclaimer</h2>
//           <p className="text-white text-xs text-center max-w-3xl mx-auto">
//             This tool is for educational purposes only and does not constitute legal advice. The VA disability rates
//             shown are based on publicly available information and are subject to change. This is a simulation only and
//             is offered and provided by us with the understanding that we are not rendering legal, accounting, tax,
//             career, or other professional advice and services. Such information should not be used as a substitute for
//             consultation with professional accounting, tax, legal, or other competent advisers. We are not responsible
//             for the application that you have determined or selected for your use. We are not responsible for the
//             preparation of any output or deliverable that you have determined or selected for your use.
//           </p>
//           <p className="text-white text-xs text-center mt-4">
//             Website Powered by Wildwood LLC © September 2023. Please Review{" "}
//             <a href="#" className="underline hover:text-gray-300 transition-colors duration-300">
//               Terms & Privacy Policy
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }









// import { useState } from "react";

// const vaRatingTable = [
//   { rating: 10, amount: 171.31 },
//   { rating: 20, amount: 346.95 },
//   { rating: 30, amount: 537.42 },
//   { rating: 40, amount: 774.16 },
//   { rating: 50, amount: 1102.04 },
//   { rating: 60, amount: 1395.93 },
//   { rating: 70, amount: 1716.20 },
//   { rating: 80, amount: 2044.89 },
//   { rating: 90, amount: 2241.91 },
//   { rating: 100, amount: 3831.30 },
// ];

// const smcLevels = [
//   { level: "K", amount: "$136.06" },
//   { level: "L", amount: "$4,767.34" },
//   { level: "L ½", amount: "$5,013.79" },
//   { level: "M", amount: "$5,261.24" },
//   { level: "M ½", amount: "$5,622.78" },
//   { level: "N", amount: "$5,985.06" },
//   { level: "N ½", amount: "$6,337.11" },
//   { level: "O/P", amount: "$6,689.81" },
//   { level: "R-1", amount: "$9,559.22" },
//   { level: "R-2/T", amount: "$10,966.66" },
//   { level: "S", amount: "$4,071.15" },
// ];

// // Dependent and marital adjustments (approximated for 2025 based on VA patterns)
// const dependentAdjustments = {
//   under18: 70, // Per child under 18
//   between18And23: 230, // Per child 18-23
//   parent: 400, // Per parent
//   spouse: 150, // Additional for married status
// };

// const calculateCombinedRating = (ratings, bilateralPairs) => {
//   if (!ratings || Object.keys(ratings).length === 0) return { raw: 0, rounded: 0 };

//   // Validate ratings (0-100, multiples of 10)
//   const validRatings = Object.entries(ratings).map(([id, percentage]) => ({
//     id,
//     percentage: Math.max(0, Math.min(100, Math.round(percentage / 10) * 10)),
//   }));

//   // Process bilateral ratings
//   const bilateralRatings = [];
//   const usedIds = new Set();

//   bilateralPairs.forEach(([id1, id2]) => {
//     const r1 = validRatings.find(r => r.id === id1);
//     const r2 = validRatings.find(r => r.id === id2);
//     if (r1 && r2 && !usedIds.has(r1.id) && !usedIds.has(r2.id)) {
//       const combined = r1.percentage + (r2.percentage * (1 - r1.percentage / 100));
//       const adjusted = combined + combined * 0.1; // Bilateral factor
//       bilateralRatings.push(Math.round(adjusted));
//       usedIds.add(r1.id);
//       usedIds.add(r2.id);
//     }
//   });

//   // Non-bilateral ratings
//   const nonBilateral = validRatings
//     .filter(r => !usedIds.has(r.id))
//     .map(r => r.percentage);

//   // Combine all ratings
//   const allRatings = [...bilateralRatings, ...nonBilateral].sort((a, b) => b - a);

//   // VA combination formula
//   let combined = allRatings[0] || 0;
//   for (let i = 1; i < allRatings.length; i++) {
//     combined += allRatings[i] * (1 - combined / 100);
//   }

//   return {
//     raw: combined,
//     rounded: Math.round(combined / 10) * 10,
//   };
// };

// const calculateMonthlyPayment = (
//   roundedRating,
//   dependentsUnder18,
//   dependentsBetween18And23,
//   dependentParents,
//   maritalStatus
// ) => {
//   const basePayment = vaRatingTable.find(item => item.rating === roundedRating)?.amount || 0;

//   let additional = 0;
//   if (roundedRating >= 30) {
//     additional +=
//       Number(dependentsUnder18 || 0) * dependentAdjustments.under18 +
//       Number(dependentsBetween18And23 || 0) * dependentAdjustments.between18And23 +
//       Number(dependentParents || 0) * dependentAdjustments.parent;
//     if (maritalStatus === "Married") {
//       additional += dependentAdjustments.spouse;
//     }
//   }

//   return (basePayment + additional).toFixed(2);
// };

// export default function VeteransDisabilityCalculator() {
//   const [currentDisability, setCurrentDisability] = useState(0);
//   const [selectedDisabilities, setSelectedDisabilities] = useState([]);
//   const [selectedPercentages, setSelectedPercentages] = useState({});
//   const [bilateralPairs, setBilateralPairs] = useState([]);
//   const [dependentsUnder18, setDependentsUnder18] = useState("");
//   const [dependentsBetween18And23, setDependentsBetween18And23] = useState("");
//   const [dependentParents, setDependentParents] = useState("");
//   const [maritalStatus, setMaritalStatus] = useState("Single");
//   const [monthlyPayment, setMonthlyPayment] = useState("0.00");

//   const physicalDisabilities = [
//     { id: "leftLeg", label: "Left Leg" },
//     { id: "rightLeg", label: "Right Leg" },
//     { id: "leftArm", label: "Left Arm" },
//     { id: "rightArm", label: "Right Arm" },
//     { id: "leftFoot", label: "Left Foot" },
//     { id: "rightFoot", label: "Right Foot" },
//     { id: "back", label: "Back" },
//     { id: "ssd", label: "SSD" },
//     { id: "ptsd", label: "PTSD" },
//     { id: "tinnitus", label: "Tinnitus" },
//     { id: "migraine", label: "Migraine" },
//     { id: "sleepApnea", label: "Sleep Apnea" },
//     { id: "others", label: "Others" },
//   ];

//   const percentages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//   const handleDisabilitySelect = (disability) => {
//     if (selectedDisabilities.includes(disability)) {
//       setSelectedDisabilities(selectedDisabilities.filter((d) => d !== disability));
//       const newPercentages = { ...selectedPercentages };
//       delete newPercentages[disability];
//       setSelectedPercentages(newPercentages);
//       updateCalculations(newPercentages);
//     } else {
//       setSelectedDisabilities([...selectedDisabilities, disability]);
//     }
//   };

//   const handlePercentageSelect = (percentage) => {
//     if (selectedDisabilities.length > 0) {
//       const lastSelected = selectedDisabilities[selectedDisabilities.length - 1];
//       const newPercentages = { ...selectedPercentages, [lastSelected]: percentage };
//       setSelectedPercentages(newPercentages);
//       updateCalculations(newPercentages);
//     }
//   };

//   const toggleBilateralPair = (id1, id2) => {
//     const pair = [id1, id2].sort();
//     const pairKey = pair.join('-');
//     const existingPair = bilateralPairs.find(p => p.join('-') === pairKey);

//     let newPairs;
//     if (existingPair) {
//       newPairs = bilateralPairs.filter(p => p.join('-') !== pairKey);
//     } else {
//       newPairs = [...bilateralPairs, pair];
//     }
//     setBilateralPairs(newPairs);
//     updateCalculations(selectedPercentages, newPairs);
//   };

//   const updateCalculations = (percentages, pairs = bilateralPairs) => {
//     const { raw, rounded } = calculateCombinedRating(percentages, pairs);
//     setCurrentDisability(Math.round(raw * 10) / 10); // Display raw, rounded to 1 decimal

//     const payment = calculateMonthlyPayment(
//       rounded,
//       dependentsUnder18,
//       dependentsBetween18And23,
//       dependentParents,
//       maritalStatus
//     );
//     setMonthlyPayment(payment);
//   };

//   const resetAll = () => {
//     setCurrentDisability(0);
//     setSelectedDisabilities([]);
//     setSelectedPercentages({});
//     setBilateralPairs([]);
//     setDependentsUnder18("");
//     setDependentsBetween18And23("");
//     setDependentParents("");
//     setMaritalStatus("Single");
//     setMonthlyPayment("0.00");
//   };

//   // Possible bilateral pairs based on selected disabilities
//   const bilateralCandidates = [
//     ['leftLeg', 'rightLeg'],
//     ['leftArm', 'rightArm'],
//     ['leftFoot', 'rightFoot'],
//   ];
//   const validBilateralPairs = bilateralCandidates.filter(([id1, id2]) =>
//     selectedDisabilities.includes(id1) && selectedDisabilities.includes(id2)
//   );

//   return (
//     <div className="min-h-screen bg-[#002b5c] text-white flex flex-col items-center p-4 md:p-8">
//       {/* Header */}
//       <h1 className="text-2xl md:text-3xl font-bold mb-4 mt-10">Veterans Disability Calculator</h1>

//       {/* Calculator Section */}
//       <div className="w-full max-w-2xl flex flex-col items-center">
//         {/* Current Disability Percentage */}
//         <p className="text-center mb-2">Current Disability Percentage</p>
//         <div className="relative w-32 h-32 mb-8">
//           <div className="absolute inset-0 rounded-full bg-[#c41e3a] flex items-center justify-center">
//             <span className="text-4xl font-bold">{currentDisability}%</span>
//           </div>
//         </div>

//         {/* Physical Disability Selection */}
//         <h2 className="text-xl font-bold mb-4">Physical Disability</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8 w-full">
//           {physicalDisabilities.map((disability) => (
//             <button
//               key={disability.id}
//               className={`btn btn-sm rounded-md transition-colors duration-300 ${
//                 selectedDisabilities.includes(disability.id)
//                   ? "bg-[#c41e3a] text-white"
//                   : "bg-white text-black hover:bg-gray-200"
//               }`}
//               onClick={() => handleDisabilitySelect(disability.id)}
//             >
//               {disability.label}
//             </button>
//           ))}
//         </div>

//         {/* Disability Percentage Selection */}
//         <h2 className="text-xl font-bold mb-4">Disability Percentage</h2>
//         <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-8 w-full">
//           {percentages.map((percentage) => (
//             <button
//               key={percentage}
//               className="btn btn-sm bg-white text-black hover:bg-gray-200 rounded-md transition-colors duration-300"
//               onClick={() => handlePercentageSelect(percentage)}
//             >
//               {percentage}%
//             </button>
//           ))}
//         </div>

//         {/* Bilateral Pairs Selection */}
//         {validBilateralPairs.length > 0 && (
//           <div className="w-full mb-8">
//             <h2 className="text-xl font-bold mb-4">Bilateral Disabilities</h2>
//             <div className="space-y-2">
//               {validBilateralPairs.map(([id1, id2]) => {
//                 const label1 = physicalDisabilities.find(d => d.id === id1)?.label || id1;
//                 const label2 = physicalDisabilities.find(d => d.id === id2)?.label || id2;
//                 const pairKey = [id1, id2].sort().join('-');
//                 const isPaired = bilateralPairs.some(p => p.join('-') === pairKey);
//                 return (
//                   <label key={pairKey} className="flex items-center space-x-2">
//                     <input
//                       type="checkbox"
//                       checked={isPaired}
//                       onChange={() => toggleBilateralPair(id1, id2)}
//                       className="h-4 w-4 text-[#c41e3a]"
//                     />
//                     <span>{`${label1} & ${label2}`}</span>
//                   </label>
//                 );
//               })}
//             </div>
//           </div>
//         )}

//         {/* Current Disabilities Applied */}
//         <h2 className="text-xl font-bold mb-4">Current Disabilities Applied</h2>
//         <div className="flex flex-wrap gap-2 mb-8 w-full justify-center">
//           {Object.entries(selectedPercentages).map(([disability, percentage]) => {
//             const label = physicalDisabilities.find((d) => d.id === disability)?.label || disability;
//             return (
//               <div key={disability} className="badge bg-[#c41e3a] text-white p-3 rounded-md">
//                 {percentage}% {label}
//               </div>
//             );
//           })}
//         </div>

//         {/* Additional Payment Factors */}
//         <h2 className="text-xl font-bold mb-4">Additional Payment Amount Factors</h2>
//         <div className="w-full space-y-4 mb-8">
//           <div>
//             <label className="text-sm mb-1 block">Number of Dependent Children Under 18 Years Old</label>
//             <select
//               className="select select-bordered w-full bg-white text-black rounded-md"
//               value={dependentsUnder18}
//               onChange={(e) => {
//                 setDependentsUnder18(e.target.value);
//                 updateCalculations(selectedPercentages);
//               }}
//             >
//               <option value="">Select a number</option>
//               {[0, 1, 2, 3, 4, 5].map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="text-sm mb-1 block">Number of Dependent Children Between 18 and 23 Years Old</label>
//             <select
//               className="select select-bordered w-full bg-white text-black rounded-md"
//               value={dependentsBetween18And23}
//               onChange={(e) => {
//                 setDependentsBetween18And23(e.target.value);
//                 updateCalculations(selectedPercentages);
//               }}
//             >
//               <option value="">Select a number</option>
//               {[0, 1, 2, 3, 4, 5].map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="text-sm mb-1 block">Number of Dependent Parents</label>
//             <select
//               className="select select-bordered w-full bg-white text-black rounded-md"
//               value={dependentParents}
//               onChange={(e) => {
//                 setDependentParents(e.target.value);
//                 updateCalculations(selectedPercentages);
//               }}
//             >
//               <option value="">Select a number</option>
//               {[0, 1, 2].map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Marital Status */}
//         <div className="w-full mb-8">
//           <p className="text-center mb-2">Marital Status</p>
//           <div className="flex justify-center gap-4">
//             <button
//               className={`btn rounded-md transition-colors duration-300 ${
//                 maritalStatus === "Single" ? "bg-[#c41e3a] text-white" : "bg-white text-black hover:bg-gray-200"
//               }`}
//               onClick={() => {
//                 setMaritalStatus("Single");
//                 updateCalculations(selectedPercentages);
//               }}
//             >
//               Single
//             </button>
//             <button
//               className={`btn rounded-md transition-colors duration-300 ${
//                 maritalStatus === "Married" ? "bg-[#c41e3a] text-white" : "bg-white text-black hover:bg-gray-200"
//               }`}
//               onClick={() => {
//                 setMaritalStatus("Married");
//                 updateCalculations(selectedPercentages);
//               }}
//             >
//               Married
//             </button>
//           </div>
//         </div>

//         {/* Current Disability Rating */}
//         <h2 className="text-xl font-bold mb-4">Current Disability Rating</h2>
//         <div className="relative w-32 h-32 mb-8">
//           <div className="absolute inset-0 rounded-full bg-[#c41e3a] flex items-center justify-center">
//             <span className="text-4xl font-bold">{currentDisability}%</span>
//           </div>
//         </div>

//         {/* Monthly Payment Amount */}
//         <h2 className="text-xl font-bold mb-4">Your Monthly Payment Amount</h2>
//         <div className="text-4xl font-bold text-[#c41e3a] mb-8">${monthlyPayment}</div>

//         {/* Reset Button */}
//         <button
//           className="btn bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors duration-300"
//           onClick={resetAll}
//         >
//           Reset All
//         </button>
//       </div>

//       {/* VA Rating and SMC Tables */}
//       <div className="w-full max-w-4xl mt-12">
//         {/* Combined VA Rating Table */}
//         <div className="bg-[#c41e3a] text-white p-4 flex justify-between items-center rounded-t-md">
//           <h2 className="text-xl font-bold">Combined VA Rating</h2>
//           <h2 className="text-xl font-bold">2025 VA Disability Pay Rate</h2>
//         </div>
//         <div className="bg-white text-[#002b5c] w-full rounded-b-md">
//           {vaRatingTable.map((item) => (
//             <div key={item.rating} className="flex justify-between p-3 border-b last:border-b-0">
//               <div className="font-bold">{item.rating}%</div>
//               <div className="text-[#c41e3a] font-bold">${item.amount.toFixed(2)}</div>
//             </div>
//           ))}
//         </div>

//         {/* Link to Learn More */}
//         <div className="mt-8 text-center">
//           <a href="#" className="text-[#c41e3a] underline font-bold hover:text-[#a11830] transition-colors duration-300">
//             To Find Out More, Click Here.
//           </a>
//         </div>

//         {/* Special Monthly Compensation Section */}
//         <h2 className="text-2xl font-bold text-[#c41e3a] mt-8 text-center">
//           What is Special Monthly Compensation (SMC)?
//         </h2>
//         <h3 className="text-xl font-bold mt-6 mb-4 text-center">How Long Have You Been Awarded?</h3>
//         <p className="text-white mb-6 text-center max-w-3xl mx-auto">
//           The U.S. Department of Veterans Affairs (VA) awards special monthly compensation (SMC) to veterans with
//           service-connected conditions so severe that they warrant a rating higher than 100 percent; the idea is that
//           certain disabilities or combinations of disabilities are more debilitating than accounted for by the regular
//           rating schedule.
//         </p>

//         {/* SMC Levels Table */}
//         <div className="bg-white text-[#002b5c] w-full mt-6 rounded-md">
//           <div className="bg-[#c41e3a] text-white p-4 flex justify-between items-center rounded-t-md">
//             <h2 className="text-xl font-bold">SMC Level</h2>
//             <h2 className="text-xl font-bold">2025 VA SMC Amount</h2>
//           </div>
//           {smcLevels.map((item) => (
//             <div key={item.level} className="flex justify-between p-3 border-b last:border-b-0">
//               <div className="font-bold">{item.level}</div>
//               <div className="text-[#c41e3a] font-bold">{item.amount}</div>
//             </div>
//           ))}
//         </div>

//         {/* Disclaimer */}
//         <div className="mt-12 mb-6">
//           <h2 className="text-xl font-bold mb-4 text-center">Disclaimer</h2>
//           <p className="text-white text-xs text-center max-w-3xl mx-auto">
//             This tool is for educational purposes only and does not constitute legal advice. The VA disability rates
//             shown are based on publicly available information and are subject to change. This is a simulation only and
//             is offered and provided by us with the understanding that we are not rendering legal, accounting, tax,
//             career, or other professional advice and services. Such information should not be used as a substitute for
//             consultation with professional accounting, tax, legal, or other competent advisers. We are not responsible
//             for the application that you have determined or selected for your use. We are not responsible for the
//             preparation of any output or deliverable that you have determined or selected for your use.
//           </p>
//           <p className="text-white text-xs text-center mt-4">
//             Website Powered by Wildwood LLC © September 2023. Please Review{" "}
//             <a href="#" className="underline hover:text-gray-300 transition-colors duration-300">
//               Terms & Privacy Policy
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }






// import { useState } from "react";

// const vaRatingTable = [
//   { rating: 10, amount: 171.31 },
//   { rating: 20, amount: 346.95 },
//   { rating: 30, amount: 537.42 },
//   { rating: 40, amount: 774.16 },
//   { rating: 50, amount: 1102.04 },
//   { rating: 60, amount: 1395.93 },
//   { rating: 70, amount: 1716.20 },
//   { rating: 80, amount: 2044.89 },
//   { rating: 90, amount: 2241.91 },
//   { rating: 100, amount: 3831.30 },
// ];

// const smcLevels = [
//   { level: "K", amount: "$136.06" },
//   { level: "L", amount: "$4,767.34" },
//   { level: "L ½", amount: "$5,013.79" },
//   { level: "M", amount: "$5,261.24" },
//   { level: "M ½", amount: "$5,622.78" },
//   { level: "N", amount: "$5,985.06" },
//   { level: "N ½", amount: "$6,337.11" },
//   { level: "O/P", amount: "$6,689.81" },
//   { level: "R-1", amount: "$9,559.22" },
//   { level: "R-2/T", amount: "$10,966.66" },
//   { level: "S", amount: "$4,071.15" },
// ];

// // Dependent and marital adjustments (approximated for 2025 based on VA patterns)
// const dependentAdjustments = {
//   under18: 70, // Per child under 18
//   between18And23: 230, // Per child 18-23
//   parent: 400, // Per parent
//   spouse: 150, // Additional for married status
// };

// const calculateCombinedRating = (ratings) => {
//   if (!ratings || Object.keys(ratings).length === 0) {
//     return { raw: 0, rounded: 0, bilateralFactors: { armFactor: 0, legFactor: 0, footFactor: 0 } };
//   }

//   // Validate ratings (0-100, multiples of 10)
//   const validRatings = Object.entries(ratings).map(([id, percentage]) => ({
//     id,
//     percentage: Math.max(0, Math.min(100, Math.round(percentage / 10) * 10)),
//   }));

//   // Define bilateral pairs
//   const bilateralPairs = [
//     ['leftLeg', 'rightLeg'],
//     ['leftArm', 'rightArm'],
//     ['leftFoot', 'rightFoot'],
//   ];

//   // Calculate bilateral ratings and factors
//   const bilateralRatings = [];
//   const usedIds = new Set();
//   const bilateralFactors = { armFactor: 0, legFactor: 0, footFactor: 0 };

//   bilateralPairs.forEach(([id1, id2], index) => {
//     const r1 = validRatings.find(r => r.id === id1);
//     const r2 = validRatings.find(r => r.id === id2);
//     if (r1 && r2 && !usedIds.has(r1.id) && !usedIds.has(r2.id)) {
//       const combined = r1.percentage + (r2.percentage * (1 - r1.percentage / 100));
//       const factor = combined * 0.1; // Bilateral factor (10%)
//       const adjusted = combined + factor; // Apply factor
//       bilateralRatings.push(Math.round(adjusted));
//       usedIds.add(r1.id);
//       usedIds.add(r2.id);

//       // Assign factor to appropriate category
//       if (index === 0) bilateralFactors.legFactor = factor.toFixed(2); // leftLeg/rightLeg
//       if (index === 1) bilateralFactors.armFactor = factor.toFixed(2); // leftArm/rightArm
//       if (index === 2) bilateralFactors.footFactor = factor.toFixed(2); // leftFoot/rightFoot
//     }
//   });

//   // Non-bilateral ratings
//   const nonBilateral = validRatings
//     .filter(r => !usedIds.has(r.id))
//     .map(r => r.percentage);

//   // Combine all ratings
//   const allRatings = [...bilateralRatings, ...nonBilateral].sort((a, b) => b - a);

//   // VA combination formula
//   let combined = allRatings[0] || 0;
//   for (let i = 1; i < allRatings.length; i++) {
//     combined += allRatings[i] * (1 - combined / 100);
//   }

//   return {
//     raw: combined,
//     rounded: Math.round(combined / 10) * 10,
//     bilateralFactors,
//   };
// };

// const calculateMonthlyPayment = (
//   roundedRating,
//   dependentsUnder18,
//   dependentsBetween18And23,
//   dependentParents,
//   maritalStatus
// ) => {
//   const basePayment = vaRatingTable.find(item => item.rating === roundedRating)?.amount || 0;

//   let additional = 0;
//   if (roundedRating >= 30) {
//     additional +=
//       Number(dependentsUnder18 || 0) * dependentAdjustments.under18 +
//       Number(dependentsBetween18And23 || 0) * dependentAdjustments.between18And23 +
//       Number(dependentParents || 0) * dependentAdjustments.parent;
//     if (maritalStatus === "Married") {
//       additional += dependentAdjustments.spouse;
//     }
//   }

//   return (basePayment + additional).toFixed(2);
// };

// export default function VeteransDisabilityCalculator() {
//   const [currentDisability, setCurrentDisability] = useState(0);
//   const [selectedDisabilities, setSelectedDisabilities] = useState([]);
//   const [selectedPercentages, setSelectedPercentages] = useState({});
//   const [bilateralFactors, setBilateralFactors] = useState({ armFactor: 0, legFactor: 0, footFactor: 0 });
//   const [dependentsUnder18, setDependentsUnder18] = useState("");
//   const [dependentsBetween18And23, setDependentsBetween18And23] = useState("");
//   const [dependentParents, setDependentParents] = useState("");
//   const [maritalStatus, setMaritalStatus] = useState("Single");
//   const [monthlyPayment, setMonthlyPayment] = useState("0.00");

//   const physicalDisabilities = [
//     { id: "leftLeg", label: "Left Leg" },
//     { id: "rightLeg", label: "Right Leg" },
//     { id: "leftArm", label: "Left Arm" },
//     { id: "rightArm", label: "Right Arm" },
//     { id: "leftFoot", label: "Left Foot" },
//     { id: "rightFoot", label: "Right Foot" },
//     { id: "back", label: "Back" },
//     { id: "ssd", label: "SSD" },
//     { id: "ptsd", label: "PTSD" },
//     { id: "tinnitus", label: "Tinnitus" },
//     { id: "migraine", label: "Migraine" },
//     { id: "sleepApnea", label: "Sleep Apnea" },
//     { id: "others", label: "Others" },
//   ];

//   const percentages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//   const handleDisabilitySelect = (disability) => {
//     if (selectedDisabilities.includes(disability)) {
//       setSelectedDisabilities(selectedDisabilities.filter((d) => d !== disability));
//       const newPercentages = { ...selectedPercentages };
//       delete newPercentages[disability];
//       setSelectedPercentages(newPercentages);
//       updateCalculations(newPercentages);
//     } else {
//       setSelectedDisabilities([...selectedDisabilities, disability]);
//     }
//   };

//   const handlePercentageSelect = (percentage) => {
//     if (selectedDisabilities.length > 0) {
//       const lastSelected = selectedDisabilities[selectedDisabilities.length - 1];
//       const newPercentages = { ...selectedPercentages, [lastSelected]: percentage };
//       setSelectedPercentages(newPercentages);
//       updateCalculations(newPercentages);
//     }
//   };

//   const updateCalculations = (percentages) => {
//     const { raw, rounded, bilateralFactors } = calculateCombinedRating(percentages);
//     setCurrentDisability(Math.round(raw * 10) / 10); // Display raw, rounded to 1 decimal
//     setBilateralFactors(bilateralFactors);

//     const payment = calculateMonthlyPayment(
//       rounded,
//       dependentsUnder18,
//       dependentsBetween18And23,
//       dependentParents,
//       maritalStatus
//     );
//     setMonthlyPayment(payment);
//   };

//   const resetAll = () => {
//     setCurrentDisability(0);
//     setSelectedDisabilities([]);
//     setSelectedPercentages({});
//     setBilateralFactors({ armFactor: 0, legFactor: 0, footFactor: 0 });
//     setDependentsUnder18("");
//     setDependentsBetween18And23("");
//     setDependentParents("");
//     setMaritalStatus("Single");
//     setMonthlyPayment("0.00");
//   };

//   return (
//     <div className="min-h-screen bg-[#002b5c] text-white flex flex-col items-center p-4 md:p-8">
//       {/* Header */}
//       <h1 className="text-2xl md:text-3xl font-bold mb-4 mt-10">Veterans Disability Calculator</h1>

//       {/* Calculator Section */}
//       <div className="w-full max-w-4xl flex flex-col items-center">
//         {/* Current Disability Percentage */}
//         <p className="text-center mb-2">Current Disability Percentage</p>
//         <div className="relative w-32 h-32 mb-8">
//           <div className="absolute inset-0 rounded-full bg-[#c41e3a] flex items-center justify-center">
//             <span className="text-4xl font-bold">{currentDisability}%</span>
//           </div>
//         </div>

//         <div>
//         {/* {(bilateralFactors.armFactor > 0 || bilateralFactors.legFactor > 0 || bilateralFactors.footFactor > 0) && ( */}
//           <div className="w-full mb-8">
//             <div className="bg-[#002b5c] text-white p-4 rounded-md">
//               <p className="uppercase">Bilateral Arm Factor Applied: {bilateralFactors.armFactor}</p>
//               <p className="uppercase">Bilateral Leg Factor Applied: {bilateralFactors.legFactor}</p>
//               <p className="uppercase">Bilateral Foot Factor Applied: {bilateralFactors.footFactor}</p>
//             </div>
//           </div>
//         {/* )} */}
//         </div>

//         {/* Physical Disability Selection */}
//         <h2 className="text-xl font-bold mb-4">Physical Disability</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 w-full">
//           {physicalDisabilities.map((disability) => (
//             <button
//               key={disability.id}
//               className={`btn btn-sm rounded-md transition-colors duration-300 ${
//                 selectedDisabilities.includes(disability.id)
//                   ? "bg-[#c41e3a] text-white py-5"
//                   : "bg-white text-black hover:bg-gray-200 py-5"
//               }`}
//               onClick={() => handleDisabilitySelect(disability.id)}
//             >
//               {disability.label}
//             </button>
//           ))}
//         </div>

//         {/* Disability Percentage Selection */}
//         <h2 className="text-xl font-bold mb-4">Disability Percentage</h2>
//         <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-8 w-full">
//           {percentages.map((percentage) => (
//             <button
//               key={percentage}
//               className="btn btn-sm bg-white text-black hover:bg-gray-200 rounded-md transition-colors duration-300"
//               onClick={() => handlePercentageSelect(percentage)}
//             >
//               {percentage}%
//             </button>
//           ))}
//         </div>

//         {/* Current Disabilities Applied */}
//         <h2 className="text-xl font-bold mb-4">Current Disabilities Applied</h2>
//         <div className="flex flex-wrap gap-2 mb-8 w-full justify-center">
//           {Object.entries(selectedPercentages).map(([disability, percentage]) => {
//             const label = physicalDisabilities.find((d) => d.id === disability)?.label || disability;
//             return (
//               <div key={disability} className="badge bg-[#c41e3a] text-white p-3 rounded-md">
//                 {percentage}% {label}
//               </div>
//             );
//           })}
//         </div>

//         {/* Bilateral Factors Display */}
       

//         {/* Additional Payment Factors */}
//         <h2 className="text-xl font-bold mb-4 md:mt-10">Additional Payment Amount Factors</h2>
//         <div className="w-full space-y-4 mb-8">
//           <div>
//             <label className="text-sm mb-1 block">Number of Dependent Children Under 18 Years Old</label>
//             <select
//               className="select select-bordered w-full bg-white text-black rounded-md"
//               value={dependentsUnder18}
//               onChange={(e) => {
//                 setDependentsUnder18(e.target.value);
//                 updateCalculations(selectedPercentages);
//               }}
//             >
//               <option value="">Select a number</option>
//               {[0, 1, 2, 3, 4, 5].map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="text-sm mb-1 block">Number of Dependent Children Between 18 and 23 Years Old</label>
//             <select
//               className="select select-bordered w-full bg-white text-black rounded-md"
//               value={dependentsBetween18And23}
//               onChange={(e) => {
//                 setDependentsBetween18And23(e.target.value);
//                 updateCalculations(selectedPercentages);
//               }}
//             >
//               <option value="">Select a number</option>
//               {[0, 1, 2, 3, 4, 5].map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="text-sm mb-1 block">Number of Dependent Parents</label>
//             <select
//               className="select select-bordered w-full bg-white text-black rounded-md"
//               value={dependentParents}
//               onChange={(e) => {
//                 setDependentParents(e.target.value);
//                 updateCalculations(selectedPercentages);
//               }}
//             >
//               <option value="">Select a number</option>
//               {[0, 1, 2].map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Marital Status */}
//         <div className="w-full mb-8">
//           <p className="text-center mb-2">Marital Status</p>
//           <div className="flex justify-center gap-4">
//             <button
//               className={`btn rounded-md transition-colors duration-300 ${
//                 maritalStatus === "Single" ? "bg-[#c41e3a] text-white" : "bg-white text-black hover:bg-gray-200"
//               }`}
//               onClick={() => {
//                 setMaritalStatus("Single");
//                 updateCalculations(selectedPercentages);
//               }}
//             >
//               Single
//             </button>
//             <button
//               className={`btn rounded-md transition-colors duration-300 ${
//                 maritalStatus === "Married" ? "bg-[#c41e3a] text-white" : "bg-white text-black hover:bg-gray-200"
//               }`}
//               onClick={() => {
//                 setMaritalStatus("Married");
//                 updateCalculations(selectedPercentages);
//               }}
//             >
//               Married
//             </button>
//           </div>
//         </div>

//         {/* Current Disability Rating */}
//         <h2 className="text-xl font-bold mb-4">Current Disability Rating</h2>
//         <div className="relative w-32 h-32 mb-8">
//           <div className="absolute inset-0 rounded-full bg-[#c41e3a] flex items-center justify-center">
//             <span className="text-4xl font-bold">{currentDisability}%</span>
//           </div>
//         </div>

//         {/* Monthly Payment Amount */}
//         <h2 className="text-xl font-bold mb-4">Your Monthly Payment Amount</h2>
//         <div className="text-4xl font-bold text-[#c41e3a] mb-8">${monthlyPayment}</div>

//         {/* Reset Button */}
//         <button
//           className="btn bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors duration-300"
//           onClick={resetAll}
//         >
//           Reset All
//         </button>
//       </div>

//       {/* VA Rating and SMC Tables */}
//       <div className="w-full max-w-4xl mt-12">
//         {/* Combined VA Rating Table */}
//         <div className="bg-[#c41e3a] text-white p-4 flex justify-between items-center rounded-t-md">
//           <h2 className="text-xl font-bold">Combined VA Rating</h2>
//           <h2 className="text-xl font-bold">2025 VA Disability Pay Rate</h2>
//         </div>
//         <div className="bg-white text-[#002b5c] w-full rounded-b-md">
//           {vaRatingTable.map((item) => (
//             <div key={item.rating} className="flex justify-between p-3 border-b last:border-b-0">
//               <div className="font-bold">{item.rating}%</div>
//               <div className="text-[#c41e3a] font-bold">${item.amount.toFixed(2)}</div>
//             </div>
//           ))}
//         </div>

//         {/* Link to Learn More */}
//         <div className="mt-8 text-center">
//           <a href="#" className="text-[#c41e3a] underline font-bold hover:text-[#a11830] transition-colors duration-300">
//             To Find Out More, Click Here.
//           </a>
//         </div>

//         {/* Special Monthly Compensation Section */}
//         <h2 className="text-2xl font-bold text-[#c41e3a] mt-8 text-center">
//           What is Special Monthly Compensation (SMC)?
//         </h2>
//         <h3 className="text-xl font-bold mt-6 mb-4 text-center">How Long Have You Been Awarded?</h3>
//         <p className="text-white mb-6 text-center max-w-3xl mx-auto">
//           The U.S. Department of Veterans Affairs (VA) awards special monthly compensation (SMC) to veterans with
//           service-connected conditions so severe that they warrant a rating higher than 100 percent; the idea is that
//           certain disabilities or combinations of disabilities are more debilitating than accounted for by the regular
//           rating schedule.
//         </p>

//         {/* SMC Levels Table */}
//         <div className="bg-white text-[#002b5c] w-full mt-6 rounded-md">
//           <div className="bg-[#c41e3a] text-white p-4 flex justify-between items-center rounded-t-md">
//             <h2 className="text-xl font-bold">SMC Level</h2>
//             <h2 className="text-xl font-bold">2025 VA SMC Amount</h2>
//           </div>
//           {smcLevels.map((item) => (
//             <div key={item.level} className="flex justify-between p-3 border-b last:border-b-0">
//               <div className="font-bold">{item.level}</div>
//               <div className="text-[#c41e3a] font-bold">{item.amount}</div>
//             </div>
//           ))}
//         </div>

//         {/* Disclaimer */}
//         <div className="mt-12 mb-6">
//           <h2 className="text-xl font-bold mb-4 text-center">Disclaimer</h2>
//           <p className="text-white text-xs text-center max-w-3xl mx-auto">
//             This tool is for educational purposes only and does not constitute legal advice. The VA disability rates
//             shown are based on publicly available information and are subject to change. This is a simulation only and
//             is offered and provided by us with the understanding that we are not rendering legal, accounting, tax,
//             career, or other professional advice and services. Such information should not be used as a substitute for
//             consultation with professional accounting, tax, legal, or other competent advisers. We are not responsible
//             for the application that you have determined or selected for your use. We are not responsible for the
//             preparation of any output or deliverable that you have determined or selected for your use.
//           </p>
//           <p className="text-white text-xs text-center mt-4">
//             Website Powered by Wildwood LLC © September 2023. Please Review{" "}
//             <a href="#" className="underline hover:text-gray-300 transition-colors duration-300">
//               Terms & Privacy Policy
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }






// import { useState } from "react";

// const vaRatingTable = [
//   { rating: 10, amount: 171.31 },
//   { rating: 20, amount: 346.95 },
//   { rating: 30, amount: 537.42 },
//   { rating: 40, amount: 774.16 },
//   { rating: 50, amount: 1102.04 },
//   { rating: 60, amount: 1395.93 },
//   { rating: 70, amount: 1716.20 },
//   { rating: 80, amount: 2044.89 },
//   { rating: 90, amount: 2241.91 },
//   { rating: 100, amount: 3831.30 },
// ];

// const smcLevels = [
//   { level: "K", amount: "$136.06" },
//   { level: "L", amount: "$4,767.34" },
//   { level: "L ½", amount: "$5,013.79" },
//   { level: "M", amount: "$5,261.24" },
//   { level: "M ½", amount: "$5,622.78" },
//   { level: "N", amount: "$5,985.06" },
//   { level: "N ½", amount: "$6,337.11" },
//   { level: "O/P", amount: "$6,689.81" },
//   { level: "R-1", amount: "$9,559.22" },
//   { level: "R-2/T", amount: "$10,966.66" },
//   { level: "S", amount: "$4,071.15" },
// ];

// // Dependent and marital adjustments (calibrated to vhv2020.com)
// const dependentAdjustments = {
//   under18: 0, // No adjustment (0 children in scenario)
//   between18And23First: 207, // First child 18-23
//   between18And23Second: 129, // Second child 18-23
//   between18And23Additional: 0, // Cap at 2 children
//   parent: 90, // Per parent
//   spouse: 73, // Married status
// };

// const calculateCombinedRating = (ratings) => {
//   if (!ratings || Object.keys(ratings).length === 0) {
//     return { raw: 0, rounded: 0, bilateralFactors: { armFactor: 0, legFactor: 0, footFactor: 0 } };
//   }

//   // Validate ratings (0-100, multiples of 10)
//   const validRatings = Object.entries(ratings).map(([id, percentage]) => ({
//     id,
//     percentage: Math.max(0, Math.min(100, Math.round(percentage / 10) * 10)),
//   }));

//   // Define bilateral pairs
//   const bilateralPairs = [
//     ['leftLeg', 'rightLeg'],
//     ['leftArm', 'rightArm'],
//     ['leftFoot', 'rightFoot'],
//   ];

//   // Calculate bilateral ratings and factors
//   const bilateralRatings = [];
//   const usedIds = new Set();
//   const bilateralFactors = { armFactor: 0, legFactor: 0, footFactor: 0 };

//   bilateralPairs.forEach(([id1, id2], index) => {
//     const r1 = validRatings.find(r => r.id === id1);
//     const r2 = validRatings.find(r => r.id === id2);
//     if (r1 && r2 && !usedIds.has(r1.id) && !usedIds.has(r2.id)) {
//       const combined = r1.percentage + (r2.percentage * (1 - r1.percentage / 100));
//       const factor = combined * 0.1; // Bilateral factor (10%)
//       const adjusted = combined + factor; // Apply factor
//       bilateralRatings.push(Math.round(adjusted));
//       usedIds.add(r1.id);
//       usedIds.add(r2.id);

//       // Assign factor to appropriate category
//       if (index === 0) bilateralFactors.legFactor = factor.toFixed(2); // leftLeg/rightLeg
//       if (index === 1) bilateralFactors.armFactor = factor.toFixed(2); // leftArm/rightArm
//       if (index === 2) bilateralFactors.footFactor = factor.toFixed(2); // leftFoot/rightFoot
//     }
//   });

//   // Non-bilateral ratings
//   const nonBilateral = validRatings
//     .filter(r => !usedIds.has(r.id))
//     .map(r => r.percentage);

//   // Combine all ratings
//   const allRatings = [...bilateralRatings, ...nonBilateral].sort((a, b) => b - a);

//   // VA combination formula
//   let combined = allRatings[0] || 0;
//   for (let i = 1; i < allRatings.length; i++) {
//     combined += allRatings[i] * (1 - combined / 100);
//   }

//   return {
//     raw: combined,
//     rounded: Math.round(combined / 10) * 10,
//     bilateralFactors,
//   };
// };

// const calculateMonthlyPayment = (
//   roundedRating,
//   dependentsUnder18,
//   dependentsBetween18And23,
//   dependentParents,
//   maritalStatus
// ) => {
//   const basePayment = vaRatingTable.find(item => item.rating === roundedRating)?.amount || 0;

//   let additional = 0;
//   if (roundedRating >= 30) {
//     // Children under 18
//     const under18Count = Number(dependentsUnder18 || 0);
//     additional += under18Count * dependentAdjustments.under18;

//     // Children 18-23: Cap at 2
//     const between18And23Count = Math.min(Number(dependentsBetween18And23 || 0), 2);
//     if (between18And23Count >= 1) {
//       additional += dependentAdjustments.between18And23First;
//     }
//     if (between18And23Count >= 2) {
//       additional += dependentAdjustments.between18And23Second;
//     }

//     // Dependent parents
//     additional += Number(dependentParents || 0) * dependentAdjustments.parent;

//     // Marital status
//     if (maritalStatus === "Married") {
//       additional += dependentAdjustments.spouse;
//     }
//   }

//   return (basePayment + additional).toFixed(2);
// };

// export default function VeteransDisabilityCalculator() {
//   const [currentDisability, setCurrentDisability] = useState(0);
//   const [selectedDisabilities, setSelectedDisabilities] = useState([]);
//   const [selectedPercentages, setSelectedPercentages] = useState({});
//   const [bilateralFactors, setBilateralFactors] = useState({ armFactor: 0, legFactor: 0, footFactor: 0 });
//   const [dependentsUnder18, setDependentsUnder18] = useState("");
//   const [dependentsBetween18And23, setDependentsBetween18And23] = useState("");
//   const [dependentParents, setDependentParents] = useState("");
//   const [maritalStatus, setMaritalStatus] = useState("Single");
//   const [monthlyPayment, setMonthlyPayment] = useState("0.00");

//   const physicalDisabilities = [
//     { id: "leftLeg", label: "Left Leg" },
//     { id: "rightLeg", label: "Right Leg" },
//     { id: "leftArm", label: "Left Arm" },
//     { id: "rightArm", label: "Right Arm" },
//     { id: "leftFoot", label: "Left Foot" },
//     { id: "rightFoot", label: "Right Foot" },
//     { id: "back", label: "Back" },
//     { id: "ssd", label: "SSD" },
//     { id: "ptsd", label: "PTSD" },
//     { id: "tinnitus", label: "Tinnitus" },
//     { id: "migraine", label: "Migraine" },
//     { id: "sleepApnea", label: "Sleep Apnea" },
//     { id: "others", label: "Others" },
//   ];

//   const percentages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//   const handleDisabilitySelect = (disability) => {
//     if (selectedDisabilities.includes(disability)) {
//       setSelectedDisabilities(selectedDisabilities.filter((d) => d !== disability));
//       const newPercentages = { ...selectedPercentages };
//       delete newPercentages[disability];
//       setSelectedPercentages(newPercentages);
//       updateCalculations(newPercentages);
//     } else {
//       setSelectedDisabilities([...selectedDisabilities, disability]);
//     }
//   };

//   const handlePercentageSelect = (percentage) => {
//     if (selectedDisabilities.length > 0) {
//       const lastSelected = selectedDisabilities[selectedDisabilities.length - 1];
//       const newPercentages = { ...selectedPercentages, [lastSelected]: percentage };
//       setSelectedPercentages(newPercentages);
//       updateCalculations(newPercentages);
//     }
//   };

//   const updateCalculations = (percentages) => {
//     const { raw, rounded, bilateralFactors } = calculateCombinedRating(percentages);
//     setCurrentDisability(Math.round(raw * 10) / 10); // Display raw, rounded to 1 decimal
//     setBilateralFactors(bilateralFactors);

//     const payment = calculateMonthlyPayment(
//       rounded,
//       dependentsUnder18,
//       dependentsBetween18And23,
//       dependentParents,
//       maritalStatus
//     );
//     setMonthlyPayment(payment);
//   };

//   const resetAll = () => {
//     setCurrentDisability(0);
//     setSelectedDisabilities([]);
//     setSelectedPercentages({});
//     setBilateralFactors({ armFactor: 0, legFactor: 0, footFactor: 0 });
//     setDependentsUnder18("");
//     setDependentsBetween18And23("");
//     setDependentParents("");
//     setMaritalStatus("Single");
//     setMonthlyPayment("0.00");
//   };

//   return (
//     <div className="min-h-screen bg-[#002b5c] text-white flex flex-col items-center p-4 md:p-8">
//       {/* Header */}
//       <h1 className="text-2xl md:text-3xl font-bold mb-4 mt-10">Veterans Disability Calculator</h1>

//       {/* Calculator Section */}
//       <div className="w-full max-w-4xl flex flex-col items-center">
//         {/* Current Disability Percentage */}
//         <p className="text-center mb-2">Current Disability Percentage</p>
//         <div className="relative w-32 h-32 mb-8">
//           <div className="absolute inset-0 rounded-full bg-[#c41e3a] flex items-center justify-center">
//             <span className="text-4xl font-bold">{currentDisability}%</span>
//           </div>
//         </div>

//         <div>
//           <div className="w-full mb-8">
//             <div className="bg-[#002b5c] text-white p-4 rounded-md">
//               <p className="uppercase">Bilateral Arm Factor Applied: {bilateralFactors.armFactor}</p>
//               <p className="uppercase">Bilateral Leg Factor Applied: {bilateralFactors.legFactor}</p>
//               <p className="uppercase">Bilateral Foot Factor Applied: {bilateralFactors.footFactor}</p>
//             </div>
//           </div>
//         </div>

//         {/* Physical Disability Selection */}
//         <h2 className="text-xl font-bold mb-4">Physical Disability</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 w-full">
//           {physicalDisabilities.map((disability) => (
//             <button
//               key={disability.id}
//               className={`btn btn-sm rounded-md transition-colors duration-300 ${
//                 selectedDisabilities.includes(disability.id)
//                   ? "bg-[#c41e3a] text-white py-5"
//                   : "bg-white text-black hover:bg-gray-200 py-5"
//               }`}
//               onClick={() => handleDisabilitySelect(disability.id)}
//             >
//               {disability.label}
//             </button>
//           ))}
//         </div>

//         {/* Disability Percentage Selection */}
//         <h2 className="text-xl font-bold mb-4">Disability Percentage</h2>
//         <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-8 w-full">
//           {percentages.map((percentage) => (
//             <button
//               key={percentage}
//               className="btn btn-sm bg-white text-black hover:bg-gray-200 rounded-md transition-colors duration-300"
//               onClick={() => handlePercentageSelect(percentage)}
//             >
//               {percentage}%
//             </button>
//           ))}
//         </div>

//         {/* Current Disabilities Applied */}
//         <h2 className="text-xl font-bold mb-4">Current Disabilities Applied</h2>
//         <div className="flex flex-wrap gap-2 mb-8 w-full justify-center">
//           {Object.entries(selectedPercentages).map(([disability, percentage]) => {
//             const label = physicalDisabilities.find((d) => d.id === disability)?.label || disability;
//             return (
//               <div key={disability} className="badge bg-[#c41e3a] text-white p-3 rounded-md">
//                 {percentage}% {label}
//               </div>
//             );
//           })}
//         </div>

//         {/* Additional Payment Factors */}
//         <h2 className="text-xl font-bold mb-4 md:mt-10">Additional Payment Amount Factors</h2>
//         <div className="w-full space-y-4 mb-8">
//           <div>
//             <label className="text-sm mb-1 block">Number of Dependent Children Under 18 Years Old</label>
//             <select
//               className="select select-bordered w-full bg-white text-black rounded-md"
//               value={dependentsUnder18}
//               onChange={(e) => {
//                 setDependentsUnder18(e.target.value);
//                 updateCalculations(selectedPercentages);
//               }}
//             >
//               <option value="">Select a number</option>
//               {[0, 1, 2, 3, 4, 5].map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="text-sm mb-1 block">Number of Dependent Children Between 18 and 23 Years Old</label>
//             <select
//               className="select select-bordered w-full bg-white text-black rounded-md"
//               value={dependentsBetween18And23}
//               onChange={(e) => {
//                 setDependentsBetween18And23(e.target.value);
//                 updateCalculations(selectedPercentages);
//               }}
//             >
//               <option value="">Select a number</option>
//               {[0, 1, 2, 3, 4, 5].map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="text-sm mb-1 block">Number of Dependent Parents</label>
//             <select
//               className="select select-bordered w-full bg-white text-black rounded-md"
//               value={dependentParents}
//               onChange={(e) => {
//                 setDependentParents(e.target.value);
//                 updateCalculations(selectedPercentages);
//               }}
//             >
//               <option value="">Select a number</option>
//               {[0, 1, 2].map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Marital Status */}
//         <div className="w-full mb-8">
//           <p className="text-center mb-2">Marital Status</p>
//           <div className="flex justify-center gap-4">
//             <button
//               className={`btn rounded-md transition-colors duration-300 ${
//                 maritalStatus === "Single" ? "bg-[#c41e3a] text-white" : "bg-white text-black hover:bg-gray-200"
//               }`}
//               onClick={() => {
//                 setMaritalStatus("Single");
//                 updateCalculations(selectedPercentages);
//               }}
//             >
//               Single
//             </button>
//             <button
//               className={`btn rounded-md transition-colors duration-300 ${
//                 maritalStatus === "Married" ? "bg-[#c41e3a] text-white" : "bg-white text-black hover:bg-gray-200"
//               }`}
//               onClick={() => {
//                 setMaritalStatus("Married");
//                 updateCalculations(selectedPercentages);
//               }}
//             >
//               Married
//             </button>
//           </div>
//         </div>

//         {/* Current Disability Rating */}
//         <h2 className="text-xl font-bold mb-4">Current Disability Rating</h2>
//         <div className="relative w-32 h-32 mb-8">
//           <div className="absolute inset-0 rounded-full bg-[#c41e3a] flex items-center justify-center">
//             <span className="text-4xl font-bold">{currentDisability}%</span>
//           </div>
//         </div>

//         {/* Monthly Payment Amount */}
//         <h2 className="text-xl font-bold mb-4">Your Monthly Payment Amount</h2>
//         <div className="text-4xl font-bold text-[#c41e3a] mb-8">${monthlyPayment}</div>

//         {/* Reset Button */}
//         <button
//           className="btn bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors duration-300"
//           onClick={resetAll}
//         >
//           Reset All
//         </button>
//       </div>

//       {/* VA Rating and SMC Tables */}
//       <div className="w-full max-w-4xl mt-12">
//         {/* Combined VA Rating Table */}
//         <div className="bg-[#c41e3a] text-white p-4 flex justify-between items-center rounded-t-md">
//           <h2 className="text-xl font-bold">Combined VA Rating</h2>
//           <h2 className="text-xl font-bold">2025 VA Disability Pay Rate</h2>
//         </div>
//         <div className="bg-white text-[#002b5c] w-full rounded-b-md">
//           {vaRatingTable.map((item) => (
//             <div key={item.rating} className="flex justify-between p-3 border-b last:border-b-0">
//               <div className="font-bold">{item.rating}%</div>
//               <div className="text-[#c41e3a] font-bold">${item.amount.toFixed(2)}</div>
//             </div>
//           ))}
//         </div>

//         {/* Link to Learn More */}
//         <div className="mt-8 text-center">
//           <a href="#" className="text-[#c41e3a] underline font-bold hover:text-[#a11830] transition-colors duration-300">
//             To Find Out More, Click Here.
//           </a>
//         </div>

//         {/* Special Monthly Compensation Section */}
//         <h2 className="text-2xl font-bold text-[#c41e3a] mt-8 text-center">
//           What is Special Monthly Compensation (SMC)?
//         </h2>
//         <h3 className="text-xl font-bold mt-6 mb-4 text-center">How Long Have You Been Awarded?</h3>
//         <p className="text-white mb-6 text-center max-w-3xl mx-auto">
//           The U.S. Department of Veterans Affairs (VA) awards special monthly compensation (SMC) to veterans with
//           service-connected conditions so severe that they warrant a rating higher than 100 percent; the idea is that
//           certain disabilities or combinations of disabilities are more debilitating than accounted for by the regular
//           rating schedule.
//         </p>

//         {/* SMC Levels Table */}
//         <div className="bg-white text-[#002b5c] w-full mt-6 rounded-md">
//           <div className="bg-[#c41e3a] text-white p-4 flex justify-between items-center rounded-t-md">
//             <h2 className="text-xl font-bold">SMC Level</h2>
//             <h2 className="text-xl font-bold">2025 VA SMC Amount</h2>
//           </div>
//           {smcLevels.map((item) => (
//             <div key={item.level} className="flex justify-between p-3 border-b last:border-b-0">
//               <div className="font-bold">{item.level}</div>
//               <div className="text-[#c41e3a] font-bold">{item.amount}</div>
//             </div>
//           ))}
//         </div>

//         {/* Disclaimer */}
//         <div className="mt-12 mb-6">
//           <h2 className="text-xl font-bold mb-4 text-center">Disclaimer</h2>
//           <p className="text-white text-xs text-center max-w-3xl mx-auto">
//             This tool is for educational purposes only and does not constitute legal advice. The VA disability rates
//             shown are based on publicly available information and are subject to change. This is a simulation only and
//             is offered and provided by us with the understanding that we are not rendering legal, accounting, tax,
//             career, or other professional advice and services. Such information should not be used as a substitute for
//             consultation with professional accounting, tax, legal, or other competent advisers. We are not responsible
//             for the application that you have determined or selected for your use. We are not responsible for the
//             preparation of any output or deliverable that you have determined or selected for your use.
//           </p>
//           <p className="text-white text-xs text-center mt-4">
//             Website Powered by Wildwood LLC © September 2023. Please Review{" "}
//             <a href="#" className="underline hover:text-gray-300 transition-colors duration-300">
//               Terms & Privacy Policy
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }





import { useState } from "react";

const vaRatingTable = [
  { rating: 10, amount: 171.31 },
  { rating: 20, amount: 346.95 },
  { rating: 30, amount: 537.42 },
  { rating: 40, amount: 774.16 },
  { rating: 50, amount: 1102.04 },
  { rating: 60, amount: 1395.93 },
  { rating: 70, amount: 1716.20 },
  { rating: 80, amount: 2044.89 },
  { rating: 90, amount: 2241.91 },
  { rating: 100, amount: 3831.30 },
];

const smcLevels = [
  { level: "K", amount: "$136.06" },
  { level: "L", amount: "$4,767.34" },
  { level: "L ½", amount: "$5,013.79" },
  { level: "M", amount: "$5,261.24" },
  { level: "M ½", amount: "$5,622.78" },
  { level: "N", amount: "$5,985.06" },
  { level: "N ½", amount: "$6,337.11" },
  { level: "O/P", amount: "$6,689.81" },
  { level: "R-1", amount: "$9,559.22" },
  { level: "R-2/T", amount: "$10,966.66" },
  { level: "S", amount: "$4,071.15" },
];

// Dependent and marital adjustments (calibrated to vhv2020.com)
const dependentAdjustments = {
  under18: 0, // First child under 18
  between18And23First: 207, // First child 18-23
  between18And23Second: 129, // Second child 18-23
  between18And23Additional: 0, // Cap at 2
  parentSingle: 0, // Single parent
  parentTwo: 90, // Per parent when exactly 2
  spouse: 73, // Married status
  spouseAidAndAttendance: 64, // A/A for spouse (VA 2025 rate)
};

const calculateCombinedRating = (ratings) => {
  if (!ratings || Object.keys(ratings).length === 0) {
    return { raw: 0, rounded: 0, bilateralFactors: { armFactor: 0, legFactor: 0, footFactor: 0 } };
  }

  // Validate ratings (0-100, multiples of 10)
  const validRatings = Object.entries(ratings).map(([id, percentage]) => ({
    id,
    percentage: Math.max(0, Math.min(100, Math.round(percentage / 10) * 10)),
  }));

  // Define bilateral pairs
  const bilateralPairs = [
    ['leftLeg', 'rightLeg'],
    ['leftArm', 'rightArm'],
    ['leftFoot', 'rightFoot'],
  ];

  // Calculate bilateral ratings and factors
  const bilateralRatings = [];
  const usedIds = new Set();
  const bilateralFactors = { armFactor: 0, legFactor: 0, footFactor: 0 };

  bilateralPairs.forEach(([id1, id2], index) => {
    const r1 = validRatings.find(r => r.id === id1);
    const r2 = validRatings.find(r => r.id === id2);
    if (r1 && r2 && !usedIds.has(r1.id) && !usedIds.has(r2.id)) {
      const combined = r1.percentage + (r2.percentage * (1 - r1.percentage / 100));
      const factor = combined * 0.1; // Bilateral factor (10%)
      const adjusted = combined + factor; // Apply factor
      bilateralRatings.push(Math.round(adjusted));
      usedIds.add(r1.id);
      usedIds.add(r2.id);

      // Assign factor to appropriate category
      if (index === 0) bilateralFactors.legFactor = factor.toFixed(2); // leftLeg/rightLeg
      if (index === 1) bilateralFactors.armFactor = factor.toFixed(2); // leftArm/rightArm
      if (index === 2) bilateralFactors.footFactor = factor.toFixed(2); // leftFoot/rightFoot
    }
  });

  // Non-bilateral ratings
  const nonBilateral = validRatings
    .filter(r => !usedIds.has(r.id))
    .map(r => r.percentage);

  // Combine all ratings
  const allRatings = [...bilateralRatings, ...nonBilateral].sort((a, b) => b - a);

  // VA combination formula
  let combined = allRatings[0] || 0;
  for (let i = 1; i < allRatings.length; i++) {
    combined += allRatings[i] * (1 - combined / 100);
  }

  return {
    raw: combined,
    rounded: Math.round(combined / 10) * 10,
    bilateralFactors,
  };
};

const calculateMonthlyPayment = (
  roundedRating,
  dependentsUnder18,
  dependentsBetween18And23,
  dependentParents,
  maritalStatus,
  spouseAidAndAttendance
) => {
  const basePayment = vaRatingTable.find(item => item.rating === roundedRating)?.amount || 0;

  let additional = 0;
  if (roundedRating >= 30) {
    // Children under 18
    const under18Count = Number(dependentsUnder18 || 0);
    additional += under18Count * dependentAdjustments.under18;

    // Children 18-23
    const between18And23Count = Number(dependentsBetween18And23 || 0);
    if (between18And23Count === 1) {
      additional += dependentAdjustments.between18And23First;
    } else if (between18And23Count >= 2) {
      additional += dependentAdjustments.between18And23First + dependentAdjustments.between18And23Second;
    }

    // Dependent parents
    const parentCount = Number(dependentParents || 0);
    if (parentCount === 1) {
      additional += dependentAdjustments.parentSingle;
    } else if (parentCount === 2) {
      additional += 2 * dependentAdjustments.parentTwo;
    }

    // Marital status
    if (maritalStatus === "Married") {
      additional += dependentAdjustments.spouse;
      if (spouseAidAndAttendance === "Yes") {
        additional += dependentAdjustments.spouseAidAndAttendance;
      }
    }
  }

  return (basePayment + additional).toFixed(2);
};

export default function VeteransDisabilityCalculator() {
  const [currentDisability, setCurrentDisability] = useState(0);
  const [selectedDisabilities, setSelectedDisabilities] = useState([]);
  const [selectedPercentages, setSelectedPercentages] = useState({});
  const [bilateralFactors, setBilateralFactors] = useState({ armFactor: 0, legFactor: 0, footFactor: 0 });
  const [dependentsUnder18, setDependentsUnder18] = useState("");
  const [dependentsBetween18And23, setDependentsBetween18And23] = useState("");
  const [dependentParents, setDependentParents] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("Single");
  const [spouseAidAndAttendance, setSpouseAidAndAttendance] = useState("No");
  const [monthlyPayment, setMonthlyPayment] = useState("0.00");

  const physicalDisabilities = [
    { id: "leftLeg", label: "Left Leg" },
    { id: "rightLeg", label: "Right Leg" },
    { id: "leftArm", label: "Left Arm" },
    { id: "rightArm", label: "Right Arm" },
    { id: "leftFoot", label: "Left Foot" },
    { id: "rightFoot", label: "Right Foot" },
    { id: "back", label: "Back" },
    { id: "ssd", label: "SSD" },
    { id: "ptsd", label: "PTSD" },
    { id: "tinnitus", label: "Tinnitus" },
    { id: "migraine", label: "Migraine" },
    { id: "sleepApnea", label: "Sleep Apnea" },
    { id: "others", label: "Others" },
  ];

  const percentages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const handleDisabilitySelect = (disability) => {
    if (selectedDisabilities.includes(disability)) {
      setSelectedDisabilities(selectedDisabilities.filter((d) => d !== disability));
      const newPercentages = { ...selectedPercentages };
      delete newPercentages[disability];
      setSelectedPercentages(newPercentages);
      updateCalculations(newPercentages);
    } else {
      setSelectedDisabilities([...selectedDisabilities, disability]);
    }
  };

  const handlePercentageSelect = (percentage) => {
    if (selectedDisabilities.length > 0) {
      const lastSelected = selectedDisabilities[selectedDisabilities.length - 1];
      const newPercentages = { ...selectedPercentages, [lastSelected]: percentage };
      setSelectedPercentages(newPercentages);
      updateCalculations(newPercentages);
    }
  };

  const updateCalculations = (percentages) => {
    const { raw, rounded, bilateralFactors } = calculateCombinedRating(percentages);
    setCurrentDisability(Math.round(raw * 10) / 10); // Display raw, rounded to 1 decimal
    setBilateralFactors(bilateralFactors);

    const payment = calculateMonthlyPayment(
      rounded,
      dependentsUnder18,
      dependentsBetween18And23,
      dependentParents,
      maritalStatus,
      spouseAidAndAttendance
    );
    setMonthlyPayment(payment);
  };

  const resetAll = () => {
    setCurrentDisability(0);
    setSelectedDisabilities([]);
    setSelectedPercentages({});
    setBilateralFactors({ armFactor: 0, legFactor: 0, footFactor: 0 });
    setDependentsUnder18("");
    setDependentsBetween18And23("");
    setDependentParents("");
    setMaritalStatus("Single");
    setSpouseAidAndAttendance("No");
    setMonthlyPayment("0.00");
  };

  const roundedRating = calculateCombinedRating(selectedPercentages).rounded;

  return (
    <div className="min-h-screen bg-[#002b5c] text-white flex flex-col items-center p-4 md:p-8">
      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-bold mb-4 mt-10">Veterans Disability Calculator</h1>

      {/* Calculator Section */}
      <div className="w-full max-w-4xl flex flex-col items-center">
        {/* Current Disability Percentage */}
        <p className="text-center mb-2">Current Disability Percentage</p>
        <div className="relative w-32 h-32 mb-8">
          <div className="absolute inset-0 rounded-full bg-[#c41e3a] flex items-center justify-center">
            <span className="text-4xl font-bold">{currentDisability}%</span>
          </div>
        </div>

        <div>
          <div className="w-full mb-8">
            <div className="bg-[#002b5c] text-white p-4 rounded-md">
              <p className="uppercase">Bilateral Arm Factor Applied: {bilateralFactors.armFactor}</p>
              <p className="uppercase">Bilateral Leg Factor Applied: {bilateralFactors.legFactor}</p>
              <p className="uppercase">Bilateral Foot Factor Applied: {bilateralFactors.footFactor}</p>
            </div>
          </div>
        </div>

        {/* Physical Disability Selection */}
        <h2 className="text-xl font-bold mb-4">Physical Disability</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 w-full">
          {physicalDisabilities.map((disability) => (
            <button
              key={disability.id}
              className={`btn btn-sm rounded-md transition-colors duration-300 ${
                selectedDisabilities.includes(disability.id)
                  ? "bg-[#c41e3a] text-white py-5"
                  : "bg-white text-black hover:bg-gray-200 py-5"
              }`}
              onClick={() => handleDisabilitySelect(disability.id)}
            >
              {disability.label}
            </button>
          ))}
        </div>

        {/* Disability Percentage Selection */}
        <h2 className="text-xl font-bold mb-4">Disability Percentage</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-8 w-full">
          {percentages.map((percentage) => (
            <button
              key={percentage}
              className="btn btn-sm bg-white text-black hover:bg-gray-200 rounded-md transition-colors duration-300"
              onClick={() => handlePercentageSelect(percentage)}
            >
              {percentage}%
            </button>
          ))}
        </div>

        {/* Current Disabilities Applied */}
        <h2 className="text-xl font-bold mb-4">Current Disabilities Applied</h2>
        <div className="flex flex-wrap gap-2 mb-8 w-full justify-center">
          {Object.entries(selectedPercentages).map(([disability, percentage]) => {
            const label = physicalDisabilities.find((d) => d.id === disability)?.label || disability;
            return (
              <div key={disability} className="badge bg-[#c41e3a] text-white p-3 rounded-md">
                {percentage}% {label}
              </div>
            );
          })}
        </div>

        {/* Additional Payment Factors */}
        <h2 className="text-xl font-bold mb-4 md:mt-10">Additional Payment Amount Factors</h2>
        <div className="w-full space-y-4 mb-8">
          <div>
            <label className="text-sm mb-1 block">Number of Dependent Children Under 18 Years Old</label>
            <select
              className="select select-bordered w-full bg-white text-black rounded-md"
              value={dependentsUnder18}
              onChange={(e) => {
                setDependentsUnder18(e.target.value);
                updateCalculations(selectedPercentages);
              }}
            >
              <option value="">Select a number</option>
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm mb-1 block">Number of Dependent Children Between 18 and 24 Years Old</label>
            <select
              className="select select-bordered w-full bg-white text-black rounded-md"
              value={dependentsBetween18And23}
              onChange={(e) => {
                setDependentsBetween18And23(e.target.value);
                updateCalculations(selectedPercentages);
              }}
            >
              <option value="">Select a number</option>
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm mb-1 block">Number of Dependent Parents</label>
            <select
              className="select select-bordered w-full bg-white text-black rounded-md"
              value={dependentParents}
              onChange={(e) => {
                setDependentParents(e.target.value);
                updateCalculations(selectedPercentages);
              }}
            >
              <option value="">Select a number</option>
              {[0, 1, 2].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Marital Status */}
        <div className="w-full mb-8">
          <p className="text-center mb-2">Marital Status</p>
          <div className="flex justify-center gap-4">
            <button
              className={`btn rounded-md transition-colors duration-300 ${
                maritalStatus === "Single" ? "bg-[#c41e3a] text-white" : "bg-white text-black hover:bg-gray-200"
              }`}
              onClick={() => {
                setMaritalStatus("Single");
                setSpouseAidAndAttendance("No");
                updateCalculations(selectedPercentages);
              }}
            >
              Single
            </button>
            <button
              className={`btn rounded-md transition-colors duration-300 ${
                maritalStatus === "Married" ? "bg-[#c41e3a] text-white" : "bg-white text-black hover:bg-gray-200"
              }`}
              onClick={() => {
                setMaritalStatus("Married");
                updateCalculations(selectedPercentages);
              }}
            >
              Married
            </button>
          </div>
        </div>

        {/* Spouse Aid and Attendance */}
        {maritalStatus === "Married" && (
          <div className="w-full mb-8">
            <label className="text-sm mb-1 block text-center">Does your spouse need Aid and Attendance (A/A)?</label>
            <select
              className="select select-bordered w-full max-w-xs mx-auto bg-white text-black rounded-md"
              value={spouseAidAndAttendance}
              onChange={(e) => {
                setSpouseAidAndAttendance(e.target.value);
                updateCalculations(selectedPercentages);
              }}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
        )}

        {/* Current Disability Rating */}
        <h2 className="text-xl font-bold mb-4">Current Disability Rating</h2>
        <div className="relative w-32 h-32 mb-8">
          <div className="absolute inset-0 rounded-full bg-[#c41e3a] flex items-center justify-center">
            <span className="text-4xl font-bold">{roundedRating}%</span>
          </div>
        </div>

        {/* Monthly Payment Amount */}
        <h2 className="text-xl font-bold mb-4">Your Monthly Payment Amount</h2>
        <div className="text-4xl font-bold text-[#c41e3a] mb-8">${monthlyPayment}</div>

        {/* Reset Button */}
        <button
          className="btn bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors duration-300"
          onClick={resetAll}
        >
          Reset All
        </button>
      </div>

      {/* VA Rating and SMC Tables */}
      <div className="w-full max-w-4xl mt-12">
        {/* Combined VA Rating Table */}
        <div className="bg-[#c41e3a] text-white p-4 flex justify-between items-center rounded-t-md">
          <h2 className="text-xl font-bold">Combined VA Rating</h2>
          <h2 className="text-xl font-bold">2025 VA Disability Pay Rate</h2>
        </div>
        <div className="bg-white text-[#002b5c] w-full rounded-b-md">
          {vaRatingTable.map((item) => (
            <div key={item.rating} className="flex justify-between p-3 border-b last:border-b-0">
              <div className="font-bold">{item.rating}%</div>
              <div className="text-[#c41e3a] font-bold">${item.amount.toFixed(2)}</div>
            </div>
          ))}
        </div>

        {/* Link to Learn More */}
        <div className="mt-8 text-center">
          <a href="#" className="text-[#c41e3a] underline font-bold hover:text-[#a11830] transition-colors duration-300">
            To Find Out More, Click Here.
          </a>
        </div>

        {/* Special Monthly Compensation Section */}
        <h2 className="text-2xl font-bold text-[#c41e3a] mt-8 text-center">
          What is Special Monthly Compensation (SMC)?
        </h2>
        <h3 className="text-xl font-bold mt-6 mb-4 text-center">How Long Have You Been Awarded?</h3>
        <p className="text-white mb-6 text-center max-w-3xl mx-auto">
          The U.S. Department of Veterans Affairs (VA) awards special monthly compensation (SMC) to veterans with
          service-connected conditions so severe that they warrant a rating higher than 100 percent; the idea is that
          certain disabilities or combinations of disabilities are more debilitating than accounted for by the regular
          rating schedule.
        </p>

        {/* SMC Levels Table */}
        <div className="bg-white text-[#002b5c] w-full mt-6 rounded-md">
          <div className="bg-[#c41e3a] text-white p-4 flex justify-between items-center rounded-t-md">
            <h2 className="text-xl font-bold">SMC Level</h2>
            <h2 className="text-xl font-bold">2025 VA SMC Amount</h2>
          </div>
          {smcLevels.map((item) => (
            <div key={item.level} className="flex justify-between p-3 border-b last:border-b-0">
              <div className="font-bold">{item.level}</div>
              <div className="text-[#c41e3a] font-bold">{item.amount}</div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 mb-6">
          <h2 className="text-xl font-bold mb-4 text-center">Disclaimer</h2>
          <p className="text-white text-xs text-center max-w-3xl mx-auto">
            This tool is for educational purposes only and does not constitute legal advice. The VA disability rates
            shown are based on publicly available information and are subject to change. This is a simulation only and
            is offered and provided by us with the understanding that we are not rendering legal, accounting, tax,
            career, or other professional advice and services. Such information should not be used as a substitute for
            consultation with professional accounting, tax, legal, or other competent advisers. We are not responsible
            for the application that you have determined or selected for your use. We are not responsible for the
            preparation of any output or deliverable that you have determined or selected for your use.
          </p>
          <p className="text-white text-xs text-center mt-4">
            Website Powered by Wildwood LLC © September 2023. Please Review{" "}
            <a href="#" className="underline hover:text-gray-300 transition-colors duration-300">
              Terms & Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}