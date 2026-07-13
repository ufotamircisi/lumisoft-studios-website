import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#080b1a",
};

export const metadata: Metadata = {
  title: {
    default: "Lumisoft Studios | Games & Apps",
    template: "%s | Lumisoft Studios",
  },
  description:
    "Lumisoft Studios is an independent studio crafting polished mobile games and apps for iOS and Android.",
  metadataBase: new URL("https://www.lumisoftstudios.com"),
  icons: {
    icon: "/images/lumisoft-studio-emblem.png",
    apple: "/images/lumisoft-studio-emblem.png",
  },
  openGraph: {
    type: "website",
    siteName: "Lumisoft Studios",
    title: "Lumisoft Studios | Games & Apps",
    description:
      "Independent studio crafting polished mobile games and apps for iOS and Android.",
    images: [
      {
        url: "/images/lumisoft-studio-emblem.png",
        width: 1536,
        height: 1536,
        alt: "Lumisoft Studios",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Lumisoft Studios | Games & Apps",
    description:
      "Independent studio crafting polished mobile games and apps for iOS and Android.",
    images: ["/images/lumisoft-studio-emblem.png"],
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
      className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#080b1a] text-[#f2f4ff] font-sans">
        <noscript>
          <style>{`.reveal,.hero-enter{opacity:1 !important;transform:none !important;animation:none !important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
