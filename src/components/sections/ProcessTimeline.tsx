"use client";

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { id: '01', title: 'Discover & Plan', description: 'We start by understanding your vision, goals, and target audience.' },
  { id: '02', title: 'Design & Develop', description: 'Our team crafts premium designs and builds scalable solutions.' },
  { id: '03', title: 'Test & Launch', description: 'Rigorous testing ensures a flawless launch for your product.' },
  { id: '04', title: 'Support & Evolve', description: 'We provide ongoing support and iterate based on user feedback.' },
];

export const ProcessTimeline = () => {
  return (
    <div className="relative pt-12">
      {/* Horizontal Line (Desktop) */}
      <div className="hidden lg:block absolute top-[4.5rem] left-0 w-full h-0.5 bg-gray-200" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center lg:items-start group"
          >
            {/* Step Number Circle */}
            <div className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary font-bold text-xl mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 relative z-20">
              {step.id}
            </div>

            <div className="text-center lg:text-left">
              <h4 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{step.title}</h4>
              <p className="text-text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
