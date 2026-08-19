import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TCR Technology | Modern Digital Experiences & Technology Solutions",
  description:
    "TCR Technology empowers businesses through modern Digital Marketing, Social Media Strategy, CRM Solutions, Web Development, and Custom Software Solutions.",
  keywords: [
    "TCR Technology",
    "Digital Marketing",
    "Social Media Marketing",
    "CRM Solutions",
    "Website Development",
    "Software Development",
    "Digital Agency",
  ],
  authors: [{ name: "TCR Technology" }],
  openGraph: {
    title: "TCR Technology | Digital Experiences & Custom Software",
    description:
      "Modern, reliable, creative and technology-driven solutions for digital business growth.",
    type: "website",
    url: "https://tcrtechnology.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "TCR Technology",
    description: "Digital Marketing, CRM & Custom Software Development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} scroll-smooth dark`}
    >
      <body className="bg-[#05060A] text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-black overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
