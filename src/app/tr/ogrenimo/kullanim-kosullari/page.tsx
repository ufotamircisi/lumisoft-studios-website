import NewProductLegalPage from '@/components/NewProductLegalPage';
import { newProductMetadata } from '@/lib/newProductMetadata';

export const metadata = newProductMetadata('wandermio', 'tr', 'terms');
export default function Page() { return <NewProductLegalPage product="wandermio" lang="tr" kind="terms" />; }
