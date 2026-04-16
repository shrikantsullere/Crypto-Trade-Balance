import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Send, MailCheck } from "lucide-react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import brandLogo from "../../assets/image copy 3.png";

export default function TelegramOnboardingPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-page-bg px-4 selection:bg-brand-green/10">
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-accent-gold/10 blur-3xl opacity-50" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl opacity-50" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className="relative z-10 w-full max-w-lg"
      >
        <div className="flex justify-center mb-10">
          <Link to="/">
            <img src={brandLogo} alt="Trade Balance" className="h-20 md:h-28 w-auto animate-float drop-shadow-2xl" />
          </Link>
        </div>

        <Card className="w-full !p-12 text-center border-gray-100 shadow-2xl">
          <div className="w-20 h-20 bg-brand-green/5 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <MailCheck className="text-brand-green w-10 h-10" />
          </div>

          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-gold mb-2">Activation Protocol Active</p>
          <h1 className="text-3xl font-black text-brand-green mb-4">Verification Sent</h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Please check your email to confirm your identity. Once verified, join our official channel to activate your backoffice.
          </p>
          
          <div className="flex flex-col gap-4">
            <a href="https://t.me/" target="_blank" rel="noreferrer">
              <Button className="w-full py-6 text-lg" variant="primary">Access Telegram Channel</Button>
            </a>
            <Link to="/login" className="block">
              <Button className="w-full py-6 text-lg" variant="secondary">Back to Login</Button>
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Double Opt-In Protocol Active</p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
