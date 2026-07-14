import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Lumisoft Studio for product support and questions.",
  alternates: {
    canonical: "/contact",
    languages: { "en-US": "/contact", "tr-TR": "/tr/contact" },
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="Contact"
        subtitle="Product support and studio questions"
        lastUpdated="June 2026"
        backHref="/"
        backLabel="Lumisoft Studio"
      >
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Email Support
          </h2>
          <div className="text-slate-200 leading-relaxed space-y-4">
            <p>
              For support, privacy questions, product feedback, or partnership
              inquiries, contact Lumisoft Studio by email.
            </p>
            <a
              href="mailto:support@lumisoftstudios.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 hover:text-violet-200 text-sm transition-colors"
            >
              support@lumisoftstudios.com
            </a>
          </div>
        </section>
      </LegalPageLayout>
      <Footer />
    </>
  );
}
