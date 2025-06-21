import { z } from "zod";

export const userSchema = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string(),
  specialization: z.string(),
  skills: z.array(z.string()),
  rooms: z.array(z.string()),
  activities: z.array(z.string()),
  following: z.array(z.string()),
  followers: z.array(z.string()),
});

export type User = z.infer<typeof userSchema>;
