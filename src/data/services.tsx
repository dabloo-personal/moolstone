import { Check, ShoppingCart, Globe, BarChart3, Package, Truck, Headset, ArrowRight } from "lucide-react";
import { StaticImageData } from 'next/image';
import React from 'react';

// Images located in src/app/
import amazonHeroImg from "../app/amazon-services-hero.png";
import flipkartHeroImg from "../app/flipkart-services-hero.png";
import alibabaHeroImg from "../app/alibaba-services-hero.png";
import tataCliqHeroImg from "../app/tatacliq-services-hero.png";
import jiomartHeroImg from "../app/jiomart-services-hero-new.png";
import blinkitHeroImg from "../app/blinkit-services-hero.png";
import meeshoHeroImg from "../app/meesho-services-hero.png";
import zomatoHeroImg from "../app/zomato-services-hero.png";
import swiggyHeroImg from "../app/swiggy-services-hero.png";

// Service Data Definition
export const serviceData: Record<string, {
    title: string;
    description: string;
    features: (string | { title: string; description: string })[];
    icon: React.ElementType;
    gradientFrom: string;
    gradientTo: string;
    image?: string | StaticImageData;
    themeColor?: string;
    imagePosition?: string;
}> = {
    "amazon-seller-services": {
        title: "Amazon Seller Services",
        description: "Scale your Amazon business from 'Just Listed' to Best-Seller with Moolstone’s data-driven management services, designed to unlock up to 6x sales growth. We eliminate low visibility, reduce wasted ad spend, and navigate complex FBA logistics. Our 'Algorithm-First' approach leverages elite SEO, AI-optimized A+ content, and aggressive PPC strategies to maximize ROI and provide a secure roadmap for your brand’s expansion.",
        features: [
            {
                title: "Training Services for Amazon",
                description: "Unlock your brand’s full potential on the world’s largest marketplace with our specialized Amazon training. We move beyond basics, equipping you with advanced strategies for listing optimization, PPC mastery, and FBA logistics. Stop guessing and start scaling; our expert-led curriculum is designed to maximize ROI and safeguard your account health. Whether you are launching or expanding, we provide the actionable roadmap you need to dominate your category and drive sustainable revenue growth."
            },
            {
                title: "Listing and Cataloging Services",
                description: "Elevate your Amazon business with expert listing and cataloging services designed to turn browsers into buyers. We provide an all-in-one solution, combining SEO-optimized copywriting, precise inventory management, and stunning A+ Content to dominate search results. Our team handles the complexities of flat-file uploads, variations, and strict compliance, ensuring your products are always visible and error-free. Stop worrying about backend operations and start focusing on growth while we build a professional, conversion-driven catalog that maximizes your reach and revenue."
            },
            {
                title: "Account Management & Sales Boost",
                description: "Maximize your Amazon revenue and reclaim your time with our expert Account Management and Sales Boost services. We act as your strategic partner, taking full ownership of daily operations, inventory forecasting, and complex compliance issues. Our team combines data-driven PPC strategies with 24/7 account health monitoring to skyrocket sales velocity and ensure long-term stability. Stop stressing over operations and start seeing results—let us fine-tune your business for higher rankings, better conversions, and explosive profitability."
            },
            {
                title: "Enhanced Brand Content (A+)",
                description: "Elevate your brand storytelling with premium A+ Content. We design visually stunning layouts that showcase your product's unique value proposition. From comparison charts to lifestyle imagery, we create immersive brand experiences that build trust and reduce return rates. Proven to increase conversion rates by up to 10%, our A+ content designs are tailored to resonate with your specific target audience, separating your brand from generic competitors and solidifying your market position."
            },
            {
                title: "Inventory & Order Management",
                description: "Streamline your logistics with our Amazon SPN certified management. We implement robust systems to prevent stockouts and overstocking, ensuring your IPI score remains healthy. Our team handles complex FBA shipments, reconciliation of lost inventory, and swift order processing for FBM sellers. We provide detailed reporting on sell-through rates and aging inventory, helping you make data-driven decisions that maximize your cash flow and minimize long-term storage fees."
            },
            {
                title: "Intellectual Property Protection",
                description: "Secure your brand and unlock exclusive growth tools with our expert Amazon Intellectual Property services. We guide you through Trademark registration and Brand Registry enrollment, granting access to premium features like A+ Content and Stores. Beyond setup, we proactively monitor your listings to remove counterfeiters and hijackers instantly. Protect your hard-earned reputation and treat your IP as a strategic asset. Let us handle the legal complexities to safeguard your Buy Box and ensure your business scales without fear of copycats."
            },
            {
                title: "Suspended Account Reconciliation",
                description: "Don't let a suspension destroy your business or freeze your capital. We specialize in expert account reconciliation and forensic audits to pinpoint the exact root cause of your violation. Our team crafts precise, data-backed Plans of Action (POA) designed to reinstate your selling privileges quickly and recover withheld funds. Whether facing Section 3 violations or performance issues, we fight to unlock your dashboard. Stop losing daily revenue—let us navigate Amazon’s complex appeals process to restore your account and cash flow."
            },
            {
                title: "Global Expansion Strategy",
                description: "Take your local success to a global stage. We provide a step-by-step roadmap for expanding into international marketplaces like Amazon US, UK, UAE, and beyond. We handle the complexities of cross-border VAT compliance, international logistics, and localized listing translation. Our team researches local market trends to adapt your product positioning, ensuring you launch with impact. meaningful revenue streams from untapped global markets with our expert guidance."
            }
        ],
        icon: ShoppingCart,
        gradientFrom: "from-orange-400",
        gradientTo: "to-yellow-500",
        image: amazonHeroImg,
        themeColor: "#FF9900"
    },
    "flipkart-seller-services": {
        title: "Flipkart Seller Services",
        description: "Unlock the potential of India's leading marketplace with our expert Flipkart Seller Services. We provide end-to-end management, from error-free cataloging to securing the coveted 'F-Assured' badge. Our team optimizes listings for maximum visibility and manages high-impact Product Listing Ads (PLA) to drive sales during mega-events like Big Billion Days. We tackle operational hurdles like returns and compliance, ensuring your account health stays top-tier. Partner with us to streamline operations and dominate your category while maximizing profitability.",
        features: [
            {
                title: "Account Management Service for Flipkart",
                description: "Maximize your Flipkart revenue and streamline operations with our expert Account Management services. We act as your strategic partner, managing daily account health, returns, and high-impact Product Listing Ads (PLA). Our team ensures you secure the 'F-Assured' badge and dominate major sales events like Big Billion Days with data-driven strategies. We handle the heavy lifting of compliance and inventory planning so you don't have to. Stop stressing over metrics—let us drive your growth and keep your business profitable."
            },
            {
                title: "Flipkart Product Listing Services",
                description: "Dominate Flipkart search results with our expert Product Listing Services designed for speed and conversion. We handle the entire cataloging process, navigating strict Quality Check (QC) guidelines to ensure your products go live instantly without rejections. Our team crafts SEO-optimized titles and persuasive descriptions that maximize visibility while minimizing returns. From complex bulk uploads to accurate attribute mapping, we eliminate technical errors and present your brand professionally. Stop struggling with data entry—start driving consistent sales with a perfectly optimized catalog."
            },
            {
                title: "Flipkart Core Onboarding & Setup Services",
                description: "Launch your Flipkart business effortlessly with our expert Onboarding and Setup services. We handle the entire process, from GST verification to securing Brand Approval (Gating) for restricted categories, ensuring you skip bureaucratic delays. Our team configures your account to target the 'Flipkart Assured' badge from day one and navigates strict Quality Check (QC) protocols to get your listings live without rejection. Start your journey with a professional, error-free foundation designed for immediate visibility and long-term sales growth."
            },
            {
                title: "Flipkart Advertising & Marketing Services",
                description: "Supercharge your sales and dominate Flipkart search results with our expert Advertising management. We implement high-impact Product Listing Ads (PLA) strategies that drive massive traffic while strictly controlling your ACOS. Our team maximizes Return on Ad Spend (ROAS) by optimizing bids and targeting high-intent buyers, ensuring every rupee contributes to profit. We also prepare your brand for mega-events like Big Billion Days, scaling your reach when it matters most. Stop wasting budget—partner with us to turn clicks into consistent revenue."
            },
            {
                title: "Flipkart Logistics & Fulfillment Solutions",
                description: "Optimize your supply chain and slash shipping costs with our expert Flipkart Logistics solutions. Whether utilizing Fulfillment by Flipkart (FBF) or upgrading your own warehouse for Smart Fulfillment, we ensure seamless execution. We handle infrastructure setup, packaging compliance, and inventory planning to secure the coveted 'F-Assured' badge and faster delivery tags. Our strategies position stock closer to buyers, reducing cancellations and national shipping fees. Stop letting logistics slow you down; build a resilient fulfillment network that boosts visibility and customer trust."
            },
            {
                title: "Specialized Flipkart Services",

                description: "Safeguard your business and recover lost revenue with our specialized Flipkart solutions. We handle the critical financial tasks, expertly managing Seller Protection Fund (SPF) claims and deep-dive payment reconciliation to ensure you get every rupee you’re owed. Facing trouble? Our team crafts policy-backed Plans of Action (POA) to reinstate suspended accounts and unlock frozen inventory fast. From resolving QC rejections to enforcing Brand Gating, we navigate the complex technical and legal hurdles so you can sell with total confidence."

            },

        ],
        icon: ShoppingCart,
        gradientFrom: "from-blue-500",
        gradientTo: "to-yellow-400",
        image: flipkartHeroImg,
        themeColor: "#2874F0"
    },
    "alibaba-seller-services": {
        title: "Alibaba Seller Services",
        description: "Unlock global B2B opportunities with our comprehensive Alibaba Seller Services. We provide end-to-end support, from securing Gold Supplier and Verified status to designing a world-class Minisite that builds international trust. Our experts manage aggressive Keyword Advertising (KWA) and proactive RFQ bidding to fill your pipeline with high-quality export leads. Whether optimizing Star Ratings or handling Trade Assurance contracts, we ensure your business dominates the search results. Stop waiting for local orders—scale your manufacturing business globally with us.",
        features: [
            {
                title: "Alibaba Core Onboarding & Membership Setup",
                description: "Establish instant credibility in the global B2B market. We guide you through the complex verification process to obtain Gold Supplier status, a standard requirement for serious international buyers. We handle all documentation and authentication steps, ensuring your profile displays trust badges prominently. This investment unlocks premium features and signals to buyers that your business is legitimate, verified, and ready for high-volume trade."
            },
            {
                title: "Alibaba Minisite Design & Cataloging Services",
                description: "Transform your Alibaba presence into a world-class digital showroom with our expert Minisite and Cataloging services. We design custom, premium storefronts that showcase your manufacturing power and build instant buyer trust. Beyond aesthetics, our team optimizes every product title and attribute for maximum SEO ranking, ensuring you dominate search results. We handle complex bulk uploads and strategically configure your 'Product Showcase' for superior visibility. Stop settling for generic listings—let us build a high-performance store that drives qualified export leads."
            },
            {
                title: "Alibaba Advertising & Marketing (KWA) Services",
                description: "Dominate Alibaba’s search results and maximize your export leads with our expert Keyword Advertising (KWA) management. We secure the top 5 premium positions by identifying high-volume, buyer-intent keywords that competitors often miss. Our team optimizes your bidding strategy and 'Star Rating'to lower your cost-per-click while skyrocketing visibility. Whether using Premium Sponsored Ads or standard PPC, we ensure your budget targets only serious B2B buyers. Stop wasting money on irrelevant clicks—turn your ad spend into high-value global contracts."
            },
            {
                title: "Global RFQ Management",
                description: "Don't wait for buyers to find you; go find them. We actively manage the Request for Quotation (RFQ) market, identifying high-potential buying leads relevant to your industry. Our team writes professional, competitive quotes that stand out from the noise. We follow up persistently and professionally, nurturing leads through the negotiation phase to convert inquiries into long-term export contracts."
            },

            {
                title: "Product Ranking Optimization",
                description: "Appear on the first page of Alibaba search results. We optimize your product postings with high-quality images, keyword-rich titles, and comprehensive specifications. We analyze the platform’s ranking algorithm to improve your Product Information Score. By ensuring your listings meet all 'Superior' criteria, we maximize organic visibility and drive consistent traffic without relying solely on paid ads."
            },
            {
                title: "Verified Supplier Strategy",
                description: "Take the next step in credibility by becoming a Verified Supplier. We prepare your business for the rigorous on-site inspection by third-party agencies like SGS or TÜV Rheinland. We help you organize your production lines, documentation, and quality control systems to ensure a flawless audit. Displaying the 'Verified' tag dramatically increases buyer confidence and inquiry rates."
            },
            {
                title: "Export Documentation Support",
                description: "Navigate the maze of international trade paperwork with ease. We provide guidance on essential export documentation, including commercial invoices, packing lists, and certificates of origin. Our team ensures your documents comply with both Indian export regulations and destination country import rules, preventing customs delays and ensuring your shipments reach your buyers smoothly."
            }
        ],
        icon: Globe,
        gradientFrom: "from-orange-600",
        gradientTo: "to-orange-400",
        themeColor: "#FF6A00",
        image: alibabaHeroImg
    },
    "tata-cliq-seller-services": {
        title: "Tata Cliq Seller Services",
        description: "Elevate your business on India’s premium marketplace with our expert Tata Cliq solutions. We navigate the strict onboarding process, securing Brand Authorization and Category Ungating to get you live fast. Our team creates luxury catalogs meeting Cliq’s superior aesthetic standards while managing complex Omnichannel setups and daily operations. From ensuring packaging compliance to maximizing revenue during exclusive sale events, we handle the entire lifecycle. Access high-value customers and build a trusted brand presence with our professional end-to-end management.",
        features: [
            {
                title: "Tata Cliq Core Onboarding & Brand Approval Services",
                description: "Secure your spot on India’s premium marketplace with our expert Onboarding and Brand Approval services. We navigate strict compliance hurdles, managing critical Brand Authorization Letters and trademark documentation to prevent rejection. Our team handles the entire lifecycle, including Category Ungating and technical configuration. Whether you need 'Official Brand' status or fast-track approval, we ensure a smooth, compliant entry. Bypass the bureaucracy and launch your store with a verified, professional foundation immediately to reach high-value customers."
            },
            {
                title: "Tata Cliq Cataloging & Listing Services",
                description: "Transform your catalog into a luxury storefront with our expert Tata Cliq listing services. We navigate the notoriously strict Quality Check (QC) process, ensuring precise attribute mapping to prevent rejections. Our team delivers studio-quality visuals and persuasive content that meet Cliq’s premium aesthetic standards, driving higher conversion. Whether for bulk uploads or single listings, we ensure your inventory goes live faster. Capture high-value buyers with a flawless, professional presentation that truly sells your brand."
            },
            {
                title: "Tata Cliq Operations & Order Management Service",
                description: "Master Tata Cliq’s unique ecosystem with our expert operations management. We streamline the entire lifecycle, from strict SLA adherence and packaging compliance to complex Omnichannel coordination. Our team proactively monitors your Account Health, preventing penalties while expertly managing returns to recover lost revenue. We ensure error-free processing and a pristine Seller Score, helping you run a profitable, seamless business where operational errors are minimized."
            },
            {
                title: "Tata Cliq Logistics & Reconciliation Services",
                description: "Secure your margins and streamline your supply chain with our expert Logistics and Reconciliation services. We manage daily coordination with 3PL partners to ensure zero missed pickups and seamless delivery. Crucially, we audit every settlement report to recover lost revenue from shipping overcharges, commission errors, and missing reimbursements. Whether fighting for damaged return claims or validating weight disputes, we ensure your operations are efficient and your payments are 100% accurate."
            },
            {
                title: "Tata Cliq Growth & Promotions Services",
                description: "Accelerate your revenue on Tata Cliq with our expert promotion strategies. We position your brand to dominate major events like the '10/10 Sale' and 'End of Season Sale,' capturing peak traffic. Our team configures high-performing coupons and strategic price drops that land you in the coveted 'Deals' section without sacrificing profitability. We coordinate with category managers to secure premium visibility. Turn seasonal spikes into consistent daily sales and scale your business with a data-driven approach that maximizes conversion."
            }
        ],
        icon: ShoppingCart,
        gradientFrom: "from-red-600",
        gradientTo: "to-black",
        themeColor: "#E40046",
        image: tataCliqHeroImg
    },
    "reliance-jiomart-seller-services": {
        title: "Reliance JioMart Seller Services",
        description: "Unlock the massive potential of India’s largest retail network with our expert Reliance JioMart Seller Services. We streamline the entire lifecycle, from complex Onboarding and Brand Approval to managing daily operations. Our team creates compliant, high-quality catalogs that meet strict guidelines, while optimizing your logistics to minimize returns. We also position your brand to dominate major events like the 'Mahabachat Sale' with strategic promotions. Tap into millions of new customers and scale your business effortlessly with our professional management.",
        features: [
            {
                title: "Reliance JioMart Core Onboarding & Registration Services",
                description: "Start selling on India’s largest retail network with our expert JioMart Onboarding services. We streamline the complex registration process, handling GST verification and securing critical Brand Approvals to prevent rejection. Our team navigates strict category restrictions, ensuring your business is listed correctly—whether for fashion, electronics, or essentials. We manage the entire technical setup and document validation to get your account live fast. Bypass the bureaucratic hurdles and launch a verified, professional store ready for millions of customers."
            },
            {
                title: "Reliance JioMart Cataloging & Content Management Services",
                description: "Maximize your visibility on India’s largest retail platform with our expert JioMart Cataloging services. We handle the strict content guidelines, ensuring your images and attributes meet all technical standards for instant approval. Our team optimizes product titles and descriptions with high-ranking keywords to boost your search visibility. From managing complex bulk uploads to creating professional, trustworthy visuals, we ensure your inventory stands out. Stop struggling with rejections—let us build a high-performing catalog that drives traffic and sales."
            },
            {
                title: "Reliance JioMart Inventory & Order Processing Services",
                description: "Streamline your operations and protect your seller rating with our expert JioMart Inventory & Order Processing services. We manage the entire fulfillment lifecycle, strictly adhering to SLA timelines to prevent late dispatch penalties. Our team implements smart inventory synchronization to eliminate overselling and stockouts during peak sales events. Crucially, we ensure full compliance with JioMart’s packaging and labeling guidelines to guarantee smooth logistics pickups. Run a penalty-free, efficient business that delivers orders on time."
            },
            {
                title: "Reliance JioMart Logistics & RTO Management Services",
                description: "Minimize losses and streamline deliveries with our expert JioMart Logistics services. We coordinate daily with courier partners to ensure timely pickups and resolve issues like 'fake attempts' immediately. Our team proactively tracks shipments to reduce Return to Origin (RTO) rates. Crucially, we manage the complex claims process for lost or damaged returns, filing evidence-based appeals to ensure you are reimbursed. Keep your supply chain moving efficiently while protecting your hard-earned revenue from logistics errors."
            },
            {
                title: "Reliance JioMart Advertising & Promotions Services",
                description: "Accelerate your revenue on JioMart with our data-driven Advertising and Promotion strategies. We manage high-ROI ad campaigns to boost visibility for your listings immediately. Our team aligns your brand with massive events like the 'Mahabachat Sale,' ensuring you capture peak traffic. We also configure strategic coupons and competitive pricing to drive higher conversion rates. Transform your store from a passive listing into a sales powerhouse that dominates the category and delivers consistent, scalable growth."
            }
        ],
        icon: ShoppingCart,
        gradientFrom: "from-blue-600",
        gradientTo: "to-red-500",
        themeColor: "#0078AD",
        image: jiomartHeroImg,
        imagePosition: "object-center"
    },
    "blinkit-seller-services": {
        title: "Blinkit Seller Services",
        description: "Master the revolution of Quick Commerce with our expert Blinkit onboarding and management services. We navigate the strict 'Dark Store' inventory requirements, handling Brand Approval and the critical APOB (Additional Place of Business) documentation needed to sell. Our team ensures your stock is verified and inwarded correctly for 10-minute delivery. We optimize your product visibility and manage stock replenishment to prevent 'Out of Stock' penalties. Position your brand for instant gratification and capture high-intent customers in your city.",
        features: [
            {
                title: "Dark Store Onboarding & Documentation",
                description: "Enter the high-growth world of Quick Commerce with our specialized Blinkit onboarding. The biggest hurdle is the strict documentation for 'Dark Stores'—specifically the Additional Place of Business (APOB) registration. We handle this complex compliance process, coordinating with tax authorities and Blinkit teams to get your inventory inwarded. We also manage Brand Approval to ensure your products are listed under the correct official brand tag. Get your stock into the nearest micro-fulfillment center fast and penalty-free."
            },
            {
                title: "Inventory & Replenishment Management",
                description: "Master the 10-minute delivery model with our precision inventory management. In Quick Commerce, 'Out of Stock' means immediate delisting. We monitor your sales velocity real-time to predict exactly when you need to send stock to the Dark Store. Our team manages the 'Appointment Booking' for inwarding, ensuring your slots are confirmed and stock is accepted without rejection. We analyze regional demand to help you stock the right products in the right neighborhoods, maximizing your rotation speed."
            },
            {
                title: "Spotlight Ads & Search Visibility",
                description: "Win the battle for visibility on the Blinkit app with our advertising strategies. Since purchase decisions happen in seconds, being at the top is crucial. We manage 'Spotlight' ads and keyword bidding to place your brand above competitors in search results. Our team analyzes search trends in specific pin codes to optimize your ad spend, ensuring you target high-intent buyers. Drive impulse purchases and dominate your category with hyper-local advertising that delivers instant ROI."
            }
        ],
        icon: Truck,
        gradientFrom: "from-yellow-400",
        gradientTo: "to-green-500",
        themeColor: "#F8CB46",
        image: blinkitHeroImg
    },
    "meesho-seller-services": {
        title: "Meesho Seller Services",
        description: "Tap into India’s massive reseller network with our specialized Meesho management. We help you leverage the '0% Commission' model to maximize your profits while reaching millions of customers in Tier-2 and Tier-3 cities. Our team handles the simple yet critical catalog upload process, ensuring your products are mapped correctly for visibility. We manage daily order processing and logistics coordination to avoid dispatch delays. From running budget-friendly ads to participating in the 'Maha Indian Savings Sale,' we drive volume for your business.",
        features: [
            {
                title: "Zero Commission Onboarding Seller Services",
                description: "Start your journey on India’s most seller-friendly platform with our expert onboarding. We leverage Meesho’s '0% Commission' model to set up your account for maximum profitability. Our team handles the GST and bank verification process, ensuring a smooth activation without technical glitches. We assist with the unique 'Supplier Panel' configuration, setting up your shipping preferences to align with Meesho’s logistics partners. Launch your store correctly from day one and tap into a massive network of resellers and budget-conscious customers."
            },
            {
                title: "Cataloging & Smart Pricing Seller Services",
                description: "Make your products go viral among resellers with our specialized cataloging. Meesho relies heavily on visual appeal and competitive pricing. We create clean, attractive image catalogs that look great on mobile screens, where 90% of Meesho users browse. Crucially, we use the 'Price Recommendation' tool to help you set competitive prices that attract resellers while protecting your margin. We handle bulk uploads and category mapping to ensure your products appear in the right feeds."
            },
            {
                title: "Ads & Sales Events Seller Services",
                description: "Scale your order volume exponentially by mastering Meesho’s unique advertising tools. We manage your ad campaigns, selecting the right catalogs to promote for the lowest Cost Per Click (CPC). Our team aligns your inventory with high-traffic sales events like the 'Maha Indian Savings Sale,' where volume explodes. We analyze 'Views' and 'Clicks' data to refine your strategy, ensuring your products are pushed to millions of resellers who do the selling for you."
            }
        ],
        icon: Package,
        gradientFrom: "from-pink-500",
        gradientTo: "to-purple-500",
        themeColor: "#C0126D",
        image: meeshoHeroImg
    },
    "zomato-seller-services": {
        title: "Zomato Seller Services",
        description: "Digitize your restaurant and explode your order volume with our expert Zomato Partner management. We handle the complete Onboarding process, ensuring FSSAI compliance and seamless menu digitization. Our team optimizes dish images and descriptions to increase appetite appeal and conversion rates. We configure strategic discounts and run high-ROI CPC ads to boost your visibility. Whether you are a cloud kitchen or a dine-in brand, we help you dominate the local food delivery market and maintain high ratings.",
        features: [
            {
                title: "Zomato Onboarding & FSSAI Registration",
                description: "Launch your restaurant on Zomato without the administrative headache. We handle the complete onboarding process, validating your FSSAI license, GST, and business documents to ensure zero rejections. The platform requires strict compliance; our team navigates these protocols to get your 'Online Ordering' feature active instantly. We also manage the technical profile setup, ensuring your location and business details are accurate. Whether you are a new Cloud Kitchen or an established brand, we get you live immediately."
            },
            {
                title: "Zomato Menu Digitization",
                description: "Transform your menu into a high-converting digital asset. We don't just upload a list; we optimize your Zomato listing with appetizing food photography and persuasive descriptions that trigger hunger. Our team strategically organizes your items using 'Must Try' tags and 'Chef’s Special' badges to highlight high-margin dishes. We ensure correct dietary tagging and smooth navigation to improve customer experience. Don't let a boring text list kill your sales—we create a visually stunning menu that drives instant orders."
            },
            {
                title: "Zomato Ads & Growth Management",
                description: "Drive a surge of orders with our expert Zomato ad management. We run targeted Cost-Per-Click (CPC) campaigns that place your kitchen at the top of search results, specifically during peak hunger hours. Our team configures strategic 'Zomato Gold' offers and smart discounts to attract new customers while protecting your margins. We analyze performance metrics to ensure every rupee delivers maximum Return on Ad Spend (ROAS). Stop relying on organic reach—scale your business with paid strategies that deliver consistent volume."
            }
        ],
        icon: Truck,
        gradientFrom: "from-red-500",
        gradientTo: "to-red-700",
        themeColor: "#CB202D",
        image: zomatoHeroImg
    },
    "swiggy-seller-services": {
        title: "Swiggy Seller Services",
        description: "Accelerate your food delivery business with our expert Swiggy Partner solutions. We streamline the registration process, handling menu setup and FSSAI verification to get you live fast. Our team uses data-driven insights to optimize your pricing and 'Best Seller' recommendations, driving higher average order values. We manage your participation in Swiggy’s exclusive campaigns and run targeted ads to capture hungry customers during peak hours. From improving operational metrics to maximizing revenue, we ensure your kitchen stays busy and profitable.",
        features: [
            {
                title: "Swiggy Partner Registration & Setup",
                description: "Start your food delivery journey on Swiggy in record time. We manage everything from initial registration to the final 'Swiggy Partner App' setup. Our experts ensure your GST, FSSAI, and banking documents are verified correctly to get your kitchen live fast without rejection. We also provide operational support to help you manage the dashboard, ensuring you accept and process orders efficiently. Eliminate technical delays and start serving your local customers immediately with a professionally configured profile."
            },
            {
                title: "Menu Engineering & Pricing Optimization",
                description: "Beat the competition with a smart, data-driven menu strategy. We engineer your Swiggy menu to align with the platform’s algorithm, utilizing 'Best Seller' recommendations and 'Add-ons' to increase your Average Order Value (AOV). We conduct competitor price analysis to ensure your rates are attractive yet profitable. With the right mix of high-quality images and persuasive descriptions, we ensure that when a customer opens your restaurant page, they convert immediately rather than scrolling past."
            },
            {
                title: "Swiggy Ads & Carousel Promotions",
                description: "Boost your restaurant's visibility with premium ad placements on Swiggy. We manage targeted ad campaigns that feature your brand in 'Top Picks' and Carousel banners to capture high-intent customers. Our team sets up strategic coupons and discounts that trigger impulse purchases during peak hours. We actively monitor daily performance metrics to keep your Cost-Per-Order low while driving consistent volume. Don't rely on organic reach alone—scale your business with paid growth strategies that deliver ROI."
            }
        ],
        icon: Truck,
        gradientFrom: "from-orange-500",
        gradientTo: "to-orange-700",
        themeColor: "#FC8019",
        image: swiggyHeroImg
    }
};


import digitalGrowthHeroImg from "../app/digital-growth-infrastructure.jpg";
import aiAutomationHeroImg from "../app/ai-automation-solutions.jpg";

export const webServiceData: Record<string, {
    title: string;
    description: string;
    features: (string | { title: string; description: string })[];
    icon: React.ElementType;
    gradientFrom: string;
    gradientTo: string;
    image?: string | StaticImageData;
    themeColor?: string;
    imagePosition?: string;
}> = {
    "full-stack-web-development": {
        title: "Full-Stack Web Development",
        description: "Comprehensive solutions for building a professional online presence. We offer custom development of Static (landing pages), Dynamic (interactive sites), and E-commerce (online stores) platforms tailored to your business goals.",
        features: [
            { title: "Static Websites", description: "High-performance landing pages for portfolios and info sites." },
            { title: "Dynamic Platforms", description: "Interactive, data-driven applications tailored to your needs." },
            { title: "E-commerce Solutions", description: "Robust online stores built for sales and scalability." },
            { title: "Custom Development", description: "Tailored codebases aligned with specific business goals." },
            { title: "Scalable Architecture", description: "Systems designed to grow seamlessly with your business." }
        ],
        icon: Globe,
        gradientFrom: "#3b82f6",
        gradientTo: "#60a5fa",
        themeColor: "#3b82f6",
        image: "/Fullstack.jpeg",
        imagePosition: "right"
    },
    "ecommerce-ui-ux-design": {
        title: "E-commerce & UI/UX Design",
        description: "User-centric design focusing on intuitive layouts and aesthetic appeal to ensure a seamless visitor experience. We combine visual excellence with functional clarity to drive engagement.",
        features: [
            { title: "Intuitive Layouts", description: "Navigation designed for effortless user journeys." },
            { title: "Aesthetic Appeal", description: "Visually stunning designs that reflect your brand identity." },
            { title: "Seamless Visitor Experience", description: "Frictionless interactions across all devices." },
            { title: "Conversion Optimization", description: "Design elements strategically placed to boost sales." },
            { title: "User-Centric Prototyping", description: "Drafts focused on actual user behaviors and needs." }
        ],
        icon: ShoppingCart,
        gradientFrom: "#ec4899",
        gradientTo: "#f472b6",
        themeColor: "#ec4899",
        image: "/ecommerce-uiux.jpeg",
        imagePosition: "left"
    },
    "ai-social-media-automation": {
        title: "AI & Automation Solutions", // Renamed to match user header better, or keep old key for compatibility
        description: "Modernizing your workflow with the latest technology to save time and scale faster. We streamline communication and integrate smart tools to improve efficiency.",
        features: [
            { title: "Social Media Automation", description: "Automated messaging and workflows for WhatsApp, Instagram, and Facebook." },
            { title: "AI Integration", description: "Smart AI tools directly impacting business processes or websites." },
            { title: "AI Creative Services", description: "Generative AI for custom cards, videos, and digital graphics." },
            { title: "Workflow Streamlining", description: "Reducing manual tasks to save time and resources." },
            { title: "Email Automation", description: "Automated campaigns to nurture leads and engagement." }
        ],
        icon: BarChart3,
        gradientFrom: "#8b5cf6",
        gradientTo: "#a78bfa",
        themeColor: "#8b5cf6",
        image: aiAutomationHeroImg,
        imagePosition: "right"
    },
    "seo-google-maps-onboarding": {
        title: "SEO & Google Maps Onboarding",
        description: "Essential technical services to ensure your business is visible and accessible. We improve your ranking on Google and optimize your local presence to attract customers.",
        features: [
            { title: "Search Engine Optimization (SEO)", description: "Driving organic traffic and increasing search visibility." },
            { title: "Google Maps Onboarding", description: "Setting up and managing your Google Business Profile." },
            { title: "Local Presence Optimization", description: "Strategies to attract and retain local customers." },
            { title: "Ranking Improvement", description: "Techniques to climb search result pages." },
            { title: "Traffic Growth", description: "Infrastructure to support and convert increased visitors." }
        ],
        icon: Globe,
        gradientFrom: "#10b981",
        gradientTo: "#34d399",
        themeColor: "#10b981",
        image: digitalGrowthHeroImg,
        imagePosition: "left"
    },
    "site-migrations-maintenance": {
        title: "Site Maintenance & Modifications", // Renamed slightly to fit user text
        description: "Expert updates for existing websites, including feature additions, bug fixes, and layout improvements. We provide hassle-free domain management and seamless local-to-live transfers.",
        features: [
            { title: "Feature Additions & Bug Fixes", description: "Continuous improvement of your platform's functionality." },
            { title: "Local to Live Transfer", description: "Seamless migration from local dev to live servers with zero data loss." },
            { title: "Domain & Hosting Management", description: "Hassle-free setup of website addresses and server space." },
            { title: "Layout Improvements", description: "Refining designs to keep up with modern trends." },
            { title: "Zero Data Loss Migration", description: "Secure handling of your data during all transfers." }
        ],
        icon: Check,
        gradientFrom: "#f59e0b",
        gradientTo: "#fbbf24",
        themeColor: "#f59e0b",
        image: "/site-maintenance.jpeg",
        imagePosition: "right"
    }
};
