"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  secondaryCtaText?: string;
}

export const HeroSection = ({
  title,
  subtitle,
  ctaText = "Get Started Today",
  secondaryCtaText = "View Our Work",
}: HeroSectionProps) => {
  return (
    <div className="relative min-h-[70dvh] sm:min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-black w-full max-w-full">
      {/* Mobile Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-100 sm:hidden"
      >
        <source src="/moolvideo2.mp4" type="video/mp4" />
      </video>

      {/* Desktop & Tablet Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-100 hidden sm:block"
      >
        <source src="/moolvideo.mp4" type="video/mp4" />
      </video>

      {/* Subtle Video Overlay */}
      <div className="absolute inset-0 bg-black/20 z-1" />

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 text-center">
        {/* Visual-only Hero as requested */}
      </div>
    </div>
  );
};
