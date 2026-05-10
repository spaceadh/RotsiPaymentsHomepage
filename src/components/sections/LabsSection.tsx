import Link from 'next/link';
import { getFeaturedPosts } from '../../content/blog';
import { getFeaturedLabItems, labTypeLabels } from '../../content/labs';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';

export default function LabsSection() {
  const labItems = getFeaturedLabItems().slice(0, 3);
  const posts = getFeaturedPosts('home').slice(0, 2);

  return (
    <section id="labs" className="border-y border-line bg-surface-2 py-20 md:py-24">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-6 max-[720px]:block">
          <SectionHeader
            eyebrow="Studio / Labs"
            title="Internal notes, experiments, and open-source work."
            copy="A public workbench for what Rotsi is building, documenting, testing, and preparing to release."
            align="left"
            className="max-w-3xl"
          />
          <Link className="learn-link max-[720px]:mt-5 max-[720px]:inline-flex" href="/labs">
            Visit Labs -&gt;
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-5 md:grid-cols-3">
            {labItems.map((item) => (
              <article key={item.slug} className="rounded-card border border-line bg-white p-6">
                <div className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
                  {labTypeLabels[item.type]}
                </div>
                <h3 className="mt-5 text-xl font-extrabold leading-tight tracking-[-0.03em] text-text">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-surface px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-card border border-line bg-white p-7">
            <div className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
              Attached Writing
            </div>
            <div className="mt-6 grid gap-5">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block border-b border-line pb-5 last:border-b-0 last:pb-0"
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                    {post.category}
                  </span>
                  <h3 className="mt-2 text-lg font-extrabold leading-tight tracking-[-0.03em] text-text">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{post.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
