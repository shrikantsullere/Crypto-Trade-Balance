import { motion } from "framer-motion";
import { Mail, Lock, UserCircle, ShieldCheck, Save, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminProfilePage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@tradebalance.com");
  const [passwords, setPasswords] = useState({ current: "", new: "", confirm: "" });

  return (
    <div className="space-y-8 pb-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif text-brand-green tracking-tight">System Profile</h1>
          <p className="text-black/40 text-sm mt-1 uppercase tracking-[0.2em] font-bold">Manage your administrative credentials</p>
        </div>
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-black/5 text-black/40 hover:text-brand-green hover:border-brand-green/20 transition-all w-fit"
        >
          <ArrowLeft size={18} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Go Back</span>
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Col: Profile Preview */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-brand-green rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
               <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent-gold/20 rounded-full blur-[80px]" />
               <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent" />
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-[2.5rem] bg-black/20 border-2 border-accent-gold/30 flex items-center justify-center overflow-hidden">
                  <UserCircle size={80} className="text-accent-gold" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl bg-accent-gold flex items-center justify-center border-4 border-brand-green shadow-xl">
                  <ShieldCheck size={18} className="text-black" />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif mb-1">Super Admin</h3>
                <p className="text-accent-gold/60 text-[10px] font-bold uppercase tracking-[0.3em]">Master System Controller</p>
              </div>

              <div className="w-full pt-6 border-t border-white/5 flex flex-col gap-3">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-white/40">
                  <span>Status</span>
                  <span className="text-green-400">Verified</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-white/40">
                  <span>Access Level</span>
                  <span className="text-accent-gold">Global</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-black/5 shadow-sm">
             <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 rounded-xl bg-brand-green/5 flex items-center justify-center">
                 <ShieldCheck size={20} className="text-brand-green" />
               </div>
               <h4 className="text-xs font-bold uppercase tracking-widest text-brand-green">Security Audit</h4>
             </div>
             <p className="text-black/40 text-xs leading-relaxed">
               All credential updates are logged and monitored by the global security layer. Two-factor authentication is recommended for all master administrative accounts.
             </p>
          </div>
        </div>

        {/* Right Col: Configuration */}
        <div className="lg:col-span-2 space-y-8">
          {/* Identity Card */}
          <div className="bg-white rounded-[2.5rem] border border-black/5 shadow-sm overflow-hidden">
            <div className="px-10 py-8 border-b border-black/5">
               <div className="flex items-center gap-3">
                 <Mail size={20} className="text-accent-gold" />
                 <h3 className="text-lg font-serif text-brand-green">Primary Contact Protocol</h3>
               </div>
            </div>
            <div className="p-10">
              <div className="space-y-2 max-w-md">
                <label className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em] ml-1">Administrative Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#f8faf9] border border-black/5 rounded-2xl p-5 text-sm font-semibold focus:outline-none focus:border-accent-gold/40 focus:bg-white transition-all shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Security Card */}
          <div className="bg-white rounded-[2.5rem] border border-black/5 shadow-sm overflow-hidden">
            <div className="px-10 py-8 border-b border-black/5">
               <div className="flex items-center gap-3">
                 <Lock size={20} className="text-accent-gold" />
                 <h3 className="text-lg font-serif text-brand-green">Credential Management</h3>
               </div>
            </div>
            <div className="p-10 space-y-8">
              <div className="max-w-md space-y-2">
                <label className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em] ml-1">Current Password</label>
                <input
                  type="password"
                  value={passwords.current}
                  onChange={(e) => setPasswords({...passwords, current: e.target.value})}
                  placeholder="••••••••"
                  className="w-full bg-[#f8faf9] border border-black/5 rounded-2xl p-5 text-sm font-semibold focus:outline-none focus:border-accent-gold/40 focus:bg-white transition-all shadow-sm"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-black/5">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em] ml-1">New System Access Key</label>
                  <input
                    type="password"
                    value={passwords.new}
                    onChange={(e) => setPasswords({...passwords, new: e.target.value})}
                    placeholder="Enter new credentials"
                    className="w-full bg-[#f8faf9] border border-black/5 rounded-2xl p-5 text-sm font-semibold focus:outline-none focus:border-accent-gold/40 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em] ml-1">Verify New Key</label>
                  <input
                    type="password"
                    value={passwords.confirm}
                    onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
                    placeholder="Repeat new credentials"
                    className="w-full bg-[#f8faf9] border border-black/5 rounded-2xl p-5 text-sm font-semibold focus:outline-none focus:border-accent-gold/40 focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="px-10 py-8 bg-[#f8faf9] border-t border-black/5 flex items-center justify-end">
               <button 
                 type="button"
                 className="px-12 py-5 bg-brand-green text-white rounded-2xl font-bold tracking-[0.4em] uppercase text-[10px] hover:bg-black transition-all shadow-lg hover:translate-y-[-2px] active:translate-y-[1px] flex items-center justify-center gap-4"
                 onClick={() => {
                   alert("Administrative credentials updated successfully.");
                 }}
               >
                 <Save size={18} className="text-accent-gold" />
                 Finalize Changes
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
