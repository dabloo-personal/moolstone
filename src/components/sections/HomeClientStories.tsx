"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const HomeClientStories = () => {
    return (
        <SectionWrapper className="bg-white py-12 pb-20">
            <div className="text-center mb-10 space-y-2">
                <h2 className="text-2xl md:text-4xl font-black text-dark tracking-tight">Client Success Stories</h2>
                <div className="flex justify-center space-x-1 text-primary">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-sm md:text-xl">★</span>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                    {
                        quote: "Moolstone delivered a world-class website that exceeded our expectations with AI integrations.",
                        author: "Sarah J.",
                        role: "Mumbai, Maharashtra"
                    },
                    {
                        quote: "Working with them was seamless. A solution that scaled perfectly with our rapid growth.",
                        author: "Alex M.",
                        role: "Bangalore, Karnataka"
                    },
                    {
                        quote: "Professionalism and timely delivery! Their team felt like partners than contractors.",
                        author: "K. Ross",
                        role: "Delhi, India"
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col justify-between min-h-[160px] hover:shadow-lg transition-shadow"
                    >
                        <p className="text-gray-500 text-xs md:text-sm italic leading-relaxed">&quot;{item.quote}&quot;</p>
                        <div className="flex items-center gap-3 mt-4">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-[10px]">
                                {item.author[0]}
                            </div>
                            <div>
                                <h5 className="font-bold text-dark text-xs md:text-sm">{item.author}</h5>
                                <p className="text-gray-400 text-[10px] uppercase tracking-widest">{item.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};
