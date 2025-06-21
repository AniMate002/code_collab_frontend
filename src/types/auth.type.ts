import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const signupSchema = z.object({
  name: z.string().min(3, "Min 3 symbols"),
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Min 8 symbols")
    .regex(/[A-Z]/, "At least one capital letter")
    .regex(/[a-z]/, "At least one lowercase letter")
    .regex(/\d/, "At least one number")
    .regex(/[^A-Za-z0-9]/, "At least one special character"),
  confirmPassword: z.string(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
