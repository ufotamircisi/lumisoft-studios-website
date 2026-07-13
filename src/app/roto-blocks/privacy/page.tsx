import RotoBlocksLegalPage from "@/components/RotoBlocksLegalPage";
import { rotoBlocksMetadata } from "@/lib/rotoBlocksMetadata";

export const metadata = rotoBlocksMetadata({
  lang: "en",
  kind: "privacy",
  path: "/roto-blocks/privacy",
  alternatePath: "/tr/roto-blocks/gizlilik",
});

export default function RotoBlocksPrivacyPage() {
  return <RotoBlocksLegalPage kind="privacy" />;
}
