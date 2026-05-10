export type BlogSurface = 'home' | 'labs' | 'work';

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  tags: string[];
  featuredOn?: BlogSurface[];
  relatedProjects?: string[];
  keywords: string[];
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'b2b-checkout-psychology-for-repeat-purchasing',
    title: 'B2B checkout psychology for repeat purchasing',
    description:
      'How clarity, control, loyalty mechanics, and re-engagement shape a stronger checkout experience in B2B commerce.',
    publishedAt: '2026-05-10',
    readingTime: '6 min read',
    category: 'Ecommerce Systems',
    tags: ['B2B Ecommerce', 'Checkout Psychology', 'Loyalty Mechanics', 'Repeat Purchasing'],
    featuredOn: ['home', 'labs', 'work'],
    relatedProjects: ['bewama'],
    keywords: [
      'B2B checkout psychology',
      'B2B ecommerce checkout',
      'checkout design for repeat purchasing',
      'loyalty mechanics for B2B ecommerce',
      'B2B ecommerce conversion strategy',
    ],
    content: [
      'Checkout psychology in B2B commerce is not about pushing buyers into careless decisions. The stronger approach is to reduce uncertainty, show value clearly, and give the buyer enough control to move forward with confidence.',
      'B2B buyers often arrive with a job to complete. They may be comparing technical products, checking budgets, preparing a quote request, or buying for a team that will judge the outcome later. The checkout flow has to respect that context.',
      'A good B2B checkout should answer practical questions before they become reasons to leave. What am I buying? Can I request a quote instead of paying now? What happens after I submit? Can I trust the delivery, payment, and follow-up process?',
      'The psychology starts with clarity. Product summaries, cart totals, delivery expectations, payment options, and quote paths should be visible without making the buyer work. When the system feels organized, the buyer is less likely to pause and look for reassurance elsewhere.',
      'Control matters just as much. Wholesale buyers may need different payment methods, minimum order logic, saved account details, or approval-friendly records. If checkout supports those realities, it feels like business infrastructure instead of a retail cart forced onto a commercial buying process.',
      'Loyalty mechanics can make the experience more memorable when they are tied to useful actions. Points for purchases, referrals, reviews, repeat logins, or customer proof work best when the value is concrete and easy to understand, such as a clear discount amount or account benefit.',
      'Re-engagement is part of the same system. Abandoned cart recovery, pending redemptions, post-purchase prompts, and social entry automations help bring buyers back into the workflow after the first visit. The goal is not noise. The goal is to preserve purchase intent and give the next action a clean path.',
      'Recommendations also need discipline in B2B commerce. Companion products, bundle framing, and popularity signals can help buyers complete a more useful order, but only when the suggestions are relevant. Scarcity and social proof should be factual, restrained, and connected to real product behavior.',
      'The best checkout systems treat conversion and retention as one journey. They help the buyer make a decision now, then create reasons to return later through saved context, useful rewards, reliable follow-up, and a platform that feels easier the second time.',
      'For platforms like Bewama, the opportunity is bigger than a polished payment screen. Checkout becomes a commercial operating layer: product discovery, quote handling, loyalty points, cart recovery, and repeat purchasing working together instead of sitting in separate parts of the website.',
    ],
  },
  {
    slug: 'how-to-build-b2b-ecommerce-for-construction-and-industrial-products',
    title: 'How to build a B2B ecommerce platform for construction and industrial products',
    description:
      'What matters when a B2B commerce platform needs to support technical products, search visibility, and repeat purchasing.',
    publishedAt: '2026-03-29',
    readingTime: '6 min read',
    category: 'Ecommerce Systems',
    tags: ['B2B Ecommerce', 'Product SEO', 'Checkout', 'Supplier Platforms'],
    featuredOn: ['home', 'labs', 'work'],
    relatedProjects: ['bewama'],
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
    tags: ['WhatsApp', 'Automation', 'Bookings', 'Customer Routing'],
    featuredOn: ['home', 'labs'],
    relatedProjects: ['kumbusha', 'tena-crm'],
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
    tags: ['Internal Tools', 'Inventory', 'Permissions', 'Operational Reporting'],
    featuredOn: ['labs', 'work'],
    relatedProjects: ['ibiza-internal-platform'],
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

export function getPostsByTag(tag: string) {
  const normalizedTag = tag.toLowerCase();

  return getAllPosts().filter((post) =>
    post.tags.some((postTag) => postTag.toLowerCase() === normalizedTag),
  );
}

export function getFeaturedPosts(surface: BlogSurface) {
  return getAllPosts().filter((post) => post.featuredOn?.includes(surface));
}

export function getPostsForProject(projectSlug: string) {
  return getAllPosts().filter((post) => post.relatedProjects?.includes(projectSlug));
}

export function formatBlogDate(date: string, locale = 'en-US') {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
}
