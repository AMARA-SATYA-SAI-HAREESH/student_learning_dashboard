"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Award } from "lucide-react";

const activityData = [
  { day: "M", minutes: 45 },
  { day: "T", minutes: 30 },
  { day: "W", minutes: 60 },
  { day: "T", minutes: 25 },
  { day: "F", minutes: 50 },
  { day: "S", minutes: 75 },
  { day: "S", minutes: 40 },
];

const totalMinutes = activityData.reduce((sum, d) => sum + d.minutes, 0);
const avgDaily = (totalMinutes / 7).toFixed(0);
const maxMinutes = 75;

export function ActivityTile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-2xl bg-gray-900/50 border border-white/10 p-4"
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-sm font-semibold">Activity</h3>
          <p className="text-xs text-gray-400">Last 7 days</p>
        </div>
        <div className="flex gap-1.5">
          <div className="px-2 py-0.5 rounded-lg bg-purple-600/20">
            <div className="flex items-center gap-0.5">
              <TrendingUp size={10} className="text-purple-400" />
              <span className="text-xs">{totalMinutes}m</span>
            </div>
          </div>
          <div className="px-2 py-0.5 rounded-lg bg-white/5">
            <div className="flex items-center gap-0.5">
              <Award size={10} className="text-purple-400" />
              <span className="text-xs">{avgDaily}m/d</span>
            </div>
          </div>
        </div>
      </div>

      <div ref={ref} className="flex items-end justify-center gap-3 h-28">
        {activityData.map((data, idx) => {
          const barHeight = (data.minutes / maxMinutes) * 100;
          return (
            <div
              key={data.day + idx}
              className="flex flex-col items-center gap-1"
            >
              <div className="relative w-6 h-20 bg-white/5 rounded-md overflow-hidden">
                <motion.div
                  initial={{ height: 0 }}
                  animate={
                    isInView ? { height: `${barHeight}%` } : { height: 0 }
                  }
                  transition={{
                    delay: idx * 0.05,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="absolute bottom-0 left-0 w-full rounded-md bg-gradient-to-t from-purple-600 to-purple-400"
                  style={{ height: `${barHeight}%` }}
                />
              </div>
              <span className="text-[10px] text-gray-500">{data.day}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-3 grid grid-cols-3 gap-1.5 pt-2 border-t border-white/10">
        <div className="text-center">
          <p className="text-base font-bold text-purple-400">12</p>
          <p className="text-[10px] text-gray-500">Hours</p>
        </div>
        <div className="text-center">
          <p className="text-base font-bold text-purple-400">+8%</p>
          <p className="text-[10px] text-gray-500">vs last wk</p>
        </div>
        <div className="text-center">
          <p className="text-base font-bold text-green-500">Top15%</p>
          <p className="text-[10px] text-gray-500">Rank</p>
        </div>
      </div>
    </motion.div>
  );
}
