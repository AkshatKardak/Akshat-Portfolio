import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshat Kardak — Full Stack Developer",
  description:
    "Full-stack developer from Mumbai building fintech platforms, NGO systems, and AI-powered products with React, Next.js, Node.js, Flutter, and Python.",
  authors: [{ name: "Akshat Kardak" }],
  keywords: [
    "Akshat Kardak",
    "Full Stack Developer",
    "Mumbai",
    "React",
    "Next.js",
    "Node.js",
    "Flutter",
    "Portfolio"
  ],
  icons: {
    icon: "/images/fav.png",
    shortcut: "/images/fav.png",
    apple: "/images/fav.png",
  },
  openGraph: {
    title: "Akshat Kardak — Full Stack Developer",
    description:
      "Full-stack developer from Mumbai building fintech platforms, NGO systems, and AI-powered products.",
    url: "https://your-domain.com",
    siteName: "Akshat Kardak Portfolio",
    images: [
      {
        url: "/images/Akshat.png",
        width: 1200,
        height: 630,
        alt: "Akshat Kardak Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshat Kardak — Full Stack Developer",
    description:
      "Full-stack developer from Mumbai building fintech platforms, NGO systems, and AI-powered products.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
          style={{
            background: "var(--accent)",
            color: "#130d04",
          }}
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}