"use client";

import { useAnimationFrame } from "framer-motion";
import { useRef, useEffect } from "react";

export const InfiniteScroll = ({
    children,
    speed = 0.5,
    direction = "up",
    className = "",
}: {
    children: React.ReactNode;
    speed?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Reset transform on direction change to prevent carry-over issues
        if (scrollerRef.current) {
            scrollerRef.current.style.transform = direction === "left" || direction === "right"
                ? "translateX(0px)"
                : "translateY(0px)";
        }
    }, [direction]);

    useAnimationFrame((time, delta) => {
        if (!containerRef.current || !scrollerRef.current) return;

        const scroller = scrollerRef.current;
        const isHorizontal = direction === "left" || direction === "right";

        // Get current transform value
        const currentTransform = isHorizontal
            ? (parseFloat(scroller.style.transform.split("translateX(")[1]) || 0)
            : (parseFloat(scroller.style.transform.split("translateY(")[1]) || 0);

        let nextTransform = currentTransform;

        if (direction === "up" || direction === "left") {
            nextTransform -= speed * (delta / 16);
        } else {
            nextTransform += speed * (delta / 16);
        }

        // Reset loop
        const limit = isHorizontal ? scroller.scrollWidth / 2 : scroller.scrollHeight / 2;

        if (Math.abs(nextTransform) >= limit) {
            nextTransform = 0;
        }

        scroller.style.transform = isHorizontal
            ? `translateX(${nextTransform}px)`
            : `translateY(${nextTransform}px)`;
    });

    const isHorizontal = direction === "left" || direction === "right";

    return (
        <div
            ref={containerRef}
            className={`overflow-hidden relative ${className}`}
            style={{
                maskImage: isHorizontal
                    ? "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
                    : "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
            }}
        >
            <div
                ref={scrollerRef}
                className={`flex ${isHorizontal ? "flex-row w-max" : "flex-col"} gap-8`}
            >
                {children}
                {children} {/* Duplicate for seamless loop */}
                {isHorizontal && <>{children}{children}</>} {/* Extra duplicates for horizontal width safety */}
            </div>
        </div>
    );
};
