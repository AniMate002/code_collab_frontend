import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "../../constants/api.const.ts";
import { type User, userSchema } from "../../types/user.types.ts";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_API_URL}/auth` }),
  endpoints: (build) => ({
    getMe: build.query<User, void>({
      query: () => "/getMe",
      responseSchema: userSchema,
      transformResponse: (response: unknown): User => {
        const parsed = userSchema.safeParse(response);
        console.log(parsed);
        if (!parsed.success) {
          console.log(parsed);
          throw new Error("Invalid response");
        }
        return parsed.data;
      },
    }),
  }),
});

export const { useGetMeQuery } = authApi;
