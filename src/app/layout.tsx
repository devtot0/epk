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
  title: "Hyos Cyamus",
  description: "Trance DJ, music producer, sound designer",
  icons: {
    icon: [
      { url: "/splash.png", sizes: "32x32", type: "image/png" },
      { url: "/splash.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/splash.png",
    apple: "/splash.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/splash.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/splash.png" />
        <link rel="shortcut icon" href="/splash.png" />
        <link rel="apple-touch-icon" href="/splash.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
