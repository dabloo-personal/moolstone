"use client";

import React, { useEffect, useState, useRef } from 'react';

const BrandAssembly: React.FC = () => {
    const part1 = "MOOL";
    const part2 = "STONE";
    const [letters, setLetters] = useState<{ char: string; chaos: string; color: string; delay: string }[]>([]);
    const [isAnimating, setIsAnimating] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const combined = part1 + part2;
        const setup = combined.split('').map((char, i) => {
            const rx = (Math.random() - 0.5) * 800;
            const ry = (Math.random() - 0.5) * 800;
            const rz = (Math.random() - 0.5) * 1000;
            const rotX = (Math.random() - 0.5) * 1000;
            const rotY = (Math.random() - 0.5) * 1000;

            return {
                char,
                chaos: `translate3d(${rx}px, ${ry}px, ${rz}px) rotateX(${rotX}deg) rotateY(${rotY}deg)`,
                color: i < part1.length ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]' : 'text-[#ff6a00] drop-shadow-[0_0_15px_rgba(255,106,0,0.5)]',
                delay: `${i * 0.1}s`
            };
        });
        setLetters(setup);

        const runCycle = () => {
            setIsAnimating(false);
            // Force reflow/reset
            setTimeout(() => {
                setIsAnimating(true);
            }, 100);
        };

        runCycle();
        const interval = setInterval(runCycle, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center pointer-events-none w-full">
            <div className="flex justify-center items-center [perspective:1000px] h-[120px]" ref={containerRef}>
                {letters.map((l, i) => (
                    <span
                        key={i}
                        className={`inline-block font-extrabold tracking-wider uppercase opacity-0 transition-opacity duration-300 ${l.color} ${isAnimating ? 'animate-[assemble_2s_cubic-bezier(0.16,1,0.3,1)_forwards]' : ''}`}
                        style={{
                            fontSize: 'clamp(3rem, 10vw, 6rem)',
                            transform: isAnimating ? undefined : l.chaos,
                            animationDelay: l.delay,
                            opacity: isAnimating ? undefined : 0
                        }}
                    >
                        {l.char}
                    </span>
                ))}
            </div>
            <p className="text-[clamp(1rem,2vw,1.3rem)] max-w-[600px] leading-[1.6] mt-[25px] text-white/60 tracking-[0.1em] opacity-0 animate-[fadeInHero_1s_ease_1.5s_forwards] text-center px-4">
                A solid foundation for your digital growth. Unshakeable technology, rooted in excellence.
            </p>
            <button className="mt-[40px] px-[40px] py-[15px] bg-transparent border border-[#ff6a00]/50 text-[#ff6a00] uppercase tracking-[0.2em] font-bold cursor-pointer pointer-events-auto transition-all duration-300 hover:bg-[#ff6a00]/10 hover:shadow-[0_0_20px_rgba(255,106,0,0.3)] hover:border-[#ff6a00] hover:-translate-y-[2px] opacity-0 animate-[fadeInHero_1s_ease_2s_forwards]">
                Explore the Network
            </button>
        </div>
    );
};

export default BrandAssembly;
