export const SITE_URL = 'https://rotsi.co.ke';
export const SITE_NAME = 'Rotsi';
export const WORDMARK_LOGO_PATH = '/brand/rotsi-wordmark-primary.svg';
export const MONOGRAM_LOGO_PATH = '/brand/rotsi-monogram-primary.svg';

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}${WORDMARK_LOGO_PATH}`,
  image: `${SITE_URL}${WORDMARK_LOGO_PATH}`,
  email: 'business@rotsi.co.ke',
  telephone: '+254745474586',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mombasa Road',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
};

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
