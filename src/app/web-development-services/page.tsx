"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  Settings,
  Handshake,
  Target,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WebDevelopmentServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-dark">
        <Image
          src="/web-dev-hero.png"
          alt="Web Development Services"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />

        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Web Development Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80 mb-10"
            >
              Innovating Digital Experiences
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-12 py-6 text-xl font-bold">
                Submit
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <SectionWrapper className="bg-white overflow-hidden relative">
        {/* Background Grid Accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-5">
          <div className="grid grid-cols-10 grid-rows-10 w-full h-full border-t border-r border-dark">
            {[...Array(100)].map((_, i) => (
              <div key={i} className="border-b border-l border-dark/20" />
            ))}
          </div>
        </div>

        <div className="text-center mb-20 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">What We Offer</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-screen-2xl mx-auto relative z-10">
          {/* Card 1 */}
          <div className="bg-white p-12 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 space-y-8 relative group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <Settings size={32} />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-dark">Automation & AI Solutions</h3>
              <ul className="space-y-4 text-gray-500">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                  Intelligent Workflow Automation
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                  Data & Data Science
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                  Generative AI Development
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                  Data Insight
                </li>
              </ul>
            </div>
            <div className="absolute bottom-8 right-8 w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary/40 group-hover:bg-primary group-hover:text-white transition-all cursor-pointer">
              <ArrowRight size={20} />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-12 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 space-y-8 relative group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <Settings size={32} />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-dark">UI/UX & Web Development</h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                Uebisea forms esencia velit ad desgn tality tech development and clarity focus.
              </p>
            </div>
            <div className="absolute bottom-8 right-8 w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary/40 group-hover:bg-primary group-hover:text-white transition-all cursor-pointer">
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Process Section (Timeline) */}
      <SectionWrapper className="bg-gray-50">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-dark">Our Process</h2>
        </div>

        <div className="max-w-5xl mx-auto relative px-6">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {[
              { num: "1", title: "Discover & Plan", icon: "?" },
              { num: "2", title: "Design & Develop", icon: "⚙" },
              { num: "3", title: "Test Launch", icon: "✔" },
              { num: "4", title: "Support & Evolve", icon: "♾" }
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-primary transition-colors relative z-20">
                  <span className="text-2xl text-dark group-hover:text-primary transition-colors">{step.icon}</span>
                </div>
                <h4 className="text-lg font-bold text-dark mb-2">{step.num}. {step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Core Values Section */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-dark">Our Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-2xl mx-auto">
          {[
            {
              title: "Quality & Craftsmanship",
              desc: "Every line of code is written with precision and long-term scalability in mind.",
              icon: <Settings size={32} />
            },
            {
              title: "Reliability & Trust",
              desc: "Desprience is the trust direct in client results and success.",
              icon: <Handshake size={32} />
            },
            {
              title: "Client-Centric Approach",
              desc: "Your goals are our goals. We work as an extension of your team.",
              icon: <Target size={32} />
            }
          ].map((value, i) => (
            <div key={i} className="bg-[#fcfcfc] p-12 rounded-[2.5rem] text-center space-y-6 hover:shadow-xl transition-shadow border border-gray-50">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-dark">{value.title}</h4>
              <p className="text-gray-500 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Commitment & CTA Section */}
      <SectionWrapper className="bg-gray-50 pb-0">
        <div className="max-w-screen-2xl mx-auto bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-200/50 flex flex-col md:row relative">
          <div className="p-12 md:p-20 flex-1 space-y-12">
            <div className="space-y-6">
              <h4 className="text-primary font-bold tracking-widest uppercase">Commitment to Excellence</h4>
              <h2 className="text-4xl font-bold text-dark">Our Process</h2>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h5 className="text-xl font-bold text-dark">Web Development Excellence</h5>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    Enterprise Plan
                  </li>
                </ul>
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-dark">Ready to Build Something Amazing?</h2>
                <p className="text-gray-400 text-lg">
                  Get started with your vision of a next-level digital experience for your brand and business.
                </p>
                <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-12 py-6 text-xl font-bold">
                  Connect Us
                </Button>
              </div>
            </div>
          </div>

          <div className="relative w-full md:w-1/3 min-h-[400px]">
            <div className="absolute inset-0 bg-primary/5 overflow-hidden">
              <Image
                src="/footer-tree.png"
                alt="Tree Accent"
                fill
                className="object-contain object-bottom scale-125 opacity-40 translate-x-12 translate-y-12"
              />
            </div>
          </div>
        </div>
        <div className="h-24 md:h-32" /> {/* Spacing */}
      </SectionWrapper>
    </>
  );
}
