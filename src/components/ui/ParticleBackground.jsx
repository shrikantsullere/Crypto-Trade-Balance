import React, { useMemo, useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const ParticleBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const particles = useMemo(() => {
    return Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 10,
      parallax: Math.random() * 50 + 20,
    }));
  }, []);

  const diamonds = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 6 + 4,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-page-bg">
      <div className="cosmic-bg" />
      <div className="cosmic-overlay" />

      {/* Cinematic Mouse Lens Flare */}
      <motion.div
        className="mouse-glow"
        style={{
          left: smoothX,
          top: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(201, 162, 39, 0.15) 0%, rgba(255,255,255,0.05) 30%, transparent 70%)',
        }}
      />

      {/* Luxury Sparkling Diamonds */}
      {diamonds.map((d) => (
        <motion.div
          key={`diamond-${d.id}`}
          className="absolute bg-gray-300/60"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Diamond shape
            boxShadow: '0 0 15px #fff',
          }}
          animate={{
            opacity: [0, 0.8, 0],
            rotate: [0, 180],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: d.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated Parallax Galaxy Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent-gold opacity-30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            filter: 'blur(1.5px)',
            x: useSpring(mouseX, { damping: p.parallax, stiffness: 40 }),
            y: useSpring(mouseY, { damping: p.parallax, stiffness: 40 }),
          }}
          animate={{
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
