import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import RotsiLogo from '../../../src/components/brand/RotsiLogo';
import Layout from '../../../src/components/site/Layout';
import MotionReveal from '../../../src/components/site/MotionReveal';
import SiteFooter from '../../../src/components/site/SiteFooter';
import SiteMobileMenu from '../../../src/components/site/SiteMobileMenu';
import { formatBlogDate, getAllPosts, getPostBySlug } from '../../../src/content/blog';
import { mainNavigationItems } from '../../../src/content/navigation';
import { SITE_NAME, absoluteUrl } from '../../../src/lib/site';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Article Not Found' };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    keywords: post.keywords.join(', '),
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  const mobileNavigationItems = mainNavigationItems('/blog');

  return (
    <Layout>
      <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-background/78 backdrop-blur-2xl shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-6 md:px-12">
          <Link href="/" className="inline-flex w-[132px] text-primary sm:w-[152px]" aria-label="Rotsi home">
            <RotsiLogo className="block w-full" kind="wordmark" title="Rotsi wordmark" />
          </Link>
          <nav className="hidden items-center gap-12 md:flex">
            <Link className="nav-link" href="/#services">
              Services
            </Link>
            <Link className="nav-link" href="/work">
              Work
            </Link>
            <Link className="nav-link nav-link-active font-bold" href="/blog">
              Journal
            </Link>
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
            <SiteMobileMenu items={mobileNavigationItems} />
          </div>
        </div>
      </header>

      <main className="pt-32">
        <section className="mx-auto max-w-[1440px] px-8 pb-20 pt-12 md:px-12 md:pb-24 md:pt-16">
          <MotionReveal>
            <div className="max-w-5xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-3 font-headline text-xs font-bold uppercase tracking-[0.34em] text-tertiary transition-all duration-300 hover:text-primary"
              >
                <span className="material-symbols-outlined text-base" aria-hidden="true">
                  west
                </span>
                Back To Journal
              </Link>
              <span className="mt-8 block font-label text-xs font-bold uppercase tracking-[0.42em] text-tertiary md:text-sm">
                {post.category}
              </span>
              <h1 className="mt-6 max-w-5xl font-headline text-[2.8rem] font-bold leading-[0.92] tracking-[-0.045em] text-primary md:text-[4rem] lg:text-[4.7rem] [text-wrap:balance]">
                {post.title}
              </h1>
              <p className="body-copy mt-8 max-w-3xl text-lg text-secondary md:text-xl">
                {post.description}
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="section-card p-8">
                <span className="font-label text-xs uppercase tracking-[0.3em] text-tertiary">
                  Published
                </span>
                <p className="mt-4 font-headline text-2xl font-bold uppercase tracking-tight text-primary">
                  <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                </p>
              </div>
              <div className="section-card p-8">
                <span className="font-label text-xs uppercase tracking-[0.3em] text-tertiary">
                  Reading Time
                </span>
                <p className="mt-4 font-headline text-2xl font-bold uppercase tracking-tight text-primary">
                  {post.readingTime}
                </p>
              </div>
              <div className="section-card p-8">
                <span className="font-label text-xs uppercase tracking-[0.3em] text-tertiary">
                  Intent
                </span>
                <p className="mt-4 font-headline text-2xl font-bold uppercase tracking-tight text-primary">
                  Practical Search-Led Writing
                </p>
              </div>
            </div>
          </MotionReveal>
        </section>

        <section className="bg-surface-container-low/80 py-24 md:py-32">
          <div className="mx-auto max-w-[1440px] px-8 md:px-12">
            <article className="glass-panel mx-auto max-w-4xl p-8 md:p-12 lg:p-16">
              <div className="space-y-8 border-t border-black/5 pt-8 md:space-y-10 md:pt-10">
                {post.content.map((paragraph, index) => (
                  <MotionReveal key={paragraph} delay={index * 0.05}>
                    <p className="body-copy text-base text-primary/88 md:text-lg">{paragraph}</p>
                  </MotionReveal>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="bg-primary-container py-24 md:py-32">
          <div className="mx-auto max-w-[1440px] px-8 md:px-12">
            <MotionReveal>
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-4xl">
                  <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
                    Continue Reading
                  </span>
                  <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-white md:text-6xl">
                    Explore more notes on systems, workflows, and delivery.
                  </h2>
                  <p className="body-copy mt-8 max-w-2xl text-lg text-white/72">
                    The journal stays close to the work: commerce systems, WhatsApp automations, internal platforms, and the decisions behind them.
                  </p>
                </div>
                <div>
                  <Link href="/blog" className="button-inverse">
                    View All Articles
                  </Link>
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>

      <SiteFooter active="blog" />
    </Layout>
  );
}

