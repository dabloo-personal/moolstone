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
  {
    name: 'Services',
    href: '/services',
    subLinks: [
      { name: 'Ecommerce', href: '/ecommerce-services' },
      { name: 'Web Development', href: '/web-development-services' },
    ]
  },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  const handleSamePageScroll = (href: string) => {
    // If the link has a hash, we let the default behavior happen (it will scroll to the ID)
    if (href.includes('#')) return;

    const path = href.split('?')[0];
    if (pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
        "fixed top-0 left-0 right-0 transition-all duration-300 px-6 lg:px-12 py-2.5 z-[100]",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      )}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-4" onClick={() => handleSamePageScroll('/')}>
          <div className="relative w-12 h-12 md:w-14 md:h-14">
            <Image
              src="/moolstone-logo.png"
              alt="MOOLSTONE Logo"
              fill
              className="object-contain mix-blend-multiply"
            />
          </div>
          <div className="flex flex-col -space-y-0.5 sm:-space-y-1 max-w-[140px] xs:max-w-[180px] sm:max-w-none">
            <span className="text-lg sm:text-xl font-bold text-dark tracking-wider truncate">MOOLSTONE</span>
            <span className="text-[7px] xs:text-[9px] sm:text-[10px] text-text-muted uppercase tracking-[0.1em] sm:tracking-[0.2em] leading-tight block">IT Services & Business Consulting</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative group"
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link
                href={link.href}
                onClick={() => {
                  setHoveredLink(null);
                  handleSamePageScroll(link.href);
                }}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary py-4",
                  pathname === link.href || (link.subLinks && link.subLinks.some(s => pathname === s.href))
                    ? "text-primary"
                    : "text-text-main"
                )}
              >
                {link.name}
              </Link>

              {link.subLinks && (
                <AnimatePresence>
                  {hoveredLink === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-2xl py-2 mt-1"
                    >
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => {
                            setHoveredLink(null);
                            handleSamePageScroll(sub.href);
                          }}
                          className={cn(
                            "block px-4 py-2.5 text-sm transition-colors hover:text-primary",
                            pathname === sub.href ? "text-primary" : "text-text-main"
                          )}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <Link href="/contact#contact-form" onClick={() => handleSamePageScroll('/contact')}>
            <Button size="sm" className="rounded-full bg-primary hover:bg-primary-dark px-6">
              Contact Us
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
                <div key={link.href} className="flex flex-col space-y-2">
                  <Link
                    href={link.href}
                    onClick={() => {
                      setIsOpen(false);
                      handleSamePageScroll(link.href);
                    }}
                    className={cn(
                      "text-lg font-medium",
                      pathname === link.href ? "text-primary" : "text-text-main"
                    )}
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className="flex flex-col pl-4 space-y-2 border-l-2 border-primary/10">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => {
                            setIsOpen(false);
                            handleSamePageScroll(sub.href);
                          }}
                          className={cn(
                            "text-base",
                            pathname === sub.href ? "text-primary" : "text-text-muted"
                          )}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact#contact-form"
                onClick={() => {
                  setIsOpen(false);
                  handleSamePageScroll('/contact');
                }}
              >
                <Button className="w-full rounded-full">Contact Us</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
