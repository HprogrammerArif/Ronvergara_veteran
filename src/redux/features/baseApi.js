import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://192.168.10.8:9000/',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("access_token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
    
        //create user
        createUser: builder.mutation({
            query: (userData) => ({
                url: "api/auth/register/",
                method: "POST",
                body: userData,
                        
            }),
        }),


        //loggedIn user
        loggedInUser: builder.mutation({
            query: (userData) =>({
                url: "api/auth/login/",
                method: "POST",
                body: userData
            })
        }),

        // forget password
        forgetPassword: builder.mutation({
            query: (email)=>({
                url: "api/auth/otp/create/",
                method: "POST",
                body: email
            })
        }),

        //otpVerification
        otpVerification: builder.mutation({
                query: ({email,otp}) =>({
                    url: "api/auth/otp/verify/",
                    method: "POST",
                    body: {email, otp }  
                })
            }), 

        //resetPassword
        resetPassword: builder.mutation({
            query: (payload) =>({
                url: "api/auth/password-reset/confirm/",
                method: "POST",
                body: payload
            })
        }),
    

        



    }),
});

export const { 
    //create user
    useCreateUserMutation,

    //loggedUser
    useLoggedInUserMutation,

    //forget password
    useForgetPasswordMutation,

    //otpVerification
    useOtpVerificationMutation,

    //resetpassword
    useResetPasswordMutation,

} = baseApi;