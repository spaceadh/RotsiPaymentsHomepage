export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'architectural-minimalism-digital-enterprise',
    title: 'Architectural Minimalism in Digital Enterprise Systems',
    description:
      'How minimal software architecture reduces cognitive load and increases decision velocity for executive teams.',
    publishedAt: '2026-03-29',
    readingTime: '6 min read',
    category: 'Architecture',
    content: [
      'Architectural minimalism is not a visual style alone. It is a system-level discipline that removes operational noise and leaves only the actions that move enterprise value.',
      'At Rotsi Solutions, we apply this discipline by mapping business friction to interface friction. Every redundant click, duplicate dashboard, and split workflow introduces invisible tax.',
      'When architecture is clear, teams navigate faster, coordinate better, and execute with less managerial overhead. This is why minimal structure often produces maximal throughput.',
    ],
  },
  {
    slug: 'industrial-infrastructure-modern-lever',
    title: 'Building the Modern Lever for Industrial Infrastructure',
    description:
      'A strategic framework for unifying fragmented industrial systems without sacrificing uptime or safety controls.',
    publishedAt: '2026-03-25',
    readingTime: '7 min read',
    category: 'Industrial Systems',
    content: [
      'Industrial transformation fails when digital overlays are added without architectural intent. Durable change starts with operating logic, not tooling fashion.',
      'The strongest approach is phased consolidation: define critical pathways, instrument high-risk nodes, and then sequence system convergence in controlled increments.',
      'This model allows organizations to modernize safely while creating a resilient digital substrate for future automation and analytics.',
    ],
  },
  {
    slug: 'human-capital-flow-systems',
    title: 'Human Capital Flow Systems: Designing for Deep Work',
    description:
      'Why elite teams need cognitively quiet platforms and how flow-state product systems improve output quality.',
    publishedAt: '2026-03-21',
    readingTime: '5 min read',
    category: 'Performance',
    content: [
      'Most team productivity issues are architecture issues in disguise. People are asked to operate in environments built for interruptions, not focus.',
      'Flow-state systems prioritize signal clarity, intentional cadence, and low-friction feedback loops. This unlocks sustainable high-performance behavior.',
      'A modern human capital stack should reduce context switching, not amplify it. That is the difference between activity and meaningful output.',
    ],
  },
];

export function getAllPosts() {
  return [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(date: string, locale = 'en-US') {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
}


