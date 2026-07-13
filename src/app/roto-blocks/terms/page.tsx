import RotoBlocksLegalPage from "@/components/RotoBlocksLegalPage";
import { rotoBlocksMetadata } from "@/lib/rotoBlocksMetadata";

export const metadata = rotoBlocksMetadata({
  lang: "en",
  kind: "terms",
  path: "/roto-blocks/terms",
  alternatePath: "/tr/roto-blocks/kullanim-kosullari",
});

export default function RotoBlocksTermsPage() {
  return <RotoBlocksLegalPage kind="terms" />;
}
