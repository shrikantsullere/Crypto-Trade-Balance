import { motion } from "framer-motion";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeft, UserPlus } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import brandLogo from "../assets/image copy 3.png";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const refCode = params.get("ref") || "TB-GLOBAL-001";

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#0f3b2f_0%,#144a39_32%,#1a5a45_62%,#205f49_100%)] px-4 py-12 selection:bg-brand-green/10">
      {/* Glow effects for premium feel */}
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-accent-gold/18 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="relative z-10 w-full max-w-lg"
      >
        <div className="flex justify-center mb-10">
          <Link to="/">
            <img src={brandLogo} alt="Trade Balance" className="h-20 md:h-28 w-auto animate-float drop-shadow-2xl" />
          </Link>
        </div>

        <Card className="w-full !p-10 border-gray-100 shadow-2xl">
          <button 
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 text-gray-400 hover:text-brand-green transition-colors mb-8 text-xs font-black tracking-widest"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            RETURN TO HUB
          </button>

          <div className="mb-10 text-center">
            <h1 className="text-3xl font-black text-brand-green mb-3">Join The Network</h1>
            <p className="text-gray-500 font-medium">Create your command center portal to start sponsoring.</p>
          </div>

          <form className="grid gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Input label="Identity Name" placeholder="e.g. Alex Rivera" />
              <Input label="Network Username" placeholder="e.g. alex_pro" />
            </div>
            <Input label="Primary Email" type="email" placeholder="alex@example.com" />
            <div className="grid sm:grid-cols-2 gap-6">
              <Input label="Access Key" type="password" placeholder="••••••••" />
              <Input label="Verify Access Key" type="password" placeholder="••••••••" />
            </div>
            
            <div className="bg-brand-green/5 p-4 rounded-xl border border-dashed border-brand-green/20 flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <UserPlus className="text-brand-green w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-green/60">Sponsoring Agent ID</p>
                <p className="text-sm font-black text-brand-green uppercase">{refCode}</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Link to="/telegram-onboarding" className="block">
                <Button className="w-full py-6 text-lg" variant="primary">Confirm & Receive Email</Button>
              </Link>
              <p className="text-center text-[10px] text-gray-400 mt-4 uppercase font-bold tracking-tighter">By registering, you agree to our elite governance protocols</p>
            </div>

            <div className="pt-6 border-t border-gray-100 flex justify-center">
              <p className="text-sm text-gray-500 font-medium">
                Already an agent?{" "}
                <Link to="/login" className="text-accent-gold hover:text-brand-green font-black transition-colors underline underline-offset-4">
                  IDENTIFY HERE
                </Link>
              </p>
            </div>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}
