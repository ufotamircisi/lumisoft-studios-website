import MidchainPage from '@/components/MidchainPage';
import { newProductMetadata } from '@/lib/newProductMetadata';

export const metadata = newProductMetadata('midchain', 'en');
export default function Page() { return <MidchainPage lang="en" />; }
