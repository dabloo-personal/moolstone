"use client";

import React from 'react';
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description?: string;
  icon: React.ReactNode;
  bgIcon?: LucideIcon;
  items?: string[];
  variant?: 'light' | 'white';
  href?: string;
}

export const ServiceCard = ({ title, description, icon, bgIcon: BgIcon, items, variant = 'white', href }: ServiceCardProps) => {
  const CardContent = (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "h-full p-8 rounded-[2.5rem] border transition-all duration-300 relative overflow-hidden group",
        variant === 'white'
          ? "bg-white border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10"
          : "bg-gray-50 border-transparent hover:border-primary/20"
      )}
    >
      {/* Background Icon */}
      {BgIcon && (
        <div className="absolute -top-4 -right-4 text-gray-100 opacity-50 group-hover:scale-110 group-hover:text-primary/5 transition-all duration-700">
          <BgIcon size={140} />
        </div>
      )}

      <div className="relative z-10 h-full flex flex-col space-y-6">
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          {icon}
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors">{title}</h3>
          {description && (
            <p className="text-text-muted text-base leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {items && items.length > 0 && (
          <ul className="space-y-4 flex-grow">
            {items.map((item, i) => (
              <li key={i} className="flex items-start text-base text-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="pt-4">
          <div className="inline-flex items-center text-base font-bold text-dark group-hover:text-primary transition-all group/btn">
            <span className="relative">
              Learn More
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </span>
            <ArrowRight className="ml-2 group-hover/btn:translate-x-2 transition-transform" size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};
