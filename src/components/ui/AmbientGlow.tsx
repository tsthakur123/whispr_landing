"use client";

import { HTMLAttributes, forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from './Button';

interface AmbientGlowProps extends HTMLMotionProps<"div"> {
  color?: 'pink' | 'purple' | 'indigo' | 'cyan';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const AmbientGlow = forwardRef<HTMLDivElement, AmbientGlowProps>(
  ({ className, color = 'purple', size = 'md', ...props }, ref) => {
    
    const colors = {
      pink: 'bg-[#FB2BB6]',
      purple: 'bg-[#D210FA]',
      indigo: 'bg-[#3E36FA]',
      cyan: 'bg-[#01D7F7]',
    };

    const sizes = {
      sm: 'w-32 h-32 blur-[60px]',
      md: 'w-48 h-48 blur-[80px]',
      lg: 'w-64 h-64 blur-[100px]',
      xl: 'w-96 h-96 blur-[120px]',
    };

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className={cn(
          'absolute rounded-full pointer-events-none mix-blend-screen',
          colors[color],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

AmbientGlow.displayName = 'AmbientGlow';
