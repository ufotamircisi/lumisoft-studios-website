import RotoBlocksLegalPage from "@/components/RotoBlocksLegalPage";
import { rotoBlocksMetadata } from "@/lib/rotoBlocksMetadata";

export const metadata = rotoBlocksMetadata({
  lang: "tr",
  kind: "privacy",
  path: "/tr/roto-blocks/gizlilik",
  alternatePath: "/roto-blocks/privacy",
});

export default function RotoBlocksTurkishPrivacyPage() {
  return <RotoBlocksLegalPage lang="tr" kind="privacy" />;
}
