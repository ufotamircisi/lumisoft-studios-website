import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "İletişim | Lumisoft Studio",
  description: "Ürün desteği ve sorular için Lumisoft Studio ile iletişime geçin.",
};

export default function ContactPageTR() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="İletişim"
        subtitle="Ürün desteği ve stüdyo soruları"
        lastUpdated="Haziran 2026"
        lastUpdatedLabel="Son güncelleme:"
        backHref="/tr"
        backLinkText="← Lumisoft Studio'ya dön"
      >
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            E-posta Desteği
          </h2>
          <div className="text-slate-200 leading-relaxed space-y-4">
            <p>
              Destek, gizlilik soruları, ürün geri bildirimi veya iş birliği
              talepleri için Lumisoft Studio&apos;ya e-posta ile ulaşabilirsiniz.
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
      <Footer lang="tr" />
    </>
  );
}
