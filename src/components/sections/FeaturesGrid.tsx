"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Headset } from 'lucide-react';

const features = [
  {
    title: "Efficiency Boosts",
    description: "Reduce manual workload by up to 60% with our smart automation tools.",
    icon: <Zap size={24} />,
  },
  {
    title: "Higher Conversion",
    description: "User-centric designs built to turn casual visitors into loyal customers.",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "24/7 Expert Support",
    description: "Round-the-clock maintenance to ensure your systems never sleep.",
    icon: <Headset size={24} />,
  },
];

export const FeaturesGrid = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-dark">{feature.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
