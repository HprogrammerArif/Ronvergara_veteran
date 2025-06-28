

// import { useState } from "react";
// import { useForm, FormProvider } from "react-hook-form"; // Added FormProvider
// import Step1PersonalInfo from "./Steps/Step1PersonalInfo";
// import Step2PhoneNumbers from "./Steps/Step2PhoneNumbers";
// import Step3DateOfBirth from "./Steps/Step3DateOfBirth";
// import Step4ServiceDates from "./Steps/Step4ServiceDates";
// import Step5Address from "./Steps/Step5Address";
// import Step6MilitaryService from "./Steps/Step6MilitaryService";
// import Step7CurrentStatus from "./Steps/Step7CurrentStatus";
// import ProgressBar from "./Steps/ProgressBar";
// import FormNavigation from "./Steps/FormNavigation";
// import { useNavigate } from "react-router-dom";

// export default function VeteranInformationForm() {
//   const [currentStep, setCurrentStep] = useState(0);
//   const navigate = useNavigate();
//   const totalSteps = 7;

//   const methods = useForm({
//     defaultValues: {
//       Beginning_Date_Month: [""],
//       Beginning_Date_Day: [""],
//       Beginning_Date_Year: [""],
//       Ending_Date_Month: [""],
//       Ending_Date_Day: [""],
//       Ending_Date_Year: [""],
//       EMAIL_ADDRESS: ["", ""],
//       TelephoneNumber_FirstThreeNumbers: [""],
//       TelephoneNumber_SecondThreeNumbers: [""],
//       TelephoneNumber_LastFourNumbers: [""],
//       vaHealthCare: "",
//       livingSituation: "",
//     },
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     trigger,
//     setValue,
//     watch
//   } = methods;

//   const getFieldsForStep = (step) => {
//     switch (step) {
//       case 0:
//         return [
//           "Veterans_Beneficiary_First_Name[0]",
//           "Last_Name[0]",
//           // Email is optional
//         ];
//       case 1:
//         return [
//           // Phone numbers are optional
//         ];
//       case 2:
//         return ["DOB_Month[0]", "DOB_Day[0]", "DOB_Year[0]"];
//       case 3:
//         return [
//           "Beginning_Date_Month[0]",
//           "Beginning_Date_Day[0]",
//           "Beginning_Date_Year[0]",
//           // Service Exit Date is optional
//         ];
//       case 4:
//         return [
//           "MailingAddress_NumberAndStreet[0]",
//           "MailingAddress_City[0]",
//           "MailingAddress_StateOrProvince[0]",
//           "MailingAddress_ZIPOrPostalCode_FirstFiveNumbers[0]",
//           // Last four digits of ZIP code are optional
//         ];
//       case 5:
//         return [
//           "branchOfService",
//           "nationalGuardReserves",
//           // serviceUnder and placeOfService are optional
//         ];
//       case 6:
//         return [
//           "activeDutyOrders",
//           "vaDirectDeposit",
//           // vaHealthCare and livingSituation are optional
//         ];
//       default:
//         return [];
//     }
//   };

//   const handleNext = async () => {
//     const fieldsToValidate = getFieldsForStep(currentStep);
//     const isValid = await trigger(fieldsToValidate);

//     if (isValid) {
//       if (currentStep < totalSteps - 1) {
//         setCurrentStep(currentStep + 1);
//       }
//     }
//   };

//   const handlePrevious = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const onSubmit = async (data) => {
//     console.log(data);
//     localStorage.setItem("veteran_information", JSON.stringify(data));
//     navigate("/issues");
//   };

//   const renderStep = () => {
//     const stepProps = { register, errors, setValue, watch };

//     switch (currentStep) {
//       case 0:
//         return <Step1PersonalInfo {...stepProps} />;
//       case 1:
//         return <Step2PhoneNumbers {...stepProps} />;
//       case 2:
//         return <Step3DateOfBirth {...stepProps} />;
//       case 3:
//         return <Step4ServiceDates {...stepProps} />;
//       case 4:
//         return <Step5Address {...stepProps} />;
//       case 5:
//         return <Step6MilitaryService {...stepProps} />;
//       case 6:
//         return <Step7CurrentStatus {...stepProps} />;
//       default:
//         return null;
//     }
//   };

//   const getStepTitle = () => {
//     const titles = [
//       "Personal Information",
//       "Contact Numbers",
//       "Date of Birth",
//       "Service Dates",
//       "Address Information",
//       "Military Service Details",
//       "Current Status",
//     ];
//     return titles[currentStep];
//   };

//   return (
//     <div className="md:min-h-screen py-10 md:py-0 bg-white flex justify-center items-center md:p-4">
//       <div className="card w-full md:max-w-4xl bg-white md:shadow-md">
//         <div className="md:card-body p-3 md:p-0">
//           <h1 className="card-title text-2xl font-bold text-blue-800 justify-center md:mb-4 mb-10">
//             Veteran Information
//           </h1>

//           <FormProvider {...methods}>
//             <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

//             <div className="mb-4">
//               <h2 className="text-lg font-semibold text-gray-700">
//                 {getStepTitle()}
//               </h2>
//             </div>

//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//               {renderStep()}

//               <FormNavigation
//                 currentStep={currentStep}
//                 totalSteps={totalSteps}
//                 onPrevious={handlePrevious}
//                 onNext={handleNext}
//                 onSubmit={handleSubmit(onSubmit)}
//                 isLastStep={currentStep === totalSteps - 1}
//               />
//             </form>
//           </FormProvider>
//         </div>
//       </div>
//     </div>
//   );
// }



// import { useState } from "react";
// import { useForm, FormProvider } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import Step1PersonalInfo from "./Steps/Step1PersonalInfo";
// import Step2PhoneNumbers from "./Steps/Step2PhoneNumbers";
// import Step3DateOfBirth from "./Steps/Step3DateOfBirth";
// import Step4ServiceDates from "./Steps/Step4ServiceDates";
// import Step5Address from "./Steps/Step5Address";
// import Step6MilitaryService from "./Steps/Step6MilitaryService";
// import Step7CurrentStatus from "./Steps/Step7CurrentStatus";
// import ProgressBar from "./Steps/ProgressBar";
// import FormNavigation from "./Steps/FormNavigation";

// export default function VeteranInformationForm() {
//   const [currentStep, setCurrentStep] = useState(0);
//   const navigate = useNavigate();
//   const totalSteps = 7;

//   const methods = useForm({
//     defaultValues: {
//       Beginning_Date_Month: [""],
//       Beginning_Date_Day: [""],
//       Beginning_Date_Year: [""],
//       Ending_Date_Month: [""],
//       Ending_Date_Day: [""],
//       Ending_Date_Year: [""],
//       EMAIL_ADDRESS: ["", ""],
//       phone: "",
//       vaHealthCare: "",
//       livingSituation: "",
//     },
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     trigger,
//     setValue,
//     watch,
//   } = methods;

//   const getFieldsForStep = (step) => {
//     switch (step) {
//       case 0:
//         return ["Veterans_Beneficiary_First_Name[0]", "Last_Name[0]"];
//       case 1:
//         return [
//           "International_Phone_Number[0]",
//           "TelephoneNumber_FirstThreeNumbers[0]",
//           "TelephoneNumber_SecondThreeNumbers[0]",
//           "TelephoneNumber_LastFourNumbers[0]"
//         ]; // phone optional,
//       case 2:
//         return ["DOB_Month[0]", "DOB_Day[0]", "DOB_Year[0]"];
//       case 3:
//         return [
//           "Beginning_Date_Month[0]",
//           "Beginning_Date_Day[0]",
//           "Beginning_Date_Year[0]",
//         ];
//       case 4:
//         return [
//           "MailingAddress_NumberAndStreet[0]",
//           "MailingAddress_City[0]",
//           "MailingAddress_StateOrProvince[0]",
//           "MailingAddress_ZIPOrPostalCode_FirstFiveNumbers[0]",
//         ];
//       case 5:
//         return ["branchOfService", "nationalGuardReserves"];
//       case 6:
//         return ["activeDutyOrders", "vaDirectDeposit"];
//       default:
//         return [];
//     }
//   };

//   const handleNext = async () => {
//     const isValid = await trigger(getFieldsForStep(currentStep));
//     if (isValid && currentStep < totalSteps - 1) {
//       setCurrentStep((prev) => prev + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentStep > 0) setCurrentStep((prev) => prev - 1);
//   };

//   const onSubmit = (data) => {
//     console.log(data);
//     localStorage.setItem("veteran_information", JSON.stringify(data));
//     navigate("/issues");
//   };

//   const renderStep = () => {
//     const stepProps = { register, errors, setValue, watch };

//     switch (currentStep) {
//       case 0:
//         return <Step1PersonalInfo {...stepProps} />;
//       case 1:
//         return (
//           <Step2PhoneNumbers
//             {...stepProps}
//             onPhoneChange={(fieldName, value) => setValue(fieldName, value)}
//           />
//         );
//       case 2:
//         return <Step3DateOfBirth {...stepProps} />;
//       case 3:
//         return <Step4ServiceDates {...stepProps} />;
//       case 4:
//         return <Step5Address {...stepProps} />;
//       case 5:
//         return <Step6MilitaryService {...stepProps} />;
//       case 6:
//         return <Step7CurrentStatus {...stepProps} />;
//       default:
//         return null;
//     }
//   };

//   const stepTitles = [
//     "Personal Information",
//     "Contact Numbers",
//     "Date of Birth",
//     "Service Dates",
//     "Address Information",
//     "Military Service Details",
//     "Current Status",
//   ];

//   return (
//     <div className="md:min-h-screen py-10 md:py-0 bg-white flex justify-center items-center md:p-4">
//       <div className="md:card w-full md:max-w-4xl bg-white md:shadow-md">
//         <div className="md:card-body p-3 md:p-5">
//           <h1 className="card-title text-2xl font-bold text-blue-800 justify-center md:mb-4 mb-10">
//             Veteran Information
//           </h1>

//           <FormProvider {...methods}>
//             <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

//             <div className="mb-4">
//               <h2 className="text-lg font-semibold text-gray-700">
//                 {stepTitles[currentStep]}
//               </h2>
//             </div>

//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//               {renderStep()}

//               <FormNavigation
//                 currentStep={currentStep}
//                 totalSteps={totalSteps}
//                 onPrevious={handlePrevious}
//                 onNext={handleNext}
//                 onSubmit={handleSubmit(onSubmit)}
//                 isLastStep={currentStep === totalSteps - 1}
//               />
//             </form>
//           </FormProvider>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Step1PersonalInfo from "./Steps/Step1PersonalInfo";
import Step2PhoneNumbers from "./Steps/Step2PhoneNumbers";
import Step3DateOfBirth from "./Steps/Step3DateOfBirth";
import Step4ServiceDates from "./Steps/Step4ServiceDates";
import Step5Address from "./Steps/Step5Address";
import Step6MilitaryService from "./Steps/Step6MilitaryService";
import Step7CurrentStatus from "./Steps/Step7CurrentStatus";
import ProgressBar from "./Steps/ProgressBar";
import FormNavigation from "./Steps/FormNavigation";

export default function VeteranInformationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const totalSteps = 7;

  const methods = useForm({
    defaultValues: {
      Beginning_Date_Month: [""],
      Beginning_Date_Day: [""],
      Beginning_Date_Year: [""],
      Ending_Date_Month: [""],
      Ending_Date_Day: [""],
      Ending_Date_Year: [""],
      EMAIL_ADDRESS: ["", ""],
      phone: "",
      vaHealthCare: "",
      livingSituation: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
    watch,
  } = methods;

  const getFieldsForStep = (step) => {
    switch (step) {
      case 0:
        return ["Veterans_Beneficiary_First_Name[0]", "Last_Name[0]"];
      case 1:
        return [
          "International_Phone_Number[0]",
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
        ];
      case 4:
        return [
          "MailingAddress_NumberAndStreet[0]",
          "MailingAddress_City[0]",
          "MailingAddress_StateOrProvince[0]",
          "MailingAddress_ZIPOrPostalCode_FirstFiveNumbers[0]",
        ];
      case 5:
        return ["branchOfService", "nationalGuardReserves"];
      case 6:
        return ["activeDutyOrders", "vaDirectDeposit"];
      default:
        return [];
    }
  };

  const handleNext = async () => {
    const isValid = await trigger(getFieldsForStep(currentStep));
    if (isValid && currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("veteran_information", JSON.stringify(data));
    navigate("/issues");
  };

  const renderStep = () => {
    const stepProps = { register, errors, setValue, watch };

    switch (currentStep) {
      case 0:
        return <Step1PersonalInfo {...stepProps} />;
      case 1:
        return <Step2PhoneNumbers {...stepProps} trigger={trigger} />;
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
      default:
        return null;
    }
  };

  const stepTitles = [
    "Personal Information",
    "Contact Numbers",
    "Date of Birth",
    "Service Dates",
    "Address Information",
    "Military Service Details",
    "Current Status",
  ];

  return (
    <div className="md:min-h-screen py-10 md:py-0 bg-white flex justify-center items-center md:p-4">
      <div className="md:card w-full md:max-w-4xl bg-white md:shadow-md">
        <div className="md:card-body p-3 md:p-5">
          <h1 className="card-title text-2xl font-bold text-blue-800 justify-center md:mb-4 mb-10">
            Veteran Information
          </h1>

          <FormProvider {...methods}>
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-700">
                {stepTitles[currentStep]}
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
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
