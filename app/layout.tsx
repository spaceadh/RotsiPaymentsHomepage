import './globals.css';
import { Manrope, Space_Grotesk } from 'next/font/google';
import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL, organizationJsonLd } from '../src/lib/site';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Architectural Excellence`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Rotsi Solutions engineers modern levers for industrial infrastructure, enterprise systems, and flow-state products.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: `${SITE_NAME} | Architectural Excellence`,
    description:
      'Innovation is the core. Tech is the tool. Rotsi Solutions builds precision-engineered systems for elite growth.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Architectural Excellence`,
    description:
      'Innovation is the core. Tech is the tool. Rotsi Solutions builds precision-engineered systems for elite growth.',
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
