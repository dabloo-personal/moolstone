"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

export const CTASection = () => {
  return (
    <div className="bg-[#fff9f4] rounded-3xl p-16 md:p-24 text-center relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-dark mb-12 leading-tight">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-text-muted text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Let&apos;s transform your ideas into a world-class digital experience that inspires and performs.
        </p>
        <div className="flex justify-center">
          <Link href="/contact#contact-form">
            <Button className="rounded-full bg-primary hover:bg-primary-dark px-12 py-6 text-xl font-bold shadow-xl shadow-primary/25 group">
              Connect Us
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
