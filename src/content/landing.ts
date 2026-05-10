export const landingNavItems = [
  { href: '/', label: 'Home', active: true },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '/work', label: 'Projects' },
  { href: '/labs', label: 'Labs' },
  { href: '#careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export const trustLogos = ['BEWAMA', 'SOMAFIX KENYA', 'KUMBUSHA'];

export const services = [
  {
    icon: 'software',
    title: 'Custom Software Development',
    copy: 'Web, mobile, and backend systems built around real business workflows.',
    href: '#contact',
  },
  {
    icon: 'automation',
    title: 'Automation & Integrations',
    copy: 'We connect your tools and automate workflows to save time and reduce errors.',
    href: '#contact',
  },
  {
    icon: 'analytics',
    title: 'Data & Analytics Solutions',
    copy: 'Turn operational data into dashboards, reports, and useful business insight.',
    href: '#contact',
  },
  {
    icon: 'commerce',
    title: 'Ecommerce & CRM Platforms',
    copy: 'Build customer, sales, inventory, booking, and checkout systems that teams can actually use.',
    href: '#contact',
  },
] as const;

export const aboutStats = [
  { value: '25+', label: 'Projects Delivered' },
  { value: '15+', label: 'Team Members' },
  { value: '3+', label: 'Years Building' },
];
