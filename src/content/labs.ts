export type LabItemType = 'open-source' | 'experiment' | 'internal-note' | 'engineering' | 'research';

export type LabItemStatus = 'active' | 'planned' | 'archived' | 'published';

export type LabItem = {
  slug: string;
  title: string;
  summary: string;
  type: LabItemType;
  status: LabItemStatus;
  tags: string[];
  href?: string;
  githubUrl?: string;
  publishedAt?: string;
  featured?: boolean;
};

export const labItems: LabItem[] = [
  {
    slug: 'jambo-programming-language',
    title: 'Jambo Programming Language',
    summary:
      'A Swahili-inspired programming language experiment for beginner coding education, built to make early programming concepts feel more local and accessible.',
    type: 'open-source',
    status: 'active',
    tags: ['Open Source', 'Go', 'Programming Language', 'Education'],
    publishedAt: '2026-05-01',
    featured: true,
  },
  {
    slug: 'interview-coder',
    title: 'Interview Coder',
    summary:
      'An open-source AI desktop app concept for coding interview practice, problem explanation, debugging support, and complexity study.',
    type: 'experiment',
    status: 'active',
    tags: ['AI', 'Desktop App', 'Interview Prep', 'Open Source'],
    publishedAt: '2026-04-22',
    featured: true,
  },
  {
    slug: 'merchant-operating-system-notes',
    title: 'Merchant Operating System Notes',
    summary:
      'Internal product notes from the Ibiza direction: CRM, inventory, sales, storefronts, WhatsApp follow-ups, and reporting for African SMEs.',
    type: 'internal-note',
    status: 'published',
    tags: ['CRM', 'Inventory', 'WhatsApp', 'SMEs'],
    publishedAt: '2026-04-15',
    featured: true,
  },
  {
    slug: 'github-and-open-source-access',
    title: 'GitHub And Open Source Access',
    summary:
      'The public GitHub home for Rotsi Labs repositories, open-source releases, starter kits, demos, and engineering utilities.',
    type: 'open-source',
    status: 'active',
    tags: ['GitHub', 'Repositories', 'Open Source', 'Developer Access'],
    githubUrl: 'https://github.com/rotsilabs',
    featured: true,
  },
  {
    slug: 'workflow-automation-patterns',
    title: 'Workflow Automation Patterns',
    summary:
      'Reusable notes on reminders, routing, approvals, broadcasts, customer follow-ups, and the practical limits of automation in business systems.',
    type: 'engineering',
    status: 'published',
    tags: ['Automation', 'WhatsApp', 'Approvals', 'Operations'],
    publishedAt: '2026-03-30',
  },
  {
    slug: 'internal-platform-design-rules',
    title: 'Internal Platform Design Rules',
    summary:
      'Engineering notes on customer records, stock movement, role-based permissions, auditability, and reporting for internal business platforms.',
    type: 'research',
    status: 'published',
    tags: ['Internal Platforms', 'Permissions', 'Inventory', 'Reporting'],
    publishedAt: '2026-03-20',
  },
];

export const labTypeLabels: Record<LabItemType, string> = {
  'open-source': 'Open Source',
  experiment: 'Experiment',
  'internal-note': 'Internal Note',
  engineering: 'Engineering',
  research: 'Research',
};

export function getAllLabItems() {
  return [...labItems].sort((a, b) => {
    if (!a.publishedAt && !b.publishedAt) {
      return a.title.localeCompare(b.title);
    }

    if (!a.publishedAt) {
      return 1;
    }

    if (!b.publishedAt) {
      return -1;
    }

    return a.publishedAt < b.publishedAt ? 1 : -1;
  });
}

export function getFeaturedLabItems() {
  return getAllLabItems().filter((item) => item.featured);
}

export function getLabItemsByType(type: LabItemType) {
  return getAllLabItems().filter((item) => item.type === type);
}
