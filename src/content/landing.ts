export const landingNavItems = [
  { href: '/', label: 'Home', active: true },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#labs', label: 'Labs' },
  { href: '#careers', label: 'Careers' },
  { href: '#contact', label: 'Contact' },
];

export const trustLogos = ['pesapal', 'm-pesa', 'dpo', 'sendy', 'JUMIA'];

export const services = [
  {
    icon: '⌘',
    title: 'Custom Software Development',
    copy: 'Web, mobile and backend solutions built around your business process.',
    href: '#contact',
  },
  {
    icon: '⇄',
    title: 'Automation & Integrations',
    copy: 'We connect your tools and automate workflows to save time and reduce errors.',
    href: '#contact',
  },
  {
    icon: '◎',
    title: 'Data & Analytics Solutions',
    copy: 'Turn raw data into clean dashboards and useful business insight.',
    href: '#contact',
  },
  {
    icon: '▣',
    title: 'APIs & Fintech Infrastructure',
    copy: 'Secure, reliable and scalable APIs for payments and operational systems.',
    href: '#contact',
  },
];

export const featuredLandingProjects = [
  {
    tag: 'Fintech',
    title: 'Payment Reconciliation System',
    copy: 'Automated reconciliation engine for high-volume transactions with real-time reporting.',
    href: '/work',
    tone: 'light',
  },
  {
    tag: 'SaaS',
    title: 'Business Operations Platform',
    copy: 'All-in-one platform for SMEs to manage sales, inventory and customers.',
    href: '/work',
    tone: 'dark',
  },
  {
    tag: 'Data',
    title: 'Analytics Dashboard',
    copy: 'Real-time analytics dashboard for tracking key business metrics and performance.',
    href: '/work',
    tone: 'light',
  },
] as const;

export const aboutStats = [
  { value: '25+', label: 'Projects Delivered' },
  { value: '15+', label: 'Team Members' },
  { value: '3+', label: 'Years Building' },
];
