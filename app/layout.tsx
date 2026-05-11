// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://akshatkardak.vercel.app";
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Akshat Kardak — Full Stack Developer",
    template: "%s | Akshat Kardak",
  },
  description:
    "Full-stack developer from Mumbai building fintech platforms, NGO donation systems, and AI-powered products with React, Next.js, Node.js, Flutter, and Python.",
  authors: [{ name: "Akshat Kardak", url: SITE_URL }],
  creator: "Akshat Kardak",
  publisher: "Akshat Kardak",
  keywords: [
    "Akshat Kardak",
    "Full Stack Developer",
    "Mumbai",
    "React",
    "Next.js",
    "Node.js",
    "Flutter",
    "Python",
    "FastAPI",
    "Portfolio",
    "MERN Stack",
    "TypeScript",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/fav.png",
    shortcut: "/images/fav.png",
    apple: "/images/fav.png",
  },
  openGraph: {
    title: "Akshat Kardak — Full Stack Developer",
    description:
      "Full-stack developer from Mumbai building fintech platforms, NGO systems, and AI-powered products.",
    url: SITE_URL,
    siteName: "Akshat Kardak Portfolio",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Akshat Kardak — Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshat Kardhat — Full Stack Developer",
    description:
      "Full-stack developer from Mumbai building fintech platforms, NGO systems, and AI-powered products.",
    images: [OG_IMAGE],
    creator: "@akshatkardak",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Syne — Display/headings */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&family=Space+Grotesk:wght@300..700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
          style={{ background: "var(--accent)", color: "#130d04" }}
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
