"use client";
import { motion } from "framer-motion";

export function SkeletonCard() {
  return (
    <div className="rounded-2xl bg-gray-900/50 border border-white/10 p-5">
      <div className="w-12 h-12 rounded-xl bg-white/10 mb-4 animate-pulse" />
      <div className="h-5 w-3/4 rounded-lg bg-white/10 mb-2 animate-pulse" />
      <div className="h-4 w-1/2 rounded-lg bg-white/10 mb-4 animate-pulse" />
      <div className="h-2 rounded-full bg-white/10 animate-pulse" />
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div className="md:col-span-2">
        <div className="h-48 rounded-2xl bg-gray-900/50 border border-white/10 p-6 animate-pulse">
          <div className="h-6 w-32 rounded-lg bg-white/10 mb-4" />
          <div className="h-8 w-48 rounded-lg bg-white/10 mb-2" />
          <div className="h-4 w-64 rounded-lg bg-white/10" />
        </div>
      </div>
      {[1, 2, 3, 4].map((i) => (
        <SkeletonCard key={i} />
      ))}
      <div className="md:col-span-2">
        <div className="h-64 rounded-2xl bg-gray-900/50 border border-white/10 p-6 animate-pulse">
          <div className="flex justify-between mb-6">
            <div>
              <div className="h-5 w-32 rounded-lg bg-white/10 mb-1" />
              <div className="h-4 w-24 rounded-lg bg-white/10" />
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-20 rounded-lg bg-white/10" />
              <div className="h-8 w-20 rounded-lg bg-white/10" />
            </div>
          </div>
          <div className="flex items-end gap-2 h-32">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="flex-1 h-full flex flex-col gap-2">
                <div className="flex-1 rounded-lg bg-white/10" />
                <div className="h-3 w-full rounded bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
