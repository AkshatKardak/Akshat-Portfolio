import type { Metadata } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import ScanlineOverlay from "./components/ScanlineOverlay";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-cyber",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akshat Kardak | Full Stack Developer",
  description:
    "Portfolio of Akshat Kardak — Full Stack Developer specializing in React, Next.js, Node.js & MERN Stack. Currently pursuing B.Tech @ TCET Mumbai.",
  keywords: ["Akshat Kardak", "Full Stack Developer", "React", "Next.js", "MERN", "Portfolio"],
  authors: [{ name: "Akshat Kardak" }],
  openGraph: {
    title: "Akshat Kardak | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js & Node.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-cyber-dark text-[#f1f5f9] overflow-x-hidden antialiased">
        <CustomCursor />
        <ScanlineOverlay />
        {children}
      </body>
    </html>
  );
}
