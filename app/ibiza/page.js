import Ibiza from '../../src/views/IbizaView';
import { DEFAULT_OG_IMAGE, ibizaProductJsonLd } from '../../src/lib/seo';

export const metadata = {
  title: 'Ibiza OS',
  description:
    'Ibiza OS unifies WhatsApp sales, mobile money, inventory, and reconciliation in one business operating system.',
  alternates: {
    canonical: '/ibiza',
  },
  openGraph: {
    title: 'Ibiza OS | Rotsi API Solutions',
    description:
      'The reconciliation and retail engine that helps modern businesses automate operations end to end.',
    url: '/ibiza',
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
};

export default function IbizaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ibizaProductJsonLd) }}
      />
      <Ibiza />
    </>
  );
}
