import type { Metadata } from "next";

// Supply page-specific SEO without changing the established legal/support content.
export const metadata: Metadata = {
  alternates: {
    canonical: "/neon-siege/privacy-policy",
    languages: { "en-US": "/neon-siege/privacy-policy", "tr-TR": "/tr/neon-siege/gizlilik" },
  },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
