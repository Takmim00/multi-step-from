export const submitFormData = async (data) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (Math.random() > 0.1) {
    return {
      success: true,
      message: "Form submitted successfully!",
      data,
    };
  } else {
    throw new Error("Server error. Please try again.");
  }
};
