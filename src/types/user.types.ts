import { z } from "zod";

export const userSchema = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string(),
  avatar: z
    .string()
    .default(
      "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg",
    ),
  specialization: z.string(),
  skills: z.array(z.string()),
  rooms: z.array(z.string()),
  activities: z.array(z.string()),
  following: z.array(z.string()),
  followers: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type User = z.infer<typeof userSchema>;
