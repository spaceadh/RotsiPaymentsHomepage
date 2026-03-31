import type { Metadata } from 'next';
import Link from 'next/link';
import Layout from '../../src/components/site/Layout';
import { getAllPosts } from '../../src/content/blog';

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Rotsi Solutions journal on software architecture, industrial digital systems, and high-performance operational design.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <Layout>
      <main className="pb-24 pt-24 md:pt-28">
        <section className="py-16 md:py-24">
          <p className="text-xs uppercase tracking-[0.42em] text-gold-accent">Journal</p>
          <h1 className="mt-8 font-heading text-5xl uppercase leading-[0.92] text-midnight-navy md:text-7xl">
            SEO Knowledge Articles
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-midnight-navy/75">
            Strategic engineering perspectives for leaders building resilient infrastructure and high-performance teams.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-8 pb-12 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="border border-midnight-navy/35 bg-white/35 p-8 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-accent">{post.category}</p>
              <h2 className="mt-5 font-heading text-3xl uppercase leading-tight text-midnight-navy">{post.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-midnight-navy/75">{post.description}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-midnight-navy/60">
                {post.publishedAt} • {post.readingTime}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-7 inline-block border border-midnight-navy px-5 py-2 text-xs uppercase tracking-[0.22em] text-midnight-navy transition-colors hover:bg-midnight-navy hover:text-cloud-grey"
              >
                Read Article
              </Link>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  );
}

