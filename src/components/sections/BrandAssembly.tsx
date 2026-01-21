"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const BrandAssembly: React.FC = () => {
    const router = useRouter();
    const text = "MOOLSTONE";
    const letters = text.split("");
    const middleIndex = 4; // 'S'

    const getInitialProps = (index: number) => {
        if (index === middleIndex) {
            return { y: -800, x: 0, opacity: 0 };
        }
        if (index < middleIndex) {
            return { x: -1000, y: 0, opacity: 0 };
        }
        return { x: 1000, y: 0, opacity: 0 };
    };

    // Stagger logic (3s total assembly):
    // S: 0
    // M,O,O,L: 0.2, 0.4, 0.6, 0.8
    // T,O,N,E: 1.0, 1.2, 1.4, 1.6
    // Duration: 1.2
    // Max Time: 1.6 + 1.2 = 2.8s
    const getDelay = (index: number) => {
        if (index === middleIndex) return 0; // 'S' starts

        // Left side: L, O, O, M (from near-middle to far-left)
        if (index < middleIndex) {
            return (middleIndex - 1 - index) * 0.3 + 0.3; // 4-1-3=0 -> 0.3s, 4-1-2=1 -> 0.6s, etc.
        }

        // Right side: T, O, N, E (from near-middle to far-right)
        return (index - 5) * 0.3 + 1.5; // Starts after M is done (1.2 + 0.3 = 1.5)
    };

    return (
        <div className="flex flex-col items-center justify-center pointer-events-none w-full">
            <div className="flex justify-center items-center h-[120px] overflow-visible">
                {letters.map((char, i) => {
                    const initial = getInitialProps(i);
                    const delay = getDelay(i);

                    return (
                        <motion.span
                            key={i}
                            initial={initial}
                            animate={{
                                x: 0,
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 1.2,
                                delay: delay,
                                ease: [0.16, 1, 0.3, 1],
                                repeat: Infinity,
                                repeatType: "reverse",
                                repeatDelay: 2, // Stay for 2s
                            }}
                            className={`inline-block font-extrabold tracking-wider uppercase ${i < 4 ? 'text-white' : 'text-[#ff6a00]'
                                }`}
                            style={{
                                fontSize: 'clamp(2.5rem, 10vw, 6rem)',
                                textShadow: i < 4
                                    ? '0 0 10px rgba(255,255,255,0.2)'
                                    : '0 0 15px rgba(255,106,0,0.5)'
                            }}
                        >
                            {char}
                        </motion.span>
                    );
                })}
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="text-[clamp(1rem,2vw,1.3rem)] max-w-[600px] leading-[1.6] mt-[25px] text-white/60 tracking-[0.1em] text-center px-4"
            >
                A solid foundation for your digital growth. Unshakeable technology, rooted in excellence.
            </motion.p>

            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 1 }}
                className="mt-[40px] px-[40px] py-[15px] bg-transparent border border-[#ff6a00]/50 text-[#ff6a00] uppercase tracking-[0.2em] font-bold cursor-pointer pointer-events-auto transition-all duration-300 hover:bg-[#ff6a00]/10 hover:shadow-[0_0_20px_rgba(255,106,0,0.3)] hover:border-[#ff6a00] hover:-translate-y-[2px]"
                onClick={() => router.push('/services')}
            >
                Explore the Network
            </motion.button>
        </div>
    );
};

export default BrandAssembly;
