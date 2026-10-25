import NewProductLegalPage from '@/components/NewProductLegalPage';
import { newProductMetadata } from '@/lib/newProductMetadata';

export const metadata = newProductMetadata('midchain', 'en', 'privacy');
export default function Page() { return <NewProductLegalPage product="midchain" lang="en" kind="privacy" />; }
