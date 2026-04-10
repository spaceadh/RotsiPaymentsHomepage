import './globals.css';
import { Manrope, Space_Grotesk } from 'next/font/google';
import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL, organizationJsonLd } from '../src/lib/site';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Business Automation Systems`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Rotsi builds business automation systems, custom platforms, and workflow infrastructure for teams that need serious digital execution.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: `${SITE_NAME} | Business Automation Systems`,
    description:
      'Rotsi builds business automation systems, custom platforms, and workflow infrastructure for real commercial use.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Business Automation Systems`,
    description:
      'Rotsi builds business automation systems, custom platforms, and workflow infrastructure for real commercial use.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} bg-background font-body antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
