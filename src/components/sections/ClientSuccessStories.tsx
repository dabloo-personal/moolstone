"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const ClientSuccessStories = () => {
    return (
        <SectionWrapper className="bg-white pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10 space-y-3"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-dark">Client Success Stories</h2>
                <div className="flex justify-center space-x-1 text-primary">
                    {[...Array(6)].map((_, i) => (
                        <motion.span
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-xl"
                        >
                            ★
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-[#f5f5f5] p-8 md:p-10 rounded-3xl space-y-5 relative group hover:shadow-lg transition-shadow"
                >
                    <h3 className="text-lg md:text-xl font-bold text-dark">From Zero to Consistent Sales on Amazon</h3>
                    <p className="text-gray-500 leading-relaxed max-w-sm text-sm md:text-base">
                        We helped streamline catalog setup, optimize listings, and automate operations, enabling predictable monthly growth.
                    </p>
                    <div className="pt-2 text-gray-400 text-sm font-medium">Aslam • Amazon Seller</div>
                    <div className="absolute bottom-6 right-6 text-gray-300 group-hover:text-primary transition-colors">
                        <span className="text-xl font-bold tracking-tighter">&gt;&gt;&gt;</span>
                    </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-[#f5f5f5] p-8 md:p-10 rounded-3xl space-y-5 relative group hover:shadow-lg transition-shadow"
                >
                    <h3 className="text-lg md:text-xl font-bold text-dark">Scaling Local Sellers to National Marketplaces</h3>
                    <p className="text-gray-500 leading-relaxed max-w-sm text-sm md:text-base">
                        Our marketplace strategy and operational support enabled seamless expansion across multiple platforms.
                    </p>
                    <div className="pt-2 text-gray-400 text-sm font-medium">Multi-Marketplace Seller • India</div>
                    <div className="absolute bottom-6 right-6 text-gray-300 group-hover:text-primary transition-colors">
                        <span className="text-xl font-bold tracking-tighter">&gt;&gt;&gt;</span>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};
