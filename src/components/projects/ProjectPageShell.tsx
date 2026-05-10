import Link from 'next/link';
import type { ReactNode } from 'react';
import { formatBlogDate, getPostsForProject } from '../../content/blog';
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
  const relatedPosts = getPostsForProject(project.slug);
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
      {relatedPosts.length > 0 ? (
        <section className="border-t border-line bg-surface py-20 md:py-24">
          <Container>
            <div className="mb-10 max-w-3xl">
              <div className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
                Related Writing
              </div>
              <h2 className="text-[clamp(30px,3vw,44px)] font-extrabold leading-[1.1] tracking-[-0.04em] text-text">
                Notes connected to this work.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {relatedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-card border border-line bg-white p-7">
                  <div className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
                    {post.category}
                  </div>
                  <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-text">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{post.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 border-t border-line pt-5 text-xs font-bold uppercase tracking-[0.16em] text-muted">
                    <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                    <span> / {post.readingTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
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
