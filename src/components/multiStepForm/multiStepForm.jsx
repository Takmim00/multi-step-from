"use client"

import React, { useState } from 'react';
import AddressDetails from '../addressDetails/addressDetails';
import AccountSetup from '../accountSetup/accountSetup';
import PersonalInfo from '../personalInfo/personalInfo';
import { useMutation } from '@tanstack/react-query';
import FormSummary from '../formSummary/formSummary';

const MultiStepForm = () => {
    const [step, setStep] = useState(1)
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
    })
  

  
    const updateFormData = (data) => {
      setFormData((prev) => ({ ...prev, ...data }))
    }
  
    const nextStep = () => setStep((prev) => prev + 1)
    const prevStep = () => setStep((prev) => prev - 1)
  
    const handleSubmit = () => {
      console.log("Form submitted with data:", formData)
      mutate(formData)
    }
  
    const renderStep = () => {
      switch (step) {
        case 1:
          return <PersonalInfo formData={formData} updateFormData={updateFormData} nextStep={nextStep} />
        case 2:
          return (
            <AddressDetails
              formData={formData}
              updateFormData={updateFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )
        case 3:
          return (
            <AccountSetup
              formData={formData}
              updateFormData={updateFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )
        case 4:
          return (
            <FormSummary formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} />
          )
        default:
          return null
      }
    }
  
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-6 transition-colors">
        
  
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`flex-1 h-2 ${
                  stepNumber <= step ? "bg-green-500" : "bg-gray-200 dark:bg-gray-700"
                } ${stepNumber > 1 ? "ml-2" : ""} rounded-full transition-colors`}
              />
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <div className={step >= 1 ? "text-green-600 dark:text-green-400 font-medium" : ""}>Personal</div>
            <div className={step >= 2 ? "text-green-600 dark:text-green-400 font-medium" : ""}>Address</div>
            <div className={step >= 3 ? "text-green-600 dark:text-green-400 font-medium" : ""}>Account</div>
            <div className={step >= 4 ? "text-green-600 dark:text-green-400 font-medium" : ""}>Summary</div>
          </div>
        </div>
  
        {renderStep()}
      </div>
    )
};

export default MultiStepForm;