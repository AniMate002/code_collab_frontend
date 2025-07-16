import { z } from "zod";
import { userSchema } from "./user.types.ts";
import { RoomTypes } from "../constants/room.const.ts";

export const linkSchema = z.object({
  _id: z.string().nonempty(),
  name: z.string().nonempty(),
  link: z.string().nonempty(),
});
export type Link = z.infer<typeof linkSchema>;

export const fileSchema = z.object({
  _id: z.string().nonempty(),
  sender: userSchema.partial(),
  link: z.string().nonempty(),
});
export type File = z.infer<typeof fileSchema>;

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
  assignedTo: userSchema.partial(),
  deadline: z.string().optional(),
  status: z
    .enum(["not started", "in progress", "finished"])
    .default("not started"),
});
export type Task = z.infer<typeof taskSchema>;

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
  admin: userSchema.partial().optional(),
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

export const createLinkFormSchema = z.object({
  name: z.string().nonempty(),
  link: z
    .string()
    .nonempty({ message: "Link is required" })
    .regex(/^https:\/\/(?:[\w-]+\.)+[a-z]{2,}(?:\/\S*)?$/i, {
      message: "Invalid HTTPS URL format",
    }),
});

export type CreateLinkFormData = z.infer<typeof createLinkFormSchema>;

export const createTaskFormSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  deadline: z.date().optional(),
  assignedTo: z
    .string({ message: "Assignee is required" })
    .nonempty({ message: "Assignee is required" }),
});

export type CreateTaskFormData = z.infer<typeof createTaskFormSchema>;
