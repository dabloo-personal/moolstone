"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { CTASection } from "@/components/sections/CTASection";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Layout, Bot, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { TestimonialMarquee } from "@/components/sections/TestimonialMarquee";
import { HomeClientStories } from "@/components/sections/HomeClientStories";

export default function Home() {
  return (
    <>
      <HeroSection />

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
              { label: "Full-Stack Web Development", href: "/services/full-stack-web-development" },
              { label: "E-commerce & UI/UX Design", href: "/services/ecommerce-ui-ux-design" },
              { label: "AI & Social Media Automation", href: "/services/ai-social-media-automation" },
              { label: "SEO & Google Maps Onboarding", href: "/services/seo-google-maps-onboarding" },
              { label: "Site Migrations & Maintenance", href: "/services/site-migrations-maintenance" },
            ]}
          />
          <ServiceCard
            title="Ecommerce Services"
            icon={<ShoppingCart size={24} />}
            bgIcon={ShoppingCart}
            href="/ecommerce-services"
            items={[
              { label: "Amazon Seller Services", href: "/services/amazon-seller-services" },
              { label: "Flipkart Seller Services", href: "/services/flipkart-seller-services" },
              { label: "Alibaba Seller Services", href: "/services/alibaba-seller-services" },
              { label: "Tata Cliq Seller Services", href: "/services/tata-cliq-seller-services" },
              { label: "Reliance JioMart Seller Services", href: "/services/reliance-jiomart-seller-services" },
            ]}
          />
        </div>
      </SectionWrapper>

      <FeaturesGrid />

      <HomeClientStories />

      <SectionWrapper className="pt-0 pb-24">
        <CTASection />
      </SectionWrapper>
    </>
  );
}
