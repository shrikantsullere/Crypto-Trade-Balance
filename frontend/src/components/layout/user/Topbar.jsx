import { Menu, UserCircle2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../../../data/navigation";

export default function Topbar({ onMenuClick }) {
  const navigate = useNavigate();
  const location = useLocation();
  const active = navItems.find((item) => location.pathname.startsWith(item.path)) || (location.pathname === "/profile" ? { label: "My Profile" } : null);

  return (
    <header className="relative sticky top-0 z-50 flex h-20 items-center justify-between border-b border-black/5 bg-white/80 px-6 backdrop-blur-xl md:px-10">
      <div className="flex items-center gap-4 h-full">
        <button
          onClick={onMenuClick}
          className="rounded-xl border border-black/5 bg-black/5 p-2.5 text-brand-green md:hidden"
          aria-label="Open sidebar"
        >
          <Menu size={20} />
        </button>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-xl font-serif text-brand-green leading-tight">{active?.label ?? "Trade Balance"}</h2>
          <span className="text-[9px] font-bold tracking-widest uppercase text-black/20 leading-tight">Member Network</span>
        </div>
      </div>
      <div className="flex items-center gap-4 h-full">
        <button
          className="flex items-center gap-3 rounded-2xl border border-black/5 bg-black/5 px-5 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-green hover:bg-white hover:border-accent-gold/40 transition-all group shadow-sm"
          onClick={() => navigate("/profile")}
        >
          <UserCircle2 size={16} className="text-accent-gold" />
          <span className="hidden sm:inline">Member Profile</span>
          <span className="sm:hidden">Profile</span>
        </button>
      </div>
    </header>
  );
}
