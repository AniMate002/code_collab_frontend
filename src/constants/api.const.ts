import { z } from "zod";

export const BASE_API_URL = "http://localhost:3000/api";

export const API_TAGS = {
  AuthUser: "AuthUser",
  Users: "Users",
  Rooms: "Rooms",
  Activities: "Activities",
  Links: "Links",
  Files: "Files",
  Contributors: "Contributors",
  Messages: "Messages",
  Tasks: "Tasks",
  Notifications: "Notifications",
} as const;

export const responseMessageSchema = z.object({
  message: z.string(),
});

export type ResponseMessage = z.infer<typeof responseMessageSchema>;
