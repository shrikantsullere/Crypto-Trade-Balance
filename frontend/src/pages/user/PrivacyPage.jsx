import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans text-brand-green selection:bg-accent-gold selection:text-white pb-20 overflow-x-hidden">
      {/* Navbar Minimal */}
      <nav className="fixed top-0 left-0 right-0 z-[100] py-6 bg-white/80 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <ChevronLeft size={20} className="text-accent-gold group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Back to Home</span>
          </Link>
          <div className="text-[12px] font-serif font-bold italic tracking-widest gold-gradient-text">TRADE BALANCE</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-[#f8faf9] to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
          <ShieldCheck size={400} />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="text-accent-gold text-[10px] font-bold tracking-[0.5em] uppercase px-4 py-2 border border-accent-gold/20 rounded-full">Legal Resource</span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-green">Privacy Policy</h1>
            <p className="text-black/40 text-sm tracking-[0.2em] uppercase">Last Updated: April 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 mt-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-16"
        >
          <PolicySection 
            icon={<Eye />}
            title="Overview"
            content="At Trade Balance, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website tradebalance.com and our practices for collecting, using, maintaining, protecting, and disclosing that information."
          />

          <PolicySection 
            icon={<FileText />}
            title="Information We Collect"
            content="We collect several types of information from and about users of our Website, including information by which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ('personal information'). This happens primarily during the pre-registration and lead generation phases of our global movement."
          />

          <PolicySection 
            icon={<Lock />}
            title="Data Security"
            content="We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. Any payment transactions and sensitive financial data will be encrypted using SSL/TLS technology to meet elite institutional standards."
          />

          <PolicySection 
            icon={<ShieldCheck />}
            title="Your Rights"
            content="You have the right to access, correct, or delete your personal information. You may also object to the processing of your data for marketing purposes. To exercise these rights, please contact our privacy protocol team through the secure dashboard or via our official communication channels."
          />

          <div className="pt-20 border-t border-black/5 text-center">
            <p className="text-black/40 text-xs italic">
              By participating in the Trade Balance pre-launch, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </motion.div>
      </section>
      
      {/* Footer Branding */}
      <footer className="mt-40 text-center py-10 opacity-30">
        <div className="text-[10px] font-bold tracking-[0.4em] uppercase">Trade Balance Portal • Privacy Integrity v2.4</div>
      </footer>
    </div>
  );
};

const PolicySection = ({ icon, title, content }) => (
  <div className="grid md:grid-cols-[80px_1fr] gap-8 group">
    <div className="w-16 h-16 bg-brand-green/5 flex items-center justify-center rounded-2xl text-accent-gold group-hover:scale-110 transition-transform duration-500">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <div className="space-y-4">
      <h3 className="text-2xl font-serif text-brand-green">{title}</h3>
      <p className="text-black/60 text-lg leading-relaxed font-light">
        {content}
      </p>
    </div>
  </div>
);

export default PrivacyPage;
