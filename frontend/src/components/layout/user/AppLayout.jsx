import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppLayout() {
  const [open, setOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="h-screen bg-[#f8faf9] relative flex overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute inset-x-0 top-0 h-[50vh] bg-gradient-to-b from-brand-green/5 to-transparent pointer-events-none" />
      
      <Sidebar
        open={open}
        onClose={() => setOpen(false)}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed((prev) => !prev)}
      />
      
      <div className={`transition-all duration-500 hidden md:block flex-shrink-0 ${isCollapsed ? "w-24" : "w-64"}`} />
      
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-500 relative z-10 h-screen">
        <Topbar onMenuClick={() => setOpen(true)} />
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 scroll-smooth hide-scrollbar">
          <div className="max-w-[1600px] mx-auto w-full relative z-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
