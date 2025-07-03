import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_TAGS, BASE_API_URL } from "../../constants/api.const.ts";
import {
  type CreateRoomFormData,
  type Room,
  roomSchema,
} from "../../types/room.types.ts";

export const roomApi = createApi({
  reducerPath: "roomApi",
  tagTypes: [API_TAGS.Rooms],
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
  }),
});

export const {
  useGetRecentRoomsQuery,
  useGetRoomsByTopicQuery,
  useCreateRoomMutation,
} = roomApi;
