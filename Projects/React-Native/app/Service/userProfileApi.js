import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { firebaseUrl } from "../../firebase/database";

export const userProfileApi = createApi({
  reducerPath: "userProfileApi",
  baseQuery: fetchBaseQuery({ baseUrl: firebaseUrl }),
  tagTypes: ["image", "profile"],
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (localId) => `/users/${localId}/profile.json`,
      providesTags: ["profile"],
    }),

    setProfileImage: builder.mutation({
      query: ({ localId, image }) => ({
        url: `/users/${localId}/profile.json`,
        method: "PATCH",
        body: {
          image,
        },
      }),
      invalidatesTags: ["profile"],
    }),

    getProfileImage: builder.query({
      query: (localId) => `/users/${localId}/profile.json`,
      providesTags: ["profile"],
    }),
  }),
});

export const { useGetProfileImageQuery, useSetProfileImageMutation, useGetProfileQuery } =
  userProfileApi;
