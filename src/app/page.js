import MultiStepForm from "@/components/multiStepForm/multiStepForm";
import { ThemeToggle } from "@/components/themeToggle/themeToggle";



export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-2xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Multi-Step Registration Form</h1>
          <ThemeToggle />
        </div>
    <MultiStepForm/>
      </div>
    </main>
  )
}
