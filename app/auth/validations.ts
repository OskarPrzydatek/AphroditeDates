import { z } from "zod"

export const email = z
  .string()
  .email()
  .transform((str) => str.toLowerCase().trim())

export const password = z
  .string()
  .min(10)
  .max(100)
  .transform((str) => str.trim())

export const Signup = z.object({
  email,
  password,
})

export const Login = z.object({
  email,
  password: z.string(),
})

export const ForgotPassword = z.object({
  email,
})

export const ResetPassword = z
  .object({
    password: password,
    passwordConfirmation: password,
    token: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Hasło Nieprawidłowe",
    path: ["passwordConfirmation"], // set the path of the error
  })

export const ChangePassword = z.object({
  currentPassword: z.string(),
  newPassword: password,
})

export const Announcement = z.object({
  name: z.string().nonempty({ message: "Pole Wymagane" }),
  age: z.string().nonempty({ message: "Pole wymagane" }),
  phone: z.string().nonempty({ message: "Pole wymagane" }),
  // photo: z.string().nonempty({ message: "Pole wymagane" }),
  description: z.string().nonempty({ message: "Pole wymagane" }),
  town: z.string().nonempty({ message: "Pole wymagane" }),
  gender: z.string().nonempty({ message: "Pole wymagane" }),
  interestedIn: z.string().nonempty({ message: "Pole wymagane" }),
  userId: z.number(),
})

export const SearchFilters = z.object({
  town: z.string().nonempty({ message: "Pole wymagane" }),
  gender: z.string().nonempty({ message: "Pole wymagane" }),
  interestedIn: z.string().nonempty({ message: "Pole wymagane" }),
  age: z.string().nonempty({ message: "Pole wymagane" }),
})
