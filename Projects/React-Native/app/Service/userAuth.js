import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiKey, authUrl } from "../../firebase/database";

// Aurh Login - SingUp
export const userAuthApi = createApi({
    reducerPath:"userAuthApi",
    baseQuery:fetchBaseQuery({baseUrl:authUrl}),
    endpoints:(builder) => ({
        signUp:builder.mutation({
            query: (user) => ({
                url:`accounts:signUp?key=${apiKey}`,
                method:"POST",
                body:user
            })
        }),
        login: builder.mutation({
            query: (user) => ({
                url:`accounts:signInWithPassword?key=${apiKey}`,
                method:"POST",
                body:user
            }),
        })
    })
})

export const {useSignUpMutation,useLoginMutation} = userAuthApi 

