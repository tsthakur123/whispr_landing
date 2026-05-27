"use client";

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { AmbientGlow } from '../ui/AmbientGlow';

export const HeroSection = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden px-6 pt-32">
      {/* Background Ambient Glows */}
      <AmbientGlow color="pink" size="xl" className="top-[-10%] left-[-10%] opacity-30" />
      <AmbientGlow color="indigo" size="lg" className="bottom-[10%] right-[-5%] opacity-20" />
      <AmbientGlow color="cyan" size="md" className="top-[40%] right-[10%] opacity-10" />

      <div className="z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-poppins text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            What if you connected <br className="hidden md:block" />
            <span className="text-gradient-whispr">before seeing each other?</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="font-inter text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            An anonymous matchmaking experience where conversations come before appearances. Meet strangers anonymously. Talk freely. Reveal only if the vibe matches.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button variant="primary" size="lg" onClick={scrollToWaitlist} className="w-full sm:w-auto">
            Join the Waitlist
          </Button>
          <Button variant="glass" size="lg" onClick={scrollToHowItWorks} className="w-full sm:w-auto">
            How it works
          </Button>
        </motion.div>
      </div>

      {/* Optional scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="flex flex-col items-center gap-2 text-gray-500 pb-8 mt-8"
      >
        <span className="text-sm font-inter tracking-widest uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent"
        />
      </motion.div>
    </section>
  );
};
