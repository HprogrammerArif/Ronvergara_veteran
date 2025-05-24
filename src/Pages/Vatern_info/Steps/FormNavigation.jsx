import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FormNavigation({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onSubmit,
  isLastStep,
}) {
  return (
    <div className="flex justify-between pt-6">
      <button
        type="button"
        onClick={onPrevious}
        disabled={currentStep === 0}
        className="bg-[#B31942] hover:bg-[#a52648] text-white py-2 px-10 rounded-md  font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <ChevronLeft size={18} />
        Back
      </button>

      {isLastStep ? (
        <button
          type="submit"
          onClick={onSubmit}
          className="bg-[#B31942] hover:bg-[#a52648] text-white py-2 px-10 rounded-md  font-semibold flex items-center gap-2"
        >
          Submit
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="bg-[#B31942] hover:bg-[#a52648] text-white py-2 px-4 rounded-md  font-semibold flex items-center gap-2"
        >
          Continue
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
}
