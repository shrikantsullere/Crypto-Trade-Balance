import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  TrendingUp, 
  Users, 
  UserCheck, 
  Clock, 
  ArrowUpRight, 
  Link as LinkIcon, 
  Calculator, 
  Download,
  History,
  LayoutDashboard
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function CountUp({ to, prefix = "" }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const steps = 30;
    const inc = to / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += inc;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.round(current));
      }
    }, 18);
    return () => clearInterval(timer);
  }, [to]);
  return `${prefix}${count.toLocaleString()}`;
}

export default function DashboardPage() {
  const navigate = useNavigate();
  
  const kpis = [
    { label: "Total Earnings", value: 12480, prefix: "$", icon: <TrendingUp />, color: "text-brand-green" },
    { label: "Total Referrals", value: 326, prefix: "", icon: <Users />, color: "text-brand-green" },
    { label: "Active Team", value: 192, prefix: "", icon: <UserCheck />, color: "text-brand-green" },
    { label: "Pending Actions", value: 8, prefix: "", icon: <Clock />, color: "text-accent-gold" },
  ];

  const copyReferral = () => {
    const referralLink = "https://tradebalance.com/register?ref=TB-MEMBER-X";
    navigator.clipboard?.writeText(referralLink);
    window.alert("Referral link protocol copied to clipboard.");
  };

  return (
    <div className="space-y-6 pb-6">
      <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <LayoutDashboard size={18} className="text-accent-gold" />
            <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-black/40">Nexus Network Entry</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-serif text-brand-green">Welcome back, <span className="text-accent-gold italic">Member</span></h1>
          <p className="text-[11px] text-black/40 mt-0.5">Your personal performance metrics and ecosystem controls.</p>
        </div>
        <div className="flex gap-2">
           <button onClick={copyReferral} className="btn-gold px-6 py-2.5 rounded-xl text-[9px] font-bold tracking-[0.2em] uppercase shadow-glow flex items-center gap-2">
             <LinkIcon size={14} /> Copy Node ID
           </button>
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
            </div>
            <div>
              <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-black/40 mb-0.5">{kpi.label}</p>
              <p className={`text-2xl md:text-3xl font-serif ${kpi.color}`}>
                <CountUp to={kpi.value} prefix={kpi.prefix} />
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white/60 backdrop-blur-xl border border-black/5 p-6 md:p-8 rounded-[1.5rem] h-full">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                 <History className="text-accent-gold" size={20} />
                 <h2 className="text-xl font-serif text-brand-green">Protocol History</h2>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { text: "New referral joined your unilevel", time: "10:42 AM", type: "Network" },
                { text: "Commission credited: $12.00", time: "09:15 AM", type: "Ledger" },
                { text: "Security credentials updated", time: "Yesterday", type: "Account" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-black/5 hover:bg-white transition-all border border-transparent hover:border-black/5 shadow-sm group cursor-default">
                  <div>
                    <p className="text-[12px] font-medium text-black/80">{item.text}</p>
                    <p className="text-[8px] font-bold text-black/20 uppercase tracking-widest mt-0.5">{item.type} • {item.time}</p>
                  </div>
                  <ArrowUpRight size={14} className="text-black/10 group-hover:text-accent-gold transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Utilities */}
        <div className="space-y-6">
          <div className="bg-brand-green p-8 rounded-[1.5rem] text-white relative overflow-hidden shadow-lg">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl opacity-20" />
            <h2 className="text-xl font-serif mb-6 text-accent-gold italic">Tactical Controls</h2>
            <div className="space-y-3 relative z-10">
              <ActionButton icon={<Calculator size={16} />} label="Yield Calculator" onClick={() => navigate("/calculator")} />
              <ActionButton icon={<Download size={16} />} label="System Manuals" onClick={() => navigate("/downloads")} />
            </div>
          </div>

          <div className="bg-white/40 backdrop-blur-xl border border-black/5 p-6 rounded-[1.5rem] text-center border-accent-gold/20">
             <TrendingUp size={24} className="mx-auto text-accent-gold mb-3 animate-pulse" />
             <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-black/40 mb-1">Growth Forecast</p>
             <p className="text-xl font-serif text-brand-green">+18.5% <span className="text-[10px] text-black/20 uppercase ml-2">Next Epoch</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

const ActionButton = ({ icon, label, onClick }) => (
  <button 
    onClick={onClick}
    className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/10 border border-white/5 hover:bg-white hover:text-brand-green transition-all duration-500 group"
  >
    <div className="flex items-center gap-3">
      <span className="text-accent-gold group-hover:text-brand-green transition-colors">{icon}</span>
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{label}</span>
    </div>
    <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
  </button>
);
