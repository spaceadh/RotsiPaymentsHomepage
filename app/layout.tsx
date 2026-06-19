import './globals.css';
import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL, organizationJsonLd, websiteJsonLd } from '../src/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Rethinking Technology`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Rotsi rethinks technology for modern businesses. Explore our creative arm, Malaika Studios.',
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: `${SITE_NAME} — Rethinking Technology`,
    description:
      'Rotsi rethinks technology for modern businesses. Explore our creative arm, Malaika Studios.',
  },
  twitter: {
    card: 'summary',
    title: `${SITE_NAME} — Rethinking Technology`,
    description:
      'Rotsi rethinks technology for modern businesses. Explore our creative arm, Malaika Studios.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
