"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 left-0 right-0 transition-all duration-300 px-6 lg:px-12 py-4 z-[100]",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      )}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-4">
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image
              src="/image copy.png"
              alt="MOOLSTONE Logo"
              fill
              className="object-contain mix-blend-multiply"
            />
          </div>
          <div className="flex flex-col -space-y-0.5 sm:-space-y-1 max-w-[140px] xs:max-w-[180px] sm:max-w-none">
            <span className="text-lg sm:text-xl font-bold text-dark tracking-wider truncate">MOOLSTONE</span>
            <span className="text-[7px] xs:text-[9px] sm:text-[10px] text-text-muted uppercase tracking-[0.1em] sm:tracking-[0.2em] leading-tight block">IT Services & Consulting Business</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-text-main"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact#contact-form">
            <Button size="sm" className="rounded-full bg-primary hover:bg-primary-dark px-6">
              Connect Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text-main"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg border-t md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium",
                    pathname === link.href ? "text-primary" : "text-text-main"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact#contact-form" onClick={() => setIsOpen(false)}>
                <Button className="w-full rounded-full">Connect Us</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
