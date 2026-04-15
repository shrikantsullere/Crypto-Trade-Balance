import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Gavel, AlertTriangle, Users, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsPage = () => {
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
          <FileText size={400} />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="text-accent-gold text-[10px] font-bold tracking-[0.5em] uppercase px-4 py-2 border border-accent-gold/20 rounded-full">Governance Layer</span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-green">Terms & Conditions</h1>
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
          <TermsSection 
            icon={<Gavel />}
            title="Acceptance of Terms"
            content="By accessing or using the Trade Balance platform and its pre-launch protocol, you agree to be bound by these Terms and Conditions. These terms constitute a legally binding agreement between you and Trade Balance. If you do not agree with any part of these terms, you must not access the platform or join our global network."
          />

          <TermsSection 
            icon={<Users />}
            title="Eligibility & Membership"
            content="Membership in Trade Balance is restricted to individuals who are at least 18 years of age. By registering, you represent and warrant that you meet this requirement. Access to the premium pre-launch window is gated and subject to internal approval protocol to maintain the integrity of our financial movement."
          />

          <TermsSection 
            icon={<FileText />}
            title="Intellectual Property"
            content="The content, features, and functionality of the Trade Balance portal, including but not limited to all information, software, text, images, video, and audio, are owned by Trade Balance and are protected by international copyright, trademark, and other intellectual property laws. Unauthorized reproduction is strictly prohibited."
          />

          <TermsSection 
            icon={<AlertTriangle />}
            title="Risk Disclosure"
            content="Financial trading and participation in high-yield networks carry inherent risks. Trade Balance provides educational strategies and digital tools, but does not guarantee specific ROI or earnings. Users are advised to participate responsibly and understand that past performance within the ecosystem is not indicative of future results."
          />

          <div className="pt-20 border-t border-black/5 text-center">
            <p className="text-black/40 text-xs italic leading-relaxed">
              Trade Balance reserves the right to modify these terms at any time. Continued use of the platform constitutes your acceptance of such changes as we evolve our global movement.
            </p>
          </div>
        </motion.div>
      </section>
      
      {/* Footer Branding */}
      <footer className="mt-40 text-center py-10 opacity-30">
        <div className="text-[10px] font-bold tracking-[0.4em] uppercase">Trade Balance Portal • Legal Framework v2.4</div>
      </footer>
    </div>
  );
};

const TermsSection = ({ icon, title, content }) => (
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

export default TermsPage;
