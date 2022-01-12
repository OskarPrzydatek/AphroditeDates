import { z } from "zod"

export const email = z
  .string()
  .nonempty({ message: "Pole Wymagane" })
  .email({ message: "Nieprawidłowy email" })
  .transform((str) => str.toLowerCase().trim())

export const password = z
  .string()
  .nonempty({ message: "Pole Wymagane" })
  .min(8, { message: "Hasło musi zawierać conajmniej 8 znaków" })
  .max(16, { message: "Hasło nie może zawierać więcej niż 16 znaków" })
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
  description: z
    .string()
    .nonempty({ message: "Pole wymagane" })
    .max(500, { message: "Opis nie może zawierać więcej niż 500 znaków." }),
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
