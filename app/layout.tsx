import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshat Kardak — Full Stack Developer",
  description:
    "Portfolio of Akshat Kardak — Full Stack Developer based in Mumbai, India. Building scalable and impactful digital solutions.",
  authors: [{ name: "Akshat Kardak" }],
  keywords: ["Akshat Kardak", "Full Stack Developer", "Mumbai", "React", "Next.js", "Portfolio"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&f[]=cabinet-grotesk@400,500,700,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}