import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, ShieldCheck, UserCircle2 } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { adminNavItems } from "../../../data/adminNavigation";

export default function AdminTopbar({ onMenuClick }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const active = adminNavItems.find((item) => location.pathname.startsWith(item.path)) || (location.pathname === "/admin/profile" ? { label: "System Profile" } : null);

  return (
    <header className="relative sticky top-0 z-50 flex h-20 items-center justify-between border-b border-black/5 bg-white/80 px-6 backdrop-blur-xl md:px-10">
      <div className="flex items-center gap-4 h-full">
        <button
          onClick={onMenuClick}
          className="rounded-xl border border-black/5 bg-black/5 p-2.5 text-brand-green md:hidden"
          aria-label="Open admin sidebar"
        >
          <Menu size={20} />
        </button>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-xl font-serif text-brand-green leading-tight">{active?.label ?? "System Overview"}</h2>
          <span className="text-[9px] font-bold tracking-widest uppercase text-black/20 leading-tight">Management Portal</span>
        </div>
      </div>
      <div className="flex items-center gap-4 h-full">
        <button
          className="flex items-center gap-3 rounded-2xl border border-black/5 bg-black/5 px-5 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-green hover:bg-white hover:border-accent-gold/40 transition-all group"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <ShieldCheck size={16} className="text-accent-gold" />
          Admin
          <ChevronDown size={14} className={`transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`} />
        </button>
        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="absolute right-8 top-14 z-40 w-52 rounded-xl border border-accent-gold/25 bg-white p-2 shadow-xl overflow-hidden"
            >
              <button 
                className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-brand-green-muted transition-colors"
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/admin/profile");
                }}
              >
                <span className="inline-flex items-center gap-2">
                  <UserCircle2 size={16} className="text-accent-gold" />
                  Admin Profile
                </span>
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
