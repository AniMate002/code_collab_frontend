import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth.api.ts";
import { userApi } from "./api/user.api.ts";
import { roomApi } from "./api/room.api.ts";
import { notificationApi } from "./api/notification.api.ts";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [roomApi.reducerPath]: roomApi.reducer,
    [notificationApi.reducerPath]: notificationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(roomApi.middleware)
      .concat(notificationApi.middleware),
});

export default store;
