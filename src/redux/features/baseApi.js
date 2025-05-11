import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://192.168.10.8:4000/',
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

        //getLoggedUser
        getLoggedUser: builder.query({
            query: ()=>"api/auth/profile/"
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

        //subcription
        getPlans: builder.query({
            query: ()=>"api/payment/get_all/subscribtions-plan/"
        }),

        //payment
        paymentCheckout: builder.mutation({
            query: (payload) =>({
                url: "api/payment/create-checkout-session/",
                method: "POST",
                body: payload
            })
        }),
        //va form start

        //vainformation
        // verternInfo: builder.mutation({
        //     query: (vaData) =>({
        //         url: "api/va/vaform/submit/",
        //         method: "POST",
        //         body: vaData
        //     })
        // })


        //generate narration
        generateNarration: builder.mutation({
            query: (narratioData)=>({
                url: "api/va/narration/narration_genarate/",
                method: "POST",
                body: narratioData
            })
        }),



        //adminDashboard

        //userManagement
        getUsers: builder.query({
            query: ()=>"api/payment/get_all/subscribtions/"
        }),

        getDashboardInfo:builder.query({
            query: ()=> "api/payment/get_all/calculate_for_dashboard/"
        }),

        monthlyRevenue: builder.query({
            query: ()=> "api/payment/get_all/calculate_yearly_revenue/"
        })
    

        



    }),
});

export const { 
    //create user
    useCreateUserMutation,

    //loggedUser
    useLoggedInUserMutation,

    //pertifucal user
    useGetLoggedUserQuery,

    //forget password
    useForgetPasswordMutation,

    //otpVerification
    useOtpVerificationMutation,

    //resetpassword
    useResetPasswordMutation,

    //getProfile

    
    //generate Narration
    useGenerateNarrationMutation,

    //get plans
    useGetPlansQuery,

    //paymentCheckout
    usePaymentCheckoutMutation,

    // vainfo
    // useVerternInfoMutation,



    //admindashboard
    useGetUsersQuery,
    useGetDashboardInfoQuery,
    useMonthlyRevenueQuery,

} = baseApi;