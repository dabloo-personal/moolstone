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
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-white text-center">
        {/* Soft Network Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#f27b21" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotGrid)" />
            {/* Lines connecting dots */}
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="#f27b21" strokeWidth="0.5" strokeDasharray="10 20" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="#f27b21" strokeWidth="0.5" strokeDasharray="10 20" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-dark mb-6"
          >
            About Moolstone
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-medium text-gray-700 mb-10"
          >
            Building Digital amazing Together
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-12 py-4 text-lg font-bold shadow-xl shadow-primary/25">
              Submit
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Story & Vision */}
      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-dark">Our Story & Vision</h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            The two hvet solied come fbs prvst tainar the ewor nearlong our listed rune tra two
            thet avanti bele begart tam m-and-bure shine the built of the gve height revw our good
            bless vis geare.
          </p>
        </div>
      </SectionWrapper>

      {/* Comprehensive Services */}
      <SectionWrapper className="bg-white pt-0">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          {/* Card 1 */}
          <div className="bg-[#fcfcfc] p-12 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
            <h3 className="text-2xl font-bold text-dark">Comprehensive Servions</h3>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-dark">E-commerce Solutions</h4>
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  Flipart secar Solutions
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  Marketplace integration (Amazon (Amazon) and Other
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  Logistics Support
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fcfcfc] p-12 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
            <h4 className="text-xl font-bold text-dark">Web Software Services</h4>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                Custom Web Jio Mart seller Servien
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                Paymem App Development (Barmem as data and Other
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                Cloud Solutions
              </li>
            </ul>
          </div>

          <div className="absolute top-0 right-0 h-full w-1/4 pointer-events-none opacity-20 hidden lg:block">
            <Image src="/footer-tree.png" alt="Tree" fill className="object-contain object-right" />
          </div>
        </div>
      </SectionWrapper>

      {/* Web Communication Excellence */}
      <SectionWrapper className="bg-white pt-0">
        <div className="bg-[#fcfcfc] p-12 rounded-[2.5rem] border border-gray-50">
          <h3 className="text-2xl font-bold text-dark mb-12">Web Commsloway Excellence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Quality Craftsmanship", icon: <Settings size={28} /> },
              { title: "Reliability & Trust", icon: <Handshake size={28} /> },
              { title: "UI/UX Desint Design", icon: <Layout size={28} /> }
            ].map((item, i) => (
              <div key={i} className="space-y-4 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-dark">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Desprience is the trust direct in client results and success.
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Commitment to Excellence */}
      <SectionWrapper className="bg-white pt-0">
        <div className="text-center space-y-12">
          <h2 className="text-3xl font-bold text-dark">Our Commitment to Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-screen-2xl mx-auto">
            {[
              { title: "Quality Craftsmanship", icon: <Settings size={28} /> },
              { title: "Client & Design", icon: <Layout size={28} /> },
              { title: "Client-Centric Approach", icon: <Target size={28} /> }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center text-primary mx-auto">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-dark">{item.title}</h4>
                <p className="text-gray-400 text-sm">
                  We ensure that every track is a success for your brand.
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Bottom CTA */}
      <SectionWrapper className="bg-white">
        <div className="max-w-screen-2xl mx-auto bg-gradient-to-b from-[#fff9f4] to-white rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden flex flex-col items-center">
          <div className="relative z-10 space-y-8 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-dark">Ready to Build Something Amazing?</h2>
            <p className="text-gray-400 text-lg max-w-2xl px-6">
              Let&apos;s transform your idea into a rock-solid digital experience that moves your industry.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-12 py-6 text-xl font-bold shadow-xl shadow-primary/25">
                Connect Us
              </Button>
            </Link>
          </div>

          <div className="absolute right-0 bottom-0 top-0 w-1/3 pointer-events-none opacity-20">
            <Image src="/footer-tree.png" alt="Tree" fill className="object-contain object-right-bottom scale-125" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
