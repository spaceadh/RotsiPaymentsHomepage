import type { Metadata } from 'next';
import Link from 'next/link';
import SiteFooter from '../../src/components/layout/SiteFooter';
import SiteHeader from '../../src/components/layout/SiteHeader';
import Container from '../../src/components/ui/Container';
import { formatBlogDate, getFeaturedPosts } from '../../src/content/blog';
import { getAllLabItems, labTypeLabels } from '../../src/content/labs';

export const metadata: Metadata = {
  title: 'Labs | Internal Notes, Open Source, Experiments And Build Logs',
  description:
    'Rotsi Labs is a public workbench for internal notes, open-source work, product experiments, engineering documents, and build logs from the Rotsi team.',
  alternates: { canonical: '/labs' },
};

const labsNavItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '#open-source', label: 'Open Source' },
  { href: '#notes', label: 'Notes' },
  { href: '#writing', label: 'Writing' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

function statusLabel(status: string) {
  return status.replace('-', ' ');
}

export default function LabsPage() {
  const labItems = getAllLabItems();
  const posts = getFeaturedPosts('labs');
  const openSourceItems = labItems.filter((item) => item.type === 'open-source');
  const noteItems = labItems.filter((item) => item.type !== 'open-source');

  return (
    <>
      <SiteHeader navItems={labsNavItems} ctaHref="/contact" ctaLabel="Build With Us" />
      <main>
        <section className="pb-16 pt-[72px]">
          <Container>
            <div className="max-w-5xl">
              <div className="eyebrow mb-6">Studio / Labs</div>
              <h1 className="max-w-5xl text-[clamp(42px,5.3vw,72px)] font-extrabold leading-[0.98] tracking-[-0.055em] text-text">
                A public workbench for what Rotsi is building and learning.
              </h1>
              <p className="mt-7 max-w-3xl text-[17px] leading-relaxed text-muted md:text-lg">
                Labs is where Rotsi publishes internal notes, experiments, open-source direction,
                engineering documents, build logs, and the thinking behind systems we are testing or preparing to release.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-4">
              {[
                ['Open Source', 'Repos, tools, public code, and developer access.'],
                ['Experiments', 'Products and prototypes still being shaped.'],
                ['Internal Notes', 'Documents, decisions, and operating lessons.'],
                ['Engineering', 'Patterns, architecture, and implementation notes.'],
              ].map(([title, copy]) => (
                <div key={title} className="design-card min-h-[190px]">
                  <h2 className="text-xl font-extrabold tracking-[-0.03em] text-text">{title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{copy}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="open-source" className="border-y border-line bg-surface-2 py-20 md:py-24">
          <Container>
            <div className="mb-10 max-w-3xl">
              <div className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
                Open Source
              </div>
              <h2 className="text-[clamp(30px,3vw,44px)] font-extrabold leading-[1.1] tracking-[-0.04em] text-text">
                Public code, developer access, and open-source releases.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                The GitHub index links to Rotsi Labs repositories, open-source releases, starter kits, demos, and engineering utilities as they become public.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {openSourceItems.map((item) => (
                <article key={item.slug} className="rounded-card border border-line bg-white p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
                      {labTypeLabels[item.type]}
                    </span>
                    <span className="rounded-full bg-surface px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-text">
                      {statusLabel(item.status)}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-text">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{item.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {item.githubUrl ? (
                    <Link href={item.githubUrl} className="learn-link mt-6 inline-flex" target="_blank" rel="noreferrer">
                      View repository -&gt;
                    </Link>
                  ) : null}
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="notes" className="py-20 md:py-24">
          <Container>
            <div className="mb-10 max-w-3xl">
              <div className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
                Notes And Experiments
              </div>
              <h2 className="text-[clamp(30px,3vw,44px)] font-extrabold leading-[1.1] tracking-[-0.04em] text-text">
                Internal documents, product experiments, and engineering thinking.
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {noteItems.map((item) => (
                <article key={item.slug} className="design-card">
                  <div className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
                    {labTypeLabels[item.type]}
                  </div>
                  <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-text">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{item.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="writing" className="border-t border-line bg-surface py-20 md:py-24">
          <Container>
            <div className="grid gap-10 xl:grid-cols-[0.78fr_1.22fr]">
              <div className="max-w-xl">
                <div className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
                  Attached Writing
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-card border border-line bg-white p-7">
                    <div className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
                      {post.category}
                    </div>
                    <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-text">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{post.description}</p>
                    <div className="mt-6 border-t border-line pt-5 text-xs font-bold uppercase tracking-[0.16em] text-muted">
                      <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                      <span> / {post.readingTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
