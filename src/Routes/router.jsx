import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Forgot_Password from "../Pages/Authentication/Forgot_Password";
import OTPVerification from "../Pages/Authentication/OTPVerification";
import ResetPassword from "../Pages/Authentication/ResetPassword";
import SuccessAuthentication from "../Pages/Authentication/SuccessAuthentication";
import Dd_214 from "../Pages/DD_214/dd_214";
import Auto_Narative from "../Pages/Auto_Narative/Auto_Narative";
import Veteran_Information from "../Pages/Vatern_info/Veteran_Information";
import IssueDetailsForm from "../Pages/Selected_Issue/IssueDetailsFrom";
import GulfWarLocationsForm from "../Pages/War_location/GulfWarLocationsForm";
import AgentOrangeLocationsForm from "../Pages/AgentOrangeLocationsForm/AgentOrangeLocationsForm";
import ToxinExposureForm from "../Pages/ToxinExposureForm/ToxinExposureForm";
import GreatConfirmation from "../Pages/GreatConfirmation/GreatConfirmation";
import MentalHealthForm from "../Pages/MentalHealth/MentalHealthForm";
import MentalHealthSurvey from "../Pages/MentalHealth/MentalHealthSurvey";
import MentailHealthDetails from "../Pages/MentalHealth/MentailHealthDetails";
import DeathDetails from "../Pages/MentalHealth/DeathDetails";
import DisasterForm from "../Pages/MentalHealth/DisasterForm";
import AbuseAssaultDetails from "../Pages/MentalHealth/AbuseAssaultDetails";
import RiskDetails from "../Pages/MentalHealth/RiskDetails";
import MedicalPositionDetails from "../Pages/MentalHealth/MedicalPositionDetails";
import CrashAccidentDetails from "../Pages/MentalHealth/CrashAccidentDetails";
import MedicalTraumaDetails from "../Pages/MentalHealth/MedicalTraumaDetails";
import HazingDetails from "../Pages/MentalHealth/HazingDetails";
import AbuseOfPowerDetails from "../Pages/MentalHealth/AbuseOfPowerDetails";
import DangerousItemsDetails from "../Pages/MentalHealth/DangerousItemsDetails";
import FamilialIssuesDetails from "../Pages/MentalHealth/FamilialIssuesDetails";
import ConfirmMentalHealth from "../Pages/MentalHealth/ConfirmMentalHealth";
import MentalHealthDetails from "../Pages/MentalHealth/MentailHealthDetails";
import MentalHealthSymptoms from "../Pages/MentalHealth/MentalHealthSymptoms";
import MentalHealthIndicators from "../Pages/MentalHealth/MentalHealthIndicators";
import Issues from "../Pages/Selected_Issue/Issues";
import Migraine from "../Pages/BodyClaims/Migraine/Migraine";
import ServiceDetails from "../Pages/BodyClaims/Migraine/ServiceDetails";
import Shifts from "../Pages/BodyClaims/Migraine/Shifts";
import PhysicalTrainingDetails from "../Pages/BodyClaims/Migraine/PhysicalTrainingDetails";
import InjuriesDetails from "../Pages/BodyClaims/Migraine/InjuriesDetails";
import SickCallDetails from "../Pages/BodyClaims/Migraine/SickCallDetails";
import DischargeCondition from "../Pages/BodyClaims/Migraine/DischargeCondition";
import BodyHealthDetails from "../Pages/BodyClaims/Migraine/BodyHealthDetails";
  
export const router = createBrowserRouter([
    {
      path: "/",
        element: <Main />,
        children: [
            {path: '/', element: <Home/>},
            {path: '/dd_214_info', element: <Dd_214 />},
            {path: '/narrative', element: <Auto_Narative/>},
            {path: '/veteran_information', element: <Veteran_Information />},
            {path: '/issues', element: <Issues/>},
            {path: '/issue_details', element: <IssueDetailsForm/>},
            {path: '/gulf_war_location', element: <GulfWarLocationsForm/>},
            {path: '/agent_location', element: <AgentOrangeLocationsForm/>},
            {path: '/toxin_exposure', element: <ToxinExposureForm/>},
            {path: '/confirmation', element: <GreatConfirmation/>},

            //mental-health-info
            {path: '/mental_health_info', element: <MentalHealthForm/>},
            {path: '/mental_health_survey', element: <MentalHealthSurvey/>},
            {path: '/mental_health_details', element: <MentailHealthDetails/>},
            {path: '/death_details', element: <DeathDetails/>},
            {path: '/disaster_form', element: <DisasterForm/>},
            {path: '/abuse_assault_form', element: <AbuseAssaultDetails/>},
            {path: '/risk_details', element: <RiskDetails/>},
            {path: '/medical_position_details', element: <MedicalPositionDetails/>},
            {path: '/crash_details', element: <CrashAccidentDetails/>},
            {path: '/medical_trauma_details', element: <MedicalTraumaDetails/>},
            {path: '/hazing_details', element: <HazingDetails/>},
            {path: '/abuse_power_details', element: <AbuseOfPowerDetails/>},
            {path: '/dangerous_items_details', element: <DangerousItemsDetails/>},
            {path: '/familiar_issues', element: <FamilialIssuesDetails/>},
            {path: '/comfirm_mental_health', element: <ConfirmMentalHealth/>},
            {path: '/mental_health_symptoms', element: <MentalHealthSymptoms/>},
            {path: '/mental_health_indicators', element: <MentalHealthIndicators/>},
           

            //2nd part

            {path: "/migraine", element: <Migraine/>},
            {path: '/service_details', element: <ServiceDetails/>},
            {path: '/shifts', element: <Shifts/>},
            {path: '/physical_training', element: <PhysicalTrainingDetails/>},
            {path: '/injuries_details', element: <InjuriesDetails/>},
            {path: '/sickcall_details', element: <SickCallDetails/>},
            {path: '/discharge_condition', element: <DischargeCondition/>},
            {path: '/health_details', element: <BodyHealthDetails/>},

            

      ]
    },

    //authentication
    {
      path:"/login",
      element: <Login/>
    },
    {
      path: "/sign_up",
      element: <SignUp/>
    },
    {
      path:"/email_verification",
      element: <Forgot_Password/>,
    },
    {
      path: "/verify",
      element: <OTPVerification/>
    },
    {
      path: "/reset_password",
      element: <ResetPassword/>
    },
    {
      path: "/success",
      element: <SuccessAuthentication/>
    }



  ]);