export type ServiceEntry = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  eyebrow: string;
  summary: string;
  href: string;
  keywords: string[];
  solves: string[];
  audience: string[];
  builds: string[];
  relatedProjectSlugs: string[];
};

export const serviceEntries: ServiceEntry[] = [
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    shortTitle: 'Custom Software',
    description:
      'Custom software development for teams that need business automation systems, internal tools, dashboards, and workflow infrastructure built around real operations.',
    eyebrow: 'Custom Platforms',
    summary:
      'Rotsi designs and builds web, mobile, and backend systems for businesses that have outgrown spreadsheets, disconnected tools, and manual follow-up.',
    href: '/services/custom-software-development',
    keywords: [
      'custom software development Kenya',
      'business automation systems',
      'custom platforms',
      'internal business tools',
    ],
    solves: [
      'Scattered business processes that depend on spreadsheets, chats, or staff memory.',
      'Manual follow-up, duplicated records, and slow handoffs between teams.',
      'Systems that need to match the way the business actually operates.',
    ],
    audience: [
      'Growing teams with a clear workflow problem.',
      'Operators who need a controlled system instead of another generic tool.',
      'Founders and managers building a product or internal platform around a real use case.',
    ],
    builds: [
      'Custom web platforms and business portals.',
      'Internal tools with role-based access and approval flows.',
      'Dashboards, records, workflows, and backend logic tied to daily operations.',
    ],
    relatedProjectSlugs: ['ibiza-internal-platform', 'kumbusha', 'tena-crm'],
  },
  {
    slug: 'automation-integrations',
    title: 'Automation & Integrations',
    shortTitle: 'Automation',
    description:
      'Automation and integration services for businesses that need WhatsApp workflows, customer routing, reminders, approvals, and connected operational tools.',
    eyebrow: 'Workflow Infrastructure',
    summary:
      'Rotsi connects tools and automates repeatable workflows so teams can reduce delays, missed follow-ups, and manual coordination work.',
    href: '/services/automation-integrations',
    keywords: [
      'workflow automation Kenya',
      'WhatsApp workflow automation',
      'business process automation',
      'system integrations',
    ],
    solves: [
      'Customer inquiries that get lost across chats, forms, and staff phones.',
      'Important reminders and follow-ups that depend on memory.',
      'Manual routing between systems that should already be connected.',
    ],
    audience: [
      'Service teams managing bookings, reminders, or customer handoffs.',
      'Businesses that already have demand but need cleaner follow-through.',
      'Teams looking for WhatsApp-ready workflows, alerts, and integrations.',
    ],
    builds: [
      'WhatsApp-ready reminders, nudges, and customer routing flows.',
      'Approval routing, notification logic, and status updates.',
      'Integrations between websites, CRMs, ecommerce flows, and operations tools.',
    ],
    relatedProjectSlugs: ['kumbusha', 'tena-crm', 'bewama'],
  },
  {
    slug: 'data-analytics-solutions',
    title: 'Data & Analytics Solutions',
    shortTitle: 'Data & Analytics',
    description:
      'Data and analytics solutions for teams that need dashboards, reports, customer records, stock visibility, and operational reporting they can act on.',
    eyebrow: 'Operational Reporting',
    summary:
      'Rotsi turns operational data into dashboards and reports that help teams understand customers, stock, workflows, and business activity faster.',
    href: '/services/data-analytics-solutions',
    keywords: [
      'data dashboards Kenya',
      'operational reporting platform',
      'business analytics dashboards',
      'inventory visibility system',
    ],
    solves: [
      'Reports that take too long because data lives in too many places.',
      'Low visibility into customers, stock movement, follow-ups, and team activity.',
      'Business decisions made from partial records instead of structured information.',
    ],
    audience: [
      'Managers who need clearer operational reporting.',
      'Sales, inventory, and service teams that need shared visibility.',
      'Businesses preparing to move from manual records to structured systems.',
    ],
    builds: [
      'Operational dashboards and reporting views.',
      'Customer, stock, sales, and workflow visibility layers.',
      'Data models and interfaces that make records easier to review and act on.',
    ],
    relatedProjectSlugs: ['ibiza-internal-platform', 'tena-crm', 'somafix-kenya'],
  },
  {
    slug: 'ecommerce-crm-platforms',
    title: 'Ecommerce & CRM Platforms',
    shortTitle: 'Ecommerce & CRM',
    description:
      'Ecommerce and CRM platform development for businesses that need product discovery, quote requests, checkout workflows, customer records, and repeat purchasing systems.',
    eyebrow: 'Commerce Systems',
    summary:
      'Rotsi builds ecommerce and CRM platforms that connect product discovery, buying flows, customer history, follow-up, and repeat revenue.',
    href: '/services/ecommerce-crm-platforms',
    keywords: [
      'B2B ecommerce platform Kenya',
      'CRM platform development',
      'ecommerce checkout workflows',
      'customer retention systems',
    ],
    solves: [
      'Product, customer, and order workflows that are too fragmented to scale.',
      'Checkout, quoting, or booking journeys that lose customer intent.',
      'Weak repeat-purchase and customer-retention systems.',
    ],
    audience: [
      'B2B suppliers, service businesses, and teams selling through structured workflows.',
      'Businesses that need ecommerce, CRM, or booking logic built around their operations.',
      'Teams that want search visibility, customer records, and follow-up connected in one system.',
    ],
    builds: [
      'B2B ecommerce, quote request, cart recovery, and checkout flows.',
      'CRM platforms for customer records, bookings, follow-ups, and retention.',
      'Loyalty mechanics, product SEO structure, and customer lifecycle workflows.',
    ],
    relatedProjectSlugs: ['bewama', 'tena-crm', 'somafix-kenya'],
  },
];

export function getServiceBySlug(slug: string) {
  return serviceEntries.find((service) => service.slug === slug);
}
