import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppLayout() {
  const [open, setOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-page-bg">
      <Sidebar
        open={open}
        onClose={() => setOpen(false)}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed((prev) => !prev)}
      />
      <div className={`relative z-10 ${isCollapsed ? "md:pl-20" : "md:pl-64"}`}>
        <Topbar onMenuClick={() => setOpen(true)} />
        <main className="mx-auto w-full max-w-[1400px] p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
