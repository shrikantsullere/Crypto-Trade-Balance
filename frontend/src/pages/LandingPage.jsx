import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  Zap, 
  Play, 
  ChevronRight, 
  Globe, 
  ShieldCheck,
  Lock,
  Clock,
  Download,
  FileText,
  CreditCard,
  LayoutDashboard,
  Share2,
  DollarSign,
  Menu,
  X,
  Languages
} from "lucide-react";

// Assets
import mainLogo from "../assets/image copy 3.png";
import boardroomLion from "../assets/boardroom-lion.png";

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [regData, setRegData] = useState({ name: "", email: "" });
  const [regStatus, setRegStatus] = useState("idle"); // idle, loading, success
  const cursorRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({ h: 12, m: 45, s: 9 });

  // Real-time Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else {
            m = 59;
            if (h > 0) h--;
          }
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Ensure no horizontal overflow
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };
    
    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, input, range')) setIsHovering(true);
    };
    const handleMouseOut = () => setIsHovering(false);

    // Audio Fallback: Play on first interaction
    const playIntroSound = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(e => console.log("Audio play blocked", e));
      }
      window.removeEventListener("click", playIntroSound);
      window.removeEventListener("touchstart", playIntroSound);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("click", playIntroSound);
    window.addEventListener("touchstart", playIntroSound);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("click", playIntroSound);
      window.removeEventListener("touchstart", playIntroSound);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Pricing", href: "#pricing" },
    { name: "CEO Message", href: "#ceo-message" },
    { name: "Complan", href: "#complan" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" }
  ];

  return (
    <div className="bg-white min-h-screen text-brand-green selection:bg-accent-gold selection:text-white font-sans relative overflow-x-hidden">
      {/* Cinematic Intro Sound */}
      <audio ref={audioRef} preload="auto">
        <source src="https://assets.mixkit.co/sfx/preview/mixkit-cinematic-mystery-sweep-transition-2244.mp3" type="audio/mpeg" />
      </audio>

      {/* GLOBAL BACKGROUND - Mixed Green, Gold & Black */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8faf9] via-white to-[#f8faf9]" />
        
        {/* Intense Deep Green Glows - Muted for Light Theme */}
        <motion.div 
          className="absolute -inset-[50%] opacity-10"
          animate={{ 
            rotate: [0, 360],
            background: [
              "radial-gradient(circle at 30% 30%, #0B3D2E 0%, transparent 60%)",
              "radial-gradient(circle at 70% 70%, #0B3D2E 0%, transparent 60%)"
            ]
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* Prominent Gold Luxury Glows - Muted for Light Theme */}
        <motion.div 
          className="absolute -inset-[50%] opacity-5"
          animate={{ 
            rotate: [360, 0],
            background: [
              "radial-gradient(circle at 70% 30%, #D4AF37 0%, transparent 50%)",
              "radial-gradient(circle at 30% 70%, #D4AF37 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute inset-0 bg-white/10 backdrop-blur-[120px]" />
      </div>

      {/* Luxury Mouse Follower Glow */}
      <motion.div 
        id="cursor-glow"
        className="fixed w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[150px] pointer-events-none z-[0] transform -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        animate={{ 
          x: cursorX, 
          y: cursorY 
        }}
        transition={{ type: "spring", damping: 40, stiffness: 400 }}
      />
      
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 border border-accent-gold/50 rounded-full pointer-events-none z-[9999] hidden lg:block"
        animate={{ 
          x: cursorX - 16, 
          y: cursorY - 16,
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? "rgba(212,175,55,0.05)" : "transparent"
        }}
        transition={{ type: "spring", damping: 15, stiffness: 500 }}
      />
      <motion.div id="scroll-progress" style={{ scaleX }} />

      {/* Navbar - Sticky & Elegant */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
          isScrolled 
            ? "py-2 bg-white/90 backdrop-blur-2xl border-b border-black/5" 
            : "py-3 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-gold/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <img src={mainLogo} alt="Trade Balance" className="relative h-12 md:h-16 w-auto drop-shadow-2xl hover:scale-110 transition-all duration-500" />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              link.href.startsWith("#") ? (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`${isScrolled ? "text-brand-green" : "text-white"} font-bold hover:text-accent-gold text-[10px] tracking-[0.2em] uppercase transition-all gold-underline`}
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className={`${isScrolled ? "text-brand-green" : "text-white"} font-bold hover:text-accent-gold text-[10px] tracking-[0.2em] uppercase transition-all gold-underline`}
                >
                  {link.name}
                </Link>
              )
            ))}
            
            <LanguageSwitcher isScrolled={isScrolled} />

            <Link 
              to="/login" 
              className={`px-8 py-3 border ${isScrolled ? "border-brand-green/30 text-brand-green hover:bg-brand-green hover:text-white" : "border-white/30 text-white hover:bg-white hover:text-black"} transition-all duration-500 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm`}
            >
              Login
            </Link>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <LanguageSwitcher isScrolled={isScrolled} />
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-accent-gold p-2">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden fixed inset-0 top-[80px] bg-brand-black/98 backdrop-blur-3xl z-[90] overflow-hidden"
            >
              <div className="px-8 py-8 flex flex-col gap-6 items-center text-center">
                {navLinks.map((link) => (
                  link.href.startsWith("#") ? (
                    <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-white hover:text-accent-gold transition-colors mobile-menu-item">{link.name}</a>
                  ) : (
                    <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-white hover:text-accent-gold transition-colors mobile-menu-item">{link.name}</Link>
                  )
                ))}
                <div className="h-px w-10 bg-accent-gold/20 my-2" />
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-accent-gold font-bold tracking-[0.4em] uppercase text-xs border-b border-accent-gold/40 pb-1">Login</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 🔥 PREMIUM HERO SECTION (100vh + Centered) */}
      <section id="hero" className="relative h-screen w-full flex items-center justify-center pt-32 md:pt-40 overflow-hidden bg-transparent z-10 select-none">
        
        {/* Soft Gold Particles Floating - Enhanced */}
        <div className="absolute inset-0 pointer-events-none z-[1]">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-accent-gold/30 rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%", 
                opacity: 0,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{ 
                y: [null, "-20vh"], 
                opacity: [0, 0.6, 0],
                x: [null, (Math.random() - 0.5) * 10 + "vw"]
              }}
              transition={{ 
                duration: Math.random() * 10 + 10, 
                repeat: Infinity, 
                delay: Math.random() * 10,
                ease: "linear"
              }}
              style={{ 
                width: Math.random() * 3 + 1 + "px", 
                height: Math.random() * 3 + 1 + "px",
                filter: "blur(1px)"
              }}
            />
          ))}
        </div>

        {/* Refined Cinematic Fade Visual */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-white">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img 
              src={boardroomLion} 
              alt="" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          {/* Subtle Black Overlays - Not too heavy */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_20%,black_70%)] opacity-80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.3 }
              }
            }}
          >
            {/* Main Headline (BIG + BOLD) - Moving Golden Green Fade with Shadow */}
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  filter: "blur(0px)",
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }
              }}
              transition={{ 
                duration: 1.5, 
                ease: [0.16, 1, 0.3, 1],
                backgroundPosition: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              className="gold-green-shimmer text-[2.2rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6rem] font-serif font-black mb-6 md:mb-8 tracking-[0.15em] uppercase leading-[1.1] "
            >
              THE POWER <br /> OF UNITY
            </motion.h1>
            
            {/* CTA Button with Gold Gradient and Shine */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <motion.a 
                href="#register" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gold relative px-12 md:px-20 py-5 md:py-6 rounded-full font-bold text-[10px] md:text-xs tracking-[0.5em] uppercase shadow-[0_20px_60px_rgba(212,175,55,0.2)] group overflow-hidden"
              >
                <span className="relative z-10">Pre-Register Now</span>
              </motion.a>

              {/* Subheadline (German Text) - Positioned with better spacing */}
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="text-white font-medium text-sm md:text-lg lg:text-[22px] font-sans tracking-[0.1em] max-w-4xl mx-auto mt-4 md:mt-6 leading-relaxed drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
              >
                Trade Balance schafft Vertrauen, vereint Menschen, <br className="hidden md:block" />
                liefert Qualität und ermöglicht fairen Wohlstand für alle
              </motion.p>
              
              <div className="mt-6 md:mt-10 flex items-center justify-center gap-6 opacity-30">
                <div className="w-12 h-[1px] bg-accent-gold/40" />
                <span className="text-[9px] font-bold tracking-[0.6em] uppercase text-accent-gold">Since 2026</span>
                <div className="w-12 h-[1px] bg-accent-gold/40" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-accent-gold to-transparent"
          />
        </div>
      </section>

      {/* Scarcity Section */}
      <section className="relative py-32 bg-transparent z-20 border-t border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-12"
          >
            <span className="text-accent-gold text-xs font-bold tracking-[0.5em] uppercase px-4 py-2 border border-accent-gold/20 rounded-full">Limited Early Access</span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-green">Only a few positions remaining</h2>
            
            <div className="flex justify-center gap-4 sm:gap-6 md:gap-12">
              <CountdownUnit value={timeLeft.h.toString().padStart(2, '0')} label="Hours" />
              <CountdownUnit value={timeLeft.m.toString().padStart(2, '0')} label="Minutes" />
              <CountdownUnit value={timeLeft.s.toString().padStart(2, '0')} label="Seconds" />
            </div>

            <p className="text-black/40 text-sm italic">Join 1,200+ selected leaders globally in our pre-launch protocol.</p>
          </motion.div>
        </div>
      </section>

      {/* 🏛️ MESSAGE FROM CEO SECTION */}
      <section id="ceo-message" className="py-20 bg-transparent relative z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* CEO Portrait with Luxury Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group max-w-sm mx-auto lg:mx-0"
            >
              <div className="absolute -inset-2 border border-accent-gold/15 rounded-[1.5rem]" />
              <div className="relative aspect-square rounded-[1rem] overflow-hidden shadow-xl">
                <img 
                  src="/assets/ceo.png" 
                  alt="SAFAK DINCER" 
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white text-xl font-serif">SAFAK DINCER</h3>
                  <p className="text-accent-gold text-[8px] font-bold tracking-widest uppercase">Founder & CEO</p>
                </div>
              </div>
            </motion.div>

            {/* Message Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-serif text-brand-green leading-tight">
                Our Vision & <span className="gold-gradient-text italic text-4xl">Movement</span>
              </h2>

              <div className="space-y-4 text-black/60 text-sm md:text-base font-light leading-relaxed text-left">
                <p>
                  Trade Balance is not simply a company — it is a vision, a powerful movement, and a platform designed to redefine how individuals achieve financial success in the modern world.
                </p>
                <p>
                  At our core, we are built on the principles of integrity, transparency, and professional excellence. These values are not just words — they guide every decision we make and every opportunity we create for our global community.
                </p>
                <div className="py-2 border-l-2 border-accent-gold/40 pl-6 bg-accent-gold/5 rounded-r-xl">
                  <p className="text-brand-green font-bold text-lg mb-1">Our mission is clear:</p>
                  <p className="italic">To empower individuals with the knowledge, advanced strategies, and real-time support they need to build sustainable, long-term financial independence.</p>
                </div>
                <p>
                  Through our network of highly experienced traders and our deep-rooted connections within the global financial ecosystem, we have developed a dynamic and scalable environment where innovation meets opportunity.
                </p>
                <p>
                  We are not just building a platform — we are building a future where individuals are empowered, connected, and financially independent.
                </p>
                <p className="text-brand-green font-bold pt-4 border-t border-black/5">
                  "I invite you to be part of this journey — to grow with us, to lead with us, and to help shape the future of global financial empowerment."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section id="about" className="py-32 bg-transparent relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif gold-gradient-text">Unparalleled Utility</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<TrendingUp size={32} />}
              title="Wealth Growth"
              desc="Access architectural strategies designed for high-velocity financial expansion."
            />
            <ValueCard 
              icon={<Users size={32} />}
              title="Network Power"
              desc="Harness the leverage of a globally connected pass-up unilevel structure."
            />
            <ValueCard 
              icon={<Zap size={32} />}
              title="Digital Era"
              desc="Propel your influence through advanced automated digital ecosystems."
            />
          </div>
        </div>
      </section>

      {/* 💳 MEMBERSHIP PROTOCOLS (Pricing) */}
      <section id="pricing" className="py-32 bg-transparent relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-accent-gold text-xs font-bold tracking-[0.5em] uppercase mb-4 block">Select Your Entry Point</span>
            <h2 className="text-4xl md:text-6xl font-serif gold-gradient-text">Membership Protocols</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-center">
            <PricingCard 
              tier="Standard" 
              price="250" 
              features={["10-Level Unilevel Access", "$2 Referral Yield", "Standard Pass-up Node", "Basic Digital Portfolio"]}
              delay={0.1}
            />
            <PricingCard 
              tier="Elite" 
              price="1000" 
              features={["Full Protocol Activation", "Maximum Pass-up Yield", "Priority Node Placement", "Advanced Market Analytics", "Executive Support Direct"]}
              isPremium={true}
              delay={0.2}
            />
            <PricingCard 
              tier="Prestige" 
              price="5000" 
              features={["Global Revenue Exposure", "Founder Circle Networking", "Concierge Support 24/7", "Early Beta Ecosystem Access", "Physical Asset Integration"]}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* AI Explainer Video Section */}
      <section className="py-40 bg-transparent relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif mb-16 gold-gradient-text">See How It Works</h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-6xl mx-auto aspect-video rounded-[3rem] overflow-hidden border border-accent-gold/40 shadow-[0_0_80px_rgba(212,175,55,0.1)] group"
          >
            {/* AI Visual Background */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover brightness-[25%] grayscale-[30%] group-hover:scale-105 transition-transform duration-[20s]"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-financial-charts-and-data-on-a-digital-screen-31952-large.mp4" type="video/mp4" />
            </video>

            {/* Cinematic Storyteller Overlay */}
            <ExplainerContent />

            {/* AI HUD Elements */}
            <div className="absolute top-10 left-10 flex flex-col gap-2 items-start opacity-40 hidden md:flex">
              <div className="w-32 h-px bg-black" />
              <div className="text-[8px] tracking-[0.5em] font-bold text-black">PROTOCOL ANALYSIS...</div>
            </div>
            <div className="absolute bottom-10 right-10 flex flex-col gap-2 items-end opacity-40 hidden md:flex">
              <div className="text-[8px] tracking-[0.5em] font-bold text-black">OPTIMIZING NETWORK YIELD</div>
              <div className="w-32 h-px bg-black" />
            </div>
          </motion.div>
          
          <p className="mt-12 text-black/20 text-[10px] font-bold uppercase tracking-[0.4em]">Integrated AI Explainer Module v2.4 • Dynamic Render</p>
        </div>
      </section>

      {/* Complan Brief (Added PDF Feature) */}
      <section id="complan" className="py-32 bg-transparent border-y border-black/5 relative z-10 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FileText size={48} className="text-accent-gold mx-auto mb-8 floating" />
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-brand-green">Download Full Marketing Plan</h2>
          <p className="text-black/60 text-lg mb-12 font-light">Understand the complete 10-level earning structure and global pass-up protocol.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="/assets/trade-balance-complan.pdf" 
              download 
              className="btn-gold px-12 py-5 rounded-full font-bold tracking-widest text-sm uppercase flex items-center gap-3"
            >
              Download PDF <Download size={20} />
            </a>
            <span className="text-accent-gold/60 text-xs font-bold uppercase tracking-widest">Includes: Levels, Bonus System, ROI Guide</span>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <EarningCalculator />
      <section id="register" className="py-40 bg-transparent relative overflow-hidden z-10">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-7xl font-serif gold-gradient-text mb-16">Join the Exclusive <br />Pre-Launch</h2>
          
          {regStatus === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card-glass p-12 rounded-[2rem] border-accent-gold/30 shadow-glow"
            >
              <div className="w-20 h-20 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <ShieldCheck size={40} className="text-accent-gold" />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-brand-green mb-4">Registration Initialized</h3>
              <p className="text-black/60 text-lg mb-8 leading-relaxed">
                Check your email to verify your account and <br />
                secure your position in the protocol.
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent-gold">Verification Pending</span>
              </div>
            </motion.div>
          ) : (
            <form 
              className="space-y-6 max-w-xl mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                setRegStatus("loading");
                setTimeout(() => setRegStatus("success"), 2000);
              }}
            >
              <div className="relative">
                <input 
                  type="text" 
                  required
                  placeholder="Full Name" 
                  value={regData.name}
                  onChange={(e) => setRegData({ ...regData, name: e.target.value })}
                  className="w-full bg-black/5 border border-black/10 rounded-2xl p-6 text-black focus:outline-none focus:border-accent-gold/50 transition-colors placeholder:text-black/20"
                />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  required
                  placeholder="Email Address" 
                  value={regData.email}
                  onChange={(e) => setRegData({ ...regData, email: e.target.value })}
                  className="w-full bg-black/5 border border-black/10 rounded-2xl p-6 text-black focus:outline-none focus:border-accent-gold/50 transition-colors placeholder:text-black/20"
                />
              </div>
              <button 
                disabled={regStatus === "loading"}
                className={`btn-gold w-full py-6 rounded-2xl font-bold tracking-[0.3em] uppercase text-sm mt-8 shadow-glow flex items-center justify-center gap-3 ${regStatus === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {regStatus === "loading" ? (
                  <>
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full"
                    />
                    Wait...
                  </>
                ) : (
                  "Initialize Registration"
                )}
              </button>
            </form>
          )}
          <p className="mt-8 text-black/40 text-xs tracking-widest uppercase opacity-50">Private Access Gated Submission System</p>
        </div>
      </section>

      {/* Future Features */}
      <section className="py-32 border-t border-white/5 bg-transparent relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">The Future Roadmap</h2>
            <p className="text-text-muted">A look at the upcoming ecosystem tools.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FeatureIcon icon={<LayoutDashboard />} label="User Dashboard" />
            <FeatureIcon icon={<Share2 />} label="Referral System" />
            <FeatureIcon icon={<DollarSign />} label="Earnings Engine" />
            <FeatureIcon icon={<CreditCard />} label="Global Debit Card" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-transparent border-t border-black/5 relative overflow-hidden z-10">
        {/* Subtle Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-green/5 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
            <div className="flex flex-col items-center md:items-start gap-4">
              <img src={mainLogo} alt="Trade Balance" className="h-28 md:h-36 drop-shadow-2xl brightness-110" />
              <p className="text-[10px] text-accent-gold font-bold tracking-[0.5em] uppercase">The New Standard</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-10 text-[10px] uppercase tracking-[0.3em] font-bold">
              <Link to="/terms" className="text-black/40 hover:text-accent-gold transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="text-black/40 hover:text-accent-gold transition-colors">Privacy Protocol</Link>
              <a href="#" className="text-black/40 hover:text-accent-gold transition-colors">Risk Disclaimer</a>
              <a href="#hero" className="text-accent-gold hover:text-black transition-colors">Back to Top</a>
            </div>
          </div>
          
          <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-[9px] uppercase tracking-[0.4em] text-black/20 leading-loose max-w-2xl">
              © 2026 THE TRADE BALANCE PORTAL. ARCHITECTED FOR THE ELITE. UNAUTHORIZED DUPLICATION IS PROHIBITED.
            </p>
            <div className="flex gap-4">
               <div className="w-8 h-px bg-black/10" />
               <span className="text-[9px] text-black/20 font-bold tracking-[0.2em] uppercase">v2.4.0 Live</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sub-components
const CountdownUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-20 sm:w-20 sm:h-24 md:w-32 md:h-40 card-glass flex items-center justify-center text-3xl sm:text-4xl md:text-7xl font-serif text-glow border-accent-gold/40">
      {value}
    </div>
    <span className="mt-4 text-[8px] sm:text-[10px] uppercase tracking-[0.4em] font-bold text-text-muted">{label}</span>
  </div>
);

const ValueCard = ({ icon, title, desc }) => (
  <div className="card-glass p-10 group border border-black/5 hover:border-accent-gold/50 transition-all">
    <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-8 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-serif mb-4 text-brand-green group-hover:text-accent-gold transition-colors">{title}</h3>
    <p className="text-black/60 font-light leading-relaxed">{desc}</p>
  </div>
);

const FeatureIcon = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-4 group">
    <div className="w-16 h-16 border border-black/10 rounded-2xl flex items-center justify-center text-brand-green/60 group-hover:text-accent-gold group-hover:border-accent-gold transition-all duration-500 floating">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{label}</span>
  </div>
);

const EarningCalculator = () => {
  const [partners, setPartners] = useState(10);
  const earningsPerPartner = 2; 
  const totalEarnings = partners * earningsPerPartner;

  return (
    <section id="calculator" className="py-32 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-gold text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Interactive Yield Forecast</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 whitespace-pre-line">Calculate Your {"\n"}<span className="gold-gradient-text italic">Global Network Power</span></h2>
            <p className="text-text-muted mb-10 font-light leading-relaxed max-w-xl">
              Our Unilevel protocol spans 10 levels deep. With a simple <span className="text-accent-gold font-bold">$2 yield</span> per active referral and our integrated <span className="text-accent-gold font-bold">Pass-up System</span>, your scalability is architected for success.
            </p>
            
            <div className="space-y-6">
              {[
                { l: "10 Levels Deep Structure", v: "Gated Access" },
                { l: "Direct Yield Per Active Referral", v: "$2.00 USD" },
                { l: "Proprietary Pass-up Logic", v: "Max Leverage" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-black/5">
                  <span className="text-black/40 text-xs font-bold uppercase tracking-widest">{item.l}</span>
                  <span className="text-brand-green font-serif italic text-lg">{item.v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="card-glass p-10 md:p-14 border-accent-gold/20 relative"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
               <DollarSign size={80} className="text-accent-gold" />
            </div>
            
            <div className="mb-12 relative z-10">
              <label className="text-black/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-10 block text-center">Estimated Network Size (10 Levels)</label>
              <div className="relative pt-2">
                <input 
                  type="range" 
                  min="1" 
                  max="1000" 
                  value={partners} 
                  onChange={(e) => setPartners(e.target.value)}
                  className="w-full h-1.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-brand-green mb-8"
                />
                <div className="flex justify-between items-center">
                  <span className="text-black/30 text-xs font-bold uppercase tracking-tighter">1 Referral</span>
                  <span className="text-brand-green font-serif text-5xl md:text-6xl italic drop-shadow-sm">{partners} <span className="text-sm uppercase tracking-widest not-italic ml-2">Referrals</span></span>
                  <span className="text-black/30 text-xs font-bold uppercase tracking-tighter">1000+</span>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-black/5 flex flex-col items-center relative z-10">
              <p className="text-black/40 text-[10px] uppercase font-bold tracking-[0.4em] mb-4">Estimated Monthly Passive Yield</p>
              <div className="text-6xl md:text-8xl font-serif text-brand-green drop-shadow-[0_0_40px_rgba(15,59,47,0.1)]">
                ${totalEarnings.toLocaleString()}
              </div>
              <p className="text-black/20 text-[9px] mt-10 italic text-center leading-relaxed">
                *Projections based on active network participation and pass-up optimization logic within the 10-level unilevel framework.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ExplainerContent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { text: "The Future of Digital Income Starts Now", sub: "Gated Access • Automated Growth • Scalable Yield" },
    { text: "Legacy Systems are Frustrating", sub: "Complexity is the barrier. We built the bridge." },
    { text: "The Trade Balance Protocol", sub: "A high-velocity network architected for leaders." },
    { text: "Direct 10-Level Unilevel Growth", sub: "$2 passive yield per active referral across your empire." },
    { text: "Automated Pass-up Dynamics", sub: "Maximize revenue as your organization expands globally." },
    { text: "Exclusive Pre-Launch Opportunity", sub: "Secure your position within the primary window." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-radial-gradient(circle, rgba(11,61,46,0.3) 0%, transparent 80%)">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, scale: 0.95, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.05, y: -30, filter: "blur(10px)" }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-4xl"
        >
          <div className="flex gap-2 justify-center mb-10">
            {steps.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-700 ${i === activeStep ? 'w-16 bg-accent-gold' : 'w-4 bg-white/10'}`} 
              />
            ))}
          </div>
          
          <h3 className="text-3xl md:text-6xl font-serif gold-gradient-text mb-8 italic leading-tight px-4 drop-shadow-sm">
            {steps[activeStep].text}
          </h3>
          
          <p className="text-brand-green font-bold text-[10px] md:text-base tracking-[0.5em] uppercase px-4">
            {steps[activeStep].sub}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-12 flex items-center gap-6 opacity-30">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
          <span className="text-[10px] font-bold tracking-widest text-accent-gold uppercase">Live AI Simulation</span>
        </div>
      </div>
    </div>
  );
};

const LanguageSwitcher = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' }
  ];

  const changeLanguage = (code) => {
    // 1. Manually set the cookie for persistence across refreshes
    const domain = window.location.hostname === 'localhost' ? '' : `domain=.${window.location.hostname};`;
    document.cookie = `googtrans=/en/${code}; ${domain} path=/`;
    document.cookie = `googtrans=/en/${code}; path=/`; // Fallback for local

    // 2. Standard Google Translate selection logic
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = code;
      select.dispatchEvent(new Event('change'));
    } else {
      // 3. Fallback: Use URL hash method which Google Translate library monitors
      window.location.hash = `#googtrans(en|${code})`;
      window.location.reload(); 
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Hidden default Google widget */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 p-2 rounded-full transition-all duration-300 ${isScrolled ? "hover:bg-black/5 text-black" : "hover:bg-white/10 text-white"}`}
      >
        <Languages size={18} className={isScrolled ? "text-brand-green" : "text-white"} />
        <span className="text-[9px] font-bold tracking-[0.2em] uppercase hidden xl:block">Translate</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-4 w-48 bg-white/95 backdrop-blur-xl border border-black/5 rounded-2xl shadow-2xl overflow-hidden py-2"
          >
            <div className="px-4 py-2 border-b border-black/5 mb-2">
              <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-black/40">Select Language</span>
            </div>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-accent-gold/5 transition-colors text-left group"
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-black/70 group-hover:text-accent-gold">{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingCard = ({ tier, price, features, isPremium, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className={`relative group p-10 rounded-[2.5rem] border transition-all duration-500 ${
      isPremium 
        ? "bg-brand-green/5 border-accent-gold shadow-[0_20px_60px_rgba(212,175,55,0.1)] scale-105" 
        : "card-glass border-black/5 hover:border-accent-gold/40"
    }`}
  >
    {isPremium && (
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent-gold text-black text-[10px] font-bold tracking-[0.3em] uppercase py-2 px-6 rounded-full">
        Most Recommended
      </div>
    )}
    
    <div className="text-center mb-8">
      <h3 className={`text-2xl font-serif mb-4 ${isPremium ? "text-accent-gold" : "text-brand-green"}`}>{tier}</h3>
      <div className="flex items-center justify-center gap-2">
        <span className="text-2xl font-serif text-black/40">$</span>
        <span className="text-6xl font-serif text-brand-green">{price}</span>
        <span className="text-xs font-bold text-black/20 uppercase tracking-widest mt-6">USD</span>
      </div>
    </div>

    <div className="h-px w-full bg-black/5 mb-8" />

    <ul className="space-y-4 mb-10">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3 text-sm text-black/60 font-medium">
          <ShieldCheck size={18} className="text-accent-gold shrink-0" />
          {feature}
        </li>
      ))}
    </ul>

    <button className={`w-full py-5 rounded-2xl font-bold tracking-[0.3em] uppercase text-[10px] transition-all duration-500 ${
      isPremium 
        ? "btn-gold shadow-glow" 
        : "border border-black/10 text-brand-green hover:bg-brand-green hover:text-white"
    }`}>
      Select Protocol
    </button>
  </motion.div>
);

export default LandingPage;
