import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Sparkles, MessageSquare } from 'lucide-react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 px-6 lg:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8">
                <Image src="/logo.png" alt="MOOLSTONE Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold tracking-wider">MOOLSTONE</span>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm">
              moolstone digital transformation agency focusing on real values and rock solid-web excellence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-gray-400">Services</h4>
            <ul className="space-y-6 text-sm text-gray-500">
              <li><Link href="/web-development-services" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">AI Automation</Link></li>
              <li><Link href="/ecommerce-services" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Framework coding</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-gray-400">Quick Links</h4>
            <ul className="space-y-6 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-gray-400">Contact</h4>
            <ul className="space-y-6 text-sm text-gray-500">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1" size={16} />
                <span>Nagpur, GS-400901</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-primary transition-colors">
                <Phone className="text-primary" size={16} />
                <a href="tel:+917004085490">+91 7004085490</a>
              </li>
              <li className="flex items-center space-x-3 hover:text-primary transition-colors">
                <MessageSquare className="text-primary" size={16} />
                <a href="https://wa.me/917004085490" target="_blank" rel="noopener noreferrer">WhatsApp Message</a>
              </li>
              <li className="flex items-center space-x-3 hover:text-primary transition-colors">
                <Mail className="text-primary" size={16} />
                <a href="mailto:mool@moolstone.com">mool@moolstone.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:row justify-between items-center space-y-4 md:space-y-0 text-[10px] text-gray-600 uppercase tracking-widest">
          <p>© 2024 Moolstone. Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Term of Services</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
