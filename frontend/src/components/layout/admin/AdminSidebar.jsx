import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { LogOut, PanelLeftClose, PanelLeftOpen, X, ChevronRight, UserCircle } from "lucide-react";
import { adminNavItems } from "../../../data/adminNavigation";
import logo from "../../../assets/image copy 3.png";
import lionLogo from "../../../assets/lion-logo-transparent.png";

export default function AdminSidebar({ open, onClose, isCollapsed, onToggleCollapse, onProfileClick }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden ${open ? "block" : "hidden"}`}
        onClick={onClose}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-[70] flex flex-col border-r border-accent-gold/20 bg-brand-green/95 backdrop-blur-3xl p-5 text-white transition-all duration-500 ease-in-out md:translate-x-0 ${
          isCollapsed ? "md:w-24" : "md:w-64"
        } ${open ? "translate-x-0 w-64" : "-translate-x-full w-64"}`}
      >
        {/* Animated Background Glow */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-accent-gold/10 to-transparent pointer-events-none opacity-30" />
 
        <div className={`mb-1 flex ${isCollapsed ? "flex-col items-center gap-4" : "items-center justify-between"} relative z-10 w-full`}>
          <div className="flex items-center justify-center">
             <div className="relative group p-1 flex items-center justify-center">
               <div className="absolute inset-0 bg-accent-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
               <img
                 src={logo}
                 alt="Trade Balance Admin"
                 className={`${isCollapsed ? "h-10 w-10 brightness-110" : "h-16 md:h-20 w-auto"} object-contain relative z-10 drop-shadow-xl transition-all duration-500`}
               />
             </div>
          </div>
          
          <div className="flex items-center justify-center">
            <button
              className="rounded-full bg-black/40 border border-white/10 p-2 text-accent-gold hover:bg-white/10 hover:border-accent-gold/40 transition-all hidden md:flex items-center justify-center"
              onClick={onToggleCollapse}
            >
              {isCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
            </button>
            
            <button
              className="md:hidden rounded-full bg-black/40 border border-white/10 p-2 text-accent-gold flex items-center justify-center"
              onClick={onClose}
            >
              <X size={20} />
            </button>
          </div>
        </div>



        <nav className="flex-1 space-y-2 overflow-y-auto pr-2 hide-scrollbar">
          {adminNavItems.map((item) => {
            const Icon = item.icon;


            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `group relative flex h-[46px] items-center ${isCollapsed ? "justify-center px-0" : "gap-4 px-4"} rounded-2xl text-[10px] font-bold tracking-[0.05em] uppercase transition-all duration-300 ${
                    isActive 
                      ? "bg-accent-gold/90 text-black shadow-lg shadow-accent-gold/10" 
                      : "text-white/40 hover:bg-white/5 hover:text-white border border-transparent hover:border-white/5"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon size={18} className={`shrink-0 ${isActive ? "text-black" : "opacity-60 group-hover:text-accent-gold group-hover:opacity-100"} transition-all`} />
                    
                    {!isCollapsed && (
                       <>
                         <span className="flex-1 truncate">{item.label}</span>
                         {isActive && <div className="w-1 h-1 rounded-full bg-black/40" />}
                       </>
                    )}

                    {/* Left Active/Hover Stripe */}
                    {!isCollapsed && (
                      <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 rounded-r-full transition-all duration-300 ${isActive ? "h-5 bg-black/40" : "h-0 bg-accent-gold group-hover:h-4 opacity-50"}`} />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-auto pt-4 border-t border-white/5 pb-2">
          <NavLink
            to="/admin/profile"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 h-[42px] rounded-xl transition-all duration-300 ${
                isCollapsed ? "justify-center w-full" : "px-4 w-full"
              } ${
                isActive 
                  ? "bg-accent-gold text-black shadow-lg shadow-accent-gold/20" 
                  : "text-white/40 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/10"
              } cursor-pointer`
            }
          >
            <UserCircle size={18} className="shrink-0" />
            {!isCollapsed && <span className="text-[10px] font-bold tracking-[0.1em] uppercase">Admin Profile</span>}
          </NavLink>

          <button
            type="button"
            className={`flex items-center gap-3 h-[42px] mt-2 rounded-xl transition-all duration-300 ${
              isCollapsed ? "justify-center w-full" : "px-4 w-full"
            } text-white/30 hover:bg-red-500/10 hover:text-red-400 border border-transparent hover:border-red-500/20`}
            onClick={() => navigate("/login")}
          >
            <LogOut size={16} className="shrink-0" />
            {!isCollapsed && <span className="text-[10px] font-bold tracking-[0.1em] uppercase">Security Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
