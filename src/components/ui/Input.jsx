import { motion } from "framer-motion";

export default function Input({ label, error, className = "", ...props }) {
  return (
    <motion.label className="block space-y-2 group">
      {label && (
        <span className="text-sm font-bold text-gray-400 group-focus-within:text-brand-green transition-colors uppercase tracking-widest text-[10px]">{label}</span>
      )}
      <input
        className={`h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-brand-green/30 focus:shadow-[0_0_0_4px_rgba(6,59,47,0.05)] ${error ? "border-red-500/50 focus:border-red-500 focus:shadow-[0_0_0_4px_rgba(239,68,68,0.05)]" : ""} ${className}`}
        {...props}
      />
      {error ? <p className="text-xs font-bold text-red-500 mt-1">{error}</p> : null}
    </motion.label>
  );
}
