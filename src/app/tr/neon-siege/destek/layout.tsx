import type { Metadata } from "next";

// Supply page-specific SEO without changing the established legal/support content.
export const metadata: Metadata = {
  alternates: {
    canonical: "/tr/neon-siege/destek",
    languages: { "en-US": "/neon-siege/support", "tr-TR": "/tr/neon-siege/destek" },
  },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
