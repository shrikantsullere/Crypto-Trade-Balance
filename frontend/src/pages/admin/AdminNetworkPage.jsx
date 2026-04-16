import { motion } from "framer-motion";
import { Search, Filter, ShieldCheck, Share2, UserPlus, GitBranch, ChevronRight, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminNetworkPage() {
  const navigate = useNavigate();

  const networkLevels = [
    { label: "Level 1", count: 22, growth: "+4", color: "bg-brand-green" },
    { label: "Level 2", count: 136, growth: "+18", color: "bg-brand-green/80" },
    { label: "Level 3", count: 492, growth: "+52", color: "bg-brand-green/60" },
    { label: "Level 4", count: 1208, growth: "+110", color: "bg-accent-gold" },
  ];

  return (
    <div className="space-y-10 pb-10">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <GitBranch size={20} className="text-accent-gold" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-black/40">Network Architecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif text-brand-green">Genealogy & <span className="text-accent-gold italic">Growth</span></h1>
          <p className="text-sm text-black/40 mt-1">Manage global referral structures and pass-up protocol integrity.</p>
        </div>
      </header>

      {/* Control Panel */}
      <div className="bg-white/60 backdrop-blur-xl border border-black/5 p-8 rounded-[2.5rem] shadow-sm">
        <div className="grid gap-6 md:grid-cols-4 items-end">
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 ml-1">Search Profile</label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20" size={16} />
              <input placeholder="Name or Member ID" className="w-full bg-black/5 border border-black/5 rounded-2xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-accent-gold/40 transition-all" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 ml-1">Hierarchy Deep Field</label>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20" size={16} />
              <input placeholder="Level 1-10" className="w-full bg-black/5 border border-black/5 rounded-2xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-accent-gold/40 transition-all" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 ml-1">Protocol Anomaly</label>
            <select className="w-full bg-black/5 border border-black/5 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent-gold/40 transition-all appearance-none cursor-pointer">
              <option>All Network Status</option>
              <option>Missing Sponsor Nodes</option>
              <option>Orphan Pass-ups</option>
            </select>
          </div>
          <button className="btn-gold py-3.5 rounded-2xl text-[10px] font-bold tracking-[0.2em] uppercase shadow-glow flex items-center justify-center gap-2">
            <Activity size={16} /> Run Global Audit
          </button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Visual Network Overview */}
        <div className="bg-white/60 backdrop-blur-xl border border-black/5 p-10 rounded-[2.5rem] relative overflow-hidden">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-serif text-brand-green">Visual <span className="text-accent-gold">Hierarchy</span></h2>
            <Share2 className="text-black/10" size={20} />
          </div>

          <div className="relative space-y-6">
             {/* Root Sponsor */}
             <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-brand-green border-4 border-accent-gold/30 flex items-center justify-center text-white shadow-xl relative z-20 group cursor-pointer">
                   <UserPlus size={24} />
                   <div className="absolute -bottom-8 bg-black text-white text-[8px] font-bold uppercase py-1 px-3 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Root Authority</div>
                </div>
                <div className="w-px h-10 bg-gradient-to-b from-accent-gold to-black/5" />
             </div>

             {/* Level Branches */}
             <div className="space-y-4">
                {networkLevels.map((lvl, i) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.15 }}
                    key={i} 
                    className="relative"
                  >
                    <div className="flex items-center gap-4 bg-white/40 p-5 rounded-3xl border border-black/5 hover:border-accent-gold/30 transition-all group">
                       <div className={`w-12 h-12 ${lvl.color} rounded-2xl flex items-center justify-center text-white font-serif italic text-lg shadow-lg`}>
                         {i + 1}
                       </div>
                       <div className="flex-1">
                          <p className="text-[10px] font-bold tracking-widest uppercase text-black/40">{lvl.label}</p>
                          <div className="flex items-center gap-3">
                            <p className="text-xl font-serif text-brand-green">{lvl.count} Nodes Active</p>
                            <span className="text-[9px] font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">{lvl.growth}</span>
                          </div>
                       </div>
                       <ChevronRight className="text-black/10 group-hover:text-accent-gold transition-colors" />
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>

        {/* Correction Queue */}
        <div className="bg-brand-green p-10 rounded-[2.5rem] text-white relative overflow-hidden">
           <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl opacity-20" />
           
           <div className="flex items-center gap-3 mb-10">
              <ShieldCheck className="text-accent-gold shadow-glow" />
              <h2 className="text-2xl font-serif text-accent-gold italic">Correction Queue</h2>
           </div>

           <div className="space-y-4 relative z-10">
             {[
               "TB-10058: Pass-up mismatch detected",
               "TB-10291: Orphan node recovery required",
               "TB-10442: Hierarchy depth audit failure"
             ].map((alert, i) => (
               <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                  <span className="text-[11px] font-medium text-white/70 group-hover:text-white transition-colors">{alert}</span>
                  <div className="px-3 py-1 bg-red-500/20 text-red-300 text-[8px] font-bold uppercase rounded-full">High Alert</div>
               </div>
             ))}
             
             <button className="w-full mt-6 py-4 rounded-2xl border border-white/10 text-white/60 text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-brand-green transition-all duration-500">
                Access Audit Logs
             </button>
           </div>
        </div>
      </div>
    </div>
  );
}
