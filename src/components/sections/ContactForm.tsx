"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, ChevronDown } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: 'Address (Optional)',
    interests: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const interestsList = [
    'Flipkart seller',
    'Jio Mart seller',
    'Wiritutt development',
    'Other'
  ];

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="bg-white rounded-[3rem] shadow-2xl shadow-gray-200/50 p-8 md:p-16 border border-gray-50 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl font-bold text-dark">Get Started with Moolstone</h2>
              <p className="text-gray-500 font-medium">Let&apos;s build something amazing together</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto relative z-10">
              <div className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-gray-400 text-lg shadow-sm"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                <input
                  type="tel"
                  required
                  placeholder="Contact number"
                  className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-gray-400 text-lg shadow-sm"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />

                <div className="relative">
                  <select
                    className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-0 outline-none transition-all text-gray-400 text-lg shadow-sm appearance-none cursor-pointer"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  >
                    <option disabled>Address (Optional)</option>
                    <option>India</option>
                    <option>UK</option>
                    <option>Nigeria</option>
                    <option>USA</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#e6a06d] p-8 relative shadow-inner shadow-gray-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl font-bold text-gray-500">I am interested in...</span>
                  <X className="text-gray-300 cursor-pointer hover:text-gray-500 transition-colors" size={24} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {interestsList.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className="flex items-center space-x-3 group"
                    >
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${formData.interests.includes(interest)
                        ? 'bg-primary border-primary text-white'
                        : 'border-[#e6a06d] text-transparent'
                        }`}>
                        <CheckCircle2 size={14} strokeWidth={3} />
                      </div>
                      <span className={`text-lg font-medium transition-colors ${formData.interests.includes(interest) ? 'text-dark' : 'text-gray-400'
                        }`}>
                        {interest}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full py-5 text-xl font-bold rounded-2xl bg-primary hover:bg-primary-dark shadow-xl shadow-primary/25 transition-all">
                Submit
              </Button>

              <div className="text-center pt-4">
                <Link href="mailto:themoolstone.services@gmail.com" className="text-blue-500 hover:text-blue-600 font-medium underline text-sm">
                  themoolstone.services@gmail.com
                </Link>
              </div>
            </form>

            <div className="absolute top-0 right-0 h-full w-1/3 pointer-events-none opacity-20 hidden lg:block">
              <Image
                src="/footer-tree.png"
                alt="Tree Accent"
                fill
                className="object-contain object-right py-20"
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-8 mx-auto">
              <CheckCircle2 size={56} />
            </div>
            <h3 className="text-4xl font-bold text-dark mb-4">Inquiry Received!</h3>
            <p className="text-gray-500 text-xl max-w-sm mb-10 leading-relaxed">
              Our team will get back to you shortly to discuss your project.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full px-10">
              Back to Form
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
