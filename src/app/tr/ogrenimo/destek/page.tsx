import NewProductLegalPage from '@/components/NewProductLegalPage';
import { newProductMetadata } from '@/lib/newProductMetadata';

export const metadata = newProductMetadata('wandermio', 'tr', 'support');
export default function Page() { return <NewProductLegalPage product="wandermio" lang="tr" kind="support" />; }
