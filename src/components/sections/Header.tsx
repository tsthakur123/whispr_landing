"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 max-w-6xl mx-auto"
    >
      <div className="relative h-10 w-[180px] overflow-hidden">
        <Image
          src="/whispr_logo_horizontal_aligned.png"
          alt="Whispr Logo"
          fill
          sizes="180px"
          className="object-cover object-center mix-blend-screen"
          priority
        />
      </div>
    </motion.header>
  );
};
