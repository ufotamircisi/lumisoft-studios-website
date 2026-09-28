import type { Metadata } from "next";
import GameShowcase from "@/components/GameShowcase";

export const metadata: Metadata = {
  title: "Neon Siege: Neon Blok Kırma",
  description:
    "Şekiller, yetenekler, güçlendiriciler, bombalar, çarpanlar, yükseltmeler ve yoğun seviyeler içeren hızlı tempolu neon brick breaker.",
  alternates: {
    canonical: "/tr/neon-siege",
    languages: { "tr-TR": "/tr/neon-siege", "en-US": "/neon-siege" },
  },
  openGraph: {
    title: "Neon Siege | Neon arcade brick breaker",
    description: "Yetenekler, güçlendiriciler, bombalar, çarpanlar ve bölüm ilerlemesiyle hızlı neon brick-breaker aksiyonu.",
    url: "/tr/neon-siege",
    locale: "tr_TR",
    images: [{ url: "/images/neon-siege-app-icon.png", width: 1024, height: 1024, alt: "Neon Siege" }],
  },
};

const features = [
  {
    title: "Blok dizilimini oku",
    text: "Neon blokların geometrik dizilimine göre atışını ayarla.",
  },
  {
    title: "Yetenekler ve Güçlendiriciler",
    text: "Her turun gidişatını değiştiren güçler ve yükseltmeler aç.",
  },
  {
    title: "Bombalar ve Çarpanlar",
    text: "Patlayıcı temizlikleri zincirle ve skorunun katlanmasını izle.",
  },
  {
    title: "Seviye İlerlemesi",
    text: "Bölümlerde ilerledikçe blokları kırmak zorlaşır.",
  },
  {
    title: "Nişan al ve bırak",
    text: "Açıyı ayarla ve bırak. Sıradaki atışın yönü yine sende.",
  },
  {
    title: "Performans Modu",
    text: "Android performans seçeneği, yoğun oynanış sahnelerinde görsel yükü azaltır.",
  },
];

const faqs = [
  {
    q: "Neon Siege ücretsiz mi?",
    a: "Evet. Neon Siege ücretsiz indirilir ve oynanır. Ödüllü reklamlar her zaman isteğe bağlıdır; Zorunlu Reklamları Kaldır satın alımı seviyeler arasındaki zorunlu reklamları kaldırır.",
  },
  {
    q: "Performans Modu ne yapar?",
    a: "Performans Modu, yoğun sahnelerde daha akıcı oynanışı desteklemek için Android cihazlardaki görsel yükü azaltır.",
  },
  {
    q: "Satın alımlar nasıl çalışır?",
    a: "Tüm satın alımlar Google Play veya App Store üzerinden, mağazanın kendi koşulları ve iade kuralları kapsamında yönetilir.",
  },
];

export default function NeonSiegePage() { return <GameShowcase slug="neon-siege" lang="tr" features={features} faqs={faqs} />; }
