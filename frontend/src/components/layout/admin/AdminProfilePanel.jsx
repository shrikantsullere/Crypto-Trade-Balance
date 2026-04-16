import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, UserCircle, ShieldCheck, Save, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

export default function AdminProfilePanel({ isOpen, onClose }) {
  const [email, setEmail] = useState("admin@tradebalance.com");
  const [passwords, setPasswords] = useState({ current: "", new: "", confirm: "" });

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1001] flex items-center justify-center p-4 md:p-6 overflow-hidden">
          {/* Enhanced Backdrop with stronger blur */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-green/40 backdrop-blur-xl"
          />

          {/* Centered Modal Content */}
          <motion.div
            key="profile-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-[0_32px_120px_-20px_rgba(0,0,0,0.5)] flex flex-col max-h-[90vh] overflow-hidden border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Section with Luxury Gradient */}
            <div className="relative h-48 bg-brand-green overflow-hidden flex flex-col justify-end p-10">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-accent-gold/15 rounded-full blur-[100px]" />
                <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-black/40 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent" />
              </div>
              
              <button 
                onClick={onClose}
                type="button"
                className="absolute top-8 right-8 p-3 rounded-2xl bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all z-20 hover:scale-110 active:scale-90"
              >
                <X size={24} />
              </button>

              <div className="relative z-10 flex items-center gap-8">
                <div className="relative">
                  <div className="w-28 h-28 rounded-[2rem] bg-black/30 border border-accent-gold/40 flex items-center justify-center relative group overflow-hidden">
                    <div className="absolute inset-0 bg-accent-gold/10 group-hover:bg-accent-gold/20 transition-all duration-500" />
                    <UserCircle size={64} className="text-accent-gold relative z-10" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-accent-gold flex items-center justify-center border-4 border-brand-green shadow-xl">
                    <ShieldCheck size={14} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-serif tracking-tight text-white mb-2">System Administrator</h3>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent-gold/80">Active Protocol Layer 4</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Form Content */}
            <div className="flex-1 overflow-y-auto p-10 space-y-10 hide-scrollbar bg-gradient-to-b from-white to-[#f8faf9]">
              <div className="grid md:grid-cols-2 gap-10">
                {/* Identity Section */}
                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-1">
                       <Mail size={16} className="text-accent-gold" />
                    </div>
                    <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-brand-green/40">Communication</h4>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-black/40 uppercase tracking-widest ml-1">Admin Email Access</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black/[0.02] border border-black/5 rounded-2xl p-5 text-sm font-semibold focus:outline-none focus:border-accent-gold/40 focus:bg-white transition-all shadow-sm focus:shadow-gold-mild"
                    />
                  </div>
                </section>

                {/* Security Section */}
                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-1">
                       <Lock size={16} className="text-accent-gold" />
                    </div>
                    <h4 className="text-[11px] font-black tracking-[0.2em] uppercase text-brand-green/40">Credentials</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-black/40 uppercase tracking-widest ml-1">Current Access Key</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full bg-black/[0.02] border border-black/5 rounded-2xl p-5 text-sm font-semibold focus:outline-none focus:border-accent-gold/40 focus:bg-white transition-all shadow-sm"
                        value={passwords.current}
                        onChange={(e) => setPasswords({...passwords, current: e.target.value})}
                      />
                    </div>
                  </div>
                </section>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-black/40 uppercase tracking-widest ml-1">New System Passphrase</label>
                    <input
                      type="password"
                      placeholder="Enter new credentials"
                      className="w-full bg-black/[0.02] border border-black/5 rounded-2xl p-5 text-sm font-semibold focus:outline-none focus:border-accent-gold/40 focus:bg-white transition-all"
                      value={passwords.new}
                      onChange={(e) => setPasswords({...passwords, new: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-black/40 uppercase tracking-widest ml-1">Verify Key</label>
                    <input
                      type="password"
                      placeholder="Repeat new credentials"
                      className="w-full bg-black/[0.02] border border-black/5 rounded-2xl p-5 text-sm font-semibold focus:outline-none focus:border-accent-gold/40 focus:bg-white transition-all"
                      value={passwords.confirm}
                      onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
                    />
                  </div>
              </div>
            </div>

            {/* Actions Footer */}
            <div className="p-10 border-t border-black/5 bg-white flex items-center justify-between">
              <div className="hidden sm:flex items-center gap-3 opacity-30 group cursor-help">
                <ShieldCheck size={16} className="text-brand-green group-hover:text-accent-gold transition-colors" />
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase">AES-256 Encrypted Tunnel</span>
              </div>
              
              <button 
                type="button"
                className="w-full sm:w-auto px-12 py-5 bg-brand-green text-white rounded-[1.25rem] font-bold tracking-[0.4em] uppercase text-[10px] hover:bg-black transition-all hover:shadow-2xl hover:translate-y-[-2px] active:translate-y-[1px] flex items-center justify-center gap-4"
                onClick={() => {
                  onClose();
                }}
              >
                <Save size={18} className="text-accent-gold" />
                Commit Updates
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
