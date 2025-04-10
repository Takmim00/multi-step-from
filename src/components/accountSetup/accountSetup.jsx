"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { accountSetupSchema } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export default function AccountSetup({ formData, updateFormData, nextStep, prevStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(accountSetupSchema),
    defaultValues: {
      username: formData.username,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    },
  })

  const onSubmit = (data) => {
    updateFormData(data)
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Account Setup</h2>

      <div className="space-y-2">
        <Label htmlFor="username" className="text-gray-700 dark:text-gray-300">
          Username
        </Label>
        <Input
          id="username"
          {...register("username")}
          placeholder="johndoe"
          className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          {...register("password")}
          className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-gray-700 dark:text-gray-300">
          Confirm Password
        </Label>
        <Input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
          className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={prevStep}>
          Previous
        </Button>
        <Button type="submit">Review</Button>
      </div>
    </form>
  )
}
