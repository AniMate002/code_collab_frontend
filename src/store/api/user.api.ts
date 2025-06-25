import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_TAGS, BASE_API_URL } from "../../constants/api.const.ts";
import { type User, userSchema } from "../../types/user.types.ts";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: [API_TAGS.Users],
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_API_URL}/user`,
    credentials: "include",
  }),
  endpoints: (build) => ({
    getUserFollowers: build.query<User[], string>({
      query: (userId) => `/${userId}/followers`,
      providesTags: [API_TAGS.Users],
      keepUnusedDataFor: 60,
      rawResponseSchema: userSchema.array(),
    }),
    getUserFollowing: build.query<User[], string>({
      query: (userId) => `/${userId}/following`,
      providesTags: [API_TAGS.Users],
      keepUnusedDataFor: 60,
      rawResponseSchema: userSchema.array(),
    }),
  }),
});

export const { useGetUserFollowersQuery, useGetUserFollowingQuery } = userApi;
