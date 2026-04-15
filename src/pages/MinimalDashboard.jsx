import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, LogOut, Share2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import mainLogo from "../assets/image copy 3.png";

const MinimalDashboard = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const userName = "Executive Leader";
  const referralLink = "https://tradebalance.com/join/LEADER777";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050706] text-white p-6 md:p-12 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-brand-green/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[600px] h-[600px] bg-accent-gold/5 blur-[150px] rounded-full" />
      </div>

      {/* Logo Branded Header */}
      <div className="fixed top-8 left-8 z-20">
        <img src={mainLogo} alt="Trade Balance" className="h-10 md:h-12 drop-shadow-sm opacity-80" />
      </div>

      {/* Header / Logout */}
      <div className="fixed top-8 right-8 z-20">
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white/40 hover:text-accent-gold transition-colors text-[10px] font-bold uppercase tracking-widest"
        >
          Logout <LogOut size={14} />
        </button>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-2xl"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-5xl font-serif mb-4">
              Welcome, <span className="gold-gradient-text italic">{userName}</span>
            </h1>
            <div className="w-24 h-px bg-accent-gold/30 mx-auto" />
            <p className="mt-6 text-white/40 text-xs font-bold uppercase tracking-[0.4em]">Protocol Dashboard Active</p>
          </motion.div>
        </div>

        <div className="card-glass p-8 md:p-12 rounded-[2.5rem] border-accent-gold/20 bg-white/5 backdrop-blur-3xl shadow-glow">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center text-accent-gold">
              <Share2 size={24} />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/80">Referral Protocol</h3>
              <p className="text-white/40 text-xs">Share your unique access link</p>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent-gold/60 ml-2">Personal Invitation Link</label>
            <div className="relative group">
              <input 
                readOnly
                value={referralLink}
                className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 pr-32 text-white/80 text-sm focus:outline-none focus:border-accent-gold/30 transition-all font-mono"
              />
              <button 
                onClick={handleCopy}
                className="absolute right-2 top-2 bottom-2 px-6 rounded-xl btn-gold text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:scale-[1.05] transition-transform"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Copied" : "Copy Link"}
              </button>
            </div>
          </div>

          <div className="mt-10 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <p className="text-[9px] font-bold uppercase tracking-widest text-white/30 mb-2">Network Yield</p>
              <p className="text-2xl font-serif text-brand-green">$0.00</p>
            </div>
            <div className="text-center">
              <p className="text-[9px] font-bold uppercase tracking-widest text-white/30 mb-2">Direct Nodes</p>
              <p className="text-2xl font-serif text-brand-green">0</p>
            </div>
            <div className="text-center">
              <p className="text-[9px] font-bold uppercase tracking-widest text-white/30 mb-2">Protocol Rank</p>
              <p className="text-2xl font-serif text-accent-gold">Initiate</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-white/10">
            Secure Node Encryption ID: TB-{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default MinimalDashboard;
