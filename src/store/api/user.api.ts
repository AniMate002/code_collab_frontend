import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_TAGS, BASE_API_URL } from "../../constants/api.const.ts";
import {
  type UpdateUserFormData,
  type User,
  userSchema,
} from "../../types/user.types.ts";
import { type Room, roomSchema } from "../../types/room.types.ts";
import { type Activity, activitySchema } from "../../types/activity.types.ts";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: [
    API_TAGS.AuthUser,
    API_TAGS.Users,
    API_TAGS.AuthUser,
    API_TAGS.Rooms,
    API_TAGS.Activities,
  ],
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_API_URL}/user`,
    credentials: "include",
  }),
  endpoints: (build) => ({
    getUserFollowers: build.query<User[], string>({
      query: (userId) => `/${userId}/followers`,
      providesTags: [API_TAGS.Users],
      keepUnusedDataFor: 60,
      rawResponseSchema: userSchema.partial().array(),
    }),
    getUserFollowing: build.query<User[], string>({
      query: (userId) => `/${userId}/following`,
      providesTags: [API_TAGS.Users],
      keepUnusedDataFor: 60,
      rawResponseSchema: userSchema.partial().array(),
    }),
    getUserRooms: build.query<Room[], string>({
      query: (userId) => `/${userId}/rooms`,
      providesTags: [API_TAGS.Rooms],
      keepUnusedDataFor: 60,
      rawResponseSchema: roomSchema.partial().array(),
    }),
    getUserById: build.query<User, string>({
      query: (userId) => `/${userId}`,
      providesTags: [API_TAGS.Users],
      keepUnusedDataFor: 60,
      rawResponseSchema: userSchema,
    }),
    followUser: build.mutation<void, string>({
      query: (userId) => ({
        url: `/${userId}/follow`,
        method: "PATCH",
      }),
      invalidatesTags: [API_TAGS.Users, API_TAGS.AuthUser],
    }),
    getUserActivity: build.query<Activity[], string>({
      query: (userId) => `/${userId}/activity`,
      providesTags: [API_TAGS.Activities],
      rawResponseSchema: activitySchema.array(),
    }),
    getFeaturedUsers: build.query<User[], void>({
      query: () => "/featured",
      providesTags: [API_TAGS.Users],
      rawResponseSchema: userSchema.array(),
      keepUnusedDataFor: 60,
    }),
    getUsersBySpecialization: build.query<User[], string>({
      query: (specialization) => `/filter?specialization=${specialization}`,
      providesTags: [API_TAGS.Users],
      rawResponseSchema: userSchema.array(),
      keepUnusedDataFor: 60,
    }),
    updateUser: build.mutation<User, UpdateUserFormData>({
      query: (userDto: UpdateUserFormData) => ({
        url: `/${userDto._id}`,
        method: "PUT",
        body: userDto,
      }),
      invalidatesTags: [API_TAGS.AuthUser],
    }),
  }),
});

export const {
  useGetUserFollowersQuery,
  useGetUserFollowingQuery,
  useGetUserRoomsQuery,
  useGetUserByIdQuery,
  useFollowUserMutation,
  useGetUserActivityQuery,
  useGetFeaturedUsersQuery,
  useGetUsersBySpecializationQuery,
  useUpdateUserMutation,
} = userApi;
