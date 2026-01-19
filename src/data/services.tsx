import { Check, ShoppingCart, Globe, BarChart3, Package, Truck, Headset, ArrowRight } from "lucide-react";
import { StaticImageData } from 'next/image';
import React from 'react';

// Images located in src/app/
import amazonHeroImg from "../app/amazon-services-hero.png";
import flipkartHeroImg from "../app/flipkart-services-hero.png";
import alibabaHeroImg from "../app/alibaba-services-hero.png";
import tataCliqHeroImg from "../app/tatacliq-services-hero.png";
import jiomartHeroImg from "../app/jiomart-services-hero.png";
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
        description: "Unlock the full potential of India’s homegrown e-commerce giant with expert Flipkart strategies. From acquiring the 'Flipkart Assured' badge to executing high-ROI ad campaigns, we optimize every step of your journey. Ensure dominance in your category with our data-driven approach to inventory and visibility.",
        features: [
            {
                title: "Flipkart Assured Badge Eligibility",
                description: "Earning the Flipkart Assured (FA) badge is the key to unlocking higher visibility and customer trust. We rigorously analyze your account metrics, identifying gaps in return rates and dispatch timelines. Our team implements corrective measures to streamline your operations, ensuring you meet the strict criteria for FA status. Once acquired, this badge boosts your search rankings and conversion rates significantly, signaling reliability to millions of shoppers."
            },
            {
                title: "Cataloging & Inventory Management",
                description: "A well-structured catalog is the foundation of specific sales. We handle end-to-end cataloging, ensuring high-quality images and SEO-rich descriptions that comply with Flipkart's guidelines. Our inventory management systems prevent stockouts during high-traffic sales like Big Billion Days. We implement real-time tracking and forecasting models to optimize your stock levels, reducing storage costs while maximizing sales potential across all fulfillment centers."
            },
            {
                title: "Flipkart Ads Optimization",
                description: "Stop wasting money on ineffective campaigns. Our advertising experts design targeted PLA (Product Listing Ads) and PCA (Product Contextual Ads) strategies to capture high-intent buyers. We constantly monitor ROI to lower your ACoS while increasing sales volume. By analyzing click-through rates and conversion data, we refine your bidding strategy to ensure your products appear in the premium slots, driving maximum traffic for every rupee spent."
            },
            {
                title: "Performance Analysis & Growth Strategy",
                description: "Data is your most valuable asset. We provide in-depth weekly reports analyzing your seller tier, customer feedback, and regional sales trends. Our experts identify underperforming SKUs and emerging opportunities, crafting a quarterly growth roadmap tailored to your business goals. We focus on holistic growth, improving your overall seller score to unlock exclusive platform benefits and negotiate better terms."
            },
            {
                title: "Flipkart Fulfillment (FBF) Enrollment",
                description: "Streamline your logistics and delight customers with faster delivery by enrolling in Flipkart Fulfillment (FBF). We guide you through the registration process, inventory planning, and appointment slot booking for Flipkart's warehouses. By using FBF, you gain higher search visibility, the 'F-Assured' tag, and significant trust from buyers, leading to up to 30% higher conversion rates and reduced logistical headaches."
            },
            {
                title: "Account Reinstatement Services",
                description: "Face account suspension? We provide specialized assistance to reinstate your suspended Flipkart seller account. Our experts analyze the root cause of the breach—whether it's RTD breaches, counterfeit claims, or high return rates—and draft a compelling Plan of Action (POA). We communicate directly with Flipkart's seller support to expedite the reinstatement process, ensuring your business gets back on track with minimal downtime."
            },
            {
                title: "Brand Protection & Registry",
                description: "Safeguard your hard-earned brand reputation on Flipkart. We assist with Brand Registry to protect your intellectual property from unauthorized sellers and mapo-mapping. Our team monitors listings 24/7 to detect and report infringements immediately. By securing your brand, you not only protect your buy box but also unlock premium advertising and storefront features exclusive to registered brand owners."
            },
            {
                title: "Festive Sale Planning (BBD)",
                description: "Maximize your revenue during India’s biggest shopping events like Big Billion Days (BBD) and Diwali sales. We create a meticulous festive roadmap 4 months in advance, covering inventory forecasting, aggressive discount strategies, and budget allocation for ads. Our goal is to ensure you have enough stock, high visibility, and the operational capacity to handle 10x order volumes without performance dips."
            }
        ],
        icon: ShoppingCart,
        gradientFrom: "from-blue-500",
        gradientTo: "to-yellow-400",
        image: flipkartHeroImg,
        themeColor: "#2874F0"
    },
    "alibaba-seller-services": {
        title: "Alibaba Seller Services",
        description: "Dominate the global export market by connecting with B2B buyers worldwide. We assist in setting up Gold Supplier accounts, optimizing minisites, and navigating complex cross-border trade assurance. Transform your local manufacturing into a global export powerhouse with our end-to-end guidance.",
        features: [
            {
                title: "Gold Supplier Setup",
                description: "Establish instant credibility in the global B2B market. We guide you through the complex verification process to obtain Gold Supplier status, a standard requirement for serious international buyers. We handle all documentation and authentication steps, ensuring your profile displays trust badges prominently. This investment unlocks premium features and signals to buyers that your business is legitimate, verified, and ready for high-volume trade."
            },
            {
                title: "Minisite Design & Optimization",
                description: "Your Minisite is your global storefront. We design professional, mobile-responsive storefronts that showcase your manufacturing capabilities and product range effectively. Our team optimizes the layout for user experience, highlighting your best-selling categories and company certifications. By integrating high-quality media and clear navigation, we ensure international buyers get a comprehensive, reassuring view of your business, encouraging them to initiate inquiries."
            },
            {
                title: "Trade Assurance Guidance",
                description: "Build trust with buyers who are wary of overseas transactions. We help you set up and manage Trade Assurance, Alibaba's order protection service. We guide you through drafting contracts that protect both parties, clearly defining product quality standards and shipping timelines. By successfully completing Trade Assurance orders, you build a visible transaction history that serves as social proof, attracting more risk-averse buyers."
            },
            {
                title: "Global RFQ Management",
                description: "Don't wait for buyers to find you; go find them. We actively manage the Request for Quotation (RFQ) market, identifying high-potential buying leads relevant to your industry. Our team writes professional, competitive quotes that stand out from the noise. We follow up persistently and professionally, nurturing leads through the negotiation phase to convert inquiries into long-term export contracts."
            },
            {
                title: "Keyword Advertising (KWA)",
                description: "Capture high-intent traffic with strategic Keyword Advertising (KWA). We perform deep keyword research to identify the terms international buyers use to find products like yours. Our team manages your ad spend efficiently, bidding on cost-effective keywords that drive qualified inquiries. We continuously optimize campaigns to lower your cost per inquiry while increasing the quality of leads."
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
        description: "Position your brand on India's most trusted luxury lifestyle platform. We handle the strict gated onboarding process and create editorial-quality content that aligns with Tata Cliq's premium standards. Drive sales among high-value shoppers who value authenticity and quality above all else.",
        features: [
            {
                title: "Brand Authorization Support",
                description: "Navigating the strict gated entry of Tata Cliq can be challenging. We handle the entire brand authorization process, ensuring all your documentation proves authenticity and meets their premium standards. We work directly with category managers to expedite approval, ensuring your brand enters the platform legitimately. This is the first and most critical step to accessing India's most discerning, high-value customer base."
            },
            {
                title: "Premium Cataloging",
                description: "Luxury requires a different visual language. We create catalogue content that exudes exclusivity and quality. Our team focuses on high-resolution lifestyle imagery and rich, evocative product descriptions that tell your brand story. We ensure strict adherence to Tata Cliq's aesthetic guidelines while maximizing conversion elements, ensuring your product pages look less like listings and more like editorial features."
            },
            {
                title: "Order Processing & Logistics",
                description: "Premium customers expect premium service. We implement rigorous order processing protocols to ensure zero-error packaging and dispatch. Our team coordinates with logistics partners to meet the tight delivery windows expected by luxury shoppers. We also manage the complex returns process for high-value items, minimizing losses and ensuring that customer dissatisfaction is handled with white-glove service."
            },
            {
                title: "Promotional Campaign Management",
                description: "Visibility on Tata Cliq is driven by exclusive sales and events. We plan your calendar to align with major platform campaigns like the '10/10 Sale' or luxury fests. Our team negotiates for banner slots and featured placements, positioning your products alongside top global brands. We craft exclusive offers that maintain your premium brand image while driving significant volume during these peak traffic periods."
            },
            {
                title: "Luxury Brand Positioning",
                description: "Establish your brand as a premium player. We analyze your storefront layout and brand store design to ensure it reflects luxury and sophistication. Our team advises on pricing strategies that signal quality rather than discount-heavy approaches. By aligning your visual identity with Tata Cliq's 'Camel' platform ethos, we attract high-net-worth individuals looking for genuine brand experiences."
            },
            {
                title: "Cross-Selling & Bundling Strategy",
                description: "Increase your average order value (AOV) through smart bundling. We identify complementary products in your catalog to create 'Look the Part' sets or 'Complete the Collection' offers. These curated bundles appeal to fashion-forward shoppers and gift buyers. By strategically linking products, we encourage customers to buy entire outfits or sets rather than single items, boosting your revenue per transaction."
            },
            {
                title: "Return Reduction Management",
                description: "High returns can kill luxury margins. We analyze return data to identify patterns—whether it's sizing issues or color discrepancies. We proactively update product guides, add detailed size charts, and improve image color accuracy to set the right expectations. Our team also implements customer feedback loops to refine product quality, significantly reducing return rates and protecting your bottom line."
            },
            {
                title: "Seasonal Lookbook Creation",
                description: "Stay ahead of the trends. We help you create digital lookbooks for each season, aligning your inventory with upcoming fashion trends. We coordinate with Tata Cliq's editorial teams to potential feature these collections in their newsletters and homepage banners. This proactive approach ensures your brand is always relevant and top-of-mind when the season changes."
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
        description: "Maximize your local reach with Reliance JioMart's digital ecosystem. We handle hyper-local inventory integration, O2O (Online-to-Offline) sales strategies, and robust fulfillment processes. Transform your neighborhood shop into a digital powerhouse connected to millions of Reliance users.",
        features: [
            {
                title: "Hyper-local Inventory Integration",
                description: "JioMart wins on speed. We integrate your inventory with JioMart’s hyper-local system, ensuring your products are visible to customers in your specific serviceable pin codes. We manage real-time stock updates to prevent cancellations, which is crucial for the O2O (Online-to-Offline) model. This precision ensures you capture the maximum demand in your vicinity without operational hiccups."
            },
            {
                title: "Seller Dashboard Training",
                description: "Master the unique interface of JioMart. We provide comprehensive training for your team on navigating the seller portal, managing orders, and handling settlements. We set up your dashboard for efficiency, creating shortcuts and custom reports. Our ongoing support ensures that your team can handle daily operations independently, minimizing errors and maximizing productivity."
            },
            {
                title: "Order Fulfillment Optimization",
                description: "Speed is the currency of JioMart. We stress-test your picking and packing processes to ensure you can meet the aggressive dispatch SLAs (Service Level Agreements). We help you organize your warehouse flow to prioritize JioMart orders during peak hours. By optimizing your fulfillment speed, you improve your seller rating and become the preferred seller for customers in your region."
            },
            {
                title: "JioMart Marketing Support",
                description: "Stand out in the digital supermarket. We utilize JioMart’s advertising tools to boost your visibility in search results and category pages. We design banners and participate in platform-wide sales events to drive traffic. Our strategies focus on increasing the basket size, encouraging customers to bundle your products with their regular grocery orders for maximum revenue."
            },
            {
                title: "O2O (Online-to-Offline) Strategy",
                description: "Bridge the gap between your physical store and digital sales. We help you leverage your physical location as a fulfillment hub for online orders. We implement best practices for 'Store Pick-up' and local delivery, providing a seamless experience for customers. This strategy not only increases sales but also drives footfall to your physical store, creating cross-channel growth."
            },
            {
                title: "Bulk Listing Management",
                description: "Scale your catalog effortlessly. Listing thousands of grocery or daily essential items one by one is impossible. We use bulk listing tools to upload and update your entire inventory in minutes. We ensure accurate mapping of EAN/UPC codes to existing JioMart master catalogs, preventing duplicate listings and ensuring your products are automatically categorized correctly for easy discovery."
            },
            {
                title: "Category Insights & Trending",
                description: "Stock what sells. We provide data on top-selling items in your region and category. By analyzing local demand trends, we advise you on which products to stock up on. Whether it's seasonal fruits or festival-specific pooja items, we ensure your inventory aligns with what your local customers are searching for right now."
            },
            {
                title: "Slot Management & Scheduling",
                description: "Manage your delivery capacity effectively. We help you configure your delivery slots to match your operational bandwidth. We set up dynamic slot management to prevent overcommitment during rush hours. This ensures you never have to cancel an order due to lack of delivery staff, protecting your reputation and ensuring consistent customer satisfaction."
            }
        ],
        icon: ShoppingCart,
        gradientFrom: "from-blue-600",
        gradientTo: "to-red-500",
        themeColor: "#0078AD",
        image: jiomartHeroImg
    },
    "blinkit-seller-services": {
        title: "Blinkit Seller Services",
        description: "Master quick commerce with 10-minute delivery optimization. We ensure your products are always in stock at the right dark stores by decoding demand heatmaps. Be the go-to choice for instant gratification with our high-speed inventory and marketing strategies.",
        features: [
            {
                title: "Dark Store Inventory Management",
                description: "In the 10-minute delivery game, availability is everything. We manage the complex coordination of sending stock to Blinkit’s network of dark stores. Our analytics predict demand at a granular level, ensuring your high-velocity items are always in stock at the right locations. We handle the appointment scheduling and compliance for inwards, preventing costly rejections and stockouts."
            },
            {
                title: "Quick Commerce Analytics",
                description: "Impulse buying drives quick commerce. We analyze purchase patterns to understand when and why customers buy your products. Using this data, we optimized your listing visibility during peak hours (like breakfast or match times). We track your share of voice in the category and adjust strategies real-time to capitalize on instant consumption trends."
            },
            {
                title: "Stock Replenishment Strategy",
                description: "Never run dry. We implement automated replenishment triggers based on sales velocity and lead times. Our system accounts for weekends, festivals, and dark store capacity constraints. By maintaining optimal stock pressure without overstocking, we maximize your exposure while keeping storage costs in check, ensuring you are always the first option a customer sees."
            },
            {
                title: "High-Velocity Item Optimization",
                description: "Speed matters on the shelf too. We optimize your product titles and images for rapid decision-making on mobile screens. We bundle products to increase average order value. Our team specifically targets 'Top Pick' and 'Best Seller' algorithms, ensuring your items are positioned as the go-to choice for customers who want their delivery in minutes, not days."
            },
            {
                title: "Geo-fencing & Localized Marketing",
                description: "Target customers exactly where they are. We use hyper-local data to run targeted campaigns in specific neighborhoods with high adoption rates. If a specific dark store servicing a premium area has your stock, we pump ads to users in that radius. This laser-focused approach ensures your marketing spend yields the highest conversion rates by targeting only serviceable customers."
            },
            {
                title: "Flash Sale Participation",
                description: "Win the impulse shopper. We strategize your participation in Blinkit's 'Flash Sales' and 'Deal of the Hour' slots. These high-visibility placements drive massive volume in short bursts. We help you plan the inventory and pricing for these events to clear slow-moving stock or launch new flavors, creating immediate buzz and trial among users."
            },
            {
                title: "Margin Analysis & Pricing",
                description: "Profitability in quick commerce is a tightrope. We conduct deep margin analysis, factoring in Blinkit’s commissions, dark store fees, and logistics costs. We help you structure your pricing and pack sizes (e.g., multipacks) to ensure unit economics make sense. We identify the 'sweet spot' pricing that drives volume without eroding your bottom line."
            },
            {
                title: "Real-time Trend Adaptation",
                description: "Ride the wave of the moment. Is it raining? Is there a cricket match? We help you pivot your featured listings to match real-time events. By pushing 'Pakoda Mix' during rain or 'Chips and Dips' during a match, we align your offering with the consumer's immediate context. This agility captures demand that generic listings miss completely."
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
        description: "Leverage zero-commission selling to reach tier-2 and tier-3 cities. We optimize your catalog for social commerce, creating shareable content and viral-ready bundles for resellers. Exponentially grow your reach with aggressive pricing strategies tailored for the mass market.",
        features: [
            {
                title: "Zero Commission Strategy",
                description: "Maximize the advantage of 0% commission. We help you structure your pricing to be hyper-competitive while retaining healthy margins. Since Meesho is price-sensitive, we analyze competitor pricing in real-time to ensure your catalog remains attractive. We pass the commission savings to the customer in smart ways that increase volume without devaluing your brand."
            },
            {
                title: "Social Sharing Optimization",
                description: "Meesho thrives on sharing. We optimize your catalogs to be 'share-worthy' for resellers on WhatsApp and Facebook. This means focusing on clear, trusted imagery and simplified product details. We create viral-ready bundles and combos that encourage resellers to push your products to their private networks, exponentially increasing your reach."
            },
            {
                title: "Price Competitiveness Analysis",
                description: "Tier-2 and Tier-3 markets demand value. We constantly benchmark your products against the lowest prices in the category. Our team identifies cost-saving opportunities in packaging and sourcing to allow you to drop prices without bleeding profit. We help you find the 'sweet spot' price that triggers mass adoption among value-conscious shoppers."
            },
            {
                title: "Reseller Network Growth",
                description: "Your resellers are your sales force. We implement strategies to keep resellers engaged with your brand. By consistently providing high-quality, accurately described products, we reduce returns—a major pain point for resellers. We build a reputation for reliability that makes top resellers favor your catalog over others, creating a loyal distribution network."
            },
            {
                title: "Meesho Ads Management",
                description: "Boost visibility in a crowded marketplace. We run cost-effective ad campaigns on Meesho to push your new catalogs to the top. Since cost-per-click is lower on Meesho, we experiment with broad match types to capture maximum eyeballs. We monitor ad performance daily to pause low-performing ads and double down on winning designs, ensuring you get the best ROI."
            },
            {
                title: "Supplier Score Improvement",
                description: "A high supplier score is your ticket to organic growth. We monitor your dispatch time, cancellation rate, and product ratings closely. We implement operational fixes to ensure you ship within the SLA (Service Level Agreement). A 'Top Rated' supplier badge triggers algorithm boosts, showing your products to millions of more users without extra ad spend."
            },
            {
                title: "RTO (Return to Origin) Reduction",
                description: "Reduce the pain of undelivered orders. RTO is a challenge in tier-3 logistics. We analyze your RTO data to identify problematic pincodes or courier partners. We help you refine your packaging to prevent damage-related refusals and improve address verification processes where possible. Lowering RTO directly impacts your net profitability."
            },
            {
                title: "Trend Analysis & Sourcing",
                description: "Sell what Bharat wants. We provide insights into emerging fashion and home trends in small-town India. We advise on sourcing fabrics, colors, and designs that are currently hot in the mass market. By aligning your manufacturing with these trends, you ensure your products fly off the digital shelves as soon as they are listed."
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
        description: "Capture the direct-to-consumer delivery market beyond dining. We optimize your menu engineering, manage hygiene ratings, and execute hyper-local ad campaigns. Turn your Zomato listing into a high-conversion digital storefront that dominates your local food ecosystem.",
        features: [
            {
                title: "Menu & Catalog Management",
                description: "Your menu is your billboard. We engineer your Zomato listing to drive hunger and conversion. We categorize items logically, use mouth-watering descriptions, and optimize add-on suggestions to increase ticket size. We ensure your 'Must try' tags are applied to high-margin items, guiding customer choice and maximizing profitability per order."
            },
            {
                title: "Hygiene Rating Support",
                description: "Trust is the #1 factor in food ordering. We guide your kitchen operations to meet and exceed hygiene audit standards. We help you display your safety protocols prominently on your listing. Our team works to secure high hygiene ratings and 'Max Safety' badges, which directly correlate with higher click-through rates and order volumes."
            },
            {
                title: "Delivery Radius Optimization",
                description: "Reach the right customers. We analyze your delivery zones to balance reach with delivery time. We help you optimize for local dominance, ensuring you appear in 'Fastest Delivery' filters. For cloud kitchens, we analyze heatmaps to suggest optimal new locations or delivery hubs to cover maximum demand areas."
            },
            {
                title: "Customer Review Management",
                description: "Reviews make or break a restaurant. We implement a proactive reputation management system. We encourage happy customers to leave 5-star ratings and draft professional, empathetic responses to negative feedback. By demonstrating that you care, we turn dissatisfied customers into second-chance buyers and boost your overall restaurant rating."
            },
            {
                title: "Food Photography Guidelines",
                description: "Eat with your eyes first. We provide guidelines and coordinate professional food photography that makes your dishes irresistible. High-quality, well-lit images increase conversion rates by up to 30%. We help you select the 'Hero' images for your menu cover and ensuring every item has an appetizing photo, reducing customer hesitation."
            },
            {
                title: "CPC Advertising Campaigns",
                description: "Dominate the 'Near Me' searches. We manage Zomato Ad clicks campaigns to position your restaurant at the top of the feed during peak meal times. We analyze the Cost Per Click (CPC) vs. Average Order Value (AOV) to ensure profitable customer acquisition. Our targeted approach drives immediate footfall or order volume when you need it most."
            },
            {
                title: "Dynamic Pricing Strategies",
                description: "Optimize for demand. We help you implement dynamic pricing strategies, offering smart discounts during lean hours to keep the kitchen busy. We use 'Zomato Gold' offers strategically to attract high-value customers without eroding your margins on every order. This balance ensures steady cash flow throughout the day."
            },
            {
                title: "Combo & Add-on Creation",
                description: "Boost your ticket size. We design high-value combo meals that offer perceived value to the customer while moving high-margin sides and beverages. We strategically place 'Frequently Bought Together' prompts to encourage impluse additions. This menu engineering directly increases your revenue per order effectively."
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
        description: "Deliver instantly with optimized Swiggy and Instamart strategies. From menu engineering to Instamart onboarding, we improve your operational metrics for 'Super Seller' status. Unlock growth in the hyper-competitive food and grocery delivery market with our data-driven management.",
        features: [
            {
                title: "Instamart Onboarding",
                description: "Get listed on the destination for instant needs. We handle the end-to-end documentation and SKU registration for Swiggy Instamart. We advise on pack sizes and pricing that fit the 'convenience store' model. Our team ensures your products are categorized correctly so they appear in relevant searches, from 'Late Night Cravings' to 'Breakfast Essentials'."
            },
            {
                title: "Menu Engineering",
                description: "Psychology meets gastronomy. We structure your menu to influence buying behavior. We use decoy pricing and smart categorization to highlight profitable combos. We constantly refresh descriptions and images to keep the menu feeling alive and relevant to seasonal trends, keeping your repeat customer rate high."
            },
            {
                title: "Discount & Offer Strategy",
                description: "Promotions should build brands, not destroy margins. We design smart discount structures like 'Try New' or 'Jumbo Packs' that drive trial without devaluing your core offering. We participate in Swiggy-exclusive campaigns strategically, ensuring you get the visibility boost of a 'Deal of the Day' while maintaining profitable unit economics."
            },
            {
                title: "Operational Metric Improvement",
                description: "Swiggy rewards efficiency. We monitor your prep times, acceptance rates, and food readiness marks. We identify bottlenecks in your kitchen workflow that cause delays. By improving these operational metrics, we boost your 'Super Seller' status, which grants you better placement in the app algorithm and lowers your commission burden."
            },
            {
                title: "Sponsored Listings & Ads",
                description: "Be the first choice. We manage Carousel and Banner ads within the Swiggy app to capture hungry customers' attention. We target specific customer cohorts based on their past ordering behavior. Our campaigns are timed to coincide with high-intent periods like lunch and dinner, maximizing your Return on Ad Spend (ROAS)."
            },
            {
                title: "Packaging Consultation",
                description: "Deliver quality, not just food. Poor packaging leads to spills and bad ratings. We advise on packaging solutions that retain heat and texture during transit. We help you source cost-effective, branded packaging that enhances the unboxing experience, encouraging customers to share their meal on social media and leave positive reviews."
            },
            {
                title: "Access to Swiggy Premium/Bolt",
                description: "Unlock the premium segment. We help you meet the criteria for Swiggy's premium collections (like Gourmet or Guiltfree). Positioning your brand in these exclusive lists attracts higher-ticket customers. We also guide you on operational excellence to qualify for 'Bolt' (fast delivery) badges, which is a major conversion driver."
            },
            {
                title: "Late Night Strategy",
                description: "Own the night shift. The late-night delivery market is less crowded and highly profitable. We help you curate a specialized late-night menu optimized for speed and cravings. We adjust your operational hours and staffing plans to capture this high-margin demand seamlessly while your competitors are closed."
            }
        ],
        icon: Truck,
        gradientFrom: "from-orange-500",
        gradientTo: "to-orange-700",
        themeColor: "#FC8019",
        image: swiggyHeroImg
    }
};

export const webServiceData: Record<string, {
    title: string;
    description: string;
    features: (string | { title: string; description: string })[];
    icon?: React.ElementType; // Optional for web services
    gradientFrom: string;
    gradientTo: string;
    image?: string | StaticImageData;
    themeColor?: string;
}> = {
    "full-stack-web-development": {
        title: "Full-Stack Web Development",
        description: "We build robust, scalable, and high-performance web applications using the latest technologies like Next.js, React, Node.js, and more. From database design to frontend interactivity, we handle it all.",
        features: [
            { title: "Custom Web App Development", description: "Tailored solutions to meet your specific business needs." },
            { title: "API Development & Integration", description: "Seamless connection between your services and third-party tools." },
            { title: "Database Architecture", description: "Optimized data storage and retrieval systems." },
            { title: "Progressive Web Apps (PWA)", description: "Mobile-first experiences that work offline." }
        ],
        gradientFrom: "from-blue-600",
        gradientTo: "to-cyan-400",
        themeColor: "#0070f3"
    },
    "ecommerce-ui-ux-design": {
        title: "E-commerce & UI/UX Design",
        description: "Create visually stunning and highly converting online stores. We focus on user experience to drive sales and customer retention.",
        features: [
            { title: "Shopify & WooCommerce Setup", description: "Quick launch of professional online stores." },
            { title: "Custom Storefront Design", description: "Unique designs that reflect your brand identity." },
            { title: "Conversion Rate Optimization (CRO)", description: "Data-driven design changes to boost sales." },
            { title: "Mobile-Responsive Layouts", description: "Perfect shopping experience on any device." }
        ],
        gradientFrom: "from-purple-600",
        gradientTo: "to-pink-400",
        themeColor: "#7928ca"
    },
    "ai-social-media-automation": {
        title: "AI & Social Media Automation",
        description: "Leverage the power of Artificial Intelligence to automate your marketing and operations. Save time and increase efficiency with our smart solutions.",
        features: [
            { title: "Chatbot Integration", description: "24/7 customer support automation." },
            { title: "Content Generation Pipelines", description: "Automated blog and social media post creation." },
            { title: "Social Media Scheduling", description: "Consistent posting without manual effort." },
            { title: "Data Analysis & Insights", description: "AI-driven analytics to understand your audience." }
        ],
        gradientFrom: "from-green-600",
        gradientTo: "to-emerald-400",
        themeColor: "#10b981"
    },
    "seo-google-maps-onboarding": {
        title: "SEO & Google Maps Onboarding",
        description: "Get found by your local customers. We optimize your online presence to rank higher on search engines and Google Maps.",
        features: [
            { title: "Local SEO Optimization", description: "Dominate local search results." },
            { title: "Google Business Profile Setup", description: "Complete optimization of your GMB listing." },
            { title: "Keyword Research & Strategy", description: "Targeting the right terms for your business." },
            { title: "On-Page & Off-Page SEO", description: "Comprehensive approach to search rankings." }
        ],
        gradientFrom: "from-orange-600",
        gradientTo: "to-yellow-400",
        themeColor: "#f59e0b"
    },
    "site-migrations-maintenance": {
        title: "Site Migrations & Maintenance",
        description: "Zero downtime migrations and ongoing support to keep your digital assets secure and up-to-date.",
        features: [
            { title: "Seamless Platform Migration", description: "Moving your site without losing data or SEO rankings." },
            { title: "Security Audits & Patches", description: "Protecting your site from vulnerabilities." },
            { title: "Performance Optimization", description: "Speeding up your site for better user experience." },
            { title: "Regular Backups", description: "Safety net for your critical business data." }
        ],
        gradientFrom: "from-gray-700",
        gradientTo: "to-gray-500",
        themeColor: "#4b5563"
    }
};
