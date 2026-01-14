"use client";

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Delivered', value: '500+' },
  { label: 'Avg. ROI Boost', value: '40%' },
  { label: 'Users Reached', value: '10M+' },
  { label: 'Support Available', value: '24/7' },
];

export const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 px-6 bg-dark rounded-section">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
            {stat.value}
          </div>
          <div className="text-sm md:text-base text-gray-400 font-medium tracking-wide uppercase">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
