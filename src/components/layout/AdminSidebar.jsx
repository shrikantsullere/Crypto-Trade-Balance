import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { LogOut, PanelLeftClose, PanelLeftOpen, X } from "lucide-react";
import { adminNavItems } from "../../data/adminNavigation";
import logo from "../../assets/image copy 3.png";
import lionLogo from "../../assets/lion-logo-transparent.png";
import Button from "../ui/Button";

export default function AdminSidebar({ open, onClose, isCollapsed, onToggleCollapse }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-black/40 md:hidden ${open ? "block" : "hidden"}`}
        onClick={onClose}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex flex-col border-r border-accent-gold/25 bg-gradient-to-b from-brand-green to-[#0a2f25] p-4 text-white transition-all md:translate-x-0 ${
          isCollapsed ? "md:w-20" : "md:w-64"
        } ${open ? "translate-x-0 w-64" : "-translate-x-full w-64"}`}
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="flex min-w-0 items-center">
            <img
              src={isCollapsed ? lionLogo : logo}
              alt="Trade Balance Admin logo"
              className={`${isCollapsed ? "h-9 w-9 rounded-xl border border-white/20 bg-white/10 p-1.5" : "h-12 w-auto"} object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.4)]`}
            />
          </div>
          <button
            className="hidden rounded-lg border border-white/25 bg-white/10 p-2 text-white md:inline-flex"
            onClick={onToggleCollapse}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
          </button>
          <button
            className="rounded-lg p-2 text-white md:hidden"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>
        {!isCollapsed && (
          <div className="mb-4 rounded-xl border border-accent-gold/25 bg-white/10 px-3 py-2 text-xs uppercase tracking-wider text-accent-gold">
            Admin Panel
          </div>
        )}
        <nav className="hide-scrollbar flex-1 space-y-1 overflow-y-auto">
          {adminNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `relative flex min-h-11 items-center ${isCollapsed ? "justify-center px-2" : "gap-3 px-3"} rounded-xl text-sm font-medium transition ${
                    isActive ? "text-black" : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive ? (
                      <motion.span
                        layoutId="admin-sidebar-active-pill"
                        className="absolute inset-0 -z-10 rounded-xl bg-accent-gold"
                        transition={{ type: "spring", stiffness: 260, damping: 24 }}
                      />
                    ) : null}
                    <motion.span whileHover={{ rotate: 8 }}>
                      <Icon size={18} />
                    </motion.span>
                    {!isCollapsed && <span>{item.label}</span>}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
        <div className="mt-4 border-t border-white/20 pt-4">
          <Button
            variant="danger"
            className={`w-full border border-white/25 bg-white/10 text-white hover:bg-white/20 ${isCollapsed ? "!px-2" : ""}`}
            onClick={() => navigate("/login")}
          >
            <LogOut size={16} />
            {!isCollapsed && <span className="ml-2">Admin Logout</span>}
          </Button>
        </div>
      </aside>
    </>
  );
}
