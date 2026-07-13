import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

type Lang = "en" | "tr";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
      {children}
    </h2>
  );
}

const productPolicies: { name: string; en: string; tr: string }[] = [
  { name: "LumiBaby", en: "/lumibaby/privacy", tr: "/tr/lumibaby/gizlilik" },
  {
    name: "Neon Siege",
    en: "/neon-siege/privacy-policy",
    tr: "/tr/neon-siege/gizlilik",
  },
  {
    name: "Jelly Chain Rush",
    en: "/jelly-chain-rush/privacy",
    tr: "/tr/jelly-chain-rush/gizlilik",
  },
  {
    name: "Roto Blocks",
    en: "/roto-blocks/privacy",
    tr: "/tr/roto-blocks/gizlilik",
  },
];

const productTerms: { name: string; en: string; tr: string }[] = [
  { name: "LumiBaby", en: "/lumibaby/terms", tr: "/tr/lumibaby/kullanim-kosullari" },
  {
    name: "Neon Siege",
    en: "/neon-siege/terms-of-use",
    tr: "/tr/neon-siege/kullanim-kosullari",
  },
  {
    name: "Jelly Chain Rush",
    en: "/jelly-chain-rush/terms",
    tr: "/tr/jelly-chain-rush/kullanim-kosullari",
  },
  {
    name: "Roto Blocks",
    en: "/roto-blocks/terms",
    tr: "/tr/roto-blocks/kullanim-kosullari",
  },
];

function ProductLinkList({
  items,
  lang,
}: {
  items: { name: string; en: string; tr: string }[];
  lang: Lang;
}) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.name}>
          <Link
            href={item[lang]}
            className="flex items-center justify-between rounded-xl border border-violet-500/20 bg-violet-500/[0.06] px-4 py-3 text-sm font-medium text-violet-200 transition-colors hover:border-violet-400/45 hover:text-white"
          >
            {item.name}
            <span aria-hidden="true">→</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function StudioPrivacyPage({ lang = "en" }: { lang?: Lang }) {
  const isTR = lang === "tr";

  return (
    <>
      <Header />
      <LegalPageLayout
        title={isTR ? "Gizlilik Politikası" : "Privacy Policy"}
        subtitle={
          isTR
            ? "Lumisoft Studios web sitesi için geçerlidir"
            : "Applies to the Lumisoft Studios website"
        }
        lastUpdated={isTR ? "Temmuz 2026" : "July 2026"}
        lastUpdatedLabel={isTR ? "Son güncelleme:" : "Last updated:"}
        backHref={isTR ? "/tr" : "/"}
        backLinkText={isTR ? "← Ana sayfaya dön" : "← Back to home"}
      >
        <section>
          <SectionTitle>{isTR ? "Özet" : "Overview"}</SectionTitle>
          <div className="space-y-4 leading-relaxed text-slate-200">
            <p>
              {isTR
                ? "Bu sayfa, lumisoftstudios.com web sitesini ziyaret ettiğinizde verilerinizin nasıl işlendiğini açıklar. Kısa versiyon: Bu web sitesi kişisel veri toplamaz."
                : "This page explains how your data is handled when you visit lumisoftstudios.com. The short version: this website does not collect personal data."}
            </p>
          </div>
        </section>

        <section>
          <SectionTitle>
            {isTR ? "Web sitesinde veri toplama" : "Data collection on this site"}
          </SectionTitle>
          <div className="space-y-4 leading-relaxed text-slate-200">
            <p>
              {isTR
                ? "Bu site statik bir web sitesidir. Hesap oluşturma, form, yorum veya ödeme sistemi içermez. Reklam veya izleme çerezleri kullanmaz."
                : "This is a static website. It has no accounts, forms, comments, or payment systems. It does not use advertising or tracking cookies."}
            </p>
            <p>
              {isTR
                ? "Barındırma sağlayıcımız, hizmeti güvenli ve ayakta tutmak için IP adresi ve istek zamanı gibi standart sunucu günlükleri tutabilir. Bu günlükler bizim tarafımızdan kimlik tespiti için kullanılmaz."
                : "Our hosting provider may keep standard server logs, such as IP address and request time, to keep the service secure and available. We do not use these logs to identify you."}
            </p>
          </div>
        </section>

        <section>
          <SectionTitle>
            {isTR ? "Ürün gizlilik politikaları" : "Product privacy policies"}
          </SectionTitle>
          <div className="space-y-5 leading-relaxed text-slate-200">
            <p>
              {isTR
                ? "Oyunlarımız ve uygulamalarımız kendi gizlilik politikalarına sahiptir. Kullandığınız ürünün politikasına buradan ulaşabilirsiniz:"
                : "Our games and apps each have their own privacy policy. Find the policy for the product you use here:"}
            </p>
            <ProductLinkList items={productPolicies} lang={lang} />
          </div>
        </section>

        <section>
          <SectionTitle>
            {isTR ? "Üçüncü taraf bağlantılar" : "Third party links"}
          </SectionTitle>
          <div className="space-y-4 leading-relaxed text-slate-200">
            <p>
              {isTR
                ? "Bu site App Store ve Google Play gibi mağazalara bağlantı verir. Bu hizmetler kendi gizlilik politikalarına tabidir."
                : "This site links to stores such as the App Store and Google Play. Those services are governed by their own privacy policies."}
            </p>
          </div>
        </section>

        <section>
          <SectionTitle>{isTR ? "İletişim" : "Contact"}</SectionTitle>
          <div className="space-y-4 leading-relaxed text-slate-200">
            <p>
              {isTR
                ? "Gizlilikle ilgili sorularınız için bize e-posta gönderebilirsiniz:"
                : "For privacy questions, email us at:"}
            </p>
            <a
              href="mailto:support@lumisoftstudios.com"
              className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 transition-colors hover:text-violet-200"
            >
              support@lumisoftstudios.com
            </a>
          </div>
        </section>
      </LegalPageLayout>
      <Footer lang={lang} />
    </>
  );
}

export function StudioTermsPage({ lang = "en" }: { lang?: Lang }) {
  const isTR = lang === "tr";

  return (
    <>
      <Header />
      <LegalPageLayout
        title={isTR ? "Kullanım Koşulları" : "Terms of Use"}
        subtitle={
          isTR
            ? "Lumisoft Studios web sitesi için geçerlidir"
            : "Applies to the Lumisoft Studios website"
        }
        lastUpdated={isTR ? "Temmuz 2026" : "July 2026"}
        lastUpdatedLabel={isTR ? "Son güncelleme:" : "Last updated:"}
        backHref={isTR ? "/tr" : "/"}
        backLinkText={isTR ? "← Ana sayfaya dön" : "← Back to home"}
      >
        <section>
          <SectionTitle>
            {isTR ? "Koşulların kabulü" : "Acceptance of terms"}
          </SectionTitle>
          <div className="space-y-4 leading-relaxed text-slate-200">
            <p>
              {isTR
                ? "lumisoftstudios.com sitesini kullanarak bu koşulları kabul etmiş olursunuz. Koşulları kabul etmiyorsanız lütfen siteyi kullanmayın."
                : "By using lumisoftstudios.com you accept these terms. If you do not agree with them, please do not use the site."}
            </p>
          </div>
        </section>

        <section>
          <SectionTitle>
            {isTR ? "Fikri mülkiyet" : "Intellectual property"}
          </SectionTitle>
          <div className="space-y-4 leading-relaxed text-slate-200">
            <p>
              {isTR
                ? "Bu sitedeki tüm içerik, logolar, ürün adları, görseller ve metinler Lumisoft Studios'a aittir veya lisanslıdır. İçerik, yazılı izin olmadan ticari amaçla kopyalanamaz veya dağıtılamaz."
                : "All content on this site, including logos, product names, images, and text, belongs to or is licensed by Lumisoft Studios. Content may not be copied or distributed for commercial purposes without written permission."}
            </p>
          </div>
        </section>

        <section>
          <SectionTitle>
            {isTR ? "Ürün koşulları" : "Product terms"}
          </SectionTitle>
          <div className="space-y-5 leading-relaxed text-slate-200">
            <p>
              {isTR
                ? "Oyunlarımızın ve uygulamalarımızın kendi kullanım koşulları vardır. Bir ürünü kullanırken o ürünün koşulları geçerlidir:"
                : "Our games and apps have their own terms of use. When you use a product, that product's terms apply:"}
            </p>
            <ProductLinkList items={productTerms} lang={lang} />
          </div>
        </section>

        <section>
          <SectionTitle>
            {isTR ? "Satın almalar" : "Purchases"}
          </SectionTitle>
          <div className="space-y-4 leading-relaxed text-slate-200">
            <p>
              {isTR
                ? "Uygulama içi satın almalar ve abonelikler App Store veya Google Play üzerinden yönetilir ve ilgili mağazanın koşullarına tabidir. Bu web sitesi üzerinden satış yapılmaz."
                : "In-app purchases and subscriptions are managed through the App Store or Google Play and are subject to the terms of the relevant store. Nothing is sold through this website."}
            </p>
          </div>
        </section>

        <section>
          <SectionTitle>
            {isTR ? "Sorumluluğun sınırlandırılması" : "Limitation of liability"}
          </SectionTitle>
          <div className="space-y-4 leading-relaxed text-slate-200">
            <p>
              {isTR
                ? "Bu site 'olduğu gibi' sunulur. Sitenin kesintisiz veya hatasız olacağını garanti etmeyiz. Yürürlükteki yasaların izin verdiği ölçüde, sitenin kullanımından doğan dolaylı zararlardan sorumlu değiliz."
                : "This site is provided as is. We do not guarantee that it will be uninterrupted or error free. To the extent permitted by applicable law, we are not liable for indirect damages arising from use of the site."}
            </p>
          </div>
        </section>

        <section>
          <SectionTitle>
            {isTR ? "Değişiklikler" : "Changes"}
          </SectionTitle>
          <div className="space-y-4 leading-relaxed text-slate-200">
            <p>
              {isTR
                ? "Bu koşulları zaman zaman güncelleyebiliriz. Güncel sürüm her zaman bu sayfada yayınlanır."
                : "We may update these terms from time to time. The current version is always published on this page."}
            </p>
          </div>
        </section>

        <section>
          <SectionTitle>{isTR ? "İletişim" : "Contact"}</SectionTitle>
          <div className="space-y-4 leading-relaxed text-slate-200">
            <p>
              {isTR
                ? "Bu koşullarla ilgili sorularınız için:"
                : "For questions about these terms:"}
            </p>
            <a
              href="mailto:support@lumisoftstudios.com"
              className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 transition-colors hover:text-violet-200"
            >
              support@lumisoftstudios.com
            </a>
          </div>
        </section>
      </LegalPageLayout>
      <Footer lang={lang} />
    </>
  );
}
