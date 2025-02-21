import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Forgot_Password from "../Pages/Authentication/Forgot_Password";
import OTPVerification from "../Pages/Authentication/OTPVerification";
import ResetPassword from "../Pages/Authentication/ResetPassword";
import SuccessAuthentication from "../Pages/Authentication/SuccessAuthentication";
  
export const router = createBrowserRouter([
    {
      path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home/>
          }
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