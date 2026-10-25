import MidchainPage from '@/components/MidchainPage';
import { newProductMetadata } from '@/lib/newProductMetadata';

export const metadata = newProductMetadata('midchain', 'tr');
export default function Page() { return <MidchainPage lang="tr" />; }
