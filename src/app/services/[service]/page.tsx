import React from 'react';
import { notFound } from 'next/navigation';
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Check, ShoppingCart, Globe, BarChart3, Package, Truck, Headset, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import amazonHeroImg from "../../amazon-services-hero.jpg";
import flipkartHeroImg from "../../flipkart-services-hero.png";
import alibabaHeroImg from "../../alibaba-services-hero.png";
import tataCliqHeroImg from "../../tatacliq-services-hero.png";
import jiomartHeroImg from "../../jiomart-services-hero.png";
import blinkitHeroImg from "../../blinkit-services-hero.png";
import meeshoHeroImg from "../../meesho-services-hero.png";
import zomatoHeroImg from "../../zomato-services-hero.png";
import swiggyHeroImg from "../../swiggy-services-hero.png";
import { HeroFeatureOverlay } from '@/components/services/HeroFeatureOverlay';

// Service Data Definition
import { serviceData } from '@/data/services';

export default async function ServiceDetail({ params }: { params: Promise<{ service: string }> }) {
    const { service: slug } = await params;
    const service = serviceData[slug];

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <>
            {/* Hero Section */}
            {service.image ? (
                <>
                    <section className="relative w-full max-w-[95vw] mx-auto pt-32 pb-8">
                        <div className="relative w-full rounded-[50px] overflow-hidden shadow-2xl">
                            <Image
                                src={service.image}
                                alt={service.title}
                                className="w-full h-auto object-cover"
                                priority
                                placeholder="blur"
                            />
                            <HeroFeatureOverlay
                                features={service.features.map(f => {
                                    const title = typeof f === 'string' ? f : f.title;
                                    return {
                                        title,
                                        id: title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                                    };
                                })}
                            />
                        </div>
                    </section>

                    <section className="relative w-full max-w-[95vw] mx-auto px-4 md:px-6 pb-20 text-left">
                        <div className="max-w-4xl space-y-8">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-dark flex items-center gap-4" style={{ color: service.themeColor }}>
                                <Icon size={48} className="shrink-0" />
                                {service.title}
                            </h1>
                            <p className="text-lg md:text-xl text-text-muted font-medium leading-relaxed">
                                {service.description}
                            </p>
                            <div className="pt-2 pb-12">
                                <Link href="/contact">
                                    <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-12 py-6 text-xl font-bold shadow-xl transition-transform hover:scale-105 shadow-primary/25 text-white">
                                        Start Selling Now
                                    </Button>
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 gap-8">
                                {service.features.map((feature, i) => {
                                    const isObject = typeof feature === 'object';
                                    const title = isObject ? feature.title : feature;
                                    const description = isObject ? feature.description : null;
                                    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

                                    return (
                                        <div key={i} id={id} className="group relative p-8 rounded-[2rem] bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                                            {/* decorative gradient background on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            {/* subtle gradient line at top */}
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                                            <div className="relative flex flex-col md:flex-row items-start gap-8">
                                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 shrink-0 border border-primary/10">
                                                    <Check size={28} className="text-primary" />
                                                </div>

                                                <div className="flex-1 space-y-4">
                                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                                                        {title}
                                                    </h3>

                                                    {description ? (
                                                        <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                                            {description}
                                                        </p>
                                                    ) : (
                                                        <p className="text-gray-500 text-sm font-medium">
                                                            Expertly handled by our dedicated team to ensure maximum compliance and conversion.
                                                        </p>
                                                    )}

                                                    <div className="pt-4">
                                                        <Link href="/contact">
                                                            <Button variant="ghost" className="pl-0 text-primary font-bold text-lg hover:bg-transparent group/btn p-0 h-auto">
                                                                <span className="border-b-2 border-primary/20 group-hover/btn:border-primary transition-colors pb-0.5">Explore More</span>
                                                                <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-2" />
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                <>
                    <section className={`relative pt-32 pb-48 overflow-visible text-center bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} text-white`}>
                        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />

                        <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-8">
                            <div className="mx-auto w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-2xl skew-y-3">
                                <Icon size={40} className="text-white drop-shadow-md" />
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight drop-shadow-lg">
                                {service.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-sm">
                                {service.description}
                            </p>
                            <div className="pt-8">
                                <Link href="/contact">
                                    <Button size="lg" className="rounded-full bg-white text-primary hover:bg-gray-100 px-10 py-6 text-lg font-bold shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
                                        Start Selling Now
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
                        <div className="absolute -top-24 -left-24 w-72 h-72 bg-black/10 rounded-full blur-3xl opacity-30 pointer-events-none" />
                    </section>

                    <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 py-20 text-left">
                        <div className="grid grid-cols-1 gap-8">
                            {service.features.map((feature, i) => {
                                const isObject = typeof feature === 'object';
                                const title = isObject ? feature.title : feature;
                                const description = isObject ? feature.description : null;
                                const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

                                return (
                                    <div key={i} id={id} className="group relative p-8 rounded-[2rem] bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                                        <div className="relative flex flex-col md:flex-row items-start gap-8">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 shrink-0 border border-primary/10">
                                                <Check size={28} className="text-primary" />
                                            </div>
                                            <div className="flex-1 space-y-4">
                                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                                                    {title}
                                                </h3>
                                                {description ? (
                                                    <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                                        {description}
                                                    </p>
                                                ) : (
                                                    <p className="text-gray-500 text-sm font-medium">
                                                        Expertly handled by our dedicated team to ensure maximum compliance and conversion.
                                                    </p>
                                                )}
                                                <div className="pt-4">
                                                    <Link href="/contact">
                                                        <Button variant="ghost" className="pl-0 text-primary font-bold text-lg hover:bg-transparent group/btn p-0 h-auto">
                                                            <span className="border-b-2 border-primary/20 group-hover/btn:border-primary transition-colors pb-0.5">Explore More</span>
                                                            <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-2" />
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </>
            )}



            {/* CTA Banner */}
            <section className="py-20 bg-dark text-white text-center px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold">Ready to scale on {service.title}?</h2>
                    <p className="text-gray-400 text-lg">Join hundreds of successful sellers who have transformed their business with Moolstone.</p>
                    <Link href="/contacts">
                        <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark px-12 py-4 text-lg font-bold shadow-lg shadow-primary/25">
                            Get Your Free Audit
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
