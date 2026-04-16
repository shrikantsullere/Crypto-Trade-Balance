import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck, ArrowLeft, Mail, Lock, User as UserIcon, CheckCircle2 } from "lucide-react";
import logo from "../assets/image copy 3.png";

export default function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState("admin");
  const [focused, setFocused] = useState("");
  const [email, setEmail] = useState("admin@protocol.com");
  const [password, setPassword] = useState("admin123");

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    if (newRole === "admin") {
      setEmail("admin@protocol.com");
      setPassword("admin123");
    } else {
      setEmail("user@nexus.com");
      setPassword("user123");
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    navigate(role === "admin" ? "/admin/dashboard" : "/dashboard");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a1a15] selection:bg-accent-gold/30">
      
      {/* Cinematic Luxury Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0f3b2f_0%,#0a1a15_100%)]" />
        
        {/* Animated Particles/Glows */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent-gold/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-15%] left-[-5%] w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-[120px]"
        />
        
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-xl px-6 py-4"
      >
        <div className="flex flex-col items-center mb-2">
          <Link to="/" className="group flex flex-col items-center gap-4 transition-all hover:scale-105 duration-500">
            <div className="relative p-1">
               <div className="absolute inset-0 bg-accent-gold/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
               <img src={logo} alt="Trade Balance" className="h-20 md:h-24 w-auto relative z-10 drop-shadow-2xl" />
            </div>
          </Link>
          
          <div className="mt-2 text-center space-y-1">
            <h1 className="text-3xl md:text-4xl font-serif text-white tracking-tight">Executive Login</h1>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-6 bg-accent-gold/30" />
              <p className="text-[8px] font-bold tracking-[0.5em] uppercase text-accent-gold/60">Tier 1 Access</p>
              <div className="h-px w-6 bg-accent-gold/30" />
            </div>
          </div>
        </div>

        <div className="relative group">
          {/* Card Border Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-gold/20 via-white/5 to-accent-gold/20 rounded-[2.5rem] blur opacity-30 group-hover:opacity-50 transition duration-1000" />
          
          <div className="relative bg-black/40 backdrop-blur-3xl border border-white/10 p-5 md:p-8 rounded-[2rem] shadow-2xl">
            <form className="space-y-4" onSubmit={handleLogin}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/5 p-1.5 rounded-2xl border border-white/5">
                <button
                  type="button"
                  onClick={() => handleRoleChange("admin")}
                  className={`flex items-center justify-center gap-3 py-3 rounded-2xl text-[10px] font-bold tracking-widest uppercase transition-all duration-500 ${
                    role === "admin" 
                      ? "bg-accent-gold text-black shadow-lg shadow-accent-gold/20" 
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  <ShieldCheck size={14} /> Admin Login
                </button>
                <button
                  type="button"
                  onClick={() => handleRoleChange("user")}
                  className={`flex items-center justify-center gap-3 py-3 rounded-2xl text-[10px] font-bold tracking-widest uppercase transition-all duration-500 ${
                    role === "user" 
                      ? "bg-accent-gold text-black shadow-lg shadow-accent-gold/20" 
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  <UserIcon size={14} /> User Login
                </button>
              </div>

              <div className="space-y-3">
                <div className="space-y-1 group/input">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/30">Identity Portal</label>
                    {focused === "email" && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[8px] text-accent-gold font-bold uppercase tracking-tighter">Verified</motion.span>}
                  </div>
                  <div className={`relative transition-all duration-500 ${focused === "email" ? "scale-[1.01]" : ""}`}>
                    <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-500 ${focused === "email" ? "text-accent-gold" : "text-white/20"}`} size={18} />
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused("")}
                      placeholder="Enter Email"
                      className="w-full bg-[#122b24]/50 border border-white/5 rounded-xl pl-12 pr-4 py-3.5 text-sm font-medium text-white focus:outline-none focus:border-accent-gold/40 transition-all placeholder:text-white/10"
                    />
                  </div>
                </div>

                <div className="space-y-1 group/input">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/30">Secure Key</label>
                    <Link to="#" className="text-[8px] font-bold text-accent-gold/40 hover:text-accent-gold uppercase tracking-[0.1em]">Recovery</Link>
                  </div>
                  <div className={`relative transition-all duration-500 ${focused === "password" ? "scale-[1.01]" : ""}`}>
                    <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-500 ${focused === "password" ? "text-accent-gold" : "text-white/20"}`} size={18} />
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      onFocus={() => setFocused("password")}
                      onBlur={() => setFocused("")}
                      placeholder="••••••••"
                      className="w-full bg-[#122b24]/50 border border-white/5 rounded-xl pl-12 pr-4 py-3.5 text-sm font-medium text-white focus:outline-none focus:border-accent-gold/40 transition-all placeholder:text-white/10"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2 space-y-4">
                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-gold to-[#c5a025] font-bold tracking-[0.4em] uppercase text-[11px] text-black shadow-[0_15px_30px_rgba(212,175,55,0.2)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)] hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-3 active:scale-95"
                >
                  Authorize <CheckCircle2 size={16} />
                </button>
              </div>

              <div className="flex flex-col items-center gap-3 pt-3 border-t border-white/5 mt-4">
                <Link 
                  to="/register" 
                  className="group relative flex items-center justify-center gap-3 px-10 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-accent-gold/40 transition-all duration-500 overflow-hidden min-w-[180px]"
                >
                  <div className="absolute inset-0 bg-accent-gold/5 blur-lg group-hover:bg-accent-gold/10 transition-colors" />
                  <span className="text-accent-gold font-bold tracking-[0.3em] uppercase text-[10px] relative z-10">
                    Register
                  </span>
                </Link>

                <Link to="/" className="text-white/20 hover:text-white/50 text-[9px] font-bold uppercase tracking-widest transition-colors flex items-center gap-2 group/home">
                   <ArrowLeft size={10} className="group-hover/home:-translate-x-1 transition-transform" />
                   Back to Network
                </Link>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-4 text-center space-y-2">
          <p className="text-[8px] font-bold tracking-[0.4em] uppercase text-white/10">
            Secure Cryptographic Environment • AES-256
          </p>
          <div className="flex justify-center gap-6 opacity-5">
             <ShieldCheck size={18} className="text-white" />
             <CheckCircle2 size={18} className="text-white" />
             <Lock size={18} className="text-white" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
