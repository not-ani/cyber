import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { NavBar } from "@/components/header";
import Particles from "@/components/particals";
import Footer from "@/components/footer";
import { siteurl } from "@/lib/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Cherry Creek High School Cybersecurity Club",
    template: "%s | CCHS Cybersecurity",
  },
  description:
    "Explore cybersecurity with Cherry Creek High School's Cybersecurity Club. Join us for competitions, learning, and more!",
  keywords: [
    "cybersecurity",
    "high school",
    "Cherry Creek",
    "CyberPatriot",
    "picoCTF",
    "CyberQuest",
    "HSPC",
  ],
  authors: [{ name: "Cherry Creek High School Cybersecurity Club" }],
  creator: "Cherry Creek High School Cybersecurity Club",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteurl,
    siteName: "Cherry Creek High School Cybersecurity Club",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cherry Creek High School Cybersecurity Club",
    description:
      "Explore cybersecurity with Cherry Creek High School's Cybersecurity Club. Join us for competitions, learning, and more!",
    creator: "@CCHSCyberClub",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <NavBar
            items={[
              {
                title: "Home",
                href: "/",
              },
              {
                title: "Cyberpatriot",
                href: "/cyberpatriot",
              },
              {
                title: "PicoCTF",
                href: "/pico",
              },
              {
                title: "Cyberquest",
                href: "/cyberquest",
              },
              {
                title: "Contact",
                href: "/contact",
              },
            ]}
          />
          {children}

          <Particles
            quantityDesktop={500}
            quantityMobile={200}
            ease={80}
            color={"#F7FF9B"}
            refresh
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
