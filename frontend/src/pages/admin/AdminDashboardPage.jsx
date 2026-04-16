import { motion } from "framer-motion";
import { 
  Users, 
  UserCheck, 
  Clock, 
  MessageSquare, 
  TrendingUp, 
  ShieldAlert, 
  ArrowUpRight,
  Send,
  CreditCard,
  LayoutDashboard
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  
  const kpis = [
    { label: "Total Users", value: "18,420", icon: <Users />, trend: "+12.5%", color: "text-brand-green" },
    { label: "Active Nodes", value: "12,086", icon: <UserCheck />, trend: "+8.2%", color: "text-brand-green" },
    { label: "Pending Verifications", value: "164", icon: <Clock />, trend: "-2.4%", color: "text-accent-gold" },
    { label: "Support Tickets", value: "27", icon: <MessageSquare />, trend: "+15.0%", color: "text-red-500" },
  ];

  return (
    <div className="space-y-6 pb-6">
      <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <LayoutDashboard size={18} className="text-accent-gold" />
            <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-black/40">Real-time Intelligence</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-serif text-brand-green">Strategic Control <span className="text-accent-gold italic">Center</span></h1>
          <p className="text-[11px] text-black/40 mt-0.5">Holistic operations overview and architectural tracking.</p>
        </div>
        <div className="flex flex-wrap gap-2">
           <button className="flex-1 lg:flex-none px-5 py-2.5 bg-white border border-black/5 rounded-xl text-[9px] font-bold tracking-[0.2em] uppercase hover:bg-black/5 transition-all">Export Data</button>
           <button className="flex-1 lg:flex-none btn-gold px-6 py-2.5 rounded-xl text-[9px] font-bold tracking-[0.2em] uppercase shadow-glow">Generate Report</button>
        </div>
      </header>

      {/* KPI Grid */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            key={kpi.label} 
            className="group relative bg-white/60 backdrop-blur-xl border border-black/5 p-6 rounded-[1.5rem] hover:border-accent-gold/30 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-brand-green/5 rounded-full blur-2xl group-hover:bg-accent-gold/10 transition-colors" />
            
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-black/5 rounded-xl flex items-center justify-center text-brand-green group-hover:scale-105 transition-transform">
                {kpi.icon}
              </div>
              <div className="text-[9px] font-bold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full">
                {kpi.trend}
              </div>
            </div>

            <div>
              <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-black/40 mb-0.5">{kpi.label}</p>
              <p className={`text-2xl md:text-3xl font-serif ${kpi.color}`}>{kpi.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Alerts & Pending Actions */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white/60 backdrop-blur-xl border border-black/5 p-6 md:p-8 rounded-[1.5rem] relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                 <ShieldAlert className="text-red-500" size={20} />
                 <h2 className="text-xl font-serif text-brand-green">Pending Protocols</h2>
              </div>
              <span className="text-[8px] font-bold text-black/20 tracking-widest uppercase">3 Priority Issues</span>
            </div>

            <div className="space-y-3">
              {[
                { text: "42 node managers awaiting manual KYC clearance", type: "Verification" },
                { text: "8 large-volume payout requests flagged for review", type: "Security" },
                { text: "17 VIP support inquiries currently unassigned", type: "Operations" },
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  key={i} 
                  className="group flex items-center justify-between p-4 rounded-xl bg-black/5 border border-transparent hover:border-black/5 hover:bg-white transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                    <div>
                      <p className="text-[12px] md:text-sm font-medium text-black/80">{item.text}</p>
                      <p className="text-[8px] font-bold text-black/20 uppercase tracking-widest mt-0.5">{item.type}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-black/10 group-hover:text-accent-gold transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Utilities */}
        <div className="space-y-6">
          <div className="bg-brand-green p-8 rounded-[1.5rem] text-white relative overflow-hidden shadow-lg">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
            
            <h2 className="text-xl font-serif mb-6 text-accent-gold italic">Tactical Actions</h2>
            
            <div className="space-y-3 relative z-10">
              <ActionButton 
                icon={<Users size={16} />} 
                label="Manage Network" 
                onClick={() => navigate("/admin/users")} 
              />
              <ActionButton 
                icon={<CreditCard size={16} />} 
                label="Review Ledger" 
                onClick={() => navigate("/admin/earnings")} 
              />
              <ActionButton 
                icon={<Send size={16} />} 
                label="Broadcast Protocol" 
                onClick={() => navigate("/admin/notifications")} 
              />
            </div>
          </div>

          <div className="bg-white/40 backdrop-blur-xl border border-black/5 p-6 rounded-[1.5rem] text-center">
             <TrendingUp size={24} className="mx-auto text-accent-gold mb-3" />
             <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-black/40 mb-1">Performance Yield</p>
             <p className="text-xl font-serif text-brand-green">+24.8% <span className="text-[10px] text-black/20 not-italic uppercase ml-2">This Month</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

const ActionButton = ({ icon, label, onClick }) => (
  <button 
    onClick={onClick}
    className="w-full flex items-center justify-between p-5 rounded-2xl bg-white/10 border border-white/5 hover:bg-white hover:text-brand-green transition-all duration-500 group"
  >
    <div className="flex items-center gap-4">
      <span className="text-accent-gold group-hover:text-brand-green transition-colors">{icon}</span>
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{label}</span>
    </div>
    <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
  </button>
);
