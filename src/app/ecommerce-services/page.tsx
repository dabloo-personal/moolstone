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
import { ExpandableText } from "@/components/ui/ExpandableText";

export default function EcommerceServicesPage() {
  const services = Object.values(serviceData);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] flex items-center overflow-hidden py-12 lg:py-0">
        <Image
          src="/ecommerce-hero.png" // Fallback or existing hero
          alt="Ecommerce Growth Visual"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-6">
          <div className="inline-flex items-center px-4 py-1.5 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-[10px] md:text-xs font-bold rounded uppercase tracking-widest backdrop-blur-sm mb-4 md:mb-6">
            Marketplace Specialists
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6">
            Ecommerce <span className="text-orange-400">Services</span>
          </h1>
          <p className="text-gray-200 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-6 md:mb-8">
            Unlock exponential growth across global marketplaces with Moolstone&apos;s expert management.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-bold shadow-xl shadow-primary/20 border-none text-white w-full sm:w-auto">
              Contact Our Experts
            </Button>
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
          <SectionWrapper key={index} className={`bg-white ${index === 0 ? "pt-12 lg:pt-20" : "pt-0"} pb-12 lg:pb-20`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center max-w-7xl mx-auto">
              {/* Text Column */}
              <div className={`space-y-6 lg:space-y-8 ${isEven ? "order-2 lg:order-1" : "order-2"}`}>
                <div
                  className="inline-flex items-center px-3 py-1 text-white text-[10px] font-bold rounded uppercase tracking-[0.2em]"
                  style={{ backgroundColor: service.themeColor || "#000" }}
                >
                  {service.title.split(" ")[0]} Certified
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-dark leading-tight">
                  {service.title}
                </h2>

                <ExpandableText
                  text={service.description}
                  className="text-gray-500 text-base lg:text-lg leading-relaxed"
                />

                <ul className="space-y-4">
                  {displayFeatures.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 lg:space-x-4">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1 flex-shrink-0">
                        <CheckCircle2 size={12} strokeWidth={3} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-dark text-sm lg:text-base">{item.title}</h4>
                        {item.description && (
                          <p className="text-gray-400 text-xs lg:text-sm line-clamp-1">{item.description}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 lg:pt-4">
                  <Link href={`/services/${slug}`}>
                    <Button variant="outline" className="rounded-full px-6 py-5 lg:px-8 lg:py-6 text-sm lg:text-base group border-primary/20 hover:bg-primary/5 hover:text-primary hover:border-primary transition-all w-full sm:w-auto">
                      Explore {service.title}
                      <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Image Column */}
              <div className={`relative aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group ${isEven ? "order-1 lg:order-2" : "order-1"}`}>
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={`${service.title} Visual`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} opacity-20`} />
                )}
                <div className="absolute inset-0 bg-black/5" />
              </div>
            </div>
          </SectionWrapper>
        );
      })}

      {/* Stats Bar */}
      <div className="bg-[#12110c] py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
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
