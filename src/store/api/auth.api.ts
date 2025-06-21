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
      responseSchema: userSchema,
      providesTags: [API_TAGS.AuthUser],
      transformResponse: (response: unknown): User => {
        const parsed = userSchema.safeParse(response);
        console.log(parsed);
        if (!parsed.success) {
          console.log(parsed);
          throw new Error("Invalid response");
        }
        return parsed.data;
      },
    }),

    login: build.mutation({
      query: (body: LoginFormData) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      transformResponse: (response: unknown): User => {
        const parsed = userSchema.safeParse(response);
        if (!parsed.success) {
          console.error("Invalid signup response:", parsed.error);
          throw new Error("Invalid response structure");
        }
        return parsed.data;
      },
      invalidatesTags: [API_TAGS.AuthUser],
    }),

    signup: build.mutation({
      query: (body: any) => ({
        url: "/signup",
        method: "POST",
        body,
      }),
      transformResponse: (response: unknown): User => {
        const parsed = userSchema.safeParse(response);
        if (!parsed.success) {
          console.error("Invalid signup response:", parsed.error);
          throw new Error("Invalid response structure");
        }
        return parsed.data;
      },
      invalidatesTags: [API_TAGS.AuthUser],
    }),
  }),
});

export const { useGetMeQuery, useLoginMutation, useSignupMutation } = authApi;
