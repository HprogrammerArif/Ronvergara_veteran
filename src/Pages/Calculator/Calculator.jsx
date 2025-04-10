// "use client"


// import { useState } from "react"

// export default function Calculator() {
//   const [currentDisability, setCurrentDisability] = useState(0)
//   const [selectedDisabilities, setSelectedDisabilities] = useState([])
//   const [selectedPercentages, setSelectedPercentages] = useState({})
//   const [dependentsUnder18, setDependentsUnder18] = useState("")
//   const [dependentsBetween18And23, setDependentsBetween18And23] = useState("")
//   const [dependentParents, setDependentParents] = useState("")
//   const [maritalStatus, setMaritalStatus] = useState("Single")
//   const [monthlyPayment, setMonthlyPayment] = useState(0)

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
//   ]

//   const percentages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

//   const handleDisabilitySelect = (disability) => {
//     if (selectedDisabilities.includes(disability)) {
//       setSelectedDisabilities(selectedDisabilities.filter((d) => d !== disability))
//       const newPercentages = { ...selectedPercentages }
//       delete newPercentages[disability]
//       setSelectedPercentages(newPercentages)
//     } else {
//       setSelectedDisabilities([...selectedDisabilities, disability])
//     }
//   }

//   const handlePercentageSelect = (percentage) => {
//     if (selectedDisabilities.length > 0) {
//       const lastSelected = selectedDisabilities[selectedDisabilities.length - 1]
//       const newPercentages = { ...selectedPercentages, [lastSelected]: percentage }
//       setSelectedPercentages(newPercentages)
//       calculateTotalDisability(newPercentages)
//     }
//   }

//   const calculateTotalDisability = (percentages) => {
//     const values = Object.values(percentages)
//     if (values.length === 0) {
//       setCurrentDisability(0)
//       setMonthlyPayment(0)
//       return
//     }

//     const total = Math.min(100, Math.round(values.reduce((a, b) => a + b, 0) / values.length))
//     setCurrentDisability(total)

//     const basePayment = total * 20
//     const dependentMultiplier =
//       1 +
//       parseInt(dependentsUnder18 || "0") * 0.05 +
//       parseInt(dependentsBetween18And23 || "0") * 0.07 +
//       parseInt(dependentParents || "0") * 0.1
//     const maritalMultiplier = maritalStatus === "Married" ? 1.15 : 1

//     setMonthlyPayment(Math.round(basePayment * dependentMultiplier * maritalMultiplier))
//   }

//   const resetAll = () => {
//     setCurrentDisability(0)
//     setSelectedDisabilities([])
//     setSelectedPercentages({})
//     setDependentsUnder18("")
//     setDependentsBetween18And23("")
//     setDependentParents("")
//     setMaritalStatus("Single")
//     setMonthlyPayment(0)
//   }

//   return (
//   <section className="pt-32 bg-[#002b5c]">
//       <div className="min-h-screen  text-white flex flex-col items-center p-4 md:p-8 ">
//       <h1 className="text-2xl md:text-3xl font-bold mb-4">VETERANS DISABILITY CALCULATOR</h1>

//       <div className="w-full max-w-md flex flex-col items-center">
//         <p className="text-center mb-2">Current Disability Percentage</p>
//         <div className="relative w-32 h-32 mb-8">
//           <div className="absolute inset-0 rounded-full bg-[#c41e3a] flex items-center justify-center">
//             <span className="text-4xl font-bold">{currentDisability}%</span>
//           </div>
//         </div>

//         <h2 className="text-xl font-bold mb-4">PHYSICAL DISABILITY</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8 w-full">
//           {physicalDisabilities.map((disability) => (
//             <button
//               key={disability.id}
//               className={`btn btn-sm ${
//                 selectedDisabilities.includes(disability.id) ? "bg-[#c41e3a] text-white" : "bg-white text-black"
//               } rounded-md`}
//               onClick={() => handleDisabilitySelect(disability.id)}
//             >
//               {disability.label}
//             </button>
//           ))}
//         </div>

//         <h2 className="text-xl font-bold mb-4">DISABILITY PERCENTAGE</h2>
//         <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-8 w-full">
//           {percentages.map((percentage) => (
//             <button
//               key={percentage}
//               className="btn btn-sm bg-white text-black hover:bg-gray-200 rounded-md"
//               onClick={() => handlePercentageSelect(percentage)}
//             >
//               {percentage}%
//             </button>
//           ))}
//         </div>

//         <h2 className="text-xl font-bold mb-4">CURRENT DISABILITIES APPLIED</h2>
//         <div className="flex flex-wrap gap-2 mb-8 w-full justify-center">
//           {Object.entries(selectedPercentages).map(([disability, percentage]) => {
//             const label = physicalDisabilities.find((d) => d.id === disability)?.label || disability
//             return (
//               <div key={disability} className="badge bg-[#c41e3a] text-white p-3">
//                 {percentage}% {label}
//               </div>
//             )
//           })}
//         </div>

//         <h2 className="text-xl font-bold mb-4">ADDITIONAL PAYMENT AMOUNT FACTORS</h2>

//         <div className="w-full space-y-4 mb-8">
//           <div>
//             <p className="text-sm mb-1">Number of Dependent Children under 18 years old</p>
//             <select
//               className="select select-bordered w-full bg-white text-black"
//               value={dependentsUnder18}
//               onChange={(e) => setDependentsUnder18(e.target.value)}
//             >
//               <option value="">Select a number</option>
//               {[0, 1, 2, 3, 4, 5].map((num) => (
//                 <option key={num} value={num}>{num}</option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <p className="text-sm mb-1">Number of Dependent Children Between 18 And 23 Years Old</p>
//             <select
//               className="select select-bordered w-full bg-white text-black"
//               value={dependentsBetween18And23}
//               onChange={(e) => setDependentsBetween18And23(e.target.value)}
//             >
//               <option value="">Select a number</option>
//               {[0, 1, 2, 3, 4, 5].map((num) => (
//                 <option key={num} value={num}>{num}</option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <p className="text-sm mb-1">Number Of Dependent Parents</p>
//             <select
//               className="select select-bordered w-full bg-white text-black"
//               value={dependentParents}
//               onChange={(e) => setDependentParents(e.target.value)}
//             >
//               <option value="">Select a number</option>
//               {[0, 1, 2].map((num) => (
//                 <option key={num} value={num}>{num}</option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="w-full mb-8">
//           <p className="text-center mb-2">Marital Status</p>
//           <div className="flex justify-center gap-4">
//             <button
//               className={`btn ${maritalStatus === "Single" ? "bg-[#c41e3a] text-white" : "bg-white text-black"}`}
//               onClick={() => setMaritalStatus("Single")}
//             >
//               Single
//             </button>
//             <button
//               className={`btn ${maritalStatus === "Married" ? "bg-[#c41e3a] text-white" : "bg-white text-black"}`}
//               onClick={() => setMaritalStatus("Married")}
//             >
//               Married
//             </button>
//           </div>
//         </div>

//         <h2 className="text-xl font-bold mb-4">CURRENT DISABILITY RATING</h2>
//         <div className="relative w-32 h-32 mb-8">
//           <div className="absolute inset-0 rounded-full bg-[#c41e3a] flex items-center justify-center">
//             <span className="text-4xl font-bold">{currentDisability}%</span>
//           </div>
//         </div>

//         <h2 className="text-xl font-bold mb-4">YOUR MONTHLY PAYMENT AMOUNT</h2>
//         <div className="text-4xl font-bold text-[#c41e3a] mb-8">${monthlyPayment}</div>

//         <button className="btn bg-green-500 hover:bg-green-600 text-white" onClick={resetAll}>
//           Reset All
//         </button>
//       </div>
//     </div>
//   </section>
//   )
// }


"use client";

import { useState } from "react";

const vaRatingTable = [
  { rating: 10, amount: "$171.31" },
  { rating: 20, amount: "$346.95" },
  { rating: 30, amount: "$537.42" },
  { rating: 40, amount: "$774.16" },
  { rating: 50, amount: "$1,102.04" },
  { rating: 60, amount: "$1,395.93" },
  { rating: 70, amount: "$1,716.20" },
  { rating: 80, amount: "$2,044.89" },
  { rating: 90, amount: "$2,241.91" },
  { rating: 100, amount: "$3,831.30" },
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

export default function VeteransDisabilityCalculator() {
  const [currentDisability, setCurrentDisability] = useState(0);
  const [selectedDisabilities, setSelectedDisabilities] = useState([]);
  const [selectedPercentages, setSelectedPercentages] = useState({});
  const [dependentsUnder18, setDependentsUnder18] = useState("");
  const [dependentsBetween18And23, setDependentsBetween18And23] = useState("");
  const [dependentParents, setDependentParents] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("Single");
  const [monthlyPayment, setMonthlyPayment] = useState(0);

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
    } else {
      setSelectedDisabilities([...selectedDisabilities, disability]);
    }
  };

  const handlePercentageSelect = (percentage) => {
    if (selectedDisabilities.length > 0) {
      const lastSelected = selectedDisabilities[selectedDisabilities.length - 1];
      const newPercentages = { ...selectedPercentages, [lastSelected]: percentage };
      setSelectedPercentages(newPercentages);
      calculateTotalDisability(newPercentages);
    }
  };

  const calculateTotalDisability = (percentages) => {
    const values = Object.values(percentages);
    if (values.length === 0) {
      setCurrentDisability(0);
      setMonthlyPayment(0);
      return;
    }

    // Simplified average for demonstration
    const total = Math.min(100, Math.round(values.reduce((a, b) => a + b, 0) / values.length));
    setCurrentDisability(total);

    // Simplified payment calculation
    const basePayment = total * 20; // $20 per percentage point (simplified)
    const dependentMultiplier =
      1 +
      Number.parseInt(dependentsUnder18 || "0") * 0.05 +
      Number.parseInt(dependentsBetween18And23 || "0") * 0.07 +
      Number.parseInt(dependentParents || "0") * 0.1;
    const maritalMultiplier = maritalStatus === "Married" ? 1.15 : 1;

    setMonthlyPayment(Math.round(basePayment * dependentMultiplier * maritalMultiplier));
  };

  const resetAll = () => {
    setCurrentDisability(0);
    setSelectedDisabilities([]);
    setSelectedPercentages({});
    setDependentsUnder18("");
    setDependentsBetween18And23("");
    setDependentParents("");
    setMaritalStatus("Single");
    setMonthlyPayment(0);
  };

  return (
    <div className="min-h-screen bg-[#002b5c] text-white flex flex-col items-center p-4 md:p-8 ">
      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-bold mb-4 mt-10">Veterans Disability Calculator</h1>

      {/* Calculator Section */}
      <div className="w-full max-w-2xl flex flex-col items-center">
        {/* Current Disability Percentage */}
        <p className="text-center mb-2">Current Disability Percentage</p>
        <div className="relative w-32 h-32 mb-8">
          <div className="absolute inset-0 rounded-full bg-[#c41e3a] flex items-center justify-center">
            <span className="text-4xl font-bold">{currentDisability}%</span>
          </div>
        </div>

        {/* Physical Disability Selection */}
        <h2 className="text-xl font-bold mb-4">Physical Disability</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8 w-full">
          {physicalDisabilities.map((disability) => (
            <button
              key={disability.id}
              className={`btn btn-sm rounded-md transition-colors duration-300 ${
                selectedDisabilities.includes(disability.id)
                  ? "bg-[#c41e3a] text-white"
                  : "bg-white text-black hover:bg-gray-200"
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
        <h2 className="text-xl font-bold mb-4">Additional Payment Amount Factors</h2>
        <div className="w-full space-y-4 mb-8">
          <div>
            <label className="text-sm mb-1 block">Number of Dependent Children Under 18 Years Old</label>
            <select
              className="select select-bordered w-full bg-white text-black rounded-md"
              value={dependentsUnder18}
              onChange={(e) => setDependentsUnder18(e.target.value)}
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
            <label className="text-sm mb-1 block">Number of Dependent Children Between 18 and 23 Years Old</label>
            <select
              className="select select-bordered w-full bg-white text-black rounded-md"
              value={dependentsBetween18And23}
              onChange={(e) => setDependentsBetween18And23(e.target.value)}
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
              onChange={(e) => setDependentParents(e.target.value)}
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
              onClick={() => setMaritalStatus("Single")}
            >
              Single
            </button>
            <button
              className={`btn rounded-md transition-colors duration-300 ${
                maritalStatus === "Married" ? "bg-[#c41e3a] text-white" : "bg-white text-black hover:bg-gray-200"
              }`}
              onClick={() => setMaritalStatus("Married")}
            >
              Married
            </button>
          </div>
        </div>

        {/* Current Disability Rating */}
        <h2 className="text-xl font-bold mb-4">Current Disability Rating</h2>
        <div className="relative w-32 h-32 mb-8">
          <div className="absolute inset-0 rounded-full bg-[#c41e3a] flex items-center justify-center">
            <span className="text-4xl font-bold">{currentDisability}%</span>
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
              <div className="text-[#c41e3a] font-bold">{item.amount}</div>
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