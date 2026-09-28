import type { Metadata } from "next";

// Supply page-specific SEO without changing the established legal/support content.
export const metadata: Metadata = {
  alternates: {
    canonical: "/lumibaby/terms",
    languages: { "en-US": "/lumibaby/terms", "tr-TR": "/tr/lumibaby/kullanim-kosullari" },
  },
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
