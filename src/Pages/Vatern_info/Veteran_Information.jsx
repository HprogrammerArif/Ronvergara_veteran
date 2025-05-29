

import { useState } from "react";
import { useForm } from "react-hook-form";
import Step1PersonalInfo from "./Steps/Step1PersonalInfo";
import Step2PhoneNumbers from "./Steps/Step2PhoneNumbers";
import Step3DateOfBirth from "./Steps/Step3DateOfBirth";
import Step4ServiceDates from "./Steps/Step4ServiceDates";
import Step5Address from "./Steps/Step5Address";
import Step6MilitaryService from "./Steps/Step6MilitaryService";
import Step7CurrentStatus from "./Steps/Step7CurrentStatus";
import Step8LivingSituation from "./Steps/Step8LivingSituation";
import ProgressBar from "./Steps/ProgressBar";
import FormNavigation from "./Steps/FormNavigation";
import { useNavigate } from "react-router-dom";

export default function VeteranInformationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const totalSteps = 8;

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
  } = useForm({
    defaultValues: {
      Beginning_Date_Month: [""],
      Beginning_Date_Day: [""],
      Beginning_Date_Year: [""],
      Ending_Date_Month: [""],
      Ending_Date_Day: [""],
      Ending_Date_Year: [""],
    },
  });

  const getFieldsForStep = (step) => {
    switch (step) {
      case 0:
        return [
          "Veterans_Beneficiary_First_Name[0]",
          "Last_Name[0]",
          "EMAIL_ADDRESS[0]",
        ];
      case 1:
        return [
          "TelephoneNumber_FirstThreeNumbers[0]",
          "TelephoneNumber_SecondThreeNumbers[0]",
          "TelephoneNumber_LastFourNumbers[0]",
        ];
      case 2:
        return ["DOB_Month[0]", "DOB_Day[0]", "DOB_Year[0]"];
      case 3:
        return [
          "Beginning_Date_Month[0]",
          "Beginning_Date_Day[0]",
          "Beginning_Date_Year[0]",
          "Ending_Date_Month[0]",
          "Ending_Date_Day[0]",
          "Ending_Date_Year[0]",
        ];
      case 4:
        return [
          "MailingAddress_NumberAndStreet[0]",
          "MailingAddress_City[0]",
          "MailingAddress_StateOrProvince[0]",
          "MailingAddress_ZIPOrPostalCode_FirstFiveNumbers[0]",
          "MailingAddress_ZIPOrPostalCode_LastFourNumbers[0]",
        ];
      case 5:
        return [
          "branchOfService",
          "serviceUnder",
          "placeOfService",
          "nationalGuardReserves",
        ];
      case 6:
        return ["activeDutyOrders", "vaDirectDeposit", "vaHealthCare"];
      case 7:
        return ["livingSituation"];
      default:
        return [];
    }
  };

  const handleNext = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await trigger(fieldsToValidate);

    if (isValid) {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    localStorage.setItem("veteran_information", JSON.stringify(data));
    navigate("/issues");
  };

  const renderStep = () => {
    const stepProps = { register, errors, setValue };

    switch (currentStep) {
      case 0:
        return <Step1PersonalInfo {...stepProps} />;
      case 1:
        return <Step2PhoneNumbers {...stepProps} />;
      case 2:
        return <Step3DateOfBirth {...stepProps} />;
      case 3:
        return <Step4ServiceDates {...stepProps} />;
      case 4:
        return <Step5Address {...stepProps} />;
      case 5:
        return <Step6MilitaryService {...stepProps} />;
      case 6:
        return <Step7CurrentStatus {...stepProps} />;
      case 7:
        return <Step8LivingSituation {...stepProps} />;
      default:
        return null;
    }
  };

  const getStepTitle = () => {
    const titles = [
      "Personal Information",
      "Contact Numbers",
      "Date of Birth",
      "Service Dates",
      "Address Information",
      "Military Service Details",
      "Current Status",
      "Living Situation",
    ];
    return titles[currentStep];
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center p-4">
      <div className="card w-full max-w-4xl bg-base-100 shadow-md">
        <div className="card-body">
          <h1 className="card-title text-2xl font-bold text-blue-800 justify-center mb-4">
            Veteran Information
          </h1>

          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              {getStepTitle()}
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {renderStep()}

            <FormNavigation
              currentStep={currentStep}
              totalSteps={totalSteps}
              onPrevious={handlePrevious}
              onNext={handleNext}
              onSubmit={handleSubmit(onSubmit)}
              isLastStep={currentStep === totalSteps - 1}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
