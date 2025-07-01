import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth.api.ts";
import { userApi } from "./api/user.api.ts";
import { roomApi } from "./api/room.api.ts";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [roomApi.reducerPath]: roomApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(roomApi.middleware),
});

export default store;
