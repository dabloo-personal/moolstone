import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-8 pb-6 px-6 lg:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-6">
          {/* Company Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="relative w-5 h-5">
                <Image src="/moolstone-logo.png" alt="MOOLSTONE Logo" fill className="object-contain" />
              </div>
              <span className="text-base font-bold tracking-wider">MOOLSTONE</span>
            </div>
            <p className="text-gray-500 leading-relaxed text-[11px] max-w-xs">
              Moolstone digital transformation agency focusing on real values and rock solid-web excellence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] mb-3 text-gray-400">Services</h4>
            <ul className="space-y-2 text-[11px] text-gray-500">
              <li><Link href="/web-development-services" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">AI Automation</Link></li>
              <li><Link href="/ecommerce-services" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
              <li><Link href="/ecommerce-services" className="hover:text-primary transition-colors">E-commerce Services</Link></li>
              <li><Link href="/ecommerce-services" className="hover:text-primary transition-colors">Seller Services</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] mb-3 text-gray-400">Quick Links</h4>
            <ul className="space-y-2 text-[11px] text-gray-500">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] mb-3 text-gray-400">Social Media</h4>
            <ul className="space-y-2 text-[11px] text-gray-500">
              <li>
                <a href="https://www.linkedin.com/in/mool-stone-1463333a8" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-primary transition-colors">
                  <Linkedin size={12} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/moolstone_official?igsh=MTJuNXY1cjQxMDV0ag%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-primary transition-colors">
                  <Instagram size={12} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/share/1C5QmhUdhv/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-primary transition-colors">
                  <Facebook size={12} />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/919288138539" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-primary transition-colors">
                  <MessageCircle size={12} />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] mb-3 text-gray-400">Contact</h4>
            <ul className="space-y-2 text-[11px] text-gray-500">
              <li className="flex items-start space-x-2">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={12} />
                <span className="leading-tight opacity-60 text-[10px]">CN601, Gali No. 3, Sultanpur, New Delhi - 110030</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={12} />
                <span className="leading-tight opacity-60 text-[10px]">3RD Floor, Naseeb Regency, Anisabad, Police Colony, Patna 800002</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={12} />
                <span className="leading-tight opacity-60 text-[10px]">B.Polytechnic, Near Vivah Bhawan, Babudih, Dhanbad, Jharkhand 828130</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-primary transition-colors pt-1">
                <Phone className="text-primary" size={12} />
                <a href="tel:+919288138539">+91 9288138539</a>
              </li>
              <li className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Mail className="text-primary" size={12} />
                <a href="mailto:info@moolstone.com">info@moolstone.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-[9px] text-gray-600 uppercase tracking-widest">
          <p>© 2024 Moolstone. Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
