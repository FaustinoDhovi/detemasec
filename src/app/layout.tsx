import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { MobileNav } from "./components/MobileNav";  // Changed from "@/components/MobileNav"
import { DesktopHeader } from "./components/DesktopHeader";  // Changed from "@/components/DesktopHeader"

export const metadata: Metadata = {
  title: "Detema Secondary School",
  description: "Official website of Detema Secondary School",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="bg-[#F5F5DC] text-gray-800 min-h-screen">
        <Providers>
          <div className="min-h-screen flex flex-col">
            <DesktopHeader />
            <main className="flex-1 container mx-auto px-4 py-4 md:py-6">
              {children}
            </main>
            <MobileNav />
          </div>
        </Providers>
      </body>
    </html>
  );
}