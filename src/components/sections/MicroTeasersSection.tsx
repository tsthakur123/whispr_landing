"use client";

import { motion } from 'framer-motion';

export const MicroTeasersSection = () => {
  return (
    <div className="bg-[#0D0D0D] text-center px-6">
      
      {/* Sequence 1 */}
      <section className="min-h-[120vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-40%" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="text-3xl md:text-5xl font-poppins text-gray-400 leading-relaxed font-light">
            "You’ve been talking for hours…"
          </p>
        </motion.div>
      </section>

      {/* Sequence 2 */}
      <section className="min-h-[120vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-40%" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="text-3xl md:text-5xl font-poppins text-white leading-relaxed font-light">
            "But you still don’t know their name."
          </p>
        </motion.div>
      </section>

      {/* Sequence 3 - Emotional Punch */}
      <section className="min-h-[150vh] flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(15px)', scale: 0.95 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          viewport={{ once: true, margin: "-30%" }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="max-w-4xl z-10"
        >
          <p className="text-4xl md:text-6xl font-poppins text-white leading-relaxed font-medium">
            For once, <br className="md:hidden" />
            <span className="text-gradient-whispr">nobody saw each other first.</span>
          </p>
        </motion.div>
      </section>

      {/* Sequence 4 - Reveal Energy Tease */}
      <section className="min-h-[100vh] flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-[0_0_40px_rgba(210,16,250,0.15)] cursor-default hover:bg-white/10 transition-colors"
        >
          <p className="text-lg md:text-xl font-inter text-gray-300 font-medium tracking-wide flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-whispr-pink opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-whispr-pink"></span>
            </span>
            Reveal requested.
          </p>
        </motion.div>
      </section>

      {/* Sequence 5 - Social Tension */}
      <section className="min-h-[120vh] flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40%" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="max-w-4xl z-10"
        >
          <p className="text-2xl md:text-4xl font-inter text-gray-500 font-light tracking-widest uppercase">
            Would you reveal?
          </p>
        </motion.div>
      </section>

    </div>
  );
};
