import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_TAGS, BASE_API_URL } from "../../constants/api.const.ts";
import {
  type CreateRoomFormData,
  type CreateTaskFormData,
  type File,
  fileSchema,
  type Link,
  linkSchema,
  type Message,
  messageSchema,
  type Room,
  roomSchema,
  type Task,
  taskSchema,
} from "../../types/room.types.ts";
import { type User, userSchema } from "../../types/user.types.ts";
import { type Activity, activitySchema } from "../../types/activity.types.ts";
import type { SearchQuery } from "../../types/shared.types.ts";

export const roomApi = createApi({
  reducerPath: "roomApi",
  tagTypes: [
    API_TAGS.Rooms,
    API_TAGS.Contributors,
    API_TAGS.AuthUser,
    API_TAGS.Contributors,
    API_TAGS.Messages,
    API_TAGS.Files,
    API_TAGS.Links,
    API_TAGS.Tasks,
    API_TAGS.Activities,
    API_TAGS.Users,
  ],
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
      invalidatesTags: [API_TAGS.Rooms, API_TAGS.Activities],
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
      invalidatesTags: [
        API_TAGS.Rooms,
        API_TAGS.AuthUser,
        API_TAGS.Contributors,
        API_TAGS.Activities,
      ],
    }),
    getRoomMessages: build.query<Message[], string>({
      query: (roomId) => `/${roomId}/message`,
      providesTags: [API_TAGS.Messages],
      rawResponseSchema: messageSchema.array(),
    }),
    sendMessage: build.mutation<void, { roomId: string; body: string }>({
      query: (payload) => ({
        url: `/${payload.roomId}/message`,
        method: "POST",
        body: { body: payload.body },
      }),
      invalidatesTags: [API_TAGS.Messages],
    }),
    getRoomFiles: build.query<File[], string>({
      query: (roomId) => `/${roomId}/file`,
      providesTags: [API_TAGS.Files],
      rawResponseSchema: fileSchema.array(),
    }),
    sendRoomFile: build.mutation<File, { roomId: string; file: string }>({
      query: (payload) => ({
        url: `/${payload.roomId}/file`,
        method: "POST",
        body: { file: payload.file },
      }),
      invalidatesTags: [API_TAGS.Files, API_TAGS.Activities],
    }),
    getRoomLinks: build.query<Link[], string>({
      query: (roomId) => `/${roomId}/link`,
      providesTags: [API_TAGS.Links],
      rawResponseSchema: linkSchema.array(),
    }),
    createRoomLink: build.mutation<
      Link,
      { roomId: string; link: string; name: string }
    >({
      query: (payload) => ({
        url: `/${payload.roomId}/link`,
        method: "POST",
        body: { link: payload.link, name: payload.name },
      }),
      invalidatesTags: [API_TAGS.Links, API_TAGS.Activities],
    }),
    getRoomTasks: build.query<Task[], string>({
      query: (roomId) => `/${roomId}/task`,
      providesTags: [API_TAGS.Tasks],
      rawResponseSchema: taskSchema.array(),
    }),
    changeRoomTaskStatus: build.mutation<
      Task,
      { roomId: string; taskId: string; status: string }
    >({
      query: (payload) => ({
        url: `/${payload.roomId}/task`,
        method: "PATCH",
        body: { status: payload.status, taskId: payload.taskId },
      }),
      invalidatesTags: [API_TAGS.Tasks, API_TAGS.Activities],
    }),
    createRoomTask: build.mutation<
      Task,
      CreateTaskFormData & { roomId: string }
    >({
      query: (payload) => ({
        url: `/${payload.roomId}/task`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [API_TAGS.Tasks, API_TAGS.Activities],
    }),
    getRoomActivity: build.query<Activity[], string>({
      query: (roomId) => `/${roomId}/activity`,
      providesTags: [API_TAGS.Activities],
      rawResponseSchema: activitySchema.array(),
    }),
    searchRoomsByQuery: build.query<Room[], SearchQuery>({
      query: (payload) => `/search?query=${payload.query}`,
      rawResponseSchema: roomSchema.partial().array(),
      providesTags: [API_TAGS.Rooms],
    }),
    editRoom: build.mutation<Room, CreateRoomFormData & { _id: string }>({
      query: (body) => ({
        url: `/${body._id}/edit`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [
        API_TAGS.Rooms,
        API_TAGS.Activities,
        API_TAGS.Users,
        API_TAGS.AuthUser,
      ],
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
  useGetRoomMessagesQuery,
  useSendMessageMutation,
  useGetRoomFilesQuery,
  useSendRoomFileMutation,
  useGetRoomLinksQuery,
  useCreateRoomLinkMutation,
  useGetRoomTasksQuery,
  useChangeRoomTaskStatusMutation,
  useCreateRoomTaskMutation,
  useGetRoomActivityQuery,
  useLazySearchRoomsByQueryQuery,
  useEditRoomMutation,
} = roomApi;
