import { motion } from "framer-motion";
import { Mail, Lock, UserCircle, ShieldCheck, Save, ArrowLeft, Wallet, TrendingUp, History } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserProfilePage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("member@tradebalance.com");
  const [passwords, setPasswords] = useState({ current: "", new: "", confirm: "" });

  return (
    <div className="space-y-8 pb-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif text-brand-green tracking-tight">Member Profile</h1>
          <p className="text-black/40 text-sm mt-1 uppercase tracking-[0.2em] font-bold">Manage your security and identity protocols</p>
        </div>
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-black/5 text-black/40 hover:text-brand-green hover:border-brand-green/20 transition-all w-fit"
        >
          <ArrowLeft size={18} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Return</span>
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Col: Identity Card */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-[2.5rem] p-10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-black/5 flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 to-transparent pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-[2.5rem] bg-brand-green/10 border-2 border-accent-gold/20 flex items-center justify-center p-1">
                  <div className="w-full h-full rounded-[2.2rem] bg-white flex items-center justify-center shadow-inner">
                    <UserCircle size={80} className="text-brand-green/20" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl bg-brand-green flex items-center justify-center border-4 border-white shadow-xl">
                  <ShieldCheck size={18} className="text-accent-gold" />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif text-brand-green mb-1">Christina</h3>
                <div className="px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/20 inline-block">
                  <p className="text-accent-gold text-[10px] font-bold uppercase tracking-[0.3em]">Verified Member</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full pt-8 border-t border-black/5">
                <div className="bg-[#f8faf9] p-4 rounded-2xl">
                  <TrendingUp size={16} className="text-brand-green/40 mb-2 mx-auto" />
                  <p className="text-[9px] font-bold uppercase tracking-widest text-black/30">Tier</p>
                  <p className="text-xs font-bold text-brand-green">Gold</p>
                </div>
                <div className="bg-[#f8faf9] p-4 rounded-2xl">
                  <History size={16} className="text-brand-green/40 mb-2 mx-auto" />
                  <p className="text-[9px] font-bold uppercase tracking-widest text-black/30">Status</p>
                  <p className="text-xs font-bold text-brand-green">Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Forms */}
        <div className="lg:col-span-2 space-y-8">
          {/* Email Settings */}
          <div className="bg-white rounded-[2.5rem] border border-black/5 shadow-sm overflow-hidden">
            <div className="p-10">
               <div className="flex items-center gap-4 mb-10">
                 <div className="w-12 h-12 rounded-2xl bg-brand-green/5 flex items-center justify-center">
                    <Mail size={24} className="text-brand-green" />
                 </div>
                 <div>
                   <h3 className="text-xl font-serif text-brand-green">Communcation Key</h3>
                   <p className="text-black/30 text-[10px] font-bold uppercase tracking-widest mt-0.5">Primary email for system alerts</p>
                 </div>
               </div>

              <div className="max-w-md space-y-2">
                <label className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em] ml-1">Email Protocol</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#f8faf9] border border-black/5 rounded-2xl p-5 text-sm font-semibold focus:outline-none focus:border-brand-green/20 focus:bg-white transition-all shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Security Management */}
          <div className="bg-white rounded-[2.5rem] border border-black/5 shadow-sm overflow-hidden">
            <div className="p-10">
               <div className="flex items-center gap-4 mb-10">
                 <div className="w-12 h-12 rounded-2xl bg-brand-green/5 flex items-center justify-center">
                    <Lock size={24} className="text-brand-green" />
                 </div>
                 <div>
                   <h3 className="text-xl font-serif text-brand-green">Security Override</h3>
                   <p className="text-black/30 text-[10px] font-bold uppercase tracking-widest mt-0.5">Manage your secret access keys</p>
                 </div>
               </div>

              <div className="space-y-8">
                <div className="max-w-md space-y-2">
                  <label className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em] ml-1">Current Secret Key</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={passwords.current}
                    onChange={(e) => setPasswords({...passwords, current: e.target.value})}
                    className="w-full bg-[#f8faf9] border border-black/5 rounded-2xl p-5 text-sm font-semibold focus:outline-none focus:border-brand-green/20 focus:bg-white transition-all shadow-sm"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-black/5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em] ml-1">New System Passphrase</label>
                    <input
                      type="password"
                      placeholder="Enter new credentials"
                      className="w-full bg-[#f8faf9] border border-black/5 rounded-2xl p-5 text-sm font-semibold focus:outline-none focus:border-brand-green/20 focus:bg-white transition-all"
                      value={passwords.new}
                      onChange={(e) => setPasswords({...passwords, new: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em] ml-1">Confirm Protocol</label>
                    <input
                      type="password"
                      placeholder="Repeat new credentials"
                      className="w-full bg-[#f8faf9] border border-black/5 rounded-2xl p-5 text-sm font-semibold focus:outline-none focus:border-brand-green/20 focus:bg-white transition-all"
                      value={passwords.confirm}
                      onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="px-10 py-8 bg-[#f8faf9] border-t border-black/5 flex items-center justify-end">
               <button 
                 type="button"
                 className="px-12 py-5 bg-brand-green text-white rounded-2xl font-bold tracking-[0.4em] uppercase text-[10px] hover:bg-black transition-all shadow-xl hover:translate-y-[-2px] active:translate-y-[1px] flex items-center justify-center gap-4"
                 onClick={() => {
                   alert("Identity protocols updated successfully.");
                 }}
               >
                 <Save size={18} className="text-accent-gold" />
                 Apply Identity Changes
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
