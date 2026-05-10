import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteFooter from '../../../src/components/layout/SiteFooter';
import SiteHeader from '../../../src/components/layout/SiteHeader';
import ProjectSummaryCard from '../../../src/components/projects/ProjectSummaryCard';
import Container from '../../../src/components/ui/Container';
import { getProjectBySlug } from '../../../src/content/projects';
import { getServiceBySlug, serviceEntries } from '../../../src/content/services';
import { SITE_NAME, absoluteUrl } from '../../../src/lib/site';

export function generateStaticParams() {
  return serviceEntries.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title} | Rotsi Services`,
    description: service.description,
    keywords: service.keywords,
    alternates: { canonical: service.href },
    openGraph: {
      type: 'website',
      title: `${service.title} | Rotsi Services`,
      description: service.description,
      url: service.href,
    },
  };
}

const serviceNavItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', active: true },
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
];

function Checklist({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-card border border-line bg-white p-7">
      <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-text">{title}</h2>
      <div className="mt-6 grid gap-4">
        {items.map((item) => (
          <div key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-muted">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = service.relatedProjectSlugs
    .map((projectSlug) => getProjectBySlug(projectSlug))
    .filter((project) => Boolean(project));

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
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: absoluteUrl(service.href),
      },
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: absoluteUrl('/'),
    },
    areaServed: {
      '@type': 'Country',
      name: 'Kenya',
    },
    url: absoluteUrl(service.href),
    serviceType: service.shortTitle,
  };

  return (
    <>
      <SiteHeader navItems={serviceNavItems} ctaHref="/contact" ctaLabel="Start A Project" />
      <main>
        <section className="pb-16 pt-[72px]">
          <Container>
            <Link href="/services" className="learn-link mb-8 inline-flex">
              &lt;- Back to services
            </Link>
            <div className="max-w-5xl">
              <div className="eyebrow mb-6">{service.eyebrow}</div>
              <h1 className="max-w-5xl text-[clamp(42px,5.3vw,72px)] font-extrabold leading-[0.98] tracking-[-0.055em] text-text">
                {service.title} for <span className="text-accent">practical business systems</span>.
              </h1>
              <p className="mt-7 max-w-3xl text-[17px] leading-relaxed text-muted md:text-lg">
                {service.summary}
              </p>
            </div>
          </Container>
        </section>

        <section className="border-y border-line bg-surface-2 py-20 md:py-24">
          <Container>
            <div className="grid gap-5 lg:grid-cols-3">
              <Checklist title="What It Solves" items={service.solves} />
              <Checklist title="Who It Fits" items={service.audience} />
              <Checklist title="What Rotsi Builds" items={service.builds} />
            </div>
          </Container>
        </section>

        {relatedProjects.length > 0 ? (
          <section className="py-20 md:py-24">
            <Container>
              <div className="mb-10 max-w-3xl">
                <div className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
                  Related Work
                </div>
                <h2 className="text-[clamp(30px,3vw,44px)] font-extrabold leading-[1.1] tracking-[-0.04em] text-text">
                  Project work connected to this service.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  These case studies show how the service connects to real platforms, workflows, and operating needs.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {relatedProjects.map((project) =>
                  project ? <ProjectSummaryCard key={project.slug} project={project} density="large" /> : null,
                )}
              </div>
            </Container>
          </section>
        ) : null}

        <section className="border-t border-line bg-surface py-20 md:py-24">
          <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
                Start Here
              </div>
              <h2 className="text-[clamp(30px,3vw,44px)] font-extrabold leading-[1.1] tracking-[-0.04em] text-text">
                Bring the workflow. Rotsi will shape the system.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Share the business problem, current tools, and outcome you need from the next build.
              </p>
            </div>
            <Link href="/contact" className="button-primary">
              Contact Rotsi -&gt;
            </Link>
          </Container>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <SiteFooter active="services" />
    </>
  );
}
