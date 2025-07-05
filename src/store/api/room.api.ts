import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_TAGS, BASE_API_URL } from "../../constants/api.const.ts";
import {
  type CreateRoomFormData,
  type Room,
  roomSchema,
} from "../../types/room.types.ts";
import { type User, userSchema } from "../../types/user.types.ts";

export const roomApi = createApi({
  reducerPath: "roomApi",
  tagTypes: [API_TAGS.Rooms, API_TAGS.Contributors, API_TAGS.AuthUser],
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_API_URL}/room`,
    credentials: "include",
  }),
  endpoints: (build) => ({
    getRecentRooms: build.query<Room[], void>({
      query: () => "/recent",
      rawResponseSchema: roomSchema.array(),
    }),
    getRoomsByTopic: build.query<Room[], string>({
      query: (topic) => `/filter?topic=${topic}`,
      rawResponseSchema: roomSchema.array(),
    }),
    createRoom: build.mutation<CreateRoomFormData, any>({
      query: (body: CreateRoomFormData) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: [API_TAGS.Rooms],
    }),
    getRoomById: build.query<Room, string>({
      query: (roomId) => `/${roomId}`,
      providesTags: [API_TAGS.Rooms],
      rawResponseSchema: roomSchema,
    }),
    getRoomContributors: build.query<User[], string>({
      query: (roomId: string) => `/${roomId}/contributor`,
      providesTags: [API_TAGS.Contributors],
      rawResponseSchema: userSchema.array(),
    }),
    joinRoom: build.mutation<void, string>({
      query: (roomId) => ({
        url: `/${roomId}/join`,
        method: "POST",
      }),
      invalidatesTags: [API_TAGS.Rooms, API_TAGS.AuthUser],
    }),
  }),
});

export const {
  useGetRecentRoomsQuery,
  useGetRoomsByTopicQuery,
  useCreateRoomMutation,
  useGetRoomByIdQuery,
  useGetRoomContributorsQuery,
  useJoinRoomMutation,
} = roomApi;
