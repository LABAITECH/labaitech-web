import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LabAI Tech",
  description: "Simplificando a Vida com IA.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "LabAI Tech",
    description: "Simplificando a Vida com IA.",
    siteName: "LabAI Tech",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "LabAI Tech",
      },
    ],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
