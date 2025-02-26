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
  
export const router = createBrowserRouter([
    {
      path: "/",
        element: <Main />,
        children: [
            {path: '/', element: <Home/>},
            {path: '/dd_214_info', element: <Dd_214 />},
            {path: '/narrative', element: <Auto_Narative/>},
            {path: '/veteran_information', element: <Veteran_Information />},
            {path: '/issue_details', element: <IssueDetailsForm/>},
            {path: '/gulf_war_location', element: <GulfWarLocationsForm/>},
            {path: '/agent_location', element: <AgentOrangeLocationsForm/>},
            {path: '/toxin_exposure', element: <ToxinExposureForm/>},
            {path: '/confirmation', element: <GreatConfirmation/>},
            {path: '/mental_health_info', element: <MentalHealthForm/>},
            {path: '/mental_health_survey', element: <MentalHealthSurvey/>},
            {path: '/mental_health_details', element: <MentailHealthDetails/>},
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