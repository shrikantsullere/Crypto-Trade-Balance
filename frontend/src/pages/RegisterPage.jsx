import { motion } from "framer-motion";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeft, UserPlus, ShieldCheck, Mail, Lock, User as UserIcon, CheckCircle2 } from "lucide-react";
import brandLogo from "../assets/image copy 3.png";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [focused, setFocused] = useState("");
  const refCode = params.get("ref") || "TB-MEMBER-782";

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a1a15] selection:bg-accent-gold/30">
      
      {/* Cinematic Luxury Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0f3b2f_0%,#0a1a15_100%)]" />
        
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] bg-accent-gold/5 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 18, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-green/20 rounded-full blur-[150px]"
        />
        
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-2xl px-6 py-12"
      >
        <div className="flex flex-col items-center mb-10">
          <Link to="/" className="group relative p-1 transition-transform hover:scale-105 duration-500">
             <div className="absolute inset-0 bg-accent-gold/20 blur-2xl rounded-full opacity-50" />
             <img src={brandLogo} alt="Trade Balance" className="h-20 md:h-24 w-auto relative z-10 drop-shadow-2xl" />
          </Link>
          
          <div className="mt-8 text-center space-y-2">
            <h1 className="text-4xl md:text-5xl font-serif text-white tracking-tight">Accession Protocol</h1>
            <p className="text-[10px] font-bold tracking-[0.6em] uppercase text-accent-gold/50">Request Tier 1 Membership</p>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-br from-accent-gold/20 via-transparent to-brand-green/20 rounded-[3rem] blur opacity-30" />
          
          <div className="relative bg-black/50 backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
            <button 
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 text-white/30 hover:text-accent-gold transition-colors mb-8 text-[10px] font-bold uppercase tracking-[0.3em] group/back"
            >
              <ChevronLeft size={16} className="group-hover/back:-translate-x-1 transition-transform" />
              Return to Authentication
            </button>

            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); navigate("/telegram-onboarding"); }}>
              <div className="grid md:grid-cols-2 gap-6">
                <LuxuryInput icon={<UserIcon size={18} />} label="Full Name" placeholder="e.g. Alex Rivera" name="name" focusState={[focused, setFocused]} />
                <LuxuryInput icon={<ShieldCheck size={18} />} label="Username" placeholder="e.g. alex_nexus" name="username" focusState={[focused, setFocused]} />
              </div>

              <LuxuryInput icon={<Mail size={18} />} label="Secure Email" placeholder="alex@protocol.com" type="email" name="email" focusState={[focused, setFocused]} />

              <div className="grid md:grid-cols-2 gap-6">
                <LuxuryInput icon={<Lock size={18} />} label="Access Key" type="password" placeholder="••••••••" name="pass1" focusState={[focused, setFocused]} />
                <LuxuryInput icon={<Lock size={18} />} label="Verify Key" type="password" placeholder="••••••••" name="pass2" focusState={[focused, setFocused]} />
              </div>
              
              <div className="bg-brand-green/10 p-6 rounded-2xl border border-accent-gold/20 flex items-center justify-between group/ref">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-xl flex items-center justify-center text-accent-gold group-hover/ref:scale-110 transition-transform">
                    <UserPlus size={22} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-0.5">Sponsoring Node ID</p>
                    <p className="text-sm font-bold text-white uppercase tracking-wider">{refCode}</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-accent-gold/10 rounded-full border border-accent-gold/20">
                    <span className="text-[8px] font-bold text-accent-gold uppercase tracking-tighter">Verified Agent</span>
                </div>
              </div>
              
              <div className="pt-4 space-y-6 text-center">
                <button 
                  type="submit"
                  className="w-full py-5 rounded-2xl bg-gradient-to-r from-accent-gold to-[#c5a025] font-bold tracking-[0.4em] uppercase text-[11px] text-black shadow-[0_20px_40px_rgba(212,175,55,0.2)] hover:shadow-[0_25px_50px_rgba(212,175,55,0.3)] hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-3 active:scale-95"
                >
                  Initiate Membership <CheckCircle2 size={18} />
                </button>
                <p className="text-[9px] text-white/20 uppercase font-bold tracking-[0.2em] max-w-xs mx-auto leading-relaxed">
                  By initiating, you agree to the <Link to="/terms" className="text-accent-gold/40 hover:text-accent-gold decoration-dotted underline">Governance Protocols</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function LuxuryInput({ icon, label, type = "text", placeholder, name, focusState }) {
  const [focused, setFocused] = focusState;
  const isFocused = focused === name;

  return (
    <div className="space-y-2 group/input">
      <label className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/30 ml-1">{label}</label>
      <div className={`relative transition-all duration-500 ${isFocused ? "scale-[1.02]" : ""}`}>
        <div className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors duration-500 ${isFocused ? "text-accent-gold" : "text-white/20"}`}>
          {icon}
        </div>
        <input 
          type={type} 
          required
          onFocus={() => setFocused(name)}
          onBlur={() => setFocused("")}
          placeholder={placeholder}
          className="w-full bg-[#122b24]/40 border border-white/5 rounded-2xl pl-14 pr-4 py-4.5 text-sm font-medium text-white focus:outline-none focus:border-accent-gold/40 focus:ring-4 focus:ring-accent-gold/5 transition-all placeholder:text-white/10"
        />
      </div>
    </div>
  );
}
import { useState } from "react";
