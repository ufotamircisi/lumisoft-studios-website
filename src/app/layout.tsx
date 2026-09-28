import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#101320",
};

export const metadata: Metadata = {
  title: {
    default: "Lumisoft Studio | Games & Apps",
    template: "%s | Lumisoft Studio",
  },
  description:
    "Lumisoft Studio develops focused mobile games and practical apps for iOS and Android.",
  metadataBase: new URL("https://www.lumisoftstudios.com"),
  icons: {
    icon: "/images/lumisoft-studio-emblem.png",
    apple: "/images/lumisoft-studio-emblem.png",
  },
  openGraph: {
    type: "website",
    siteName: "Lumisoft Studio",
    title: "Lumisoft Studio | Games & Apps",
    description:
      "Independent studio developing focused mobile games and practical apps for iOS and Android.",
    images: [
      {
        url: "/images/lumisoft-studio-emblem.png",
        width: 1536,
        height: 1536,
        alt: "Lumisoft Studio",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Lumisoft Studio | Games & Apps",
    description:
      "Independent studio developing focused mobile games and practical apps for iOS and Android.",
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
      dir="ltr"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <a href="#main-content" className="skip-link">
          Skip to main content / Ana içeriğe geç
        </a>
        <noscript>
          <style>{`.reveal,.hero-enter{opacity:1 !important;transform:none !important;animation:none !important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
