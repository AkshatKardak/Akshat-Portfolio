import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshat Kardak - Full Stack Developer",
  description:
    "Portfolio of Akshat Kardak - Full Stack Developer based in Mumbai, India. Building scalable and impactful digital solutions.",
  authors: [{ name: "Akshat Kardak" }],
  keywords: ["Akshat Kardak", "Full Stack Developer", "Mumbai", "React", "Next.js", "Portfolio"],
  icons: {
    icon: "/images/fav.png",
    shortcut: "/images/fav.png",
    apple: "/images/fav.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
