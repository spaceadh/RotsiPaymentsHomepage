import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Layout from '../../../src/components/site/Layout';
import { getAllPosts, getPostBySlug } from '../../../src/content/blog';
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

  return (
    <Layout>
      <main className="pb-24 pt-24 md:pt-28">
        <article className="mx-auto max-w-3xl py-16 md:py-24">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-accent">{post.category}</p>
          <h1 className="mt-6 font-heading text-5xl uppercase leading-[0.94] text-midnight-navy md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-midnight-navy/60">
            {post.publishedAt} • {post.readingTime}
          </p>
          <p className="mt-8 text-lg leading-relaxed text-midnight-navy/75">{post.description}</p>
          <div className="mt-10 space-y-8 border-t border-midnight-navy/20 pt-10">
            {post.content.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-midnight-navy/85">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
    </Layout>
  );
}

