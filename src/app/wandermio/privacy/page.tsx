import NewProductLegalPage from '@/components/NewProductLegalPage';
import { newProductMetadata } from '@/lib/newProductMetadata';

export const metadata = newProductMetadata('wandermio', 'en', 'privacy');
export default function Page() { return <NewProductLegalPage product="wandermio" lang="en" kind="privacy" />; }
