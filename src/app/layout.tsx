import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lumisoft Studio",
    template: "%s – Lumisoft Studio",
  },
  description: "Thoughtfully crafted apps for the moments that matter.",
  metadataBase: new URL("https://www.lumisoftstudios.com"),
  icons: {
    icon: "/images/lumisoft-studio-emblem.png",
    apple: "/images/lumisoft-studio-emblem.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#080b1a] text-[#eef0ff] font-sans">
        {children}
      </body>
    </html>
  );
}
