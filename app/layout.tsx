import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshat Kardak | Obsidian Portfolio",
  description: "Modern portfolio of Akshat Kardak — Full Stack Developer specializing in React, Next.js, and Obsidian Glass Design.",
  keywords: ["Akshat Kardak", "Full Stack Developer", "Next.js", "Obsidian Glass", "Dashboard Portfolio"],
  authors: [{ name: "Akshat Kardak" }],
  openGraph: {
    title: "Akshat Kardak | Full Stack Developer",
    description: "Modern Dashboard Hybrid Portfolio with Obsidian Glass Design.",
    url: "https://akshatkardak.com",
    siteName: "Akshat Kardak Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akshat Kardak Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshat Kardak | Portfolio",
    description: "Full Stack Developer & Designer.",
    creator: "@akshatkardak",
    images: ["/twitter-card.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Akshat Kardak",
  "url": "https://akshatkardak.com",
  "jobTitle": "Full Stack Developer",
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Thakur College of Engineering and Technology"
  },
  "sameAs": [
    "https://github.com/AkshatKardak",
    "https://linkedin.com/in/akshatkardak-",
    "https://twitter.com/akshatkardak"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for Fonts */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Fonts from Fontshare & Google Fonts */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=satoshi@300,400,501,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Theme Init Script to Prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                const t = localStorage.getItem('theme') ||
                  (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', t);
              })()
            `,
          }}
        />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-accent/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
