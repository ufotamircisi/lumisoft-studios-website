import type { Metadata } from "next";

// Supply page-specific SEO without changing the established legal/support content.
export const metadata: Metadata = {
  alternates: {
    canonical: "/tr/neon-siege/kullanim-kosullari",
    languages: { "en-US": "/neon-siege/terms-of-use", "tr-TR": "/tr/neon-siege/kullanim-kosullari" },
  },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
