"use client";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Course } from "@/types/course";
import { ProgressBar } from "./ProgressBar";

const iconMap: Record<string, any> = {
  Code2: Icons.Code2,
  Palette: Icons.Palette,
  LineChart: Icons.LineChart,
  Database: Icons.Database,
  Rocket: Icons.Rocket,
  Brain: Icons.Brain,
  Sparkles: Icons.Sparkles,
  BookOpen: Icons.BookOpen,
};

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  const Icon = iconMap[course.icon_name] || Icons.BookOpen;
  const gradients = [
    "from-blue-500/10",
    "from-purple-500/10",
    "from-green-500/10",
    "from-orange-500/10",
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative overflow-hidden rounded-2xl bg-gray-900/50 border border-white/10 p-5 group"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
      />

      <div className="relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.05, type: "spring" }}
          className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center mb-4"
        >
          <Icon size={24} className="text-purple-500" />
        </motion.div>

        <h2 className="text-lg font-semibold mb-2">{course.title}</h2>

        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">Progress</span>
            <span className="text-purple-400">{course.progress}%</span>
          </div>
          <ProgressBar progress={course.progress} />
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.05 }}
          animate={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-4 w-full py-2 rounded-lg bg-white/5 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        >
          Continue →
        </motion.button>
      </div>
    </motion.article>
  );
}
