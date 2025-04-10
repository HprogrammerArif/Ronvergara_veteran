"use client"

import { Section } from "lucide-react"
import { useState } from "react"

export default function Calculator() {
  const [currentDisability, setCurrentDisability] = useState(0)
  const [selectedDisabilities, setSelectedDisabilities] = useState([])
  const [selectedPercentages, setSelectedPercentages] = useState({})
  const [dependentsUnder18, setDependentsUnder18] = useState("")
  const [dependentsBetween18And23, setDependentsBetween18And23] = useState("")
  const [dependentParents, setDependentParents] = useState("")
  const [maritalStatus, setMaritalStatus] = useState("Single")
  const [monthlyPayment, setMonthlyPayment] = useState(0)

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
  ]

  const percentages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

  const handleDisabilitySelect = (disability) => {
    if (selectedDisabilities.includes(disability)) {
      setSelectedDisabilities(selectedDisabilities.filter((d) => d !== disability))
      const newPercentages = { ...selectedPercentages }
      delete newPercentages[disability]
      setSelectedPercentages(newPercentages)
    } else {
      setSelectedDisabilities([...selectedDisabilities, disability])
    }
  }

  const handlePercentageSelect = (percentage) => {
    if (selectedDisabilities.length > 0) {
      const lastSelected = selectedDisabilities[selectedDisabilities.length - 1]
      const newPercentages = { ...selectedPercentages, [lastSelected]: percentage }
      setSelectedPercentages(newPercentages)
      calculateTotalDisability(newPercentages)
    }
  }

  const calculateTotalDisability = (percentages) => {
    const values = Object.values(percentages)
    if (values.length === 0) {
      setCurrentDisability(0)
      setMonthlyPayment(0)
      return
    }

    const total = Math.min(100, Math.round(values.reduce((a, b) => a + b, 0) / values.length))
    setCurrentDisability(total)

    const basePayment = total * 20
    const dependentMultiplier =
      1 +
      parseInt(dependentsUnder18 || "0") * 0.05 +
      parseInt(dependentsBetween18And23 || "0") * 0.07 +
      parseInt(dependentParents || "0") * 0.1
    const maritalMultiplier = maritalStatus === "Married" ? 1.15 : 1

    setMonthlyPayment(Math.round(basePayment * dependentMultiplier * maritalMultiplier))
  }

  const resetAll = () => {
    setCurrentDisability(0)
    setSelectedDisabilities([])
    setSelectedPercentages({})
    setDependentsUnder18("")
    setDependentsBetween18And23("")
    setDependentParents("")
    setMaritalStatus("Single")
    setMonthlyPayment(0)
  }

  return (
  <section className="pt-32 bg-[#002b5c]">
      <div className="min-h-screen  text-white flex flex-col items-center p-4 md:p-8 ">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">VETERANS DISABILITY CALCULATOR</h1>

      <div className="w-full max-w-md flex flex-col items-center">
        <p className="text-center mb-2">Current Disability Percentage</p>
        <div className="relative w-32 h-32 mb-8">
          <div className="absolute inset-0 rounded-full bg-[#c41e3a] flex items-center justify-center">
            <span className="text-4xl font-bold">{currentDisability}%</span>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4">PHYSICAL DISABILITY</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8 w-full">
          {physicalDisabilities.map((disability) => (
            <button
              key={disability.id}
              className={`btn btn-sm ${
                selectedDisabilities.includes(disability.id) ? "bg-[#c41e3a] text-white" : "bg-white text-black"
              } rounded-md`}
              onClick={() => handleDisabilitySelect(disability.id)}
            >
              {disability.label}
            </button>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">DISABILITY PERCENTAGE</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-8 w-full">
          {percentages.map((percentage) => (
            <button
              key={percentage}
              className="btn btn-sm bg-white text-black hover:bg-gray-200 rounded-md"
              onClick={() => handlePercentageSelect(percentage)}
            >
              {percentage}%
            </button>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">CURRENT DISABILITIES APPLIED</h2>
        <div className="flex flex-wrap gap-2 mb-8 w-full justify-center">
          {Object.entries(selectedPercentages).map(([disability, percentage]) => {
            const label = physicalDisabilities.find((d) => d.id === disability)?.label || disability
            return (
              <div key={disability} className="badge bg-[#c41e3a] text-white p-3">
                {percentage}% {label}
              </div>
            )
          })}
        </div>

        <h2 className="text-xl font-bold mb-4">ADDITIONAL PAYMENT AMOUNT FACTORS</h2>

        <div className="w-full space-y-4 mb-8">
          <div>
            <p className="text-sm mb-1">Number of Dependent Children under 18 years old</p>
            <select
              className="select select-bordered w-full bg-white text-black"
              value={dependentsUnder18}
              onChange={(e) => setDependentsUnder18(e.target.value)}
            >
              <option value="">Select a number</option>
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div>
            <p className="text-sm mb-1">Number of Dependent Children Between 18 And 23 Years Old</p>
            <select
              className="select select-bordered w-full bg-white text-black"
              value={dependentsBetween18And23}
              onChange={(e) => setDependentsBetween18And23(e.target.value)}
            >
              <option value="">Select a number</option>
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div>
            <p className="text-sm mb-1">Number Of Dependent Parents</p>
            <select
              className="select select-bordered w-full bg-white text-black"
              value={dependentParents}
              onChange={(e) => setDependentParents(e.target.value)}
            >
              <option value="">Select a number</option>
              {[0, 1, 2].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-full mb-8">
          <p className="text-center mb-2">Marital Status</p>
          <div className="flex justify-center gap-4">
            <button
              className={`btn ${maritalStatus === "Single" ? "bg-[#c41e3a] text-white" : "bg-white text-black"}`}
              onClick={() => setMaritalStatus("Single")}
            >
              Single
            </button>
            <button
              className={`btn ${maritalStatus === "Married" ? "bg-[#c41e3a] text-white" : "bg-white text-black"}`}
              onClick={() => setMaritalStatus("Married")}
            >
              Married
            </button>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4">CURRENT DISABILITY RATING</h2>
        <div className="relative w-32 h-32 mb-8">
          <div className="absolute inset-0 rounded-full bg-[#c41e3a] flex items-center justify-center">
            <span className="text-4xl font-bold">{currentDisability}%</span>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4">YOUR MONTHLY PAYMENT AMOUNT</h2>
        <div className="text-4xl font-bold text-[#c41e3a] mb-8">${monthlyPayment}</div>

        <button className="btn bg-green-500 hover:bg-green-600 text-white" onClick={resetAll}>
          Reset All
        </button>
      </div>
    </div>
  </section>
  )
}
