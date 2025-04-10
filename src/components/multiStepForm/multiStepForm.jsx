"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { submitFormData } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import AccountSetup from "../accountSetup/accountSetup";
import AddressDetails from "../addressDetails/addressDetails";
import FormSummary from "../formSummary/formSummary";
import PersonalInfo from "../personalInfo/personalInfo";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: submitFormData,
    onSuccess: () => {
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          streetAddress: "",
          city: "",
          zipCode: "",
          username: "",
          password: "",
          confirmPassword: "",
        });
        setStep(1);
      }, 3000);
    },
  });

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("Form submitted with data:", formData);
    mutate(formData);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfo
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <AddressDetails
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <AccountSetup
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <FormSummary
            formData={formData}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
            isSubmitting={isPending}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-6 transition-colors">
      {isSuccess && (
        <Alert className="mb-6 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            Your form has been submitted successfully.
          </AlertDescription>
        </Alert>
      )}

      {isError && (
        <Alert className="mb-6 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error.message || "Something went wrong. Please try again."}
          </AlertDescription>
        </Alert>
      )}

      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div
              key={stepNumber}
              className={`flex-1 h-2 ${
                stepNumber <= step
                  ? "bg-green-500"
                  : "bg-gray-200 dark:bg-gray-700"
              } ${stepNumber > 1 ? "ml-2" : ""} rounded-full transition-colors`}
            />
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <div
            className={
              step >= 1 ? "text-green-600 dark:text-green-400 font-medium" : ""
            }
          >
            Personal
          </div>
          <div
            className={
              step >= 2 ? "text-green-600 dark:text-green-400 font-medium" : ""
            }
          >
            Address
          </div>
          <div
            className={
              step >= 3 ? "text-green-600 dark:text-green-400 font-medium" : ""
            }
          >
            Account
          </div>
          <div
            className={
              step >= 4 ? "text-green-600 dark:text-green-400 font-medium" : ""
            }
          >
            Summary
          </div>
        </div>
      </div>

      {renderStep()}
    </div>
  );
};

export default MultiStepForm;
