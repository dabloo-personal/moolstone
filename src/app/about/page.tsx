"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  Settings,
  Handshake,
  Target,
  Search,
  Layout,
  Star
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <>
      {/* Compact Hero Section */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-white text-center pt-20">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#f27b21" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotGrid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-dark tracking-tight"
          >
            About Moolstone
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl font-medium text-gray-500 max-w-2xl mx-auto"
          >
            Building Digital Amazing Together. Real values, rock-solid excellence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="pt-4"
          >
            <Link href="/contact#contact-form">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-10 py-6 text-base font-bold shadow-lg shadow-primary/20">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Story & Vision */}
      <SectionWrapper className="bg-white py-12">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-black text-dark tracking-tight">Our Story & Vision</h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            Moolstone was built on the foundation of technical excellence and strategic innovation. We bridge the gap between complex digital challenges and high-performance solutions, ensuring your brand stands solid in an ever-evolving market.
          </p>
        </div>
      </SectionWrapper>

      {/* Services and Excellence - Merged for efficiency */}
      <SectionWrapper className="bg-white py-12 pt-0">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-[#fcfcfc] p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-dark border-l-4 border-primary pl-4">Comprehensive Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-dark uppercase tracking-wider text-primary">E-commerce</h4>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li>• Marketplace integration</li>
                  <li>• Logistics Support</li>
                  <li>• Growth Strategy</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-dark uppercase tracking-wider text-primary">Software</h4>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li>• Custom Development</li>
                  <li>• Cloud Solutions</li>
                  <li>• Tech Consulting</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-dark p-8 md:p-10 rounded-3xl text-white space-y-6">
            <h3 className="text-xl font-bold">Operational Excellence</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { title: "Quality", icon: <Settings size={20} /> },
                { title: "Trust", icon: <Handshake size={20} /> },
                { title: "Design", icon: <Layout size={20} /> }
              ].map((item, i) => (
                <div key={i} className="text-center space-y-2">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-primary mx-auto">
                    {item.icon}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest">{item.title}</div>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-xs leading-relaxed text-center">
              We ensure every project delivers measurable success for your brand.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Commitment to Excellence - Compact */}
      <SectionWrapper className="bg-white py-12 pt-0">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-dark uppercase tracking-widest text-gray-400">Our Core Pillars</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { title: "Quality", icon: <Settings size={20} /> },
              { title: "Design", icon: <Layout size={20} /> },
              { title: "Strategy", icon: <Target size={20} /> }
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary mx-auto">
                  {item.icon}
                </div>
                <h4 className="text-xs font-bold text-dark uppercase">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Bottom CTA - Compact */}
      <SectionWrapper className="bg-white py-12">
        <div className="max-w-4xl mx-auto bg-dark rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden flex flex-col items-center">
          <div className="relative z-10 space-y-6 flex flex-col items-center">
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">Ready to Transform Your Future?</h2>
            <p className="text-white/40 text-sm max-w-xl mx-auto">
              Let&apos;s build your unshakeable digital infrastructure. Reach out today and move your industry forward.
            </p>
            <Link href="/contact#contact-form">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-10 py-6 text-base font-bold shadow-lg shadow-primary/20 border-none transition-all hover:-translate-y-1">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
