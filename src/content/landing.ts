export const landingNavItems = [
  { href: '/', label: 'Home', active: true },
  { href: '#about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Projects' },
  { href: '/labs', label: 'Labs' },
  { href: '#careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export type TrustLogo = {
  label: string;
  src?: string;
  alt?: string;
};

export const trustLogos: TrustLogo[] = [
  { label: 'BEWAMA', src: '/clients-work/bewama/logo.png' },
  { label: 'SOMAFIX KENYA', src: '/clients-work/somafix/logo.png' },
  { label: 'TENA CRM', src: '/clients-work/tena/logo.png' },
  { label: 'KUMBUSHA', src: '/clients-work/kumbusha/logo.png' },
  { label: 'IBIZA CRM', src: '/clients-work/ibiza/logo.png' },
];

export const services = [
  {
    icon: 'software',
    title: 'Custom Software Development',
    copy: 'Web, mobile, and backend systems built around real business workflows.',
    href: '/services/custom-software-development',
  },
  {
    icon: 'automation',
    title: 'Automation & Integrations',
    copy: 'We connect your tools and automate workflows to save time and reduce errors.',
    href: '/services/automation-integrations',
  },
  {
    icon: 'analytics',
    title: 'Data & Analytics Solutions',
    copy: 'Turn operational data into dashboards, reports, and useful business insight.',
    href: '/services/data-analytics-solutions',
  },
  {
    icon: 'commerce',
    title: 'Ecommerce & CRM Platforms',
    copy: 'Build customer, sales, inventory, booking, and checkout systems that teams can actually use.',
    href: '/services/ecommerce-crm-platforms',
  },
] as const;

export const aboutStats = [
  { value: '25+', label: 'Projects Delivered' },
  { value: '15+', label: 'Team Members' },
  { value: '3+', label: 'Years Building' },
];
