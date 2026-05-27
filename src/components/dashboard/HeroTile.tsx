"use client";
import { motion } from "framer-motion";
import { Flame, Calendar, Sparkles } from "lucide-react";

interface HeroTileProps {
  userName: string;
  streak: number;
}

export function HeroTile({ userName, streak }: HeroTileProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/20 p-6 border border-white/10"
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={18} className="text-purple-500" />
              <span className="text-sm text-purple-400">Welcome back!</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Hey, {userName}! 👋
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              Ready to continue your learning journey?
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600/20 border border-purple-500/30">
            <Flame size={20} className="text-orange-500" />
            <div>
              <div className="text-2xl font-bold">{streak}</div>
              <div className="text-xs text-gray-400">day streak</div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4 text-sm text-gray-400 flex-wrap">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>This week: 5 hours goal</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block" />
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>2 courses active</span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />
    </motion.article>
  );
}
