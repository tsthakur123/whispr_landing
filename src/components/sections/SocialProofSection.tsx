"use client";

import { motion } from 'framer-motion';

const cities = ["Bangalore", "Gurgaon", "Mumbai", "Hyderabad", "Pune"];

export const SocialProofSection = () => {
  return (
    <section className="py-40 px-6 bg-[#0D0D0D]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="text-lg font-inter text-gray-500 mb-6"
        >
          Launching soon in
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 w-full mb-16">
          {cities.map((city, index) => (
            <motion.div
              key={city}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, delay: index * 0.15 }}
              className="text-xl md:text-2xl font-inter text-gray-400 font-light"
            >
              {city}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="inline-flex items-center gap-3 text-gray-300 font-inter"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-whispr-pink opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-whispr-purple"></span>
          </span>
          Early users already waiting.
        </motion.div>
      </div>
    </section>
  );
};
