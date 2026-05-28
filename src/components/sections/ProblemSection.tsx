"use client";

import { motion } from 'framer-motion';

export const ProblemSection = () => {
  const statements = [
    "No endless swiping.",
    "No instant judgment.",
    "No pretending."
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-[#0D0D0D]">
      <div className="max-w-3xl mx-auto text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-poppins font-bold text-white mb-24 tracking-tight"
        >
          Not another dating app.
        </motion.h2>

        <div className="flex flex-col gap-12">
          {statements.map((statement, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, delay: index * 0.4, ease: "easeOut" }}
              className="text-xl md:text-3xl font-inter text-gray-500 font-light"
            >
              {statement}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};
