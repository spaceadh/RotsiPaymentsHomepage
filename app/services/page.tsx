import type { Metadata } from 'next';
import Link from 'next/link';
import SiteFooter from '../../src/components/layout/SiteFooter';
import SiteHeader from '../../src/components/layout/SiteHeader';
import Container from '../../src/components/ui/Container';
import { serviceEntries } from '../../src/content/services';
import { SITE_NAME, absoluteUrl } from '../../src/lib/site';

export const metadata: Metadata = {
  title: 'Services | Business Automation Systems And Custom Platforms',
  description:
    'Explore Rotsi services across custom software development, automation, integrations, data analytics, ecommerce systems, CRM platforms, and internal tools.',
  alternates: { canonical: '/services' },
  openGraph: {
    type: 'website',
    title: 'Services | Business Automation Systems And Custom Platforms',
    description:
      'Explore Rotsi services across custom software development, automation, integrations, data analytics, ecommerce systems, CRM platforms, and internal tools.',
    url: '/services',
  },
};

const servicesNavItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', active: true },
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
];

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: SITE_NAME,
      item: absoluteUrl('/'),
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: absoluteUrl('/services'),
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader navItems={servicesNavItems} ctaHref="/contact" ctaLabel="Start A Project" />
      <main>
        <section className="pb-16 pt-[72px]">
          <Container>
            <div className="max-w-5xl">
              <div className="eyebrow mb-6">Services</div>
              <h1 className="max-w-5xl text-[clamp(42px,5.3vw,72px)] font-extrabold leading-[0.98] tracking-[-0.055em] text-text">
                Business systems built around <span className="text-accent">real workflows</span>.
              </h1>
              <p className="mt-7 max-w-3xl text-[17px] leading-relaxed text-muted md:text-lg">
                Rotsi builds custom platforms, workflow infrastructure, ecommerce systems, CRM tools,
                data dashboards, and internal software for teams that need clearer operations and better follow-through.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                ['Focus', 'Custom software, automation, analytics, ecommerce, and CRM systems.'],
                ['Approach', 'Start with the business workflow, then build the right software layer.'],
                ['Outcome', 'Systems that improve visibility, follow-up, conversion, and control.'],
              ].map(([title, copy]) => (
                <div key={title} className="design-card min-h-0">
                  <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
                    {title}
                  </span>
                  <p className="mt-4 text-2xl font-extrabold tracking-[-0.03em] text-text">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-line bg-surface-2 py-20 md:py-24">
          <Container>
            <div className="mb-10 max-w-3xl">
              <div className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
                What We Build
              </div>
              <h2 className="text-[clamp(30px,3vw,44px)] font-extrabold leading-[1.1] tracking-[-0.04em] text-text">
                Four service areas, one operating layer.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Each service page explains the problem it solves, who it fits, what Rotsi typically builds,
                and how it connects to real project work.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {serviceEntries.map((service) => (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="group rounded-card border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
                    {service.eyebrow}
                  </div>
                  <h3 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-text">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{service.summary}</p>
                  <span className="learn-link mt-7 inline-flex">View service -&gt;</span>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20 md:py-24">
          <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
                Next Step
              </div>
              <h2 className="text-[clamp(30px,3vw,44px)] font-extrabold leading-[1.1] tracking-[-0.04em] text-text">
                Need a system built around how the business actually works?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Share the workflow, bottleneck, or platform idea. Rotsi will help shape the right build path.
              </p>
            </div>
            <Link href="/contact" className="button-primary">
              Start A Project -&gt;
            </Link>
          </Container>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SiteFooter active="services" />
    </>
  );
}
