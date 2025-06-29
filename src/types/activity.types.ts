import { z } from "zod";

export const activitySchema = z.object({
  _id: z.string().nonempty(),
  title: z.string().nonempty(),
  user: z.string().nonempty(),
  room: z.string().nonempty(),
  createdAt: z.string().nonempty(),
  updatedAt: z.string().nonempty(),
});

export type Activity = z.infer<typeof activitySchema>;
