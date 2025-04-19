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
        createUser: builder.mutation({
            query: (userData) => ({
                url: "api/auth/register/",
                method: "POST",
                body: userData,
                        
            }),
        }),
        



    }),
});

export const { 
    //create user
    useCreateUserMutation,


} = baseApi;