"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { serviceData } from "@/data/services";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function EcommerceServicesPage() {
  const serviceKeys = Object.keys(serviceData);
  const [activeTab, setActiveTab] = useState(serviceKeys[0]);

  const activeService = serviceData[activeTab];

  return (
    <div className="bg-white min-h-screen pt-[64px] md:pt-[72px]">
      {/* Marketplace Hub - Touching Navbar */}
      <SectionWrapper id="marketplace-hub" className="py-2 md:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-6 lg:mb-10 text-center lg:text-left">
            <span className="text-primary font-extrabold text-[10px] uppercase tracking-widest block mb-1">Ecommerce Network</span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-dark tracking-tight leading-none">Master Every Channel</h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">

            {/* Left Column: Grid Selector (Mobile: Scrollable / Desktop: Grid) */}
            <div className="w-full lg:w-[35%] flex lg:grid lg:grid-cols-1 gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 no-scrollbar">
              {serviceKeys.map((key) => {
                const s = serviceData[key];
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`group relative flex-shrink-0 lg:flex-shrink p-3 md:p-4 rounded-xl transition-all duration-300 text-left border flex items-center gap-3 min-w-[140px] lg:min-w-0 ${isActive
                      ? "bg-dark border-dark shadow-xl"
                      : "bg-white border-gray-100 hover:border-primary/20 hover:bg-gray-50 bg-white"
                      }`}
                  >
                    <div
                      className={`p-1.5 md:p-2 rounded-lg transition-colors flex-shrink-0 ${isActive ? "bg-white/10 text-white" : "bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white"}`}
                    >
                      {s.icon && <s.icon size={18} />}
                    </div>
                    <div>
                      <span className={`block text-[11px] md:text-xs font-bold leading-tight ${isActive ? "text-white" : "text-dark"}`}>
                        {s.title}
                      </span>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="active-indicator-ecom-v3"
                        className="absolute right-2 top-1/2 -translate-y-1/2 lg:right-4 w-1.5 h-1.5 bg-primary rounded-full hidden md:block"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic View */}
            <div className="w-full lg:w-[65%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-50/50 rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-8 lg:p-10 border border-gray-100 relative overflow-hidden"
                >
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">

                    {/* Content Section */}
                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <span
                          className="inline-block px-3 py-1 rounded-full text-[9px] font-bold text-white uppercase tracking-wider mb-2"
                          style={{ backgroundColor: activeService.themeColor }}
                        >
                          {activeService.title} Expertise
                        </span>
                        <h2 className="text-xl md:text-3xl font-bold text-dark leading-tight">
                          Growth for {activeService.title}
                        </h2>
                      </div>

                      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        {activeService.description}
                      </p>

                      <div className="space-y-4">
                        <h3 className="text-[10px] font-extrabold text-dark uppercase tracking-widest opacity-40">Core Highlights</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {activeService.features.slice(0, 6).map((item, i) => {
                            const title = typeof item === 'string' ? item : item.title;
                            return (
                              <li key={i} className="flex items-center space-x-2 group/item">
                                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                                  <CheckCircle2 size={10} strokeWidth={3} />
                                </div>
                                <span className="text-[11px] md:text-xs font-bold text-dark truncate">{title}</span>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>

                    {/* Image Column with Actions */}
                    <div className="space-y-4 md:space-y-6">
                      <div className="relative aspect-video md:aspect-[4/3] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-white bg-white">
                        {activeService.image ? (
                          <Image
                            src={activeService.image}
                            alt={activeService.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div
                            className="w-full h-full bg-gradient-to-br opacity-20"
                            style={{ backgroundImage: `linear-gradient(to bottom right, ${activeService.gradientFrom}, ${activeService.gradientTo})` }}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <Link href="/contact" className="w-full sm:w-auto">
                          <Button size="lg" className="w-full sm:w-auto rounded-full bg-dark hover:bg-black text-white text-xs md:text-sm font-bold group shadow-xl shadow-dark/10 flex items-center justify-center">
                            Scale Your Brand
                            <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                          </Button>
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto">
                          <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-all font-bold bg-white flex items-center justify-center">
                            Get Channel Audit
                          </Button>
                        </Link>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Tight Stats Bar */}
      <div className="bg-[#12110c] py-8 md:py-12 px-6 mx-4 rounded-[1.5rem] md:rounded-[2.5rem] mb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 text-center">
          {[
            { value: "500+", label: "Global Brands" },
            { value: "40%", label: "ROAS Lift" },
            { value: "10M+", label: "Units Sold" },
            { value: "24/7", label: "Account Health" }
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-[8px] md:text-[10px] font-bold text-white/40 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Ready to Scale Section - Compressed */}
      <SectionWrapper className="bg-white pb-20 pt-0">
        <div className="max-w-screen-2xl mx-auto bg-[#fff9f4] rounded-[1.5rem] md:rounded-[3.5rem] p-10 md:p-20 text-center">
          <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-5xl font-bold text-dark tracking-tight">Ready to Dominate Your Market?</h2>
            <p className="text-gray-500 text-sm md:text-lg">
              Partner with the experts who have scaled 500+ global brands across every major marketplace.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-12 py-6 text-lg font-bold shadow-xl shadow-primary/30">
                  Activate Growth Engine
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
