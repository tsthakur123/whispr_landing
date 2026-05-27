"use client";

import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { UserX, MessageSquareText, Eye } from 'lucide-react';

const steps = [
  {
    icon: <UserX className="w-8 h-8 text-whispr-pink" />,
    title: "Match Anonymously",
    description: "No pictures. No names. You're paired based on vibe and shared interests, keeping the focus entirely on who you are.",
  },
  {
    icon: <MessageSquareText className="w-8 h-8 text-whispr-purple" />,
    title: "Talk Freely",
    description: "Dive into real, unfiltered conversations without the pressure of appearances. Let your personality lead the way.",
  },
  {
    icon: <Eye className="w-8 h-8 text-whispr-cyan" />,
    title: "Reveal Only If It Clicks",
    description: "Built a connection? Request a reveal. If the feeling is mutual, the masks come off. Otherwise, you stay anonymous.",
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
            How Whispr Works
          </h2>
          <p className="text-gray-400 font-inter text-lg">The anti-superficial matchmaking engine.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <GlassCard className="h-full relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500">
                {/* Subtle hover glow inside card */}
                <div className="absolute inset-0 bg-gradient-whispr opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
                
                <div className="bg-white/5 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-poppins font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 font-inter leading-relaxed">
                  {step.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
