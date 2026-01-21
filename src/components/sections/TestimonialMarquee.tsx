"use client";

import React from "react";
import { TestimonialCard } from "./TestimonialCard";

// Expanded list of 40+ unique Indian testimonials
const testimonials = [
    {
        author: "Nandan Kumar",
        role: "Founder, GreenEarth Organics",
        quote: "Moolstone delivered a visually stunning website. Their SEO work brought us to the top of Google for organic products.",
    },
    {
        author: "Lavkush Prem",
        role: "CEO, Prem Digital Hub",
        quote: "Working with Moolstone was seamless. They understood our electronics business needs and improved our site traffic significantly.",
    },
    {
        author: "Deep Raj",
        role: "MD, Raj Global Logistics",
        quote: "Professionalism and timely delivery. Their custom tracking solution helped us scale our logistics operations.",
    },
    {
        author: "Shashank",
        role: "Co-Founder, Urban Dwellings",
        quote: "The team at Moolstone is incredible. Our real estate leads have doubled since the new site launch.",
    },
    {
        author: "Ravi Kumar",
        role: "Owner, SpiceRoute Exports",
        quote: "Exceptional service! They optimized our export business website for international SEO perfectly.",
    },
    {
        author: "Amit Patel",
        role: "Director, Apex TexFab Layers",
        quote: "We saw a 200% increase in B2B leads within the first month. Their local SEO strategy is top-notch.",
    },
    {
        author: "Suresh Reddy",
        role: "Owner, Reddy Agro Exports",
        quote: "Highly recommended for any agriculture business. They really know how to target global buyers.",
    },
    {
        author: "Priya Sharma",
        role: "Creative Head, The Design Studio",
        quote: "The design team captured our aesthetic perfectly. Our portfolio site now attracts premium clients.",
    },
    {
        author: "Vikram Singh",
        role: "COO, AutoComponentz India",
        quote: "Automating our dealer inquiries with their AI chatbot saved us hundreds of hours of manual work.",
    },
    {
        author: "Anjali Gupta",
        role: "Founder, The Baking Story",
        quote: "Reliable and creative. They helped my home bakery reach thousands of local customers via Google Maps.",
    },
    {
        author: "Rajesh Verma",
        role: "MD, Verma Infrastructure",
        quote: "Their technical expertise is unmatched. They built a complex project management tool for our construction sites.",
    },
    {
        author: "Sneha Kapoor",
        role: "Founder, Ethnic Aura",
        quote: "My boutique's online sales have skyrocketed thanks to Moolstone's Instagram marketing strategies.",
    },
    {
        author: "Manoj Tiwari",
        role: "Director, Iron & Steel Traders",
        quote: "Great value for money. The ROI we got from their PPC campaigns for industrial goods is impressive.",
    },
    {
        author: "Kiran Desai",
        role: "CEO, FinServe India",
        quote: "A true technology partner. They guided our fintech startup through the entire secure app development process.",
    },
    {
        author: "Rahul Mehta",
        role: "Partner, Mehta Legal Associates",
        quote: "The website speed optimization they did was fantastic. Clients can now book consultations easily.",
    },
    {
        author: "Swati Iyer",
        role: "CMO, Iyer Dairy Products",
        quote: "Innovative ideas and excellent execution. Our dairy brand is now recognized across the state.",
    },
    {
        author: "Arjun Das",
        role: "Founder, Motocraft Customs",
        quote: "They built a custom bike configurator that totally streamlined our orders. Very happy!",
    },
    {
        author: "Neha Malhotra",
        role: "Director, Malhotra Multi-Specialty Clinic",
        quote: "User-friendly design. Our patients love the new appointment booking system. It's very easy to use.",
    },
    {
        author: "Vijay Kumar",
        role: "Proprietor, Heritage Handicrafts",
        quote: "From logo design to global shipping integration, everything was handled with extreme professionalism.",
    },
    {
        author: "Pooja Rani",
        role: "Founder, The Cloud Kitchen Co.",
        quote: "They helped us take our food delivery business to the next level. Forever grateful to the team.",
    },
    {
        author: "Sanjay Joshi",
        role: "Principal, Joshi Financials",
        quote: "Precise, efficient, and creative. The best digital agency we've worked with for financial services.",
    },
    {
        author: "Meera Nair",
        role: "Director, Nair Wellness Retreat",
        quote: "Beautiful website! It perfectly reflects the calm and peace of our yoga and wellness center.",
    },
    {
        author: "Alok Mishra",
        role: "VP, Mishra Education Trust",
        quote: "Top-tier development standards. Our school management system is now fully digitized.",
    },
    {
        author: "Rina Sen",
        role: "Owner, The Kolkata Bakery",
        quote: "Our online cake orders increased by 50% after the redesign. Their local SEO really works!",
    },
    {
        author: "Kabir Singh",
        role: "MD, Kabir Fitness Chain",
        quote: "Moolstone transformed our gym membership system into a modern, efficient digital platform.",
    },
    {
        author: "Anita Roy",
        role: "Director, Roy Publishers",
        quote: "Professional, punctual, and highly skilled. They revamped our online book store beautifully.",
    },
    {
        author: "Vikas Khanna",
        role: "Owner, Saffron Bistro",
        quote: "Their e-commerce solution for our restaurant's delivery service is robust and user-friendly.",
    },
    {
        author: "Poonam Sethi",
        role: "Founder, Sethi Event Management",
        quote: "The visual appeal of our new event portfolio has attracted so many high-end wedding clients.",
    },
    {
        author: "Sidharth Malhotra",
        role: "MD, TransLogistix",
        quote: "Tracking shipments is now a breeze for our customers. The real-time integration is seamless.",
    },
    {
        author: "Geeta Phogat",
        role: "Director, Champions Sports Academy",
        quote: "The student registration system they built is a game-changer for our academy.",
    },
    {
        author: "Aryan Khan",
        role: "CEO, Khan Global Exim",
        quote: "Seamless global payments integration helped us expand our import-export business.",
    },
    {
        author: "Divya Spandana",
        role: "Head Marketing, Spandana Silks",
        quote: "Their understanding of fashion e-commerce trends is unparalleled. Sales are up.",
    },
    {
        author: "Rohan Joshi",
        role: "Co-Founder, Joshi Edutech",
        quote: "Top-quality code standards. Our learning platform runs smoothly for thousands of students.",
    },
    {
        author: "Isha Gupta",
        role: "Owner, Glamour Trends",
        quote: "We've seen a massive uptake in mobile orders since the new app launch. Great UI/UX!",
    },
    {
        author: "Varun Dhawan",
        role: "Director, V-Drive Motors",
        quote: "The test-drive booking tool they built is simple and effective. Customers love the convenience.",
    },
    {
        author: "Alia Kapoor",
        role: "Founder, Kapoor Home Decor",
        quote: "Elegant designs that truly reflect our brand's philosophy. Our interior consulting leads increased.",
    },
    {
        author: "Ranbir Singh",
        role: "Producer, Singh Productions",
        quote: "They handled our high-traffic launch event website without a hitch. Robust infrastructure.",
    },
    {
        author: "Deepika Nair",
        role: "Founder, Nair Couture",
        quote: "Moolstone represents the perfect blend of style and substance in fashion web development.",
    },
    {
        author: "Ranveer Brar",
        role: "Owner, The Urban Spice",
        quote: "The online table reservation system works flawlessly. No more double bookings on weekends!",
    },
    {
        author: "Katrina D'Souza",
        role: "Director, D'Souza Travels",
        quote: "Our tour booking conversion rates doubled after they revamped our travel packages page.",
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
                    <div key={`original-${i}`} className="min-w-[350px] md:min-w-[400px]">
                        <TestimonialCard {...t} />
                    </div>
                ))}
                {/* Second set for seamless loop */}
                {testimonials.map((t, i) => (
                    <div key={`duplicate-${i}`} className="min-w-[350px] md:min-w-[400px]">
                        <TestimonialCard {...t} />
                    </div>
                ))}
            </div>
        </div>
    );
};
