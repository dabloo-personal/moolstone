"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ChevronRight, Play, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { InfiniteScroll } from "@/components/ui/InfiniteScroll";
import DynamicBackground from "@/components/ui/DynamicBackground";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-white">
        <DynamicBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-bold text-sm tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Next-Gen Digital Solutions
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1.1] tracking-tighter text-left">
              Build Your <br />
              <span className="text-orange-500">Future</span> With Us.
            </h1>

            <p className="text-slate-500 text-lg md:text-2xl leading-relaxed max-w-xl text-left">
              We integrate high-end AI automation and world-class E-commerce strategies to transform your business into a market leader.
            </p>

            <div className="flex flex-col items-start gap-4 pt-4">
              <div className="flex items-center gap-2 text-slate-600 font-medium text-sm md:text-base">
                <CheckCircle2 size={18} className="text-orange-500 shrink-0" />
                <span className="text-left">Top Rated Managed Services Provider</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 font-medium text-sm md:text-base">
                <CheckCircle2 size={18} className="text-orange-500 shrink-0" />
                <span className="text-left">24/7 Dedicated Operational Support</span>
              </div>
            </div>

            {/* Horizontal Marquee (Restored) */}
            <div className="w-full max-w-2xl mt-8 opacity-90 -mx-4 md:mx-0">
              <InfiniteScroll direction="left" speed={0.8} className="w-full py-4 overflow-visible">
                <div className="flex items-center gap-4 px-4 overflow-visible">
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
          </motion.div>

          {/* Abstract Graphic Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex justify-center relative"
          >
            {/* Main Card Graphic */}
            <div className="relative w-full max-w-md aspect-square rounded-[3rem] bg-slate-900 shadow-2xl overflow-hidden border-8 border-white/10 group">
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
                className="absolute top-1/4 -right-10 w-32 h-32 bg-white rounded-3xl shadow-2xl p-6 flex flex-col justify-center items-center gap-2 border border-slate-50"
              >
                <div className="text-orange-500 font-black text-2xl">100%</div>
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest text-center">Satisfaction</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-1/4 -left-10 w-40 h-24 bg-orange-500 rounded-3xl shadow-2xl p-6 flex flex-col justify-center border-4 border-white"
              >
                <div className="text-white font-black text-lg italic tracking-tighter">PROJECTS</div>
                <div className="w-full h-1 bg-white/30 rounded-full mt-2 overflow-hidden">
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
            className="bg-white py-8 md:pr-16 space-y-6 flex flex-col h-[500px]"
          >
            <div className="flex-shrink-0">
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3">Web Development & AI Automation</h2>
              <p className="text-text-muted leading-relaxed text-sm md:text-base">
                We design and engineer high-performance digital products using modern frameworks, scalable architectures, and intelligent automation.
              </p>
            </div>

            <div className="flex-grow relative overflow-hidden">
              <InfiniteScroll direction="up" speed={0.5} className="h-[300px]">
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

            <div className="flex-shrink-0 pt-4">
              <Link href="/web-development-services">
                <Button className="rounded-full bg-primary hover:bg-primary-dark px-8 py-2 text-base group w-full md:w-auto">
                  Explore Solutions
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
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
            className="bg-white py-8 md:pl-16 space-y-6 flex flex-col h-[500px]"
          >
            <div className="flex-shrink-0">
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3">Ecommerce Services</h2>
              <p className="text-text-muted leading-relaxed text-sm md:text-base">
                End-to-end seller enablement across India’s top marketplaces, from onboarding to scale.
              </p>
            </div>

            <div className="flex-grow relative overflow-hidden">
              <InfiniteScroll direction="up" speed={0.5} className="h-[300px]">
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

            <div className="flex-shrink-0 pt-4">
              <Link href="/ecommerce-services">
                <Button className="rounded-full bg-primary hover:bg-primary-dark px-8 py-2 text-base group w-full md:w-auto">
                  Explore Marketplace Services
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
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
      <SectionWrapper className="bg-white pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 space-y-3"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark">Client Success Stories</h2>
          <div className="flex justify-center space-x-1 text-primary">
            {[...Array(6)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-xl"
              >
                ★
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#f5f5f5] p-8 md:p-10 rounded-3xl space-y-5 relative group hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg md:text-xl font-bold text-dark">From Zero to Consistent Sales on Amazon</h3>
            <p className="text-gray-500 leading-relaxed max-w-sm text-sm md:text-base">
              We helped streamline catalog setup, optimize listings, and automate operations, enabling predictable monthly growth.
            </p>
            <div className="pt-2 text-gray-400 text-sm font-medium">Aslam • Amazon Seller</div>
            <div className="absolute bottom-6 right-6 text-gray-300 group-hover:text-primary transition-colors">
              <span className="text-xl font-bold tracking-tighter">&gt;&gt;&gt;</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#f5f5f5] p-8 md:p-10 rounded-3xl space-y-5 relative group hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg md:text-xl font-bold text-dark">Scaling Local Sellers to National Marketplaces</h3>
            <p className="text-gray-500 leading-relaxed max-w-sm text-sm md:text-base">
              Our marketplace strategy and operational support enabled seamless expansion across multiple platforms.
            </p>
            <div className="pt-2 text-gray-400 text-sm font-medium">Multi-Marketplace Seller • India</div>
            <div className="absolute bottom-6 right-6 text-gray-300 group-hover:text-primary transition-colors">
              <span className="text-xl font-bold tracking-tighter">&gt;&gt;&gt;</span>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
