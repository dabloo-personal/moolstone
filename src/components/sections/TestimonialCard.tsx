"use client";

import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarLetter?: string;
}

export const TestimonialCard = ({ quote, author, role, avatarLetter }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
      <div className="space-y-6">
        <p className="text-text-muted italic leading-relaxed text-lg">
          &quot;{quote}&quot;
        </p>
      </div>

      <div className="flex items-center space-x-4 mt-8">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
          {avatarLetter || author.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-dark">{author}</div>
          <div className="text-sm text-text-muted">{role}</div>
        </div>
      </div>
    </div>
  );
};
