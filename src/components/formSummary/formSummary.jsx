"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function FormSummary({
  formData,
  prevStep,
  handleSubmit,
  isSubmitting,
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Review Your Information
      </h2>

      <div className="space-y-4">
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <div className="text-gray-500 dark:text-gray-400">Full Name:</div>
            <div className="dark:text-white">{formData.fullName}</div>
            <div className="text-gray-500 dark:text-gray-400">Email:</div>
            <div className="dark:text-white">{formData.email}</div>
            <div className="text-gray-500 dark:text-gray-400">
              Phone Number:
            </div>
            <div className="dark:text-white">{formData.phoneNumber}</div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
            Address Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <div className="text-gray-500 dark:text-gray-400">
              Street Address:
            </div>
            <div className="dark:text-white">{formData.streetAddress}</div>
            <div className="text-gray-500 dark:text-gray-400">City:</div>
            <div className="dark:text-white">{formData.city}</div>
            <div className="text-gray-500 dark:text-gray-400">Zip Code:</div>
            <div className="dark:text-white">{formData.zipCode}</div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
            Account Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <div className="text-gray-500 dark:text-gray-400">Username:</div>
            <div className="dark:text-white">{formData.username}</div>
            <div className="text-gray-500 dark:text-gray-400">Password:</div>
            <div className="dark:text-white">
              {"•".repeat(formData.password.length)}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
          disabled={isSubmitting}
        >
          Previous
        </Button>
        <Button onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </div>
  );
}
