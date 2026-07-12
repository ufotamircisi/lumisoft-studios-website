import RotoBlocksPage from "@/components/RotoBlocksPage";
import { rotoBlocksMetadata } from "@/lib/rotoBlocksMetadata";

export const metadata = rotoBlocksMetadata({
  lang: "en",
  kind: "product",
  path: "/roto-blocks",
  alternatePath: "/tr/roto-blocks",
});

export default function RotoBlocksEnglishPage() {
  return <RotoBlocksPage />;
}
