import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      <div className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to GamingPrism Pvt Ltd.
        </h1>

        <p className="text-gray-600 text-lg">
          Manage posts, products, and view detailed insights from the dashboard.
        </p>

        <div className="flex justify-center gap-4 bg-orange-100 p-4 rounded-lg">
          <Link href="/dashboard">
            <Button size="lg">Go to Dashboard</Button>
          </Link>
        </div>

        <p className="text-sm text-gray-500">
          Tip: Use the sidebar inside the dashboard to navigate between
          sections.
        </p>
      </div>
    </main>
  );
}
