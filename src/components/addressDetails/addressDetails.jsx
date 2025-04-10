"use client"



import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { addressSchema } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"

export default function AddressDetails({ formData, updateFormData, nextStep, prevStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      streetAddress: formData.streetAddress,
      city: formData.city,
      zipCode: formData.zipCode,
    },
  })

  const onSubmit = (data) => {
    updateFormData(data)
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Address Details</h2>

      <div className="space-y-2">
        <Label htmlFor="streetAddress" className="text-gray-700 dark:text-gray-300">
          Street Address
        </Label>
        <Input
          id="streetAddress"
          {...register("streetAddress")}
          placeholder="123 Main St"
          className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        {errors.streetAddress && <p className="text-red-500 text-sm mt-1">{errors.streetAddress.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="city" className="text-gray-700 dark:text-gray-300">
          City
        </Label>
        <Input
          id="city"
          {...register("city")}
          placeholder="New York"
          className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="zipCode" className="text-gray-700 dark:text-gray-300">
          Zip Code
        </Label>
        <Input
          id="zipCode"
          {...register("zipCode")}
          placeholder="10001"
          className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>}
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={prevStep}>
          Previous
        </Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  )
}
