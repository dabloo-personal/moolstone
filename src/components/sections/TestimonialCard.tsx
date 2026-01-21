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
    <div className="bg-white p-6 md:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full overflow-hidden">
      <div className="space-y-3 md:space-y-6 flex-1 overflow-hidden">
        <p className="text-text-muted italic leading-relaxed text-sm md:text-lg line-clamp-4 md:line-clamp-none">
          &quot;{quote}&quot;
        </p>
      </div>

      <div className="flex items-center space-x-3 md:space-x-4 mt-4 md:mt-8 pt-4 border-t border-gray-50 md:border-none">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-base md:text-lg flex-shrink-0">
          {avatarLetter || author.charAt(0)}
        </div>
        <div className="min-w-0">
          <div className="font-bold text-dark text-sm md:text-base truncate">{author}</div>
          <div className="text-xs md:text-sm text-text-muted truncate">{role}</div>
        </div>
      </div>
    </div>
  );
};
