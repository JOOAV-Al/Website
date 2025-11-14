import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
      path: "./fonts/fonnts.com-garantpro-thin.otf",
      weight: "100",
      style: "thin",
    },
    {
      path: "./fonts/fonnts.com-garantpro-extralight.otf",
      weight: "200",
      style: "extralight",
    },
    {
      path: "./fonts/fonnts.com-garantpro-light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "./fonts/fonnts.com-garantpro-regular.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "./fonts/fonnts.com-garantpro-medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/fonnts.com-garantpro-semibold.otf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./fonts/fonnts.com-garantpro-bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/fonnts.com-garantpro-extrabold.otf",
      weight: "800",
      style: "extrabold",
    },
    {
      path: "./fonts/fonnts.com-garantpro-black.otf",
      weight: "900",
      style: "black",
    },
  ],
});

export const metadata: Metadata = {
  title: "JOOAV",
  description: "Redefining Retail Inventory and Logistics in Africa",
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
      >
        <div className="flex flex-col min-h-screen">{children}</div>
      </body>
    </html>
  );
}
