"use client";

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { AmbientGlow } from '../ui/AmbientGlow';

export const HeroSection = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 bg-[#0D0D0D]">
      {/* Massive slow-breathing background glow */}
      <motion.div
        animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
      >
        <AmbientGlow color="purple" size="xl" className="opacity-100 mix-blend-screen" />
      </motion.div>

      <div className="z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-poppins text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            What if you connected <br className="hidden md:block" />
            <span className="text-gradient-whispr">before seeing each other?</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <p className="font-inter text-lg md:text-xl text-[#9CA3AF] mb-12 tracking-wide uppercase text-sm">
            An experiment in connection.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button variant="primary" size="lg" onClick={scrollToWaitlist} className="w-full sm:w-auto text-lg px-12">
            Join the Waitlist
          </Button>
        </motion.div>
      </div>

      {/* Subtle scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="flex flex-col items-center gap-2 text-gray-600 pb-8 mt-8 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-gray-500 to-transparent"
        />
      </motion.div>
    </section>
  );
};
