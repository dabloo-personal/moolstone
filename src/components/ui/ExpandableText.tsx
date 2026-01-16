"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ExpandableTextProps {
    className?: string;
    text: string;
}

export const ExpandableText = ({ className, text }: ExpandableTextProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="flex flex-col items-start gap-1">
            <p
                className={cn(
                    "transition-all duration-300",
                    !isExpanded && "line-clamp-2",
                    className
                )}
            >
                {text}
            </p>
            <button
                onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering parent clicks if any
                    setIsExpanded(!isExpanded);
                }}
                className="text-primary text-sm font-bold mt-1 hover:underline focus:outline-none cursor-pointer"
            >
                {isExpanded ? "Read Less" : "Read More"}
            </button>
        </div>
    );
};
