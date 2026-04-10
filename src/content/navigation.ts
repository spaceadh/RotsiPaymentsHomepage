import type { MobileMenuItem } from '../components/site/SiteMobileMenu';
import type { ProjectEntry } from './projects';

export const mainNavigationItems = (activeHref?: string): MobileMenuItem[] => [
  { href: '/#services', label: 'Services', active: activeHref === '/#services' },
  { href: '/work', label: 'Work', active: activeHref === '/work' },
  { href: '/blog', label: 'Journal', active: activeHref === '/blog' },
  { href: '/contact', label: 'Contact', active: activeHref === '/contact' },
];

export const projectNavigationItems = (project: Pick<ProjectEntry, 'href' | 'sections'>): MobileMenuItem[] => [
  ...project.sections.map((section) => ({
    href: `${project.href}#${section.id}`,
    label: section.label,
  })),
  { href: '/contact', label: 'Contact' },
];
