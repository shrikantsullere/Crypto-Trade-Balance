import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const VerifyEmailPage = () => {
  return (
    <div className="min-h-screen bg-[#050706] text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background elements to match the luxury feel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-green/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-accent-gold/5 blur-[150px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-lg text-center"
      >
        <div className="card-glass p-12 rounded-[2.5rem] border-accent-gold/20 bg-white/5 backdrop-blur-3xl shadow-glow">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
            className="w-24 h-24 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-accent-gold/30"
          >
            <ShieldCheck size={48} className="text-accent-gold" />
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-serif gold-gradient-text mb-6">Verification Successful</h1>
          <p className="text-white/60 text-lg mb-12 leading-relaxed">
            Your account has been successfully verified. <br />
            You are now cleared for protocol access.
          </p>

          <Link 
            to="/login"
            className="btn-gold w-full py-6 rounded-2xl font-bold tracking-[0.4em] uppercase text-sm block shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Go to Login
          </Link>
        </div>

        <div className="mt-12 opacity-20">
          <p className="text-[10px] font-bold tracking-[0.6em] uppercase text-accent-gold">Secure Verification Module v2.4</p>
        </div>
      </motion.div>
    </div>
  );
};

export default VerifyEmailPage;
