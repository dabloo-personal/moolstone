"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactForm } from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Pin,
  Settings,
  Handshake,
  Target,
  Layout
} from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center pt-32 pb-20 overflow-hidden bg-white">
        {/* Radial Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-primary rounded-full blur-[120px]" />
          <div className="absolute -inset-20 bg-blue-400 rounded-full blur-[150px] opacity-30" />
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-dark"
          >
            Get Started with Moolstone
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-medium text-gray-700"
          >
            Let&apos;s build something amazing together
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="max-w-2xl mx-auto text-gray-400 leading-relaxed"
          >
            Our core is rooted values so far and innovation advance to serve better. Our world best of some area and
            we serve your industry better solution. We for you all list to help you build great things.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
          >
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-10 py-6 text-lg font-bold shadow-xl shadow-primary/20">
              Get Started Today
            </Button>
            <button className="flex items-center font-bold text-dark hover:text-primary transition-colors group">
              View Our Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <SectionWrapper id="contact-form" className="bg-white pt-0">
        <ContactForm />
      </SectionWrapper>

      {/* Info Section */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-screen-2xl mx-auto">
          <div className="text-center space-y-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
              <Pin size={24} />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-dark uppercase tracking-tight">Moolstone Headquarters</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                12/3 Chanal Street. Store. ADR.<br />
                8900 32 to Blue Street
              </p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
              <Settings size={24} />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-dark uppercase tracking-tight">Innovation Hub</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                786 / Tech Tech. Business. Lake. UK.<br />
                Near Riverside
              </p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
              <Layout size={24} />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-dark uppercase tracking-tight">UK Headquarters</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                900 123 Avenue. Lagos, Office 02.<br />
                Palms and Best
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Addresses Section (Reviews) */}
      <SectionWrapper className="bg-[#fcfcfc]">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl font-bold text-dark">Our Addresses</h2>
          <div className="flex justify-center space-x-1 text-primary">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xl">★</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-2xl mx-auto">
          {[
            {
              quote: "Moolstone delivered a world-class website that exceeded our expectations. Their AI integrations changed our workflow entirely.",
              author: "Sarah J.",
              role: "CEO, TechFlow",
              initial: "S"
            },
            {
              quote: "Working with Moolstone was seamless. They understood our needs and delivered a solution that scaled with our growth.",
              author: "Alex M.",
              role: "Founder, EcomGate",
              initial: "A"
            },
            {
              quote: "Professionalism and timely delivery! Their team felt more like partners than contractors.",
              author: "K. Ross",
              role: "Ops Manager, LogistiX",
              initial: "K"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8 flex flex-col justify-between">
              <p className="text-gray-500 italic leading-relaxed">
                &quot;{item.quote}&quot;
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-primary font-bold">
                  {item.initial}
                </div>
                <div>
                  <h5 className="font-bold text-dark">{item.author}</h5>
                  <p className="text-gray-400 text-xs uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-white">
        <div className="max-w-screen-2xl mx-auto bg-gradient-to-b from-[#fff9f4] to-white rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden flex flex-col items-center">
          <div className="relative z-10 space-y-8 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-dark">Ready to Build Something Amazing?</h2>
            <p className="text-gray-400 text-lg max-w-2xl px-6">
              Let&apos;s transform your idea into a rock-solid digital experience that moves your industry.
            </p>
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-12 py-6 text-xl font-bold shadow-xl shadow-primary/25">
              Connect Us
            </Button>
          </div>

          <div className="absolute right-0 bottom-0 top-0 w-1/3 pointer-events-none opacity-20">
            <Image src="/footer-tree.png" alt="Tree" fill className="object-contain object-right-bottom scale-125" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
