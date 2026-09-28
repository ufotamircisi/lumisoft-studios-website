import type { Metadata } from "next";

// Supply page-specific SEO without changing the established legal/support content.
export const metadata: Metadata = {
  alternates: {
    canonical: "/tr/lumibaby/destek",
    languages: { "en-US": "/lumibaby/support", "tr-TR": "/tr/lumibaby/destek" },
  },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
