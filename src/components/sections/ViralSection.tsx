"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export const ViralSection = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="py-32 px-6 bg-black/40 border-y border-white/5 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-poppins font-bold text-white mb-12"
        >
          Would you <span className="text-gradient-whispr">reveal?</span>
        </motion.h2>

        <div className="relative max-w-sm mx-auto aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer group" onClick={() => setRevealed(!revealed)}>
          {/* Mock image background */}
          <div className="absolute inset-0 bg-zinc-900">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" 
              alt="Revealed profile" 
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          
          <motion.div
            animate={{
              backdropFilter: revealed ? "blur(0px)" : "blur(40px)",
              backgroundColor: revealed ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.5)"
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center transition-colors"
          >
            {!revealed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-white flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center mb-4 backdrop-blur-md">
                  <span className="text-2xl">?</span>
                </div>
                <p className="font-poppins font-medium tracking-wide">Tap to preview reveal</p>
              </motion.div>
            )}
          </motion.div>

          {/* Simulated chat overlay at the bottom */}
          <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20 text-left">
            <div className="space-y-3">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl rounded-bl-sm px-4 py-2 w-3/4 text-sm text-gray-200">
                "I've never told anyone that before."
              </div>
              <div className="bg-purple-500/80 backdrop-blur-md rounded-2xl rounded-br-sm px-4 py-2 w-3/4 ml-auto text-sm text-white text-right">
                "Me neither. It feels safe here."
              </div>
            </div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-gray-400 font-inter max-w-lg mx-auto"
        >
          Share this with that one friend who's always complaining about modern dating.
        </motion.p>
      </div>
    </section>
  );
};
