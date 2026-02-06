import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://moolstone.com"),
  title: {
    default: "Moolstone | Web Dev, UI/UX, Ecommerce & Amazon SPN",
    template: "%s | Moolstone"
  },
  description: "Moolstone (Mool) empowers startups and global enterprises with cutting-edge digital transformation, AI-driven automation, and scalable e-commerce solutions.",
  keywords: ["Mool", "Moolstone", "Web Development", "AI Automation", "E-commerce", "SaaS", "Digital Transformation", "Amazon SPN", "Flipkart Seller Services"],
  authors: [{ name: "Moolstone Team" }],
  creator: "Moolstone",
  publisher: "Moolstone",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moolstone.com",
    siteName: "Moolstone",
    title: "Moolstone | Digital Transformation & E-commerce Experts",
    description: "Moolstone (Mool) empowers startups and global enterprises with cutting-edge digital transformation, AI-driven automation, and scalable e-commerce solutions.",
    images: [
      {
        url: "/logo-new.png",
        width: 1200,
        height: 630,
        alt: "Moolstone Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moolstone | Digital Transformation & E-commerce Experts",
    description: "Moolstone (Mool) empowers startups and global enterprises with cutting-edge digital transformation, AI-driven automation, and scalable e-commerce solutions.",
    images: ["/logo-new.png"],
  },
  alternates: {
    canonical: "https://moolstone.com",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Moolstone",
              "alternateName": "Mool",
              "url": "https://moolstone.com",
              "logo": "https://moolstone.com/logo-new.png",
              "sameAs": [
                "https://www.linkedin.com/company/moolstone",
                "https://twitter.com/moolstone"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "en"
              },
              "description": "Moolstone (Mool) empowers startups and global enterprises with cutting-edge digital transformation, AI-driven automation, and scalable e-commerce solutions."
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Moolstone",
              "alternateName": "Mool",
              "url": "https://moolstone.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://moolstone.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
