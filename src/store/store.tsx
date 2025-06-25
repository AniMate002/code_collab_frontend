import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth.api.ts";
import { userApi } from "./api/user.api.ts";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware),
});

export default store;
