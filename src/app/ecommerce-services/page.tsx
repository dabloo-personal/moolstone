"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { serviceData } from "@/data/services";

export default function EcommerceServicesPage() {
  const services = Object.values(serviceData);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/ecommerce-hero.png" // Ensuring we keep the existing hero if available, or fallback
            alt="Ecommerce Growth Visual"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-12 text-center text-white">
          <div className="space-y-8 flex flex-col items-center">
            <div className="inline-flex items-center px-4 py-1.5 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-bold rounded uppercase tracking-widest backdrop-blur-sm">
              Marketplace Specialists
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Ecommerce <br />
              <span className="text-orange-400">Services</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Unlock exponential growth across global marketplaces with Moolstone&apos;s expert management. We scale brands on Amazon, Flipkart, Alibaba, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-10 py-6 text-lg font-bold shadow-xl shadow-primary/20 border-none text-white">
                Contact Our Experts
              </Button>
              <button className="flex items-center font-bold text-white hover:text-orange-300 transition-colors group">
                View Case Studies
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Service Sections */}
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        // Take first 3 features for the list
        const displayFeatures = service.features.slice(0, 3).map(f => typeof f === 'string' ? { title: f, description: "" } : f);

        // Find slug by key
        const slug = Object.keys(serviceData).find(key => serviceData[key] === service);

        return (
          <SectionWrapper key={index} className={`bg-white ${index === 0 ? "" : "pt-0"}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Text Column */}
              <div className={`space-y-8 ${isEven ? "order-2 lg:order-1" : "order-2"}`}>
                <div
                  className="inline-flex items-center px-3 py-1 text-white text-[10px] font-bold rounded uppercase tracking-[0.2em]"
                  style={{ backgroundColor: service.themeColor || "#000" }}
                >
                  {service.title.split(" ")[0]} Certified
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-dark">
                  {service.title.split(" ").slice(0, -1).join(" ")} <br />
                  {service.title.split(" ").slice(-1)}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                  {service.description.split(".")[0]}.
                </p>
                <ul className="space-y-6">
                  {displayFeatures.map((item, i) => (
                    <li key={i} className="flex items-start space-x-4">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1.5 flex-shrink-0">
                        <CheckCircle2 size={12} strokeWidth={3} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-dark">{item.title}</h4>
                        {item.description && (
                          <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link href={`/services/${slug}`}>
                    <Button variant="outline" className="rounded-full px-8 group border-primary/20 hover:bg-primary/5 hover:text-primary hover:border-primary">
                      Explore {service.title}
                      <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Image Column */}
              <div className={`relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-xl group ${isEven ? "order-1 lg:order-2" : "order-1"}`}>
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={`${service.title} Visual`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} opacity-20`} />
                )}
                {/* Optional Overlay if needed */}
                <div className="absolute inset-0 bg-black/5" />
              </div>
            </div>
          </SectionWrapper>
        );
      })}

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
