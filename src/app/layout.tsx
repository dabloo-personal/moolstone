import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Moolstone | Building Digital Amazing Together",
  description: "Moolstone empowers startups and global enterprises with cutting-edge digital transformation, AI-driven automation, and scalable e-commerce solutions.",
  keywords: ["Web Development", "AI Automation", "E-commerce", "SaaS", "Digital Transformation"],
  icons: {
    icon: "/moolstone-logo.png",
    shortcut: "/moolstone-logo.png",
    apple: "/moolstone-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased text-text-main`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
