import * as z from "zod"

export const SignupValidation = z.object({
    firstname: z.string().min(1, { message: "First name is required" }),
    lastname: z.string().min(1, { message: "Last name is required" }),
    email: z.string().email(),
    username: z.string().min(2).max(50),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  })

export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string()
})