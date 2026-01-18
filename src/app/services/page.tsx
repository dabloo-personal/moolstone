"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { InfiniteScroll } from "@/components/ui/InfiniteScroll";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-white text-center">
        {/* Animated Background Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[length:24px_24px]" />
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-primary/10 rounded-full blur-3xl mix-blend-multiply"
              style={{
                width: Math.random() * 400 + 200,
                height: Math.random() * 400 + 200,
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, Math.random() * 200 - 100],
                x: [0, Math.random() * 200 - 100],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Sunburst Background Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-10">
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
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-dark mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-text-muted text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          >
            We design, build, and scale digital products, intelligent systems, and high-growth marketplaces. <br className="hidden md:block" />
            From idea validation to long-term growth, we help businesses turn technology into measurable results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-10 py-3 text-lg font-bold shadow-xl shadow-primary/25 z-20 relative">
              Get a Free Consultation
            </Button>

            {/* Horizontal Marquee */}
            <div className="w-full max-w-2xl mt-8 opacity-90">
              <InfiniteScroll direction="left" speed={0.8} className="w-full py-4">
                <div className="flex items-center gap-6 px-4">
                  <Link href="/web-development-services">
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-200 px-6 py-2 rounded-full text-sm font-semibold text-slate-700 hover:text-primary hover:border-primary/30 transition-all shadow-sm flex items-center whitespace-nowrap">
                      Explore Solutions <span className="ml-2">→</span>
                    </div>
                  </Link>
                  <Link href="/ecommerce-services">
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-200 px-6 py-2 rounded-full text-sm font-semibold text-slate-700 hover:text-primary hover:border-primary/30 transition-all shadow-sm flex items-center whitespace-nowrap">
                      Explore Marketplace Services <span className="ml-2">→</span>
                    </div>
                  </Link>
                </div>
              </InfiniteScroll>
            </div>
          </motion.div>
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
