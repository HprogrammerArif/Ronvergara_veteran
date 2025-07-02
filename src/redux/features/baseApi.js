import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
	reducerPath: "baseApi",

	// https://rongever.duckdns.org/
	baseQuery: fetchBaseQuery({
		baseUrl: "http://192.168.10.124:2000/",
		// baseUrl: "http://192.168.10.124:2000",
		prepareHeaders: (headers) => {
			const token = localStorage.getItem("access_token");
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ["user"],
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
			query: (userData) => ({
				url: "api/auth/login/",
				method: "POST",
				body: userData,
				provideTags: ["user"],
			}),
		}),

		//getLoggedUser
		getLoggedUser: builder.query({
			query: () => "api/auth/profile/",
		}),

		// forget password
		forgetPassword: builder.mutation({
			query: (email) => ({
				url: "api/auth/otp/create/",
				method: "POST",
				body: email,
			}),
		}),

		//otpVerification
		otpVerification: builder.mutation({
			query: ({ email, otp }) => ({
				url: "api/auth/otp/verify/",
				method: "POST",
				body: { email, otp },
			}),
		}),

		//resetPassword
		resetPassword: builder.mutation({
			query: (payload) => ({
				url: "api/auth/password-reset/confirm/",
				method: "POST",
				body: payload,
			}),
		}),

		//subcription
		getPlans: builder.query({
			query: () => "api/payment/get_all/subscribtions-plan/",
		}),

		//payment
		paymentCheckout: builder.mutation({
			query: (payload) => ({
				url: "api/payment/create-checkout-session/",
				method: "POST",
				body: payload,
			}),
		}),
		//va form start

		//generate narration
		generateNarration: builder.mutation({
			query: (narratioData) => ({
				url: "api/va/narration/narration_genarate/",
				method: "POST",
				body: narratioData,
			}),
		}),

		//chatsection

		startChat: builder.mutation({
			query: (subject) => ({
				url: "api/support/start-chat/",
				method: "POST",
				body: { subject },
			}),
		}),

		//send message
		sendMessage: builder.mutation({
			query: ({ chatId, message, type = "text" }) => ({
				url: `api/support/send-message/${chatId}/`,
				method: "POST",
				body: { message, type },
			}),
		}),

		//getChat
		getMessages: builder.query({
			query: (chatId) => `api/support/get-messages/${chatId}/`, // API endpoint for fetching messages
		}),

		//adminDashboard

		// get all active chats
		getActiveChats: builder.query({
			query: () => "/api/support/admin/active-chats/",
		}),

		//userManagement
		getUsers: builder.query({
			query: () => "api/payment/get_all/subscribtions/",
			providesTags: ["loggedIn"],
		}),

		getDashboardInfo: builder.query({
			query: () => "api/payment/get_all/calculate_for_dashboard/",
		}),

		monthlyRevenue: builder.query({
			query: () => "api/payment/get_all/calculate_yearly_revenue/",
		}),

		//pdf view
		getPdfs: builder.query({
			query: () => "api/va/vaform/generated/list/",
		}),

		getPaymentList: builder.query({
			query: () => "api/dashboard/payments/list/",
		}),

		//loggedIn user
		uploadDDOneFour: builder.mutation({
			query: (data) => ({
				url: "api/vaform/submit/",
				method: "POST",
				body: data,
			}),
		}),
		//update profile
		updateUserProfile: builder.mutation({
			query: ({ data, id }) => ({
				url: `api/auth/profile/`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["loggedIn"],
		}),

		//getForms
		getForms: builder.query({
			query: () => "api/dashboard/forms/review/",
		}),
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

	//getPdfs
	useGetPdfsQuery,

	//upload image
	useUploadDDOneFourMutation,
	useUpdateUserProfileMutation,

	//chatmessage
	useSendMessageMutation,
	useStartChatMutation,
	useGetMessagesQuery,

	//admindashboard
	useGetActiveChatsQuery,
	useGetUsersQuery,
	useGetDashboardInfoQuery,
	useMonthlyRevenueQuery,
	useGetPaymentListQuery,
	useGetFormsQuery,
} = baseApi;
