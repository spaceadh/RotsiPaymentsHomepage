import type { Metadata } from 'next';
import Link from 'next/link';
import RotsiLogo from '../../src/components/brand/RotsiLogo';
import Layout from '../../src/components/site/Layout';
import MotionReveal from '../../src/components/site/MotionReveal';
import SiteFooter from '../../src/components/site/SiteFooter';
import SiteMobileMenu from '../../src/components/site/SiteMobileMenu';
import { formatBlogDate, getAllPosts } from '../../src/content/blog';
import { mainNavigationItems } from '../../src/content/navigation';

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Practical notes from Rotsi on business automation systems, custom platforms, workflow infrastructure, and the decisions behind useful digital products.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndexPage() {
  const mobileNavigationItems = mainNavigationItems('/blog');
  const posts = getAllPosts();

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
        <section className="mx-auto max-w-[1440px] px-8 pb-20 pt-12 md:px-12 md:pb-28 md:pt-16">
          <MotionReveal>
            <div className="max-w-5xl">
              <span className="mb-6 block font-label text-xs font-bold uppercase tracking-[0.42em] text-tertiary md:text-sm">
                Journal
              </span>
              <h1 className="max-w-5xl font-headline text-[3rem] font-bold leading-[0.9] tracking-[-0.045em] text-primary md:text-[4.2rem] lg:text-[4.9rem] xl:text-[5.25rem]">
                NOTES ON
                <br />
                COMMERCE SYSTEMS,
                <br />
                WORKFLOWS,
                <br />
                AND INTERNAL PLATFORMS.
              </h1>
              <p className="body-copy mt-8 max-w-3xl font-body text-base font-light text-secondary md:text-lg">
                The journal covers the kinds of problems Rotsi actually works on: B2B commerce, WhatsApp workflows, internal operations systems, and the design decisions that make those tools easier to use and easier to trust.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="section-card p-8">
                <span className="font-label text-xs uppercase tracking-[0.3em] text-tertiary">
                  {String(posts.length).padStart(2, '0')}
                </span>
                <p className="mt-4 font-headline text-2xl font-bold uppercase tracking-tight text-primary">
                  Published Articles
                </p>
              </div>
              <div className="section-card p-8">
                <span className="font-label text-xs uppercase tracking-[0.3em] text-tertiary">
                  Focus
                </span>
                <p className="mt-4 font-headline text-2xl font-bold uppercase tracking-tight text-primary">
                  Ecommerce, Automation, Internal Systems
                </p>
              </div>
              <div className="section-card p-8">
                <span className="font-label text-xs uppercase tracking-[0.3em] text-tertiary">
                  Intent
                </span>
                <p className="mt-4 font-headline text-2xl font-bold uppercase tracking-tight text-primary">
                  Useful Writing For Operators And Builders
                </p>
              </div>
            </div>
          </MotionReveal>
        </section>

        <section className="bg-surface-container-low/80 py-28 md:py-36">
          <div className="mx-auto max-w-[1440px] px-8 md:px-12">
            <MotionReveal>
              <div className="mb-16 max-w-3xl">
                <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">
                  Articles
                </span>
                <h2 className="mt-6 font-headline text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary md:text-6xl [text-wrap:balance]">
                  Search-aware writing anchored in real delivery work.
                </h2>
              </div>
            </MotionReveal>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post, index) => (
                <MotionReveal key={post.slug} delay={index * 0.06}>
                  <article className="section-card flex h-full min-h-[27rem] flex-col p-8 md:p-10">
                    <div className="mb-auto">
                      <p className="font-label text-xs uppercase tracking-[0.3em] text-tertiary">
                        {post.category}
                      </p>
                      <h2 className="mt-5 font-headline text-3xl font-bold uppercase leading-tight tracking-[-0.03em] text-primary [text-wrap:balance]">
                        {post.title}
                      </h2>
                      <p className="body-copy mt-5 text-base text-secondary">{post.description}</p>
                    </div>

                    <div className="mt-10 border-t border-black/5 pt-6">
                      <p className="font-body text-xs uppercase tracking-[0.24em] text-secondary">
                        <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                        {' · '}
                        <span>{post.readingTime}</span>
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="mt-6 inline-flex items-center gap-3 font-headline text-sm uppercase tracking-[0.24em] text-primary transition-all duration-300 hover:text-tertiary"
                      >
                        Read Article
                        <span className="material-symbols-outlined text-base" aria-hidden="true">
                          north_east
                        </span>
                      </Link>
                    </div>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter active="blog" />
    </Layout>
  );
}

