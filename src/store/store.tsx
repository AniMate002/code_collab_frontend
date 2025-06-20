import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth.api.ts";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
