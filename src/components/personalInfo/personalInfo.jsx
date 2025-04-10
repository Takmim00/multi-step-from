"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { personalInfoSchema } from "@/lib/validation"

export default function PersonalInfo({ formData, updateFormData, nextStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
    },
  })

  const onSubmit = (data) => {
    updateFormData(data)
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Personal Information</h2>

      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-gray-700 dark:text-gray-300">
          Full Name
        </Label>
        <Input
          id="fullName"
          {...register("fullName")}
          placeholder="John Doe"
          className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="john.doe@example.com"
          className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phoneNumber" className="text-gray-700 dark:text-gray-300">
          Phone Number
        </Label>
        <Input
          id="phoneNumber"
          {...register("phoneNumber")}
          placeholder="1234567890"
          className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
      </div>

      <div className="flex justify-end">
        <Button type="submit">Next</Button>
      </div>
    </form>
  )
}
