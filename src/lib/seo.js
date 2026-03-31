export const SITE_URL = 'https://rotsi.co.ke';
export const SITE_NAME = 'Rotsi API Solutions';
export const DEFAULT_OG_IMAGE = '/favicon.png';

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  email: 'support@rotsi.co.ke',
  telephone: '+254745474586',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mombasa Road',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  sameAs: [
    'https://www.linkedin.com/company/rotsi-api',
    'https://www.facebook.com/ENLIGHTENEERING/',
  ],
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
};

export const ibizaProductJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ibiza OS',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'KES',
    availability: 'https://schema.org/InStock',
  },
  provider: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  description:
    'Unified retail and reconciliation operating system for WhatsApp sales, mobile money, inventory, and analytics.',
  url: `${SITE_URL}/ibiza`,
};
