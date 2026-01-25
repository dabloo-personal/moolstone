"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactForm } from "@/components/sections/ContactForm";
import { TestimonialMarquee } from "@/components/sections/TestimonialMarquee";
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

            <Link href="/services">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark text-white px-10 py-6 text-base font-bold shadow-xl shadow-primary/20 flex items-center gap-2 group transition-all hover:-translate-y-1">
                View Our Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
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
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">Our Addresses</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              address: "CN601, Gali No. 3, Sultanpur, New Delhi - 110030",
              icon: <Pin size={20} />
            },
            {
              address: "3RD Floor, Naseeb Regency, Anisabad, Police Colony, Patna 800002",
              icon: <Pin size={20} />
            },
            {
              address: "B.Polytechnic, Near Vivah Bhawan, Babudih, Dhanbad, Jharkhand 828130",
              icon: <Pin size={20} />
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1">
                <p className="text-white/80 text-[12px] leading-relaxed font-medium">{item.address}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Reviews Section */}
      < SectionWrapper className="bg-white py-12 pb-0" >
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl font-black text-dark tracking-tight">Client Success Stories</h2>
          <div className="flex justify-center space-x-1 text-primary">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-sm">★</span>
            ))}
          </div>
        </div>
        <div className="w-full relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <TestimonialMarquee />
        </div>
      </SectionWrapper >

      {/* CTA Section - Consistent Branding */}
      < SectionWrapper className="bg-white py-12 pb-16" >
        <div className="max-w-4xl mx-auto bg-dark rounded-[2rem] p-10 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">Ready to Transform Your Future?</h2>
            <p className="text-white/40 text-sm max-w-xl mx-auto">
              Let&apos;s build your unshakeable digital infrastructure. Reach out today and move your industry forward.
            </p>
            <Link
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact-form');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  // Update URL without jump
                  window.history.pushState(null, '', '#contact-form');
                }
              }}
            >
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-10 py-5 text-base font-bold shadow-lg shadow-primary/20 border-none transition-all hover:-translate-y-1">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper >
    </>
  );
}
