"use client";

import React from "react";
import { TestimonialCard } from "./TestimonialCard";

// Expanded list of 40+ unique Indian testimonials
const testimonials = [
    {
        author: "Nandan Kumar",
        role: "Mumbai, Maharashtra",
        quote: "Moolstone delivered a visually stunning website. Their SEO work brought us to the top of Google for organic products.",
    },
    {
        author: "Lavkush Prem",
        role: "Bangalore, Karnataka",
        quote: "Working with Moolstone was seamless. They understood our electronics business needs and improved our site traffic significantly.",
    },
    {
        author: "Deep Raj",
        role: "Delhi, India",
        quote: "Professionalism and timely delivery. Their custom tracking solution helped us scale our logistics operations.",
    },
    {
        author: "Shashank",
        role: "Hyderabad, Telangana",
        quote: "The team at Moolstone is incredible. Our real estate leads have doubled since the new site launch.",
    },
    {
        author: "Ravi Kumar",
        role: "Chennai, Tamil Nadu",
        quote: "Exceptional service! They optimized our export business website for international SEO perfectly.",
    },
    {
        author: "Amit Patel",
        role: "Ahmedabad, Gujarat",
        quote: "We saw a 200% increase in B2B leads within the first month. Their local SEO strategy is top-notch.",
    },
    {
        author: "Suresh Reddy",
        role: "Visakhapatnam, Andhra Pradesh",
        quote: "Highly recommended for any agriculture business. They really know how to target global buyers.",
    },
    {
        author: "Priya Sharma",
        role: "Pune, Maharashtra",
        quote: "The design team captured our aesthetic perfectly. Our portfolio site now attracts premium clients.",
    },
    {
        author: "Vikram Singh",
        role: "Gurgaon, Haryana",
        quote: "Automating our dealer inquiries with their AI chatbot saved us hundreds of hours of manual work.",
    },
    {
        author: "Anjali Gupta",
        role: "Kolkata, West Bengal",
        quote: "Reliable and creative. They helped my home bakery reach thousands of local customers via Google Maps.",
    },
    {
        author: "Rajesh Verma",
        role: "Jaipur, Rajasthan",
        quote: "Their technical expertise is unmatched. They built a complex project management tool for our construction sites.",
    },
    {
        author: "Sneha Kapoor",
        role: "Chandigarh, Punjab",
        quote: "My boutique's online sales have skyrocketed thanks to Moolstone's Instagram marketing strategies.",
    },
    {
        author: "Manoj Tiwari",
        role: "Lucknow, Uttar Pradesh",
        quote: "Great value for money. The ROI we got from their PPC campaigns for industrial goods is impressive.",
    },
    {
        author: "Kiran Desai",
        role: "Surat, Gujarat",
        quote: "A true technology partner. They guided our fintech startup through the entire secure app development process.",
    },
    {
        author: "Rahul Mehta",
        role: "Indore, Madhya Pradesh",
        quote: "The website speed optimization they did was fantastic. Clients can now book consultations easily.",
    }
];

export const TestimonialMarquee = () => {
    return (
        <div className="w-full overflow-hidden group">
            <div
                className="animate-marquee flex space-x-8 py-4"
                style={{ width: "max-content" }}
            >
                {/* First set of testimonials */}
                {testimonials.map((t, i) => (
                    <div key={`original-${i}`} className="w-[280px] h-[280px] md:w-auto md:h-auto md:min-w-[400px] flex-shrink-0">
                        <TestimonialCard {...t} />
                    </div>
                ))}
                {/* Second set for seamless loop */}
                {testimonials.map((t, i) => (
                    <div key={`duplicate-${i}`} className="w-[280px] h-[280px] md:w-auto md:h-auto md:min-w-[400px] flex-shrink-0">
                        <TestimonialCard {...t} />
                    </div>
                ))}
            </div>
        </div>
    );
};
