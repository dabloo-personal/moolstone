"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroFeatureOverlayProps {
    features: { title: string; id: string }[];
}

export function HeroFeatureOverlay({ features }: HeroFeatureOverlayProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % features.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(timer);
    }, [features.length]);

    const scrollToFeature = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Offset for fixed header if necessary, though scrollIntoView usually handles it. 
            // We'll use a simple scrollIntoView for now.
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10 pointer-events-none">
            <div className="bg-black/60 backdrop-blur-md border border-white/10 px-8 py-4 rounded-full shadow-2xl overflow-hidden min-w-[300px] flex items-center justify-center pointer-events-auto cursor-pointer hover:bg-black/70 transition-colors"
                onClick={() => scrollToFeature(features[index].id)}
            >
                <AnimatePresence mode="wait">
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-white text-xl md:text-2xl font-bold tracking-wide text-center whitespace-nowrap"
                    >
                        {features[index].title}
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    );
}
