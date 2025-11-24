import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const garantpro = localFont({
  variable: "--font-garantpro",
  src: [
    {
      path: "./fonts/garantpro-regular-webfont.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/garantpro-regular-webfont.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/garantpro-regular-webfont.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/garantpro-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/garantpro-bold-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/garantpro-bold-webfont.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/garantpro-bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/garantpro-bold-webfont.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/garantpro-bold-webfont.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  adjustFontFallback: false,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "JOOAV",
  description: "Redefining Retail Inventory and Logistics in Africa",
  icons: {
    icon: "/favicon.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} ${garantpro.variable} antialiased bg-zinc-50 dark:bg-black`}
        // style={{
        //   fontFamily:
        //     "var(--font-garantpro), 'Segoe UI Symbol', 'Apple Color Emoji', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif",
        // }}
        style={{
          fontFamily:
            "var(--font-garantpro), 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
        }}
      >
        <div className="flex flex-col min-h-screen">
          {/* <Navbar /> */}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
