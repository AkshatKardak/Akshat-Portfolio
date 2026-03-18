import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import ScanlineOverlay from "./components/ScanlineOverlay";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-cyber",
  weight: ["400", "700", "900"],
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Akshat Kardak | Full Stack Developer",
  description: "Cyberpunk portfolio of Akshat Kardak — Full Stack Developer specializing in React, Next.js, Node.js & more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${shareTechMono.variable}`}>
      <body className="bg-[#0a0a0a] text-white overflow-x-hidden">
        <CustomCursor />
        <ScanlineOverlay />
        {children}
      </body>
    </html>
  );
}
