"use client";

import { motion } from 'framer-motion';

const cities = ["Bangalore", "Gurgaon", "Mumbai", "Hyderabad", "Pune"];

export const SocialProofSection = () => {
  return (
    <section className="py-20 px-6 border-y border-white/5 bg-black/20 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-inter uppercase tracking-widest text-purple-400 mb-8"
        >
          Exclusive Early Access Launching In
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 w-full">
          {cities.map((city, index) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-xl md:text-3xl font-poppins font-medium text-gray-400 hover:text-white transition-colors duration-300"
            >
              {city}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Spots are strictly limited for the first beta drop.
        </motion.div>
      </div>
    </section>
  );
};
