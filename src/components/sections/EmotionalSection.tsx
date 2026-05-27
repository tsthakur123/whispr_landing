"use client";

import { motion } from 'framer-motion';
import { AmbientGlow } from '../ui/AmbientGlow';

export const EmotionalSection = () => {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <AmbientGlow color="purple" size="lg" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-semibold leading-tight text-white mb-8">
            Because the best connections <br className="hidden md:block" />
            don’t start with <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">appearances.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl font-inter text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          They start with a shared laugh. A late-night thought. A mutual weirdness.
          <br /><br />
          <span className="text-white font-medium">Whispr is built for the chemistry that happens when you actually listen.</span>
        </motion.p>
      </div>
    </section>
  );
};
