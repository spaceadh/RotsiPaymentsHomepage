import type { MobileMenuItem } from '../components/site/SiteMobileMenu';

export const mainNavigationItems = (activeHref?: string): MobileMenuItem[] => [
  { href: '/#services', label: 'Services', active: activeHref === '/#services' },
  { href: '/work', label: 'Work', active: activeHref === '/work' },
  { href: '/blog', label: 'Journal', active: activeHref === '/blog' },
  { href: '/contact', label: 'Contact', active: activeHref === '/contact' },
];

export const bewamaNavigationItems = (): MobileMenuItem[] => [
  { href: '/projects/bewama#expertise', label: 'Expertise' },
  { href: '/projects/bewama#projects', label: 'Projects' },
  { href: '/projects/bewama#sustainability', label: 'Sustainability' },
  { href: '/contact', label: 'Contact' },
];

export const kumbushaNavigationItems = (): MobileMenuItem[] => [
  { href: '/projects/kumbusha#overview', label: 'Overview' },
  { href: '/projects/kumbusha#philosophy', label: 'Philosophy' },
  { href: '/projects/kumbusha#systems', label: 'Systems' },
  { href: '/projects/kumbusha#architecture', label: 'Architecture' },
  { href: '/contact', label: 'Contact' },
];
