import { useMemo, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Users, UserPlus, ZoomIn, ZoomOut, Maximize2, ChevronRight, ChevronDown } from "lucide-react";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

// Dummy Recursive Data for the Tree
const initialNetwork = {
  id: "YOU",
  name: "You (Leader)",
  level: 0,
  status: "Active",
  totalTeam: 42,
  children: [
    {
      id: "TB-001",
      name: "Alex Rivera",
      level: 1,
      status: "Active",
      totalTeam: 12,
      children: [
        { id: "TB-001-A", name: "Sarah Smith", level: 2, status: "Active", totalTeam: 5, children: [] },
        { id: "TB-001-B", name: "Mike Ross", level: 2, status: "Pending", totalTeam: 0, children: [] }
      ]
    },
    {
      id: "TB-002",
      name: "Nina Gupta",
      level: 1,
      status: "Active",
      totalTeam: 24,
      children: [
        { id: "TB-002-A", name: "Milan K.", level: 2, status: "Active", totalTeam: 8, children: [] },
        { id: "TB-002-B", name: "Jan Doe", level: 2, status: "Active", totalTeam: 2, children: [] }
      ]
    },
    {
      id: "TB-003",
      name: "S. Dincer",
      level: 1,
      status: "Active",
      totalTeam: 6,
      children: []
    }
  ]
};

export default function NetworkPage() {
  const [viewMode, setViewMode] = useState("tree"); // tree, list
  const [zoom, setZoom] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const allRows = [
    { name: "Alex Rivera", id: "TB-001", level: "1", date: "06 Apr 2026", status: "Active" },
    { name: "Nina Gupta", id: "TB-002", level: "1", date: "05 Apr 2026", status: "Active" },
    { name: "S. Dincer", id: "TB-003", level: "1", date: "14 Apr 2026", status: "Active" },
    { name: "Sarah Smith", id: "TB-001-A", level: "2", date: "07 Apr 2026", status: "Active" },
    { name: "Mike Ross", id: "TB-001-B", level: "2", date: "08 Apr 2026", status: "Pending" },
  ];

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-serif text-brand-green mb-2">Genealogy Network</h1>
          <p className="text-black/40 text-sm tracking-widest uppercase">Visual Hierarchy & Team Analytics</p>
        </div>
        
        <div className="flex bg-brand-green/5 p-1 rounded-xl border border-brand-green/10">
          <button 
            onClick={() => setViewMode("tree")}
            className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${viewMode === "tree" ? "bg-white text-brand-green shadow-md" : "text-black/40 hover:text-black"}`}
          >
            Tree View
          </button>
          <button 
            onClick={() => setViewMode("list")}
            className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${viewMode === "list" ? "bg-white text-brand-green shadow-md" : "text-black/40 hover:text-black"}`}
          >
            List View
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === "tree" ? (
          <motion.div
            key="tree-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {/* Tree Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-black/5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-brand-green/5 px-4 py-2 rounded-xl border border-brand-green/10">
                  <Search size={16} className="text-black/40" />
                  <input 
                    type="text" 
                    placeholder="Search Node..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none text-xs font-medium placeholder:text-black/20"
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button onClick={() => setZoom(z => Math.max(0.5, z - 0.1))} className="p-2 hover:bg-black/5 rounded-lg transition-colors"><ZoomOut size={18} /></button>
                <span className="text-[10px] font-bold w-12 text-center text-black/40">{Math.round(zoom * 100)}%</span>
                <button onClick={() => setZoom(z => Math.min(2, z + 0.1))} className="p-2 hover:bg-black/5 rounded-lg transition-colors"><ZoomIn size={18} /></button>
                <div className="w-px h-6 bg-black/5 mx-2" />
                <button onClick={() => setZoom(1)} className="p-2 hover:bg-black/5 rounded-lg transition-colors"><Maximize2 size={18} /></button>
              </div>
            </div>

            {/* Tree Container */}
            <div className="relative w-full h-[600px] bg-[#fdfdfd] border border-black/5 rounded-[2.5rem] overflow-hidden shadow-inner group cursor-grab active:cursor-grabbing">
              {/* Luxury Grid Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #0f3b2f 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              
              <motion.div 
                drag
                dragConstraints={{ left: -1000, right: 1000, top: -500, bottom: 1000 }}
                className="absolute inset-0 flex justify-center py-20 origin-center"
                style={{ scale: zoom }}
              >
                <div className="min-w-fit h-fit px-40">
                  <TreeNode node={initialNetwork} isRoot />
                </div>
              </motion.div>

              {/* Controls Floating */}
              <div className="absolute top-6 right-6 flex flex-col gap-2">
                <button onClick={() => setZoom(z => Math.min(2, z + 0.1))} className="p-3 bg-white/80 backdrop-blur-md border border-black/5 rounded-xl shadow-lg hover:bg-white transition-colors"><ZoomIn size={20} /></button>
                <button onClick={() => setZoom(z => Math.max(0.5, z - 0.1))} className="p-3 bg-white/80 backdrop-blur-md border border-black/5 rounded-xl shadow-lg hover:bg-white transition-colors"><ZoomOut size={20} /></button>
                <button onClick={() => { setZoom(1); }} className="p-3 bg-white/80 backdrop-blur-md border border-brand-green/20 rounded-xl shadow-lg hover:bg-white text-brand-green transition-colors"><Maximize2 size={20} /></button>
              </div>

              {/* Legend */}
              <div className="absolute top-6 left-6 flex flex-col gap-2 p-4 bg-white/70 backdrop-blur-md border border-black/5 rounded-2xl shadow-lg z-20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-green rounded-full shadow-[0_0_10px_rgba(15,135,108,0.4)]" />
                  <span className="text-[8px] font-bold uppercase tracking-widest text-black/50">Active Member</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-gold rounded-full shadow-[0_0_10px_rgba(201,162,39,0.4)]" />
                  <span className="text-[8px] font-bold uppercase tracking-widest text-black/50">Pending Hub</span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="list-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <Card>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-black/5 text-[10px] uppercase font-bold tracking-[0.2em] text-black/40">
                      <th className="px-6 py-4">Sponsoring Agent</th>
                      <th className="px-6 py-4">ID Reference</th>
                      <th className="px-6 py-4">Hierarchy Level</th>
                      <th className="px-6 py-4">Deployment Date</th>
                      <th className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allRows.map((row) => (
                      <tr key={row.name} className="border-b border-black/5 hover:bg-brand-green/5 transition-colors group">
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-bold text-xs uppercase">{row.name.charAt(0)}</div>
                            <span className="font-semibold text-brand-green">{row.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5"><span className="text-black/30 font-mono text-xs">{row.id}</span></td>
                        <td className="px-6 py-5">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${row.level === "1" ? "bg-accent-gold/10 text-accent-gold" : "bg-brand-green/5 text-brand-green/60"}`}>Level {row.level}</span>
                        </td>
                        <td className="px-6 py-5 text-black/40 font-mono text-xs">{row.date}</td>
                        <td className="px-6 py-5">
                           <div className="flex items-center gap-2">
                             <div className={`w-1.5 h-1.5 rounded-full ${row.status === "Active" ? "bg-brand-green" : "bg-accent-gold animate-pulse"}`} />
                             <span className={`text-[10px] font-black uppercase tracking-widest ${row.status === "Active" ? "text-brand-green" : "text-accent-gold"}`}>{row.status}</span>
                           </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Recursive Tree Node Component
const TreeNode = ({ node, isRoot = false }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col items-center relative">
      <motion.div 
        layout
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10"
      >
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className={`group relative flex flex-col items-center p-4 bg-white border ${isRoot ? 'border-brand-green/30 w-44 shadow-brand-green/5' : 'border-black/5 w-36'} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500`}
        >
          {/* Status Indicator Top */}
          <div className={`absolute -top-1 px-2 py-0.5 rounded-full text-[6px] font-black uppercase tracking-[0.1em] shadow-sm ${node.status === 'Active' ? 'bg-brand-green text-white' : 'bg-accent-gold text-black'}`}>
            {node.status}
          </div>

          <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-transform group-hover:scale-110 shadow-md ${isRoot ? 'bg-brand-green text-white' : 'bg-brand-green/5 text-brand-green'}`}>
             <Users size={18} />
          </div>

          <span className="text-[7px] font-bold text-black/20 uppercase tracking-[0.1em] mb-0.5">{node.id}</span>
          <h4 className="text-[10px] font-black text-brand-green uppercase tracking-tighter mb-1 truncate w-full px-1">{node.name}</h4>
          
          <div className="flex items-center gap-2 pt-2 border-t border-black/5 w-full justify-center">
            <div className="text-center">
               <p className="text-[8px] font-black text-accent-gold leading-none">{node.totalTeam}</p>
               <p className="text-[6px] text-black/30 uppercase font-bold tracking-tighter">Team</p>
            </div>
            {hasChildren && (
              <div className={`p-0.5 rounded-full border transition-colors ${isExpanded ? 'bg-brand-green/10 border-brand-green/20' : 'bg-accent-gold/10 border-accent-gold/20'}`}>
                {isExpanded ? <ChevronDown size={10} className="text-brand-green" /> : <ChevronRight size={10} className="text-accent-gold" />}
              </div>
            )}
          </div>
        </button>
      </motion.div>

      {/* Connection SVG + Recursive Children */}
      {hasChildren && isExpanded && (
        <div className="relative pt-12 flex justify-center gap-12">
          {/* SVG Connector Lines */}
          <svg className="absolute top-0 left-0 w-full h-12 pointer-events-none overflow-visible">
            {node.children.map((child, i) => {
              const childCount = node.children.length;
              const spacing = 100 / (childCount + 1);
              const xPos = `${(i + 1) * spacing}%`;
              return (
                <motion.path
                  key={child.id}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  d={`M 50% 0 L 50% 20 Q 50% 30 ${xPos} 30 L ${xPos} 44`}
                  fill="none"
                  stroke={node.status === 'Active' ? "#0f3b2f15" : "#c9a22722"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              );
            })}
            {/* The vertical main line */}
            <line x1="50%" y1="0" x2="50%" y2="20" stroke="#0f3b2f08" strokeWidth="1.5" />
          </svg>

          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};
