"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EcommerceServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 bg-orange-50 text-orange-600 text-xs font-bold rounded uppercase tracking-widest">
              Marketplace Specialists
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-dark leading-tight">
              Ecommerce <br />
              <span className="text-primary">Services</span>
            </h1>
            <p className="text-text-muted text-lg md:text-xl max-w-xl leading-relaxed">
              Unlock exponential growth across global marketplaces with Moolstone&apos;s expert management. We scale brands on Amazon, Flipkart, Alibaba, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-10 py-6 text-lg font-bold shadow-xl shadow-primary/20">
                Contact Our Experts
              </Button>
              <button className="flex items-center font-bold text-dark hover:text-primary transition-colors group">
                View Case Studies
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl shadow-orange-100">
            <Image
              src="/ecommerce-hero.png"
              alt="Ecommerce Growth Visual"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Amazon Marketplace Excellence */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 bg-dark text-white text-[10px] font-bold rounded uppercase tracking-[0.2em]">
              Amazon SPN Certified
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark">
              Amazon Marketplace <br /> Excellence
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Achieve market leadership with our specialized Amazon SPN certified services designed for rapid scale and stability.
            </p>
            <ul className="space-y-6">
              {[
                { title: "PPC Management", desc: "Strategic ad spend optimization for maximum ROAS and lower ACOS." },
                { title: "A+ Content Design", desc: "High-conversion visual storytelling and brand registry support." },
                { title: "Account Health Monitoring", desc: "Proactive protection and policy compliance management." }
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1.5 flex-shrink-0">
                    <CheckCircle2 size={12} strokeWidth={3} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-dark">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-xl order-1 lg:order-2">
            <Image
              src="/amazon-excellence.png"
              alt="Amazon Excellence Workstation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Flipkart Growth Solutions */}
      <SectionWrapper className="bg-white pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-xl bg-gray-50">
            {/* Using hero image as fallback for missing generated ones due to quota */}
            <Image
              src="/web-dev-hero.png"
              alt="Flipkart Growth"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-primary/5" />
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-[10px] font-bold rounded uppercase tracking-[0.2em]">
              Flipkart Ads Partner
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark">
              Flipkart Growth <br /> Solutions
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Dominate India&apos;s leading marketplace with tailored visibility strategies that drive organic and paid growth.
            </p>
            <ul className="space-y-6">
              {[
                { title: "Account Onboarding", desc: "Seamless setup and cataloging for rapid market entry." },
                { title: "Advertising & Visibility", desc: "Leverage Flipkart&apos;s ad platform to boost product rankings and share of voice." }
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1.5 flex-shrink-0">
                    <CheckCircle2 size={12} strokeWidth={3} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-dark">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Alibaba & Global Expansion */}
      <SectionWrapper className="bg-white pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 bg-orange-600 text-white text-[10px] font-bold rounded uppercase tracking-[0.2em]">
              Global B2B Mastery
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark">
              Alibaba & Global <br /> Expansion
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Scale your brand globally with Alibaba Marketplace Mastery and B2B strategic planning.
            </p>
            <ul className="space-y-6">
              {[
                { title: "Global Sourcing", desc: "Connect with international buyers and streamline complex supply chains." },
                { title: "B2B Strategy", desc: "Expert guidance on wholesale, RFQs, and bulk order management." }
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1.5 flex-shrink-0">
                    <CheckCircle2 size={12} strokeWidth={3} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-dark">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-xl bg-gray-50 order-1 lg:order-2">
            <Image
              src="/who-we-are.png"
              alt="Global Shipping Containers"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-dark/10" />
          </div>
        </div>
      </SectionWrapper>

      {/* Stats Bar */}
      <div className="bg-[#12110c] py-20 px-6 lg:px-12">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { value: "500+", label: "Brands Scaled" },
            { value: "40%", label: "Avg. ROAS Lift" },
            { value: "10M+", label: "Products Sold" },
            { value: "24/7", label: "Account Health" }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
              <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Ready to Scale Section */}
      <SectionWrapper className="bg-white">
        <div className="max-w-screen-2xl mx-auto bg-[#fff9f4] rounded-[2rem] md:rounded-[3rem] p-10 md:p-24 text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-dark">Ready to Scale?</h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Join over 500+ global brands that are winning on the world&apos;s most competitive marketplaces. Let&apos;s build your growth engine together.
            </p>
          </div>

          <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-12 py-6 text-xl font-bold shadow-xl shadow-primary/20">
            Contact Us Today
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
