import type { Metadata } from "next";

// Supply page-specific SEO without changing the established legal/support content.
export const metadata: Metadata = {
  alternates: {
    canonical: "/tr/lumibaby/gizlilik",
    languages: { "en-US": "/lumibaby/privacy", "tr-TR": "/tr/lumibaby/gizlilik" },
  },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
