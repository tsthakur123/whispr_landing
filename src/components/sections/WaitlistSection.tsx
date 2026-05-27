"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { Send, CheckCircle2 } from 'lucide-react';
import { AmbientGlow } from '../ui/AmbientGlow';

export const WaitlistSection = () => {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setStatus('loading');
    
    // Mock API call
    setTimeout(() => {
      setStatus('success');
      setInput('');
    }, 1500);
  };

  return (
    <section id="waitlist" className="relative py-40 px-6 overflow-hidden flex items-center justify-center min-h-screen">
      <AmbientGlow color="cyan" size="lg" className="bottom-[-10%] right-1/4 opacity-20" />
      <AmbientGlow color="pink" size="md" className="top-1/4 left-1/4 opacity-10" />

      <div className="max-w-2xl w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="text-center md:p-12">
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-4">
              Secure your spot.
            </h2>
            <p className="text-gray-400 font-inter mb-10 max-w-md mx-auto">
              Drop your email or Instagram username to join the early access waitlist.
            </p>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-6 text-green-400"
                >
                  <CheckCircle2 className="w-16 h-16 mb-4" />
                  <p className="font-poppins text-xl font-medium text-white">You're on the list.</p>
                  <p className="text-gray-400 mt-2 text-sm">Keep an eye on your inbox/DMs.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto"
                >
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="@username or email@address.com"
                      className="w-full h-14 bg-white/5 border border-white/10 rounded-full px-6 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all font-inter"
                      disabled={status === 'loading'}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="h-14 sm:w-auto w-full px-8 gap-2"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Join</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
