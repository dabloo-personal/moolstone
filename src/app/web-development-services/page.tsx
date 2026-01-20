"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { webServiceData } from "@/data/services";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function WebDevelopmentServicesPage() {
  const serviceKeys = Object.keys(webServiceData);
  const [activeTab, setActiveTab] = useState(serviceKeys[0]);

  const activeService = webServiceData[activeTab];

  return (
    <div className="bg-white min-h-screen pt-[64px] md:pt-[72px]">
      {/* Services Explorer - Touching Navbar */}
      <SectionWrapper id="explorer" className="py-2 md:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-start">

            {/* Left Column: Interactive Nav */}
            <div className="w-full lg:w-1/4 flex flex-col space-y-1 lg:sticky lg:top-24">
              <div className="mb-4 lg:mb-6">
                <span className="text-primary font-extrabold text-[10px] uppercase tracking-widest block mb-1">Web Services</span>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-dark tracking-tight leading-none">Our Solutions</h1>
              </div>

              <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 gap-2 no-scrollbar">
                {serviceKeys.map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`group flex-shrink-0 lg:flex-shrink flex items-center justify-between p-3 lg:p-4 rounded-xl transition-all duration-300 text-left border ${activeTab === key
                      ? "bg-dark text-white border-dark shadow-lg lg:translate-x-1"
                      : "bg-white text-dark border-gray-100 hover:border-primary/30 hover:bg-gray-50"
                      }`}
                  >
                    <span className="font-bold text-xs lg:text-sm whitespace-nowrap lg:whitespace-normal">{webServiceData[key].title}</span>
                    <ChevronRight
                      size={14}
                      className={`hidden lg:block transition-transform duration-300 ${activeTab === key ? "translate-x-1" : "opacity-0 group-hover:opacity-100"}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Content Area */}
            <div className="w-full lg:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-50/50 rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-8 lg:p-10 border border-gray-100"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4 md:space-y-6">
                      <div
                        className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-white"
                        style={{ backgroundColor: activeService.themeColor }}
                      >
                        {activeService.icon && <activeService.icon size={22} />}
                      </div>

                      <div className="space-y-2">
                        <h2 className="text-xl md:text-3xl font-bold text-dark leading-tight">
                          {activeService.title}
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                          {activeService.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-[10px] font-extrabold text-dark uppercase tracking-widest opacity-40">Core Features</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {activeService.features.map((item, i) => {
                            const title = typeof item === 'string' ? item : item.title;
                            return (
                              <li key={i} className="flex items-start space-x-2 group">
                                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                  <CheckCircle2 size={10} strokeWidth={3} />
                                </div>
                                <span className="font-bold text-dark text-xs">{title}</span>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>

                    {/* Image & Buttons Section */}
                    <div className="space-y-4 md:space-y-6">
                      <div className="relative aspect-video md:aspect-[4/3] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-white">
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Link href="/contact" className="w-full sm:w-auto">
                          <Button size="lg" className="w-full sm:w-auto rounded-full bg-dark hover:bg-black text-white group shadow-xl shadow-dark/10 flex items-center justify-center">
                            Start Your Project
                            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                          </Button>
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto">
                          <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center">
                            Check Pricing
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

      {/* Ultra Tight Stats Bar */}
      <div className="bg-[#12110c] py-8 md:py-12 px-6 mx-4 rounded-[1.5rem] md:rounded-[2.5rem] mb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 text-center">
          {[
            { value: "50+", label: "Web Projects" },
            { value: "98%", label: "Retention" },
            { value: "3x", label: "Traffic Growth" },
            { value: "24/7", label: "Support" }
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-2xl md:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-[8px] md:text-[10px] font-bold text-white/40 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Action Section - Compressed */}
      <SectionWrapper className="bg-white pb-16 pt-0">
        <div className="max-w-screen-2xl mx-auto bg-[#fff9f4] rounded-[1.5rem] md:rounded-[3rem] p-8 md:p-16 text-center">
          <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-5xl font-bold text-dark">Ready to Build Something Great?</h2>
            <p className="text-gray-500 text-sm md:text-lg">
              Transform your digital vision into a high-performance reality with our expert team.
            </p>
            <div className="pt-2">
              <Link href="/contact">
                <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-10 py-6 text-lg font-bold shadow-xl shadow-primary/30">
                  Connect with Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
