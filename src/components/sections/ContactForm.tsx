"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, ChevronDown, Loader2, AlertCircle } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const countries = [
  {
    name: 'India',
    states: [
      'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
      'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
      'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
      'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
      'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
      'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
      'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
      'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
    ]
  }
];

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isStateOpen, setIsStateOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    country: '',
    state: '',
    interests: [] as string[],
  });

  const interestsList = [
    'Amazon Seller Services',
    'Flipkart Seller Services',
    'Alibaba Seller Services',
    'Blinkit Seller Services',
    'Meesho Seller Services',
    'Zomato Seller Services',
    'Other Seller Services',
    'Website Development',
    'AI Automation',
    'Graphics Design',
    'Website Modification, Migration & Maintenance',
    'SEO & Google Maps Onboarding',
    'Other'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.country) {
      newErrors.country = 'Please select a country';
    }

    if (!formData.state) {
      newErrors.state = 'Please select a state';
    }

    if (formData.interests.length === 0) {
      newErrors.interests = 'Please select at least one interest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          country: '',
          state: '',
          interests: [],
        });
        setErrors({});
        setTimeout(() => setIsSubmitted(false), 8000);
      } else {
        const data = await response.json();
        setErrors({ submit: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ submit: 'Failed to submit form. Please check your connection.' });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const selectedCountry = countries.find(c => c.name === formData.country);

  return (
    <div className="bg-white rounded-[3rem] shadow-2xl shadow-gray-200/50 p-8 md:p-16 border border-gray-50 relative">
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

            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto relative z-10" noValidate>
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-dark">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Enter Your Name"
                  className={`w-full px-6 py-4 rounded-xl bg-white border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-primary'
                    } focus:ring-0 outline-none transition-all placeholder:text-gray-300 placeholder:font-light text-lg shadow-sm`}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-dark">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="Enter Your Mobile Number"
                  className={`w-full px-6 py-4 rounded-xl bg-white border ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-primary'
                    } focus:ring-0 outline-none transition-all placeholder:text-gray-300 placeholder:font-light text-lg shadow-sm`}
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: '' });
                  }}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Country Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-dark">
                  Country <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setIsCountryOpen(!isCountryOpen);
                      setIsStateOpen(false);
                      setIsOpen(false);
                    }}
                    className={`w-full px-6 py-4 rounded-xl bg-white border ${errors.country ? 'border-red-500' : 'border-gray-200 focus:border-primary'
                      } text-left flex justify-between items-center transition-all text-lg shadow-sm ${!formData.country ? 'text-gray-400 font-light' : 'text-dark font-medium'
                      }`}
                  >
                    <span>{formData.country || 'Select Country'}</span>
                    <ChevronDown className={`text-gray-400 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`} size={20} />
                  </button>

                  <AnimatePresence>
                    {isCountryOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-50 w-full mt-2 bg-white/95 backdrop-blur-md rounded-xl border border-gray-100 shadow-2xl overflow-hidden max-h-60 overflow-y-auto"
                      >
                        {countries.map((country) => (
                          <button
                            key={country.name}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, country: country.name, state: '' });
                              setIsCountryOpen(false);
                              if (errors.country) setErrors({ ...errors, country: '' });
                            }}
                            className="w-full px-6 py-4 text-left hover:bg-primary/5 transition-colors text-dark font-medium group"
                          >
                            <span
                              style={{
                                textShadow: '0 0 15px rgba(255,106,0,0.4)',
                              }}
                              className="group-hover:text-primary transition-colors"
                            >
                              {country.name}
                            </span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {errors.country && (
                  <p id="country-error" className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.country}
                  </p>
                )}
              </div>

              {/* State Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-dark">
                  State/Province <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    disabled={!formData.country}
                    onClick={() => {
                      setIsStateOpen(!isStateOpen);
                      setIsCountryOpen(false);
                      setIsOpen(false);
                    }}
                    className={`w-full px-6 py-4 rounded-xl bg-white border ${errors.state ? 'border-red-500' : 'border-gray-200 focus:border-primary'
                      } text-left flex justify-between items-center transition-all text-lg shadow-sm ${!formData.state ? 'text-gray-400 font-light' : 'text-dark font-medium'
                      } disabled:bg-gray-50 disabled:cursor-not-allowed`}
                  >
                    <span>{formData.state || (formData.country ? 'Select State' : 'Select Country First')}</span>
                    <ChevronDown className={`text-gray-400 transition-transform ${isStateOpen ? 'rotate-180' : ''}`} size={20} />
                  </button>

                  <AnimatePresence>
                    {isStateOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-50 w-full mt-2 bg-white/95 backdrop-blur-md rounded-xl border border-gray-100 shadow-2xl overflow-hidden max-h-60 overflow-y-auto"
                      >
                        {selectedCountry?.states.map((state) => (
                          <button
                            key={state}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, state: state });
                              setIsStateOpen(false);
                              if (errors.state) setErrors({ ...errors, state: '' });
                            }}
                            className="w-full px-6 py-4 text-left hover:bg-primary/5 transition-colors text-dark font-medium group"
                          >
                            <span
                              style={{
                                textShadow: '0 0 15px rgba(255,106,0,0.4)',
                              }}
                              className="group-hover:text-primary transition-colors"
                            >
                              {state}
                            </span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {errors.state && (
                  <p id="state-error" className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.state}
                  </p>
                )}
              </div>

              {/* Interests Section */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-dark">
                  I am interested in... <span className="text-red-500">*</span>
                </label>
                <div className="relative" id="interest-dropdown">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(!isOpen);
                      setIsCountryOpen(false);
                      setIsStateOpen(false);
                    }}
                    className={`w-full px-6 py-4 rounded-xl bg-white border ${errors.interests ? 'border-red-500' : 'border-gray-200 focus:border-primary'
                      } text-left flex justify-between items-center transition-all text-lg shadow-sm ${formData.interests.length === 0 ? 'text-gray-300 font-light' : 'text-dark'
                      }`}
                  >
                    <span>{formData.interests[0] || 'Select Interest'}</span>
                    <ChevronDown className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} size={20} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-50 w-full mt-2 bg-white/95 backdrop-blur-md rounded-xl border border-gray-100 shadow-2xl overflow-hidden max-h-60 overflow-y-auto"
                      >
                        {interestsList.map((interest) => (
                          <button
                            key={interest}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, interests: [interest] });
                              setIsOpen(false);
                              if (errors.interests) setErrors({ ...errors, interests: '' });
                            }}
                            className="w-full px-6 py-4 text-left hover:bg-primary/5 transition-colors text-dark font-medium group"
                          >
                            <span
                              style={{
                                textShadow: '0 0 15px rgba(255,106,0,0.4)', // The requested "color blur"
                              }}
                              className="group-hover:text-primary transition-colors"
                            >
                              {interest}
                            </span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {errors.interests && (
                  <p id="interest-error" className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.interests}
                  </p>
                )}
              </div>

              {/* Submit Error */}
              {errors.submit && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-2">
                  <AlertCircle size={20} />
                  <span>{errors.submit}</span>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full py-5 text-xl font-bold rounded-2xl bg-primary hover:bg-primary-dark shadow-xl shadow-primary/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={24} />
                    Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </Button>

              <div className="text-center pt-4">
                <Link href="mailto:info@moolstone.com" className="text-blue-500 hover:text-blue-600 font-medium underline text-sm">
                  info@moolstone.com
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
        ) : null}
      </AnimatePresence>

      {/* Success Modal Overlay */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            onClick={() => setIsSubmitted(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-center"
            >
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6 mx-auto">
                <CheckCircle2 size={56} />
              </div>
              <h3 className="text-4xl font-bold text-dark mb-4">Inquiry Received!</h3>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Our team will get back to you shortly to discuss your project.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="rounded-full px-10 py-3 bg-primary hover:bg-primary-dark text-white font-bold"
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
