import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_TAGS, BASE_API_URL } from "../../constants/api.const.ts";
import { type User, userSchema } from "../../types/user.types.ts";
import type { LoginFormData } from "../../types/auth.type.ts";

export const authApi = createApi({
  reducerPath: "authApi",
  tagTypes: [API_TAGS.AuthUser],
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_API_URL}/auth`,
    credentials: "include",
  }),
  endpoints: (build) => ({
    getMe: build.query<User, void>({
      query: () => "/getMe",
      providesTags: [API_TAGS.AuthUser],
      rawResponseSchema: userSchema,
      keepUnusedDataFor: 0,
    }),

    login: build.mutation({
      query: (body: LoginFormData) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      rawResponseSchema: userSchema,
      invalidatesTags: [API_TAGS.AuthUser],
    }),

    signup: build.mutation({
      query: (body: any) => ({
        url: "/signup",
        method: "POST",
        body,
      }),
      rawResponseSchema: userSchema,
      invalidatesTags: [API_TAGS.AuthUser],
    }),

    logout: build.mutation<void, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(authApi.util.resetApiState());
      },
    }),
  }),
});

export const {
  useGetMeQuery,
  useLoginMutation,
  useSignupMutation,
  useLogoutMutation,
} = authApi;
