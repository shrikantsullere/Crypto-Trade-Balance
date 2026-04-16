import { motion } from "framer-motion";

export default function Button({
  children,
  className = "",
  variant = "primary",
  type = "button",
  ...props
}) {
  const base =
    "btn-premium inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm font-bold tracking-tight transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/50 disabled:cursor-not-allowed disabled:opacity-60";
  
  const variants = {
    primary:
      "bg-brand-green text-white shadow-[0_12px_26px_-16px_rgba(15,59,47,0.4)] hover:shadow-[0_12px_36px_-12px_rgba(15,59,47,0.6)]",
    secondary:
      "border border-brand-green/20 bg-white text-brand-green hover:bg-brand-green-muted transition-all",
    ghost: "bg-transparent text-brand-green hover:bg-brand-green-muted",
    danger: "bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/20",
    gold: "bg-accent-gold text-white shadow-[0_12px_26px_-16px_rgba(201,162,39,0.4)] hover:shadow-[0_14px_30px_-10px_rgba(201,162,39,0.5)]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
