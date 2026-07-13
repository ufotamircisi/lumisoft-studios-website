import RotoBlocksLegalPage from "@/components/RotoBlocksLegalPage";
import { rotoBlocksMetadata } from "@/lib/rotoBlocksMetadata";

export const metadata = rotoBlocksMetadata({
  lang: "tr",
  kind: "support",
  path: "/tr/roto-blocks/destek",
  alternatePath: "/roto-blocks/support",
});

export default function RotoBlocksTurkishSupportPage() {
  return <RotoBlocksLegalPage lang="tr" kind="support" />;
}
