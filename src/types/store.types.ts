import store from "../store/store.tsx";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
