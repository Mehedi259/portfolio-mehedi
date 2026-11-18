import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehedi Hasan Mridul — Flutter & Full-Stack Engineer",
  description: "Flutter & full-stack engineer from Dhaka. I ship mobile apps, Next.js websites and Django REST backends — 20+ live products, including a platform that reached ~10,000 users in a month.",
  keywords: ["Flutter Developer", "AI Integration", "Django", "Full Stack", "Mobile Development", "Backend Engineer"],
  authors: [{ name: "Mehedi Hasan Mridul" }],
  metadataBase: new URL("https://mehedi-hasan-mridul.vercel.app"),
  openGraph: {
    title: "Mehedi Hasan Mridul — Flutter & Full-Stack Engineer",
    description: "Flutter, Next.js and Django REST engineer — 20+ live apps and websites.",
    type: "website",
    images: ["/projects/hello-oman-sheba.jpg"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehedi Hasan Mridul — Flutter & Full-Stack Engineer",
    description: "Flutter, Next.js and Django REST engineer — 20+ live apps and websites.",
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
