import type { Metadata } from 'next';
import NexusCaseStudy from '../../../src/components/projects/NexusCaseStudy';
import { getProjectBySlug } from '../../../src/content/projects';

const project = getProjectBySlug('nexus-internal-platform');

if (!project) {
  throw new Error('Missing Nexus project entry');
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

export default function NexusInternalPlatformPage() {
  return <NexusCaseStudy project={project} />;
}

