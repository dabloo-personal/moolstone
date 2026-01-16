"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white text-center">
        {/* Sunburst Background Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-5">
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-full h-[1px] bg-dark origin-left"
              style={{ transform: `rotate(${i * 15}deg) translateX(0)` }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-dark mb-6">Our Services</h1>
          <p className="text-text-muted text-lg md:text-xl mb-12">
            Rooted in innovation, built for your success.
          </p>
          <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-12 py-4 text-lg font-bold shadow-xl shadow-primary/25">
            Get a Quote
          </Button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 h-px bg-gray-100" />

      {/* Services Comparison */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 relative">
          {/* Vertical Divider Line handled by gap and parent bg */}

          {/* Development / AI Automation */}
          <div className="bg-white py-12 md:pr-16 space-y-12">
            <h2 className="text-3xl font-bold text-dark">Development / AI Automation</h2>

            <ul className="space-y-6">
              {[
                "Web Development",
                "Web Development",
                "UI/UX Development",
                "UI/UX Development",
                "Automation",
                "AI Customization",
                "Other Marketplaces"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-text-muted hover:text-primary transition-colors cursor-default">
                  <span className="text-primary mr-4 decoration-skip-ink font-bold">➤</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/web-development-services">
              <Button className="rounded-full bg-primary hover:bg-primary-dark px-10 group">
                Explore Development
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </Link>
          </div>

          {/* E-Commerce */}
          <div className="bg-white py-12 md:pl-16 space-y-12">
            <h2 className="text-3xl font-bold text-dark">E-Commerce</h2>

            <ul className="space-y-6">
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
                <li key={i}>
                  <Link href={`/services/${item.slug}`} className="flex items-center text-text-muted hover:text-primary transition-colors cursor-pointer group">
                    <span className="text-primary mr-4 font-bold group-hover:translate-x-1 transition-transform">➤</span>
                    <span className="text-lg border-b border-transparent group-hover:border-primary/30">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link href="/ecommerce-services">
              <Button className="rounded-full bg-primary hover:bg-primary-dark px-10 group">
                Explore E-commerce
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </Link>
          </div>

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
      <SectionWrapper className="bg-white pb-32">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-dark">Our Clients&apos; Success Stories</h2>
          <div className="flex justify-center space-x-1 text-primary">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="text-xl">★</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 1 */}
          <div className="bg-[#f5f5f5] p-12 rounded-3xl space-y-6 relative group hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-dark">Our Clients&apos; Success Stories</h3>
            <p className="text-gray-500 leading-relaxed max-w-sm">
              To assist our clients in all matters of their global business setup and digital presence needs.
            </p>
            <div className="pt-4 text-gray-400 text-sm font-medium">Aslam for Amazon</div>
            <div className="absolute bottom-8 right-8 text-gray-300 group-hover:text-primary transition-colors">
              <span className="text-2xl font-bold tracking-tighter">&gt;&gt;&gt;</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f5f5f5] p-12 rounded-3xl space-y-6 relative group hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-dark">Our Clients&apos; Success Stories</h3>
            <p className="text-gray-500 leading-relaxed max-w-sm">
              The direct results and success stories from our client who transitioned from local and global marketplaces with our solutions.
            </p>
            <div className="pt-4 text-gray-400 text-sm font-medium">The joy of client success services</div>
            <div className="absolute bottom-8 right-8 text-gray-300 group-hover:text-primary transition-colors">
              <span className="text-2xl font-bold tracking-tighter">&gt;&gt;&gt;</span>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
