export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  keywords: string[];
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-build-b2b-ecommerce-for-construction-and-industrial-products',
    title: 'How to build a B2B ecommerce platform for construction and industrial products',
    description:
      'What matters when a B2B commerce platform needs to support technical products, search visibility, and repeat purchasing.',
    publishedAt: '2026-03-29',
    readingTime: '6 min read',
    category: 'Ecommerce Systems',
    keywords: [
      'B2B ecommerce platform',
      'construction materials ecommerce',
      'industrial products website',
      'ecommerce SEO strategy',
    ],
    content: [
      'A B2B commerce platform for construction or industrial products has to do more than display a catalogue. Buyers are often comparing technical options, checking availability, and trying to make decisions quickly in categories where mistakes are expensive.',
      'That means the platform should support structured navigation, clear product presentation, and search-driven discovery from the start. If products are hard to find or hard to trust, the platform loses commercial value even when the interface looks polished.',
      'Search visibility also matters more than many teams expect. Product pages, supporting articles, and category structure all help capture commercial queries and educational queries that lead into the buying journey.',
      'The strongest platforms connect discovery, conversion, and re-engagement. That includes useful product content, clean cart flows, and systems such as cart recovery or loyalty logic that help move people back into the funnel after the first visit.',
    ],
  },
  {
    slug: 'whatsapp-workflow-automation-for-bookings-reminders-and-customer-routing',
    title: 'WhatsApp workflow automation for bookings, reminders, and customer routing',
    description:
      'Why WhatsApp works well as an operating layer for reminders, bookings, and customer handoff workflows.',
    publishedAt: '2026-03-25',
    readingTime: '7 min read',
    category: 'Workflow Automation',
    keywords: [
      'WhatsApp workflow automation',
      'WhatsApp booking system',
      'WhatsApp reminders for managers',
      'customer routing automation',
    ],
    content: [
      'WhatsApp is already where many teams and customers communicate, which makes it a practical channel for workflow automation. The value comes from using it to prompt action, not from automating messages for their own sake.',
      'For bookings, reminders, and customer routing, the best workflows are simple on the surface. A user sends an inquiry, the system responds with the next useful step, and the team behind the scenes gets cleaner inputs and better timing.',
      'Manager reminders work in a similar way. Instead of relying on memory for milestones or follow-up, the system can notify the right person in advance and present a small set of actions that are easy to act on immediately.',
      'The important design decision is always the same: connect the message to the workflow. If the conversation does not lead into a structured next step, automation creates noise instead of operational value.',
    ],
  },
  {
    slug: 'what-an-internal-platform-should-track-for-sales-and-inventory-teams',
    title: 'What an internal platform should track for sales and inventory teams',
    description:
      'A practical look at customer records, stock movement, permissions, and reporting in internal business systems.',
    publishedAt: '2026-03-21',
    readingTime: '5 min read',
    category: 'Internal Platforms',
    keywords: [
      'internal platform for inventory',
      'customer records system',
      'role based permissions software',
      'inventory reporting platform',
    ],
    content: [
      'An internal platform should start with continuity. Customer and operational information should stay with the business, not with whichever staff member happens to manage the account today.',
      'From there, inventory visibility becomes the next priority. Teams need to see stock moving in, moving out, being returned, or being marked as spoiled without stitching the story together from separate tools.',
      'Permissions matter for the same reason. A good internal system lets staff do their work while still protecting sensitive actions behind the right approval flow or access level.',
      'Reporting becomes more useful when the platform already tracks the right events. Instead of chasing data after the fact, teams can review customer activity, stock movement, and operational patterns from one controlled system.',
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

