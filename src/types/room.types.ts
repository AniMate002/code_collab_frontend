import { z } from "zod";
import { userSchema } from "./user.types.ts";
import { RoomTypes } from "../constants/room.const.ts";

export const linkSchema = z.object({
  _id: z.string().nonempty(),
  name: z.string().nonempty(),
  link: z.string().nonempty(),
});

export const fileSchema = z.object({
  _id: z.string().nonempty(),
  name: z.string().nonempty(),
  link: z.string().nonempty(),
});

export const messageSchema = z.object({
  _id: z.string().nonempty(),
  sender: userSchema.partial(),
  body: z.string().nonempty(),
  createdAt: z.string().nonempty(),
  updatedAt: z.string().nonempty(),
});

export type Message = z.infer<typeof messageSchema>;

export const taskSchema = z.object({
  _id: z.string().nonempty(),
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  assignedTo: userSchema,
  deadline: z.string().optional(),
  status: z
    .enum(["not started", "in progress", "finished"])
    .default("not started"),
});

export const roomSchema = z.object({
  _id: z.string().nonempty(),
  title: z.string().nonempty(),
  description: z.string(),
  image: z
    .string()
    .default(
      "https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg",
    ),
  topic: z.string(),
  contributors: z.string().array().optional(),
  activities: z.string().array().optional(),
  type: z.string().nonempty(),
  messages: messageSchema.array().optional(),
  links: linkSchema.array().optional(),
  tasks: taskSchema.array().optional(),
  files: fileSchema.array().optional(),
});

export type Room = z.infer<typeof roomSchema>;

export const createRoomSchema = z.object({
  title: z.string().nonempty(),
  topic: z.string().nonempty(),
  description: z.string().nonempty(),
  type: z.enum([RoomTypes.PRIVATE, RoomTypes.PUBLIC]),
  image: z.string().optional(),
});

export type CreateRoomFormData = z.infer<typeof createRoomSchema>;
