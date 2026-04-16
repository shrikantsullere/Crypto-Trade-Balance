import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const scenes = [
  {
    id: 1,
    image: '/assets/promo/scene1.png',
    text: 'STRENGTH. VISION. POWER.',
    subtext: 'Inspired by the King of the Financial Jungle.',
    duration: 6000,
  },
  {
    id: 2,
    image: '/assets/promo/scene2.png',
    text: 'BUILT FOR FINANCIAL FREEDOM',
    subtext: 'Your success is architected by data and precision.',
    duration: 6000,
  },
  {
    id: 3,
    image: '/assets/promo/scene3.png',
    text: 'GLOBAL INNOVATION. LUXURY BRANDING.',
    subtext: 'Connecting markets through skyscrapers of glass and gold.',
    duration: 6000,
  },
  {
    id: 4,
    image: '/assets/promo/scene4.png',
    text: 'LED BY VISIONARIES',
    subtext: 'Leadership that transforms future into reality.',
    duration: 6000,
  },
  {
    id: 5,
    image: '/assets/promo/scene5.png',
    text: 'JOIN THE MOVEMENT',
    subtext: 'Start Your Journey Today.',
    duration: 12000,
    isFinal: true,
  },
];

const CinematicHero = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      if (currentScene < scenes.length - 1) {
        setCurrentScene(currentScene + 1);
      } else {
        setCurrentScene(0);
      }
    }, scenes[currentScene].duration);

    return () => clearTimeout(timer);
  }, [currentScene, isPlaying]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-black font-serif flex items-center justify-center">
      {/* 🎞️ CINEMATIC BARS */}
      <div className="absolute top-0 left-0 w-full h-[8vh] bg-black z-50 pointer-events-none opacity-95" />
      <div className="absolute bottom-0 left-0 w-full h-[8vh] bg-black z-50 pointer-events-none opacity-95" />

      {/* 📽️ ANALOG FILM TEXTURE */}
      <div className="absolute inset-0 z-40 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <AnimatePresence mode="wait">
        <motion.div
          key={scenes[currentScene].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center"
        >
          {/* 🖼️ BACKGROUND IMAGE - ADJUSTED TO SHOW FULL PHOTO */}
          <motion.div
            className="w-full h-full absolute"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: scenes[currentScene].duration / 1000, ease: "linear" }}
          >
            <img
              src={scenes[currentScene].image}
              alt="Cinematic Scene"
              className="w-full h-full object-contain md:object-cover brightness-[0.7] contrast-[1.1]"
            />
          </motion.div>
          
          {/* 🌑 GRADIENT OVERLAYS */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-black/60" />
          
          {/* 💎 CONTENT LAYER */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="max-w-[90vw] md:max-w-6xl"
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter uppercase leading-tight mb-4"
                style={{ 
                   color: 'transparent',
                   backgroundImage: 'linear-gradient(to bottom, #fde68a, #d97706)',
                   WebkitBackgroundClip: 'text',
                   filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.9))'
                }}
              >
                {scenes[currentScene].text}
              </motion.h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '150px' }}
                transition={{ delay: 1, duration: 0.8 }}
                className="h-[1px] bg-amber-500/30 mx-auto mb-6"
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="text-[10px] sm:text-xs md:text-lg lg:text-xl text-white/40 font-medium tracking-[0.4em] uppercase max-w-2xl mx-auto"
              >
                {scenes[currentScene].subtext}
              </motion.p>
            </motion.div>

            {scenes[currentScene].isFinal && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="mt-8 md:mt-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 md:px-12 py-3 md:py-4 border border-amber-500/40 text-amber-500 text-[10px] md:text-sm font-bold rounded-full uppercase tracking-[0.5em] backdrop-blur-sm transition-all shadow-[0_0_30px_rgba(212,175,55,0.1)]"
                >
                  Join The Movement
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 🎞️ VIDEO TIMELINE */}
      <div className="absolute bottom-[3vh] left-10 right-10 flex gap-6 z-50 items-center">
        <div className="flex-1 h-[1px] bg-white/5 relative">
          <motion.div 
            key={currentScene}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: scenes[currentScene].duration / 1000, ease: 'linear' }}
            className="absolute inset-y-0 left-0 bg-amber-500/30"
          />
        </div>
        <div className="text-white/20 font-mono text-[10px] tracking-widest uppercase">
          Chapter {currentScene + 1}/5
        </div>
      </div>
    </div>
  );
};

export default CinematicHero;
