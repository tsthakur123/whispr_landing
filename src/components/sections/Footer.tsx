"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start"
        >
          <div className="mb-4">
            <Image 
              src="/whispr_wordmark.jpg" 
              alt="Whispr Logo" 
              width={120} 
              height={40} 
              className="object-contain mix-blend-screen"
            />
          </div>
          <span className="text-sm font-inter text-gray-500">
            Where vibes speak louder than looks.
          </span>
        </motion.div>

        <div className="flex items-center gap-6 text-sm font-inter text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
      
      <div className="mt-12 text-center text-xs text-gray-700 font-inter">
        &copy; {new Date().getFullYear()} Whispr. All rights reserved.
      </div>
    </footer>
  );
};
