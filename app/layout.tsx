import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehedi Hasan - Senior Flutter & AI Integration Engineer",
  description: "Portfolio of Mehedi Hasan - Expert in Flutter, Django, AI Integration, and Full Stack Development. Building scalable mobile apps and AI-powered platforms.",
  keywords: ["Flutter Developer", "AI Integration", "Django", "Full Stack", "Mobile Development", "Backend Engineer"],
  authors: [{ name: "Mehedi Hasan" }],
  openGraph: {
    title: "Mehedi Hasan - Senior Flutter & AI Integration Engineer",
    description: "Expert in Flutter, Django, AI Integration, and Full Stack Development",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehedi Hasan - Senior Flutter & AI Integration Engineer",
    description: "Expert in Flutter, Django, AI Integration, and Full Stack Development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
