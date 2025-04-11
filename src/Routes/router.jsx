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
import AiNarativeGen from "../Pages/BodyClaims/Migraine/AiNarativeGen";
import ProgressMessage from "../Pages/BodyClaims/Migraine/ProgressMessage";
import EvidenceForm from "../Pages/BodyClaims/Migraine/EvidenceForm";
import ESignature from "../Pages/BodyClaims/Migraine/ESignature";
import VAForm from "../Pages/FinalVAForm/VAForm";
import SinusitisForm from "../Pages/BodyClaims/SinusitisForm/SinusitisForm";
import GastrointestinalForm from "../Pages/BodyClaims/Gastrointestinal/GastrointestinalForm";
import TinnitusHearingLossForm from "../Pages/BodyClaims/TinnitusHearing/TinnitusHearingLossForm";
import OthersIssues from "../Pages/BodyClaims/OthersIssue";
import AdminLogin from "../Pages/AdminLogin/AdminLogin";
import Recovery from "../Pages/AdminLogin/Recovery";
import PasswordRecovery from "../Pages/AdminLogin/PasswordRecovery";
import Dashboard from "../Pages/AdminDashboard/Dashboard";
import Admin_home from "../Pages/AdminDashboard/Admin_home";
import UserManagment from "../Pages/AdminDashboard/UserManagment";
import FormView from "../Pages/AdminDashboard/FormView";
import Payment from "../Pages/AdminDashboard/Payment";
import Document from "../Pages/AdminDashboard/Document";
import Submission from "../Pages/AdminDashboard/Submission";
import Notification from "../Pages/AdminDashboard/Notification";
import Profile from "../Pages/AdminDashboard/Profile";
import PrivacyPolicy from "../Pages/AdminDashboard/PrivacyPolicy";
import TermsConditions from "../Pages/AdminDashboard/TermsConditions";
import Policy from "../Pages/PrivacyPolicy/Policy";
import Calculator from "../Pages/Calculator/Calculator";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Auto_Narative_Video from "../Pages/Auto_Narative/Auto_Narative_Video";
import VaSubcription from "../Pages/Auto_Narative/VaSubcription";
import Pricing_Plan from "../Pages/Home/Pricing_Plan";
  
export const router = createBrowserRouter([
    {
      path: "/",
        element: <Main />,
        children: [
            {path: '/', element: <Home/>},
            {path: '/dd_214_info', element: <Dd_214 />},
            {path: '/narrative', element: <Auto_Narative/>},
            {path: '/video', element: <Auto_Narative_Video/>},
            {path: '/subscription', element: <VaSubcription/>},
            {path: '/plan', element: <Pricing_Plan/>},
            {path: '/veteran_information', element: <Veteran_Information />},
            {path: '/issues', element: <Issues/>},
            {path: '/issue_details', element: <IssueDetailsForm/>},
            {path: '/gulf_war_location', element: <GulfWarLocationsForm/>},
            {path: '/agent_location', element: <AgentOrangeLocationsForm/>},
            {path: '/toxin_exposure', element: <ToxinExposureForm/>},
            {path: '/confirmation', element: <GreatConfirmation/>},
            {path: '/policy', element: <Policy/>},
            {path: '/calculator', element: <Calculator/>},
            {path: '/about_us', element: <AboutUs/>},



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
            {path: '/ai_narrative', element: <AiNarativeGen />},
            {path: '/progress', element: <ProgressMessage/>},
            {path: '/evidence_form', element: <EvidenceForm/>},
            {path: '/progress', element: <ProgressMessage/>},
            {path: '/e_signature', element: <ESignature/>},
            {path: '/va_form', element: <VAForm/>},
           

            //SinusitisForm
            {path: '/sinusitis_form', element: <SinusitisForm/>},

            //GastrointestinalForm
            {path: '/gastrointestinal_form', element: <GastrointestinalForm/>},

            //TinnitusHearingLossForm
            {path: '/tinnitus_hearing_loss', element: <TinnitusHearingLossForm/>},

            //others
            {path: '/others', element: <OthersIssues/>}



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
    },





    //admin login

    {path: '/admin_login', element: <AdminLogin/>  },
    {path: '/recovery', element : <Recovery/>},
    {path: '/recovery_password', element: <PasswordRecovery/>},



    {
      path: "admin",
      element: <Dashboard/>,
      children: [
        {index: true, element: <Admin_home/>},
        {path:"admin_home", element: <Admin_home/>},
        {path:"users", element: <UserManagment/>},
        {path: "forms", element: <FormView/>},
        {path: "payment", element: <Payment/>},
        {path: "document", element: <Document/>},
        {path: "submission", element: <Submission/>},
        {path: "settings/privacy_policy", element: <PrivacyPolicy/>},
        {path: "settings/terms_conditions", element: <TermsConditions/>},
        {path: "notification", element: <Notification/>},
        {path: "profile", element: <Profile/>}
      ] 
    }

  ]);