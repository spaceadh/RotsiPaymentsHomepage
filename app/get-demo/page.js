import DemoProduct from '../../src/views/DemoProductView';
import { DEFAULT_OG_IMAGE } from '../../src/lib/seo';

export const metadata = {
  title: 'Request a Demo',
  description:
    'Request a personalized Ibiza OS or product ecosystem demo and see how Rotsi can streamline your operations.',
  alternates: {
    canonical: '/get-demo',
  },
  openGraph: {
    title: 'Request a Demo | Rotsi API Solutions',
    description:
      'Schedule a tailored walkthrough of payment reconciliation, bulk SMS, analytics, and Ibiza OS.',
    url: '/get-demo',
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
};

export default function DemoPage() {
  return <DemoProduct />;
}
