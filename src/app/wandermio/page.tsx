import WandermioPage from '@/components/WandermioPage';
import { newProductMetadata } from '@/lib/newProductMetadata';

export const metadata = newProductMetadata('wandermio', 'en');
export default function Page() { return <WandermioPage lang="en" />; }
