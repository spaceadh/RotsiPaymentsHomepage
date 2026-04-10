import Link from 'next/link';
import type { ReactNode } from 'react';
import type { ProjectEntry } from '../../content/projects';
import { projectNavigationItems } from '../../content/navigation';
import { SITE_NAME, absoluteUrl } from '../../lib/site';
import RotsiLogo from '../brand/RotsiLogo';
import Layout from '../site/Layout';
import MotionReveal from '../site/MotionReveal';
import SiteFooter from '../site/SiteFooter';
import SiteMobileMenu from '../site/SiteMobileMenu';

type ProjectPageShellProps = {
  project: ProjectEntry;
  children: ReactNode;
};

export default function ProjectPageShell({ project, children }: ProjectPageShellProps) {
  const mobileNavigationItems = projectNavigationItems(project);
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
    <Layout>
      <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-background/78 backdrop-blur-2xl shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-6 md:px-12">
          <Link href="/" className="inline-flex w-[132px] text-primary sm:w-[152px]" aria-label="Rotsi home">
            <RotsiLogo className="block w-full" kind="wordmark" title="Rotsi wordmark" />
          </Link>
          <nav className="hidden items-center gap-10 md:flex">
            {project.sections.map((section) => (
              <a key={section.id} className="nav-link" href={`#${section.id}`}>
                {section.label}
              </a>
            ))}
            <Link className="nav-link" href="/contact">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              aria-label="Contact Rotsi"
              className="material-symbols-outlined hidden text-primary transition-all duration-300 hover:-translate-y-0.5 hover:text-tertiary md:inline-flex"
            >
              north_east
            </Link>
            <SiteMobileMenu items={mobileNavigationItems} title={`${project.title} navigation`} />
          </div>
        </div>
      </header>

      <main className="pt-32">{children}</main>

      <section className="bg-primary-container py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-8 md:px-12">
          <MotionReveal>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-4xl">
                <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
                  Start A Project
                </span>
                <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-white md:text-6xl">
                  {project.ctaTitle}
                </h2>
                <p className="body-copy mt-8 max-w-2xl text-lg text-white/72">
                  {project.ctaDescription}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="button-inverse">
                  Start A Project
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center border border-white/18 px-10 py-5 font-headline text-sm uppercase tracking-widest text-white transition-all duration-300 hover:border-tertiary/40 hover:text-tertiary"
                >
                  Back To Work
                </Link>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <SiteFooter active="work" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Layout>
  );
}
