import { z } from "zod";
import { userSchema } from "./user.types.ts";
import { roomSchema } from "./room.types.ts";

export const activitySchema = z.object({
  _id: z.string().nonempty(),
  title: z.string().nonempty(),
  user: userSchema.partial().optional().or(z.string()),
  room: z.union([roomSchema.partial(), z.string(), z.null()]).optional(),
  createdAt: z.string().nonempty(),
  updatedAt: z.string().nonempty(),
});

export type Activity = z.infer<typeof activitySchema>;
