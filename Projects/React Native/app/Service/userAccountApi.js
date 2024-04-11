import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { firebaseUrl } from "../../firebase/database";

// Mockup → createUser
import balance from "./userInit/balance";
import contacts from "./userInit/contacts";
import movements from "./userInit/movements";

export const userAccountApi = createApi({
  reducerPath: "userAccountApi",
  baseQuery: fetchBaseQuery({ baseUrl: firebaseUrl }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    
    // getUser → useSessionGet.jsx
    getUser: builder.query({
      query: (userId) => `/users/${userId}.json`,
      providesTags: ["users"],
    }),

    // create init user
    createUser: builder.mutation({
      query: ({newUserId, userName, userEmail, userAlias} ) => ({
        url: `/users/${newUserId}.json`,
        method: "PATCH",
        body: {
          userId: newUserId,
          balance,
          contacts,
          movements,
          profile: {
            cvu: "123456789",
            alias: `${userAlias}.classicpocket`,
            email: userEmail,
            name: userName,
            password: "***********",
            image: null,
          },
        },
      }),
      invalidatesTags: ["users"],
    }),

    // del user info
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useGetUserQuery, useCreateUserMutation, useDeleteUserMutation } =
  userAccountApi;
