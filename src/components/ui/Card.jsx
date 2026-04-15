import { motion } from "framer-motion";

export default function Card({ title, action, className = "", children, variant = "default" }) {
  const themes = {
    default: "neo-panel",
    gold: "border border-accent-gold/20 !bg-accent-gold/5",
    green: "border border-brand-green/20 !bg-brand-green/5",
  };

  return (
    <motion.section
      whileHover={{ y: -4, borderColor: "rgba(201, 162, 39, 0.25)" }}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl p-6 transition-all duration-300 ${themes[variant]} ${className}`}
    >
      {(title || action) && (
        <header className="mb-6 flex items-center justify-between gap-4">
          {title ? <h3 className="text-lg font-bold text-brand-green tracking-tight">{title}</h3> : <span />}
          {action}
        </header>
      )}
      {children}
    </motion.section>
  );
}
