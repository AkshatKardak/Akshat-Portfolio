import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshat Kardak - Full Stack Developer",
  description:
    "Portfolio of Akshat Kardak - Full Stack Developer based in Mumbai, India. Building scalable and impactful digital solutions.",
  authors: [{ name: "Akshat Kardak" }],
  keywords: ["Akshat Kardak", "Full Stack Developer", "Mumbai", "React", "Next.js", "Portfolio"],
  openGraph: {
    title: "Akshat Kardak - Full Stack Developer",
    description: "Building scalable and impactful digital solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
