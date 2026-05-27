"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  Users,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: BookOpen, label: "My Courses" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Users, label: "Community" },
  { icon: Settings, label: "Settings" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    if (main)
      main.style.marginLeft = isMobile ? "0px" : collapsed ? "80px" : "240px";
  }, [collapsed, isMobile]);

  const width = collapsed ? 80 : 240;
  const logo = !collapsed && (
    <div className="flex items-center gap-2">
      <Sparkles className="text-purple-500" size={24} />
      <span className="text-lg font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        NexLearn
      </span>
    </div>
  );

  const navItems = menuItems.map((item) => (
    <a
      key={item.label}
      href="#"
      onClick={() => {
        setActive(item.label);
        if (isMobile) setMobileOpen(false);
      }}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${active === item.label ? "bg-purple-600 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
      title={collapsed && !isMobile ? item.label : ""}
    >
      <item.icon size={18} />
      {(!collapsed || isMobile) && (
        <span className="text-sm">{item.label}</span>
      )}
    </a>
  ));

  const userSection = (
    <div
      className={`flex items-center gap-2 p-2 rounded-xl bg-white/5 ${collapsed && !isMobile ? "justify-center" : ""}`}
    >
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0" />
      {(!collapsed || isMobile) && (
        <div>
          <p className="text-sm font-medium">Amara Hareesh</p>
          <p className="text-xs text-gray-400">hareesh@gmail.com</p>
        </div>
      )}
    </div>
  );

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {logo}
        {!isMobile && (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg hover:bg-white/10"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        )}
      </div>
      <nav className="flex-1 p-3 space-y-1">{navItems}</nav>
      <div className="p-3 border-t border-white/10">{userSection}</div>
    </div>
  );

  return (
    <>
      {isMobile && !mobileOpen && (
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800 border border-white/10"
        >
          <Menu size={20} />
        </button>
      )}

      {!isMobile && (
        <motion.aside
          animate={{ width }}
          className="fixed left-0 top-0 z-40 h-full bg-gray-900 border-r border-white/10"
        >
          {sidebarContent}
        </motion.aside>
      )}

      {isMobile && (
        <AnimatePresence>
          {mobileOpen && (
            <>
              <div
                onClick={() => setMobileOpen(false)}
                className="fixed inset-0 bg-black/70 z-40"
              />
              <motion.aside
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                className="fixed left-0 top-0 z-50 h-full w-64 bg-gray-900 border-r border-white/10"
              >
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-white/10"
                  >
                    <X size={18} />
                  </button>
                </div>
                {sidebarContent}
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
