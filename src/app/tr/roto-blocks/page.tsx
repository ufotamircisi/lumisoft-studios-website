import RotoBlocksPage from "@/components/RotoBlocksPage";
import { rotoBlocksMetadata } from "@/lib/rotoBlocksMetadata";

export const metadata = rotoBlocksMetadata({
  lang: "tr",
  kind: "product",
  path: "/tr/roto-blocks",
  alternatePath: "/roto-blocks",
});

export default function RotoBlocksTurkishPage() {
  return <RotoBlocksPage lang="tr" />;
}
