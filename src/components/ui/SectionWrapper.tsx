"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  backgroundColor?: string;
  fullWidth?: boolean;
}

export const SectionWrapper = ({
  children,
  className,
  id,
  backgroundColor = "transparent",
  fullWidth = false,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn("py-20 px-6 lg:px-12 overflow-hidden", className)}
      style={backgroundColor !== "transparent" ? { backgroundColor } : {}}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(fullWidth ? "w-full" : "max-w-screen-2xl mx-auto")}
      >
        {children}
      </motion.div>
    </section>
  );
};
