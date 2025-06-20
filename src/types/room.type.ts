import { z } from "zod";
import { userSchema } from "./user.types.ts";

export const messageSchema = z.object({
  sender: userSchema,
  body: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const linkSchema = z.object({
  name: z.string(),
  link: z.string(),
});

export const fileSchema = z.object({
  name: z.string(),
  link: z.string(),
});

export const taskSchema = z.object({
  title: z.string(),
  description: z.string(),
  assignedTo: userSchema,
  deadline: z.date().optional(),
  status: z
    .enum(["not started", "in progress", "finished"])
    .default("not started"),
});

export const roomSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z
    .string()
    .default(
      "https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg",
    ),
  topic: z.string().default("General"),
});

export type Room = z.infer<typeof roomSchema>;
export type Message = z.infer<typeof messageSchema>;
export type Link = z.infer<typeof linkSchema>;
export type File = z.infer<typeof fileSchema>;
export type Task = z.infer<typeof taskSchema>;
