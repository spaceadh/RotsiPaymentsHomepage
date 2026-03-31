import Contact from '../../src/views/ContactView';
import { DEFAULT_OG_IMAGE } from '../../src/lib/seo';

export const metadata = {
  title: 'Contact Us',
  description:
    'Talk to Rotsi API Solutions about enterprise engineering, payment modernization, and product implementation.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Rotsi API Solutions',
    description:
      'Book a consultation with our engineering and product team to discuss your project.',
    url: '/contact',
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
};

export default function ContactPage() {
  return <Contact />;
}
