"use client";

import React from 'react';
import { notFound } from 'next/navigation';
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import {
    CheckCircle2,
    ArrowRight,
    ChevronRight,
    Zap,
    ShieldCheck,
    TrendingUp,
    MessageCircle,
    Clock
} from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { serviceData, webServiceData } from '@/data/services';
import { useParams } from 'next/navigation';
import { ExpandableText } from "@/components/ui/ExpandableText";
import { cn } from "@/lib/utils";

export default function ServiceDetailPage() {
    const params = useParams();
    const slug = params.service as string;
    const service = serviceData[slug] || webServiceData[slug];

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <div className="bg-white min-h-screen">
            {/* 1. Ultra-Modern Hero: Immersive Height & Dynamic Typography */}
            <section className="relative min-h-[500px] md:h-[70vh] w-full flex items-start md:items-center pt-[90px] md:pt-[110px] pb-16">
                {service.image ? (
                    <div className="absolute inset-0">
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className={`object-cover object-top opacity-80`}
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                    </div>
                ) : (
                    <div
                        className="absolute inset-0 bg-gradient-to-br"
                        style={{ backgroundImage: `linear-gradient(to bottom right, ${service.gradientFrom}, ${service.gradientTo})` }}
                    />
                )}

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6 pt-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Service Excellence</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight"
                        >
                            {service.title.split(' ').map((word, i) => (
                                <span key={i} className={i === 0 ? "text-primary" : ""}>
                                    {word}{' '}
                                </span>
                            ))}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xs md:text-sm lg:text-base text-white/60 max-w-lg leading-relaxed"
                        >
                            {service.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-3 pt-1"
                        >
                            <Link href="/contact">
                                <Button size="sm" className="rounded-full bg-primary hover:bg-primary-dark px-6 py-4 text-xs font-bold shadow-xl shadow-primary/20 text-white border-none group">
                                    Book a Strategy Call
                                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={14} />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="hidden lg:block w-48 h-48 rounded-[1.5rem] bg-white/5 backdrop-blur-xl border border-white/10 p-6 relative overflow-hidden group shadow-xl"
                    >
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 blur-3xl rounded-full" />
                        <Icon size={70} className="text-primary opacity-80 group-hover:scale-110 transition-transform duration-700" />
                    </motion.div>
                </div>
            </section>

            {/* 2. Value Proposition Grid: High Trust Indicators */}
            <SectionWrapper className="py-12 md:py-24">
                <div className="max-w-7xl mx-auto space-y-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Static Sidebar: Key Metrics */}
                        <div className="lg:col-span-4 space-y-12 lg:sticky lg:top-32">
                            <div>
                                <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-4">Why Moolstone?</span>
                                <h2 className="text-3xl font-black text-dark tracking-tight leading-normal">Engineered for <br />Market Dominance.</h2>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { icon: TrendingUp, label: "Success Rate", value: "99%" },
                                    { icon: Zap, label: "Implementation", value: "2x Faster" },
                                    { icon: ShieldCheck, label: "Scalability", value: "Unlimited" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-primary/20 transition-colors">
                                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">{item.label}</div>
                                            <div className="text-lg font-black text-dark leading-none">{item.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Feature Roll: Clean Service Architecture */}
                        <div className="lg:col-span-8">
                            <h3 className="text-[10px] font-black text-dark uppercase tracking-[0.2em] border-b border-gray-100 pb-3 mb-6 opacity-40">Service Architecture</h3>
                            <div className="space-y-4">
                                {service.features.map((feature, i) => {
                                    const isObject = typeof feature === 'object';
                                    const title = isObject ? feature.title : feature;
                                    const description = isObject ? feature.description : "Advanced methodology designed to optimize your digital operations and maximize ROI.";

                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            className="group relative p-5 md:p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/10 transition-all duration-300"
                                        >
                                            <div className="flex gap-4 items-start">
                                                <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                    <span className="font-bold text-[10px]">{i + 1}</span>
                                                </div>

                                                <div className="space-y-1 flex-1">
                                                    <h4 className="text-sm md:text-base font-bold text-dark tracking-tight leading-tight group-hover:text-primary transition-colors">
                                                        {title}
                                                    </h4>
                                                    <ExpandableText
                                                        text={description}
                                                        className="text-[11px] md:text-xs text-gray-500 leading-relaxed font-medium"
                                                    />
                                                </div>

                                                <div className="self-center hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <ChevronRight size={14} className="text-primary" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* 3. Action Hub: Compact CTA */}
            <section className="py-12 md:py-16 bg-dark mx-4 mb-4 rounded-2xl md:rounded-[2rem] overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />

                <div className="max-w-5xl mx-auto text-center px-6 relative z-10 space-y-8">
                    <div className="space-y-3">
                        <span className="text-primary font-bold text-[10px] uppercase tracking-[0.25em]">Ignite Your Growth</span>
                        <h2 className="text-xl md:text-3xl font-black text-white tracking-tight leading-tight">
                            Ready to Transform Your Future?
                        </h2>
                        <p className="text-white/40 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
                            Join the ranks of elite sellers and businesses. Let&apos;s build your unshakeable digital infrastructure today.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button size="sm" className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary-dark px-8 py-5 text-sm font-bold shadow-lg shadow-primary/20 text-white border-none transition-all hover:-translate-y-1">
                                Get Started Now
                            </Button>
                        </Link>
                        <div className="flex items-center gap-3 px-4 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-6 h-6 rounded-full bg-gray-800 border-2 border-dark" />
                                ))}
                            </div>
                            <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest">500+ Active Clients</span>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 grid grid-cols-2 lg:grid-cols-3 gap-6 text-center max-w-2xl mx-auto">
                        <div className="flex items-center justify-center gap-2">
                            <MessageCircle className="text-primary" size={16} />
                            <div className="text-white/80 font-bold text-[11px]">24/7 Support</div>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <ShieldCheck className="text-primary" size={16} />
                            <div className="text-white/80 font-bold text-[11px]">Safe & Secure</div>
                        </div>
                        <div className="hidden lg:flex items-center justify-center gap-2">
                            <Clock className="text-primary" size={16} />
                            <div className="text-white/80 font-bold text-[11px]">Fast Turnaround</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
