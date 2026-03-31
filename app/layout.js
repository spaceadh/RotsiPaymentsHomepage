import './globals.css';
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  organizationJsonLd,
  websiteJsonLd,
} from '../src/lib/seo';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Bespoke Engineering & Product House`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Empowering businesses with seamless payment reconciliation, bulk SMS, and advanced data analytics solutions.',
  applicationName: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Payment Platform`,
    description:
      'Empowering businesses with seamless payment reconciliation, bulk SMS, and advanced data analytics solutions.',
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rotsiapisolutions',
    title: 'RotsiApi Solutions - Elevate your Business Experience',
    description:
      'Empowering businesses with seamless payment reconciliation, bulk SMS, and advanced data analytics solutions.',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
