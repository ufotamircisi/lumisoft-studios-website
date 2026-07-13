import RotoBlocksLegalPage from "@/components/RotoBlocksLegalPage";
import { rotoBlocksMetadata } from "@/lib/rotoBlocksMetadata";

export const metadata = rotoBlocksMetadata({
  lang: "tr",
  kind: "terms",
  path: "/tr/roto-blocks/kullanim-kosullari",
  alternatePath: "/roto-blocks/terms",
});

export default function RotoBlocksTurkishTermsPage() {
  return <RotoBlocksLegalPage lang="tr" kind="terms" />;
}
