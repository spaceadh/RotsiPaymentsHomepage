export type ProjectSection = {
  id: string;
  label: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
  detail: string;
};

export type ProjectMechanism = {
  title: string;
  description: string;
};

export type ProjectOutcome = {
  title: string;
  description: string;
};

export type ProjectAsset = {
  src: string;
  alt: string;
  dataAlt?: string;
};

export type ProjectSeo = {
  title: string;
  description: string;
  keywords: string[];
};

export type ProjectEntry = {
  slug: string;
  layout: 'bewama' | 'kumbusha' | 'somafix-site' | 'nexus';
  index: string;
  surface: 'External Platform' | 'In-Progress Venture' | 'Internal Platform';
  title: string;
  clientLabel: string;
  subtitle: string;
  href: string;
  externalUrl?: string;
  role: string;
  status: string;
  summary: string;
  cardSummary: string;
  tags: string[];
  sections: ProjectSection[];
  seo: ProjectSeo;
  heroLabel: string;
  heroTitle: string;
  heroIntro: string;
  image: ProjectAsset;
  secondaryAsset?: ProjectAsset;
  challenge: string[];
  mechanisms: ProjectMechanism[];
  outcomes: ProjectOutcome[];
  proofPoints: string[];
  metrics: ProjectMetric[];
  ctaTitle: string;
  ctaDescription: string;
};

export const projects: ProjectEntry[] = [
  {
    slug: 'bewama',
    layout: 'bewama',
    index: '01. B2B COMMERCE',
    surface: 'External Platform',
    title: 'Bewama',
    clientLabel: 'BEWAMA',
    subtitle: 'B2B COMMERCE FOR CONSTRUCTION, INDUSTRIAL, AND CHEMICAL MATERIALS',
    href: '/projects/bewama',
    externalUrl: 'https://bewama.com',
    role: 'Technical Partner',
    status: 'Live Platform',
    summary:
      'Bewama is a B2B commerce platform built for construction, industrial, and chemical buying. Rotsi supports the venture as the technical partner across product design, system design, architecture, SEO, and conversion workflows.',
    cardSummary:
      'A B2B commerce system designed to attract search demand, guide buying decisions, recover intent, and support repeat purchasing in a category where product clarity matters.',
    tags: ['B2B Commerce', 'SEO Content Engine', 'Abandoned Cart Recovery'],
    sections: [
      { id: 'challenge', label: 'Challenge' },
      { id: 'mechanisms', label: 'Mechanisms' },
      { id: 'outcomes', label: 'Outcomes' },
      { id: 'proof', label: 'Proof' },
    ],
    seo: {
      title: 'Bewama Case Study',
      description:
        'How Rotsi partnered on Bewama, a B2B commerce platform for construction and industrial materials, with SEO, cart recovery, loyalty mechanics, and growth systems.',
      keywords: [
        'B2B ecommerce case study Kenya',
        'construction materials ecommerce platform',
        'industrial products SEO',
        'abandoned cart recovery ecommerce',
        'loyalty points system ecommerce',
      ],
    },
    heroLabel: 'Case Study',
    heroTitle: 'A commerce platform built to drive search visibility, buyer confidence, and repeat purchasing.',
    heroIntro:
      'Bewama needed more than an online store. It needed a platform that could handle category depth, support serious buying journeys, and turn traffic into repeatable sales activity.',
    image: {
      src: '/clients-work/bewama/landing-page.png',
      alt: 'Bewama storefront interface on desktop',
      dataAlt:
        'clean desktop interface for a B2B ecommerce storefront with product categories, search, and content-led merchandising',
    },
    secondaryAsset: {
      src: '/clients-work/bewama/landing-page.png',
      alt: 'Bewama project screenshot',
    },
    challenge: [
      'The business needed a digital sales surface that could serve contractors, hardware shops, mafundi, and self-service home repair buyers without feeling confusing or thin.',
      'The product mix was broad, technical, and search-driven, so the site had to support both discovery and trust. Standard e-commerce patterns were not enough on their own.',
      'The platform also needed a stronger commercial engine behind the interface: search visibility, re-engagement, and mechanisms that encouraged users to come back and buy again.',
    ],
    mechanisms: [
      {
        title: 'Product and system design',
        description:
          'Rotsi handled the UI direction, software design, and system architecture so the platform could support a structured buying journey from discovery to checkout.',
      },
      {
        title: 'Abandoned cart recovery',
        description:
          'Cart recovery flows were introduced so incomplete purchase intent could be tracked and reactivated instead of disappearing after the first session.',
      },
      {
        title: 'Loyalty mechanics',
        description:
          'A points system was designed around actions that matter commercially: account creation, referrals, purchases, reviews, user-generated proof, and repeated logins.',
      },
      {
        title: 'SEO content engine',
        description:
          'Product pages and blog content were structured around search visibility so Bewama could compete on commercial queries and educational queries at the same time.',
      },
      {
        title: 'Social entry automation',
        description:
          'Comment and DM automations on Facebook and Instagram were used to move interested users from social activity into the website funnel.',
      },
    ],
    outcomes: [
      {
        title: 'A stronger acquisition layer',
        description:
          'Search became a more reliable source of high-intent traffic because products and educational content were built to support real lookup behavior.',
      },
      {
        title: 'A clearer conversion system',
        description:
          'The platform was set up to recover lost intent, guide product discovery, and support follow-through instead of treating checkout as a one-shot event.',
      },
      {
        title: 'A better repeat-purchase loop',
        description:
          'Loyalty mechanics and ongoing engagement flows helped make the site more than a storefront. It became part of a longer customer lifecycle.',
      },
    ],
    proofPoints: [
      '100+ products added to the platform',
      '10+ blog articles published to support search coverage',
      '90%+ SEO health score',
      'Commerce, content, and social entry flows designed as one connected system',
    ],
    metrics: [
      {
        value: '100+',
        label: 'Products Added',
        detail: 'Structured product coverage for commercial buying and discovery.',
      },
      {
        value: '10+',
        label: 'Blogs Published',
        detail: 'Educational content designed to support search demand and buyer trust.',
      },
      {
        value: '90%+',
        label: 'SEO Health',
        detail: 'Technical and on-page SEO maintained at a high standard.',
      },
    ],
    ctaTitle: 'Need a commerce system that does more than list products?',
    ctaDescription:
      'Rotsi helps businesses build platforms that connect search visibility, buying flows, and operational follow-through.',
  },
  {
    slug: 'kumbusha',
    layout: 'kumbusha',
    index: '02. CULTURE WORKFLOWS',
    surface: 'In-Progress Venture',
    title: 'Kumbusha',
    clientLabel: 'KUMBUSHA',
    subtitle: 'MILESTONE REMINDERS AND CULTURE WORKFLOWS FOR TEAMS',
    href: '/projects/kumbusha',
    externalUrl: 'https://kumbusha.vercel.app/',
    role: 'Product Builder',
    status: 'In Progress',
    summary:
      'Kumbusha is an in-progress venture focused on helping managers act on employee milestones with less friction. The product turns birthdays, anniversaries, and related moments into manageable workflows instead of forgotten good intentions.',
    cardSummary:
      'An in-progress culture workflow product that helps managers stay ahead of employee milestones and act on them through reminders, quick actions, and vendor coordination.',
    tags: ['In-Progress Venture', 'WhatsApp Automation', 'Culture Workflows'],
    sections: [
      { id: 'problem', label: 'Problem' },
      { id: 'workflow', label: 'Workflow' },
      { id: 'status', label: 'Status' },
      { id: 'validation', label: 'Validation' },
    ],
    seo: {
      title: 'Kumbusha Case Study',
      description:
        'How Rotsi is building Kumbusha, an in-progress venture for employee milestone reminders, manager actions, and culture workflows supported by WhatsApp automation.',
      keywords: [
        'employee milestone reminder system',
        'WhatsApp reminder workflow for managers',
        'employee birthday reminder tool',
        'culture workflow software',
        'employee appreciation automation',
      ],
    },
    heroLabel: 'In-Progress Venture',
    heroTitle: 'A culture workflow product built around moments managers often remember too late.',
    heroIntro:
      'Kumbusha starts with a simple operational problem: meaningful employee milestones are easy to miss when managers are busy. The product turns those moments into a workflow that can actually be acted on.',
    image: {
      src: '/clients-work/kumbusha/dashboard.png',
      alt: 'Kumbusha milestone workflow concept graphic',
      dataAlt:
        'minimal product concept graphic showing milestone reminders, manager actions, and whatsapp workflow automation',
    },
    secondaryAsset: {
      src: '/clients-work/kumbusha/dashboard.png',
      alt: 'Kumbusha workflow diagram',
    },
    challenge: [
      'Managers often want to recognise birthdays, anniversaries, and joining milestones, but the operational follow-through breaks down when reminders rely on memory.',
      'That gap affects culture in a quiet way. Employees can feel overlooked even when the intent to appreciate them exists.',
      'The product therefore needed to feel simple on the surface while handling reminders, manager actions, and follow-up workflows behind the scenes.',
    ],
    mechanisms: [
      {
        title: 'Employee milestone intake',
        description:
          'Managers upload employee information with the milestone dates that matter to their team.',
      },
      {
        title: 'WhatsApp reminder logic',
        description:
          'The system is designed to notify managers a set number of days before an upcoming milestone so the action window stays useful.',
      },
      {
        title: 'Quick action flows',
        description:
          'Reminders are paired with simple next steps, such as acting now or asking to be reminded again closer to the date.',
      },
      {
        title: 'Vendor coordination path',
        description:
          'The product includes a broader workflow for coordinating with approved vendors when a manager wants to follow through on a gesture quickly.',
      },
    ],
    outcomes: [
      {
        title: 'Clearer follow-through',
        description:
          'The product reduces the gap between good intent and actual action by giving managers reminders in a channel they already use.',
      },
      {
        title: 'A practical culture layer',
        description:
          'Instead of talking about culture as an abstract idea, the product turns recurring people moments into a repeatable workflow.',
      },
      {
        title: 'A strong validation path',
        description:
          'The current build supports product development now and company outreach next, with enough workflow depth to test real usefulness in the market.',
      },
    ],
    proofPoints: [
      'In-progress venture with working workflow direction',
      'Vendor onboarding has already started',
      'Built around WhatsApp-based reminder and action flows',
      'Next phase focuses on company outreach and validation',
    ],
    metrics: [
      {
        value: '2',
        label: 'Days Before',
        detail: 'Example reminder window currently shaping the workflow logic.',
      },
      {
        value: 'Early',
        label: 'Vendor Setup',
        detail: 'Some cake vendors have already been added to support the broader flow.',
      },
      {
        value: 'Next',
        label: 'Validation Phase',
        detail: 'Company outreach starts after current development milestones are complete.',
      },
    ],
    ctaTitle: 'Building a product around a real operating problem?',
    ctaDescription:
      'Rotsi helps turn rough product ideas into structured systems with usable workflows, clean logic, and room to validate in the real market.',
  },
  {
    slug: 'somafix-kenya',
    layout: 'somafix-site',
    index: '03. BRAND AND SEO',
    surface: 'External Platform',
    title: 'Somafix Kenya Website',
    clientLabel: 'SOMAFIX KENYA',
    subtitle: 'DIGITAL BRAND PRESENCE FOR A SILICONE DISTRIBUTOR',
    href: '/projects/somafix-kenya',
    externalUrl: 'https://somafixkenya.co.ke',
    role: 'Technical Partner',
    status: 'Live Website',
    summary:
      'For Somafix Kenya, the public-facing website was not only a design exercise. It was a brand visibility and product-clarity project shaped around SEO, performance, and trust.',
    cardSummary:
      'A distributor website built to improve brand recognition, present products clearly, and maintain strong technical scores across mobile and desktop.',
    tags: ['Brand Website', 'Technical SEO', 'Performance'],
    sections: [
      { id: 'brief', label: 'Brief' },
      { id: 'execution', label: 'Execution' },
      { id: 'performance', label: 'Performance' },
      { id: 'impact', label: 'Impact' },
    ],
    seo: {
      title: 'Somafix Kenya Website Case Study',
      description:
        'How Rotsi helped Somafix Kenya improve digital brand recognition through a product-focused website, stronger SEO structure, and high technical performance.',
      keywords: [
        'distributor website case study',
        'product SEO website',
        'website performance optimization Kenya',
        'silicone distributor website',
        'brand website for industrial products',
      ],
    },
    heroLabel: 'Case Study',
    heroTitle: 'A distributor website designed to strengthen brand recognition and product discoverability.',
    heroIntro:
      'Somafix Kenya needed a public-facing website that would do two jobs well: present the brand professionally and make product information easier to find, trust, and use.',
    image: {
      src: '/clients-work/somafix/landing-page.png',
      alt: 'Somafix Kenya website overview graphic',
      dataAlt:
        'clean website case study graphic showing product visibility, search performance, and mobile and desktop quality scores',
    },
    secondaryAsset: {
      src: '/clients-work/somafix/landing-page.png',
      alt: 'Somafix Kenya performance and SEO graphic',
    },
    challenge: [
      'The project started with a straightforward need for a website, but the real opportunity was broader. The brand needed stronger digital recognition and a more deliberate product presence.',
      'That meant the site had to balance branding, product clarity, SEO, and technical quality instead of over-prioritising one at the expense of the others.',
      'The public site also had to perform well on the devices customers actually use, especially mobile.',
    ],
    mechanisms: [
      {
        title: 'Brand-led web design',
        description:
          'The site was designed to strengthen how Somafix Kenya shows up online while staying grounded in product information and use-case clarity.',
      },
      {
        title: 'Product structuring and SEO',
        description:
          'Product presentation and on-page SEO were treated as part of the core build so brand visibility could improve through search, not only through direct traffic.',
      },
      {
        title: 'Cross-device optimisation',
        description:
          'The site was tuned for mobile and desktop performance so customers could reach the same level of clarity regardless of device.',
      },
    ],
    outcomes: [
      {
        title: 'A more credible digital presence',
        description:
          'The website gave the brand a cleaner and more reliable public presence, with products and content presented in a way that supports trust.',
      },
      {
        title: 'Stronger search readiness',
        description:
          'SEO was built into the structure of the site so product visibility and brand discovery could improve together.',
      },
      {
        title: 'Better technical quality',
        description:
          'The final result maintained strong quality benchmarks across performance, accessibility, best practices, and SEO.',
      },
    ],
    proofPoints: [
      '98 performance score',
      '94 accessibility score',
      '100 best practices score',
      '100 SEO score',
    ],
    metrics: [
      {
        value: '98',
        label: 'Performance',
        detail: 'Strong experience on real devices and constrained networks.',
      },
      {
        value: '94',
        label: 'Accessibility',
        detail: 'Solid usability baseline across common accessibility checks.',
      },
      {
        value: '100',
        label: 'SEO',
        detail: 'Technical and on-page structure aligned with search best practices.',
      },
    ],
    ctaTitle: 'Need a website that helps the brand and the search strategy at the same time?',
    ctaDescription:
      'Rotsi builds public-facing sites that connect presentation, product clarity, and technical quality instead of treating them as separate jobs.',
  },
  {
    slug: 'nexus-internal-platform',
    layout: 'nexus',
    index: '04. INTERNAL PLATFORM',
    surface: 'Internal Platform',
    title: 'Nexus - Internal Platform',
    clientLabel: 'NEXUS',
    subtitle: 'CUSTOM OPERATIONS PLATFORM FOR CUSTOMER RECORDS, STOCK, AND REPORTING',
    href: '/projects/nexus-internal-platform',
    externalUrl: 'https://crm.somafixkenya.co.ke',
    role: 'Technical Partner',
    status: 'Live Internal Platform',
    summary:
      'Nexus is the internal platform built for Somafix to bring customer records, inventory movement, permissions, and operational visibility into one controlled environment.',
    cardSummary:
      'An internal platform for customer continuity, inventory visibility, and permission-controlled operations in a distributor environment.',
    tags: ['Internal Platform', 'Role-Based Permissions', 'Operational Reporting'],
    sections: [
      { id: 'operations', label: 'Operations' },
      { id: 'controls', label: 'Controls' },
      { id: 'visibility', label: 'Visibility' },
      { id: 'outcome', label: 'Outcome' },
    ],
    seo: {
      title: 'Nexus Internal Platform Case Study',
      description:
        'How Rotsi built Nexus, an internal platform for centralised customer records, inventory movement visibility, permissions, and operational reporting.',
      keywords: [
        'internal platform case study',
        'inventory visibility system',
        'customer records internal platform',
        'role based permissions software',
        'operations reporting platform',
      ],
    },
    heroLabel: 'Case Study',
    heroTitle: 'An internal platform designed for continuity, control, and operational visibility.',
    heroIntro:
      'Nexus was built around a practical business problem: important customer and stock information needed to live in one controlled system instead of being scattered across people and processes.',
    image: {
      src: '/clients-work/somafix/site-overview.png',
      alt: 'Internal platform dashboard concept for stock and customer visibility',
      dataAlt:
        'minimal operations dashboard concept showing customer records, inventory movement, permissions, and reporting',
    },
    secondaryAsset: {
      src: '/clients-work/somafix/site-overview.png',
      alt: 'Nexus internal platform operations graphic',
    },
    challenge: [
      'The business needed a central place for customer records so continuity would not depend on individual staff members holding information on their own.',
      'It also needed better operational visibility into stock movement, including inbound, outbound, returned, and spoiled goods.',
      'On top of that, the system had to support user permissions and approval flows so mistakes could be handled without weakening control.',
    ],
    mechanisms: [
      {
        title: 'Centralised customer records',
        description:
          'Customer information was brought into a single internal platform so teams could work with continuity and faster lookup.',
      },
      {
        title: 'Inventory movement tracking',
        description:
          'The platform supports visibility across stock-in, stock-out, returns, and spoilage so inventory activity is easier to review and understand.',
      },
      {
        title: 'Role-based permissions',
        description:
          'User management and access controls were built into the platform so the right people can act, review, and approve changes without unnecessary data interference.',
      },
      {
        title: 'Operational reporting',
        description:
          'Cross-referencing customer and stock data makes it easier to see patterns, maintain continuity, and support day-to-day decision-making.',
      },
    ],
    outcomes: [
      {
        title: 'Better business continuity',
        description:
          'Customer history and operational records stay with the business rather than living only with individual staff members.',
      },
      {
        title: 'Stronger internal control',
        description:
          'Permissions and approvals create a cleaner operating environment without blocking day-to-day work.',
      },
      {
        title: 'Clearer operational visibility',
        description:
          'The business gets a better view of stock movement and internal activity through one platform instead of fragmented tools.',
      },
    ],
    proofPoints: [
      'Centralised customer records',
      'Inventory movement visibility',
      'Role-based permissions and approval flows',
      'Operational reporting across internal activity',
    ],
    metrics: [
      {
        value: '1',
        label: 'Shared System',
        detail: 'One controlled environment for customer, stock, and user activity.',
      },
      {
        value: '4',
        label: 'Stock States',
        detail: 'Inbound, outbound, returned, and spoiled goods are all tracked.',
      },
      {
        value: 'Controlled',
        label: 'Permissions',
        detail: 'User access and approvals support cleaner internal operations.',
      },
    ],
    ctaTitle: 'Need an internal platform built around how the business actually operates?',
    ctaDescription:
      'Rotsi designs internal systems that improve continuity, control, and reporting without adding unnecessary operational friction.',
  },
];

export const featuredProjects = projects.slice(0, 3);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}