import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck, Mail, Lock, CheckCircle2, ArrowLeft } from "lucide-react";
import logo from "../../assets/image copy 3.png";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [focused, setFocused] = useState("");

  const handleAdminLogin = (event) => {
    event.preventDefault();
    navigate("/admin/dashboard");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a1a15] selection:bg-accent-gold/30">
      
      {/* Cinematic Luxury Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#0f3b2f_0%,#0a1a15_100%)]" />
        
        {/* Animated Particles/Glows */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-[100px]"
        />
        
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-lg px-6"
      >
        <div className="flex flex-col items-center mb-10">
          <Link to="/" className="relative p-1">
             <div className="absolute inset-0 bg-accent-gold/20 blur-2xl rounded-full opacity-50" />
             <img src={logo} alt="Trade Balance" className="h-20 w-auto relative z-10 drop-shadow-2xl" />
          </Link>
          
          <div className="mt-8 text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-serif text-white uppercase tracking-tighter">System Console</h1>
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent-gold/50">Administrative Control Hub</p>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-gold/10 via-white/5 to-accent-gold/10 rounded-[2.5rem] blur opacity-20" />
          
          <div className="relative bg-black/60 backdrop-blur-3xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
            <div className="mb-8 flex items-center gap-3 border-b border-white/5 pb-6">
               <ShieldCheck className="text-accent-gold" size={24} />
               <div>
                  <h2 className="text-lg font-bold text-white tracking-wide uppercase">Identity Verification</h2>
                  <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">Tier 4 Authorization Level Required</p>
               </div>
            </div>

            <form className="space-y-6" onSubmit={handleAdminLogin}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 ml-1">Admin Identity</label>
                  <div className={`relative transition-all duration-300 ${focused === "email" ? "scale-[1.01]" : ""}`}>
                    <Mail className={`absolute left-5 top-1/2 -translate-y-1/2 ${focused === "email" ? "text-accent-gold" : "text-white/20"}`} size={18} />
                    <input 
                      type="email" 
                      required
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused("")}
                      placeholder="admin@private.nexus"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl pl-12 pr-4 py-4 text-sm font-medium text-white focus:outline-none focus:border-accent-gold/30 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 ml-1">Admin Key</label>
                  <div className={`relative transition-all duration-300 ${focused === "password" ? "scale-[1.01]" : ""}`}>
                    <Lock className={`absolute left-5 top-1/2 -translate-y-1/2 ${focused === "password" ? "text-accent-gold" : "text-white/20"}`} size={18} />
                    <input 
                      type="password" 
                      required
                      onFocus={() => setFocused("password")}
                      onBlur={() => setFocused("")}
                      placeholder="••••••••"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl pl-12 pr-4 py-4 text-sm font-medium text-white focus:outline-none focus:border-accent-gold/30 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <button 
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-accent-gold font-bold tracking-[0.3em] uppercase text-[10px] text-black shadow-lg hover:shadow-accent-gold/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3"
                >
                  Confirm Operations <CheckCircle2 size={16} />
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button 
                    type="button"
                    onClick={() => navigate("/admin/dashboard")}
                    className="py-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 text-[8px] font-bold tracking-widest uppercase text-white/40 transition-all"
                  >
                    Quick Override
                  </button>
                  <button 
                    type="button"
                    onClick={() => navigate("/login")}
                    className="py-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 text-[8px] font-bold tracking-widest uppercase text-white/40 transition-all"
                  >
                    User Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        <Link to="/" className="mt-8 flex items-center justify-center gap-2 text-[9px] font-bold tracking-[0.3em] uppercase text-white/20 hover:text-white/50 transition-colors group">
          <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
          Back to Main Terminal
        </Link>
      </motion.div>
    </div>
  );
}
