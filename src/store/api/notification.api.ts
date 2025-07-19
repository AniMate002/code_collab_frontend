import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_TAGS, BASE_API_URL } from "../../constants/api.const.ts";
import type { Notification } from "../../types/notification.type.ts";

export const notificationApi = createApi({
  reducerPath: "notificationApi",
  tagTypes: [API_TAGS.Notifications, API_TAGS.Activities, API_TAGS.AuthUser],
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_API_URL}/notification`,
    credentials: "include",
  }),
  endpoints: (build) => ({
    getAuthUserNotifications: build.query<Notification[], void>({
      query: () => "/",
      providesTags: [API_TAGS.Notifications],
    }),
    sendRequest: build.mutation<void, { roomId: string }>({
      query: (payload) => ({
        url: `/sendRequest`,
        method: "POST",
        body: { roomId: payload.roomId },
      }),
      invalidatesTags: [
        API_TAGS.Notifications,
        API_TAGS.Activities,
        API_TAGS.AuthUser,
      ],
    }),
    acceptRequest: build.mutation<void, { notificationId: string }>({
      query: (payload) => ({
        url: `/${payload.notificationId}/acceptRequest`,
        method: "PUT",
      }),
      invalidatesTags: [
        API_TAGS.Notifications,
        API_TAGS.Activities,
        API_TAGS.AuthUser,
      ],
    }),
    rejectRequest: build.mutation<void, { notificationId: string }>({
      query: (payload) => ({
        url: `/${payload.notificationId}/rejectRequest`,
        method: "PUT",
      }),
      invalidatesTags: [
        API_TAGS.Notifications,
        API_TAGS.Activities,
        API_TAGS.AuthUser,
      ],
    }),
  }),
});

export const {
  useGetAuthUserNotificationsQuery,
  useSendRequestMutation,
  useAcceptRequestMutation,
  useRejectRequestMutation,
} = notificationApi;
