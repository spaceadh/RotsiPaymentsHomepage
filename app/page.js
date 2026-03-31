import Home from '../src/views/HomeView';
import { DEFAULT_OG_IMAGE } from '../src/lib/seo';

export const metadata = {
  title: 'Bespoke Engineering & Product House',
  description:
    'Rotsi API Solutions architects operational sovereignty with enterprise engineering, strategic integrations, and Ibiza OS.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Rotsi API Solutions | Bespoke Engineering & Product House',
    description:
      'Enterprise-grade engineering, merchant network digitization, and modern product ecosystems under one roof.',
    url: '/',
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
};

export default function HomePage() {
  return <Home />;
}
