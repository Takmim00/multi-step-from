import { z } from "zod"

// Personal Information Schema
export const personalInfoSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
})

// Address Details Schema
export const addressSchema = z.object({
  streetAddress: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  zipCode: z
    .string()
    .min(1, "Zip code is required")
    .min(5, "Zip code must be at least 5 digits")
    .regex(/^\d+$/, "Zip code must contain only numbers"),
})

// Account Setup Schema
export const accountSetupSchema = z
  .object({
    username: z.string().min(1, "Username is required").min(4, "Username must be at least 4 characters"),
    password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
