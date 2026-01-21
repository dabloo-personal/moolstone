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
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* Compact Contact Hero Section */}
      <section className="relative h-[40vh] min-h-[350px] flex flex-col items-center justify-center text-center pt-24 pb-12 mt-8 md:mt-12 overflow-hidden bg-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[400px] opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-primary rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-dark tracking-tight"
          >
            Connect with Moolstone
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl font-medium text-gray-500 max-w-2xl mx-auto"
          >
            Rooted in values, driven by innovation. Let&apos;s build your industry-leading solution together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
          >
            <Link href="#contact-form">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-10 py-6 text-base font-bold shadow-xl shadow-primary/20">
                Get Started
              </Button>
            </Link>
            <Link href="/services" className="flex items-center font-bold text-dark hover:text-primary transition-colors group text-sm">
              View Our Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Compact Form Section */}
      <SectionWrapper id="contact-form" className="bg-white py-8 md:py-12 pt-0">
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </SectionWrapper>

      {/* Detailed Addresses Section */}
      <SectionWrapper className="bg-dark py-12 pb-16 mx-4 rounded-3xl text-white">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-xl font-bold uppercase tracking-[0.3em] text-primary/80">Our Addresses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Moolstone Headquarters",
              address: "12/3 Chanal Street. Store. ADR. 8900 32 to Blue Street",
              icon: <Pin size={20} />
            },
            {
              title: "Innovation Hub",
              address: "786 / Tech Tech. Business. Lake. UK. Near Riverside",
              icon: <Settings size={20} />
            },
            {
              title: "UK Headquarters",
              address: "900 123 Avenue. Lagos, Office 02. Palms and Best",
              icon: <Layout size={20} />
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-primary mb-1">{item.title}</h4>
                <p className="text-white/80 text-[12px] leading-relaxed font-medium">{item.address}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Reviews Section - Compact but complete */}
      <SectionWrapper className="bg-white py-12">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl font-black text-dark tracking-tight">Client Success Stories</h2>
          <div className="flex justify-center space-x-1 text-primary">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-sm">★</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { quote: "Moolstone delivered a world-class website that exceeded our expectations with AI integrations.", author: "Sarah J.", role: "CEO, TechFlow" },
            { quote: "Working with them was seamless. A solution that scaled perfectly with our rapid growth.", author: "Alex M.", role: "Founder, EcomGate" },
            { quote: "Professionalism and timely delivery! Their team felt like partners than contractors.", author: "K. Ross", role: "Ops Manager" }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col justify-between min-h-[160px]">
              <p className="text-gray-500 text-xs italic leading-relaxed">&quot;{item.quote}&quot;</p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-[10px]">
                  {item.author[0]}
                </div>
                <div>
                  <h5 className="font-bold text-dark text-xs">{item.author}</h5>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section - Consistent Branding */}
      <SectionWrapper className="bg-white py-12 pb-16">
        <div className="max-w-4xl mx-auto bg-dark rounded-[2rem] p-10 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">Ready to Transform Your Future?</h2>
            <p className="text-white/40 text-sm max-w-xl mx-auto">
              Let&apos;s build your unshakeable digital infrastructure. Reach out today and move your industry forward.
            </p>
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-10 py-5 text-base font-bold shadow-lg shadow-primary/20 border-none transition-all hover:-translate-y-1">
              Connect Us
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
