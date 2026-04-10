import type { Metadata } from 'next';
import BewamaCaseStudy from '../../../src/components/projects/BewamaCaseStudy';
import { getProjectBySlug } from '../../../src/content/projects';

const project = getProjectBySlug('bewama');

if (!project) {
  throw new Error('Missing Bewama project entry');
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

export default function BewamaPage() {
  return <BewamaCaseStudy project={project} />;
}

