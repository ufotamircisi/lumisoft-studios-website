import RotoBlocksLegalPage from "@/components/RotoBlocksLegalPage";
import { rotoBlocksMetadata } from "@/lib/rotoBlocksMetadata";

export const metadata = rotoBlocksMetadata({
  lang: "en",
  kind: "support",
  path: "/roto-blocks/support",
  alternatePath: "/tr/roto-blocks/destek",
});

export default function RotoBlocksSupportPage() {
  return <RotoBlocksLegalPage kind="support" />;
}
