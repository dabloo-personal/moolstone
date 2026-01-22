"use client";

import { useState, useEffect } from 'react';
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { ClientSuccessStories } from "@/components/sections/ClientSuccessStories";
import { ArrowRight, ChevronRight, Play, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { InfiniteScroll } from "@/components/ui/InfiniteScroll";
import DynamicBackground from "@/components/ui/DynamicBackground";

export default function ServicesPage() {
  const [blobs, setBlobs] = useState<Array<{ width: number; height: number; top: string; left: string; y: number; x: number; duration: number }>>([]);

  useEffect(() => {
    setBlobs([...Array(8)].map(() => ({
      width: Math.random() * 400 + 200,
      height: Math.random() * 400 + 200,
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      y: Math.random() * 200 - 100,
      x: Math.random() * 200 - 100,
      duration: Math.random() * 15 + 15,
    })));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90dvh] flex flex-col justify-center pt-[96px] md:pt-[110px] pb-16 bg-white text-center">
        <DynamicBackground />
        {/* Animated Background Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[length:24px_24px]" />
          {blobs.map((blob, i) => (
            <motion.div
              key={i}
              className="absolute bg-primary/10 rounded-full blur-3xl mix-blend-multiply"
              style={{
                width: blob.width,
                height: blob.height,
                top: blob.top,
                left: blob.left,
              }}
              animate={{
                y: [0, blob.y],
                x: [0, blob.x],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: blob.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Sunburst Background Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] pointer-events-none opacity-10">
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{ delay: i * 0.05, duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 w-full h-[1px] bg-dark origin-left"
              style={{ transform: `rotate(${i * 15}deg) translateX(0)` }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl text-5xl md:text-6xl font-bold text-dark mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-text-muted text-base md:text-xl mb-8 max-w-3xl mx-auto px-2"
          >
            We design, build, and scale digital products, intelligent systems, and high-growth marketplaces. <br className="hidden md:block" />
            From idea validation to long-term growth, we help businesses turn technology into measurable results.
          </motion.p>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-bold text-sm tracking-widest uppercase mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Next-Gen Digital Solutions
              </div>

              <h1 className="text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.1] tracking-tight sm:tracking-tighter text-center lg:text-left">
                Build Your <br className="hidden md:block" />
                <span className="text-orange-500">Future</span> With Us.
              </h1>

              <p className="text-slate-500 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                We integrate high-end AI automation and world-class E-commerce strategies to transform your business into a market leader.
              </p>

              <div className="flex flex-col items-center lg:items-start gap-4 pt-4">
                <div className="flex items-center gap-2 text-slate-600 font-medium text-sm md:text-base">
                  <CheckCircle2 size={18} className="text-orange-500 shrink-0" />
                  <span className="text-left">Top Rated Managed Services Provider</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 font-medium text-sm md:text-base">
                  <CheckCircle2 size={18} className="text-orange-500 shrink-0" />
                  <span className="text-left">24/7 Dedicated Operational Support</span>
                </div>
              </div>

              {/* Hero Transitions / Call to Actions */}
              <div className="w-full max-w-2xl mt-8 opacity-90 mx-auto lg:mx-0">
                {/* Mobile: Stacked Buttons */}
                <div className="flex flex-col gap-4 sm:hidden">
                  <Link href="/web-development-services" className="w-full">
                    <div className="bg-white/95 backdrop-blur-md border border-orange-100 px-6 py-4 rounded-3xl text-sm font-bold text-slate-800 shadow-md flex items-center justify-between">
                      Explore Solutions <span className="text-orange-500">→</span>
                    </div>
                  </Link>
                  <Link href="/ecommerce-services" className="w-full">
                    <div className="bg-white/95 backdrop-blur-md border border-orange-100 px-6 py-4 rounded-3xl text-sm font-bold text-slate-800 shadow-md flex items-center justify-between">
                      Explore Marketplace Services <span className="text-orange-500">→</span>
                    </div>
                  </Link>
                </div>

                {/* Tablet/Desktop: Horizontal Marquee */}
                <div className="hidden sm:block overflow-hidden rounded-full">
                  <InfiniteScroll direction="left" speed={0.8} className="w-full py-4">
                    <div className="flex items-center gap-4 px-4">
                      <Link href="/web-development-services">
                        <div className="bg-white/95 backdrop-blur-md border border-orange-100 px-6 py-3 rounded-full text-sm font-bold text-slate-800 hover:text-orange-600 hover:border-orange-500 transition-all shadow-md flex items-center whitespace-nowrap">
                          Explore Solutions <span className="ml-2">→</span>
                        </div>
                      </Link>
                      <Link href="/ecommerce-services">
                        <div className="bg-white/95 backdrop-blur-md border border-orange-100 px-6 py-3 rounded-full text-sm font-bold text-slate-800 hover:text-orange-600 hover:border-orange-500 transition-all shadow-md flex items-center whitespace-nowrap">
                          Explore Marketplace Services <span className="ml-2">→</span>
                        </div>
                      </Link>
                    </div>
                  </InfiniteScroll>
                </div>
              </div>
            </motion.div>

            {/* Abstract Graphic Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex justify-center relative w-full lg:w-auto"
            >
              {/* Main Card Graphic */}
              <div className="relative w-full max-w-[240px] xs:max-w-xs sm:max-w-md lg:max-w-lg aspect-square rounded-[2rem] sm:rounded-[3rem] bg-slate-900 shadow-2xl overflow-hidden border-4 sm:border-8 border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 opacity-20 group-hover:opacity-40 transition-opacity" />

                <div className="absolute inset-0 p-12 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-orange-500 animate-pulse" />
                    </div>
                    <div className="text-white/40 text-sm font-mono tracking-widest uppercase">System_Active</div>
                  </div>

                  <div className="space-y-4">
                    <div className="h-4 w-3/4 bg-white/20 rounded-full" />
                    <div className="h-4 w-1/2 bg-white/20 rounded-full" />
                    <div className="h-4 w-5/6 bg-white/20 rounded-full" />
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="text-4xl font-black text-white italic">50+</div>
                    <div className="text-orange-400 text-sm font-bold uppercase tracking-tight">Active Sellers</div>
                  </div>
                </div>

                {/* Floating UI Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="hidden lg:flex absolute top-1/4 -right-10 w-32 h-32 bg-white rounded-3xl shadow-2xl p-6 flex-col justify-center items-center gap-2 border border-slate-50"
                >
                  <div className="text-orange-500 font-black text-xl sm:text-2xl">100%</div>
                  <div className="text-slate-400 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-center">Satisfaction</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="hidden lg:flex absolute bottom-1/4 -left-10 w-40 h-24 bg-orange-500 rounded-3xl shadow-2xl p-6 flex-col justify-center border-4 border-white"
                >
                  <div className="text-white font-black text-sm sm:text-lg italic tracking-tighter">PROJECTS</div>
                  <div className="w-full h-1 bg-white/30 rounded-full mt-1 sm:mt-2 overflow-hidden">
                    <motion.div
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-1/2 h-full bg-white"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </section>

      <div className="max-w-7xl mx-auto px-6 h-px bg-gray-100" />

      {/* Services Comparison */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 relative">
          {/* Vertical Divider Line handled by gap and parent bg */}

          {/* Development / AI Automation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white py-8 md:pr-16 space-y-6 flex flex-col md:h-[500px]"
          >
            <div className="flex-shrink-0">
              <h2 className="text-xl md:text-3xl font-bold text-dark mb-3">Web Development & AI Automation</h2>
              <p className="text-text-muted leading-relaxed text-sm md:text-base">
                We design and engineer high-performance digital products using modern frameworks, scalable architectures, and intelligent automation.
              </p>
            </div>

            <div className="flex-grow relative overflow-hidden">
              <InfiniteScroll direction="up" speed={0.5} className="h-[250px] sm:h-[300px]">
                {[
                  { name: "Full-Stack Web Development", slug: "full-stack-web-development" },
                  { name: "E-commerce & UI/UX Design", slug: "ecommerce-ui-ux-design" },
                  { name: "AI & Social Media Automation", slug: "ai-social-media-automation" },
                  { name: "SEO & Google Maps Onboarding", slug: "seo-google-maps-onboarding" },
                  { name: "Site Migrations & Maintenance", slug: "site-migrations-maintenance" }
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={`/web-development-services#${item.slug}`}
                    className="flex items-center p-4 rounded-xl bg-gray-50 hover:bg-primary/5 hover:text-primary transition-all cursor-pointer group border border-transparent hover:border-primary/10 no-underline hover:no-underline"
                  >
                    <span className="text-primary mr-3 decoration-skip-ink font-bold group-hover:scale-110 transition-transform">➤</span>
                    <span className="font-medium text-dark group-hover:text-primary">{item.name}</span>
                  </Link>
                ))}
              </InfiniteScroll>
            </div>

            <div className="flex-shrink-0 pt-4 flex flex-wrap gap-4">
              <Link href="/web-development-services">
                <Button className="rounded-full bg-primary hover:bg-primary-dark px-8 py-2 text-base group w-full md:w-auto">
                  Explore Solutions
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="rounded-full px-6 py-2 text-sm group w-full md:w-auto bg-primary hover:bg-primary-dark text-white transition-colors">
                  Start Project
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* E-Commerce */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white py-8 md:pl-16 space-y-6 flex flex-col md:h-[500px]"
          >
            <div className="flex-shrink-0">
              <h2 className="text-xl md:text-3xl font-bold text-dark mb-3">Ecommerce Services</h2>
              <p className="text-text-muted leading-relaxed text-sm md:text-base">
                End-to-end seller enablement across India’s top marketplaces, from onboarding to scale.
              </p>
            </div>

            <div className="flex-grow relative overflow-hidden">
              <InfiniteScroll direction="up" speed={0.5} className="h-[250px] sm:h-[300px]">
                {[
                  { name: "Amazon Seller Services", slug: "amazon-seller-services" },
                  { name: "Flipkart Seller Services", slug: "flipkart-seller-services" },
                  { name: "Alibaba Seller Services", slug: "alibaba-seller-services" },
                  { name: "Tata Cliq Seller Services", slug: "tata-cliq-seller-services" },
                  { name: "Reliance JioMart Seller Services", slug: "reliance-jiomart-seller-services" },
                  { name: "Blinkit Seller Services", slug: "blinkit-seller-services" },
                  { name: "Meesho Seller Services", slug: "meesho-seller-services" },
                  { name: "Zomato Seller Services", slug: "zomato-seller-services" },
                  { name: "Swiggy Seller Services", slug: "swiggy-seller-services" }
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={`/services/${item.slug}`}
                    className="flex items-center p-4 rounded-xl bg-gray-50 hover:bg-primary/5 hover:text-primary transition-all cursor-pointer group border border-transparent hover:border-primary/10 no-underline hover:no-underline"
                  >
                    <span className="text-primary mr-3 font-bold group-hover:scale-110 transition-transform">➤</span>
                    <span className="font-medium text-dark group-hover:text-primary">{item.name}</span>
                  </Link>
                ))}
              </InfiniteScroll>
            </div>

            <div className="flex-shrink-0 pt-4 flex flex-wrap gap-4">
              <Link href="/ecommerce-services">
                <Button className="rounded-full bg-primary hover:bg-primary-dark px-8 py-2 text-base group w-full md:w-auto">
                  Explore Marketplace Services
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="rounded-full px-6 py-2 text-sm group w-full md:w-auto bg-primary hover:bg-primary-dark text-white transition-colors">
                  Start Selling
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Tree Icon Divider */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-sm overflow-hidden p-2">
              <div className="w-full h-full relative">
                <Image
                  src="/services-tree.png"
                  alt="Moolstone Tree"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <div className="max-w-7xl mx-auto px-6 h-px bg-gray-100" />

      {/* Success Stories */}
      <ClientSuccessStories />
    </>
  );
}
