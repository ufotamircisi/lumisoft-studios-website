import WandermioPage from '@/components/WandermioPage';
import { newProductMetadata } from '@/lib/newProductMetadata';

export const metadata = newProductMetadata('wandermio', 'tr');
export default function Page() { return <WandermioPage lang="tr" />; }
