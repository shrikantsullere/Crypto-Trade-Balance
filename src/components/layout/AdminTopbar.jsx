import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, ShieldCheck, UserCircle2 } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { adminNavItems } from "../../data/adminNavigation";

export default function AdminTopbar({ onMenuClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const active = adminNavItems.find((item) => location.pathname.startsWith(item.path));

  return (
    <header className="neo-panel relative sticky top-0 z-20 flex h-16 items-center justify-between border-b border-accent-gold/25 px-4 backdrop-blur md:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-lg border border-accent-gold/30 bg-white/70 p-2 text-brand-green md:hidden"
          aria-label="Open admin sidebar"
        >
          <Menu size={18} />
        </button>
        <h2 className="text-lg font-semibold text-brand-green">{active?.label ?? "Admin Panel"}</h2>
      </div>
      <div className="flex items-center gap-3">
        <button
          className="flex items-center gap-2 rounded-xl border border-accent-gold/30 bg-white/70 px-3 py-2 text-sm text-brand-green"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <ShieldCheck size={16} />
          Admin
          <ChevronDown size={14} />
        </button>
        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="absolute right-8 top-14 z-40 w-52 rounded-xl border border-accent-gold/25 bg-white p-2 shadow-xl"
            >
              <button className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-brand-green-muted">
                <span className="inline-flex items-center gap-2">
                  <UserCircle2 size={16} />
                  Admin Profile
                </span>
              </button>
              <button className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-brand-green-muted">
                Roles & Settings
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
