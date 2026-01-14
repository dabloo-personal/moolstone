"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { CTASection } from "@/components/sections/CTASection";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Layout, Bot, ShoppingCart } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection
        title=""
        subtitle=""
      />

      <WhoWeAre />

      <SectionWrapper id="services" className="bg-white">
        <div className="text-center mb-16">
          <span className="block text-primary md:text-5xl font-bold text-dark leading-tight">Our Core Pillars</span>
          <div className="w-20 h-1 bg-primary/50 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-2xl mx-auto">
          <ServiceCard
            title="Web Development & AI Automation"
            icon={<Layout size={24} />}
            bgIcon={Layout}
            href="/web-development-services"
            items={[
              "High-performance Full-stack Applications",
              "Custom AI Model Integration (LLMs)",
              "Business Process Workflow Automation",
            ]}
          />
          <ServiceCard
            title="Ecommerce Services"
            icon={<ShoppingCart size={24} />}
            bgIcon={ShoppingCart}
            href="/ecommerce-services"
            items={[
              "Headless Commerce Solutions",
              "Conversion Rate Optimization (CRO)",
              "Enterprise Marketplace Scaling",
            ]}
          />
        </div>
      </SectionWrapper>

      <FeaturesGrid />

      <SectionWrapper id="testimonials" className="bg-white pb-0">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-dark">What Our Clients Say</h2>
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-primary text-xl">★</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Moolstone delivered a seamless and visually stunning website with precision and creativity. Their AI integrations changed our workflow."
            author="Sarah J."
            role="CEO, TechFlow"
          />
          <TestimonialCard
            quote="Working with Moolstone was smooth from start to finish. They understood our needs and delivered a solution that exceeded our goals."
            author="Alex M."
            role="Founder, EcomGate"
          />
          <TestimonialCard
            quote="Professionalism and timely delivery stood out. Their team felt more like partners than contractors during peak scaling periods."
            author="M. Ross"
            role="Ops Manager, LogistiX"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className="pt-0 pb-24">
        <CTASection />
      </SectionWrapper>
    </>
  );
}
