"use client";

import React from 'react';
import HeroBackground from './HeroBackground';
import BrandAssembly from './BrandAssembly';

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05070a] w-full">
      {/* Three.js Background */}
      <HeroBackground />

      {/* Subtle Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#05070a]/60 z-1 pointer-events-none" />

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 flex items-center justify-center min-h-screen">
        <BrandAssembly />
      </div>
    </div>
  );
};

