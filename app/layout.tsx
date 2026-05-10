import './globals.css';
import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL, organizationJsonLd } from '../src/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Business Automation Systems, Custom Platforms & Workflow Infrastructure`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Rotsi builds business automation systems, custom platforms, ecommerce workflows, CRM tools, and internal operations software for growing businesses.',
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: `${SITE_NAME} | Business Automation Systems, Custom Platforms & Workflow Infrastructure`,
    description:
      'Rotsi builds practical software systems for ecommerce, CRM, workflow automation, internal operations, and business growth.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Business Automation Systems, Custom Platforms & Workflow Infrastructure`,
    description:
      'Rotsi builds practical software systems for ecommerce, CRM, workflow automation, internal operations, and business growth.',
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
        {children}
      </body>
    </html>
  );
}
