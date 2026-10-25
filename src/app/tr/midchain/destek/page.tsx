import NewProductLegalPage from '@/components/NewProductLegalPage';
import { newProductMetadata } from '@/lib/newProductMetadata';

export const metadata = newProductMetadata('midchain', 'tr', 'support');
export default function Page() { return <NewProductLegalPage product="midchain" lang="tr" kind="support" />; }
