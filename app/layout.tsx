import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL, organizationJsonLd } from '../src/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Systems, People, Impact`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Rotsi Labs is a product and systems studio building fintech solutions, automation tools, and digital products for Africa and the world.',
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: `${SITE_NAME} | Systems, People, Impact`,
    description:
      'Rotsi Labs builds systems that solve real business problems across fintech, automation, data, and digital products.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Systems, People, Impact`,
    description:
      'Rotsi Labs builds systems that solve real business problems across fintech, automation, data, and digital products.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-background font-body antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
