import { Suspense } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { BentoGrid } from "@/components/dashboard/BentoGrid";
import { DashboardSkeleton } from "@/components/ui/Skeleton";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 transition-all duration-300">
        <div className="w-full px-4 py-4 lg:px-6 lg:py-6">
          <Suspense fallback={<DashboardSkeleton />}>
            <BentoGrid />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
