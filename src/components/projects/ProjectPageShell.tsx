import Link from 'next/link';
import type { ReactNode } from 'react';
import type { ProjectEntry } from '../../content/projects';
import { SITE_NAME, absoluteUrl } from '../../lib/site';
import SiteFooter from '../layout/SiteFooter';
import SiteHeader from '../layout/SiteHeader';
import Button from '../ui/Button';
import Container from '../ui/Container';

type ProjectPageShellProps = {
  project: ProjectEntry;
  children: ReactNode;
};

export default function ProjectPageShell({ project, children }: ProjectPageShellProps) {
  const navItems = [
    ...project.sections.map((section) => ({
      href: `#${section.id}`,
      label: section.label,
    })),
    { href: '/work', label: 'Work' },
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: project.seo.title,
    description: project.seo.description,
    url: absoluteUrl(project.href),
    about: {
      '@type': 'Thing',
      name: project.title,
      description: project.summary,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    keywords: project.seo.keywords.join(', '),
  };

  return (
    <>
      <SiteHeader navItems={navItems} ctaHref="/contact" ctaLabel="Start A Project" />
      <main>{children}</main>
      <section className="bg-text py-20 text-white md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
              Start A Project
            </div>
            <h2 className="text-[clamp(30px,3vw,44px)] font-extrabold leading-[1.1] tracking-[-0.04em]">
              {project.ctaTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/72">
              {project.ctaDescription}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" className="bg-white text-text hover:bg-surface">
              Start A Project
            </Button>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-[22px] py-3.5 text-sm font-bold text-white transition hover:border-accent hover:text-accent"
            >
              Back To Work
            </Link>
          </div>
        </Container>
      </section>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
