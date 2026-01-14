"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';

export const WhoWeAre = () => {
  return (
    <section className="py-24 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text Content */}
        <div className="flex-1 space-y-8">
          <div className="space-y-6">
            <span className="block text-primary md:text-5xl font-bold text-dark leading-tight">Who We Are</span>
            <h2 className="text-2xl md:text-4xl font-bold text-dark leading-tight">
              Modernizing Business with Integrity
            </h2>
          </div>

          <div className="space-y-6 text-text-muted text-lg leading-relaxed">
            <p>
              The name <span className="text-primary font-semibold">Mool</span> stems from the Sanskrit word for <span className="text-primary font-semibold">&quot;Root,&quot;</span> representing our commitment to foundational ethics and core business values.
            </p>
            <p>
              Combined with <span className="text-primary font-semibold">Stone</span>, it symbolizes the unwavering reliability and rock-solid innovation we bring to every project.
            </p>
            <p>
              We don&apos;t just build software; we build the digital backbone that allows your business to scale without compromise, rooted in deep technical expertise and future-ready AI.
            </p>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 relative w-full mt-12 lg:mt-0">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-dark group">
            <Image
              src="/who-we-are.png"
              alt="Digital Innovation Tree"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient Overlay as per image */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
          </div>

          {/* Floating Icon */}
          <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-white z-20">
            <Check size={32} className="text-white" strokeWidth={3} />
          </div>
        </div>
      </div>
    </section>
  );
};
