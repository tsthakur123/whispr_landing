"use client";

import { motion } from 'framer-motion';

export const ProblemSection = () => {
  return (
    <section className="relative py-32 px-6 flex items-center justify-center overflow-hidden">
      <div className="max-w-3xl mx-auto text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-poppins font-bold text-white mb-8"
        >
          Dating became <br className="hidden md:block" />
          <span className="text-gray-500">instant judgment.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl font-inter text-gray-400 leading-relaxed"
        >
          Swiping on faces. Judging a book by its cover in 0.5 seconds.
          We traded genuine connection for an endless catalogue of profiles.
          <br /><br />
          <span className="text-white">It’s time to bring the mystery back.</span>
        </motion.p>
      </div>

      {/* Subtle ambient lighting for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-white/[0.02] blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};
