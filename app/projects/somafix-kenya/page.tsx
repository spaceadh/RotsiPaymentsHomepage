import type { Metadata } from 'next';
import SomafixWebsiteCaseStudy from '../../../src/components/projects/SomafixWebsiteCaseStudy';
import { getProjectBySlug } from '../../../src/content/projects';

const project = getProjectBySlug('somafix-kenya');

if (!project) {
  throw new Error('Missing Somafix Kenya project entry');
}

export const metadata: Metadata = {
  title: project.seo.title,
  description: project.seo.description,
  keywords: project.seo.keywords,
  alternates: { canonical: project.href },
  openGraph: {
    type: 'website',
    title: project.seo.title,
    description: project.seo.description,
    url: project.href,
    images: [{ url: project.image.src, alt: project.image.alt }],
  },
};

export default function SomafixKenyaPage() {
  return <SomafixWebsiteCaseStudy project={project} />;
}

