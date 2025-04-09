import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-8">
          Multi-Step Registration Form
        </h1>
        <Button variant="outline">from</Button>
      </div>
    </main>
  );
}
