import { z } from "zod";
import { userSchema } from "./user.types.ts";
import { roomSchema } from "./room.types.ts";

export const notificationSchema = z.object({
  _id: z.string(),
  from: userSchema.partial(),
  to: userSchema.partial(),
  type: z.enum([
    "invitation",
    "requestAccepted",
    "requestRejected",
    "follow",
    "request",
    "invitationAccepted",
    "invitationRejected",
  ]),
  room: roomSchema.partial().optional(),
  isAccepted: z.boolean(),
  isRead: z.boolean(),
  isResolved: z.boolean(),
});

export type Notification = z.infer<typeof notificationSchema>;
