"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import {
    ArrowRight,
    ShoppingCart,
    TrendingUp,
    Globe,
    Truck,
    LineChart,
    ChevronRight,
    Store
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { serviceData as ecommerceServiceData } from "@/data/services";
import { ExpandableText } from "@/components/ui/ExpandableText";
import { motion } from "framer-motion";

export default function EcommerceServicesContent() {
    const services = Object.values(ecommerceServiceData);

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-dark mx-4 my-4 rounded-[2.5rem]">
                <Image
                    src="/ecommerce-hero.png"
                    alt="Ecommerce Seller Services"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />

                <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6"
                        >
                            <ShoppingCart size={16} className="text-primary" />
                            <span className="text-primary font-bold text-sm tracking-wide uppercase">Ecommerce Solutions</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                        >
                            Scale Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                                Online Empire
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-white/80 mb-10"
                        >
                            Comprehensive seller services for Amazon, Flipkart, and global marketplaces. We handle the operations so you can focus on growth.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link href="/contact#contact-form">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-12 py-6 text-xl font-bold border-none text-white">
                                    Get a Quote
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Intro Stats */}
            <div className="bg-white py-12 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "Marketplaces", value: "10+" },
                        { label: "Seller Growth", value: "200%" },
                        { label: "Managed SKUs", value: "5k+" },
                        { label: "Happy Clients", value: "100+" },
                    ].map((item, i) => (
                        <div key={i} className="text-center">
                            <h3 className="text-3xl font-bold text-dark">{item.value}</h3>
                            <p className="text-gray-500 text-sm">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dynamic Service Sections */}
            {services.map((service, index) => {
                const isEven = index % 2 === 0;
                // Take first 3 features for the list (or all, layout handles it)
                const displayFeatures = service.features.map(f => typeof f === 'string' ? { title: f, description: "" } : f);

                // Find slug by key
                const slug = Object.keys(ecommerceServiceData).find(key => ecommerceServiceData[key] === service);

                return (
                    <SectionWrapper key={index} id={slug} className={`bg-white pt-12 pb-20`}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center max-w-7xl mx-auto">
                            {/* Text Column */}
                            <div className={`space-y-6 lg:space-y-8 ${isEven ? "order-2 lg:order-1" : "order-2"}`}>
                                <div className="flex items-center space-x-3">
                                    <div className="p-3 rounded-2xl bg-orange-50 text-orange-600">
                                        <Store size={24} />
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-dark leading-tight">
                                        {service.title}
                                    </h2>
                                </div>

                                <ExpandableText
                                    text={service.description}
                                    className="text-gray-500 text-base lg:text-lg leading-relaxed"
                                />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {displayFeatures.slice(0, 6).map((item, i) => (
                                        <div key={i} className="flex items-start space-x-3 p-3 rounded-xl bg-gray-50 hover:bg-orange-50/50 transition-colors">
                                            <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                            <div className="space-y-1">
                                                <h4 className="font-bold text-dark text-sm">{item.title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4 flex flex-wrap gap-10 items-center">
                                    <Link href="/contact#contact-form">
                                        <Button variant="outline" className="rounded-full px-6 py-2 text-sm group bg-white border-2 border-primary/20 text-primary hover:border-primary hover:bg-primary hover:text-white transition-all">
                                            Explore {service.title}
                                            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                                        </Button>
                                    </Link>

                                    <Link href="/contact#contact-form">
                                        <Button variant="outline" className="rounded-full px-6 py-2 text-sm group bg-white border-2 border-primary/20 text-primary hover:border-primary hover:bg-primary hover:text-white transition-all">
                                            Start Selling
                                            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Image Column */}
                            <div className={`relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group ${isEven ? "order-1 lg:order-2" : "order-1"}`}>
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

                                {/* Floating Badge */}
                                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-green-100 text-green-600 rounded-full">
                                            <TrendingUp size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-dark">Boost Sales</p>
                                            <p className="text-xs text-gray-500">Optimized listings & ads</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SectionWrapper>
                );
            })}

            {/* CTA Section - specific for Ecommerce */}
            <SectionWrapper className="bg-dark text-white">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold">Dominate the Marketplace</h2>
                    <p className="text-xl text-gray-400">
                        From account setup to becoming a category leader, Moolstone guides your ecommerce journey.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link href="/contact#contact-form">
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-12 py-6 text-xl font-bold shadow-xl shadow-primary/20">
                                Contact Us Today
                            </Button>
                        </Link>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
