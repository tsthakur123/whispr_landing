import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    
    const variants = {
      primary: 'bg-gradient-whispr text-white border-transparent hover:opacity-90 shadow-md shadow-purple-500/20',
      secondary: 'bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/15',
      glass: 'bg-black/30 backdrop-blur-lg border border-white/10 text-white hover:bg-black/40',
    };

    const sizes = {
      sm: 'h-10 px-6 text-sm',
      md: 'h-12 px-8 text-base',
      lg: 'h-14 px-10 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-poppins font-medium transition-all duration-200 active:scale-95',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
