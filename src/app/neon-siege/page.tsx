import type { Metadata } from "next";
import GameShowcase from "@/components/GameShowcase";

export const metadata: Metadata = {
  title: "Neon Siege: Arcade Brick Breaker",
  description:
    "Fast-paced neon brick breaker with shapes, skills, boosters, bombs, multipliers, upgrades, and intense levels.",
  alternates: {
    canonical: "/neon-siege",
    languages: { "en-US": "/neon-siege", "tr-TR": "/tr/neon-siege" },
  },
  openGraph: {
    title: "Neon Siege | Neon arcade brick breaker",
    description: "Fast neon brick-breaker action with skills, boosters, bombs, multipliers, and level progression.",
    url: "/neon-siege",
    images: [{ url: "/images/neon-siege-app-icon.png", width: 1024, height: 1024, alt: "Neon Siege" }],
  },
};

const features = [
  {
    title: "Read the formation",
    text: "Line up your shot against geometric formations of neon bricks.",
  },
  {
    title: "Skills & Boosters",
    text: "Unlock power-ups and upgrades that change how each run plays out.",
  },
  {
    title: "Bombs & Multipliers",
    text: "Chain explosive clears together and watch your score multiply.",
  },
  {
    title: "Level Progression",
    text: "Intense levels ramp up the challenge as you push deeper into the siege.",
  },
  {
    title: "Aim, then release",
    text: "Set the angle and release. The next shot is yours to line up.",
  },
  {
    title: "Performance Mode",
    text: "An Android performance option reduces visual load during dense gameplay scenes.",
  },
];

const faqs = [
  {
    q: "Is Neon Siege free to play?",
    a: "Yes. Neon Siege is free to download and play. Rewarded ads are always optional, and a Remove Forced Ads purchase removes the forced ads between levels.",
  },
  {
    q: "What does Performance Mode do?",
    a: "Performance Mode reduces visual load on Android devices to support smoother play in dense scenes.",
  },
  {
    q: "How do purchases work?",
    a: "All purchases are managed through Google Play or the App Store, under the store's own terms and refund rules.",
  },
];

export default function NeonSiegePage() { return <GameShowcase slug="neon-siege" lang="en" features={features} faqs={faqs} />; }
