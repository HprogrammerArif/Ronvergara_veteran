export default function ProgressBar({ currentStep, totalSteps }) {
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100

  return (
    <div className="space-y-2 mb-6">
      <div className="flex justify-between text-sm text-gray-600">
        <span>
          Step {currentStep + 1} of {totalSteps}
        </span>
        <span>{Math.round(progressPercentage)}% Complete</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-red-600 h-2 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  )
}
