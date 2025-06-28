import { z } from "zod";
import { userSchema } from "./user.types.ts";

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
  sender: z.string().nonempty(),
  body: z.string().nonempty(),
  createdAt: z.string().nonempty(),
  updatedAt: z.string().nonempty(),
});

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
  contributors: z.string().array(),
  activities: z.string().array(),
  type: z.string().nonempty(),
  messages: messageSchema.array(),
  links: linkSchema.array(),
  tasks: taskSchema.array(),
  files: fileSchema.array(),
});

export type Room = z.infer<typeof roomSchema>;
