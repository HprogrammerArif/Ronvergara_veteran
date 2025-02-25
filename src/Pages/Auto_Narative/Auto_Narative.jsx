import React, { useState } from 'react';

const Auto_Narative = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")

  const questions = [
    {
      id: 1,
      text: "Have You Ever Applied For VA Benefits?",
      nextIfYes: 2,
      nextIfNo: 3,
    },
    {
      id: 2,
      text: "Are you currently receiving VA benefits?",
      nextIfYes: 4,
      nextIfNo: 5,
    },
    {
      id: 3,
      text: "Are you interested in applying for VA benefits?",
      nextIfYes: 6,
      nextIfNo: 7,
    },
    {
      id: 4,
      text: "Have you had any changes in your condition?",
      nextIfYes: -1,
      nextIfNo: -1,
    },
    {
      id: 5,
      text: "Was your VA benefits application denied?",
      nextIfYes: -1,
      nextIfNo: -1,
    },
    {
      id: 6,
      text: "Do you need assistance with the application process?",
      nextIfYes: -1,
      nextIfNo: -1,
    },
    {
      id: 7,
      text: "Would you like to learn more about VA benefits?",
      nextIfYes: -1,
      nextIfNo: -1,
    },
  ]

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)


   const currentQuestion = questions[currentQuestionIndex]

  const handleSelect = (value) => {
    setSelectedOption(value)
    setIsOpen(false)

    const nextIndex = value === "Yes" ? currentQuestion.nextIfYes : currentQuestion.nextIfNo

    if (nextIndex === -1) {
      setIsCompleted(true)
      return
    }

    // Delay the question change slightly for better UX
    setTimeout(() => {
      setCurrentQuestionIndex(nextIndex - 1)
      setSelectedOption("")
    }, 300)
  }

  if (isCompleted) {
    return (
      <div className="max-w-xl mx-auto p-6">
        <div className="text-lg font-medium">Thank you for completing the questionnaire.</div>
      </div>
    )
  }

  return (
    <section className="h-screen bg-gray-200 flex flex-col justify-center items-center pt-10 py-[200px]">
      <h1 className="text-[#0A3161] text-4xl font-bold mb-10 capitalize">Auto generated claim narrative</h1>
      <div className="bg-white p-20 flex items-center justify-center h-[50vh] w-[50vw] shadow-lg rounded-lg">
        <div className="flex flex-col items-center justify-center">
        <div className="max-w-xl mx-auto p-6">
      <div className="mb-2 text-[#1B1B1B] text-base font-medium">{currentQuestion.text}</div>

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2.5 text-left bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <span className={selectedOption ? "text-black" : "text-gray-500"}>{selectedOption || "Yes"}</span>
          <span className="absolute right-4 top-3.5">
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
            <div
              onClick={() => handleSelect("Yes")}
              className={`px-4 py-2 cursor-pointer ${
                selectedOption === "Yes" ? "bg-[#112e51] text-white" : "hover:bg-gray-50"
              }`}
            >
              Yes
            </div>
            <div
              onClick={() => handleSelect("No")}
              className={`px-4 py-2 cursor-pointer ${
                selectedOption === "No" ? "bg-[#112e51] text-white" : "hover:bg-gray-50"
              }`}
            >
              No
            </div>
          </div>
        )}
      </div>
    </div>
        
        </div>
      </div>
    </section>
  );
};

export default Auto_Narative;