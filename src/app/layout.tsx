import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { MobileNav } from "@/components/MobileNav";
import { DesktopHeader } from "@/components/DesktopHeader";

export const metadata: Metadata = {
  title: "Detema Secondary School",
  description: "Official website of Detema Secondary School",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#4CAF50",
  appleWebApp: {
    capable: true,
    title: "Detema School",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Mobile-specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className="bg-[#F5F5DC] text-gray-800 min-h-screen">
        <Providers>
          <div className="min-h-screen flex flex-col safe-area-bottom">
            {/* Desktop Header */}
            <DesktopHeader />
            
            {/* Main Content */}
            <main className="flex-1 container mx-auto px-4 py-4 md:py-6">
              {children}
            </main>
            
            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </Providers>
      </body>
    </html>
  );
}