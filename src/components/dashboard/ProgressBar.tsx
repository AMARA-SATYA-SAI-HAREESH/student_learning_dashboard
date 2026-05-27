"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="h-2 rounded-full bg-white/10 overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-purple-600 to-pink-500"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${progress}%` } : { width: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
      />
    </div>
  );
}
